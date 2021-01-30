<template>
  <div id="avis">
    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        Avis
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col md-12>
          <v-sheet class="mx-auto">
            <v-slide-group class="pa-2" show-arrows>
              <v-slide-item v-for="n in 25" :key="n" max-width="240">
                <v-card class="ma-2" max-width="235">
                  <!-- <v-icon>mdi-star</v-icon> -->
                  <div>
                    Entreprise de 60 personnes, Nous avons fait appel à
                    l'Atelier du Renard pour la réalisation de 70 bureaux, 4
                    tables de réunion, l'agencement des bureaux et de l'accueil.
                    Nous sommes très satisfait du travail fourni, tant sur les
                    conseils, que la réalisation. La qualité du travail fourni,
                    le respect des délais et du devis ont été très appréciables.
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
  </div>
</template>
