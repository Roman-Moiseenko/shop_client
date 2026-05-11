<script setup lang="ts">
const props = defineProps<{ error?: Error | null }>()
const reload = () => window.location.reload()
</script>

<template>
  <div class="error-block">
    <el-result
        icon="error"
        title="Ошибка загрузки"
        :sub-title="error?.message || 'Что-то пошло не так'"
    >
      <template #extra>
        <el-button type="primary" @click="reload">Повторить</el-button>
      </template>
    </el-result>
  </div>
</template>

<style scoped>

</style>