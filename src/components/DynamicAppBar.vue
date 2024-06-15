<template>
  <v-card :class="vCardClass" :max-width="maxWidth">
    <v-layout>
      <v-app-bar :color="appBarColor" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon />
        </template>

        <v-app-bar-title> {{ title }} </v-app-bar-title>

        <template v-slot:append>
          <slot name="append">
            <v-divider
              class="mx-3 align-self-center"
              length="24"
              thickness="2"
              vertical
            />
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </slot>
        </template>
      </v-app-bar>

      <v-main>
        <slot name="content" />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'DynamicAppBar',
  props: {
    maxWidth: { type: String, required: false, default: '' },
    vCardClass: { type: String, required: false, default: 'mx-auto' },
    appBarColor: { type: String, required: false, default: 'primary' },
    title: { type: String, required: true, default: 'Controle Financeiro' }
  }
}
</script>