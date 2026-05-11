<script setup lang="ts">
// Здесь можно добавить middleware 'auth', проверяющий авторизацию definePageMeta({ middleware: 'auth' })
</script>

<template>
  <div class="account-layout">
    <AccountSidebar />
    <main class="account-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>

</style>