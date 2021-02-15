<template>
  <div class='contents-result'>
    <BaseLabel text="入力した名前は: ">{{name}}</BaseLabel>
    <BaseLabel text="入力した生年月日は: ">{{birthDay}}</BaseLabel>
    <BaseLabel text="入力した住所は: ">{{address}}</BaseLabel>
    <BaseButton
      class="base-button"
      text="登録画面へ"
      @clickButton="goToTop"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ContentsResult',

  computed: {
    ...mapGetters({
      name: 'users/name',
      birthDay: 'users/birthDay',
      address: 'users/address',
    }),
  },

  methods: {
    goToTop() {
      this.$router.push({ name: 'ContentsRegister' });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
