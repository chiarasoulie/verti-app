<template>
  <v-row
    align="center"
    justify="center">
    <v-col>
      <VertigoAppBar></VertigoAppBar>
    <p>Hints</p>

    <p>{{ hints.Hi }}</p>

    <v-btn-toggle v-model="hints.Hi" color="deep-purple-accent-3">
      <v-btn
            size="x-large"
            value="-">
            ---
        </v-btn>
        <p>Hi</p>
        <p><VertigoPopups texte="info sur les Hi"></VertigoPopups></p>
        <v-btn
            size="x-large"
            value="+">
            +++
        </v-btn>
    </v-btn-toggle>
    <p>{{ hints.N }}</p>
    <v-btn-toggle v-model="hints.N" color="deep-purple-accent-3">
      <v-btn
            size="x-large"
            value="-">
            ---
        </v-btn>
        <p>N</p>
        <p><VertigoPopups texte="info sur les N"></VertigoPopups></p>          <v-btn
            size="x-large"
            value="+">
            +++
        </v-btn>
    </v-btn-toggle>
    <p>{{ hints.TS }}</p>
    <v-btn-toggle v-model="hints.TS" color="deep-purple-accent-3">
      <v-btn
            size="x-large"
            value="-">
            ---
        </v-btn>
        <p>TS</p>
        <p><VertigoPopups texte="info sur les TS"></VertigoPopups></p>          <v-btn
            size="x-large"
            value="+">
            +++
        </v-btn>
    </v-btn-toggle>
    </v-col>
  </v-row>
  <v-btn
      size="x-large"
      rounded="xl"
      variant="elevated"
      @click="valider"
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
  }
  if (hints.value.Hi == "+" && hints.value.N == "+" && hints.value.TS == "+") {
    message.value = "Vertige central"
    router.push({ name: '/PageFinUrgence' });
  }
  else if( (hints.value.Hi == "+" && hints.value.N == "+" && hints.value.TS == "-")
  || (hints.value.Hi == "+" && hints.value.N == "-" && hints.value.TS == "-")
  || (hints.value.Hi == "-" && hints.value.N == "-" && hints.value.TS == "+")
  || (hints.value.Hi == "-" && hints.value.N == "+" && hints.value.TS == "+")
  || (hints.value.Hi == "-" && hints.value.N == "+" && hints.value.TS == "-")
  || (hints.value.Hi == "+" && hints.value.N == "-" && hints.value.TS == "+") )
{
    router.push({ name: '/PageExamenNeurologique'});


}
}
</script>