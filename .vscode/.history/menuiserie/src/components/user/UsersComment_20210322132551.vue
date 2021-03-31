<template>
  <div>
    <v-data-table :headers="headers" :items="comments">
      <!-- <template v-slot:top>
        <v-toolbar flat>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text>Cancel</v-btn>
                <v-btn color="blue darken-1" text>OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template> -->
      <!-- <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template> -->
    </v-data-table>
  </div>
</template>
<script>
// const token = localStorage.getItem("token");

export default {
  name: "UsersComment",
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      comments: [],
      headers: [
        {
          title: "id",
          align: "start",

          value: "id",
        },
        { text: "Rating", value: "rating" },
        { text: "Author", value: "author" },
        { text: "Title", value: "title" },
        { text: "Content", value: "content" },
      ],
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
        "https://127.0.0.1:8000/api/comments/"
      );
      this.comments = response.data;
    },
  },
};
</script>
