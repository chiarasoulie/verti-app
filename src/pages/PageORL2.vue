<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
      <h2 class="question" style="text-align: center;font-family: Manjari; color: #20285F">Résultat de l'examen ORL : </h2>
      <p>{{ ORL2 }}</p>
      <br>
      <br>
      <br>
      <br>
        <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageDiagnosticORL2"
            @click="remplirListe('Normal')"
            style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;">
            Normal
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageMeniereEnCrise"
            @click="remplirListe('Surdité, acouphènes')"
            style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;">
            Surdité, Acouphènes
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageLabyrinthite"
            @click="remplirListe('Otite, Otalgie, Otorrhée')"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;font-family: Manjari;">
            Otite, Otalgie, Otorrhée
      </v-btn>
      </v-col>
    </v-row>
    <br>
    <br>
    <v-row align="end" class="custom-row" dense>
      <VertigoBackButton routeBack="/PageTraumatisme" class="custom-button"></VertigoBackButton>
      <VertigoPasserButton passerQuestion="/PageDiagnosticORL2" class="custom-button"></VertigoPasserButton>
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
  const {ORL2, listePages, pageDeRetour } = storeToRefs(app)
  listePages.value.push(["Résultat ORL", "/PageORL2"])
  pageDeRetour.value="/PageORL2"

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
    