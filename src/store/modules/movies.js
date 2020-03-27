import fetchMovies from '@/services/fetchMovies';

const state = {
  movies: [],
};

const getters = {
  allMovies: state => state.movies,
};

const actions = {
  async fetchMovies({ commit }) {
    const movies = await fetchMovies();
    commit('setMovies', movies);
  },
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
