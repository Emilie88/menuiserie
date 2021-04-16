<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md9>
        <v-sheet>
          <v-card class="pa-5">
            <v-data-table
              :headers="headers"
              :items="messages"
              :items-per-page="5"
              disable-sort
              color="#333333"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              </template>
            </v-data-table>
          </v-card>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Messages",
  data() {
    return {
      token: localStorage.getItem("token"),
      dialogDelete: false,
      editedIndex: -1,
      messages: [],
      headers: [
        {
          title: "userId",
          align: "start",
          value: "userId",
        },
        { text: this.$t("name"), value: "name" },
        { text: this.$t("mail"), value: "mail" },
        { text: this.$t("subject"), value: "subject" },
        { text: this.$t("message"), value: "message" },
      ],
      message: {},
    };
  },

  created() {
    this.getMessages();
  },
  methods: {
    async getMessages() {
      const response = await this.$http.get(
        "https://127.0.0.1:8000/api/contacts/",
        {
          headers: {
            Authorization: "Bearer" + " " + this.token,
          },
        },
      );
      this.messages = response.data;
    },

    // async deleteItemConfirm(id) {
    //   try {
    //     await this.$http.delete(
    //       "https://127.0.0.1:8000/api/remove-comment/" + `${id}`,
    //       {
    //         headers: {
    //           Authorization: "Bearer" + " " + this.token,
    //         },
    //       },
    //     );

    //     // Success snackbar
    //     this.$store.dispatch("show", {
    //       text: "Your comment has been deleted",
    //       type: "success",
    //     });
    //     location.reload();
    //   } catch (error) {
    //     // Error snackbar
    //     this.$store.dispatch("show", {
    //       text: error.message,
    //       type: "error",
    //     });
    //   }
    //   this.dialogDelete = false;
    //   // location.reload();
    // },

    deleteItem(item) {
      console.log(item);
      this.editedIndex = this.messages.indexOf(item);
      this.message = Object.assign({}, item);
      this.dialogDelete = true;
    },
  },
};
</script>
