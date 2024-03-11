<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
      <p>Orientier le patient vers les urgences !</p>
      <p>{{message}}</p>
      </v-col>
    </v-row>
    <VertigoGenererPDF></VertigoGenererPDF>
  </template>
    
<script setup>
  import VertigoGenererPDF from '@/components/VertigoGenererPDF.vue';

  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { message } = storeToRefs(app)
</script>
    