<template>
  <vue-particles id="tsparticles" @particles-loaded="particlesLoaded" :options="particlesOptions" />
  <div class="w-full h-screen flex flex-col justify-between">
    <Header></Header>
    <div class="flex-1 bg-slate-100 dark:bg-gray-900">
      <RouterView></RouterView>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
// change current title
import { useTitle } from '@vueuse/core'
const title = useTitle()
title.value = 'zyl blog'
// change current icon
import { useFavicon } from '@vueuse/core'
const icon = useFavicon()
icon.value = './src/assets/svg/logo.svg'
// 粒子特效
// import { useDark } from '@vueuse/core'

// const isDark = useDark()
// const color = computed(() => (isDark.value ? '#ff0000' : '#0000ff'))
const color = ref('#999999')
const particlesLoaded = async (container) => {
  console.log('Particles container loaded', container)
}

const particlesOptions = ref({
  background: {
    color: {
      value: ''
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: color.value
    },
    links: {
      color: color.value,
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: 'bounce',
      random: false,
      speed: 6,
      straight: false
    },
    number: {
      density: {
        enable: true
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
})
</script>
