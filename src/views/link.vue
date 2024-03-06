<template>
  <div class="container mx-auto">
    <div class="mb-10" v-for="item in list" :key="item.type">
      <div class="text-center text-xl font-bold py-4 text-black dark:text-white">
        {{ item.type }}
      </div>
      <ul class="flex flex-wrap justify-center">
        <li
          class="group flex items-center w-96 h-20 m-4 p-3 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
          v-for="value in item.values"
          :key="value.name"
          @click="goLink(value.url)"
          title="点击打开链接"
        >
          <img v-if="value.icon" class="w-10 h-10 mr-3" :src="value.icon" alt="" />
          <div class="text-gray-500 dark:text-gray-300">
            <div class="text-lg group-hover:text-black dark:group-hover:text-white">
              {{ value.name }}
            </div>
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
      },
      {
        name: 'git',
        icon: handleImg('link/git.png'),
        url: 'https://git-scm.com/downloads',
        describe: '目前世界上最先进的分布式版本控制系统'
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
      },
      {
        name: '一元机场',
        icon: '',
        url: 'https://xn--4gq62f52gdss.ink/',
        describe: '科学上网工具'
      },
      {
        name: '在线颜色选择器',
        icon: handleImg('link/color.png'),
        url: 'http://tools.jb51.net/static/colorpicker/',
        describe:
          '提供颜色值的计算工具，以及几种颜色选择的工具，方便大家选择颜色，并将颜色转换成自己想要的格式。'
      },
      {
        name: 'css Gradient',
        icon: handleImg('link/cssGradient.png'),
        url: 'https://cssgradient.io/',
        describe: '在线测试css渐变色'
      }
    ]
  },
  {
    type: '开发工具库',
    values: [
      {
        name: 'vueuse',
        icon: handleImg('link/vueuse.png'),
        url: 'https://vueuse.org/guide/',
        describe: 'VueUse是一个基于Composition API的实用函数集合'
      },
      {
        name: 'dayjs',
        icon: handleImg('link/dayjs.png'),
        url: 'https://dayjs.fenxianglu.cn/',
        describe:
          'Day.js是一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间。'
      }
    ]
  },
  {
    type: 'UI组件库',
    values: [
      {
        name: 'element-plus',
        icon: handleImg('link/element-plus.svg'),
        url: 'https://element-plus.org/zh-CN/#/zh-CN',
        describe: '基于 Vue 3，面向设计师和开发者的组件库'
      },
      {
        name: 'Mamba UI',
        icon: handleImg('link/mamba.png'),
        url: 'https://www.mambaui.com/docs',
        describe: '基于Tailwind CSS的组件库'
      },
      {
        name: 'UI verse',
        icon: handleImg('link/uiverse.png'),
        url: 'https://uiverse.io/',
        describe: '适用于任何项目的开源UI元素，css样式'
      },
      {
        name: 'tailwindcss',
        icon: handleImg('link/tailwindcss.png'),
        url: 'https://www.tailwindcss.cn/',
        describe: '只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。'
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
      },
      {
        name: 'cxy521',
        icon: handleImg('link/cxy521.png'),
        url: 'http://www.cxy521.com/',
        describe: '程序员一站式导航'
      }
    ]
  }
])

function goLink(url) {
  // console.log(url)
  window.open(url, '_blank')
}
</script>
