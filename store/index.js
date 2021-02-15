const state = () => ({
  isLoading: false,
});

const getters = {
  isLoading: (state) => state.isLoading,
};

const actions = {
  async changeLoadingState({ commit }, { isLoading }) {
    commit('changeLoadingState', isLoading);
  },
};

const mutations = {
  changeLoadingState(isLoading) {
    this.isLoading = isLoading;
  },
};

export {
  state,
  getters,
  actions,
  mutations,
};
