<template>
  <div class="example">
    <NavbarComponent />
    <h1>Exam 1</h1>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  components: {
    NavbarComponent,
  },
};
</script>

<style lang="scss" scoped>
.example {
  display: flex;
}
</style>
