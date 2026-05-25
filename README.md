# Clarusto Group Website

Production-ready [Next.js 15](https://nextjs.org/) website for Clarusto Group — a globally connected business ecosystem spanning technology and logistics.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- Optimized images via `next/image`
- SEO: metadata API, `sitemap.xml`, `robots.txt`
- Security headers in `next.config.ts`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm start`    | Run production server    |
| `npm run lint` | Run ESLint               |

## Pages

| Route          | Description                    |
|----------------|--------------------------------|
| `/`            | Home                           |
| `/about`       | About Clarusto Group           |
| `/technology`  | Technology division            |
| `/logistics`   | Logistics division             |
| `/insights`    | News & insights                |
| `/contact`     | Contact form                   |

## Deployment

Deploy to [Vercel](https://vercel.com), or any Node.js host:

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL=https://clarusto.com` if using environment-based configuration.

### Contact form

The `/api/contact` route accepts form submissions. Wire it to your email provider (Resend, SendGrid, etc.) using environment variables in production.

## Project structure

```
src/
├── app/              # Routes, layout, global styles
├── components/       # React components
├── hooks/            # Client-side effects (scroll, counters, etc.)
└── lib/              # Site config and shared constants
```
