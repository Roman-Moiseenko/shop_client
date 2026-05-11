<script setup lang="ts">
defineProps<{
  content?: string
  text_align?: string
}>()
</script>

<template>
  <div class="widget-block-title" :style="{ textAlign: text_align || 'left' }">
    <div v-html="content" />
  </div>
</template>

<style scoped>
.widget-block-title {
  margin: 1rem 0;
}
</style>