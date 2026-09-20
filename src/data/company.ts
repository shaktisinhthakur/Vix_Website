/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Every contact detail, social link and SEO default on the site
 *  reads from here. Change it once and it updates everywhere:
 *  Footer, Contact page, Privacy, Terms, page titles, OG tags,
 *  sitemap references and structured data.
 * ─────────────────────────────────────────────────────────────
 */

export const company = {
  /** Legal / display name used in copy, titles and structured data. */
  name: 'Ideavix',

  /** One-line description. Used as the default meta description. */
  tagline: 'A technology studio turning ambitious ideas into intelligent digital products.',

  description:
    'Ideavix is a technology studio building applied AI, software and digital products — from AI agents and RAG systems to SaaS platforms and cloud infrastructure.',

  /**
   * Production URL, no trailing slash.
   * Used for canonical links, Open Graph URLs and the sitemap.
   * TODO: replace with your real domain before deploying.
   */
  url: 'https://www.ideavix.in',

  /** Primary inbox. Shown on Contact + Privacy and used by the mailto fallback. */
  email: 'hello@ideavix.com',

  /**
   * Phone number. Leave as an empty string to hide it everywhere.
   * `display` is what users see, `href` is the tel: value (digits and + only).
   */
  phone: {
    display: '',
    href: '',
  },

  /** Shown next to the map pin on the Contact page. */
  location: 'Remote-first · Available worldwide',

  /** Optional postal address. Leave empty to hide. */
  address: '',

  /**
   * Social profiles. Set a value to an empty string to hide that icon
   * instead of linking to a bare homepage.
   */
  social: {
    linkedin: '',
    github: '',
    x: '',
    instagram: '',
  },

  /** Year the copyright notice starts from. */
  foundedYear: 2026,

  /**
   * The blog that Insights posts link out to.
   * `url` must have no trailing slash. Each insight in src/data/site.ts
   * supplies an `externalSlug` that is appended to it.
   * TODO: replace with your real Hashnode (or other) blog URL.
   */
  blog: {
    name: "The Developer's Notebook",
    url: 'https://blogbysameer.hashnode.dev',
  },

  /** Image used for link previews (must live in /public). */
  ogImage: '/logo.png',
} as const;

/** Full URL of an insight's original post. */
export const blogPostUrl = (externalSlug: string) => `${company.blog.url}/${externalSlug}`;

export const currentYear = new Date().getFullYear();

/** Social links with a real URL, ready to render. */
export const activeSocials = (
  [
    { key: 'linkedin', label: 'LinkedIn', href: company.social.linkedin },
    { key: 'github', label: 'GitHub', href: company.social.github },
    { key: 'x', label: 'X', href: company.social.x },
    { key: 'instagram', label: 'Instagram', href: company.social.instagram },
  ] as const
).filter((s) => s.href.trim().length > 0);