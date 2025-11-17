<div align="center">

# kznava.dev

**Personal Website & Developer Portfolio**

[![Netlify Status](https://api.netlify.com/api/v1/badges/8fb50de4-9d70-4fe4-bf6a-381a6eded652/deploy-status)](https://app.netlify.com/projects/kznava/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-0066ff.svg?style=for-the-badge)](LICENSE)

[Live Site](https://kznava.dev) • [Blog](https://kznava.dev/blog) • [Projects](https://kznava.dev/projects)

</div>

A modern, minimalistic developer portfolio built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/). Features a vibrant blue theme, smooth animations, and comprehensive technical writing capabilities.

Built on top of the excellent [astro-erudite](https://github.com/jktrn/astro-erudite) template by [@jktrn](https://github.com/jktrn), this site has been extensively customized to reflect my personal brand and development philosophy.

## About This Project

This is my personal website and portfolio, serving as a hub for my blog posts, projects, and professional information. The site showcases my journey as a Software Developer and Information System Manager with over 9 years of experience in the .NET ecosystem and enterprise software development.

## Key Features

### Design & UX
- **Vibrant Blue Theme**: Comprehensive blue color palette using OKLCH color space for better perceptual uniformity
- **Smooth Animations**: Sequential entrance animations with fade-in, slide-up, scale-in effects
- **Animated Background**: Subtle gradient animations and floating elements that respect light/dark modes
- **Reading Progress Bar**: Visual indicator showing reading progress on blog posts
- **Back to Top Button**: Convenient navigation for long-form content
- **Enhanced 404 Page**: Custom error page maintaining the site's aesthetic

### Components
- **Reusable TechSection**: Display technology stacks with icons and hover effects
- **WorkExperience Timeline**: Professional history with timeline visualization
- **Enhanced Cards**: Project and blog cards with gradient backgrounds and glowing borders
- **Avatar Integration**: Personal branding throughout the site

### Technical Features
- Built on [Astro](https://astro.build/) with Islands architecture for optimal performance
- [shadcn/ui](https://ui.shadcn.com/) components with [Tailwind CSS](https://tailwindcss.com/) for styling
- [MDX](https://mdxjs.com/) for rich blog content with code syntax highlighting via [Expressive Code](https://expressive-code.com/)
- View Transitions for smooth navigation
- SEO optimized with Open Graph tags
- RSS feed and sitemap generation
- Full light/dark mode support

## Technology Stack

| Category   | Technology                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------- |
| Framework  | [Astro](https://astro.build/)                                                               |
| Styling    | [Tailwind CSS](https://tailwindcss.com)                                                     |
| Components | [shadcn/ui](https://ui.shadcn.com/)                                                         |
| Content    | [MDX](https://mdxjs.com/)                                                                   |
| Icons      | [Lucide Icons](https://lucide.dev/) via [astro-icon](https://www.astroicon.dev/)           |
| Code       | [Expressive Code](https://expressive-code.com/), [Shiki](https://github.com/shikijs/shiki) |
| Deployment | [Vercel](https://vercel.com) / Your preferred hosting                                       |

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kznava/kznava-website.git
   cd kznava-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

### Available Commands

| Command            | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| `npm run dev`      | Start development server                                        |
| `npm run build`    | Build the project for production                                |
| `npm run preview`  | Preview the production build locally                            |
| `npm run astro`    | Run Astro CLI commands                                          |
| `npm run prettier` | Format all files using [Prettier](https://prettier.io/)         |

## Project Structure

```bash
kznava-website/
├── public/
│   └── static/           # Static assets (images, avatar, etc.)
├── src/
│   ├── components/       # Reusable Astro/React components
│   │   ├── TechSection.astro
│   │   ├── WorkExperience.astro
│   │   ├── BlogCard.astro
│   │   └── ...
│   ├── content/          # Content collections
│   │   ├── blog/         # Blog posts (MDX)
│   │   ├── projects/     # Project entries
│   │   └── authors/      # Author profiles
│   ├── layouts/          # Page layouts
│   ├── pages/            # File-based routing
│   ├── styles/           # Global styles and animations
│   │   └── global.css    # Color palette, animations
│   └── consts.ts         # Site configuration
└── astro.config.ts       # Astro configuration
```

## Customization

### Site Configuration

The `src/consts.ts` file contains site metadata, navigation, and social links:

```ts
export const SITE: Site = {
  title: 'kznava',
  description: 'Personal website of kznava...',
  href: 'https://kznava.dev',
  featuredPostCount: 1,
  postsPerPage: 6,
}

export const NAV_LINKS: SocialLink[] = [
  { href: '/blog', label: 'blog' },
  { href: '/projects', label: 'projects' },
  { href: '/about', label: 'about' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/kznava', label: 'GitHub' },
  { href: 'https://linkedin.com/in/juan-ignacio-navarro-maza', label: 'LinkedIn' },
  // ...
]
```

### Color Palette

The site uses a custom blue color palette defined in `src/styles/global.css` using [OKLCH format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch):

```css
:root {
  --background: oklch(0.99 0.008 260);
  --foreground: oklch(0.15 0 0);
  --primary: oklch(0.50 0.20 260);     /* Blue */
  --ring: oklch(0.60 0.20 260);
  --border: oklch(0.88 0.025 260);
  /* ... */
}

[data-theme='dark'] {
  --background: oklch(0.13 0.015 260);
  --foreground: oklch(0.98 0 0);
  --primary: oklch(0.70 0.20 260);     /* Lighter blue */
  --ring: oklch(0.65 0.20 260);
  --border: oklch(0.25 0.04 260);
  /* ... */
}
```

The blue theme is applied consistently throughout with specific values like:
- `#0066ff` / `#338aff` for gradients
- `oklch(0.50 0.20 260)` for primary actions
- Reduced opacity for subtle background animations

### Personal Customization

To make this your own:

1. **Update personal info** in `src/consts.ts`
2. **Replace avatar** in `public/static/avatar.jpg`
3. **Modify colors** in `src/styles/global.css`
4. **Update about page** in `src/pages/about.astro` with your experience
5. **Add your projects** in `src/content/projects/`
6. **Write blog posts** in `src/content/blog/`
7. **Update favicons** in `public/` directory and `src/components/Favicons.astro`

## Content Creation

### Blog Posts

Create new blog posts in `src/content/blog/` as MDX files:

```mdx
---
title: 'Your Post Title'
description: 'A brief description'
date: 2025-01-17
tags: ['astro', 'web-development']
image: './banner.png'
authors: ['kznava']
---

Your content here...
```

See the [Building kznava.dev](https://kznava.dev/blog/building-kznava-dev) post as an example.

### Author Profile

Update your author profile in `src/content/authors/kznava.md`:

```md
---
name: 'Juan Navarro'
avatar: '/static/avatar.jpg'
bio: 'Software Developer & Information System Manager'
website: 'https://kznava.dev'
github: 'https://github.com/kznava'
linkedin: 'https://linkedin.com/in/juan-ignacio-navarro-maza'
mail: 'youremail@gmail.com'
---
```

### Projects

Add projects in `src/content/projects/` as Markdown files:

```md
---
name: 'Your Project'
description: 'Brief project description'
tags: ['C#', '.NET', 'Azure']
link: 'https://github.com/yourusername/project'
startDate: '2024-01-01'
endDate: '2024-12-31'
---
```

Images are optional. Projects are displayed on the `/projects` page and can be featured on the about page.

## Deployment

This site can be deployed to any static hosting platform. Recommended options:

- **Vercel** (easiest for Astro)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

For Vercel:

```bash
npm run build
# Deploy the dist/ folder
```

## Credits

Built with [Astro](https://astro.build/), based on the [astro-erudite](https://github.com/jktrn/astro-erudite) template by [@jktrn](https://github.com/jktrn).

Special thanks to the Astro community and all the open-source projects that made this possible.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built by [kznava](https://github.com/kznava) | [LinkedIn](https://linkedin.com/in/juan-ignacio-navarro-maza)
