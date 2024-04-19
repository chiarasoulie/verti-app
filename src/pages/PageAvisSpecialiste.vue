<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
      <VertigoAppBar></VertigoAppBar>
      <br>
      <div class="diagnostic"style="color: #20285F;font-family: Manjari;">
        <h3>D'après l'examen clinique, aucune pathologie n'est privilégiée</h3>
        <br>
      </div>
      <br>
      <br>
      <div class="infoplus"style="color: #20285F;font-family: Manjari;">
        <h3> L'avis d'un spécialiste est nécessaire</h3>
      </div>
      <br>
      <img src="../assets/Medecin.png" alt="Image spécialiste" style="width: 100px; height: auto;">
      <br>
      <br>
      <div style="display: inline-block; text-align: center;font-family: Manjari;">
        <span style="display: inline-block; vertical-align: middle; margin-right: 10px; color: #20285F;">Spécialiste à contacter</span>
        <img src="../assets/Plus d'infos.png" alt="Image infos" style="width: 20px; height: auto; vertical-align: middle;">
      </div>

      <br>
      <br>
      <br>
      <br>
      <div class="separation"></div>
      <br>
      <div class="pdf"style="color: #20285F;font-family: Manjari;">
        <h4>Générer l'examen clinique et le diagnostic sous forme de PDF</h4>
      </div>
      </v-col>
    </v-row>
    <VertigoGenererPDF></VertigoGenererPDF>
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

diag.value="AVIS D'UN SPECIALISTE";

</script>

<style scoped>

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
.custom-row {
  display: flex;
  justify-content: space-between;
}

.custom-button {
  margin-right: 3px;
  margin-left: 3px;
}
</style>