<script setup lang="ts">
const props = defineProps({
  error: Object   // передаётся Nuxt при error.vue в layouts
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-layout">
    <div class="error-container">
      <h1>{{ error?.statusCode }}</h1>
      <p>{{ error?.message }}</p>
      <el-button @click="handleError">Вернуться на главную</el-button>
    </div>
  </div>
</template>

<style scoped>

</style>