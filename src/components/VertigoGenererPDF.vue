<!-- Bouton pour générer le PDF -->
<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
const app = useAppStore()
const { drapeauxRouge, vertigesMaintenant } = storeToRefs(app)

import { jsPDF } from 'jspdf'
import logo from '../assets/Logoparametre.png' // Chemin vers votre logo

function genPDF() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Position du logo (en haut à droite avec une marge de 10 mm)
  const logoWidth = 30; // Largeur de l'image en mm
  const logoHeight = 30; // Hauteur de l'image en mm
  const logoMargin = 10; // Marge en mm
  const logoX = pageWidth - logoWidth - logoMargin; // Position X du logo
  const logoY = logoMargin; // Position Y du logo

  doc.text(`Compte rendu de la consultation`,10, 10);
  doc.text(`Fait le : ${new Date().toLocaleDateString()}`, 10, 20);
  doc.text(`A : ${new Date().toLocaleTimeString()}`, 10, 30)
  doc.text(`Bilan de l'examen clinique : `,10, 40);
  doc.text(`Drapeaux rouges : ${drapeauxRouge.value}`, 10, 50);
  doc.text(`Vertiges maintenant : ${vertigesMaintenant.value}`, 10, 60);
  doc.text(`Conclusion`,10, 70);
 
  // Ajouter le logo en haut à droite
  doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);

  // Enregistrement (inclure date et heure dans le nom du fichier)
  doc.save(`Bilan${new Date().toISOString()}.pdf`);
}
</script>
<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
        <v-btn 
            size="x-large"
            variant="elevated"
            @click="genPDF">
            Voir PDF
        </v-btn>
      </v-col>
    </v-row>
  </template>
  

  