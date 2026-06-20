<script setup>
import { computed } from 'vue';
import { TASK_HTML } from '../data/taskSample.js';

const props = defineProps({
  css: { type: String, default: '' },
  theme: { type: Object, required: true }
});

const srcdoc = computed(() => {
  const t = props.theme;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    :root{${t.vars}}
    html,body{margin:0;}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
      background:${t.page};color:${t.textNormal};padding:18px 20px;font-size:15px;line-height:1.5;}
    ul.contains-task-list{list-style:none;margin:0;padding:0;}
    .tasks-group-heading{margin:16px 0 8px;font-size:0.95em;font-weight:600;}
    .tasks-group-heading:first-child{margin-top:0;}
    .tasks-group-heading p{margin:0;}
    a{color:var(--link-color);text-decoration:none;}
    .task-description{font-size:0.95em;}
    input[type=checkbox]{width:16px;height:16px;accent-color:var(--link-color);}
    .task-count{margin-top:14px;font-size:0.8em;color:var(--text-muted);}
    ${props.css}
  </style></head><body>${TASK_HTML}</body></html>`;
});
</script>

<template>
  <div class="preview-wrap">
    <iframe class="preview" :srcdoc="srcdoc" title="Live preview" />
  </div>
</template>
