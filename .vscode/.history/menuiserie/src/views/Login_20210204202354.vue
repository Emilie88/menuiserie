<template>
  <div id="login">
    <v-app>
      <v-main>
        <!-- <v-sheet id="contact" color="#333333" dark tag="section" tile> -->
        <div class="py-12"></div>
        <p>cfg</p>
        <!-- </v-sheet> -->
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 0,
      tabs: [
        { name: "Login", icon: "mdi-account" },
        { name: "Register", icon: "mdi-account-outline" },
      ],
      valid: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      verify: "",
      loginPassword: "",
      loginEmail: "",
      loginEmailRules: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
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
      return () => this.password === this.verify || "Password must match";
    },
  },
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
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
