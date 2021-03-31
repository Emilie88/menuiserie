<template>
  <v-row>
    <v-col>
      <div>{{ events }}</div>
      <v-sheet>
        <v-toolbar flat color="lime darken-3">
          <v-btn outlined class="mx-3" @click="setToday">
            Today
          </v-btn>
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
              <v-btn outlined v-on="on">
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
      </v-sheet>

      <v-dialog v-model="dialogDate" max-width="500">
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
                <custom-text-field
                  color="lime darken-3"
                  v-model="body.description"
                  type="text"
                  label="Description"
                />
                <input
                  type="datetime-local"
                  name="endDate"
                  v-model="body.endDate"
                />
                <!-- <custom-text-field
                  v-model="body.endDate"
                  color="lime darken-3"
                  type="datetime"
                  label="Date de fin"
                /> -->
                <!-- <custom-text-field
                  v-model="body.startDate"
                  color="lime darken-3"
                  type="datetime"
                  label="Date de debut"
                /> -->
                <input
                  type="datetime-local"
                  name="startDate"
                  v-model="body.startDate"
                />
                <custom-text-field
                  color="lime darken-3"
                  v-model="body.text"
                  type="text"
                  label="Titre"
                />
                <v-autocomplete
                  v-model="body.color"
                  :items="colors"
                  color="lime darken-3"
                  dense
                  label="Couleur"
                ></v-autocomplete>

                <v-btn type="submit" color="lime darken-3" class="mr-4">
                  create event
                </v-btn>
              </v-form>
            </validation-observer>
          </v-container>
        </v-card>
      </v-dialog>

      <v-sheet height="500">
        <v-calendar> </v-calendar>
        <!-- <v-calendar
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
          @click:date="setDialogDate"
          @change="updateRange"
        ></v-calendar> -->
        <!-- <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        > -->
        <!-- <v-card color="grey lighten-4" :width="350" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar> -->

        <!-- <v-card-text>
              <form v-if="currentlyEditing !== selectedEvent.id">
                {{ selectedEvent.details }}
              </form>
              <form v-else>
                <textarea-autosize
                  v-model="selectedEvent.details"
                  type="text"
                  style="width: 100%"
                  :min-height="100"
                  placeholder="add note"
                >
                </textarea-autosize>
              </form>
            </v-card-text> -->

        <!-- <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                close
              </v-btn>
              <v-btn v-if="currentlyEditing !== selectedEvent.id" text>
                edit
              </v-btn>
              <v-btn text v-else type="submit">
                Save -->
        <!-- </v-btn>
            </v-card-actions>
          </v-card> -->
        <!-- </v-menu> -->
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import moment from "moment";
export default {
  name: "AgendaAdmin",
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    body: {
      description: null,
      endDate: moment().format("YYYY-MM-DD HH:mm"),
      startDate: moment().format("YYYY-MM-DD HH:mm"),
      text: null,
      color: null,
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
    selectedElement: null,
    selectedOpen: false,
    events: [],
    dialog: false,
    dialogDate: false,
  }),
  mounted() {
    this.getEvents();
    console.log(this.getEventColor());
  },

  methods: {
    async getEvents() {
      const response = await this.$http.get(
        "https://127.0.0.1:8000/api/scheduler/"
      );
      console.log(response);
      this.events = response.data;
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
    async addEvent() {
      try {
        const token = localStorage.getItem("token");
        await this.$http.post(
          "https://127.0.0.1:8000/api/add-scheduler",
          this.body,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        this.dialogDate = false;

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your event has been added",
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
    editEvent(ev) {
      this.currentlyEditing = ev.id;
    },

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
    updateRange({ startDate, endDate }) {
      this.startDate = startDate;
      this.endDate = endDate;
    },
  },
};
</script>
