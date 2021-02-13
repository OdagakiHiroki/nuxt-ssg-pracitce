import Vue from 'vue'

Vue.prototype.$testFunc = (text) => {
  console.debug(text)
}
