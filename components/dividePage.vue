<!--
  THIS COMPONENT IS NOT OURS
  THIS IS FROM https://github.com/logicspark/vitepress-theme-api
  Due to  Node.js version differences there were some issues when trying to yarn add vitepress-theme-api
  So we decided to just create the component this way
-->

<script setup lang="ts">
const props = defineProps<{ top?: number }>();
</script>

<template>
  <div class="container-content">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right" :style="{ top: props.top ? `${props.top}px` : '0px' }">
      <slot name="right"></slot>
    </div>
  </div>
</template>
