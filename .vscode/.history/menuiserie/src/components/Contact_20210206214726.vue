<template>
  <div id="contact">
    <v-app>
      <v-main>
        <v-sheet id="contact" color="#333333" dark tag="section" tile>
          <div class="py-12"></div>

          <v-container>
            <h2
              class="display-2 font-weight-bold mb-3 text-uppercase text-center"
            >
              CONTACT
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-theme-provider>
              <v-row>
                <v-col md="6" sm="12" xs="12">
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

                <v-col md="6" sm="12" xs="12">
                  <div>Laissez-moi un message</div>
                  <br />
                  <br />
                  <v-snackbar
                    v-model="snackbar"
                    absolute
                    top
                    right
                    color="success"
                  >
                    <span>Message envoyé!</span>
                    <v-icon dark>
                      mdi-checkbox-marked-circle
                    </v-icon>
                  </v-snackbar>

                  <validation-observer ref="observer" v-slot="{ errors }">
                    <form @submit.prevent="submit">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Name"
                        rules="required"
                      >
                        <v-text-field
                          color="lime darken-3"
                          flat
                          v-model="body.name"
                          :error-messages="errors"
                          label="Name*"
                          required
                        ></v-text-field>
                      </validation-provider>

                      <validation-provider
                        v-slot="{ errors }"
                        name="Email"
                        rules="required|email"
                      >
                        <v-text-field
                          color="lime darken-3"
                          flat
                          v-model="body.mail"
                          :error-messages="errors"
                          label="E-mail*"
                          required
                        ></v-text-field>
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Subject"
                        rules="required"
                      >
                        <v-text-field
                          color="lime darken-3"
                          flat
                          v-model="body.subject"
                          :error-messages="errors"
                          label="Subject*"
                          required
                        ></v-text-field>
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Message"
                        rules="required"
                      >
                        <v-textarea
                          color="lime darken-3"
                          flat
                          v-model="body.message"
                          :error-messages="errors"
                          label="Message*"
                          required
                        ></v-textarea>
                      </validation-provider>

                      <v-btn
                        class="mr-4"
                        type="submit"
                        :error-messages="errors"
                        outlined
                        color="lime darken-3"
                        x-large
                      >
                        Envoyer
                      </v-btn>
                    </form>
                  </validation-observer>
                </v-col>
              </v-row>
            </v-theme-provider>
          </v-container>

          <div class="py-12"></div>
        </v-sheet>
      </v-main>
    </v-app>
  </div>
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

      snackbar: false,
      errors: [],
    };
  },

  methods: {
    submit() {
      this.$http
        .post("http://127.0.0.1:8000/api/contacts", this.body)
        .then((response) => {
          (this.body.name = response.data.name),
            (this.body.mail = response.data.mail),
            (this.body.subject = response.data.subject),
            (this.body.message = response.data.message);
        })
        .catch((e) => {
          this.errors.push(e);
        });
      this.$refs.observer.validate();
      this.snackbar = true;

      this.body.name = "";
      this.body.mail = "";
      this.body.subject = "";
      this.body.message = "";

      this.$refs.observer.reset();
    },
    clear() {
      this.body.name = "";
      this.body.mail = "";
      this.body.subject = "";
      this.body.message = "";

      this.$refs.observer.reset();
    },

    //  onClick(){
    //   axios.post("http://127.0.0.1:8000/api/contacts",this.body)
    //  .then(response => {
    //   this.body.name = response.data.name,
    //   this.body.mail = response.data.mail,
    //   this.body.subject = response.data.subject,
    //   this.body.message = response.data.message
    //   }
    //  )
    // .catch(e => {
    //   this.errors.push(e);
    // });

    // this.snackbar = true;

    // }
  },
};
</script>
