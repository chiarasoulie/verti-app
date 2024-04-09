<!-- bouton BACK pour revenir à la page précédente -->
<!-- le composant a un paramètre (une props)
    qui est l'url de destination ;
    utilisation :
     <VertigoBackButton routeBack="/route"></VertigoBackButton>


-->
<template>
  <v-row justify="start">
      <v-btn
            size="x-large"
            rounded="xl"
            variant="elevated"
            @click="updateListePages"
            :to="props.routeBack">
            Back
      </v-btn>
  </v-row>
</template>
<script setup>
const props = defineProps(["routeBack"])


import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'


const app = useAppStore()
const { listePages} = storeToRefs(app)


function updateListePages(){
listePages.value.splice(-2);
}
</script>

