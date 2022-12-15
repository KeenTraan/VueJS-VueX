<template>
  <div class="to-do-item">
    <div v-for="todo in getTodos" :key="todo.id" class="to-do-list">
      <h4>{{todo.nameTask}}</h4>
      <p>{{todo.createAt}}</p>
      <button class="btn-completed">Hoàn Thành</button>
      <button class="btn-cancel">Hủy Bỏ</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      default: () => ({}),
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters(["getTodos"])
  }
};
</script>

<style lang="scss" scoped>

.to-do-item {
  margin: 20px 10px;
  .to-do-list {
    background-color: white;
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px;
  }
  .btn-completed {
    background-color: green;
    padding: 4px 10px;
    border: none;
    margin-right: 10px;
    border-radius: 3px;
    color: white;
    cursor: pointer;
}
.btn-cancel {
    background-color: red;
    padding: 4px 25px;
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
}
}
</style>
