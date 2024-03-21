<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
      <h2 class="question">Y-a-t-il des vertiges maintenant ?</h2>
      <p>{{ vertigesMaintenant }}</p>

      <v-btn-toggle v-model="vertigesMaintenant" color="deep-purple-accent-3">
        <v-btn class="mr-4"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageHints">
            Non
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageNystagmusSpontane">
            Oui
      </v-btn>
      </v-btn-toggle>
      </v-col>
    </v-row>
    <VertigoBackButton routeBack="/PageDrapeauxRouges"></VertigoBackButton>
  </template>
    
    
<script setup>
  import VertigoBackButton from '@/components/VertigoBackButton.vue';
  import VertigoAppBar from '@/components/VertigoAppBar.vue';

  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { vertigesMaintenant } = storeToRefs(app)
</script>

<style scoped>
.bouton{
    background-color: #20285F; 
    color: white; 
}
.mr-4{
    border: 2px solid #20285F;
}
.question{
    color:#20285F;
    font-family: Manjari;
}
</style>
    