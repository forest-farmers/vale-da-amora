# Vale da Amora — static site

The public site for **valedaamora.pt** (the land), separate from the Forest Farmers app in `/site`.

Plain HTML/CSS/JS. No build step.

## Local preview

```bash
npx serve vale-da-amora
# or
python -m http.server -d vale-da-amora 8080
```

## Deploy on Netlify

This folder is deployed as a **second Netlify site** on the same account as the app. Both sites point at the same GitHub repo; each one is scoped to its own base directory.

Settings to use when creating the new Netlify site:

- **Repository**: same repo as the app
- **Base directory**: `vale-da-amora`
- **Publish directory**: `vale-da-amora` (or leave it as the default — `netlify.toml` overrides it)
- **Build command**: leave empty

The `netlify.toml` in this folder takes precedence over the one at the repo root because of the base-directory setting.

## Domain

Once **valedaamora.pt** DNS is ready, add it under *Domain management* in the Netlify site. Set up a 301 redirect from **pollen-pod.com → valedaamora.pt** either:

- In Netlify (add `pollen-pod.com` as a domain alias on the new site, then add a `_redirects`/`netlify.toml` rule to 301 to `valedaamora.pt`), or
- At the registrar / current DNS host until pollen-pod.com expires.

## Swapping the logo

When the real logo arrives, drop the SVG at `assets/logo.svg` and replace the `<span class="brand-mark">` element in `index.html` with `<img src="/assets/logo.svg" alt="Vale da Amora" class="brand-mark">`.
