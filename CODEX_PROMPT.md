# Codex Prompt: Upgrade Scholar in Chambers with Letters from Chambers

You are working on an existing Next.js/Vercel project called Scholar in Chambers.

Do not rebuild from scratch. Preserve the premium chamber/archive identity, colors, typography direction, layout language, and serious legal-intellectual tone.

This upgrade adds a connected brand section:

## Letters from Chambers

Positioning line:

> Public letters from a lawyer’s desk on law, society, business, justice, and institutions.

Core architecture:

```text
Paul Magaji Brand
→ Scholar in Chambers
→ Letters from Chambers
→ Future specialist chambers
```

Meaning:

- Scholar in Chambers = the lawyer as thinker.
- Letters from Chambers = the lawyer as correspondent.
- Future specialist chambers = later editorial verticals, not separate law firms or institutions yet.

Important supporting line:

> Scholar in Chambers gives depth. Letters from Chambers gives continuity. Specialist Chambers gives expansion.

## Required route

Create or preserve:

```text
/letters-from-chambers
```

The page should present Letters from Chambers as:

1. A newsletter
2. A public correspondence desk
3. A recurring legal-intellectual letter series
4. A future archive of letters on law, society, business, justice, citizenship, institutions, and public order

## Sections to maintain

- Hero section with CTAs
- What It Is
- The Chamber as a Public Desk
- Newsletter subscription placeholder, no backend unless a backend exists
- Letter Categories
- Sample Letter Archive
- Future Specialist Chambers
- Editorial Note: public legal education only, not a substitute for formal legal advice

## Components to use or refine

- `components/Letters.tsx`
- `CategoryCards`
- `LetterCards`
- `NewsletterSignup`
- `ChamberVerticalCards`
- `LettersHomeSection`

## Technical rules

- No unnecessary packages
- No external APIs
- No backend dependency for subscription placeholder
- Preserve existing Scholar in Chambers pages
- Add Letters from Chambers to navigation and footer
- Ensure mobile responsiveness
- Ensure `npm run build` passes in a normal Vercel/Node environment

Deliver a clean commit-ready upgrade.
