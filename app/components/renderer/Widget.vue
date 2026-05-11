<script setup lang="ts">
import type { WidgetInstance } from '~/composables/usePage'
const props = defineProps<{
  widget: WidgetInstance
}>()

// Преобразуем snake_case в PascalCase и добавляем префикс Widget
const widgetName = computed(() => {
  const parts = props.widget.widgetSlug.split('_')
  const pascal = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('')
  return `${pascal}`
})

// Динамически импортируем компонент из папки widgets/
const widgetComponent = defineAsyncComponent(() =>
    import(`~/components/widgets/${widgetName.value}.vue`).catch(() => {
      console.error(`Виджет ${widgetName.value} не найден`)
      return defineComponent({
        render() {
          return h('div', 'Виджет не найден')
        }
      })
    })

)

// Передаём все параметры виджета как пропсы
const widgetParams = computed(() => props.widget.params)
</script>

<template>
  <component :is="widgetComponent" v-bind="widgetParams" />
</template>

<style scoped>

</style>