<template>
  <div id="app">
    <b-container fluid class="col-md-12 p-0">
      <parallax>
        <img src='https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg'>
      </parallax>

       <parallax>
        <img src='https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg'>
      </parallax>

    </b-container>
  </div>
</template>
<script>
import Parallax from 'vue-parallaxy';
export default {
  name: 'Home',
  components: {
    Parallax
  }
}
</script>
