<!-- Bouton pour générer le PDF -->
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
  
<script setup>
  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { drapeauxRouge, vertigesMaintenant } = storeToRefs(app)

  // -- utilisation de la librairie jspdf
  //    https://github.com/parallax/jsPDF/
  import { jsPDF } from "jspdf";
  function genPDF() {
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF();
    doc.text(`Bilan VertiAPP du ${new Date().toLocaleDateString()}`, 10, 10);
    // -- prendre les infos dans le state global
    doc.text(`Drapeaux rouges : ${drapeauxRouge.value}`, 10, 50);
    doc.text(`Vertiges maintenant : ${vertigesMaintenant.value}`, 10, 60);
    // -- enregistrement (inclure date et heure dans le nom du fichier)
    doc.save(`Bilan${new Date().toISOString()}.pdf`);
  }
  </script>
  