<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md9>
        <div class="subtitle">
          Votre agenda sert a prendre un rendez-vous avec l'entrepener. Il est
          disponible du Lundi au Vendredi de 8h00 a 17h00 !
        </div>
        <div class="subtitle red--text">
          Attention toutes reservation qui n'est pas de couleur verte n'est pas
          validé !
        </div>
        <br />

        <v-toolbar flat color="lime darken-3">
          <v-btn
            v-show="$vuetify.breakpoint.smAndUp"
            outlined
            class="mx-3"
            @click="setDialogDate"
          >
            New Event
          </v-btn>

          <v-btn outlined class="mx-3" @click="setToday"> Today </v-btn>

          <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>

          <v-btn fab text small @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>

          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-show="$vuetify.breakpoint.smAndUp" outlined v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>

        <v-dialog v-model="dialogDate" persistent max-width="500">
          <v-card>
            <v-container>
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
              <validation-observer v-slot="{ handleSubmit }" lazy-validation>
                <v-form @submit.prevent="handleSubmit(addEvent)">
                  <span v-if="eventDouble != null">{{ eventDouble }}</span>
                  <custom-text-field
                    v-model="body.name"
                    color="lime darken-3"
                    type="text"
                    :label="$t('event')"
                    required
                  />
                  <custom-text-field
                    v-model="body.email"
                    color="lime darken-3"
                    type="text"
                    label="Email"
                  />
                  <custom-text-field
                    v-model="body.details"
                    color="lime darken-3"
                    type="text"
                    label="Details"
                  />

                  <custom-text-field
                    v-model="body.start"
                    color="lime darken-3"
                    type="datetime-local"
                    name="start"
                    :label="$t('start')"
                    required
                  />
                  <custom-text-field
                    v-model="body.end"
                    color="lime darken-3"
                    type="datetime-local"
                    name="end"
                    :label="$t('end')"
                    required
                  />

                  <custom-text-field
                    v-model="body.color"
                    color="lime darken-3"
                    type="text"
                    :label="$t('color')"
                  />

                  <v-btn type="submit" color="lime darken-3" class="mr-4">
                    {{ $t("createEvent") }}
                  </v-btn>
                </v-form>
              </validation-observer>
            </v-container>
          </v-card>
        </v-dialog>

        <v-sheet height="500">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="lime darken-3"
            :events="events"
            :event-color="getEventColor"
            :event-margin-bottom="3"
            :now="today"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card color="grey lighten-4" :width="350" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-btn
                  v-if="selectedEvent.author === null"
                  icon
                  @click="editItem(selectedEvent)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title>
                  <span v-text="selectedEvent.name" />
                  <span
                    v-if="selectedEvent.author != null"
                    v-text="selectedEvent.author"
                  />
                </v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <span
                  class="secondary--text"
                  v-text="selectedEvent.details"
                ></span>
              </v-card-text>
              <v-dialog v-model="dialogEdit" max-width="500px">
                <v-card>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-card-actions class="ma-0 pa-0">
                          <v-card-title class="pa-0">
                            <v-icon small class="mr-2" color="lime darken-3">
                              mdi-pencil </v-icon
                            >Editer</v-card-title
                          >

                          <v-spacer></v-spacer>
                          <v-btn
                            color="lime darken-3"
                            icon
                            @click.stop="dialogEdit = false"
                          >
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-col>
                      <v-col cols="12" md="6" xs="12">
                        <v-text-field
                          v-model="event.name"
                          color="lime darken-3"
                          :label="$t('event')"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6" xs="12">
                        <v-text-field
                          v-model="event.email"
                          color="lime darken-3"
                          label="Email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="event.details"
                          type="text"
                          color="lime darken-3"
                          label="Details"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="event.start"
                          type="datetime-local"
                          color="lime darken-3"
                          :label="$t('start')"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="event.end"
                          type="datetime-local"
                          color="lime darken-3"
                          :label="$t('end')"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="lime darken-3"
                      text
                      @click.stop="dialogEdit = false"
                    >
                      Annuler
                    </v-btn>
                    <v-btn
                      color="lime darken-3"
                      text
                      @click="editConfirm(event.id)"
                    >
                      Editer
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-flex>
    </v-layout></v-container
  >
</template>

<script>
const token = localStorage.getItem("token");

export default {
  name: "AgendaClient",
  data: () => ({
    dialogDelete: false,
    dialogEdit: false,
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },

    color: "primary",
    editedIndex: -1,
    // currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    eventAdmin: [],
    event: {},
    dialog: false,
    dialogDate: false,
    eventDouble: null,
    body: {
      name: null,
      email: null,
      start: null,
      end: null,
      color: "primary",
      details: null,
    },
  }),
  created() {
    this.getEventsAdmin();
  },
  mounted() {
    this.getEvents();
  },

  methods: {
    async addEvent() {
      let eventStart = this.events.map((item) => item.start);
      let eventEnd = this.events.map((item) => item.end);

      if (
        eventStart.includes(this.body.start) ||
        eventEnd.includes(this.body.end)
      ) {
        this.eventDouble = "Ce creneau horaire est deja pris";
      } else {
        try {
          await this.$http.post(
            "https://127.0.0.1:8000/api/add-scheduler",
            this.body,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            },
          );
          this.dialogDate = false;

          // Success snackbar
          this.$store.dispatch("show", {
            text: "Your event has been added",
            type: "success",
          });
          location.reload();
        } catch (error) {
          // Error snackbar
          this.$store.dispatch("show", {
            text: error.message,
            type: "error",
          });
          // location.reload();
        }
      }
    },
    async getEventsAdmin() {
      const response = await this.$http.get(
        "https://127.0.0.1:8000/api/schedulers",
        {
          headers: {
            Authorization: "Bearer" + " " + token,
          },
        },
      );
      let author = response.data.filter((item) => item.author != null);
      this.eventAdmin = author;
    },
    async getEvents() {
      const response = await this.$http.get(
        "https://127.0.0.1:8000/api/scheduler",
        {
          headers: {
            Authorization: "Bearer" + " " + token,
          },
        },
      );
      this.events = response.data;
      this.events.push(...this.eventAdmin);

      console.log(this.events);
    },
    editItem(item) {
      this.editedIndex = this.events.indexOf(item);
      this.event = Object.assign({}, item);
      this.dialogEdit = true;
    },
    async editConfirm(id) {
      try {
        await this.$http.put(
          "https://127.0.0.1:8000/api/update-scheduler/" + `${id}`,
          this.event,
          {
            headers: {
              Authorization: "Bearer" + " " + token,
            },
          },
        );

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your appointment has been deleted",
          type: "success",
        });
        location.reload();
      } catch (error) {
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
        });
      }
      this.dialogEdit = false;
    },
    deleteItem(item) {
      this.editedIndex = this.events.indexOf(item);
      this.event = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async deleteEvents(id) {
      try {
        await this.$http.delete(
          "https://127.0.0.1:8000/api/remove-scheduler/" + `${id}`,
          {
            headers: {
              Authorization: "Bearer" + " " + token,
            },
          },
        );

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your event has been deleted",
          type: "success",
        });
        location.reload();
      } catch (error) {
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
        });
      }
      this.selectedOpen = false;
      // location.reload();
    },
    setDialogDate({ date }) {
      this.dialogDate = true;
      this.focus = date;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },

    // editEvent(ev) {
    //   this.currentlyEditing = ev.id;
    // },

    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };
      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    },
  },
};
</script>
<style scoped>
@media screen and (max-width: 767px) {
  .notDisplayXs {
    display: none;
  }
}
</style>
