<template>
<div>
    <section
    id="features"
    class="grey lighten-3"
    >
        <div class="py-12"></div>

        <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase">Réalisations</h2>

            <v-responsive
            class="mx-auto mb-12"
            width="56"
            >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
            </v-responsive>

            <v-row> 
                <v-col
                v-for="card in cards"
                :key="card.title"
                :cols="card.flex"
                >
                    <v-card>
                        <v-img
                        :src="card.src"
                        class="mb-4"
                            height="275"
                            max-width="100%"
                            @click.stop="dialog = true"
                        >
                        <v-card-title  v-text="card.title"></v-card-title>
                        </v-img>
                        <v-dialog
                        v-model="dialog"
                        max-width="1000"
                        >
                            <v-carousel hide-delimiters>
                                <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                                ></v-carousel-item>
                            </v-carousel>
                        </v-dialog>
                        
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <div class="py-12"></div>
    </section>
  <!-- <v-card
    class="mx-auto"
    max-width="500"
  >
    
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card> -->
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4},
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4},
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      ],
      dialog: false,
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }),
  }
</script>