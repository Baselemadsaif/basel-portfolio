# Basel Al-Saif — Portfolio

Source for [basel-portfolio](https://github.com/Baselemadsaif/basel-portfolio),
a personal portfolio site built with [vinext](https://github.com/cloudflare/vinext)
(a Vite-based, React Server Components framework with a Next.js-compatible API).

The site is containerized with Docker and deployed to Google Cloud Run on every
push to `main`. See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the full CI/CD setup.

## Prerequisites

- Node.js `>=22.13.0`

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (used by the Dockerfile)
npm run start    # serve the production build locally
```

## Project structure

- `app/` — page content, layout, and global styles
- `worker/` — the request-handling entry point vinext builds against
- `public/` — static assets (photo, OG image, icons)
- `vite.config.ts` — build configuration
- `Dockerfile` — production container image used by the deploy pipeline
- `.github/workflows/deploy.yml` — CI: lint + test → build & push image → deploy to Cloud Run

## Useful commands

- `npm run dev` — start local development
- `npm run build` — produce the production build
- `npm run start` — run the production build (what the container runs)
- `npm run lint` — lint the codebase
- `npm test` — build and run the rendered-output test suite

## Deployment

Pushing to `main` triggers the pipeline described in
[`DEPLOYMENT.md`](./DEPLOYMENT.md): it lints and tests the site, builds and
pushes a Docker image, then deploys it to the `basel-portfolio` Cloud Run
service.

## Learn more

- [vinext documentation](https://github.com/cloudflare/vinext)
