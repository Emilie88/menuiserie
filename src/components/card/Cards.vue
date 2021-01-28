<template>
  <section id="card">
    <v-container>
      <v-row>
        <v-col md="4">
          <Cuisine />
        </v-col>
        <v-col md="4">
          <Bath />
        </v-col>
        <v-col md="4">
          <Biblio />
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4">
          <Dressing />
        </v-col>
        <v-col md="4">
          <Placard />
        </v-col>
        <v-col md="4">
          <Stairs />
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
import Cuisine from "../dialog/Cuisine.vue";
import Bath from "../dialog/Bath.vue";
import Biblio from "../dialog/Biblio.vue";
import Dressing from "../dialog/Dressing.vue";
import Placard from "../dialog/Placard.vue";
import Stairs from "../dialog/Stairs.vue";
export default {
  components: {
    Cuisine,
    Bath,
    Biblio,
    Dressing,
    Placard,
    Stairs,
  },
};
</script>
