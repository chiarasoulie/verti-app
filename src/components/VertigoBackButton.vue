<!-- bouton BACK pour revenir à la page précédente -->
<!-- le composant a un paramètre (une props)
    qui est l'url de destination ;
    utilisation :
     <VertigoBackButton routeBack="/route"></VertigoBackButton>


-->
<template>
  <v-row justify="start">
      <v-btn
            class="bouton rond"
            variant="elevated"
            @click="updateListePages"
            :to="props.routeBack">
            <v-img src="../assets/Flèche retour.png" height="45" width="45"></v-img>
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

<style scoped>
.bouton.rond {
    width: 50px; /* Ajustez la taille du bouton selon vos besoins */
    height: 50px; /* Assurez-vous que la largeur et la hauteur sont égales pour obtenir un cercle */
    border-radius: 50%; /* Assurez-vous que le bouton a un rayon de bordure de 50% pour le rendre circulaire */
    padding: 0; /* Supprimez le rembourrage pour que l'image remplisse le bouton */
    box-shadow: none;
}

/* Ajoutez vos styles personnalisés ici si nécessaire */
</style>

