<template>
  <v-card class="px-4">
    <v-card-text>
      <validation-observer v-slot="{ handleSubmit }">
        <v-form
          ref="form"
          @submit.prevent="handleSubmit(submitRegister)"
          lazy-validation
        >
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <custom-text-field
                color="lime darken-3"
                v-model="body.firstname"
                name="firstName"
                label="First Name"
                required
              />
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <custom-text-field
                color="lime darken-3"
                name="lastName"
                v-model="body.lastname"
                label="Last Name"
                required
              />
            </v-col>
            <v-col cols="12">
              <custom-text-field
                color="lime darken-3"
                name="email"
                v-model="body.email"
                label="E-mail"
                type="email"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                color="lime darken-3"
                v-model="body.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="passwordRules"
                :type="show1 ? 'text' : 'password'"
                name="password"
                label="Password *"
                counter
                @click:append="show1 = !show1"
                required
              ></v-text-field>
            </v-col>

            <v-spacer></v-spacer>
            <v-col class="d-flex ml-auto" cols="12" sm="3" xs="12">
              <v-btn x-large block outlined color="lime darken-3" type="submit"
                >Register</v-btn
              >
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
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Password must have min 8 characters",
        (v) => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
        (v) => /(?=.*\d)/.test(v) || "Must have one number",
        (v) => /([!@$%])/.test(v) || "Must have one special character [!@#$%]",
      ],

      show1: false,
    };
  },

  methods: {
    async submitRegister() {
      try {
        await this.$http.post(
          "https://localhost:8000/api/users/register",
          this.body
        );
        // Success snackbar
        this.$store.dispatch("show", {
          text: "Votre compte a bien été crée!",
          type: "succes",
          details: "Connectez-vous pour ajouter votre commentaire.",
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
