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
  | 'Community Project'
  | 'Other';

export const CATEGORIES: ProjectCategory[] = [
  'Open Source',
  'Side Business',
  'Game',
  'Twitch Tool',
  'Community Project',
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
  {
    name: 'ComfyKit',
    description:
      'A toolkit and starter kit for building Twitch interactive overlays quickly with minimal setup.',
    url: 'https://github.com/instafluff/ComfyKit',
    category: 'Open Source',
    status: 'maintained',
  },
  {
    name: 'ComfyLights',
    description:
      'Control smart lights like Hue and LIFX directly from Twitch chat commands during live streams.',
    url: 'https://github.com/instafluff/ComfyLights',
    category: 'Open Source',
    status: 'maintained',
  },
  {
    name: 'ComfyTypes',
    description:
      'TypeScript type definitions for the Comfy ecosystem to make integrations safer and easier to build.',
    url: 'https://github.com/instafluff/ComfyTypes',
    category: 'Open Source',
    status: 'maintained',
  },
  {
    name: 'ComfyTwitch',
    description:
      'Simplified Twitch API wrapper for common streaming tasks and everyday channel automation.',
    url: 'https://github.com/instafluff/ComfyTwitch',
    category: 'Open Source',
    status: 'maintained',
  },
  {
    name: 'ComfyDiscord',
    description:
      'Discord bot framework in the Comfy style: simple, approachable, and minimal boilerplate.',
    url: 'https://github.com/instafluff/ComfyDiscord',
    category: 'Open Source',
    status: 'maintained',
  },
  {
    name: 'ComfySheets',
    description:
      'Read and write Google Sheets from Node.js with a dead-simple API for quick automations.',
    url: 'https://github.com/instafluff/ComfySheets',
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
  {
    name: 'Notecards.to',
    description:
      'Simple, shareable digital notecards for quick communication and lightweight collaboration.',
    url: 'https://notecards.to',
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
  {
    name: 'WhoSaidIt',
    description:
      'Party game where players guess who said what, designed for streams and group play.',
    url: 'https://github.com/instafluff/WhoSaidIt',
    category: 'Game',
    status: 'maintained',
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
  {
    name: 'TwitchPaint',
    description:
      'Collaborative pixel art canvas controlled by Twitch chat where viewers paint together in real time.',
    url: 'https://github.com/instafluff/TwitchPaint',
    category: 'Twitch Tool',
    status: 'maintained',
  },
  {
    name: 'EarlyBirdBot',
    description:
      'Twitch bot that rewards early viewers and tracks who shows up first in chat.',
    url: 'https://github.com/instafluff/EarlyBirdBot',
    category: 'Twitch Tool',
    status: 'maintained',
  },
  {
    name: 'BitsToSpeech',
    description:
      'Converts Twitch Bits cheers into text-to-speech alerts with customizable voices.',
    url: 'https://github.com/instafluff/BitsToSpeech',
    category: 'Twitch Tool',
    status: 'maintained',
  },
  {
    name: 'ClippyAssistant',
    description:
      'The legendary Clippy paperclip reimagined as a Twitch stream assistant overlay.',
    url: 'https://github.com/instafluff/ClippyAssistant',
    category: 'Twitch Tool',
    status: 'maintained',
  },
  {
    name: 'TrickOrTreatBot',
    description:
      'Halloween-themed Twitch chat bot with seasonal trick-or-treat games for the community.',
    url: 'https://github.com/instafluff/TrickOrTreatBot',
    category: 'Twitch Tool',
    status: 'archived',
  },
  {
    name: 'ChompSquad',
    description:
      'Community feeding game where Twitch chat works together to feed virtual pets.',
    url: 'https://github.com/instafluff/ChompSquad',
    category: 'Twitch Tool',
    status: 'maintained',
  },
  {
    name: 'InstaBot',
    description:
      'General-purpose Twitch bot with modular commands, timers, and chat games.',
    url: 'https://github.com/instafluff/InstaBot',
    category: 'Twitch Tool',
    status: 'maintained',
  },
  {
    name: 'FollowerTrain',
    description:
      'Follower train tracker and alert overlay for Twitch streams.',
    url: 'https://github.com/instafluff/FollowerTrain',
    category: 'Twitch Tool',
    status: 'maintained',
  },
  {
    name: 'TwitchCardsBot',
    description:
      'Trading card game played entirely through Twitch chat.',
    url: 'https://github.com/instafluff/TwitchCardsBot',
    category: 'Twitch Tool',
    status: 'maintained',
  },

  // ---- Community Projects ----
  {
    name: 'InsatfluffHQ',
    description:
      'Community headquarters app: a dashboard for managing Instafluff community events and projects.',
    url: 'https://github.com/instafluff/InsatfluffHQ',
    category: 'Community Project',
    status: 'maintained',
  },
  {
    name: 'CommunityAPIs',
    description:
      'Collection of fun APIs built live during community streams, including playful endpoints like random facts and quotes.',
    url: 'https://github.com/instafluff/CommunityAPIs',
    category: 'Community Project',
    status: 'maintained',
  },
  {
    name: 'StreamAvatars',
    description:
      'Custom animated avatars that walk around on stream and respond to chat-driven interactions.',
    url: 'https://github.com/instafluff/StreamAvatars',
    category: 'Community Project',
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
