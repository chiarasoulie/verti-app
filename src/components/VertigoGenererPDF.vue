<!-- Bouton pour générer le PDF -->
<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
const app = useAppStore()

</script>
<template>
  <v-row
    align="center" 
    justify="center"
  >
    <v-col>
      <v-btn 
        size="x-large"
        variant="elevated"
        to="/PagePDF"
        rounded="xl" 
        color="#20285F" 
        dark
      >
        Voir le PDF
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>
  

  