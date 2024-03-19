<!--  la barre de navigation en haut de l'application -->
<template>
    <v-app-bar
      color=#20285F
      density="dense"
      >
      <!-- titre de l'application -->
      <v-app-bar-title>VERTI'APP</v-app-bar-title>
      <!-- menu de droite -->
      <template v-slot:append>
      <v-btn id="menu-droite" icon="../assets/Logo parametre"></v-btn>
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
    //
  </script>