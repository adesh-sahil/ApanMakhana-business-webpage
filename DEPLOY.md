# Deploying this site

This is a **Next.js 16** app (the old repo was Vite — this replaces it).

## On the other laptop

```bash
# 1. unzip, then from the project folder:
npm install          # restores node_modules (not included in the zip)
npm run build        # sanity check it builds — should end with "✓ Compiled"
npm run dev          # optional: preview at http://localhost:3000
```

## Pushing to the personal GitHub repo

The repo `adesh-sahil/ApanMakhana-business-webpage` currently holds the **old
Vite** site. This code replaces its contents. From the project folder:

```bash
git init
git add -A
git commit -m "Rebuild as Next.js: scroll-choreographed redesign"
git branch -M main
git remote add origin https://github.com/adesh-sahil/ApanMakhana-business-webpage.git
git push -u origin main --force   # --force because the tree is entirely new
```

> Push while signed in as the **personal** GitHub account (`adesh-sahil`),
> not a company account.

## ⚠️ Vercel will need one setting changed

That repo is already linked to Vercel (the old site auto-deployed on push).
Because the framework changed **Vite → Next.js**, check Vercel once:

**Vercel → Project → Settings → Build & Deployment**
- **Framework Preset:** set to **Next.js** (was likely "Vite")
- **Build Command / Output Directory:** set both back to **Default / auto**
  (the old project may pin `vite build` and `dist`, which will fail for Next)

After that, every push to `main` redeploys automatically. The first push may
fail if the preset is still Vite — just change it and redeploy.

## Notes / still open (from the rebuild)

- **Flipkart** channel is coded but hidden until a URL is added
  (`lib/products.ts` → `CHANNELS`).
- **"Fat free"** claim is intentionally omitted from the site — the declared
  panel is 0.86 g fat / 100 g, above the FSSAI ≤0.5 g threshold for that claim.
- **Two marketer addresses** appear across the physical packs (Vani Vihar
  110059 vs Tilak Nagar 110018). The site uses Tilak Nagar — confirm which is
  the correct legal address.
- **Recipe images** (`makhana-curry/kheer/recipe`) are still in `public/` but
  unused; a Recipes section was dropped from the page order. Delete or ask to
  re-add.
- The print catalogue PDF was moved out of `public/` (it was 84 MB) to keep the
  deploy small.
