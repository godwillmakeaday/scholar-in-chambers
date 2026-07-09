# Scholar in Chambers

A premium Next.js website for the Paul Magaji intellectual and professional brand.

## Current stage

**Scholar in Chambers 2.1 — Letters from Chambers Archive Engine**

The site now treats **Scholar in Chambers** as the intellectual house and **Letters from Chambers** as the recurring public correspondence/newsletter arm.

## Added in this upgrade

- `/letters-from-chambers` archive landing page
- Individual letter routes under `/letters-from-chambers/[slug]`
- Reusable letter data model in `lib/letters.ts`
- Six starter public letter pages
- Latest Letters section on the homepage
- Linked archive cards
- Breadcrumbs, reading time, category labels, editorial note, and previous/next navigation
- Newsletter placeholder block under each letter
- `.npmrc` registry setting and Node `22.x` engine for smoother Vercel deployment

## Starter letters

1. Letter to the Citizen Facing a Police Invitation
2. Letter to the Business Owner Who Signs Without Reading
3. Letter to the Young Lawyer Learning Judgment
4. Letter to the Family Holding Land Without Records
5. Letter to the Public Officer and the Burden of Power
6. Letter to the Client Who Thinks Law Begins in Court

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Termux / Vercel note

If local builds fail in Termux because of Next.js native compiler issues, push to GitHub and let Vercel build online.

Recommended deployment flow:

```bash
git add .
git commit -m "Add Letters from Chambers archive engine"
git push
```

Vercel should redeploy automatically.

## Brand principle

Scholar in Chambers gives depth. Letters from Chambers gives continuity. Specialist Chambers gives expansion.

## Scholar in Chambers 2.2 — Letters Publication & Issue System

This upgrade turns **Letters from Chambers** into a more formal legal-intellectual publication layer.

Added features:

- Issue-number support in `lib/letters.ts`
- Featured latest issue on `/letters-from-chambers`
- Editor’s Note from Chambers
- Publication Rhythm block
- Visual archive filter row
- Issue metadata on individual letter pages
- Author line: `From the desk of Paul Magaji`
- Print / Share / Save placeholder actions
- Dynamic suggested citation footer
- Stronger correspondence archive cards

The site still preserves **Scholar in Chambers** as the main intellectual house. **Letters from Chambers** remains the recurring public correspondence/newsletter arm.
