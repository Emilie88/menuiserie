<template>
  <v-card class="pa-5">
    <v-data-table
      :headers="headers"
      :items="comments"
      disable-sort
      color="#333333"
    >
      <template v-slot:top>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-card-title class="pa-0" color="lime darken-3">
                      <v-icon small class="mr-2" color="lime darken-3">
                        mdi-pencil </v-icon
                      >Edit</v-card-title
                    >
                  </v-col>
                  <v-col cols="12" md="6" xs="12">
                    <v-text-field
                      color="lime darken-3"
                      v-model="editedItem.rating"
                      label="Stars"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" xs="12">
                    <v-text-field
                      color="lime darken-3"
                      v-model="editedItem.author"
                      label="Author"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      color="lime darken-3"
                      v-model="editedItem.title"
                      label="Title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      color="lime darken-3"
                      v-model="editedItem.content"
                      label="Content"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="lime darken-3" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="lime darken-3" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="lime darken-3" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="lime darken-3" text @click="deleteItemConfirm"
                >OK</v-btn
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
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <!-- <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template> -->
    </v-data-table>
  </v-card>
</template>
<script>
const token = localStorage.getItem("token");

export default {
  name: "UsersComment",
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      comments: [],
      headers: [
        {
          title: "userId",
          align: "start",
          value: "userId",
        },
        { text: "Rating", value: "rating" },
        { text: "Author", value: "author" },
        { text: "Title", value: "title" },
        { text: "Content", value: "content" },
        { text: "Actions", value: "actions" },
      ],
      editedIndex: -1,
      editedItem: {
        rating: "",
        author: "",
        title: "",
        content: "",
      },
      defaultItem: {
        rating: "",
        author: "",
        title: "",
        content: "",
      },
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
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
            Authorization: "Bearer" + " " + token,
          },
        }
      );
      this.comments = response.data;
      console.log(response);
    },

    editItem(item) {
      this.editedIndex = this.comments.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.comments.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.comments.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.comments[this.editedIndex], this.editedItem);
      } else {
        this.comments.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
