<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <div class="py-12"></div>
            <v-card color="#333333">
              <v-tabs show-arrows color="lime darken-3" icons-and-text grow>
                <v-tab>
                  <v-icon large>mdi-account-outline</v-icon>
                  <div class="caption py-1">{{ $t("register") }}</div>
                </v-tab>
                <v-tab-item>
                  <v-card class="px-4">
                    <v-card-text>
                      <validation-observer v-slot="{ handleSubmit }">
                        <v-form
                          ref="form"
                          lazy-validation
                          @submit.prevent="handleSubmit(submitRegister)"
                        >
                          <v-row>
                            <v-col cols="6">
                              <custom-text-field
                                v-model="body.firstname"
                                color="lime darken-3"
                                name="firstName"
                                :label="$t('firstName')"
                                required
                              />
                            </v-col>
                            <v-col cols="6">
                              <custom-text-field
                                v-model="body.lastname"
                                color="lime darken-3"
                                name="lastName"
                                :label="$t('name')"
                                required
                              />
                            </v-col>
                            <v-col cols="12">
                              <custom-text-field
                                v-model="body.email"
                                color="lime darken-3"
                                name="email"
                                :label="$t('mail')"
                                type="email"
                                required
                              />
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                v-model="body.password"
                                color="lime darken-3"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                name="password"
                                :label="$t('mdp')"
                                counter
                                :rules="passwordRules"
                                @click:append="show1 = !show1"
                              ></v-text-field>
                            </v-col>

                            <v-col class="d-flex" cols="12" sm="6" xs="12">
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col
                              class="d-flex"
                              cols="12"
                              sm="5"
                              xs="12"
                              align-end
                            >
                              <v-btn
                                x-large
                                outlined
                                color="lime darken-3"
                                type="submit"
                                >{{ $t("register") }}</v-btn
                              >
                            </v-col>
                          </v-row>
                        </v-form>
                      </validation-observer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      errors: [],
      valid: true,
      passwordScore: null,
      body: {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
      },
      verify: "",
      passwordRules: [
        (v) => !!v || this.$t("rulesPassword.required"),
        (v) => /(?=.*[A-Z])/.test(v) || this.$t("rulesPassword.uppercase"),
        (v) => /(?=.*\d)/.test(v) || this.$t("rulesPassword.number"),
        (v) => /([!@$%])/.test(v) || this.$t("rulesPassword.charat"),
        (v) => (v && v.length >= 8) || this.$t("rulesPassword.length"),
      ],

      show1: false,
    };
  },

  methods: {
    async submitRegister() {
      try {
        await this.$http.post(
          "https://localhost:8000/api/register-user",
          this.body,
        );
        // Success snackbar
        this.$store.dispatch("show", {
          text: "Votre compte a bien été crée!",
          type: "success",
        });
        this.$router.push({ name: "Login" });
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
