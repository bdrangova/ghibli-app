<template>
  <div id="app">
    <nav id="nav">
      <img src="@/assets/logo.svg" alt="logo" class="logo" />
      <div class="navLinks">
        <router-link to="/">Movies</router-link>
        <router-link to="/people">People</router-link>
        <router-link to="/species">Species</router-link>
        <router-link to="/locations">Places</router-link>
        <router-link to="/vehicles">Vehicles</router-link>
        <Search />
      </div>
    </nav>
    <router-view />
    <footer class="footer"></footer>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
export default {
  components: {
    Search
  }
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  @import url("https://fonts.googleapis.com/css?family=Indie+Flower&display=swap");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background: url("assets/header.svg") no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 246px;
  z-index: 100;
  position: sticky;
  .logo {
    height: 130px;
    margin-left: 45rem;
  }
  .navLinks {
    padding: 30px;
  }
  a {
    margin: 1rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #c4e0fd;
      font-weight: bolder;
    }
  }
}

.footer {
  background: url("assets/footer.svg") no-repeat;
  height: 328px;
}
</style>
