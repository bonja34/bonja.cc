import pfp from './assets/pfp.jpg';
import banner from './assets/banner.png';

export const site = {
  name: 'bonja.cc',
  url: 'https://bonja.cc',
  description: "bonja's personal site.",
  ogImage: 'https://bonja.cc/banner.png',
  personImage: 'https://bonja.cc/pfp.jpg',
  lang: 'en',
  locale: 'en_US',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterHandle: undefined as string | undefined,
} as const;

export const pages = {
  privacy: {
    title: `privacy - ${site.name}`,
    description: `what ${site.name} collects and why, in plain language.`,
  },
} as const;

export const user = {
  name: 'bonja',
  pronunciation: 'bon·ja',
  pronunciationHint: '"bon" like "bond", "ja" like "jar" without the r',
  pfp,
  banner,
  about: `hi, i'm bonja, im currently working on reverse engineering`,
  projects: [
    'bonja34/bonja.cc',
  ] as string[],
  discord: {
    userId: '470846721564344325',
  },
} as const;

export const guestbook = {
  nameBlacklist: [
    'admin',
    'administrator',
    'moderator',
    'mod',
    'system',
    'root',
    'support',
    'staff',
    'bonja',
    'bonja34',
  ],
} as const;