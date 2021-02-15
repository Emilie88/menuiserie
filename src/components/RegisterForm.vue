<template>
  <v-card class="px-4">
    <v-card-text>
      <v-form ref="observer" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              color="lime darken-3"
              v-model="body.firstName"
              :rules="[rules.required]"
              label="First Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              color="lime darken-3"
              v-model="body.lastName"
              :rules="[rules.required]"
              label="Last Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              color="lime darken-3"
              v-model="body.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              color="lime darken-3"
              v-model="body.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>

          <v-spacer></v-spacer>
          <v-col class="d-flex ml-auto" cols="12" sm="3" xs="12">
            <v-btn
              x-large
              block
              outlined
              color="lime darken-3"
              @click="submitRegister"
              >Register</v-btn
            >
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
      errors: [],
      valid: true,
      body: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
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
  computed: {
    passwordMatch() {
      return () => this.body.password === this.verify || "Password must match";
    },
  },
  methods: {
    submitRegister() {
      this.$http
        .post("http://127.0.0.1:8000/api/users", this.body)
        .then((response) => {
          this.body = response.data;
          // this.$router.push({ name: "LoginRegister" });
          // Success snackbar
          this.$store.dispatch("show", {
            text: "Votre compte a bien été crée!",
            type: "succes",
            details: "Connectez-vous pour ajouter votre commentaire.",
          });
        })
        .catch((error) => {
          this.errors.push(error);
          // Error snackbar
          this.$store.dispatch("show", {
            text: error.message,
            type: "error",
            details: error.response && error.response.data,
          });
        });

      this.body.firstName = "";
      this.body.lastName = "";
      this.body.email = "";
      this.body.password = "";

      this.$refs.observer.reset();
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
