
import VertigoAppBar from '@/components/VertigoAppBar.vue';
<template>
    <v-row
   align="center" 
   justify="center">
   <v-col>
    <VertigoAppBar></VertigoAppBar>
  <v-app>
    <v-main>
      <v-container>
        <!-- Première ligne -->
        <v-row>
          <v-col cols="12" md="6">
            <v-img src="../assets/Stétoscope(1).png" max-height="90"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <p>Texte pour la première ligne</p>
          </v-col>
        </v-row>
        
        <!-- Deuxième ligne -->
        <v-row>
          <v-col cols="12" md="6">
            <v-img src="../assets/Oreille.png" max-height="90"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <p>Texte pour la deuxième ligne</p>
          </v-col>
        </v-row>
        
        <!-- Troisième ligne -->
        <v-row>
          <v-col cols="12" md="6">
            <v-img src="../assets/Group 8.png" max-height="90"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <p>Texte pour la troisième ligne</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  

   </v-col>
 </v-row>
</template>

<script setup>
import VertigoAppBar from '@/components/VertigoAppBar.vue';
</script>