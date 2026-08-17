# Personal Website

[georgewpark.com](https://www.georgewpark.com/) — built with Vite, React, TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev      # dev server with hot reload, http://localhost:5173
npm run build    # type-check, then compile to /build
```

| Script              | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Vite dev server with HMR                       |
| `npm run build`     | `tsc --noEmit` then `vite build` into `/build` |
| `npm run preview`   | Serves the compiled `/build` output            |
| `npm run typecheck` | Type-check only                                |
| `npm run format`    | Prettier across the project                    |

## How the build is wired

GitHub Pages serves this repo as-is and runs no build step, so **the compiled
bundle in `/build` is committed**. Run `npm run build` and commit the changed
files in `build/` alongside your source changes, or the live site will not
pick them up.

`index.html` sits at the repo root because that is the file Pages serves. It
ships referencing the committed bundle:

```html
<link rel="stylesheet" href="/build/css/app.css" />
<script type="module" src="/build/js/app.js"></script>
```

During `npm run dev`, the small `devEntry` plugin in `vite.config.ts` rewrites
those two tags to point at `/src/main.tsx` instead, so you get hot reload
against the same HTML file that ships. If you edit those two tags, update the
matching patterns in `vite.config.ts` too.

Output filenames are deliberately stable (`js/app.js`, `css/app.css`) rather
than content-hashed, so committing a rebuild produces a clean diff.

## Structure

```
index.html            Page shell: masthead, hero, about, contact, footer
src/
  main.tsx            Mounts React into #projects-root
  styles.css          Tailwind import, design tokens, component classes
  types.ts            Project and Filter types
  data/projects.ts    The project list and category filters
  components/         Projects, ProjectFilters, ProjectCard, icons
  hooks/              useReducedMotion
build/                Compiled output. Generated — commit it, don't edit it.
images/ video/        Project media, served straight from the repo
```

Only the projects gallery is React. The rest of the page is static HTML so it
renders without JavaScript and stays crawlable.

## Adding a project

Add an entry to `projects` in [`src/data/projects.ts`](src/data/projects.ts):

```ts
{
  id: 'abc123',            // CodePen pen id, or the repo slug when github: true
  title: 'Project Name',
  description: 'One or two sentences.',
  image: 'file-name',      // images/portfolio/file-name.jpg
  video: 'file-name',      // or video/portfolio/file-name.mp4
  github: true,            // links to github.com/georgewpark/Project-Name
  categories: ['featured', 'react']
}
```

Every project needs at least one category. A project with an empty
`categories` array is treated as retired and is never rendered under any
filter, so emptying that array is how you pull a project from the site
without deleting its entry.

Then run `npm run build` and commit `build/`.
