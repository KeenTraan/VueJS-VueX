<template>
  <div class="nav-bar">
    <h2 class="logo">Example Basic</h2>
    <nav class="nav-list">
      <router-link
        v-for="link in navlinks"
        :key="link"
        :to="link.path"
        class="router-link"
      >
        {{ link.name }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      navlinks: [
        { name: "Home", path: "/" },
        { name: "Todo", path: "/todo" },
        { name: "Bài 1", path: "/example1" },
        { name: "Bài 2", path: "/example2" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.nav-bar {
  height: 100vh;
  width: 15vw;
  background-color: #dcdcdc;
  margin-right: 5rem;
  position: relative;
  .logo {
    margin: 1rem;
    position: absolute;
  }
}
.nav-list {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 5rem;
  .router-link {
    text-decoration: none;
    font-weight: bold;
    color: black;
    margin: 1px;
    padding: 15px;
    font-size: large;
    &.router-link-exact-active {
      color: rgb(0, 177, 171);
    }
  }
  .router-link:hover {
    background-color: lightblue;
    transition: 0.8s;
  }
}
</style>
