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
                  <v-icon large>mdi-account</v-icon>
                  <div class="caption py-1">{{ $t("login") }}</div>
                </v-tab>
                <v-tab-item>
                  <v-card class="px-4">
                    <v-card-text>
                      <validation-observer v-slot="{ handleSubmit }">
                        <v-form
                          ref="form"
                          lazy-validation
                          @submit.prevent="handleSubmit(login)"
                        >
                          <v-row class="d-flex justify-center">
                            <v-col cols="12">
                              <custom-text-field
                                v-model="username"
                                color="lime darken-3"
                                :label="$t('mail')"
                                type="email"
                                required
                              />
                            </v-col>
                            <v-col cols="12">
                              <custom-text-field
                                v-model="password"
                                color="lime darken-3"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :label="$t('mdp')"
                                :type="show1 ? 'text' : 'password'"
                                required
                                @click:append="show1 = !show1"
                              />
                            </v-col>
                            <!-- <v-col cols="12" class="d-flex justify-center">
                              <sign-in-forgot-password-button />
                            </v-col> -->

                            <v-col cols="12" class="d-flex justify-center">
                              <v-btn
                                large
                                outlined
                                color="lime darken-3"
                                type="submit"
                              >
                                {{ $t("login") }}
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-form>
                      </validation-observer>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
            <br />
            <span color="lime darken-3">{{ $t("registerQuestion") }} ?</span>
            <v-btn icon to="/register">
              <v-icon color="lime darken-3" large>mdi-account-outline</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      valid: true,
      username: "",
      password: "",

      verify: "",
      show1: false,
    };
  },

  methods: {
    async login() {
      try {
        const response = await this.$http.post(
          "https://127.0.0.1:8000/api/login_check",

          {
            username: this.username,
            password: this.password,
          },
        );
        const token = response.data.token;
        const id = response.data.data.id;
        const roles = response.data.data.roles;
        const email = response.data.data.email;
        const firstName = response.data.data.firstName;
        const lastName = response.data.data.lastName;

        localStorage.setItem("roles", roles);
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("id", id);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);

        // Success snackbar
        this.$store.dispatch("show", {
          text: "You have signed in successfully",
          type: "success",
          details: "",
        });

        if (roles[0] === "ROLE_USER") {
          this.$router.push({ name: "DashboardClient" });
        } else if (roles[0] === "ROLE_ADMIN") {
          this.$router.push({ name: "DashboardAdmin" });
        }
      } catch (error) {
        this.error = error.message;
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
          details: error.response && error.response.data,
        });
      }
    },

    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
