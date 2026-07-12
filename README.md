# ZAROC OS Portfolio

Arthur Aktamirov's bilingual Astro portfolio, presented as an interactive desktop environment.

## Local development

```sh
npm install
npm run dev
```

Production checks:

```sh
npm run check
npm run build
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` deploys every push to `main` using the official Astro and GitHub Pages actions.

1. Push this repository to GitHub.
2. Open **Settings → Pages** in the repository.
3. Select **GitHub Actions** as the source.
4. Push to `main` or run the workflow manually from the Actions tab.

The Astro configuration detects the GitHub owner and repository automatically. It supports both a `zaroc-dev.github.io` user site and a repository subpath such as `zaroc-dev.github.io/portfolio`.

## Adding a custom domain later

1. Configure the domain in GitHub's Pages settings and with the DNS provider.
2. Add `public/CNAME` containing only the domain name.
3. Add these repository variables under **Settings → Secrets and variables → Actions → Variables**:

```text
SITE_URL=https://your-domain.example
BASE_PATH=/
```

The next deployment will generate canonical and language-alternate URLs for the custom domain.
