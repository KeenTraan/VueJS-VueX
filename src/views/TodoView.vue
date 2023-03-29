<template>
  <div class="todo">
    <NavbarComponent />
    <div class="body-todo">
      <!-- <SearchTodoVue /> -->
      <TodoApp />
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import TodoApp from '@/components/Todo/TodoApp.vue'
// import SearchTodoVue from '@/components/Todo/SearchTodo.vue'
export default {
  components: {
    NavbarComponent,
    TodoApp,
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
