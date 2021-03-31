<template>
  <div id="contact">
    <v-app>
      <v-main>
        <v-sheet id="contact" color="#333333" dark tag="section" tile>
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

            <v-theme-provider>
              <v-row>
                <v-col md="12">
                  <validation-observer ref="observer" v-slot="{ errors }">
                    <form @submit.prevent="submit">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Subject"
                        rules="required"
                      >
                        <v-text-field
                          color="lime darken-3"
                          flat
                          v-model="body.title"
                          :error-messages="errors"
                          label="Subject*"
                          required
                        ></v-text-field>
                      </validation-provider>

                      <validation-provider
                        v-slot="{ errors }"
                        name="Name"
                        rules="required"
                      >
                        <v-text-field
                          color="lime darken-3"
                          flat
                          v-model="body.author"
                          :error-messages="errors"
                          label="Name*"
                          required
                        ></v-text-field>
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Message"
                        rules="required"
                      >
                        <v-textarea
                          color="lime darken-3"
                          flat
                          v-model="body.content"
                          :error-messages="errors"
                          label="Message*"
                          required
                        ></v-textarea>
                      </validation-provider>

                      <v-btn
                        class="mr-4"
                        type="submit"
                        :error-messages="errors"
                        outlined
                        color="lime darken-3"
                        x-large
                      >
                        Envoyer
                      </v-btn>
                    </form>
                  </validation-observer>
                </v-col>
              </v-row>
            </v-theme-provider>
          </v-container>

          <div class="py-12"></div>
        </v-sheet>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "Testimonials",
};
</script>
