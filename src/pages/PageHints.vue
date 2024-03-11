<template>
    <v-row
      align="center" 
      justify="center">
      <v-col>
      <p>Hints</p>
      <p>{{ hints.Hi }}</p>
      <v-btn-toggle v-model="hints.Hi" color="deep-purple-accent-3">
        <v-btn 
              size="x-large"
              value="-">
              ---
          </v-btn>
          <p>Hi</p>
          <v-btn 
              size="x-large"
              value="+">
              +++
          </v-btn>
      </v-btn-toggle>
      <p>{{ hints.N }}</p>
      <v-btn-toggle v-model="hints.N" color="deep-purple-accent-3">
        <v-btn 
              size="x-large"
              value="-">
              ---
          </v-btn>
          <p>N</p>
          <v-btn 
              size="x-large"
              value="+">
              +++
          </v-btn>
      </v-btn-toggle>
      <p>{{ hints.TS }}</p>
      <v-btn-toggle v-model="hints.TS" color="deep-purple-accent-3">
        <v-btn 
              size="x-large"
              value="-">
              ---
          </v-btn>
          <p>TS</p>
          <v-btn 
              size="x-large"
              value="+">
              +++
          </v-btn>
      </v-btn-toggle>
      </v-col>
    </v-row>
    <v-btn 
        size="x-large"
        rounded="xl"
        variant="elevated"
        @click="valider"
        >
        Valider
    </v-btn>
    <VertigoBackButton routeBack="/PageVertigesMaintenant"></VertigoBackButton>
  </template>
    
    
<script setup>
  import VertigoBackButton from '@/components/VertigoBackButton.vue';

  // -- utilisation du state global
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  const app = useAppStore()
  const { hints, message } = storeToRefs(app)

  // -- routage en fonction des hints
  import router from '@/router'
  function valider() {
    // -- les 3 sont "-" ==> urgence
    console.log(hints.value)
    if (hints.value.Hi == "-" && hints.value.N == "-" && hints.value.TS == "-") {
      message.value = "Vertige central"
      router.push({ name: '/PageFinUrgence' });
    } else {
      router.push({ name: '/PageExamenNeuro'});
    }

  }
</script>
    