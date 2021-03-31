<template>
  <v-row>
    <v-row>
      <v-col xs="12" sm="12" md="6">
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
    </v-row>
    <v-row>
      <v-col xs="12" sm="12" md="6">
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
  </v-row>
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
        await this.$https.post(
          "https://127.0.0.1:8000/api/contacts/",
          this.body
        );

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
