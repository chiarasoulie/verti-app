<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
      <VertigoAppBar></VertigoAppBar>
      <br>
      <div class="diagnostic">
        <h4>D'après l'examen clinique, on s'oriente vers :</h4>
        <br>
        <h2>LABYRINTHITE</h2>
      </div>
      <br>
      <br>
      <div class="infoplus">
        <h5> Pour une meilleure prise en charge</h5>
        <v-btn icon="$vuetify">
        </v-btn>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="separation"></div>
      <div class="pdf">
        <h5>Générer l'examen clinique et le diagnostic sous forme de PDF</h5>
      </div>
      </v-col>
    </v-row>
    <VertigoGenererPDF></VertigoGenererPDF>
</template>

<script setup>
import VertigoAppBar from '@/components/VertigoAppBar.vue';
import VertigoGenererPDF from '@/components/VertigoGenererPDF.vue';
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'

const app = useAppStore()
const { diag } = storeToRefs(app)

diag.value="LABYRINTHITE";

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
</style>