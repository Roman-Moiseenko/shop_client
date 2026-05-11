<script setup lang="ts">
//import type { Page } from '~/types'

const props = defineProps<{
  slug: string
}>()

const { page, pending, error } = usePage(props.slug)

const pageComponent = computed(() => {
  if (!page.value?.template) return null
  const name = page.value.template.charAt(0).toUpperCase() + page.value.template.slice(1)
  return defineAsyncComponent(() =>
      import(`~/components/page-templates/${name}.vue`)
          .catch(() => import('~/components/page-templates/Default.vue'))
  )
})
</script>

<template>
  <div>
    <AppSeoHead v-if="page" :meta="page.meta" />
    <UiLoader v-if="pending" />
    <UiErrorBlock v-else-if="error" :error="error" />
    <!-- Данных нет и загрузка завершена → 404 -->
    <div v-else-if="!page" class="not-found">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <NuxtLink to="/">Вернуться на главную</NuxtLink>
    </div>
    <component
        v-else
        :is="pageComponent"
        :page="page"
    >
      <slot />
    </component>
  </div>
</template>

<style scoped>

</style>