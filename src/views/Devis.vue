<template>
    <div id="contact">
       <v-app>
   
    <v-content>
        <v-sheet
        id="contact"
        color="#333333"
        dark
        tag="section"
        tile
      >
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3  text-center">Demande de devis</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>
       
           <div><strong>Art Menuiserie</strong> s'engage à être réactif. Demandez-nous un devis pour tout type de réalisation en bois sur mesure et nous vous répondrons dans les meilleurs délais, en fonction de votre demande !</div>
        
        <br>
          <v-theme-provider light>
            <v-row>
                
                <v-col cols="12">
                <v-text-field
                  flat
                  label="Nom*"
                  solo
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  flat
                  label="Téléphone*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  flat
                  label="Email*"
                  solo
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  flat
                  label="Adresse*"
                  solo
                ></v-text-field>
              </v-col>
               <v-col cols="6">
                <v-text-field
                  flat
                  label="Ville*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  flat
                  label="Code postal*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  flat
                  label="Sujet*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  flat
                  label="Message*"
                  solo
                ></v-textarea>
              </v-col>
              <v-col cols="6">
                <v-file-input
                  label="File input"
                  filled
                  background-color="white"
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
               <v-col cols="6">
                <v-file-input
                  label="File input"
                  filled
                  background-color="white"
                  prepend-icon="mdi-camera"
                 text-color="white"
                ></v-file-input>
              </v-col>

              <v-col
                class="mx-auto"
                cols="auto"
              >
                <v-btn
                  color="accent"
                  x-large
                >
                  Envoyer
                </v-btn>
              </v-col>
            </v-row>
          </v-theme-provider>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>
    </v-content>
    </v-app>
    </div>
</template>