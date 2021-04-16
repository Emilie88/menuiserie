<template>
  <div id="about">
    <section id="about-me">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2
          :class="[
            $vuetify.breakpoint.smAndDown
              ? 'display-1 font-weight-bold mb-3 text-uppercase text-center'
              : 'display-2 font-weight-bold mb-3 text-uppercase text-center',
          ]"
        >
          {{ $t("about") }}
        </h2>

        <v-responsive class="mx-auto mb-8" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-responsive
          class="mx-auto title font-weight-light mb-8"
          max-width="900"
        >
          {{ $t("description") }}
        </v-responsive>
        <v-avatar class="elevation-12 mb-12" size="128">
          <v-img src="../../assets/Adrian.jpg"></v-img>
        </v-avatar>
      </v-container>

      <div class="py-10"></div>
    </section>
  </div>
</template>
