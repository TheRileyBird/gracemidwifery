# Grace Midwifery Collective — Project Rules

## Stack
- **Astro 7** static site generator
- **Tailwind CSS v4** via `@tailwindcss/vite` (Vite plugin — not an Astro integration)
- **Alpine.js** for interactivity (scroll, sliders, accordions, mobile menu)
- Deployed to **Netlify**

## Images

Always use Astro's `<Image>` component from `astro:assets` with locally imported assets. Never use plain `<img>` tags or `/public` folder paths for content images.

```astro
---
import { Image } from 'astro:assets';
import myPhoto from '../assets/images/my-photo.jpg';
---

<Image src={myPhoto} alt="Description" class="w-full h-full object-cover" />
```

**Why:** Plain `<img>` tags bypass Astro's image optimization pipeline — no compression, no WebP conversion, no responsive srcsets. All content images belong in `src/assets/images/` and must be imported.

The `public/` folder is only for assets that need a stable public URL (favicon, open graph images, etc.).

## Design Tokens

Custom colors are defined as `@theme` CSS variables in `src/styles/global.css` (there is no `tailwind.config.mjs` — Tailwind v4 uses CSS-based configuration). Always use these tokens — never hardcode hex values in class attributes.

| Token | Value | Use |
|---|---|---|
| `brand-primary` | `#a75c4a` | Primary CTA, headings, accents |
| `accent` | `#DCB393` | Decorative accents, h6 lines |
| `surface` | `#f8fafc` | Page background |
| `surface-2` | `#ffffff` | Card backgrounds |
| `contrast` | `#121111` | Primary text |
| `contrast-2` | `#494f5e` | Body text (also set globally on `p`) |
| `accent-teal` | `#e5f2ef` | Section backgrounds |
| `brand-light` | `#fef4f3` | Light brand tint |

> **Note:** `text-base` is a Tailwind font-size utility (`1rem`). Do not add a custom color named `base` — it will override the utility.

## Global Typography

Defined in `BaseLayout.astro` as `<style is:global>`:

- `p` — `color: #494F5E`, `font-size: clamp(14px, …, 20px)`, `line-height: 1.57`
- `h6` — serif, uppercase, `#DCB393`, with `::before`/`::after` decorative lines. Add `class="justify-center"` to center an h6 with its lines.
- `blockquote` — do not use italics; use `font-semibold` unless there is a specific exception called for in the design.

## Reusable Components

### `<SplitPanel>`
Two-column image + text layout.

```astro
<SplitPanel
  image={myImg}
  imageAlt="Alt text"
  bg="#fef4f3"
  imageLeft={true}
  imagePosition="top"
  justify="center"
  sticky={true}
/>
```

- `sticky` — image column becomes full-height sticky (`md:sticky md:top-0 md:h-screen`), hidden on mobile
- `imageLeft` — swaps column order
- `justify="center"` — vertically centers the text slot
