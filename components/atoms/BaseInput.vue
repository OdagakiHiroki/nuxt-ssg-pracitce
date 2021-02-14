<template>
  <input
    class="base-input"
    :type="type"
    :value="value"
    :disabled="disabled"
    @input="handleChangeValue"
  >
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleChangeValue(e) {
      this.$emit('changeValue', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input{
  background-color: #fefefe;
  border: 1px solid #808080;
  border-radius: 8px;
  &:disabled{
    background-color: #eeeeee;
  }
}
</style>
