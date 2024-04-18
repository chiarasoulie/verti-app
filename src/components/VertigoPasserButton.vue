
<template>
    <v-row justify="end">
        <v-btn class="bouton rond" variant="elevated" :to="props.passerQuestion">
            <v-img src="../assets/Flèche avancer.png" height="45" width="45"></v-img>
        </v-btn>
    </v-row>
</template>

<script setup>
const props = defineProps(["passerQuestion"])
</script>

<style scoped>
.bouton.rond {
    width: 50px; /* Ajustez la taille du bouton selon vos besoins */
    height: 50px; /* Assurez-vous que la largeur et la hauteur sont égales pour obtenir un cercle */
    border-radius: 50%; /* Assurez-vous que le bouton a un rayon de bordure de 50% pour le rendre circulaire */
    padding: 0; /* Supprimez le rembourrage pour que l'image remplisse le bouton */
    box-shadow: none;
}

/* Ajoutez vos styles personnalisés ici si nécessaire */
</style>



