# GS009 Staff Promo Hub

One homepage for the existing LA and CLKA promo finders. Upload this package into the existing `guitarheero-sketch/promo_product_list` repository. See **START_HERE.txt** for the upload steps.

## Pages

- `index.html` — master homepage
- `la.html` — Living Appliances
- `clka.html` — Cooling, Laundry & Kitchen Appliances

The homepage uses large, fully clickable department cards. Future departments are clearly marked as unavailable, with no dead links. Both department pages have Home/Departments and LA/CLKA navigation. Navigation works with normal browser links, keyboard input and browser Back.

## One repository

All files are in the root folder for easier GitHub upload. Internal paths are relative, so the whole package can also work under a different repository name. No page depends on the separate `LA_promo_list` website. The old LA URL will stop working if that repository is deleted.

The existing GitHub Pages setup can stay in place. Keep the published source branch and folder you already use. This package adds no workflows or build dependencies.

## Add a department later

1. Add the new department page and its supporting files to the same repo. Give each department its own file prefix to avoid filename conflicts, for example `tv.html`, `tv-app.js`, `tv-style.css` and `tv-data.js`.
2. In `index.html`, add another real `<a class="department-card" href="tv.html">…</a>` inside `department-grid`. Copy an existing card and replace its code, title, description, icon and link.
3. Remove the matching “Coming later” item from `future-grid`.
4. On the new page, include `portal.css` and the `department-switch` navigation from either existing department page. Point its Departments link to `index.html`.
5. Check its links, data and images after publishing.

Adding a card alone does not create a product finder. The future section is only a placeholder until the department page and its data are supplied.

## File names

- `portal.css` styles the homepage and shared department navigation.
- `la-*` files belong to LA.
- `clka-*` files belong to CLKA.
- `clka-img-*` files are the original CLKA campaign images.

For a new monthly promo list, update the corresponding department data and date labels. The homepage deliberately does not claim a shared month or live stock availability; each department retains its own dates and notices.

## Source and verification

Department HTML, styles, scripts and data were retrieved from your two GitHub repositories on 4 October 2026. The original CLKA campaign images are included. The migration changes page and asset paths and adds navigation; it does not recalculate or change promotion data.

Checks cover internal page/style/script/data/image links, preservation of department data, absence of old-repository dependencies, JavaScript syntax, and both existing department logic checks adapted to the new paths. No new visual browser test was available in this environment.

The homepage needs no JavaScript. LA loads its bundled data directly; CLKA loads its JSON over HTTP. To preview every section locally, use a local web server (for example `python -m http.server 8000`) and visit `http://localhost:8000/`. Double-clicking the homepage is enough to preview the department buttons but may not let CLKA load its JSON.
