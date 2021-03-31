<template>
  <div id="contact">
    <v-app>
      <v-main>
        <v-sheet id="contact" color="#333333" dark tag="section" tile>
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3  text-center">
              Demande de devis
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <div>
              <strong>Art Menuiserie</strong> s'engage à être réactif.
              Demandez-nous un devis pour tout type de réalisation en bois sur
              mesure et nous vous répondrons dans les meilleurs délais, en
              fonction de votre demande !
            </div>

            <br />
            <v-theme-provider light>
              <validation-observer ref="observer" v-slot="{ errors }">
                <form @submit.prevent="submitDevis">
                  <v-row>
                    <v-col md="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Name"
                        rules="required"
                      >
                        <v-text-field
                          flat
                          v-model="body.name"
                          :error-messages="errors"
                          label="Name*"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="6" xs="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Phone"
                        rules="required"
                      >
                        <v-text-field
                          flat
                          v-model="body.phone"
                          :error-messages="errors"
                          label="Téléphone*"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col md="6" xs="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Mail"
                        rules="required|email"
                      >
                        <v-text-field
                          flat
                          v-model="body.mail"
                          :error-messages="errors"
                          label="Email*"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Adresse"
                        rules="required"
                      >
                        <v-text-field
                          flat
                          v-model="body.addresse"
                          :error-messages="errors"
                          label="Adresse*"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="6" xs="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="City"
                        rules="required"
                      >
                        <v-text-field
                          flat
                          v-model="body.city"
                          :error-messages="errors"
                          label="Ville*"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col md="6" xs="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Zipcode"
                        rules="required"
                      >
                        <v-text-field
                          flat
                          v-model="body.zipcode"
                          :error-messages="errors"
                          label="Code postal*"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col md="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Subject"
                        rules="required"
                      >
                        <v-text-field
                          flat
                          v-model="body.subject"
                          :error-messages="errors"
                          label="Sujet*"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Message"
                        rules="required"
                      >
                        <v-textarea
                          flat
                          v-model="body.message"
                          :error-messages="errors"
                          label="Message*"
                          required
                        ></v-textarea>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-row align="center" justify="center">
                    <v-btn
                      class="mr-4"
                      type="submit"
                      :error-messages="errors"
                      outlined
                      color="primary"
                      x-large
                    >
                      Envoyer
                    </v-btn>
                  </v-row>
                </form>
              </validation-observer>
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
  data() {
    return {
      body: {
        name: "",
        phone: "",
        mail: "",
        address: "",
        city: "",
        zipcode: "",
        subject: "",
        message: "",
      },

      snackbar: false,
      errors: [],
    };
  },

  methods: {
    submitDevis() {
      this.$http
        .post("http://127.0.0.1:8000/api/devis", this.body)
        .then((response) => {
          (this.body.name = response.data.name),
            (this.body.phone = response.data.phone),
            (this.body.mail = response.data.mail),
            (this.body.address = response.data.address),
            (this.body.city = response.data.city),
            (this.body.zipcode = response.data.zipcode),
            (this.body.subject = response.data.subject),
            (this.body.message = response.data.message);
        })
        .catch((e) => {
          this.errors.push(e);
        });
      this.$refs.observer.validate();
      this.snackbar = true;

      this.body.name = "";
      this.body.phone = "";
      this.body.mail = "";
      this.body.address = "";
      this.body.city = "";
      this.body.zipcode = "";
      this.body.subject = "";
      this.body.message = "";

      this.$refs.observer.reset();
    },
  },
};
</script>
<style scoped>
.v-icon.v-icon.v-icon--link {
  color: white;
}
</style>
