<template>
  <div class="home">
    <NavbarComponent />
    <h1>Home page</h1>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComponent
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.home {
  display: flex;
}
</style>
