<template>
  <div class="wrapper">
    <div class="content">
      <MovieCard v-for="movie in allMovies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MovieCard from './MovieCard.vue';

export default {
  name: 'MoviesGrid',
  components: {
    MovieCard,
  },
  methods: {
    ...mapActions(['fetchMovies']),
  },
  computed: mapGetters(['allMovies']),
  created() {
    this.fetchMovies();
  },
};
</script>

<style lang="css" scoped>
.wrapper {
  margin: 3rem 20rem;
  display: flex;
  flex-direction: column;
}

.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 3rem;
  grid-column-gap: 6rem;
}
</style>
