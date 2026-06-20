<template>
  <aside class="panel">
    <div class="panel__header group">
      <span class="panel__title">Tidy Tasks</span>
      <p>
        Style your
        <a href="https://publish.obsidian.md/tasks/Introduction" target="_blank"
          >Obsidian Tasks</a
        >
        query results, then copy or download the snippet.
      </p>
      <p>
        Source code available on Github for the UI and
        <a href="https://github.com/benjaminezequiel/tidy-tasks" target="_blank"
          >SCSS snippet.</a
        >
      </p>
    </div>

    <section class="group">
      <h2>Preview theme</h2>
      <div class="field">
        <!-- <label>Select your prefered theme...</label> -->
        <select v-model="config.themeId">
          <option v-for="t in themes" :key="t.id" :value="t.id">
            {{ t.name }}
          </option>
        </select>
        <p class="note">
          This only affects the preview! The final snippet is theme-agnostic and
          will work if you change your theme later.
        </p>
      </div>
    </section>

    <section class="group">
      <h2>Priorities</h2>
      <label class="toggle" style="margin-bottom: 12px">
        <input type="checkbox" v-model="config.themeAware" />
        <span class="switch" />
        <span class="lbl">Use my theme's colours</span>
      </label>

      <p " class="note">
        By default, priorities are coloured using variables from Obsidian and
        your theme. Turn off the toggle above to use your own colours.
      </p>

      <div class="field" style="margin-top: 14px">
        <label>Priorities</label>
        <div class="pri-row" v-for="p in config.priorities" :key="p.key">
            <input
            class="lbl-in"
            type="text"
            v-model="p.label"
            :placeholder="p.key"
            />
            <input
              v-if="!config.themeAware"
              type="color"
              class="pri-color"
              v-model="p.hex"
              :title="(p.label || p.key) + ' colour'"
            />
        </div>
      </div>
      <div >
          <div class="field" style="margin-top: 14px">
            <label>Color strentgh (all priorities)</label>
            <div class="rng-row">
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.05"
                v-model.number="config.globalOpacity"
                @input="applyOpacity"
              />
              <span class="val">{{ config.globalOpacity.toFixed(2) }}</span>
            </div>
          </div>
        <div class="row" style="margin-top: 12px" v-if="!config.themeAware">
          <button class="ghost-btn" @click="matchTheme">
            Reset to theme colours
          </button>
        </div>
      </div>

    </section>

    <section class="group">
      <h2>Other random settings</h2>
      <div class="field">
        <label>Corner radius</label>
        <div class="rng-row">
          <input
            type="range"
            min="0"
            max="16"
            step="1"
            v-model.number="config.radius"
          />
          <span class="val">{{ config.radius }}px</span>
        </div>
    </div>
    <div class="field">
      <label>Edit button text</label>
      <input type="text" v-model="config.editLabel" placeholder="EDIT" />
    </div>
    <div class="field">
      <label>Postpone button text</label>
      <input
        type="text"
        v-model="config.postponeLabel"
        placeholder="POSTPONE"
      />
    </div>
    </section>

    <section class="group">
        
        <p class="note"><a href="https://www.benjaminezequiel.com/" target="_blank">Benjamin Ezequiel</a> @ 2026</p>   
    </section>
  </aside>
</template>

<script setup>
import { THEMES } from "../data/themes.js";

const props = defineProps({
  config: { type: Object, required: true },
  themes: { type: Array, required: true },
});

// The config is a reactive object; mutating its nested fields here updates the app.
function matchTheme() {
  const d = THEMES[props.config.themeId].defaults;
  props.config.priorities.forEach((p) => {
    p.hex = d[p.key];
  });
}

function applyOpacity() {
  props.config.priorities.forEach((p) => {
    p.opacity = props.config.globalOpacity;
  });
}
</script>
