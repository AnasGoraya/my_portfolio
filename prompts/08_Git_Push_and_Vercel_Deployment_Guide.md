# Task 8: GitHub Repository Setup, Full Project Push & Vercel Deployment Guide

## Overview & Objectives
Provide an end-to-end guide and step-by-step automation prompts to:
1. Initialize Git locally and push the complete Next.js portfolio project to GitHub (`https://github.com/AnasGoraya/my_portfolio.git`).
2. Create and configure a Vercel account via GitHub OAuth.
3. Import the repository into Vercel, configure build settings, environment variables, and trigger automated CI/CD deployments on every push.

---

## Part 1: GitHub Push Commands & Local Repository Setup

### Step-by-Step Terminal Execution:

Run these commands inside your project root folder (`my_portfolio`):

```bash
# 1. Create / update README.md
echo "# my_portfolio - Elite Developer Portfolio" > README.md

# 2. Initialize Git repository
git init

# 3. Create a strict .gitignore to avoid pushing heavy node_modules or build files
cat << 'EOF' > .gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOF

# 4. Stage all project files
git add .

# 5. Create the initial commit
git commit -m "feat: initial commit - Next.js portfolio architecture with 3D canvas, bento skills & project showcase"

# 6. Set main branch
git branch -M main

# 7. Add GitHub remote origin
git remote add origin https://github.com/AnasGoraya/my_portfolio.git

# 8. Push whole codebase to GitHub
git push -u origin main
```

*(Note: If the remote already exists, run `git remote set-url origin https://github.com/AnasGoraya/my_portfolio.git` before pushing).*

---

## Part 2: Step-by-Step Vercel Account Creation & Deployment

### Step 1: Create / Sign up on Vercel
1. Go to [https://vercel.com/signup](https://vercel.com/signup).
2. Select **"Continue with GitHub"** (Hamesha GitHub account k sath sign in karein taake direct repository access mil jaye).
3. Authorize Vercel to access your GitHub repositories.

### Step 2: Import & Deploy Repository
1. Vercel dashboard pr aane k baad **"Add New..."** button pr click karein aur **"Project"** select karein.
2. Repositories list main `AnasGoraya/my_portfolio` search karein aur **"Import"** pr click karein.
3. **Configure Project Settings:**
   - **Framework Preset:** Next.js (Automatic detect ho jayega).
   - **Root Directory:** `./` (Default).
   - **Build Command:** `next build` (Default).
   - **Output Directory:** `.next` (Default).
   - **Install Command:** `npm install` ya `pnpm install`.
4. Click **"Deploy"**.
5. Vercel build run karega (1-2 minutes) aur live production URL provide karega (e.g. `my-portfolio-xxx.vercel.app`).

### Step 3: Automated CI/CD (Continuous Deployment)
- Ab jab bhi aap local machine pr code update kr k `git push origin main` karenge, Vercel automatically new production build trigger karega bina kisi manual step k.

---

## Prompt for Claude (Copy & Paste into Claude)

```markdown
Role: Senior DevOps & Full-Stack Deployment Specialist.

Task: Provide a complete, production-grade deployment script, Git workflow, and Vercel hosting setup guide for this Next.js portfolio.

Context & Target Repository:
- GitHub Repository URL: https://github.com/AnasGoraya/my_portfolio.git
- Target Platform: Vercel (Production)

Requirements to Deliver:
1. Complete Git Terminal Commands:
   - Command sequence to initialize Git, setup `.gitignore`, stage all assets/code, commit, branch to `main`, link remote `https://github.com/AnasGoraya/my_portfolio.git`, and push with upstream tracking.
   - Troubleshooting steps if remote repo already has an existing `README` or commit conflicts (e.g., `git pull origin main --rebase`).
2. Vercel Account & Zero-Config Setup Guide:
   - Detailed walkthrough for linking GitHub with Vercel.
   - Project import configuration, build commands, and caching optimizations.
   - Instructions on connecting a custom domain if needed later.
3. Roman Urdu / English Context:
   - "Poora project GitHub repo (https://github.com/AnasGoraya/my_portfolio.git) pr push krne k exact commands do. Sath main Vercel pr account create kr k automated deployment setup krne ka step-by-step guide provide karo taake zero error k sath site live ho jaye."

Please generate the complete, ready-to-run deployment instructions and checklist.
```
