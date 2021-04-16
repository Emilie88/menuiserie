<template>
  <v-app>
    <v-row class="fill-height">
      <v-col cols="12" md="6" xs="12">
        <div>{{ $t("profile") }}</div>
        <br />

        <v-sheet>
          <v-card class="px-4">
            <v-card-text>
              <validation-observer v-slot="{ handleSubmit }" lazy-validation>
                <v-form
                  ref="form"
                  @submit.prevent="handleSubmit(editUser(user.id))"
                >
                  <v-row>
                    <v-col cols="12">
                      <custom-text-field
                        v-model="user.firstName"
                        color="lime darken-3"
                        name="firstName"
                        :label="$t('firstName')"
                        type="text"
                      />
                    </v-col>
                    <v-col cols="12">
                      <custom-text-field
                        v-model="user.lastName"
                        color="lime darken-3"
                        name="lastName"
                        :label="$t('name')"
                        type="text"
                      />
                    </v-col>
                    <v-col cols="12">
                      <custom-text-field
                        v-model="user.email"
                        color="lime darken-3"
                        name="email"
                        :label="$t('mail')"
                        type="email"
                      />
                    </v-col>
                    <div class="text-center mx-auto">
                      <v-col cols="12" sm="3" xs="12">
                        <v-btn outlined color="lime darken-3" type="submit">{{
                          $t("updateProfile")
                        }}</v-btn>
                      </v-col>
                    </div>
                  </v-row>
                </v-form>
              </validation-observer>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="6" xs="12">
        <div>
          <div>{{ $t("mdp") }}</div>
        </div>
        <br />

        <v-sheet>
          <v-card class="px-4">
            <v-card-text>
              <validation-observer v-slot="{ handleSubmit }" lazy-validation>
                <v-form
                  ref="form"
                  @submit.prevent="handleSubmit(editPassword(user.id))"
                >
                  <v-row>
                    <v-col cols="12">
                      <custom-text-field
                        v-model="body.password"
                        color="lime darken-3"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        name="password"
                        :label="$t('mdp')"
                        counter
                        @click:append="show1 = !show1"
                      />
                    </v-col>
                    <div class="text-center mx-auto">
                      <v-col cols="12" sm="3" xs="12">
                        <v-btn outlined color="lime darken-3" type="submit">{{
                          $t("changePassword")
                        }}</v-btn>
                      </v-col>
                    </div>
                  </v-row>
                </v-form>
              </validation-observer>
            </v-card-text>
          </v-card>
        </v-sheet>

        <br />
        <v-dialog v-model="dialog" max-width="550">
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="red lighten-1" v-bind="attrs" v-on="on">
              {{ $t("deleteCompte") }}
            </v-btn>
          </template>
          <v-card>
            <v-card-actions class="ma-0 pa-0">
              <v-spacer></v-spacer>
              <v-btn color="lime darken-3" icon @click.stop="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title>
              {{ $t("confirmDelete") }}
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="lime darken-3" text @click="dialog = false">
                {{ $t("close") }}
              </v-btn>

              <v-btn color="lime darken-3" text @click="deleteUser(user.id)">
                {{ $t("confirm") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
export default {
  name: "ProfileUser",
  data() {
    return {
      token: localStorage.getItem("token"),
      show1: false,
      dialog: false,
      user: {},
      body: {
        password: "",
      },
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      const response = await this.$http.get(
        "https://127.0.0.1:8000/api/user/",
        {
          headers: {
            Authorization: "Bearer" + " " + this.token,
          },
        },
      );
      this.user = response.data;
    },

    async editUser(id) {
      try {
        await this.$http.put(
          "https://127.0.0.1:8000/api/update-user/" + `${id}`,
          this.user,
          {
            headers: {
              Authorization: "Bearer" + " " + this.token,
            },
          },
        );

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your compte has been updated",
          type: "success",
        });
        location.reload();
      } catch (error) {
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
        });
      }
    },
    async editPassword(id) {
      try {
        await this.$http.post(
          "https://127.0.0.1:8000/api/update-password/" + `${id}`,
          this.body,
          {
            headers: {
              Authorization: "Bearer" + " " + this.token,
            },
          },
        );

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your password has been updated",
          type: "success",
        });
        this.$refs.form.reset();
      } catch (error) {
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
        });
        this.$refs.form.reset();
      }
    },
    async deleteUser(id) {
      try {
        await this.$http.delete(
          "https://127.0.0.1:8000/api/remove-user/" + `${id}`,
          {
            headers: {
              Authorization: "Bearer" + " " + this.token,
            },
          },
        );

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your account user has been deleted",
          type: "success",
        });
        this.dialog = false;
        this.$router.push({ name: "Home" });
      } catch (error) {
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
        });
      }
      this.selectedOpen = false;
      // location.reload();
    },
  },
};
</script>
