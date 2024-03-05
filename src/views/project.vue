<template>
  <div class="w-full h-full p-6 columns-3 gap-8">
    <div v-for="item in projects" :key="item.name">
      <ProjectCard :item="item"> </ProjectCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { handleImg } from '@/utils/handleAssets'
import ProjectCard from '@/components/project-card.vue'

const projects = ref([
  {
    name: 'vue3+js后台模板',
    img: handleImg('project/vue3_js_cms.jpg'),
    info: '这是一个使用 vue3 js vite的后台模板，帮助你快速搭建后台项目。支持更改布局、主题色、灰色模式、缓存等',
    url: 'https://github.com/yunbaba520/vue3_new_cms'
  }
])
</script>
