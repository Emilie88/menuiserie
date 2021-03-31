<template>
  <!-- <div id="contact"> -->
  <!-- <v-app>
      <v-main> -->
  <!-- :<v-sheet id="contact" color="#333333" dark tag="section" tile> -->
  <!-- <div class="py-12"></div> -->
  <section id="card">
    <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
      CONTACT
    </h2>

    <v-responsive class="mx-auto mb-12" width="56">
      <v-divider class="mb-1"></v-divider>

      <v-divider></v-divider>
    </v-responsive>

    <!-- <v-theme-provider> -->
    <v-container>
      <v-row>
        <v-col md="6">
          Me joindre

          <div>
            <v-icon color="white">
              mdi-email
            </v-icon>
            <span> mail@gmail.com</span>
          </div>

          <div>
            <v-icon color="white">
              mdi-phone
            </v-icon>
            <span> mail@gmail.com</span>
          </div>

          <div class="googlemap">
            <iframe
              src="https://maps.google.com/maps?q=le%20raincy&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
            ></iframe>
          </div>
        </v-col>

        <v-col md="6">
          <div>Laissez-moi un message</div>
          <br />
          <br />

          <validation-observer v-slot="{ handleSubmit }">
            <v-form
              ref="form"
              @submit.prevent="handleSubmit(submit)"
              lazy-validation
            >
              <custom-text-field
                flat
                color="lime darken-3"
                v-model="body.name"
                label="Name"
                required
              />

              <custom-text-field
                flat
                color="lime darken-3"
                v-model="body.mail"
                label="E-mail"
                type="email"
                required
              />

              <custom-text-field
                flat
                color="lime darken-3"
                v-model="body.subject"
                label="Subject"
                required
              />

              <custom-textarea
                flat
                color="lime darken-3"
                v-model="body.message"
                label="Message *"
                required
              />

              <v-btn
                class="mr-4"
                type="submit"
                outlined
                color="lime darken-3"
                x-large
              >
                Envoyer
              </v-btn>
            </v-form>
          </validation-observer>
        </v-col>
      </v-row>
      <!-- </v-theme-provider> -->
    </v-container>

    <div class="py-12"></div>
  </section>
  <!-- </v-sheet> -->
  <!-- </v-main>
    </v-app> -->
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      body: {
        name: "",
        mail: "",
        subject: "",
        message: "",
      },
    };
  },

  methods: {
    async submit() {
      try {
        await this.$http.post("http://127.0.0.1:8000/api/contacts", this.body);

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your message has been send",
          type: "success",
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
