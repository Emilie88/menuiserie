<template>
  <div id="login">
    <v-app>
      <v-main>
        <div class="py-12"></div>
        <v-container>
          <v-row>
            <br />
          </v-row>
          <v-card color="#333333">
            <v-tabs
              v-model="tab"
              show-arrows
              color="lime darken-3"
              icons-and-text
              grow
            >
              <v-tabs-slider color="lime darken-3"></v-tabs-slider>
              <v-tab>
                <v-icon large>mdi-account</v-icon>
                <div class="caption py-1">Login</div>
              </v-tab>
              <v-tab-item>
                <div id="login">
                  <!-- LoginForm -->
                  <LoginForm />
                </div>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-container>
        <div class="py-12"></div>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "Register",
};
</script>
