<template>
  <div class="todo">
    <NavbarComponent />
    <div class="body-todo">
      <SearchTodoVue />
      <ColumnComponent />
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import ColumnComponent from '@/components/Todo/ColumnComponent.vue'
import SearchTodoVue from '@/components/Todo/SearchTodo.vue'
export default {
  components: {
    NavbarComponent,
    ColumnComponent,
    SearchTodoVue
  }
}
</script>

<style lang="scss" scoped>

.todo {
  display: flex;
}
.body-todo {
  display: flex;
  flex-direction: column;
}
</style>
