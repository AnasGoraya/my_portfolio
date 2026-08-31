# 🚀 Deployment Guide — GitHub + Vercel

Complete step-by-step to ship this Next.js portfolio live. Local repo is
already initialized on `main` with the initial commit — from here it's push
to GitHub, then import into Vercel for automated CI/CD.

---

## Part 1 — Push to GitHub

### 1. Create the GitHub repo
1. Go to [github.com/new](https://github.com/new).
2. Repository name: **`my_portfolio`** (must be empty — no README, no .gitignore, no license).
3. Visibility: private or public (your choice).
4. Create.

### 2. Link the remote & push
```bash
# Add your repo as the origin remote
git remote add origin https://github.com/AnasGoraya/my_portfolio.git

# If you already added a remote before, update it instead:
# git remote set-url origin https://github.com/AnasGoraya/my_portfolio.git

# Push with upstream tracking (main is already the branch)
git push -u origin main
```

### Troubleshooting
- **"remote origin already exists"** → run `git remote -v`, then `git remote set-url origin <url>`.
- **Push rejected / non-fast-forward** (repo has commits, e.g. a README created on GitHub):
  ```bash
  git pull origin main --rebase
  # resolve any conflicts, then:
  git push -u origin main
  ```
- **Authentication** → use a [Personal Access Token](https://github.com/settings/tokens) as your password, or install the GitHub CLI and `gh auth login`.

---

## Part 2 — Vercel Deployment (Zero-Config)

### 1. Create / sign in
1. Go to [vercel.com/signup](https://vercel.com/signup).
2. **"Continue with GitHub"** → authorize Vercel to access your repositories.
3. Get to your Vercel dashboard.

### 2. Import the project
1. Click **Add New…** → **Project**.
2. Find **`AnasGoraya/my_portfolio`** → **Import**.
3. Configure (all defaults are correct — Next.js is auto-detected):
   | Setting | Value |
   |---|---|
   | Framework Preset | **Next.js** (auto) |
   | Root Directory | `./` |
   | Build Command | `next build` (default) |
   | Install Command | `npm install` (default) |
   | Environment Variables | none required |
4. Click **Deploy**.
5. In ~1–2 minutes the build completes and you get a live URL (e.g. `my-portfolio.vercel.app`).

### 3. Continuous Deployment (CI/CD)
Push to `main` → Vercel auto-builds and ships a new production build. No manual steps.

---

## Part 3 — Custom Domain (optional)

1. In the Vercel project → **Settings → Domains**.
2. Add your domain (e.g. `anasnazir.dev`) and follow the DNS instructions (A record + CNAME).
3. Update the canonical URL in `src/app/layout.tsx` (`metadataBase`) and the
   sitemap base in `src/app/sitemap.ts` if your domain differs from the placeholder.

---

## Part 4 — Optional: Vercel Analytics & Speed Insights

These add a small script to the bundle. Opt-in if you want visitor/performance telemetry:

```bash
npm install @vercel/analytics @vercel/speed-insights
```

Then in `src/app/layout.tsx` (server component will render both safely):

```tsx
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

<body className="font-sans">
  <ThemeProvider>…</ThemeProvider>
  <Analytics />
  <SpeedInsights />
</body>
```

> Tip: leave them off first to keep First Load JS minimal, then add if you want metrics.

---

## ⚠️ Important — Next.js version & security note

The project pins **Next.js `14.2.35`** (the newest 14.x) per the original spec.
`npm audit` currently lists **open high-severity advisories** for the 14.x line
whose only fix is a **breaking upgrade to Next.js 16**. This was an accepted
tradeoff to keep the spec's "Next.js 14+". Verify advisories and upgrade at your
leisure:

```bash
npm audit
npm install next@latest   # or: next@16
```

After any major bump, re-run `npm run build` and `npx next lint`.

---

## Post-Deploy Checklist
- [ ] `https://<you>.vercel.app/` loads (preloader → hero)
- [ ] Theme toggle flips light/dark with no flash
- [ ] All sections scroll-reveal correctly (Home → Contact)
- [ ] `/robots.txt` and `/sitemap.xml` return 200
- [ ] Lighthouse ≥ 95 (test from Vercel URL, not localhost)
