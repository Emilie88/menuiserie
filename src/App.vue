<template>
<div id="app">
  <v-app id="inspire">
    <Toolbar/>
    <v-content>
     <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</div>
</template>

<script>

import Toolbar from '@/components/Toolbar.vue'
import Footer from '@/components/Footer.vue'
  export default {
    components:{
      Toolbar,
      Footer
    }
    
  }
</script>