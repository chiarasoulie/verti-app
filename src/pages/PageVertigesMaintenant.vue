<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
      <h2 class="question"style="text-align: center;font-family: Manjari; color: #20285F">Y-a-t-il des vertiges maintenant ?</h2>
   
      <br>
      <br>
      <br>
    <br>
      <v-btn-toggle v-model="vertigesMaintenant" color="deep-purple-accent-3">
        <v-btn class="mr-4"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageHints"
            style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;"
            @click="remplirListe('oui')">
            Oui
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageNystagmusSpontane"
            style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;"
            @click="remplirListe('non')">
            Non
      </v-btn>
      </v-btn-toggle>
      </v-col>
    </v-row>
    <br>
    <br>
    <br>
    <br>
    <v-row align="end" class="custom-row" dense>
      <VertigoBackButton routeBack="/PageDrapeauxRouges" class="custom-button"></VertigoBackButton>
      <VertigoPasserButton passerQuestion="/PageHints" class="custom-button"></VertigoPasserButton>
    </v-row>
  </template>
    
    
<script setup>
  import VertigoBackButton from '@/components/VertigoBackButton.vue';
  import VertigoPasserButton from '@/components/VertigoPasserButton.vue';
  import VertigoAppBar from '@/components/VertigoAppBar.vue';

  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { listePages,pageDeRetour,vertigesMaintenant } = storeToRefs(app)
  pageDeRetour.value="/PageVertigesMaintenant"
  listePages.value.push(["Vertige maintenant", "/PageVertigeMaintenant"])

  function remplirListe(valeur){
    let dernier = listePages.value.length - 1;
    listePages.value[dernier].push(valeur)
  }

</script>

<style scoped>
.mr-4{
    background-color: #CFCFCF;
    color: #20285F; 
    border: 4px solid #20285F;
    width: 500px;
    font-size: 30px;
    

}
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
    font-size: 50px;
}
.v-btn-toggle {
  flex-direction: column;
  height: 100px;
}
.v-btn-toggle .v-btn {
  margin-bottom: 12px; /* Ajustez la valeur selon vos besoins */
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
    