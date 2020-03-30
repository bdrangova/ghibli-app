<template>
  <section class="wrapper">
    <router-link to="/">BACK</router-link>
    <div class="content">
      <img :src="movie.poster" :alt="movie.title" class="image" />
      <div class="details">
        <h2 class="h2">{{movie.title}}</h2>
        <p class="description">{{movie.description}}</p>
        <div class="notes">
          <p>Directed by {{movie.director}}</p>
          <p>Produced by {{movie.producer}}</p>
          <p>Released {{movie.release_date}}</p>
          <p class="rating">
            <img
              src="https://img.icons8.com/dusk/64/000000/tomato.png"
              alt="tomato icon"
              width="35vw"
              height="35vh"
              class="icon"
            />
            <span>{{movie.rt_score}}/100</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MovieDetails",
  methods: {
    ...mapActions(["fetchMovieById"])
  },
  computed: {
    movie() {
      return this.$store.getters.movieWithId(this.$route.params.id);
    }
  },
  created() {
    if (!this.movie) {
      this.fetchMovieById(this.$route.params.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 20rem;
}

a {
  margin: 2rem;
  text-decoration: none;
}

.content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.image {
  margin: 1rem;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 3px 3px 6px #3e6c86;
}

.details {
  margin: 1rem;
  color: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: justify;
  text-decoration: none;
  background-color: #109ceb;
  box-shadow: 3px 3px 6px #3e6c86;
  .h2 {
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    padding-bottom: 2rem;
  }

  .description {
    font-size: 1rem;
    padding-bottom: 2rem;
  }

  .notes {
    line-height: 30px;
  }

  .rating {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-content: center;
  }

  .rating > span {
    align-self: center;
    margin-left: 6px;
  }
}
</style>
