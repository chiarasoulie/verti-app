<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
      <p>Y-a-t-il des vertiges maintenant ?</p>
      <p>{{ vertigesMaintenant }}</p>

      <v-btn-toggle v-model="vertigesMaintenant" color="deep-purple-accent-3">
        <v-btn 
              size="x-large"
              rounded="xl"
              variant="elevated"
              value="oui"
              to="/PageHints">
              Oui
          </v-btn>
          <v-btn 
              size="x-large"
              rounded="xl"
              variant="elevated"
              value="non"
              to="/PageNystagmusSpontane">
              Non
          </v-btn>
      </v-btn-toggle>
      </v-col>
    </v-row>
    <VertigoBackButton routeBack="/PageDrapeauxRouges"></VertigoBackButton>
  </template>
    
    
<script setup>
  import VertigoBackButton from '@/components/VertigoBackButton.vue';

  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { vertigesMaintenant } = storeToRefs(app)
</script>
    