# Vale da Amora — static site

Public site for **valedaamora.pt** — the land in Montemor-o-Novo.

Plain HTML / CSS / JS. No build step.

## Local preview

```bash
python -m http.server 8080
# or
npx serve .
```

Then open <http://localhost:8080>.

## Deploy on Netlify

This repo deploys directly to Netlify. Settings:

- **Branch to deploy**: `main`
- **Base directory**: empty
- **Build command**: empty
- **Publish directory**: `.` (handled by `netlify.toml`)

`netlify.toml` sets security headers and long-cache rules for assets.

## Domain

Custom domain **valedaamora.pt** is managed in Netlify under *Domain management*. HTTPS is auto-provisioned by Netlify (Let's Encrypt).

For the legacy `pollen-pod.com` domain: add it as a domain alias on this site — Netlify will 301-redirect it to `valedaamora.pt`.

## Updating the logo

Drop a new SVG at `assets/logo.svg`. The nav and favicon both reference it.
PNG exports for social media are at `assets/logo-{512,1024}-{transparent,cream}.png` — regenerate by running the script in the commit history if you change the SVG.

## i18n

Strings live in `assets/js/main.js` under the `STRINGS` object — `pt` and `en` keys. The PT copy is also the default in `index.html` (visible if JS doesn't load).
