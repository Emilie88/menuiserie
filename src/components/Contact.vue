<template>
  <div id="contact">
    <v-app>
      <v-main>
        <v-sheet id="contact" color="#333333" dark tag="section" tile>
          <div class="py-12"></div>

          <v-container>
            <h2
              class="display-2 font-weight-bold mb-3 text-uppercase text-center"
            >
              CONTACT
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-theme-provider light>
              <v-row>

                 <v-col cols="6">
                  Me joindre
                   <v-col cols="12">
                     <div>
                      <v-icon
                        color="white"
                      >
                        mdi-email
                      </v-icon>
                        <span> mail@gmail.com</span>
                     </div>
                   </v-col>
                    <v-col cols="12">
                     <div>
                      <v-icon
                        color="white"
                      >
                        mdi-phone
                      </v-icon>
                     <span> mail@gmail.com</span>
                     </div>
                   </v-col>
                   <v-col cols="12">
                     <div to="https://www.google.fr/maps/place/Le+Raincy/@48.893841,2.5097306,14.25z/data=!4m5!3m4!1s0x47e613b17ac81227:0x42f162a72fb2522e!8m2!3d48.897386!4d2.5231119?hl=fr">
                      <v-img
                      src=".././assets/Raincy2.jpg"></v-img>
                     </div>
                    </v-col>
                 </v-col>
                <v-col cols="6">
                  <div>Laissez-moi un message</div>
                  <br>
                   <v-snackbar
                    v-model="snackbar"
                    absolute
                    top
                    right
                    color="success"
                  >
                    <span>Message envoyé!</span>
                    <v-icon dark>
                      mdi-checkbox-marked-circle
                    </v-icon>
                  </v-snackbar>
                  
                        
                    <v-text-field  v-model="body.name" ref="name" required flat label="Nom" solo></v-text-field>
                
                    <v-text-field v-model="body.mail" ref="mail" required  :rules="rules.mail" flat label="Email*" solo></v-text-field>
                  
                    <v-text-field v-model="body.subject" ref="subject" required :rules="rules.subject"  flat label="Sujet*" solo></v-text-field>
                  
                    <v-textarea v-model="body.message" ref="message" required :rules="rules.message" flat label="Message*" solo></v-textarea>
                
                  <div class="text-center" cols="auto">
                    <v-btn color="accent" x-large @click="onClick()">
                      Envoyer
                    </v-btn>
                  </div>
                </v-col>
            
              </v-row>
            </v-theme-provider>
          </v-container>

          <div class="py-12"></div>
        </v-sheet>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    
    return{
      body: {
        name:"",
        mail:"",
        subject:"",
        message:"",
      },
       rules: { 
         mail: [val => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(val) || 'Invalid e-mail.'
          }],
          subject: [val => (val || '').length > 0 || 'This field is required'],
          message: [val => (val || '').length > 0 || 'This field is required'],
        },
         snackbar: false,
      errors: []
    }
  },
  
  methods:{
     resetForm(e) {
            e.preventDefault();
            this.body.name ="",
            this.body.mail = "",
            this.body.subject ="",
            this.body.message = ""
           
        },
     onClick(e){
         axios.post("http://127.0.0.1:8000/api/contacts",this.body) 
     .then(response => {
      this.body.name = response.data.name,
      this.body.mail = response.data.mail,
      this.body.subject = response.data.subject,
      this.body.message = response.data.message
      }
     )
    .catch(e => {
      this.errors.push(e);
    });
  
    //  Object.keys(this.body).forEach(f => {
    //       this.$refs[f].reset();
    //     })
    this.snackbar = true;
     e.preventDefault();
     this.body.name ="";
    this.body.mail = "";
    this.body.subject ="";
    this.body.message = "";
   
   
    }
  }
}
</script>
