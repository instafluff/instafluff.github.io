import { getAllPosts } from '@/lib/posts';

export const dynamic = 'force-static';

const SITE_URL = 'https://www.instafluff.tv';

export async function GET() {
  const posts = getAllPosts();

  const staticPages = ['', '/blog', '/projects', '/about'];

  const urls = [
    ...staticPages.map(
      (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
    ),
    ...posts.map(
      (post) => `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    ),
  ].join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
