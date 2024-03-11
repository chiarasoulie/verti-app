<template>
  <v-row
    align="center" 
    justify="center">
    <v-col>
      <v-btn 
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageDrapeauxRouges">
            Lancer le diagnostic
        </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
// -- utilisation du state global
import { useAppStore } from '@/store/app'
const app = useAppStore()
app.reset() // -- reset dans state pour le cas où le user choisit de recommencer
</script>
