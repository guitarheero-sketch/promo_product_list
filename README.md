# GS009 November Promo Desk

A responsive staff reference for Grand Senheng Temerloh, refreshed from six November 2026 files on 10 November 2026. Open `index.html` through GitHub Pages or an HTTP server. Existing `la.html`, `clka.html` and `tv.html` links now open the matching department in the unified catalogue; `dg.html` does the same for Digital & Apple.

## Staff workflow

Search full or partial model codes, brands and product names across departments. Filter by category, basket/line, S-Coin rate and offer type. Cards show cash prices separately from S-Coin; details include copyable PAC/voucher/SCF codes, gift and installation conditions, source rows, and Shooting PS. Saved products are stored only in the current browser. Campaigns show current supplier leaflets extracted from the uploaded workbooks. The light interface supports phone widths, keyboard navigation and a compact list view.

## Approved source rules

- ME is the primary source for general products. TV/Audio and DG (including Apple) use their own lists first; only absent fields fall back to ME. An explicit zero is never treated as absent.
- TV 3X uses the November TVAUD X-stock **revised** BLK, S-Coin and Instant Save columns.
- Prices and rates are resolved field by field with visible provenance. An existing final price already includes its row's voucher; replacement vouchers are applied without double deduction.
- Cash price does not subtract cashback, TNG rewards, trade-in S-Coin or staff incentives. PWP/MBO, gift-item and bundle prices are not standalone headline prices.
- Promotions appear only during their effective period in `Asia/Kuala_Lumpur`. Future records are excluded from cards, filters, search, campaign lists and detail/source views. The page checks for a date rollover every 30 seconds. This is display filtering, not access control; the static source data is public.
- DG MP2 R1 applies 3–5 Nov, R2 6–10 Nov, R3 11–15 Nov, R4 from 16 Nov. The original applies 1–2 Nov. Section-level dates also apply to colour variants below each heading (including OPPO's 6–8 Nov cashback upgrade).
- The X9e Pro 9–10 Nov rebate conflict is flagged for system confirmation. The Sharp PN70HC1E package remark conflicts with its voucher arithmetic, so a selling price is not guessed.
- Shooting PS is published as authorised by the owner. Supplier contacts, warehouse quantities and hidden report metadata are excluded.

## Data and assets

`november-data.json` contains 5,474 distinct model codes and source-specific records from ME, CLKA, LA, TVAUD, DG and Apple. This is a reference list, not live GS009 inventory. Products with only reward support may have no confirmed current price. The TVAUD source covers X-stock, not the complete regular TV catalogue.

The importer uses actual merged cells plus bounded DG section headings. Default validity for undated monthly rows is 1–30 November; explicitly dated campaigns retain their periods. Missing data stays unknown. Source file names and sheet/row (or PDF page/record) references are retained.

`product-images.json` maps verified exact-model imagery and its source. The HP Smart Tank 580 image is from HP Malaysia's Smart Tank page. Other cards use labelled category illustrations rather than unverified product photos. `nov-assets/` includes current workbook campaign visuals and the two populated Apple PDF pages for PAC/gift verification. Shared Apple gift remarks are not guessed from adjacent product rows; use the reference page.

Legacy October JSON/JS/CSS remain for historical metadata and importer name/specification enrichment only. They are not loaded by the current interface. No October price or campaign is carried into the new data automatically.

## Validation and maintenance

The import and regression-test scripts are retained locally rather than published. Fifteen checks passed, covering Malaysia midnight, future-only records, 11/16 November revisions, section date inheritance, source priorities, blank-vs-zero fallback, voucher arithmetic, conditional prices, Apple columns and campaign image existence. Desktop search/detail rendering and a 390px mobile layout were checked in a browser.

The app is buildless HTML/CSS/JS with relative asset paths. Existing GitHub Pages deployment continues on `main` at the repository root. `dist/` and `.openai/` are ignored local preview files, not deployment requirements.
