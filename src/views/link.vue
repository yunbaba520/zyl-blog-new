<template>
  <div class="container mx-auto">
    <div class="mb-10" v-for="item in list" :key="item.type">
      <div class="text-center text-xl font-bold py-4">{{ item.type }}</div>
      <ul class="flex flex-wrap justify-center">
        <li
          class="group flex items-center w-96 h-20 m-4 p-3 rounded-xl cursor-pointer hover:bg-gray-50"
          v-for="value in item.values"
          :key="value.name"
          @click="goLink(value.url)"
        >
          <img class="w-10 h-10 mr-3" :src="value.icon" alt="" />
          <div class="text-gray-500">
            <div class="text-lg group-hover:text-black">{{ value.name }}</div>
            <div class="text-sm line-clamp-2">{{ value.describe }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { handleImg } from '@/utils/handleAssets'
const list = ref([
  {
    type: '各种平台',
    values: [
      {
        name: 'github',
        icon: handleImg('link/github.svg'),
        url: 'https://github.com',
        describe: '开源及私有软件项目的托管平台'
      },
      {
        name: 'MDN',
        icon: handleImg('link/mdn.png'),
        url: 'https://developer.mozilla.org/en-US/',
        describe: '拥有html,css,js详细文档,大量api参考资料,丰富的资源和学习机会'
      },
      {
        name: 'npm',
        icon: handleImg('link/npm.png'),
        url: 'https://www.npmjs.com/',
        describe: '基于node.js的开源包管理平台'
      },
      {
        name: 'csdn',
        icon: handleImg('link/csdn.png'),
        url: 'https://www.csdn.net/',
        describe: '中文最大的IT技术交流平台'
      }
    ]
  },
  {
    type: '大佬博客',
    values: [
      {
        name: 'antfu',
        icon: handleImg('link/antfu.png'),
        url: 'https://antfu.me',
        describe: '开源大佬的blog'
      }
    ]
  },
  {
    type: '在线工具',
    values: [
      {
        name: 'iloveimg',
        icon: handleImg('link/iloveimg.png'),
        url: 'https://www.iloveimg.com/zh-cn',
        describe: '可批量编辑图片的所有工具，免费'
      },
      {
        name: 'webSocket在线测试工具',
        icon: handleImg('link/ws.png'),
        url: 'http://wstool.jackxiang.com/',
        describe: 'ws在线测试工具'
      }
    ]
  }
])

function goLink(url) {
  // console.log(url)
  window.open(url, '_blank')
}
</script>
