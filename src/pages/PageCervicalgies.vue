<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
      <h2 class="question">Cervicalgies ?</h2>
      <p>{{ cervicalgies }}</p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <v-btn-toggle v-model="vertigesMaintenant" color="deep-purple-accent-3">
        <v-btn class="mr-4"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageTraumatisme"
            @click="remplirListe('oui')"
            style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;">
            Oui
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageNystagmusDeclenche"
            @click="remplirListe('non')"
            style="text-transform: capitalize; letter-spacing: normal;font-family: Manjari;">
            Non
      </v-btn>
      </v-btn-toggle>
      </v-col>
    </v-row>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <v-row
      align="end" class="custom-row" dense>
  <VertigoBackButton routeBack="/PageExamenNeurologique"class="custom-button"></VertigoBackButton>
  <VertigoPasserButton passerQuestion="/PageNystagmusDeclenche"class="custom-button"></VertigoPasserButton>
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
  const { listePages,pageDeRetour,cervicalgies } = storeToRefs(app)
  pageDeRetour.value="/PageCervicalgies"
  listePages.value.push(["Cervicalgies", "/PageCervicalgies"])

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
    font-family: Manjari;
    

}
.bouton{
    background-color: #CFCFCF;
    color: #20285F;
    border: 4px solid #20285F;
    width: 500px;
    font-size: 30px;
    font-family: Manjari;
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
    