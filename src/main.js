import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/style.css'
import App from './App.vue'
const app = createApp(App)
import i18n from './lang/index'
import router from './router'
// icons
import 'virtual:svg-icons-register'
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

app.mount('#app')
