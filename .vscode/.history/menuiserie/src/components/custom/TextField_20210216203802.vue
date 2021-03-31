<template>
  <validation-provider
    #default="{ errors }"
    :name="`&quot;${$attrs.label}&quot;`"
    :rules="merge({}, basicRules, rules)"
    slim
    :debounce="800"
  >
    <v-text-field
      v-model="innerValue"
      :label="`${$attrs.label}${required ? ' *' : ''}`"
      :error-messages="errors.length ? errors : customErrorMessage"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </validation-provider>
</template>

<script>
import merge from "lodash/merge";

export default {
  props: {
    rules: {
      type: Object,
      default: () => {},
    },

    value: {
      type: [String, Number],
      default: null,
    },

    required: {
      type: Boolean,
      default: false,
    },

    customErrorMessage: {
      type: String,
      default: null,
    },
  },

  computed: {
    innerValue: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit("input", value);
      },
    },

    basicRules() {
      return {
        email: "email" === this.$attrs.type,
        required: this.required,
      };
    },
  },

  methods: {
    // lodash deep merge
    merge,
  },
};
</script>
