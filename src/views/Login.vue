<template>
    <v-card 
        class="mx-auto"
        prepend-icon="mdi-account"
        width="400"
    >
        <template v-slot:title>
            <span class="font-weight-black">Bem vindo ao Controle Financeiro</span>
        </template>
    </v-card>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>