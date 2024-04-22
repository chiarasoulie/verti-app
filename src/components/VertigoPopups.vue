<template>
    <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="white"
        variant="flat"
        size="xxs"
        >
        <v-icon icon="mdi-information" color="#20285F"></v-icon>
       </v-btn>
    </template>
  
  
    <template v-slot:default="{ isActive }">
      <v-card title="Informations complémentaires">
        <v-card-text>
          {{props.texte}}<br>
          {{props.texte2}}
         </v-card-text>
  
  
        <v-card-actions>
          <v-spacer></v-spacer>
  
  
          <v-btn
            text="Fermer"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  </template>
  
  
  <script setup>
  import { defineProps } from 'vue';
  
  
  const props = defineProps({
  texte: String, // Définissez le type de la propriété text comme une chaîne de caractères
  texte2: String // Définissez le type de la propriété text comme une chaîne de caractères
});
  </script>
  
  
  
  