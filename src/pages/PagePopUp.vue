
<template>
     <v-row
    align="center" 
    justify="center">
    <v-col>
        <VertigoAppBar></VertigoAppBar>
        <h1 class="question">Etes-vous un professionnel de santé ?</h1><br><br>
        <h4 class="description">Cette application est dédiée aux <strong> professionnels de santé. </strong>
            Elle propose <strong> une aide diagnostic </strong> pour les consultations de soins premiers liées aux <strong> vertiges.</strong>
            Le contenu ne se substitue en aucun cas à la responsabilité de décision et de prescription du praticien.
        </h4><br><br>
        <h4 class="description">Vous souffrez de vertige ? Rendez vous sur le site <u>(VERTI'WEB)</u>pour plus d'infos ou contactez le 15.</h4>
        <br><br>
        <v-btn class="mr-4"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/">
            Non
      </v-btn>
      <v-btn class="bouton"
            size="x-large"
            rounded="xl"
            variant="elevated"
            to="/PageLancement">
            Oui
      </v-btn>

    </v-col>
  </v-row>
</template>

<script>
  import VertigoAppBar from '@/components/VertigoAppBar.vue';
</script>

<style scoped>

.description{
    color:#20285F;
    font-family: Manjari;
    text-align: left;
    font-weight: 70;
}
.question{
    color:#20285F;
    font-family: Manjari;
}
.bouton{
    background-color: #20285F; 
    color: white; 
}
.mr-4{
    border: 2px solid #20285F;
}
</style>