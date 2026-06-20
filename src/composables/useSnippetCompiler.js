import { ref, watch } from 'vue';
import * as sass from 'sass';

// Pull the snippet's real SCSS sources straight from the submodule at build time.
// Each file is imported as a raw string so we can hand them to Dart Sass in the browser.
const rawFiles = import.meta.glob('/snippet/src/*.scss', {
  query: '?raw',
  import: 'default',
  eager: true
});

const FILES = {};
for (const [path, content] of Object.entries(rawFiles)) {
  const name = path.split('/').pop().replace(/^_/, '').replace(/\.scss$/, '');
  FILES[name] = content;
}

// In-memory importer: resolves @use "config", "main", "date-tags", … to the raw files.
const importer = {
  canonicalize(url) {
    const name = url.replace(/^.*\//, '').replace(/^_/, '').replace(/\.scss$/, '');
    return FILES[name] != null ? new URL('memory:/' + name) : null;
  },
  load(canonicalUrl) {
    const name = canonicalUrl.pathname.replace(/^\/+/, '');
    return { contents: FILES[name], syntax: 'scss' };
  }
};

const PRI_VAR = {
  highest: '--color-red-rgb',
  high: '--color-orange-rgb',
  medium: '--color-blue-rgb',
  low: '--color-green-rgb',
  lowest: '--color-purple-rgb'
};

function scssStr(s) {
  return '"' + String(s).replace(/"/g, '\\"') + '"';
}

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

// Turn the reactive config into a Sass map literal for the `$priorities` override.
function priorityMap(config) {
  const rows = config.priorities.map((p) => {
    const bg = config.themeAware ? `var(${PRI_VAR[p.key]})` : hexToRgb(p.hex);
    return `  ${p.key}: (label: ${scssStr(p.label || p.key)}, text: var(--text-on-accent), ` +
      `bg: ${scssStr(bg)}, bg-opacity: ${p.opacity})`;
  });
  return `(\n${rows.join(',\n')}\n)`;
}

function entryFor(config) {
  return `@use "config" with (
  $priorities: ${priorityMap(config)},
  $radius: ${config.radius}px,
  $edit-label: ${scssStr(config.editLabel || 'EDIT')},
  $postpone-label: ${scssStr(config.postponeLabel || 'POSTPONE')}
);
@use "main";
`;
}

export function useSnippetCompiler(config) {
  const css = ref('');
  const error = ref(null);
  let timer = null;

  function compile() {
    try {
      const result = sass.compileString(entryFor(config), {
        importers: [importer],
        style: 'expanded'
      });
      css.value = result.css;
      error.value = null;
    } catch (e) {
      error.value = e.message || String(e);
    }
  }

  watch(
    config,
    () => {
      clearTimeout(timer);
      timer = setTimeout(compile, 120);
    },
    { deep: true, immediate: true }
  );

  return { css, error };
}
