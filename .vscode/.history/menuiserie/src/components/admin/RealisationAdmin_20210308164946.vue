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
                  @submit.prevent="handleSubmit(submitRegister)"
                  lazy-validation
                >
                  <v-row>
                    <v-col cols="12">
                      <custom-text-field
                        color="lime darken-3"
                        name="title"
                        v-model="title"
                        label="Title"
                      />
                    </v-col>
                    <v-col cols="12">
                      <custom-text-field
                        color="lime darken-3"
                        name="description"
                        v-model="description"
                        label="Description"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        v-model="image"
                        accept="image/*"
                        prepend-icon="mdi-camera"
                        color="lime darken-3"
                        name="image"
                        label="Image"
                      ></v-file-input>
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
      image: "",
      title: "",
      description: "",
      show1: false,
    };
  },
};
</script>
