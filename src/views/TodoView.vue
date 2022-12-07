<template>
  <div class="todo">
    <NavbarComponent />
    <h1>This is todo</h1>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.todo {
  display: flex;
}
</style>
