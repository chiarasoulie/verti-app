<template>
  <v-row
    align="center" 
    justify="center">
    <v-col>
    <VertigoAppBar></VertigoAppBar>
    <br>
    <br>
    <br>
    <br>
    <img src="../assets/draoeaux rouges.png" alt="drapeaux rouges" style="width: 200px; height: auto; vertical-align: middle;">
    <br>
    <br>
    <br>
    <br>
    <div style="display: inline-block; text-align: center;font-family: Manjari;"id=attention>
        <img src="../assets/triangle croix.png" alt="Image infos" style="width: 50px; height: auto; vertical-align: middle;margin-right: 10px;">
        <span style="display: inline-block; vertical-align: middle; color: #20285F;font-size: 18px;">Orienter le patient vers les urgences</span> 
      </div>
    <p>{{message}}</p>
    <br>
    <br>
    </v-col>
  </v-row>
  <VertigoGenererPDF></VertigoGenererPDF>
  <br>
  <br>
  <br>
  
  <v-row align="end" class="custom-row" dense>
      <VertigoBackButton routeBack="/PageDrapeauxRouges" class="custom-button"></VertigoBackButton>
      <VertigoPasserButton passerQuestion="/PagePDF" class="custom-button"></VertigoPasserButton>
    </v-row>
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

<style scoped>
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
  
    