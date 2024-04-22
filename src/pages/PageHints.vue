<template>
  <v-row
    align="center"
    justify="center">
    <v-col>
      <VertigoAppBar></VertigoAppBar>
    <h1 style="text-align: center;font-family: Manjari; color: #20285F">HINTS</h1>
    <br>
    <br>
  <br>

    <div class=posi>
      <p><VertigoPopups texte=" +  : Pas de saccade
correctrice, œil reste fixé sur la cible"
                        texte2=" -  : Saccade de rattrapage présente">
                      </VertigoPopups>
                    </p>
    </div>

    <v-btn-toggle v-model="hints.Hi" color="#20285F">
      <v-btn
            size="x-large"
            value="-"
            rounded="xl"
            id="btn">
            ---
        </v-btn>
        <div class = esp></div>
        <div class = posi>
        <p style="text-align: center;font-family: Manjari; color: #20285F">Hi</p>
        </div>
        <div class = esp></div>

        <v-btn
            size="x-large"
            value="+"
            rounded="xl"
            id="btn">
            +++
        </v-btn>
    </v-btn-toggle>

    <div class = posi>
      <p>
        <VertigoPopups texte=" +  : Non épuisable, multidirectionnel, vertical ou dissocié (2 yeux différents)"
        texte2= "- Rapidement épuisable, unidirectionnel, horizontorotatoire">
        </VertigoPopups>
      </p>
    </div>
    <v-btn-toggle v-model="hints.N" color="#20285F">
      <v-btn
            size="x-large"
            value="-"
            rounded="xl"
            id="btn"
            >
            ---
        </v-btn>
        <div class = esp></div>
        <div class = posi>
        <p style="text-align: center;font-family: Manjari; color: #20285F">N</p>
        </div>
        <div class = esp></div> 

         <v-btn
            size="x-large"
            value="+"
            rounded="xl"
            id="btn">
            +++
        </v-btn>
    </v-btn-toggle>
    <div class = posi><p><VertigoPopups texte=" +  : Déviation verticale d’un œil "
texte2="-  : Pas de déviation verticale "></VertigoPopups></p></div>
    <v-btn-toggle v-model="hints.TS" color="#20285F">
      <v-btn
            size="x-large"
            value="-"
            rounded="xl"
            id="btn">
            ---
        </v-btn>
        <div class = esp></div>
        <div class = posi>
        <p style="text-align: center;font-family: Manjari; color: #20285F">TS</p>
        </div> 
        <div class = esp></div>

        <v-btn
            size="x-large"
            value="+"
            rounded=xl
            id="btn"
            >
            +++
        </v-btn>
    </v-btn-toggle>
    <br>
    <br>
    <br>
    <br>
    </v-col>
  </v-row>
  <v-btn
      size="x-large"
      rounded="xl"
      variant="elevated"
      @click="valider"
      color="#20285F" dark
      >
      Valider
  </v-btn>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <v-row align="end" class="custom-row" dense>
      <VertigoBackButton :routeBack="pageDeRetour" class="custom-button"></VertigoBackButton>
      <VertigoPasserButton passerQuestion="/PageExamenNeurologique" class="custom-button"></VertigoPasserButton>
  </v-row>
</template>
 
 
<script setup>
import VertigoBackButton from '@/components/VertigoBackButton.vue';
import VertigoPasserButton from '@/components/VertigoPasserButton.vue';
import VertigoPopups from '../components/VertigoPopups.vue';
import VertigoAppBar from '../components/VertigoAppBar.vue'

// -- utilisation du state global
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'

const app = useAppStore()
const { listePages,pageDeRetour, hints, message } = storeToRefs(app)
listePages.value.push(["HINTS", "/PageHints"])
pageDeRetour.value="/PageHints"

// -- routage en fonction des hints
import router from '@/router'
function valider() {
  // -- les 3 sont "-" ==> urgence
  console.log(hints.value)
  if (hints.value.Hi == "-" && hints.value.N == "-" && hints.value.TS == "-") {
    message.value = "Vertige peripherique"
    router.push({ name: '/PageVertigePeripherique' });
    remplirListe('non');
  }
  if (hints.value.Hi == "+" && hints.value.N == "+" && hints.value.TS == "+") {
    message.value = "Vertige central"
    router.push({ name: '/PageFinUrgence' });
    remplirListe('oui');
  }
  else if( (hints.value.Hi == "+" && hints.value.N == "+" && hints.value.TS == "-")
  || (hints.value.Hi == "+" && hints.value.N == "-" && hints.value.TS == "-")
  || (hints.value.Hi == "-" && hints.value.N == "-" && hints.value.TS == "+")
  || (hints.value.Hi == "-" && hints.value.N == "+" && hints.value.TS == "+")
  || (hints.value.Hi == "-" && hints.value.N == "+" && hints.value.TS == "-")
  || (hints.value.Hi == "+" && hints.value.N == "-" && hints.value.TS == "+") )
{
    router.push({ name: '/PageExamenNeurologique'});
    remplirListe('pas tous');


}
function remplirListe(valeur){
  let dernier = listePages.value.length -1;
  listePages.value[dernier].push(valeur)
}
}
</script>
<style scpode>
.posi{
  position: relative;
  top: 10px;
}
.esp{
  width: 10px;
}
#btn {
    border: 2px solid #20285F; /* Couleur et taille de la bordure */
    padding: 10px; /* Espacement à l'intérieur du bouton */
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