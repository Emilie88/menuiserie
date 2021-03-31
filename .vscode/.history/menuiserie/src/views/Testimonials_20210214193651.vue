<template>
  <div id="contact">
    <v-app>
      <v-main>
        <v-sheet id="contact" dark tag="section" tile>
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
                    <form @submit.prevent="addComment">
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

                      <v-row align="center" justify="center">
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
                      </v-row>
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
  data() {
    return {
      body: {
        author: "",
        title: "",
        content: "",
      },

      errors: [],
    };
  },
  methods: {
    addComment() {
      this.$http
        .post("http://127.0.0.1:8000/api/comments", this.body)
        .then((response) => {
          this.body = response.data;
          // Success snackbar
          this.$store.dispatch("show", {
            text: "Votre commentaire a bien été ajouté !",
            // text: this.$t(
            //   `BackOffice.Accounts.AccountDetails.${
            //     this.translations[this.type]
            //   }.Common.successDisable`,
            //   {
            //     id: this.id,
            //   },
            // ),
            type: "warning",
          });
        })
        .catch((error) => {
          // Error snackbar
          this.$store.dispatch("show", {
            text: error.message,
            type: "error",
            details: error.response && error.response.data,
          });
        });
      // this.$refs.observer.validate();
      this.snackbar = true;

      this.body.firstName = "";
      this.body.lastName = "";
      this.body.email = "";
      this.body.password = "";

      this.$refs.observer.reset();
    },
  },
};
</script>
