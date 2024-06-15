<template>
  <v-app>
    <header-page />
    <router-view />
  </v-app>
</template>

<script>
import HeaderPage from '@/views/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderPage
  }
}
</script>
