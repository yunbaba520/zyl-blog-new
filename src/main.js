import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'
// icons
import 'virtual:svg-icons-register'
const app = createApp(App)
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

app.mount('#app')
