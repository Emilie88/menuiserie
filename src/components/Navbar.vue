<template>
<div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list>
          <v-list-item  v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
</div>

    
</template>
<script>
export default {
     props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      links: [
          {icon : 'mdi-view-dashboard', text:'Accueil',route: '/'},
          {icon : 'fas fa-landmark', text:'Realisations',route: '/realisations'}
      ]
    }),
    created () {
      this.$vuetify.theme.dark = true
    }
}
</script>