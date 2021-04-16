/* eslint-disable vue/attributes-order */
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md9>
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
                    v-model="body.author"
                    color="lime darken-3"
                    type="text"
                    label="Name"
                    required
                  />
                  <custom-text-field
                    v-model="body.name"
                    color="lime darken-3"
                    type="text"
                    :label="$t('event')"
                    required
                  />
                  <custom-text-field
                    v-model="body.details"
                    color="lime darken-3"
                    type="text"
                    label="Details"
                    required
                  />
                  <custom-text-field
                    v-model="body.email"
                    color="lime darken-3"
                    type="email"
                    label="Email"
                    required
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

                  <v-autocomplete
                    v-model="body.color"
                    :items="colors"
                    color="lime darken-3"
                    dense
                    :label="$t('color')"
                    required
                  ></v-autocomplete>

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
                <v-btn icon @click="editItem(selectedEvent)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title>
                  <span v-text="selectedEvent.name" />
                  <span v-text="selectedEvent.author" />
                </v-toolbar-title>
                <div class="flex-grow-1"></div>

                <v-btn icon @click="deleteItem(selectedEvent)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-toolbar>
              <v-dialog v-model="dialogDelete" max-width="600px">
                <v-card>
                  <v-card-title>
                    Vous etez sur que vous voulez supprimmer votre
                    rendez-vous?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="lime darken-3"
                      text
                      @click.stop="dialogDelete = false"
                      >Annuler</v-btn
                    >
                    <v-btn
                      color="lime darken-3"
                      text
                      @click="deleteEvents(event.id)"
                      >Confirmer</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogEdit" persistent max-width="500px">
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
                          v-model="event.author"
                          color="lime darken-3"
                          label="Author"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6" xs="12">
                        <v-text-field
                          v-model="event.email"
                          color="lime darken-3"
                          label="Email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6" xs="12">
                        <v-text-field
                          v-model="event.details"
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

                      <v-autocomplete
                        v-model="event.color"
                        :items="colors"
                        color="lime darken-3"
                        dense
                        :label="$t('color')"
                      ></v-autocomplete>
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
export default {
  name: "AgendaClient",
  data: () => ({
    token: localStorage.getItem("token"),
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

    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    editedIndex: -1,
    // currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    event: {},
    dialog: false,
    dialogDate: false,
    eventDouble: null,
    body: {
      author: null,
      email: null,
      name: null,
      start: null,
      end: null,
      color: null,
      details: null,
    },
  }),

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
                Authorization: "Bearer " + this.token,
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
    async getEvents() {
      const response = await this.$http.get(
        "https://127.0.0.1:8000/api/schedulers",
        {
          headers: {
            Authorization: "Bearer" + " " + this.token,
          },
        },
      );

      this.events = response.data;
    },
    editItem(item) {
      this.editedIndex = this.events.indexOf(item);
      this.event = Object.assign({}, item);
      this.dialogEdit = true;
      console.log(this.event);
    },
    async editConfirm(id) {
      try {
        await this.$http.put(
          "https://127.0.0.1:8000/api/update-scheduler/" + `${id}`,
          this.event,
          {
            headers: {
              Authorization: "Bearer" + " " + this.token,
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
              Authorization: "Bearer" + " " + this.token,
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
