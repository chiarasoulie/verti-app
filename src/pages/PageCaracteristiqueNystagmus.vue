<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
        <VertigoAppBar></VertigoAppBar>
      <h2 class="question">Caractéristique du Nystagmus ? </h2>
      <p>{{ caracteristique }}</p>
      <br>
      <br>
      <br>
        <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageVPPB"
            @click="remplirListe('Vertige + Nystagmus typique')"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            Vertige + Nystagmus<br> typique
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageVertigeCentral"
            @click="remplirListe('Vertige + Nystagmus atypique')"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            +/- Vertige + Nystagmus <br> atypique
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageAvisSpecialiste"
            @click="remplirListe('Pas de vertige + Nystagmus typique')"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            Pas de vertige +<br> Nystagmus  typique
      </v-btn>
      </v-col>
    </v-row>
    <br>
    <br>
    <v-row align="end" class="custom-row" dense>
      <VertigoBackButton routeBack="/PageCaractéristiqueNystagmus" class="custom-button"></VertigoBackButton>
      <VertigoPasserButton passerQuestion="/PageVPPB" class="custom-button"></VertigoPasserButton>
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
  const { listePages,caracteristique, pageDeRetour} = storeToRefs(app)
  listePages.value.push(["Caractéristique Nystagmus", "/PageCaracteristiqueNystagmus"])
  pageDeRetour.value="/PageCaracteristiqueNystagmus"

  function remplirListe(valeur){
    let dernier = listePages.value.length - 1;
    listePages.value[dernier].push(valeur)
  }
</script>

<style scoped>

.bouton{
    background-color: #CFCFCF;
    font-family: Manjari;
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
    