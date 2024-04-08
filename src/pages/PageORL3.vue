<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
      <h2 class="question">Résultat de l'examen ORL : </h2>
      <p>{{ traumatisme }}</p>
      <br>
      <br>
      <br>
      <br>
        <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageDiagnosticNormalORL3"
            style="text-transform: capitalize; letter-spacing: normal;">
            Normal
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageMeniereHorsCrise"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            Hypoacousie <br> Acouphènes
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageLabyrinthite"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            Otite, Oltagie <br> Otorrhée
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageCommotionLabyrinthique"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            Autre
      </v-btn>
      </v-col>
    </v-row>
    <br>
    <br>
    <v-row
      align="end" >
  <VertigoBackButton routeBack="/PageNystagmusDeclenche"></VertigoBackButton>

        </v-row>

  </template>
    
    
<script setup>
  import VertigoBackButton from '@/components/VertigoBackButton.vue';
  import VertigoAppBar from '@/components/VertigoAppBar.vue';

  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { pageDeRetour,traumatisme } = storeToRefs(app)
  pageDeRetour.value="/PageTraumatisme"
</script>

<style scoped>

.bouton{
    background-color: #CFCFCF;
    color: #20285F; 
    border: 4px solid #20285F;
    width: 500px;
    font-size: 30px;
}
.question{
    color:#20285F;
    font-family: Manjari;
    font-size: 40px;
}
.v-btn-toggle {
  flex-direction: column;
  height: 100px;
}
.v-btn {
  margin-bottom: 40px; /* Ajustez la valeur selon vos besoins */
}

</style>
    