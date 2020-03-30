<template>
  <section class="home">
    <MoviesGrid />
  </section>
</template>

<script>
import MoviesGrid from "@/components/MoviesGrid.vue";

export default {
  name: "Home",
  components: {
    MoviesGrid
  }
};
</script>
