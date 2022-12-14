<template>
  <div class="todo-list">
    <div class="todo-item" v-for="todo in getTodos" :key="todo">
      <h4 style="margin-left: 20px;">{{ todo.nameTask }}</h4>
      <p style="margin-left: 20px;">{{ todo.createAt }}</p>
      <button class="btn-completed">Hoàn thành</button>
      <button class="btn-cancel">Từ bỏ</button>
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
.todo-item {
  background-color: white;
  margin: 5px 10px 0 11px;
  padding: 5px;
  border-radius: 3px;
}
.btn-completed {
  background-color: #186A3B;
  border: none;
  border-radius: 3px;
  padding: 4px 10px 4px 10px;
  margin: 0 12px 0 16px;
  color: white;
  cursor: pointer;
}
.btn-cancel {
  background-color: red;
  border: none;
  border-radius: 3px;
  padding: 4px 10px 4px 10px;
  color: white;
  cursor: pointer;
  width: 6rem;
}
</style>
