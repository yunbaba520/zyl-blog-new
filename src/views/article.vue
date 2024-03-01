<template>
  <div class="w-full h-full flex p-10 bg-gray-100">
    <div class="w-80 relative">
      <ul class="sticky top-10">
        <li class="my-3" v-for="(values, key) in names" :key="key">
          <div class="text-lg font-bold">{{ key }}</div>
          <div
            class="my-1 mx-2 cursor-pointer"
            v-for="name in values"
            :key="name"
            @click="getFileDetail(key, name)"
          >
            {{ name }}
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <v-md-preview :text="textStr"></v-md-preview>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import names from '@/utils/getMdFile'
import { requestGetMdFile } from '@/api/article/md'
import useLoading from '@/hooks/useLoading'

const textStr = ref('')
function getFileDetail(key, name) {
  console.log(key, name)
  useLoading.open()
  requestGetMdFile(key, name)
    .then((res) => {
      // console.log(res)
      textStr.value = res
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    })
    .catch((err) => {
      console.log('获取md文件失败', err)
    })
    .finally(() => {
      useLoading.close()
    })
}
const firstKey = Object.keys(names)[0]
getFileDetail(firstKey, names[firstKey][0])
</script>
