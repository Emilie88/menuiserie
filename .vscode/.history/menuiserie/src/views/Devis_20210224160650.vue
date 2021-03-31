<template>
  <div id="contact">
    <v-app>
      <v-main>
        <v-sheet id="contact" dark tag="section" tile>
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3  text-center">
              {{ $t("quoteRequest") }}
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <div>
              <strong>{{ $t("titleHome") }}</strong> {{ $t("devisContent") }}
            </div>

            <br />
            <v-theme-provider>
              <validation-observer v-slot="{ handleSubmit }">
                <v-form
                  ref="form"
                  @submit.prevent="handleSubmit(submitDevis)"
                  lazy-validation
                >
                  <v-row>
                    <v-col md="12">
                      <custom-text-field
                        flat
                        color="lime darken-3"
                        v-model="body.name"
                        :label="$t('name')"
                        required
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="6" xs="12">
                      <custom-text-field
                        color="lime darken-3"
                        v-model="body.phone"
                        :label="$t('phone')"
                        required
                      />
                    </v-col>
                    <v-col md="6" xs="12">
                      <custom-text-field
                        color="lime darken-3"
                        v-model="body.mail"
                        :label="$t('mail')"
                        type="email"
                        required
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="12">
                      <custom-text-field
                        color="lime darken-3"
                        v-model="body.addresse"
                        :label="$t('address')"
                        required
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="6" xs="12">
                      <custom-text-field
                        color="lime darken-3"
                        v-model="body.city"
                        :label="$t('city')"
                        required
                      />
                    </v-col>
                    <v-col md="6" xs="12">
                      <custom-text-field
                        color="lime darken-3"
                        v-model="body.zipcode"
                        :label="$t('zipCode')"
                        required
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col md="12">
                      <custom-text-field
                        color="lime darken-3"
                        v-model="body.subject"
                        :label="$t('subject')"
                        required
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="12">
                      <custom-textarea
                        color="lime darken-3"
                        v-model="body.message"
                        :label="$t('message')"
                        required
                      />
                    </v-col>
                  </v-row>
                  <v-row align="center" justify="center">
                    <v-btn
                      class="mr-4"
                      type="submit"
                      outlined
                      color="lime darken-3"
                      x-large
                    >
                      {{ $t("send") }}
                    </v-btn>
                  </v-row>
                </v-form>
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
    };
  },

  methods: {
    async submitDevis() {
      try {
        await this.$http.post("https://127.0.0.1:8000/api/devis/", this.body);

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your devis has been send",
          type: "success",
        });
      } catch (error) {
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
        });
        this.$refs.form.reset();
      }
    },
  },
};
</script>
<style scoped>
.v-icon.v-icon.v-icon--link {
  color: white;
}
</style>
