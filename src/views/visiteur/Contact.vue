<template>
  <v-container>
    <!-- :<v-sheet id="contact" color="#333333" dark tag="section" tile> -->
    <div class="py-12"></div>

    <h2
      :class="[
        $vuetify.breakpoint.smAndDown
          ? 'display-1 font-weight-bold mb-3 text-uppercase text-center'
          : 'display-2 font-weight-bold mb-3 text-uppercase text-center',
      ]"
    >
      {{ $t("contact") }}
    </h2>

    <v-responsive class="mx-auto mb-12" width="56">
      <v-divider class="mb-1"></v-divider>

      <v-divider></v-divider>
    </v-responsive>

    <v-theme-provider>
      <v-row>
        <v-col cols="12" md="6" xs="12">
          {{ $t("join") }}

          <div>
            <v-icon color="white"> mdi-email </v-icon>
            <span> mail@gmail.com</span>
          </div>

          <div>
            <v-icon color="white"> mdi-phone </v-icon>
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

        <v-col cols="12" md="6" xs="12">
          <div>{{ $t("liveMessage") }}</div>
          <br />
          <br />

          <validation-observer v-slot="{ handleSubmit }">
            <v-form
              ref="form"
              lazy-validation
              @submit.prevent="handleSubmit(submit)"
            >
              <custom-text-field
                v-model="body.name"
                flat
                color="lime darken-3"
                :label="$t('name')"
                required
              />

              <custom-text-field
                v-model="body.mail"
                flat
                color="lime darken-3"
                :label="$t('mail')"
                type="email"
                required
              />

              <custom-text-field
                v-model="body.subject"
                flat
                color="lime darken-3"
                :label="$t('subject')"
                required
              />

              <custom-textarea
                v-model="body.message"
                flat
                color="lime darken-3"
                :label="$t('message')"
                required
              />

              <v-btn
                class="mr-4"
                type="submit"
                outlined
                color="lime darken-3"
                x-large
              >
                {{ $t("send") }}
              </v-btn>
            </v-form>
          </validation-observer>
        </v-col>
      </v-row>
    </v-theme-provider>

    <div class="py-12"></div>
    <!-- </v-sheet> -->
  </v-container>
</template>
<script>
export default {
  name: "Contact",
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
        await this.$http.post(
          "https://127.0.0.1:8000/api/add-contact",
          this.body,
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
