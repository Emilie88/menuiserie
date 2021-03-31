<template>
  <validation-provider
    v-slot="{ errors }"
    :name="`&quot;${$attrs.label}&quot;`"
    :rules="rules"
    slim
    :debounce="800"
  >
    <v-textarea
      flat
      v-model="innerValue"
      :label="`${$attrs.label}${required ? ' *' : ''}`"
      :error-messages="errors"
      v-bind="$attrs"
    />
  </validation-provider>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },

    required: {
      type: Boolean,
      default: false,
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

    rules() {
      return {
        required: this.required,
        max: this.$attrs.maxlength ? this.$attrs.maxlength : false,
      };
    },
  },
};
</script>
