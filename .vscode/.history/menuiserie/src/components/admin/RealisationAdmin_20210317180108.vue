<template>
  <v-app>
    <v-row class="fill-height">
      <v-col>
        <v-sheet>
          <v-card class="px-4">
            <v-card-text>
              <validation-observer v-slot="{ handleSubmit }">
                <v-form
                  ref="form"
                  @submit.prevent="handleSubmit(addRealisation)"
                  lazy-validation
                >
                  <v-row>
                    <v-col cols="12">
                      <div v-for="(item, index) in realisation" :key="index">
                        Image <v-img :src="item.imageName"></v-img>
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        color="lime darken-3"
                        v-model="title"
                        label="Title"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        color="lime darken-3"
                        v-model="description"
                        label="Description"
                      />
                    </v-col>
                    <v-col cols="12">
                      <input
                        type="file"
                        name="imageFile"
                        @change="onFileSelected"
                      />
                      <!-- <v-file-input
                        @change="onFileSelected"
                        prepend-icon="mdi-camera"
                        color="lime darken-3"
                        label="Image"
                      ></v-file-input> -->
                    </v-col>

                    <v-spacer></v-spacer>
                    <v-col
                      class="d-flex ml-auto mr-auto"
                      cols="12"
                      sm="3"
                      xs="12"
                    >
                      <v-btn
                        x-large
                        block
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
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      realisation: [],
      imageFile: null,
      title: null,
      description: null,
      show1: false,
    };
  },
  created() {
    this.getRealisation();
  },
  methods: {
    onFileSelected(event) {
      let image = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.imageFile = e.target.result;
      };
    },
    getRealisation() {
      const response = this.$http.get("https://127.0.0.1:8000/api/realisation");
      this.realisation = response.data;
      console.log(response.data);
    },
    async addRealisation() {
      try {
        const token = localStorage.getItem("token");

        await this.$http.post(
          "https://127.0.0.1:8000/api/add-realisation",
          this.imageFile,
          this.title,
          this.description,
          {
            headers: {
              Authorization: token,
            },
          }
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
