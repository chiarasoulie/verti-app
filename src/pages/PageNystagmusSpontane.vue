<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
      <p>S'agit-il d'un Nystagmus spontané ?</p>

      <v-btn-toggle v-model="nystagmusSpontane" color="deep-purple-accent-3">
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
              value="non">
              Non
          </v-btn>
      </v-btn-toggle>
      </v-col>
    </v-row>
    <VertigoBackButton routeBack="/PageVertigesMaintenant"></VertigoBackButton>
  </template>
    
    
<script setup>
  import VertigoBackButton from '@/components/VertigoBackButton.vue';

  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { nystagmusSpontane } = storeToRefs(app)
</script>
    