<template>
  <div class="w-full h-screen flex flex-col justify-between">
    <Header></Header>
    <div class="flex-1 bg-slate-100 dark:bg-gray-900">
      <RouterView></RouterView>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
</script>
