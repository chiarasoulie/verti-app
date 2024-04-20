
<template>
    <v-row
   align="center" 
   justify="center">
   <v-col>
    <VertigoAppBar></VertigoAppBar>
    <div class="page">
      <div class="content">
      <p class="image1">
        <img src="../assets/Stétoscope(1).png" alt="image 1"/>
      </p>
      <p class="texte1">
        Vous aurez besoin d'un interrogatoire détaillé et d'un examen clinique complet contenant :
        <ul>
        <li>Examen neurologique</li>
        <li>Examen ORL</li>
        <li>Dix et Hallpike</li>
        <li>HINTS (Head Impulse, Nystagmus, Test of Skew)</li>
      </ul>
      </p>
      <br>
      <p class="image1">
        <img src="../assets/Oreille.png" alt="image 1"/>
      </p>
      <p class="texte1">
        Faux vertiges éliminés? <br>
(Lipothymie, manifestations cardio-vasculaires, flou visuel, crise d'épilepsie, manifestations phobiques, fatigue...)
      </p>
      <br>
      <p class="image1">
        <img src="../assets/Group 8.png" alt="image 1"/>
      </p>
      <p class="texte1">
        Un doute ? <br>
Pour plus d'infos, rendez-vous sur le site (VERTI'WEB) !
      </p>
      <br><br>
      <v-btn class="mr-4"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageDrapeauxRouges">
            Lancer le diagnostic
      </v-btn>
    </div>
    </div>
   </v-col>
 </v-row>
</template>

<script setup>
import VertigoAppBar from '@/components/VertigoAppBar.vue';
</script>

<style scoped>
.mr-4{
    background-color: #20285F; 
    color: white; 
}
.image1{
  grid-column: 1;
  margin-right: auto;
  margin-right: auto;
  float: left;
  width: 20%;
  text-align: center;
}
.texte1 {
  grid-column: 2;
  text-align: left;
  overflow: hidden;
  flex: 1;
  width: 80%;
  color:#20285F;
  font-family: Manjari;
}
.page {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  width: 100%;
}
</style>