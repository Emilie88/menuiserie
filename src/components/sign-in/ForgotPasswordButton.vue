<template>
  <v-main>
    <v-dialog v-model="dialog" max-width="550">
      <template v-slot:activator="{ on, attrs }">
        <a
          color="lime darken-3"
          class="public-page-text--text forgot-password-button"
          v-bind="attrs"
          v-on="on"
        >
          {{ $t("forgotPassword") }} ?</a
        >
      </template>
      <v-card>
        <v-card-actions class="ma-0 pa-0">
          <v-spacer></v-spacer>
          <v-btn color="lime darken-3" icon @click.stop="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-title>
          <v-icon class="pr-2">mdi-key</v-icon>
          <span>{{ $t("forgotPassword") }} ?</span>
        </v-card-title>
        <v-card-text>
          <validation-observer v-slot="{ handleSubmit }">
            <v-form
              ref="form"
              lazy-validation
              @submit.prevent="handleSubmit(sendForgotPasswordEmail)"
            >
              <v-row>
                <v-col cols="12">
                  <custom-text-field
                    v-model="body.email"
                    color="lime darken-3"
                    name="email"
                    :label="$t('mail')"
                    type="email"
                  />
                </v-col>
                <v-col cols="12" sm="3" xs="12">
                  <v-btn large outlined color="lime darken-3" type="submit">{{
                    $t("send")
                  }}</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </validation-observer>
        </v-card-text>

        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="lime darken-3" text @click="dialog = false">
            Annuler
          </v-btn>

          <v-btn color="lime darken-3" text> Confirmer </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      sent: false,
      body: { email: null },
    };
  },

  methods: {
    resetInputs(body) {
      Object.keys(body).forEach((key) => {
        body[`${key}`] = null;
      });
    },

    async sendForgotPasswordEmail() {
      try {
        await this.$http.post(
          "https://127.0.0.1:8000/api/reset-password",
          this.body,
        );
        this.resetInputs(this.body);
        this.dialog = false;
        // Success snackbar
        this.$store.dispatch("show", {
          text: "A mail is send to you",
          type: "success",
        });
      } catch (error) {
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
        });
      }
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.forgot-password-button {
  text-decoration: underline;
  color: #fff;
}
</style>
