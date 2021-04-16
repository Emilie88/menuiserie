<template>
  <v-progress-linear :active="loading" indeterminate class="loading ma-0" />
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
}
</style>
