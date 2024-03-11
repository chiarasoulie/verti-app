<!-- bouton BACK pour revenir à la page précédente -->
<!-- le composant a un paramètre (une props)
    qui est l'url de destination ;
    utilisation : 
     <VertigoBackButton routeBack="/route"></VertigoBackButton>

-->
<template>
    <v-row
      align="center" 
      justify="start">
        <v-btn 
              size="x-large"
              rounded="xl"
              variant="elevated"
              :to="props.routeBack">
              Back
        </v-btn>
    </v-row>
</template>
<script setup>
const props = defineProps(["routeBack"])
</script>