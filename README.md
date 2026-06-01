<p align="center">
  <img src="public/codechaos.jpeg" width="120" alt="CodeChaos logo" />
</p>

<h1 align="center">CodeChaos</h1>

<p align="center">
  <a href="https://github.com/TheCodeChaos/thecodechaos.github.io/actions/workflows/code-quality.yml"><img src="https://github.com/TheCodeChaos/thecodechaos.github.io/actions/workflows/code-quality.yml/badge.svg" alt="Code Quality" /></a>
  <a href="https://github.com/TheCodeChaos/thecodechaos.github.io/actions/workflows/publish.yml"><img src="https://github.com/TheCodeChaos/thecodechaos.github.io/actions/workflows/publish.yml/badge.svg" alt="Deploy" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT" /></a>
  <img src="https://img.shields.io/badge/Astro-6-ff5d01.svg" alt="Astro 6" />
  <img src="https://img.shields.io/badge/code_style-Prettier-f7b93e.svg" alt="Prettier" />
</p>

Official website for **CodeChaos** — an open coding club for students focused on building, collaborating, and shipping real software.

Live: https://thecodechaos.github.io/

## Stack

- Astro 6, TypeScript
- ESLint + Prettier for linting and formatting
- `@astrojs/rss` and `@astrojs/sitemap` for the feed and sitemap
- Pagefind for on-site search
- `@resvg/resvg-js` for generated OG images
- GSAP and AOS for animations

## Develop

```sh
npm install
npm run dev
```

Content lives in `src/content/` — `blog/` for posts and a single `members.yaml` for the team.

## Validate

Run the checks (format, lint, types, build) in one go before pushing — `npm run format` auto-fixes formatting:

```sh
npm run validate
```

## Members

All members live in one file — `src/content/members.yaml`. To add yourself, append an entry:

```yaml
- id: your-github-username # unique; used to link your posts
  name: Your Name
  role: Member # Founder | Member
  github: https://github.com/your-github-username # also used for your avatar
  linkedin: https://linkedin.com/in/your-handle # optional
  website: https://your-site.com # optional
  order: 4 # lower shows first
```

Only `id`, `name`, and `role` are required. Each member gets a profile page at `/members/<id>/`. Add a real `github` (drives the avatar) and only include socials you actually have — no empty placeholder links.

Blog posts link to a member through the `author` field, which must be a member `id`:

```yaml
author: your-github-username
```

The post then appears on that member's profile page, and the author name on the post links back to it.

## Contributing

Open a pull request, and run `npm run validate` locally first so the checks pass.

## License

MIT, © 2026 Shravan Goswami ([shravangoswami.com](https://shravangoswami.com) · [@shravanngoswamii](https://github.com/shravanngoswamii)). See [LICENSE](LICENSE).
