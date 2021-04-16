<template>
  <v-sheet>
    <v-card class="pa-5">
      <v-data-table
        :headers="headers"
        :items="comments"
        :items-per-page="5"
        disable-sort
        color="#333333"
      >
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-card-actions class="ma-0 pa-0">
                      <v-card-title class="pa-0">
                        <v-icon small class="mr-2" color="lime darken-3">
                          mdi-pencil </v-icon
                        >{{ $t("edit") }}</v-card-title
                      >

                      <v-spacer></v-spacer>
                      <v-btn
                        color="lime darken-3"
                        icon
                        @click.stop="dialog = false"
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                  <v-col cols="12" md="6" xs="12">
                    <v-text-field
                      v-model="comment.rating"
                      color="lime darken-3"
                      :label="$t('rating')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" xs="12">
                    <v-text-field
                      v-model="comment.author"
                      color="lime darken-3"
                      :label="$t('name')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="comment.title"
                      color="lime darken-3"
                      :label="$t('title')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="comment.content"
                      color="lime darken-3"
                      :label="$t('content')"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="lime darken-3" text @click.stop="dialog = false">
                  {{ $t("close") }}
                </v-btn>
                <v-btn
                  color="lime darken-3"
                  text
                  @click="editItemConfirm(comment.id)"
                >
                  {{ $t("edit") }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="600px">
            <v-card>
              <v-card-title> {{ $t("confirmDelete") }}</v-card-title>
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
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-sheet>
</template>
<script>
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
      defaultItem: {
        rating: "",
        author: "",
        title: "",
        content: "",
      },
    };
  },

  created() {
    this.getComments();
  },
  methods: {
    async getComments() {
      const response = await this.$http.get(
        "https://127.0.0.1:8000/api/comment/",
        {
          headers: {
            Authorization: "Bearer" + " " + this.token,
          },
        },
      );
      this.comments = response.data;
    },

    editItem(item) {
      this.editedIndex = this.comments.indexOf(item);
      this.comment = Object.assign({}, item);
      this.dialog = true;
    },
    async editItemConfirm(id) {
      try {
        await this.$http.put(
          "https://127.0.0.1:8000/api/update-comment/" + `${id}`,
          this.comment,
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
      this.dialog = false;
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
  },
};
</script>
