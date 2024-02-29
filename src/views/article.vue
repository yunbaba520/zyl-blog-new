<template>
  <div class="flex">
    <div>
      <ul>
        <li v-for="name in names" :key="name" @click="getFileDetail(name)">{{ name }}</li>
      </ul>
    </div>
    <div class="flex-1">
      <v-md-preview :text="textStr"></v-md-preview>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import names from '../utils/getMdFile'
import { requestGetMdFile } from '@/api/article/md'
const textStr = ref('')
function getFileDetail(name) {
  console.log(name)

  requestGetMdFile(name)
    .then((res) => {
      console.log(res)
      textStr.value = res
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>
