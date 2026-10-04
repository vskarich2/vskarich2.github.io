# Veljko Skarich — research homepage

Personal research homepage built from the [al-folio v1 template](https://github.com/alshedivat/al-folio) and deployed to [GitHub Pages](https://vskarich2.github.io/). This repository is a template-based personal site; upstream al-folio is unchanged.

## Update the site

- Home introduction and the visible bio placeholders: `_pages/about.md` (`[BIO TAGLINE — TO BE PROVIDED]` and `[BIO — TO BE PROVIDED]`).
- Research interests and descriptions: `_pages/research.md` and `_pages/about.md`.
- Publications: `_bibliography/papers.bib`; add only confirmed metadata and links.
- Projects, experience, and contact: the matching files in `_pages/`.
- Verified social profiles: `_data/socials.yml` and the links in `_pages/about.md`. Add LinkedIn, email, and Google Scholar only when their public destinations are confirmed.
- Approved public headshot: `assets/img/headshot.jpg`. The home page shows a neutral placeholder until that exact file exists. Its stable public URL is `https://vskarich2.github.io/assets/img/headshot.jpg`.
- Approved public CV: `assets/pdf/veljko-skarich-cv.pdf`. The CV page offers the download only when that file exists.
- Site metadata and feature flags: `_config.yml`.

No personal resume or unpublished paper PDF is included.

## Build and deploy

Install the locked Ruby and Node dependencies with `bundle install` and `npm ci`, then run `bundle exec jekyll build`. The starter's `.github/workflows/deploy.yml` builds and publishes `_site` to `gh-pages` when `main` changes. GitHub Pages serves that branch at the repository's root URL.

Local styling and layout overrides for this personal site are tracked under `_sass/` and `_includes/` as needed; see `.al-folio-overrides.yml` after overrides are audited. The upstream starter-only `lint:style-contract` forbids those legal personal-site overrides, so this repository uses a site-focused validation workflow instead.
