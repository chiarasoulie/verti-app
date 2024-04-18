<template>
  <v-row
    align="center"
    justify="center">
    <v-col>
      <VertigoAppBar></VertigoAppBar>
    <h2>Hints</h2>
    <br>

    <div class=posi>
      <p><VertigoPopups texte="info sur les HI"></VertigoPopups></p>
    </div>

    <v-btn-toggle v-model="hints.Hi" color="#20285F">
      <v-btn
            size="x-large"
            value="-"
            rounded="xl">
            ---
        </v-btn>
        <div class = esp></div>
        <div class = posi>
        <p>Hi</p>
        </div>
        <div class = esp></div>

        <v-btn
            size="x-large"
            value="+"
            rounded="xl">
            +++
        </v-btn>
    </v-btn-toggle>

    <div class = posi><p><VertigoPopups texte="info sur les N"></VertigoPopups></p></div>
    <v-btn-toggle v-model="hints.N" color="#20285F">
      <v-btn
            size="x-large"
            value="-"
            rounded="xl">
            ---
        </v-btn>
        <div class = esp></div>
        <div class = posi>
        <p>N</p>
        </div>
        <div class = esp></div> 

         <v-btn
            size="x-large"
            value="+"
            rounded="xl">
            +++
        </v-btn>
    </v-btn-toggle>
    <div class = posi><p><VertigoPopups texte="info sur les TS"></VertigoPopups></p></div>
    <v-btn-toggle v-model="hints.TS" color="#20285F">
      <v-btn
            size="x-large"
            value="-"
            rounded="xl">
            ---
        </v-btn>
        <div class = esp></div>
        <div class = posi>
        <p>TS</p>
        </div> 
        <div class = esp></div>

        <v-btn
            size="x-large"
            value="+"
            rounded=xl>
            +++
        </v-btn>
    </v-btn-toggle>
    <br>
    <br>
    <br>
    <br>
    </v-col>
  </v-row>
  <v-btn
      size="x-large"
      rounded="xl"
      variant="elevated"
      @click="valider"
      color="#20285F" dark
      >
      Valider
  </v-btn>
  <v-row
      align="end" >
  <VertigoBackButton :routeBack="pageDeRetour"></VertigoBackButton>
  <VertigoPasserButton passerQuestion="/PageExamenNeurologique"></VertigoPasserButton>
        </v-row>
</template>
 
 
<script setup>
import VertigoBackButton from '@/components/VertigoBackButton.vue';
import VertigoPasserButton from '@/components/VertigoPasserButton.vue';
import VertigoPopups from '../components/VertigoPopups.vue';
import VertigoAppBar from '../components/VertigoAppBar.vue'

// -- utilisation du state global
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'

const app = useAppStore()
const { listePages,pageDeRetour, hints, message } = storeToRefs(app)
listePages.value.push(["HINTS", "/PageHints"])

// -- routage en fonction des hints
import router from '@/router'
function valider() {
  // -- les 3 sont "-" ==> urgence
  console.log(hints.value)
  if (hints.value.Hi == "-" && hints.value.N == "-" && hints.value.TS == "-") {
    message.value = "Vertige peripherique"
    router.push({ name: '/PageVertigePeripherique' });
    remplirListe('non');
  }
  if (hints.value.Hi == "+" && hints.value.N == "+" && hints.value.TS == "+") {
    message.value = "Vertige central"
    router.push({ name: '/PageFinUrgence' });
    remplirListe('oui');
  }
  else if( (hints.value.Hi == "+" && hints.value.N == "+" && hints.value.TS == "-")
  || (hints.value.Hi == "+" && hints.value.N == "-" && hints.value.TS == "-")
  || (hints.value.Hi == "-" && hints.value.N == "-" && hints.value.TS == "+")
  || (hints.value.Hi == "-" && hints.value.N == "+" && hints.value.TS == "+")
  || (hints.value.Hi == "-" && hints.value.N == "+" && hints.value.TS == "-")
  || (hints.value.Hi == "+" && hints.value.N == "-" && hints.value.TS == "+") )
{
    router.push({ name: '/PageExamenNeurologique'});
    remplirListe('pas tous');


}
function remplirListe(valeur){
  let dernier = listePages.value.length -1;
  listePages.value[dernier].push(valeur)
}
}
</script>
<style scpode>
.posi{
  position: relative;
  top: 10px;
}
.esp{
  width: 10px;
}


</style>