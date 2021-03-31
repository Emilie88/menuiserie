<template>
  <div id="login">
    <v-app>
      <v-main>
        <div class="py-12"></div>
        <v-container>
          <v-row>
            <p>
              Cette page est reserve pour tous les clients qui ont envie de
              partager leur experience avec nous en creant un compte qui leur
              donne le droit de deposer leurs avis sur les travaux réalisées!
            </p>
            <br />
          </v-row>
          <v-card color="#333333">
            <v-tabs
              v-model="tab"
              show-arrows
              color="lime darken-3"
              icons-and-text
              grow
            >
              <v-tabs-slider color="lime darken-3"></v-tabs-slider>
              <v-tab v-for="(item, index) in tabs" :key="index">
                <v-icon large>{{ item.icon }}</v-icon>
                <div class="caption py-1">{{ item.name }}</div>
              </v-tab>
              <v-tab-item>
                <!-- LoginForm -->
                <LoginForm />
              </v-tab-item>

              <v-tab-item>
                <RegisterForm />
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-container>
        <div class="py-12"></div>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
export default {
  data() {
    return {
      tab: 0,
      tabs: [
        { name: "Login", icon: "mdi-account" },
        { name: "Register", icon: "mdi-account-outline" },
      ],
      // valid: true,
      // firstName: "",
      // lastName: "",
      // email: "",
      // password: "",
      // verify: "",
      // loginPassword: "",
      // loginEmail: "",
      // loginEmailRules: [
      //   (v) => !!v || "Required",
      //   (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      // ],
      // emailRules: [
      //   (v) => !!v || "Required",
      //   (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      // ],

      // show1: false,
      // rules: {
      //   required: (value) => !!value || "Required.",
      //   min: (v) => (v && v.length >= 8) || "Min 8 characters",
      // },
    };
  },
  components: {
    LoginForm,
    RegisterForm,
  },
  // computed: {
  //   passwordMatch() {
  //     return () => this.password === this.verify || "Password must match";
  //   },
  // },
  // methods: {
  // validate() {
  //   if (this.$refs.loginForm.validate()) {
  // submit form to server/API here...
  //   }
  // },
  // reset() {
  //   this.$refs.form.reset();
  // },
  // resetValidation() {
  //   this.$refs.form.resetValidation();
  // },
  // },
};
</script>
