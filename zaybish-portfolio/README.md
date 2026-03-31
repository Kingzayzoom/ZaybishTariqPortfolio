# Zaybish Tariq Portfolio

Personal portfolio for Zaybish Tariq, inspired by editorial developer portfolios and rebuilt around real project case studies, experience, and contact flows.

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- next-themes

## Local Development

Run commands from the app folder, not the wrapper repo root:

```bash
cd zaybish-portfolio
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Optional Formspree Setup

To connect the contact form, add this to `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Without that variable, the contact page still renders and points visitors to direct email.

## Deploy

Designed for Vercel deployment.
