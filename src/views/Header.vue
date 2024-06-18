<template>
  <dynamic-app-bar>
    <template v-slot:append>
      <v-col cols="auto">
        <v-btn @click="goToLogin">Login</v-btn>
        <v-divider class="mx-2" vertical />
        <v-btn density="comfortable">
          <v-icon icon="mdi-menu-down" />
        </v-btn>
      </v-col>
    </template>
  </dynamic-app-bar>
</template>

<script>

export default {
  name: 'HeaderPage',
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>