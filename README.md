# Amar Kumar Mahato — Portfolio (v2)

A single-page portfolio (plain HTML/CSS/JS, no build step) with an editorial/index-page design:
a sticky left index nav, a serif headline, a professional portrait, and a signature
entity-relationship diagram in the hero that mirrors the actual schema behind the Retail SQL
Analytics Dashboard.

## Files
- `index.html` — all page content
- `style.css` — styling
- `script.js` — index-nav active state, mobile menu, scroll reveals
- `assets/Amar_Kumar_Mahato_Resume.pdf` — downloadable résumé
- `assets/amar-headshot.jpg` — portrait, already cropped/color-graded, shown in the hero

## Run it locally
Open `index.html` in any browser — nothing to install or build.

## Put it live on GitHub Pages (~5 minutes)

1. **Create a new repo** on GitHub, e.g. `portfolio` (public):
   https://github.com/new

2. **Push these files** from this folder:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site v2"
   git branch -M main
   git remote add origin https://github.com/amarmahato4028-crypto/portfolio.git
   git push -u origin main
   ```
   (If you already have a `portfolio` repo from an earlier version, either overwrite it — delete the
   old files first — or use a new repo name and update links accordingly.)

3. **Turn on GitHub Pages:**
   - Repo → **Settings** → **Pages**
   - Source: `Deploy from a branch` → Branch: `main`, folder `/ (root)` → **Save**
   - Your live URL will be something like:
     `https://amarmahato4028-crypto.github.io/portfolio/`

4. **Add the link** to your LinkedIn "Contact info" → Website, and to your resume header.

## About the photo
Your headshot is already cropped, white-balanced, and color-graded, and sits in
`assets/amar-headshot.jpg` — wired into the hero next to the schema diagram. To swap in a different
shot later, just replace that file with another image saved under the same name (ideally a similar
portrait crop, roughly 4:5).
