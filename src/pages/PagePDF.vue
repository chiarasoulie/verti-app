<template>
    <v-container>
      <VertigoAppBar></VertigoAppBar>
      <v-row align="center" justify="center">
      <v-col cols="12">
        <h2>Formulaire de Consultation</h2>
      </v-col>
    </v-row>
      <!-- Formulaire pour collecter les données -->
      <v-form @submit.prevent="generatePDF">
        <v-row align="center" justify="center">
          <v-col cols="12" md="6">
            <v-text-field v-model="nom" label="Nom" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="prenom" label="Prénom" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="date" label="Date de naissance (DD/MM/YYYY)" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="medecin" label="Nom du docteur" required></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <v-btn type="submit" color="#20285F" dark id="btn">Générer PDF</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import VertigoAppBar from '@/components/VertigoAppBar.vue';
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { diag,listePages } = storeToRefs(app)
  import { ref } from 'vue'
  import { jsPDF } from 'jspdf'
  import logo from '../assets/Logoparametre.png' // Chemin vers votre logo
  
  // Données du formulaire
  const nom = ref('');
  const prenom = ref('');
  const date = ref('');
  const medecin = ref('');
  
  
  function generatePDF() {
  // Convertir la date en objet Date
  const parts = date.value.split('/');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Les mois dans les objets Date sont indexés à partir de 0 (janvier = 0)
  const year = parseInt(parts[2], 10);
  const selectedDate = new Date(year, month, day);

  // Créer un nouveau document PDF
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Position du logo (en haut à droite avec une marge de 10 mm)
  const logoWidth = 30; // Largeur de l'image en mm
  const logoHeight = 30; // Hauteur de l'image en mm
  const logoMargin = 10; // Marge en mm
  const logoX = pageWidth - logoWidth - logoMargin; // Position X du logo
  const logoY = logoMargin; // Position Y du logo
  let posY = 110;

  // Position des informations à droite du logo
  const infoX = logoX + logoWidth + 10; // Position X des informations
  let infoY = logoY + logoHeight + 10; // Position Y de départ des informations

  // Obtenir la date et l'heure actuelles
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const formattedTime = currentDate.toLocaleTimeString();

  // Ajouter les données du formulaire au PDF
  doc.text(`Compte rendu de la consultation`, 10, 10);
  doc.text(`Fait le : ${currentDate.toLocaleDateString()}`, 10, 20);
  doc.text(`A : ${currentDate.toLocaleTimeString()}`, 10, 30);
  doc.text(`Nom: ${nom.value}`, 10, infoY);
  doc.text(`Prénom: ${prenom.value}`, 10, infoY + 10);
  doc.text(`Date de naissance: ${selectedDate.toLocaleDateString()}`, 10, infoY + 20);
  doc.text(`Nom du docteur: ${medecin.value}`, 10, infoY + 30);

  doc.text(`Bilan de l'examen clinique : `, 10, infoY + 50);
  affichageHistorique();

  doc.text(`Diagnostic:`, 10, 170)
  doc.text(`diagnostique proposé: ${diag.value}`, 10, 180);



  // Ajouter le logo en haut à droite avec une taille réduite
  doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);

  // Enregistrement (inclure date et heure dans le nom du fichier)
  doc.save(`Bilan${currentDate.toISOString()}.pdf`);

  function affichageHistorique(){
  for(let page of listePages.value){
    doc.text(`${page[0]}: ${page[2]}`, 10, posY)
    posY += 10;
    }
  }
}
  </script>

<style scoped>
.btn{
    background-color: #20285F; 
    color: white; 
}
</style>