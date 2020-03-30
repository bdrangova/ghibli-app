<template>
  <router-link :to="'/movie/' + movie.id">
    <div class="cardWrapper">
      <img :src="movie.poster" class="image" />
      <h2 class="h2">{{ movie.title }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["movie"]
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.cardWrapper {
  height: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(16, 156, 235, 0.7);
  justify-content: space-between;
  box-shadow: 3px 3px 6px #3e6c86;
  &:hover {
    cursor: pointer;
    background-color: #109ceb;
  }

  .image {
    width: 100%;
    height: 100%;
    opacity: 70%;
    border-top-left-radius: 0.9rem;
    border-top-right-radius: 0.9rem;
    &:hover {
      opacity: 100%;
    }
  }

  .h2 {
    color: #ffffff;
    text-decoration: none;
    padding: 1.5rem;
    text-align: center;
  }
}
</style>
