# Scholar in Chambers

A premium personal-intellectual website for legal thought, public meaning, civic doctrine, essays, institutional imagination, and serious public correspondence.

## Upgrade included

This version adds **Letters from Chambers** as a connected brand section under the wider Paul Magaji intellectual and professional brand.

Brand architecture:

```text
Paul Magaji Brand
→ Scholar in Chambers
→ Letters from Chambers
→ Future specialist chambers
```

New route:

```text
/letters-from-chambers
```

The new page includes:

- Hero section
- What It Is section
- Chamber as Public Desk section
- Newsletter subscription placeholder
- Letter category cards
- Sample letter archive
- Future specialist chambers section
- Editorial/legal education disclaimer

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Deploy on Vercel

```bash
npm install
npm run build
vercel
```

On Termux, if `npm run build` fails because of Next.js SWC/Android issues, push to GitHub and let Vercel build remotely.

## What to edit first

- `lib/content.ts` — change essay titles, letter titles, categories, contact email, and platform copy.
- `app/page.tsx` — homepage structure.
- `app/letters-from-chambers/page.tsx` — Letters from Chambers page.
- `components/Letters.tsx` — letter cards, categories, newsletter placeholder, specialist chambers.
- `app/globals.css` — full visual design.

## Brand direction

Scholar in Chambers should feel like a premium chamber archive, not a casual blog: legal, literary, restrained, thoughtful, civic, and institution-minded.

Letters from Chambers should feel like a serious legal-intellectual newsletter: correspondence, public desk, legal reflection, civic guidance, institutional memory, judgment, dignity, society, law, justice, and interpretation.
