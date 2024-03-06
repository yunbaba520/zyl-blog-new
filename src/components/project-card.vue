<template>
  <div
    class="w-full mb-4 border-solid border-2 border-gray-200 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg"
    @click="goProject"
    title="点击打开项目地址"
  >
    <img :src="item.img" alt="图片加载失败" />
    <div class="p-3 border-t-2">
      <h1 class="text-2xl text-gray-600 dark:text-gray-200">{{ item.name }}</h1>
      <p class="mt-3 text-gray-500 dark:text-gray-300">{{ item.info }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
function goProject() {
  window.open(props.item.url, '_blank')
}
</script>
