<template>
  <v-dialog v-model="dialog" max-width="1200">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        src="../../assets/img/salon/Paris.jpg"
        v-bind="attrs"
        v-on="on"
        class="mb-4"
        height="275"
        max-width="100%"
      ></v-img>

      <h3 class="font-weight-black mb-4 text-uppercase">
        Living
      </h3>
    </template>
    <v-carousel cycle dark hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in living"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    living: [
      {
        src: require("../../assets/img/salon/Paris.jpg"),
      },
      {
        src: require("../../assets/img/salon/salon.jpg"),
      },
      {
        src: require("../../assets/img/salon/salonAr.jpg"),
      },
      {
        src: require("../../assets/img/salon/DSC0044.jpg"),
      },
      {
        src: require("../../assets/img/salon/DSC0045.jpg"),
      },
      {
        src: require("../../assets/img/salon/IMG20.jpg"),
      },
      {
        src: require("../../assets/img/salon/Arrceuil.jpg"),
      },
      {
        src: require("../../assets/img/salon/ArSalon.jpg"),
      },
    ],
  }),
};
</script>
