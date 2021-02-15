<template>
  <button
    class="base-button"
    @click="handleClickButton"
  >
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    text: {
      type: String,
      defualt: 'ボタン',
    },
  },

  methods: {
    handleClickButton() {
      this.$emit('clickButton');
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button{
  background-color: #eaffea;
  border: 1px solid #a0bea0;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
}
</style>
