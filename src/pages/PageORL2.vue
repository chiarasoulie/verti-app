<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
      <h2 class="question">Résultat de l'examen ORL : </h2>
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
            style="text-transform: capitalize; letter-spacing: normal;">
            Normal
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageMeniereEnCrise"
            @click="remplirListe('Surdité, acouphènes')"
            style="text-transform: capitalize; letter-spacing: normal;">
            Surdité, Acouphènes
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageLabyrinthite"
            @click="remplirListe('Otite, Otalgie, Otorrhée')"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            Otite, Otalgie, Otorrhée
      </v-btn>
      </v-col>
    </v-row>
    <br>
    <br>
    <v-row
      align="end" >
  <VertigoBackButton routeBack="/PageTraumatisme"></VertigoBackButton>
        </v-row>
  </template>
    
    
<script setup>
  import VertigoBackButton from '@/components/VertigoBackButton.vue';
  import VertigoAppBar from '@/components/VertigoAppBar.vue';

  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const {ORL2, listePages } = storeToRefs(app)
  listePages.value.push(["Résultat ORL", "/PageORL2"])

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

</style>
    