<template>
  <v-card class="px-4">
    <v-card-text>
      <v-form ref="observer" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field
              color="lime darken-3"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              color="lime darken-3"
              v-model="password"
              :append-icon="show1 ? 'eye' : 'eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
            <v-btn
              x-large
              block
              outlined
              color="lime darken-3"
              to="/testimonials"
              @click="validateLogin"
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
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
      emailRules: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => (v && v.length >= 8) || "Min 8 characters",
      },
    };
  },

  methods: {
    async login() {
      const auth = { username: this.username, password: this.password };
      const url = "http://127.0.0.1:8000/api/users/${id}";
      this.success = false;
      this.error = null;

      try {
        const res = await this.$http.get(url, { auth }).then((res) => res.data);
        this.success = true;
        console.log(res);
      } catch (err) {
        this.error = err.message;
      }
    },
    validateLogin() {
      if (this.$refs.observer.validate()) {
        this.login();
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
