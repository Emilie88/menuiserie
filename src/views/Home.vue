<template>
  <div id="app">
    <v-app dark>
      <v-main>
        <section id="hero">
          <v-row no-gutters>
            <v-img src="../assets/img/cuisine/cuisineAlexPD.jpg">
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
                        {{ $t("toolbar.titleHome") }}
                      </span>

                      <br />

                      <span
                        :class="[
                          $vuetify.breakpoint.smAndDown
                            ? 'display-3'
                            : 'display-4',
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
              Realisations
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <Cards />

            <v-btn class="ma-2 text-center" outlined color="teal">
              Tous les projets
            </v-btn>
          </v-container>
        </section>

        <section id="avis">
          <div class="py-12"></div>
          <v-container>
            <h2
              class="display-2 font-weight-bold mb-3 text-uppercase text-center"
            >
              Avis
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col md-12>
                <v-sheet class="mx-auto" max-width="1200">
                  <v-slide-group multiple class="pa-2" show-arrows>
                    <v-slide-item v-for="n in 25" :key="n">
                      <v-card class="ma-2" max-width="344">
                        <!-- <v-icon>mdi-star</v-icon> -->
                        <div>
                          Entreprise de 60 personnes, Nous avons fait appel à
                          l'Atelier du Renard pour la réalisation de 70 bureaux,
                          4 tables de réunion, l'agencement des bureaux et de
                          l'accueil. Nous sommes très satisfait du travail
                          fourni, tant sur les conseils, que la réalisation. La
                          qualité du travail fourni, le respect des délais et du
                          devis ont été très appréciables.
                        </div>

                        <div class="title font-weight-light mb-5">
                          BENJAMIN PAT
                        </div>
                        <div class="title font-weight-light mb-5">
                          12/01/2021
                        </div>
                      </v-card>
                    </v-slide-item>
                  </v-slide-group>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
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
  </div>
</template>
<script>
import Contact from "@/components/Contact.vue";
import About from "@/components/About.vue";
import Cards from "../components/card/Cards.vue";

export default {
  components: {
    Contact,
    About,
    Cards,
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
