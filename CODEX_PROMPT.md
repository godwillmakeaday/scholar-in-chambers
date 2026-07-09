# Codex Prompt — Scholar in Chambers 2.1

You are working on an existing Vercel/Next.js website for:

**Scholar in Chambers**

This website is part of the wider **Paul Magaji** intellectual and professional brand.

## Task

Maintain and extend the existing website as a premium legal-intellectual platform. Do not redesign from scratch. Preserve the current look, feel, colors, typography direction, layout language, chamber-like atmosphere, and serious public tone.

## Current architecture

Paul Magaji Brand  
→ Scholar in Chambers  
→ Letters from Chambers  
→ Future specialist chambers

Scholar in Chambers is the lawyer as thinker.
Letters from Chambers is the lawyer as correspondent.

## Current routes

- `/`
- `/chambers`
- `/essays`
- `/letters-from-chambers`
- `/letters-from-chambers/[slug]`
- `/manifesto`
- `/about`
- `/contact`

## Letters archive engine

Letters are stored in `lib/letters.ts`.

Each letter should have:

- title
- slug
- category
- excerpt
- date
- reading time
- status
- salutation
- content sections

When adding a new letter:

1. Add it to the `letters` array in `lib/letters.ts`.
2. Use a clean slug.
3. Keep the tone serious, calm, legal-intellectual, public-facing, and chamber-like.
4. Avoid casual blog language.
5. Avoid aggressive marketing language.
6. Preserve the editorial disclaimer.

## Tone words

Use language such as:

- correspondence
- chamber
- public desk
- legal reflection
- civic guidance
- institutional memory
- judgment
- dignity
- society
- law
- justice
- interpretation
- evidence
- public order

## Editorial disclaimer

Every letter page should keep this note:

“Letters from Chambers is for public legal education, institutional reflection, and civic guidance. It is not a substitute for formal legal advice on a specific matter.”

## Technical requirements

- Use the existing project structure.
- No external APIs.
- No unnecessary packages.
- No backend unless specifically requested.
- Preserve mobile responsiveness.
- Preserve Scholar in Chambers as the main intellectual house.
- Do not rename the website to Letters from Chambers.
- Keep Letters from Chambers visibly connected to Scholar in Chambers and the Paul Magaji brand.

---

## Upgrade Record: Letters from Chambers Publication & Issue System

The site now supports a serious publication structure for Letters from Chambers:

- Issue No. 001 and following
- Featured issue
- Editorial notes
- Publication rhythm
- Visual archive filters
- Dynamic citation footer
- Individual issue pages under `/letters-from-chambers/[slug]`

Future upgrades should preserve the chamber-like tone and avoid turning the site into a casual blog or flashy marketing website.
