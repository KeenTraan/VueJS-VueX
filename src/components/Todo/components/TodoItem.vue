<template>
  <div class="todo-list">
    <div class="todo-item" v-for="todo in getTodo" :key="todo" >
      <p>{{todo.nameTask}}</p>
      <p>{{todo.date}}</p>
      <button>Hoàn thành</button>
      <button>Từ bỏ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItemComponent",
  computed: {
    getTodo() {
     return this.$store.state.todos
    }
  }
}
</script>

<style>
.todo-list {
  margin-top: 30px;
}
.todo-item {
  background-color: white;
  margin: 15px;
  padding: 15px;
  border-radius: 3px;
}
</style>