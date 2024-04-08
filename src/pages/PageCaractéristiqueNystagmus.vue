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
      <br>
        <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageVPPB"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            Vertige + Nystagmus typique
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageVertigeCentral"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            +/- Vertige + Nystagmus <br> atypique
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageAvisSpecialiste"
            style="text-transform: capitalize; letter-spacing: normal;height: auto;white-space: normal;">
            Pas de vertige + Nystagmus <br> typique
      </v-btn>
      </v-col>
    </v-row>
    <br>
    <br>
    <v-row
      align="end" >
      <VertigoBackButton routeBack="/PagenystagmusSpontane"></VertigoBackButton>
    </v-row>
  </template>
    
    
<script setup>
  import VertigoBackButton from '@/components/VertigoBackButton.vue';
  import VertigoAppBar from '@/components/VertigoAppBar.vue';

  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { listePages,caracteristique} = storeToRefs(app)
  listePages.value.push(["Caractéristique Nystagmus", "/PageCaracteristiqueNystagmus"])
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
    