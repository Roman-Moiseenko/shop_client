<script setup lang="ts">
import type { Page } from '~/composables/usePage'

const props = defineProps<{
  page: Page
}>()

</script>

<template>
  <div class="page-default">
    <h1>{{ page.title }}</h1>

    <!-- Простая страница -->
    <div v-if="page.contentType === 'simple'" v-html="page.content" class="page-content" />

    <!-- Страница с виджетами -->
    <div v-else-if="page.contentType === 'widget_based'" class="page-widgets">
      <template v-for="block in page.blocks" :key="block.id">
        <RendererWidget
            v-if="block.section === null || block.section === 'main'"
            :widget="block.widgetInstance"
        />
      </template>
    </div>

    <!-- На случай неизвестного типа -->
    <div v-else>
      <p>Неизвестный тип страницы</p>
    </div>
  </div>
</template>

<style scoped>
.page-default {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.page-content {
  line-height: 1.6;
}
.page-widgets {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>