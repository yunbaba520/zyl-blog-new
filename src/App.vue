<template>
  <div class="w-screen h-screen flex flex-col justify-between">
    <Header></Header>
    <div class="flex-1">
      <RouterView></RouterView>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
</script>
