<script setup>
import { ref } from 'vue';

const props = defineProps({
  css: { type: String, default: '' },
  error: { type: [String, null], default: null }
});

const copied = ref(false);

function copy() {
  navigator.clipboard.writeText(props.css).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 1400);
  });
}

function download() {
  const blob = new Blob([props.css], { type: 'text/css' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'tidy-tasks.css';
  a.click();
  URL.revokeObjectURL(a.href);
}
</script>

<template>
  <section class="code">
    <header class="code-head">
      <span class="fname">tidy-tasks.css</span>
      <div class="code-actions">
        <button class="btn" @click="copy">{{ copied ? 'Copied ✓' : 'Copy' }}</button>
        <button class="btn primary" @click="download">Download</button>
      </div>
    </header>
    <pre v-if="error" class="out err">{{ error }}</pre>
    <pre v-else class="out"><code>{{ css }}</code></pre>
  </section>
</template>
