<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
      <h2 class="question" style="text-align: center;font-family: Manjari; color: #20285F">Résultat de l'examen ORL : </h2>
      <p>{{ orl3}}</p>
      <br>
      <br>
      <br>
        <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageDiagnosticNormalORL3"
            @click="remplirListe('Normal')"
            style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;">
            Normal
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageMeniereHorsCrise"
            @click="remplirListe('Hypoacousie, acouphènes')"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;font-family: Manjari;">
            Hypoacousie <br> Acouphènes
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageLabyrinthite"
            @click="remplirListe('Otite, Oltagie, Otorrhée')"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;font-family: Manjari;">
            Otite, Oltagie <br> Otorrhée
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageCommotionLabyrinthique"
            @click="remplirListe('Autre')"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;font-family: Manjari;">
            Autre
      </v-btn>
      </v-col>
    </v-row>
    <br>
    <v-row align="end" class="custom-row" dense>
      <VertigoBackButton routeBack="/PageNystagmusDeclenche" class="custom-button"></VertigoBackButton>
      <VertigoPasserButton passerQuestion="/PageDiagnosticNormalORL3" class="custom-button"></VertigoPasserButton>
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
  const { pageDeRetour,orl3, listePages } = storeToRefs(app)
  pageDeRetour.value="/PageORL3"
  listePages.value.push(["Résultat ORL", "/PageORL3"])
  

function remplirListe(valeur){
  let dernier= listePages.value.length -1;
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
.custom-row {
  display: flex;
  justify-content: space-between;
  background-color:white;
}

.custom-button {
  margin-right: 3px;
  margin-left: 3px;
}

</style>
    