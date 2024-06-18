<template>
  <v-app>
    <v-main>
      <header-page />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderPage from '@/views/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderPage
  }
}
</script>
