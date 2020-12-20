<template>
  <div id="contact">
    <v-app>
      <v-content>
        <v-sheet id="contact" color="#333333" dark tag="section" tile>
          <div class="py-12"></div>

          <v-container>
            <h2
              class="display-2 font-weight-bold mb-3 text-uppercase text-center"
            >
              CONTACTEZ-MOI
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-theme-provider light>
              <v-row>
                <v-col cols="12">
                  <v-text-field  v-model="body.name" required flat label="Nom" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model="body.mail" required flat label="Email*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model="body.subject" required flat label="Sujet*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea v-model="body.message" required flat label="Message*" solo></v-textarea>
                </v-col>

                <v-col class="mx-auto" cols="auto">
                  <v-btn color="accent" x-large @click="onClick()">
                    Envoyer
                  </v-btn>
                </v-col>
            
              </v-row>
            </v-theme-provider>
          </v-container>

          <div class="py-12"></div>
        </v-sheet>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      body:{
        name:"",
        mail:"",
        subject:"",
        message:"",
      },
      errors: []
    }
  },
  methods:{
    onClick(){
      axios.post("http://127.0.0.1:8000/api/contacts",this.body) 
      .then(response => {
      this.body.name = response.data.name,
      this.body.mail = response.data.mail,
      this.body.subject = response.data.subject,
      this.body.message = response.data.message
      })
    .catch(e => {
      this.errors.push(e)
    })
    // Recharge la page actuelle
     document.location.reload();  
    }
  }
}
</script>
