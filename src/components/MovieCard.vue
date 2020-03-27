<template>
  <div class="cardWrapper">
    <img :src="movie.poster" class="image" />
    <h2 class="h2">{{ movie.title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['movie'],
};
</script>

<style lang="css">
.cardWrapper {
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #109ceb;
}

.cardWrapper:hover {
  cursor: pointer;
}

.image {
  width: 100%;
  border-top-left-radius: 0.9rem;
  border-top-right-radius: 0.9rem;
}

.h2 {
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  text-align: center;
}
</style>
