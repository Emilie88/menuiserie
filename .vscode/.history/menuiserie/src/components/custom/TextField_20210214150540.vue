<template>
  <validation-provider
    v-slot="{ errors }"
    :name="`&quot;${$attrs.label}&quot;`"
    :rules="rules"
    slim
    :debounce="800"
  >
    <v-text-field
      v-model="innerValue"
      flat
      :label="`${$attrs.label}${required ? ' *' : ''}`"
      :error-messages="errors.length ? errors : customErrorMessage"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </validation-provider>
</template>

<script>
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

    disabled: {
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
  },
};
</script>
