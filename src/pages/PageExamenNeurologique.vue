<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
      <h2 class="question">Examen neurologique : </h2>
      <p>{{ examen }}</p>
      <br>
      <br>
      <br>
      <br>
        <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageCervicalgies"
            @click="remplirListe('Normal')"
            style="text-transform: capitalize; letter-spacing: normal;">
            Normal
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageTraumatisme"
            @click="remplirListe('Syndrome vestibulaire périphérique')"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            Syndrome vestibulaire <br>périphérique
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageFauxVertige"
            @click="remplirListe('Autre cause neurologique')"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            Autre cause <br>neurologique
      </v-btn>
      </v-col>
    </v-row>
    <br>
    <br>
    <v-row
      align="end" >
  <VertigoBackButton routeBack="/PageHints"></VertigoBackButton>
  <VertigoPasserButton passerQuestion="/PageCervicalgies"></VertigoPasserButton>
        </v-row>
  </template>
    
    
<script setup>
  import VertigoBackButton from '@/components/VertigoBackButton.vue';
  import VertigoAppBar from '@/components/VertigoAppBar.vue';
  import VertigoPasserButton from '@/components/VertigoPasserButton.vue';

  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { listePages,pageDeRetour,examen} = storeToRefs(app)
  pageDeRetour.value="/PageExamenNeurologique"
  listePages.value.push(["Examen neurologique", "/PageExamenNeurologique"])

  function remplirListe(valeur){
    let dernier = listePages.value.length- 1;
    listePages.value[dernier].push(valeur)
  }
  
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
    