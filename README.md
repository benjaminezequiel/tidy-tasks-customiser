# Tidy Tasks — Customiser

A small Vue 3 + Vite web app that lets people customise the [**Tidy Tasks**](https://github.com/benjaminezequiel/tidy-tasks/) Obsidian
snippet and download a ready-to-use CSS file. It compiles the snippet's _real_ SCSS in
the browser (Dart Sass), so the preview and output always track the actual source.

The snippet lives in its own repository and is included here as a git **submodule** at
`snippet/`, which keeps the two in sync: the customiser reads `snippet/src/*.scss`
directly.

## Run locally

```bash
git clone --recurse-submodules <this-repo-url>
cd tidy-tasks-customiser
npm install
npm run dev
```

Already cloned without submodules? Pull them in:

```bash
git submodule update --init --recursive
```

## How the submodule is wired

If you're setting this up from scratch:

```bash
# 1. Push the snippet (the snippet/ folder here) to its own GitHub repo first, then:
rm -rf snippet
git submodule add <snippet-repo-url> snippet
git commit -m "Add tidy-tasks snippet as submodule"
```

To later pull the newest snippet into the website:

```bash
git submodule update --remote snippet
git add snippet && git commit -m "Bump snippet"
```

Vite reads the SCSS via `import.meta.glob('/snippet/src/*.scss', { query: '?raw' })`
and compiles it in the browser with a small in-memory importer
(`src/composables/useSnippetCompiler.js`). The customiser overrides the snippet's
`_config.scss` through `@use "config" with (...)`, so nothing in the snippet is
duplicated here.

## Notes

- Dart Sass runs in the browser. `vite.config.js` sets
  `keepNames` so the bundler doesn't mangle it.
- The theme picker only affects the preview. The downloaded CSS stays theme-aware
  unless you turn off "Use my theme's accent colours" and pick custom colours.
- Add more preview themes in `src/data/themes.js`.
