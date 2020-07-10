<template>
       <v-app-bar
      app
      color="white"
    >
    
       <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="60"
      >
        <v-img
          contain
          max-height="70%"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        ></v-img>
      </v-avatar>  

       <v-toolbar-title>
                <router-link class="nav-item" to="/">MySite</router-link>
            </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-toolbar-items >
          <v-list-item  v-for="link in links" :key="link.text" router :to="link.route">
        
            <v-list-item-title>{{link.text}}</v-list-item-title>
            <v-list-item-action>
              <v-icon >{{link.icon}}</v-icon>
            </v-list-item-action>
        </v-list-item>
       
     
       </v-toolbar-items>
    </v-app-bar>  
   
   
 

</template>
<script>
export default {
    data(){
        return{
             links: [
          {text:'Accueil',route: '/'},
          { text:'A propos de moi',route: '/abouts'},
          { text:'Realisations',route: '/realisations'},
          { text:'Devis',route: '/devis'},
          { icon:'mdi-email',route: '/contact'} 
      ]
        }
    }
}
    

</script>