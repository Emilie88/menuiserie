<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card color="#333333">
              <v-tabs show-arrows color="lime darken-3" icons-and-text grow>
                <v-tab>
                  <v-icon large>mdi-account-outline</v-icon>
                  <div class="caption py-1">Créer compte</div>
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
                                label="Prénom"
                                required
                              />
                            </v-col>
                            <v-col cols="6">
                              <custom-text-field
                                v-model="body.lastname"
                                color="lime darken-3"
                                name="lastName"
                                label="Nom"
                                required
                              />
                            </v-col>
                            <v-col cols="12">
                              <custom-text-field
                                v-model="body.email"
                                color="lime darken-3"
                                name="email"
                                label="E-mail"
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
                                label="Mot de passe *"
                                counter
                                required
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
                                block
                                outlined
                                color="lime darken-3"
                                type="submit"
                                >Créer compte</v-btn
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
      // passwordRules: [
      //   (v) => !!v || "Password is required",
      //   (v) => (v && v.length >= 8) || "Password must have min 8 characters",
      //   (v) => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
      //   (v) => /(?=.*\d)/.test(v) || "Must have one number",
      //   (v) => /([!@$%])/.test(v) || "Must have one special character [&!@#$%]",
      // ],

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
          type: "succes",
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
