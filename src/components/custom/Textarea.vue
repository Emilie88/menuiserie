<template>
  <validation-provider
    #default="{ errors }"
    :name="`&quot;${$attrs.label}&quot;`"
    :rules="disabled ? null : rules"
    slim
    :debounce="500"
  >
    <v-textarea
      v-model="innerValue"
      :label="`${$attrs.label}${required ? ' *' : ''}`"
      :counter="$attrs.maxlength"
      :disabled="disabled"
      :error-messages="errors"
      v-bind="$attrs"
      v-on="$listeners"
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

    disabled: {
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
