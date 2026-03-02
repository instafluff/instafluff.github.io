import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
  draft?: boolean;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string; // raw MDX string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

function getMdxFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'));
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Return metadata for every published post, sorted newest-first. */
export function getAllPosts(): PostMeta[] {
  const files = getMdxFiles();

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf-8');
      const { data, content } = matter(raw);
      const fm = data as PostFrontmatter;

      // Skip drafts in production
      if (fm.draft && process.env.NODE_ENV === 'production') return null;

      return {
        slug,
        title: fm.title,
        date: fm.date,
        description: fm.description,
        tags: fm.tags ?? [],
        coverImage: fm.coverImage,
        draft: fm.draft,
        readingTime: readingTime(content).text,
      } satisfies PostMeta;
    })
    .filter(Boolean) as PostMeta[];

  // Sort newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

/** Return a single post by slug, including raw MDX content. */
export function getPostBySlug(slug: string): Post | null {
  const filename = `${slug}.mdx`;
  const filepath = path.join(CONTENT_DIR, filename);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;

  return {
    slug,
    title: fm.title,
    date: fm.date,
    description: fm.description,
    tags: fm.tags ?? [],
    coverImage: fm.coverImage,
    draft: fm.draft,
    readingTime: readingTime(content).text,
    content,
  };
}

/** Return all unique tags across published posts. */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

/** Return all unique slugs (for generateStaticParams). */
export function getAllSlugs(): string[] {
  return getMdxFiles().map((f) => f.replace(/\.mdx$/, ''));
}
