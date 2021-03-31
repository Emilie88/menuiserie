<template>
  <v-app>
    <v-row class="fill-height">
      <v-col>
        <v-sheet>
          <v-card class="px-4">
            <v-card-text>
              <validation-observer v-slot="{ handleSubmit }">
                <v-form
                  ref="form"
                  @submit.prevent="handleSubmit(submitRegister)"
                  lazy-validation
                >
                  <v-row>
                    <v-col cols="12">
                      <custom-text-field
                        color="lime darken-3"
                        name="firstName"
                        v-model="firstName"
                        label="Prénom"
                        type="text"
                      />
                    </v-col>
                    <v-col cols="12">
                      <custom-text-field
                        color="lime darken-3"
                        name="lastName"
                        v-model="lastName"
                        label="Nom"
                        type="text"
                      />
                    </v-col>
                    <v-col cols="12">
                      <custom-text-field
                        color="lime darken-3"
                        name="email"
                        v-model="email"
                        label="E-mail"
                        type="email"
                      />
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        color="lime darken-3"
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        name="password"
                        label="Mot de passe *"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col
                      class="d-flex ml-auto mr-auto"
                      cols="12"
                      sm="3"
                      xs="12"
                    >
                      <v-btn
                        x-large
                        block
                        outlined
                        color="lime darken-3"
                        type="submit"
                        >Editer</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </validation-observer>
            </v-card-text>
          </v-card>
        </v-sheet>
        <div class="py-5"></div>
        <v-dialog v-model="dialog" persistent max-width="550">
          <v-btn icon right color="lime darken-3"
            ><v-icon>mdi-close</v-icon></v-btn
          >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="lime darken-3" dark v-bind="attrs" v-on="on">
              Supprimer compte
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              Vous etes sur de vouloir supprimer votre compte?
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="lime darken-3" text @click="dialog = false">
                Annuler
              </v-btn>

              <v-btn color="lime darken-3" text @click="dialog = false">
                Confirmer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      email: localStorage.getItem("email"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      password: "",
      show1: false,
      dialog: false,
    };
  },
};
</script>
