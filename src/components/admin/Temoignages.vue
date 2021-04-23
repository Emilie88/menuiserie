<template>
  <v-sheet>
    <v-card class="pa-5">
      <v-data-table
        :headers="headers"
        :items="comments"
        :items-per-page="10"
        disable-sort
        color="#333333"
      >
        <template v-slot:top>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title color="grey lighten-4">
                <v-icon class="pr-2">mdi-delete</v-icon>
                {{ $t("deleteEvent") }} - {{ comment.title }}?
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="lime darken-3"
                  text
                  @click.stop="dialogDelete = false"
                  >{{ $t("close") }}</v-btn
                >
                <v-btn
                  color="lime darken-3"
                  text
                  @click="deleteItemConfirm(comment.id)"
                  >{{ $t("confirm") }}</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon class="pa-2" small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-sheet>
</template>
<script>
import moment from "moment";
export default {
  name: "UsersComment",
  data() {
    return {
      token: localStorage.getItem("token"),
      dialog: false,
      dialogDelete: false,
      comments: [],
      headers: [
        {
          title: "userId",
          align: "start",
          value: "userId",
        },
        { text: this.$t("rating"), value: "rating" },
        { text: this.$t("author"), value: "author" },
        { text: this.$t("title"), value: "title" },
        { text: this.$t("content"), value: "content" },

        { text: this.$t("actions"), value: "actions" },
      ],
      editedIndex: -1,
      comment: {},
    };
  },

  created() {
    this.getComments();
  },
  methods: {
    async getComments() {
      const response = await this.$http.get(
        "https://127.0.0.1:8000/api/comments/",
      );
      this.comments = response.data;
    },

    async deleteItemConfirm(id) {
      try {
        await this.$http.delete(
          "https://127.0.0.1:8000/api/remove-comment/" + `${id}`,
          {
            headers: {
              Authorization: "Bearer" + " " + this.token,
            },
          },
        );

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your comment has been deleted",
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
      this.dialogDelete = false;
      // location.reload();
    },

    deleteItem(item) {
      console.log(item);
      this.editedIndex = this.comments.indexOf(item);
      this.comment = Object.assign({}, item);
      this.dialogDelete = true;
    },

    formatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY");
      }
    },
  },
};
</script>
