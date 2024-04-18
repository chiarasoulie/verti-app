<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
      <VertigoAppBar></VertigoAppBar>
      <br>
      <div class="diagnostic">
        <h3>D'après l'examen clinique, aucune pathologie n'est privilégiée</h3>
        <br>
      </div>
      <br>
      <br>
      <div class="infoplus">
        <h3> L'avis d'un spécialiste est nécessaire</h3>
      </div>
      <br>
      <br>
      <div class="attention">
        <h5>Spécialiste à contacter</h5>
      </div>
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

diag.value="AVIS D'UN SPECIALISTE";

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