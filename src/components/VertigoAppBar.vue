<!--  la barre de navigation en haut de l'application -->
<template>
    <v-app-bar
      color=#20285F
      density="dense"
      >
      <!-- menu de gauche -->
      <template v-slot:prepend>
      <v-btn id="historique" icon="mdi-dots-vertical"></v-btn>
        <!-- le menu s'affichera qd l'élément d'id 'menu-droite' ici 'v-btn' sera activé-->
        <v-menu activator="#historique">  
          <v-list v-for="page of listePages" :key="page" @click="updateListePages(page)">
              <v-list-item :to="page[1]"> <!-- navigation vers la page... -->
                <v-list-item-title>{{page[0]}}</v-list-item-title>
              </v-list-item>  
          </v-list>
        </v-menu>
      </template>

      <!-- titre de l'application -->
      <v-app-bar-title>VERTI'APP</v-app-bar-title>
      <!-- menu de droite -->
      <template v-slot:append>
      <v-btn id="menu-droite" img="../assets/Logo parametre"></v-btn>
        <!-- le menu s'affichera qd l'élément d'id 'menu-droite' ici 'v-btn' sera activé-->
        <v-menu activator="#menu-droite">  
            <v-list>
              <v-list-item to="/"> <!-- navigation vers la page "/" -->
                <v-list-item-title>Recommencer</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>
      </template>
    </v-app-bar> 
  
  </template>
  
  <script setup>
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'


const app = useAppStore()
const { listePages} = storeToRefs(app)


function updateListePages(page){
  let index = listePages.value.indexOf(page);
  console.log("index "+index)
  let taille = listePages.value.length-1;
  console.log("taille "+taille)


  if(index != taille){
  do{
    listePages.value.pop()
    } while(listePages.value.includes(page))
  }
}

  </script>