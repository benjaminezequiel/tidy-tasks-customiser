// Use inside obsidian console to get the variables for a specific theme and add them to theme.js

(() => {
  const NEEDED = [
    "--font-smallest",
    "--font-small",
    "--font-medium",
    "--font-semibold",
    "--font-bold",
    "--metadata-border",
    "--modal-background",
    "--metadata-border",
    "--background-secondary-hover",
    "--background-primary",
    "--background-primary-alt",
    "--background-modifier-border",
    "--text-normal",
    "--text-muted",
    "--text-on-accent",
    "--link-color",
    "--color-red-rgb",
    "--color-orange-rgb",
    "--color-blue-rgb",
    "--color-green-rgb",
    "--color-purple-rgb",
  ];
  const cs = getComputedStyle(document.body);
  const get = (k) => cs.getPropertyValue(k).trim();
  const mode = document.body.classList.contains("theme-dark")
    ? "Dark"
    : "Light";
  const themeName = window.app?.customCss?.theme || "Obsidian Default";
  const slug = (themeName + "-" + mode)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const toHex = (t) => {
    const p = (t || "").split(",").map((x) => parseInt(x.trim(), 10));
    if (p.length < 3 || p.some(Number.isNaN)) return null;
    return (
      "#" +
      p
        .slice(0, 3)
        .map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0"))
        .join("")
    );
  };
  const defaults = {
    highest: toHex(get("--color-red-rgb")) || "#e93147",
    high: toHex(get("--color-orange-rgb")) || "#e9973f",
    medium: toHex(get("--color-blue-rgb")) || "#086ddd",
    low: toHex(get("--color-green-rgb")) || "#08b94e",
    lowest: toHex(get("--color-purple-rgb")) || "#9a6ef3",
  };
  const d =
    "{ " +
    Object.entries(defaults)
      .map(([k, v]) => `${k}: '${v}'`)
      .join(", ") +
    " }";
  const varsStr = NEEDED.map((k) => `      ${k}: ${get(k)};`).join("\n");

  const entry = `  '${slug}': {
    name: '${themeName} (${mode})',
    page: '${get("--background-primary")}',
    textNormal: '${get("--text-normal")}',
    defaults: ${d},
    vars: \`
${varsStr}\`
  },`;

  console.log(entry);
  try {
    copy(entry);
    console.log(
      "%c✓ copied — paste into THEMES in src/data/themes.js",
      "color:#54d18a",
    );
  } catch {}
})();
