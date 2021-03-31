<template>
  <v-app>
    <v-row class="fill-height">
      <v-col>
        <v-card>
          <v-card-title v-if="body.name == null">
            Vous avez aucun rendez vous !
          </v-card-title>
        </v-card>
        <v-dialog v-model="dialogDate" max-width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="lime darken-3" dark v-bind="attrs" v-on="on">
              Créer un RDV
            </v-btn>
          </template>
          <v-card class="pa-3">
            <v-container class="ma-0 pa-0">
              <v-card-actions class="ma-0 pa-0">
                <v-spacer></v-spacer>
                <v-btn
                  color="lime darken-3"
                  icon
                  @click.stop="dialogDate = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-actions>
              <v-form @submit.prevent="addEvent">
                <v-text-field
                  color="lime darken-3"
                  v-model="body.name"
                  type="text"
                  label="Titre"
                ></v-text-field>

                <v-text-field
                  color="lime darken-3"
                  v-model="body.start"
                  type="date"
                  label="Date"
                ></v-text-field>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="body.time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      color="lime darken-3"
                      v-model="body.time"
                      label="Heure"
                      prepend-icon="mdi-clock-time-four-outline"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-model="body.time"
                    full-width
                    @click:minute="$refs.menu.save(body.time)"
                  ></v-time-picker>
                </v-menu>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    type="submit"
                    color="lime darken-3"
                    class="mr-4"
                    @click.stop="dialogDate = false"
                  >
                    Add rdv
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-container>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    body: {
      time: null,
      name: null,
      start: null,
      value: null,
    },

    dialogDate: false,
  }),
  // mounted() {
  //   this.getEvents();
  // },

  methods: {
    async addEvent() {},
  },
};
</script>
