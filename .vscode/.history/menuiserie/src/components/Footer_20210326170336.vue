<template>
  <div id="footer">
    <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} — Made with 💛 by Emilia Boghiu
      </div>
      <br />
      <br />
      <v-btn
        icon
        @click="
          window.location.href =
            'https://www.facebook.com/ArtMenuiserie-113058580082944'
        "
      >
        <v-icon color="#bdbdbd">mdi-facebook</v-icon>
      </v-btn>
    </v-footer>
  </div>
</template>
