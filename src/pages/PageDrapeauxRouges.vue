<template>
  <v-row
    align="center" 
    justify="center">
    <v-col>
    <p>Y-a-t-il des drapeaux rouges ?</p>
    <v-btn-toggle v-model="drapeauxRouge" mandatory>
      
      <!-- <v-btn 
            size="x-large"
            rounded="xl"
            variant="elevated"
            value="oui"
            to="/PageFinDrapeauxUrgence"
            >
            Oui
        </v-btn>
        <v-btn 
            size="x-large"
            rounded="xl"
            variant="elevated"
            value="non"
            to="/PageVertigesMaintenant"
            >
            Non
        </v-btn> -->
        <v-btn 
            size="x-large"
            rounded="xl"
            :variant="!drapeauxRouge ? 'elevated' : 'outlined'"
            :color="!drapeauxRouge ? 'primary' : 'green'"
            value="oui"
            @click="versUrgence"
            >
            Oui
        </v-btn>
        <v-btn 
            size="x-large"
            rounded="xl"
            :variant="drapeauxRouge ? 'elevated' : 'outlined'"
            :color="drapeauxRouge ? 'primary' : 'green'"
            value="non"
            to="/PageVertigesMaintenant"
            >
            Non
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
  <VertigoBackButton routeBack="/"></VertigoBackButton>
</template>
  
<script setup>
import VertigoBackButton from '@/components/VertigoBackButton.vue';

// -- utilisation du state global
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
const app = useAppStore()
// -- la variable du state assocciée à cette vue
const { drapeauxRouge, message } = storeToRefs(app)

// -- route vers urgence avec message
import router from '@/router'
function versUrgence() {
  message.value = 'Drapeaux rouges' 
  router.push({ name: '/PageFinUrgence' })
}

</script>
  