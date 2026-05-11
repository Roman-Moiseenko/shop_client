<script setup lang="ts">
import type { Page } from '~/composables/usePage'

const props = defineProps<{
  meta: Page['meta']  // Предполагаем, что meta содержит title, description, og_title, etc.
}>()

// useSeoMeta автоматически отслеживает изменения и работает на сервере и клиенте
useSeoMeta({
  title: () => props.meta?.title || '',                // Заголовок страницы
  description: () => props.meta?.description || '',    // Мета-описание
  ogTitle: () => props.meta?.title || '',
  ogDescription: () => props.meta?.description || '',
})
</script>

<template>

</template>

<style scoped>

</style>