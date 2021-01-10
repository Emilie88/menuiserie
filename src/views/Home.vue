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

            <!-- <div class="py-12"></div> -->

            <Cards />

            <v-btn class="ma-2 text-center" outlined color="teal">
              Tous les projets
            </v-btn>
          </v-container>
        </section>
        <section id="blog">
          <div class="py-12"></div>

          <v-container>
            <br />
            <br />

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>
 
            <v-row>
              <v-sheet
              class="mx-auto"
              max-width="1000"
            >
              <v-slide-group
                multiple
                show-arrows
              >
                <v-slide-item
                  v-for="n in 25"
                  :key="n"
                >
                <v-btn
                  class="mx-2"
                 
                  depressed
                  rounded
                >
                  Options
                </v-btn>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
    
           
              
              <!-- <v-col
                v-for="({ src, text, title }, i) in articles"
                :key="i"
                cols="12"
                md="4"
              >
                <v-img
                  :src="src"
                  class="mb-4"
                  height="275"
                  max-width="100%"
                ></v-img> -->
<!-- 
                <h3
                  class="font-weight-black mb-4 text-uppercase"
                  v-text="title"
                ></h3>

                <div class="title font-weight-light mb-5" v-text="text"></div>

                <v-btn class="ml-n4 font-weight-black" text>
                  Continue Reading
                </v-btn>
              </v-col> -->
               
            </v-row>
           
          </v-container>

          <div class="py-12"></div>
        </section>

        <Contact />
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
       colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      articles: [
        {
          src:
            "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: "Mobile first & Responsive",
          text:
            "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
        },
        {
          src:
            "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: "Think outside the box",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.",
        },
        {
          src:
            "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
          title: "Small changes, big difference",
          text:
            "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.",
        },
      ],
      features: [
        {
          icon: "mdi-account-group-outline",
          title: "Vibrant Community",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam",
        },
        {
          icon: "mdi-update",
          title: "Frequent Updates",
          text:
            "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.",
        },
        {
          icon: "mdi-shield-outline",
          title: "Long-term Support",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam",
        },
      ],
      stats: [
        ["24k", "Github Stars"],
        ["330+", "Releases"],
        ["1m", "Downloads/mo"],
        ["5m", "Total Downloads"],
      ],
    };
  },
};
</script>
