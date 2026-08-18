# Github.io-Landing

Static landing page for Aditya Mhaske — open-source projects, research
publications, and GitHub activity. Plain HTML/CSS/vanilla JS, no build step.

- `index.html` — page structure and content
- `css/style.css` — styling, including light/dark theme via `[data-theme]`
- `js/main.js` — project/research filtering, search, theme toggle
- `img/` — static images
- `.nojekyll` — tells GitHub Pages to serve the files as-is (skip Jekyll processing)

## Deploying to adityamhaske.github.io

This repo is the *source* for the site; it is not itself served at
`adityamhaske.github.io` yet. GitHub Pages user sites are served from a repo
that is **named exactly `<username>.github.io`**, so to publish this content
at the naked `adityamhaske.github.io` URL, an account admin needs to either:

1. **Rename this repository** to `adityamhaske.github.io`, then enable
   GitHub Pages under **Settings → Pages**, with source set to the `main`
   branch and `/ (root)` folder — GitHub will then serve `index.html`
   directly at `https://adityamhaske.github.io`.
2. Or, keep this repo's current name and enable Pages on it anyway — the
   site will then be published as a *project* page at
   `https://adityamhaske.github.io/Github.io-Landing/` instead of the
   apex domain.

No build/deploy workflow is required for either option since there's no
compilation step — GitHub Pages serves the static files directly once
enabled.

This does not affect `adityamhaske.com` or any other portfolio repository.
