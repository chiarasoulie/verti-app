<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
      <VertigoAppBar></VertigoAppBar>
      <h2 class="question">D'après l'examen clinique on s'oriente vers : </h2>
      <p>{{ vertigeperipherique }}</p>
      <br>
      <br>
      <div class="diagnostic">
        <h1>VERTIGE PERIPHERIQUE</h1>
      </div>
      <br>
      <br>
      <br>
      <br>
        <v-btn class="mr-4"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageTraumatisme"
            style="text-transform: capitalize; letter-spacing: normal;">
            Suivant
      </v-btn>
      </v-col>
    </v-row>
    <br>
    <br>
    <v-row
      align="end" >
  <VertigoBackButton routeBack="/PageHints"></VertigoBackButton>
  <VertigoPasserButton passerQuestion="/PageTraumatisme"></VertigoPasserButton>
        </v-row>
  </template>

<script setup>
import VertigoAppBar from '@/components/VertigoAppBar.vue';
import VertigoBackButton from '@/components/VertigoBackButton.vue';
import VertigoPasserButton from '@/components/VertigoPasserButton.vue';

// -- utilisation du state global
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
const app = useAppStore()
const { listePages,pageDeRetour,vertigeperipherique} = storeToRefs(app)
  pageDeRetour.value="/PageVertigePeripherique"
  listePages.value.push(["Vertige périphérique", "/PageVertigePeripherique"])
</script>

<style scoped>
.diagnostic {
  background-color: #CFCFCF; /* couleur grise */
  width: 100%;
  padding: 20px 0; /* espace autour du titre */
  text-align: center;
  box-sizing: border-box;
}

.mr-4{
    background-color: #20285F; 
    color: white; 
    width: 500px;
    font-size: 30px;
}
</style>