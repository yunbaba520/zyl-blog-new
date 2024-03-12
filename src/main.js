import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/style.css'
import App from './App.vue'
const app = createApp(App)
import i18n from './lang/index'
import router from './router'
// icons
import 'virtual:svg-icons-register'
// 粒子特效
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'
// md
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import hljs from 'highlight.js'
VMdPreview.use(githubTheme, {
  Hljs: hljs
})

app.use(VMdPreview)
// pinia
app.use(createPinia())
// router
app.use(router)
app.use(i18n)
app.use(Particles, {
  init: async (engine) => {
    // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    await loadSlim(engine) // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
  }
})

app.mount('#app')
