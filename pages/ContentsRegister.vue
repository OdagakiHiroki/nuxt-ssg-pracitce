<template>
  <div class="contents-register">
    <BaseInput
      class="base-input name"
      :value="name"
      @changeValue="changeInputName"
    />
    <div>入力値は: {{name}}</div>
    <BaseInput
      class="base-input birth-day"
      :value="birthDay"
      :disabled="birthDayDisabled"
      @changeValue="changeInputBirthDay"
    />
    <div>入力値は: {{birthDay}}</div>
    <BaseInput
      class="base-input address"
      :value="address"
      :disabled="addressDisabled"
      @changeValue="changeInputAddress"
    />
    <div>入力値は: {{address}}</div>
    <BaseButton
      class="base-button"
      text="登録"
      @clickButton="registerUserInfo"
    />
  </div>
</template>

<script>
export default {
  name: 'ContentsRegister',

  data() {
    return {
      name: null,
      birthDay: null,
      address: null,
    };
  },

  computed: {
    birthDayDisabled() {
      return this.name === null;
    },
    addressDisabled() {
      return this.birthDay === null;
    },
  },

  methods: {
    changeInputName(value) {
      this.name = value;
    },
    changeInputBirthDay(value) {
      this.birthDay = value;
    },
    changeInputAddress(value) {
      this.address = value;
    },
    registerUserInfo() {
      // サーバーへの登録処理
      // storeに格納
      this.$store.dispatch('users/setName', { name: this.name });
      this.$store.dispatch('users/setBirthDay', { birthDay: this.birthDay });
      this.$store.dispatch('users/setAddress', { address: this.address });

      // this.$router.push({ name: 'ContentsConfirm' });
      window.location.href = '/ContentsConfirm';
    },
  },
};
</script>

<style lang="scss" scoped>
.contents-register{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  .base-input{
    width: 100px;
    & + .base-input {
      margin-top: 10px;
    }
  }
  .base-button{
    margin-top: 10px;
  }
}
</style>
