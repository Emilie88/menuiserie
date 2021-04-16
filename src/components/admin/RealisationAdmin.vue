<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-sheet>
          <v-card class="px-4">
            <v-card-text>
              <validation-observer v-slot="{ handleSubmit }">
                <v-form
                  ref="form"
                  lazy-validation
                  @submit.prevent="handleSubmit(addRealisation)"
                >
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="title"
                        color="lime darken-3"
                        label="Title"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="description"
                        color="lime darken-3"
                        label="Description"
                      />
                    </v-col>
                    <v-col cols="12">
                      <!-- <input
                        type="file"
                        name="imageFile"
                        @change="onFileSelected"
                      /> -->
                      <v-file-input
                        prepend-icon="mdi-camera"
                        color="lime darken-3"
                        multiple
                        label="Image"
                        @change="onFileSelected"
                      ></v-file-input>
                    </v-col>

                    <v-spacer></v-spacer>
                    <v-col cols="12" class="d-flex justify-center">
                      <v-btn
                        x-large
                        outlined
                        color="lime darken-3"
                        type="submit"
                        >Add</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </validation-observer>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
      realisation: [],
      imageFile: null,
      title: null,
      description: null,
      show1: false,
    };
  },
  // created() {
  //   this.getRealisation();
  // },
  methods: {
    onFileSelected(event) {
      let image = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.imageFile = e.target.result;
      };
    },
    // async getRealisation() {
    //   const response = await this.$http.get(
    //     "https://127.0.0.1:8000/api/realisation",
    //     {
    //       headers: {
    //         Authorization: token,
    //       },
    //     }
    //   );
    //   this.realisation = response.data;
    //   console.log(response.data);
    // },
    async addRealisation() {
      try {
        await this.$http.post(
          "https://127.0.0.1:8000/api/add-realisation",
          this.imageFile,
          this.title,
          this.description,
          {
            headers: {
              Authorization: this.token,
            },
          },
        );
        console.log(this.imageFile);

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your realisation has been added",
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
  },
};
</script>
