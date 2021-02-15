<template>
  <div class="base-label">
    <label>{{text}}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseLabel',

  props: {
    text: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-label{
  display: flex;
}
</style>
