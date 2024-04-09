
<template>
    <v-row justify="end">
        <v-btn class="bouton"
              size="x-large"
              rounded="xl"
              variant="elevated"
              :to="props.passerQuestion">
              Passer
        </v-btn>
    </v-row>
</template>
<script setup>
const props = defineProps(["passerQuestion"])
</script>

<style scoped>

</style>

