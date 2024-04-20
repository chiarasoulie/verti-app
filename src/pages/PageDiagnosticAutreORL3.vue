<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
      <VertigoAppBar></VertigoAppBar>
      <br>
      <div class="diagnostic"style="text-align: center;font-family: Manjari; color: #20285F">
        <h4>D'après l'examen clinique, on s'oriente vers :</h4>
        <br>
        <h2>OMA</h2>
        <div class="petit"></div>
        <h2>CORPS ETRANGER</h2>
        <div class="petit"></div>
        <h2>CHOLESTEATOME</h2>
      </div>
      <br>
      <br>
      <div style="display: inline-block; text-align: center;font-family: Manjari;">
        <span style="display: inline-block; vertical-align: middle; margin-right: 10px; color: #20285F;">Pour une meilleure prise en charge</span>
        <img src="../assets/Plus d'infos.png" alt="Image infos" style="width: 20px; height: auto; vertical-align: middle;">
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="separation"></div>
      <div class="pdf"style="text-align: center;font-family: Manjari; color: #20285F">
        <h4>Générer l'examen clinique et le diagnostic sous forme de PDF</h4>
      </div>
      </v-col>
    </v-row>
    <VertigoGenererPDF></VertigoGenererPDF>
    <br>
    <v-row align="end" class="custom-row" dense>
      <VertigoBackButton routeBack="/PageCaractéristiqueNystagmus" class="custom-button"></VertigoBackButton>
      <VertigoPasserButton passerQuestion="/PagePDF" class="custom-button"></VertigoPasserButton>
    </v-row>
</template>

<script setup>
import VertigoBackButton from '@/components/VertigoBackButton.vue';
import VertigoPasserButton from '@/components/VertigoPasserButton.vue';
import VertigoAppBar from '@/components/VertigoAppBar.vue';
import VertigoGenererPDF from '@/components/VertigoGenererPDF.vue';
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'

const app = useAppStore()
const { diag } = storeToRefs(app)

diag.value="CORPS ETRANGER/CHOLESTEATOME";

</script>

<style scoped>
.diagnostic {
  background-color: #CFCFCF; /* couleur grise */
  width: 100%;
  padding: 20px 0; /* espace autour du titre */
  text-align: center;
  box-sizing: border-box;

}
.separation {
  background-color: #CFCFCF; /* couleur grise */
  width: 100%;
  height: 3px;

}
.infoplus {
  display: flex;
  align-items: center; /* Alignement vertical des éléments */
  justify-content: center;
}
.infoplus h5 {
  margin-right: 10px; /* Ajouter un espace entre le texte et le bouton */
}
.petit{
  background-color: #e8e2e2; /* couleur grise */
  width: 50%;
  height: 3px;
  margin: auto;

}
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