<template>
  <div class="home">
    <MoviesGrid />
  </div>
</template>

<script>
import MoviesGrid from '@/components/MoviesGrid.vue';

export default {
  name: 'Home',
  components: {
    MoviesGrid,
  },
};
</script>
