<template>
<div>
    <section
    id="features"
    class="grey lighten-3"
    >
        <div class="py-12"></div>

        <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase">{{$t("achievements")}}</h2>

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
                        :src="card.img"
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
                            <v-carousel  v-if="card.title = 'Parquet'" hide-delimiters>
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
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Parquet', img: require('../assets/img/parquet/balcon.jpg'), flex: 4},
        { title: 'Cuisine',  img: require('../assets/img/cuisine/cuisineAlexPD.jpg'), flex: 4 },
        { title: 'Escaliers',  img: require('../assets/img/stairs/colimacon.jpg'), flex: 4 },
      ],
      dialog: false,
      items: [
          {
            src: require('../assets/img/parquet/balcon.jpg'),
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