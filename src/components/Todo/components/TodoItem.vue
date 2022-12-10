<template>
  <div class="todo-list">
    <div class="todo-item" v-for="todo in getTodos" :key="todo">
      <p>{{ todo.nameTask }}</p>
      <p>{{ todo.createAt }}</p>
      <button>Hoàn thành</button>
      <button>Từ bỏ</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "TodoItemComponent",
  computed: mapGetters(['getTodos'])
};
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
