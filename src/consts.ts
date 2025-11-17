import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'kznava',
  description:
    'Personal website of kznava - Developer, Programmer, and Tech Enthusiast. Exploring code, projects, and ideas.',
  href: 'https://kznava.dev',
  author: 'kznava',
  locale: 'en-US',
  featuredPostCount: 1,
  postsPerPage: 6,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/kznava',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/juan-ignacio-navarro-maza',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:navarro1993juan@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
