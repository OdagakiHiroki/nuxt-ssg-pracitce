<template>
  <div class="contents-confirm">
    <BaseLabel text="入力した名前は: ">{{name}}</BaseLabel>
    <BaseLabel text="入力した生年月日は: ">{{birthDay}}</BaseLabel>
    <BaseLabel text="入力した住所は: ">{{address}}</BaseLabel>
    <BaseButton
      class="base-button"
      text="このボタンを押すと入力ユーザー情報をクリアします。"
      @clickButton="resetUserInfo"
    />
    <BaseButton
      class="base-button"
      text="リザルト画面へ"
      @clickButton="goToResult"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ContentsConfirm',

  computed: {
    ...mapGetters({
      name: 'users/name',
      birthDay: 'users/birthDay',
      address: 'users/address',
    }),
  },

  methods: {
    resetUserInfo() {
      // storeのユーザー情報を初期化
      this.$store.dispatch('users/setName', { name: null });
      this.$store.dispatch('users/setBirthDay', { birthDay: null });
      this.$store.dispatch('users/setAddress', { address: null });
    },
    goToResult() {
      // this.$router.push({ name: 'ContentsResult' });
      window.location.href = '/ContentsResult';
    },
  },
};
</script>

<style lang="scss" scoped>
.contents-confirm{
}
</style>
