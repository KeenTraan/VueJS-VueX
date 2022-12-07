<template>
  <div class="nav-bar">
    <h3 class="logo">Example Basic</h3>
    <nav class="nav-list">
      <router-link 
      v-for="link in navLink" 
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
  computed: {
    navLink() {
      return this.$store.state.navlink;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.nav-bar {
  height: 100vh;
  width: 15vw;
  background-color: #c0c0c0 ;
  font-size: x-large;
  margin-right: 1rem;
  .logo {
    margin: 1.3rem;
  }
}
.nav-list {
  display: flex;
  flex-direction: column;
  .router-link {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    margin: 1px;
    padding: 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .router-link:hover{
    background-color: lightblue;
  }
}

</style>
