<template>
  <v-menu left offset-y transition="slide-y-transition" v-bind="$attrs">
    <template #activator="{ on }">
      <v-btn
        icon
        :large="floating"
        :absolute="floating"
        :right="floating"
        v-on="on"
      >
        <lang-flag :iso="currentLangCode" :squared="false" class="lang-flag" />
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item
        v-for="language in languages"
        :key="language"
        ripple
        @click="setLang(language)"
        :class="{ 'primary--text': language === currentLangCode }"
      >
        <v-list-item-action>
          <lang-flag :iso="language" :squared="false" :title="language" />
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            <span v-text="language" />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";
import LangFlag from "vue-lang-code-flags";
// import constants from "@/constants";

export default Vue.extend({
  name: "locale-changer",
  props: {
    floating: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    languages: ["en", "fr", "ro"],
  }),
  components: {
    "lang-flag": LangFlag,
  },
  computed: {
    currentLangCode() {
      return this.$i18n.locale;
    },
  },
  methods: {
    setLang(locale) {
      this.$i18n.locale = locale;
    },
  },
});
</script>
