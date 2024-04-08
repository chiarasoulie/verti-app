<template>
  <v-container>
  <v-row
    align="center"
    justify="center">
    <v-col>
    <VertigoAppBar></VertigoAppBar>
    <p>Y-a-t-il des drapeaux rouges ?</p>
    <p>{{ drapeauxRouge }}</p>
   
        <v-btn
            class="bouton"
            rounded="xl"
            drapeauxRouge.value='oui'
            @click="versUrgence">
 
            <div class="image">
             <img src="../assets/Bonhomme.png" alt="Image">
           
             <div class="text">
             Traumatisme
             </div>
             <div class="text">
             crânien récent
             </div>
            </div>
        </v-btn>
           
        <v-btn
            class="bouton"
            rounded="xl"
            drapeauxRouge="oui"
            @click="versUrgence">
 
            <div class="image">
             <img src="../assets/Group 3.png" alt="Image">
           
             <div class="text">
              Céphalées ou
             </div>
             <div class="text">
              cervicales
             </div>
             <div class="text">
              inhabituelles
             </div>
            </div>
        </v-btn>
     
        <v-btn
            class="bouton"
            rounded="xl"
            drapeauxRouge="oui"
            @click="versUrgence">
 
            <div class="image">
             <img src="../assets/Group 4.png" alt="Image">
           
             <div class="text">
              Symptômes
             </div>
             <div class="text">
              neurologiques
             </div>
             <div class="text">
              focaux
             </div>
            </div>
        </v-btn>
        <v-btn
            class="bouton"
            rounded="xl"
            drapeauxRouge="oui"
            @click="versUrgence">
 
            <div class="image">
             <img src="../assets/Group 2.png" alt="Image">
           
             <div class="text">
              Symptômes
             </div>
             <div class="text">
              cardio
             </div>
             <div class="text">
              associés
             </div>
            </div>
        </v-btn>
     
        <v-btn
            class="bouton"
            rounded="xl"
            drapeauxRouge="oui"
            @click="versUrgence">
 
            <div class="image">
             <img src="../assets/image 7.png" alt="Image">
           
             <div class="text">
              Vertige de
             </div>
             <div class="text">
              survenue
             </div>
             <div class="text">
              brutale
             </div>
            </div>
        </v-btn>
        <v-btn
            class="bouton"
            rounded="xl"
            drapeauxRouge="oui"
            @click="versUrgence">
 
            <div class="image">
             <img src="../assets/image 8.png" alt="Image">
           
             <div class="text">
              Troubles
             </div>
             <div class="text">
              de la
             </div>
             <div class="text">
              coordination
             </div>
            </div>
        </v-btn>
     
        <v-btn
            class="bouton"
            rounded="xl"
            drapeauxRouge="oui"
            @click="versUrgence">
 
            <div class="image">
             <img src="../assets/Vector.png" alt="Image">
           
             <div class="text">
              Antécédents
             </div>
             <div class="text">
              de cancer
             </div>
             <div class="text">
              (métastases)
             </div>
            </div>
        </v-btn>
     
        <v-btn
            class="bouton"
            rounded="xl"
            drapeauxRouge="oui"
            @click="versUrgence">
 
            <div class="image">
             <img src="../assets/elderly_patient.png" alt="Image">
           
             <div class="text">
              Age avancé
             </div>
            </div>
        </v-btn>
     
     <v-btn
            class="bouton"
            rounded="xl"
            drapeauxRouge.value="non"
            @click="updateDrapeauxRouge('non')"
            to="/PageVertigesMaintenant">
 
            <div class="image">
             <img src="../assets/Vector (1).png" alt="Image">
           
             <div class="text">
              non
             </div>
            </div>
        </v-btn>
        <v-row
      align="end" >
  <VertigoBackButton routeBack="/"></VertigoBackButton>
  <VertigoPasserButton passerQuestion="/PageVertigesMaintenant"></VertigoPasserButton>
        </v-row>
    </v-col>
  </v-row>  
</v-container>
<!--  -->
</template>
 
<script setup>
import VertigoBackButton from '@/components/VertigoBackButton.vue';
import VertigoPasserButton from '@/components/VertigoPasserButton.vue';
import VertigoAppBar from '@/components/VertigoAppBar.vue';

// -- utilisation du state global
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
const app = useAppStore()
// -- la variable du state assocciée à cette vue
const { listePages,drapeauxRouge, message } = storeToRefs(app)
listePages.value.push(["Drapeaux Rouges", "/PageDrapeauxRouges"])

// -- route vers urgence avec message
import router from '@/router'

function versUrgence() {
  updateDrapeauxRouge('oui')
  message.value = 'Drapeaux rouges'
  router.push({ name: '/PageFinUrgence' })
}

function updateDrapeauxRouge(value){
  drapeauxRouge.value = value;
}

</script>

<style scoped>

.bouton {
  width: 10vw; /* taille du bouton en pourcentage par rapport à la largeur de la fenêtre */
  height: 10vw;
  min-width: 100px; /* taille min du bouton */
  min-height: 100px;
 
  margin-right: 3px; /* Espace à droite du bouton */
  margin-left: 3px; /* Espace à gauche du bouton */
  margin-top: 3px; /* Espace au-dessus du bouton */
  margin-bottom: 3px; /* Espace en dessous du bouton */
}

.bouton:active {
    background-color: rgb(234, 0, 255);
}

.text {
      font-size: 2.3vw; /* taille du texte par rapport au bouton */
}
</style>
 




  