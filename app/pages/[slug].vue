<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
// На случай, если страница не найдена, можно выбросить 404
watchEffect(() => {
  if (!route.params.slug) return
  // опционально можно проверить существование страницы внутри PageRenderer
})
</script>

<template>
  <RendererPage :slug="route.params.slug" />
</template>

<style scoped>

</style>