// =============================================================================
// Projects Data
// =============================================================================
// Add, remove, or reorder projects here. The Projects page reads from this file.

export interface Project {
  name: string;
  description: string;
  url: string;
  category: ProjectCategory;
  featured?: boolean;
  status?: 'active' | 'maintained' | 'archived' | 'beta';
}

export type ProjectCategory =
  | 'Open Source'
  | 'Side Business'
  | 'Game'
  | 'Twitch Tool'
  | 'Other';

export const CATEGORIES: ProjectCategory[] = [
  'Open Source',
  'Side Business',
  'Game',
  'Twitch Tool',
  'Other',
];

export const projects: Project[] = [
  // ---- Open Source ----
  {
    name: 'ComfyJS',
    description:
      'The comfiest Twitch chat library for JavaScript. Simple API, easy setup, used by thousands of streamers and developers worldwide.',
    url: 'https://github.com/instafluff/ComfyJS',
    category: 'Open Source',
    featured: true,
    status: 'active',
  },
  {
    name: 'ComfyDB',
    description:
      'A simple, file-based database for Node.js. No setup, no dependencies, just key-value storage that works.',
    url: 'https://github.com/instafluff/ComfyDB',
    category: 'Open Source',
    status: 'maintained',
  },
  {
    name: 'ComfyWeb',
    description:
      'Build simple web pages with a comfy API. Minimal boilerplate web framework for quick prototyping.',
    url: 'https://github.com/instafluff/ComfyWeb',
    category: 'Open Source',
    status: 'maintained',
  },
  {
    name: 'ComfyCommands',
    description:
      'Easy custom chat commands for Twitch. Define commands in JSON, let ComfyCommands handle the rest.',
    url: 'https://github.com/instafluff/ComfyCommands',
    category: 'Open Source',
    status: 'maintained',
  },
  {
    name: 'ComfyTimer',
    description:
      'Stream timer overlay for Twitch — customizable countdown and count-up timers.',
    url: 'https://github.com/instafluff/ComfyTimer',
    category: 'Open Source',
    status: 'maintained',
  },

  // ---- Side Businesses ----
  {
    name: 'ComfySend',
    description:
      'Simple, secure file sharing — no account needed. Send files to anyone with a link. Fast and private.',
    url: 'https://comfysend.com',
    category: 'Side Business',
    featured: true,
    status: 'active',
  },
  {
    name: 'MediaOptimizer',
    description:
      'Batch-optimize images and media for the web. Fast, free, and runs entirely in the browser.',
    url: 'https://mediaoptimizer.io',
    category: 'Side Business',
    featured: true,
    status: 'active',
  },
  {
    name: 'LooThru',
    description:
      'Background removal tool powered by AI. Remove backgrounds from images instantly in the browser.',
    url: 'https://loothru.com',
    category: 'Side Business',
    status: 'active',
  },
  {
    name: 'Approvals.to',
    description:
      'Simple approval workflows for teams. Get sign-offs without the overhead of heavyweight tools.',
    url: 'https://approvals.to',
    category: 'Side Business',
    status: 'active',
  },

  // ---- Games ----
  {
    name: 'PixelPlush',
    description:
      'Interactive stream pets and games that live on your Twitch stream. Community-built, endlessly fun.',
    url: 'https://pixelplush.dev',
    category: 'Game',
    featured: true,
    status: 'active',
  },
  {
    name: 'Sleepless in Stardew',
    description:
      'A community-driven Stardew Valley mod born from late-night Twitch streams.',
    url: 'https://github.com/instafluff/SleeplessInStardew',
    category: 'Game',
    status: 'archived',
  },

  // ---- Twitch Tools ----
  {
    name: 'Chat Translator',
    description:
      'Real-time translation overlay for Twitch chat. Break language barriers and connect with viewers worldwide.',
    url: 'https://github.com/instafluff/ChatTranslator',
    category: 'Twitch Tool',
    status: 'maintained',
  },
  {
    name: 'Clippy Raid',
    description:
      'Fun raid notification overlay featuring everyone\'s favorite paperclip assistant.',
    url: 'https://github.com/instafluff/ClippyRaid',
    category: 'Twitch Tool',
    status: 'maintained',
  },
  {
    name: 'ReadGood',
    description:
      'Text-to-speech for Twitch chat — let your viewers\' messages be heard out loud on stream.',
    url: 'https://github.com/instafluff/ReadGood',
    category: 'Twitch Tool',
    status: 'maintained',
  },

  // ---- Other ----
  {
    name: 'The Spellbook Cookbook',
    description:
      'A real, published cookbook with recipes inspired by fantasy and gaming. Yes, Raphael wrote a cookbook.',
    url: '#',
    category: 'Other',
    status: 'active',
  },
];
