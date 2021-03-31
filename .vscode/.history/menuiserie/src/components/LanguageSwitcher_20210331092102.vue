<template>
  <!-- <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in languages" :key="`Lang${i}`" :value="lang">{{
        lang
      }}</option>
    </select>
  </div> -->
  <v-menu left offset-y transition="slide-y-transition" v-bind="$attrs">
    <template #activator="{ on }">
      <v-btn
        icon
        :large="floating"
        :absolute="floating"
        :right="floating"
        v-on="on"
      >
        <lang-flag :iso="$i18n.locale" :squared="false" class="lang-flag" />
      </v-btn>
    </template>

    <v-list dense v-model="$i18n.locale">
      <v-list-item
        v-for="(language, i) in languages"
        :value="language"
        :key="`Language${i}`"
        ripple
        @click="setLang(language)"
        :class="{ 'primary--text': language === $i18n.locale }"
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
