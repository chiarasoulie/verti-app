<template>
  <v-app>
    <VertigoAppBar></VertigoAppBar>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-responsive class="align-center text-center fill-height">
          <RouterView /> 
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import VertigoAppBar from '@/components/VertigoAppBar.vue';
</script>
