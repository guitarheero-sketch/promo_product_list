# GS009 CLKA Promo Finder

Ready-to-upload static website. No npm, build command, database or login required.

## Publish on GitHub Pages (easiest)

1. Extract the ZIP on your computer.
2. Create a **public** GitHub repository, for example `gs009-clka-promos`.
3. Choose **Add file → Upload files**. Upload the extracted files and the entire `assets` folder into the repository root. Do not upload the ZIP itself or an enclosing folder. `index.html` must appear at the top level.
4. Commit the files to `main`.
5. Open **Settings → Pages**.
6. Select **Deploy from a branch**, branch **main**, folder **/(root)**, and click **Save**.
7. Wait for publication, then use **Visit site** on that settings page.

The usual public address is `https://YOUR-USERNAME.github.io/gs009-clka-promos/` (replace the username and repository name). Publication may take up to 10 minutes. No ChatGPT account is required to visit.

## Files

- `index.html`: webpage
- `style.css`: responsive layout and styles
- `app.js`: search, filters, product details, copying and calculator
- `data.json`: 532 product entries, 24 bundles and campaign information
- `assets/`: original campaign images
- `.nojekyll`: serves these static files without a Jekyll build
- `.github/workflows/pages.yml`: optional, manually triggered GitHub Actions deployment

## Optional GitHub Actions deployment

Use this only instead of the branch method above. Upload the `.github` folder too. Set **Settings → Pages → Source → GitHub Actions**. Then open **Actions → Deploy static webpage → Run workflow**, using `main`. Run it again after future updates. The workflow is manual so it does not interfere with the default branch method.

## Updates and data rules

This package contains the October 2026 reference loaded on 4 October 2026. It does not pull new prices or stock automatically. Replace the relevant files and commit again when updating. With branch publishing enabled, changes publish automatically.

- 3X takes priority for overlapping clearance offers.
- S-Coin is calculated on the listed member / Block price, before Instant Save.
- 100 S-Coin = RM1; supplier Shooting rewards also use 100 points = RM1.
- FR and Backend are excluded.
- Installation uses EW for Temerloh.
- Source discrepancies remain flagged; check system prices before quoting.
- Product titles use workbook descriptions, linked researched references or general category labels.

To preview locally, use a static web server (for example `python -m http.server 8000` in this folder) and open `http://localhost:8000`. Double-clicking `index.html` may block loading `data.json`; this restriction does not apply on GitHub Pages.

Calculation and data checks passed for the original app. Browser layout and actual GitHub deployment have not been tested in this package.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
