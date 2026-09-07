# adityamhaske.github.io

[![Website](https://img.shields.io/badge/website-adityamhaske.github.io-blue?style=for-the-badge)](https://adityamhaske.github.io/)

Static landing page for Aditya Mhaske — open-source projects, research
publications, and GitHub activity. Plain HTML/CSS/vanilla JS, no build step.

- `index.html` — page structure and content
- `css/style.css` — styling, including light/dark theme via `[data-theme]`
- `js/main.js` — project/research filtering, search, theme toggle
- `img/` — static images
- `.nojekyll` — tells GitHub Pages to serve the files as-is (skip Jekyll processing)

## Deploying to adityamhaske.github.io

This repo is already named exactly `adityamhaske.github.io`, which is what
GitHub Pages requires to serve a user site at the apex `adityamhaske.github.io`
URL. To go live, an account admin needs to enable Pages once under
**Settings → Pages**, with source set to the `main` branch and `/ (root)`
folder — GitHub will then serve `index.html` directly at
`https://adityamhaske.github.io`.

No build/deploy workflow is required since there's no compilation step —
GitHub Pages serves the static files directly once enabled.

This does not affect `adityamhaske.com` or any other portfolio repository.
