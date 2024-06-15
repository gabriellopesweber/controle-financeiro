<template>
    <v-container>
      <dynamic-app-bar>
        <template v-slot:append>
          <v-col cols="auto">
            <v-btn density="comfortable">
              <v-icon icon="mdi-menu-down" />
            </v-btn>
          </v-col>
        </template>
      </dynamic-app-bar>
    </v-container>
  </template>
  
  <script>
  import DynamicAppBar from '@/components/DynamicAppBar.vue'
  
  export default {
    name: 'HeaderPage',
    components: {
      DynamicAppBar
    }
  }
  </script>
  