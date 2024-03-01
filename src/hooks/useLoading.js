import { createApp } from 'vue'
import Loading from '@/components/loading.vue'

const $loading = createApp(Loading).mount(document.createElement('div'))

const useLoading = {
  open() {
    document.body.appendChild($loading.$el)
  },
  close() {
    document.body.removeChild($loading.$el)
  }
}

export default useLoading
