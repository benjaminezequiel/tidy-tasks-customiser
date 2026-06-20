<script setup>
import { reactive, computed } from "vue";
import ControlsPanel from "./components/ControlsPanel.vue";
import PreviewFrame from "./components/PreviewFrame.vue";
import CodeOutput from "./components/CodeOutput.vue";
import { useSnippetCompiler } from "./composables/useSnippetCompiler.js";
import { THEMES, themeList } from "./data/themes.js";

const config = reactive({
  themeId: themeList[0].id,
  themeAware: true,
  radius: 6,
  editLabel: "EDIT",
  postponeLabel: "POSTPONE",
  globalOpacity: 0.4,
  priorities: [
    { key: "highest", label: "Highest", hex: "#e93147", opacity: 0.4 },
    { key: "high", label: "High", hex: "#e9973f", opacity: 0.4 },
    { key: "medium", label: "Medium", hex: "#086ddd", opacity: 0.4 },
    { key: "low", label: "Low", hex: "#08b94e", opacity: 0.4 },
    { key: "lowest", label: "Lowest", hex: "#9a6ef3", opacity: 0.4 },
  ],
});

const { css, error } = useSnippetCompiler(config);
const theme = computed(() => THEMES[config.themeId] ?? THEMES[themeList[0].id]);
</script>

<template>
  <div class="app">
    <ControlsPanel :config="config" :themes="themeList" />
    <main class="stage">
      <PreviewFrame :css="css" :theme="theme" />
      <CodeOutput :css="css" :error="error" />
    </main>
  </div>
</template>
´
<style lang="scss">
@use "./styles/app.scss" as *;
</style>
