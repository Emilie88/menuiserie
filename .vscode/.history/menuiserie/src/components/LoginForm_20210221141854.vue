<template>
  <v-card class="px-4">
    <v-card-text>
      <validation-observer v-slot="{ handleSubmit }">
        <v-form
          ref="observer"
          @submit.prevent="handleSubmit(login)"
          lazy-validation
        >
          <v-row>
            <v-col cols="12">
              <custom-text-field
                color="lime darken-3"
                v-model="email"
                label="E-mail"
                type="email"
                required
              />
            </v-col>
            <v-col cols="12">
              <custom-text-field
                color="lime darken-3"
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                label="Password"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                required
              />
            </v-col>
            <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
              <v-btn x-large block outlined color="lime darken-3" type="submit">
                Login
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </validation-observer>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      verify: "",
      show1: false,
    };
  },

  methods: {
    async login() {
      const auth = { username: this.username, password: this.password };
      const url = "http://127.0.0.1:8000/api/users/${id}";

      try {
        const res = await this.$http.get(url, { auth }).then((res) => res.data);
        console.log(res);
        // Success snackbar
        this.$store.dispatch("show", {
          text: "Vous etes log-in!",
          type: "succes",
          details: "",
        });
        this.$router.push({ name: "Testimonials" });
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
