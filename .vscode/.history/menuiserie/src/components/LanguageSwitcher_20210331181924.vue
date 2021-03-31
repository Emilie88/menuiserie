<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in languages" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
  <!-- <v-menu left offset-y transition="slide-y-transition" v-bind="$attrs">
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
  </v-menu> -->
</template>

<script>
// import LangFlag from "vue-lang-code-flags";

export default {
  name: "LocaleChanger",
  components: {
    // "lang-flag": LangFlag,
  },
  props: {
    floating: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      languages: ["en", "fr", "ro"],
    };
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
};
</script>
