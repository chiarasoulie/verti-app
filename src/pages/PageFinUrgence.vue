<template>
  <v-row
    align="center" 
    justify="center">
    <v-col>
    <VertigoAppBar></VertigoAppBar>
    <p>Orienter le patient vers les urgences !</p>
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
import VertigoAppBar from '@/components/VertigoAppBar.vue';
const app = useAppStore()
const { message } = storeToRefs(app)
const { diag } = storeToRefs(app)

diag.value="URGENCES";

</script>
  
    