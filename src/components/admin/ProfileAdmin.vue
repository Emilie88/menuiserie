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
                  lazy-validation
                  @submit.prevent="handleSubmit(submitRegister)"
                >
                  <v-row>
                    <v-col cols="12">
                      <custom-text-field
                        v-model="firstName"
                        color="lime darken-3"
                        name="firstName"
                        label="First name"
                        type="text"
                      />
                    </v-col>
                    <v-col cols="12">
                      <custom-text-field
                        v-model="lastName"
                        color="lime darken-3"
                        name="lastName"
                        label="Last Name"
                        type="text"
                      />
                    </v-col>
                    <v-col cols="12">
                      <custom-text-field
                        v-model="email"
                        color="lime darken-3"
                        name="email"
                        label="E-mail"
                        type="email"
                      />
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="password"
                        color="lime darken-3"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        name="password"
                        label="Password *"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
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
                        >Update</v-btn
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
      email: localStorage.getItem("email"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      password: "",
      show1: false,
    };
  },
};
</script>
