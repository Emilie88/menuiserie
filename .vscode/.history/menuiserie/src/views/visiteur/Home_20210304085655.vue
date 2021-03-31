<template>
  <v-app dark>
    <v-main>
      <section id="hero">
        <v-row no-gutters>
          <v-img src="../../assets/img/cuisine/cuisineAlexPD.jpg">
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col class="white--text text-center" cols="12" tag="h1">
                    <span
                      class="font-weight-light text-uppercase"
                      :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-1'
                          : 'display-2',
                      ]"
                    >
                      {{ $t("titleHome") }}
                    </span>

                    <br />

                    <span
                      :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-2'
                          : 'display-3',
                      ]"
                      class="font-weight-black"
                    >
                      Adrian BOGHIU
                    </span>
                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <About />
      <section id="cards">
        <v-container>
          <h2
            class="display-2 font-weight-bold mb-3 text-uppercase text-center"
          >
            {{ $t("realisation") }}
          </h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <Cards />

          <v-btn
            class="ma-2 text-center"
            outlined
            color="#9e9d24"
            to="/realisations"
          >
            {{ $t("allProjects") }}
          </v-btn>
        </v-container>
      </section>

      <section id="avis">
        <div class="py-12"></div>
        <Avis />
      </section>

      <section id="contact">
        <Contact />
        <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          dark
          fixed
          bottom
          right
          outlined
          @click="$vuetify.goTo('#hero')"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </section>
    </v-main>
  </v-app>
</template>
<script>
import Contact from "@/components/Contact.vue";
import About from "@/components/About.vue";
import Cards from "../../components/card/Cards.vue";
import Avis from "../../components/Avis.vue";

export default {
  name: "Home",
  components: {
    Contact,
    About,
    Cards,
    Avis,
  },
  data() {
    return {
      fab: false,
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
  },
};
</script>
