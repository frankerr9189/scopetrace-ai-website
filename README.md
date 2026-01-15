# ScopeTraceAI Marketing Website

A production-ready marketing website for ScopeTraceAI built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js** (App Router) - Latest stable version
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Modern, readable typography
- **Resend** - Email notifications
- **Minimal dependencies** - Lightweight and fast

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
SLACK_WEBHOOK_URL=your_slack_webhook_url
RESEND_API_KEY=your_resend_api_key
RESEND_TO_EMAIL=your_email@example.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

You can use `.env.example` as a template:

```bash
cp .env.example .env.local
```

### Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # Lead submission API endpoint
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout with Header/Footer
│   ├── page.tsx                   # Home page
│   ├── product/
│   │   └── page.tsx               # Product overview page
│   ├── how-it-works/
│   │   └── page.tsx               # How it works page
│   ├── security/
│   │   └── page.tsx               # Security page
│   └── pricing/
│       └── page.tsx               # Pricing page
├── components/
│   ├── Header.tsx                 # Global header with navigation
│   ├── Footer.tsx                 # Global footer
│   ├── MoreInfoModal.tsx         # Modal component
│   └── LeadForm.tsx              # Lead form component
├── lib/
│   ├── slack.ts                  # Slack notification utility
│   └── email.ts                  # Email notification utility (Resend)
└── public/                        # Static assets
```

## Pages & Routes

- `/` - Home page
- `/product` - Product overview with capabilities section
- `/how-it-works` - How it works page
- `/security` - Security & Data Protection page
- `/pricing` - Pricing page
- `/api/lead` - POST endpoint for lead submissions

## Features

### Header Navigation

- Product dropdown (Overview, Capabilities)
- How It Works
- Security
- Pricing
- Sign in (external link)
- "More information" CTA button

### Lead Form Modal

- Opens when clicking "More information" button
- Validates required fields (first name, last name, work email, role)
- Submits to `/api/lead` endpoint
- Shows success confirmation
- Does not navigate away on success

### API Endpoint

The `/api/lead` endpoint:
- Accepts JSON with all form fields
- Sends Slack notification (if configured)
- Sends email notification via Resend (if configured)
- Returns success even if one notification method fails
- Returns `{ ok: true }` on success

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The site will automatically build and deploy on every push to the main branch.

## Building for Production

```bash
npm run build
npm start
```

## License

Private - All rights reserved
