<template>
  <div class="test">
    <button @click="triggerTestFunc('test')">
      自作プラグイン発火テスト
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    triggerTestFunc (text) {
      this.$testFunc(text)
    }
  }
}
</script>

<style lang="scss">

</style>
