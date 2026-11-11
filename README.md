# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Portfolio projects

Works can be grouped into a project in `src/worksData.ts`. Define a shared
project with a unique URL `slug` and display `title`, and pass it to each
member's `work()` call. Mark exactly one member as the cover by passing
`{ ...project, cover: true }`. All members retain their category tags, but only
the cover appears in the home and category grids. The cover links to
`/projects/<slug>`, where all members, including the cover, appear.
Other grid items and items on a project page link to `/works/<slug>`, which
shows the work's largest available image.
Grid images use the smallest available version (small, then medium, then
large) at every viewport size.

The root `vercel.json` rewrites direct requests to the app so React Router can
handle category, project, and work URLs.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
