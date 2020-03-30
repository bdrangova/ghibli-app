import fetchMovies from '@/services/fetchMovies';

const state = {
  movies: [],
};

const getters = {
  allMovies: state => state.movies,
  movieWithId: state => id => state.movies.find(item => item.id === id),
};

const actions = {
  async fetchMovies({ commit }) {
    const movies = await fetchMovies();
    commit('setMovies', movies);
  },
  async fetchMovieById({ commit }, id) {
    const movies = await fetchMovies(id);
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
