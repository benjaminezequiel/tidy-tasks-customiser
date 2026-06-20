// Variables were extracted from each repo for preview only
// Please refer to the actual theme repos if you want to change any theme settings

export const THEMES = {
  "obsidian-default-dark": {
    name: "Obsidian Default (Dark)",
    page: "#1C1C1C",
    textNormal: "#dadada",
    defaults: {
      highest: "#fb464c",
      high: "#e9973f",
      medium: "#027aff",
      low: "#44cf6e",
      lowest: "#a882ff",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: #1C1C1C;
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: #1C1C1C;
      --background-primary-alt: #232323;
      --background-modifier-border: #333333;
      --text-normal: #dadada;
      --text-muted: #b3b3b3;
      --text-on-accent: white;
      --link-color: hsl(calc(258 - 3), calc(88% * 1.02), calc(66% * 1.15));
      --color-red-rgb: 251, 70, 76;
      --color-orange-rgb: 233, 151, 63;
      --color-blue-rgb: 2, 122, 255;
      --color-green-rgb: 68, 207, 110;
      --color-purple-rgb: 168, 130, 255;`,
  },
  "obsidian-default-light": {
    name: "Obsidian Default (Light)",
    page: "#ffffff",
    textNormal: "#222222",
    defaults: {
      highest: "#e93147",
      high: "#ec7500",
      medium: "#086ddd",
      low: "#08b94e",
      lowest: "#7852ee",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: #ffffff;
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: #ffffff;
      --background-primary-alt: #fafafa;
      --background-modifier-border: #e4e4e4;
      --text-normal: #222222;
      --text-muted: #5c5c5c;
      --text-on-accent: white;
      --link-color: hsl(258, 88%, 66%);
      --color-red-rgb: 233, 49, 71;
      --color-orange-rgb: 236, 117, 0;
      --color-blue-rgb: 8, 109, 221;
      --color-green-rgb: 8, 185, 78;
      --color-purple-rgb: 120, 82, 238;`,
  },
  "minimal-dark": {
    name: "Minimal (Dark)",
    page: "hsl( 0, 0%, 15% )",
    textNormal: "hsl( 0, calc(0% - 10%), calc(15% + 67%) )",
    defaults: {
      highest: "#d04255",
      high: "#d5763f",
      medium: "#6c99bb",
      low: "#a8c373",
      lowest: "#9e86c8",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: hsl( 0, 0%, 15% );
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: hsl( 0, 0%, 15% );
      --background-primary-alt: hsl( 0, 0%, calc(15% - 2%) );
      --background-modifier-border: hsl( 0, 0%, calc(15% + 6%) );
      --text-normal: hsl( 0, calc(0% - 10%), calc(15% + 67%) );
      --text-muted: hsl( 0, calc(0% - 20%), calc(15% + 45%) );
      --text-on-accent: white;
      --link-color: hsl( 201, 17%, 60% );
      --color-red-rgb: 208,66,85;
      --color-orange-rgb: 213,118,63;
      --color-blue-rgb: 108,153,187;
      --color-green-rgb: 168,195,115;
      --color-purple-rgb: 158,134,200;`,
  },
  "minimal-light": {
    name: "Minimal (Light)",
    page: "white",
    textNormal: "hsl( 0, 0%, calc(96% - 90%) )",
    defaults: {
      highest: "#d04255",
      high: "#d5763f",
      medium: "#6c99bb",
      low: "#a8c373",
      lowest: "#9e86c8",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: white;
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: white;
      --background-primary-alt: hsl( 0, 0%, 96% );
      --background-modifier-border: hsl( 0, 0%, calc(96% - 6%) );
      --text-normal: hsl( 0, 0%, calc(96% - 90%) );
      --text-muted: hsl( 0, calc(0% - 20%), calc(96% - 50%) );
      --text-on-accent: white;
      --link-color: hsl( 201, 17%, 50% );
      --color-red-rgb: 208,66,85;
      --color-orange-rgb: 213,118,63;
      --color-blue-rgb: 108,153,187;
      --color-green-rgb: 168,195,115;
      --color-purple-rgb: 158,134,200;`,
  },
  "playground-dark": {
    name: "Playground (Dark)",
    page: "oklch(13.5% 0.01 279.29)",
    textNormal: "oklch(92% 0.004 279.29)",
    defaults: {
      highest: "#fb464c",
      high: "#e9973f",
      medium: "#027aff",
      low: "#44cf6e",
      lowest: "#a882ff",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: oklch(13.5% 0.01 279.29);
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: oklch(13.5% 0.01 279.29);
      --background-primary-alt: oklch(25.5% 0.021 279.29);
      --background-modifier-border: oklch(25.5% 0.021 279.29);
      --text-normal: oklch(92% 0.004 279.29);
      --text-muted: oklch(84.5% 0.01 279.29);
      --text-on-accent: white;
      --link-color: hsl(calc(258 - 3), calc(88% * 1.02), calc(66% * 1.15));
      --color-red-rgb: 251, 70, 76;
      --color-orange-rgb: 233, 151, 63;
      --color-blue-rgb: 2, 122, 255;
      --color-green-rgb: 68, 207, 110;
      --color-purple-rgb: 168, 130, 255;`,
  },
  "playground-light": {
    name: "Playground (Light)",
    page: "oklch(96.5% 0.002 279.29)",
    textNormal: "oklch(18% 0.014 279.29)",
    defaults: {
      highest: "#e93147",
      high: "#ec7500",
      medium: "#086ddd",
      low: "#08b94e",
      lowest: "#7852ee",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: oklch(96.5% 0.002 279.29);
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: oklch(96.5% 0.002 279.29);
      --background-primary-alt: oklch(84.5% 0.01 279.29);
      --background-modifier-border: oklch(84.5% 0.01 279.29);
      --text-normal: oklch(18% 0.014 279.29);
      --text-muted: oklch(25.5% 0.021 279.29);
      --text-on-accent: white;
      --link-color: hsl(258, 88%, 66%);
      --color-red-rgb: 233, 49, 71;
      --color-orange-rgb: 236, 117, 0;
      --color-blue-rgb: 8, 109, 221;
      --color-green-rgb: 8, 185, 78;
      --color-purple-rgb: 120, 82, 238;`,
  },
  "things-dark": {
    name: "Things (Dark)",
    page: "#1c2127",
    textNormal: "#dadada",
    defaults: {
      highest: "#fb464c",
      high: "#e9973f",
      medium: "#027aff",
      low: "#44cf6e",
      lowest: "#a882ff",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: #1c2127;
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: #1c2127;
      --background-primary-alt: #282c34;
      --background-modifier-border: #35393e;
      --text-normal: #dadada;
      --text-muted: hsl(212, 15%, calc(13% + 65%));
      --text-on-accent: white;
      --link-color: hsl(215, 75%, 70%);
      --color-red-rgb: 251, 70, 76;
      --color-orange-rgb: 233, 151, 63;
      --color-blue-rgb: 2, 122, 255;
      --color-green-rgb: 68, 207, 110;
      --color-purple-rgb: 168, 130, 255;`,
  },
  "things-light": {
    name: "Things (Light)",
    page: "#ffffff",
    textNormal: "#222222",
    defaults: {
      highest: "#e4374b",
      high: "#ec7500",
      medium: "#086ddd",
      low: "#0cb54f",
      lowest: "#7852ee",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: #ffffff;
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: #ffffff;
      --background-primary-alt: #f6f7f8;
      --background-modifier-border: #ebedf0;
      --text-normal: #222222;
      --text-muted: hsl(
    212,
    calc(15% - 5%),
    calc(97% - 60%)
  );
      --text-on-accent: white;
      --link-color: hsl(215, 75%, 60%);
      --color-red-rgb: 228, 55, 75;
      --color-orange-rgb: 236, 117, 0;
      --color-blue-rgb: 8, 109, 221;
      --color-green-rgb: 12, 181, 79;
      --color-purple-rgb: 120, 82, 238;`,
  },
  "anuppuccin-dark": {
    name: "AnuPpuccin (Dark)",
    page: "rgb(30, 30, 46)",
    textNormal: "rgb(198, 208, 245)",
    defaults: {
      highest: "#f38ba8",
      high: "#fab387",
      medium: "#87b0f9",
      low: "#a6e3a1",
      lowest: "#b4befe",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: rgb(30, 30, 46);
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: rgb(30, 30, 46);
      --background-primary-alt: rgb(24, 24, 37);
      --background-modifier-border: rgb(49, 50, 68);
      --text-normal: rgb(198, 208, 245);
      --text-muted: rgb(142, 149, 179);
      --text-on-accent: rgb(30, 30, 46);
      --link-color: hsl(calc(258 - 3), calc(88% * 1.02), calc(66% * 1.15));
      --color-red-rgb: 243, 139, 168;
      --color-orange-rgb: 250, 179, 135;
      --color-blue-rgb: 135, 176, 249;
      --color-green-rgb: 166, 227, 161;
      --color-purple-rgb: 180, 190, 254;`,
  },
  "anuppuccin-light": {
    name: "AnuPpuccin (Light)",
    page: "rgb(239, 241, 245)",
    textNormal: "rgb(76, 79, 105)",
    defaults: {
      highest: "#d20f39",
      high: "#fe640b",
      medium: "#2a6ef5",
      low: "#40a02b",
      lowest: "#7287fd",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: rgb(239, 241, 245);
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: rgb(239, 241, 245);
      --background-primary-alt: rgb(230, 233, 239);
      --background-modifier-border: rgb(188, 192, 204);
      --text-normal: rgb(76, 79, 105);
      --text-muted: rgb(124, 127, 147);
      --text-on-accent: rgb(239, 241, 245);
      --link-color: hsl(258, 88%, 66%);
      --color-red-rgb: 210, 15, 57;
      --color-orange-rgb: 254, 100, 11;
      --color-blue-rgb: 42, 110, 245;
      --color-green-rgb: 64, 160, 43;
      --color-purple-rgb: 114, 135, 253;`,
  },
  "blue-topaz-dark": {
    name: "Blue Topaz (Dark)",
    page: "#202020",
    textNormal: "#c6c6c6",
    defaults: {
      highest: "#fb464c",
      high: "#e9973f",
      medium: "#027aff",
      low: "#44cf6e",
      lowest: "#a882ff",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: #202020;
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: #202020;
      --background-primary-alt: #444444;
      --background-modifier-border: #343434;
      --text-normal: #c6c6c6;
      --text-muted: #8a8a8a;
      --text-on-accent: #e4e4e4;
      --link-color: hsl(208, 64%, 49%);
      --color-red-rgb: 251, 70, 76;
      --color-orange-rgb: 233, 151, 63;
      --color-blue-rgb: 2, 122, 255;
      --color-green-rgb: 68, 207, 110;
      --color-purple-rgb: 168, 130, 255;`,
  },
  "blue-topaz-light": {
    name: "Blue Topaz (Light)",
    page: "#ffffff",
    textNormal: "#0e0e0e",
    defaults: {
      highest: "#e93147",
      high: "#ec7500",
      medium: "#086ddd",
      low: "#08b94e",
      lowest: "#7852ee",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: #ffffff;
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: #ffffff;
      --background-primary-alt: #e9e9e9;
      --background-modifier-border: #dddddd;
      --text-normal: #0e0e0e;
      --text-muted: #7f7f7f;
      --text-on-accent: #ffffff;
      --link-color: hsl(207, 77%, 54%);
      --color-red-rgb: 233, 49, 71;
      --color-orange-rgb: 236, 117, 0;
      --color-blue-rgb: 8, 109, 221;
      --color-green-rgb: 8, 185, 78;
      --color-purple-rgb: 120, 82, 238;`,
  },
  "obsidian-nord-dark": {
    name: "Obsidian Nord (Dark)",
    page: "rgb(46,52,64)",
    textNormal: "rgb(236,239,244)",
    defaults: {
      highest: "#bf616a",
      high: "#d08770",
      medium: "#5e81ac",
      low: "#a3be8c",
      lowest: "#b48ead",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: rgb(46,52,64);
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: rgb(46,52,64);
      --background-primary-alt: rgb(46,52,64);
      --background-modifier-border: rgb(67,76,94);
      --text-normal: rgb(236,239,244);
      --text-muted: rgb(229,233,240);
      --text-on-accent: white;
      --link-color: rgb(208,135,112);
      --color-red-rgb: 191,97,106;
      --color-orange-rgb: 208,135,112;
      --color-blue-rgb: 94,129,172;
      --color-green-rgb: 163,190,140;
      --color-purple-rgb: 180,142,173;`,
  },
  "obsidian-nord-light": {
    name: "Obsidian Nord (Light)",
    page: "rgb(255,255,255)",
    textNormal: "rgb(67,76,94)",
    defaults: {
      highest: "#bf616a",
      high: "#d08770",
      medium: "#5e81ac",
      low: "#a3be8c",
      lowest: "#b48ead",
    },
    vars: `
      --font-smallest: 0.8em;
      --font-small: 0.933em;
      --font-medium: 500;
      --font-semibold: 600;
      --font-bold: 700;
      --metadata-border: ;
      --modal-background: rgb(255,255,255);
      --metadata-border: ;
      --background-secondary-hover: ;
      --background-primary: rgb(255,255,255);
      --background-primary-alt: rgb(255,255,255);
      --background-modifier-border: rgb(229,233,240);
      --text-normal: rgb(67,76,94);
      --text-muted: rgb(59,66,82);
      --text-on-accent: white;
      --link-color: rgb(208,135,112);
      --color-red-rgb: 191,97,106;
      --color-orange-rgb: 208,135,112;
      --color-blue-rgb: 94,129,172;
      --color-green-rgb: 163,190,140;
      --color-purple-rgb: 180,142,173;`,
  },
};

export const themeList = Object.entries(THEMES).map(([id, t]) => ({
  id,
  name: t.name,
}));
