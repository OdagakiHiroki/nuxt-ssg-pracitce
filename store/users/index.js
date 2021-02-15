const state = () => ({
  name: null,
  birthDay: null,
  address: null,
});

const getters = {
  name: (state) => state.name,
  birthDay: (state) => state.birthDay,
  address: (state) => state.address,
};

const actions = {
  async setName({ commit }, { name }) {
    commit('setName', name);
  },
  async setBirthDay({ commit }, { birthDay }) {
    commit('setBirthDay', birthDay);
  },
  async setAddress({ commit }, { address }) {
    commit('setAddress', address);
  },
};

const mutations = {
  setName(state, name) {
    state.name = name;
  },
  setBirthDay(state, birthDay) {
    state.birthDay = birthDay;
  },
  setAddress(state, address) {
    state.address = address;
  },
};

export {
  state,
  getters,
  actions,
  mutations,
};
