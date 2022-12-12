<template>
  <div class="scroll-list-item">
    <div class="todo-list">
      <div class="todo-item" v-for="todo in getTodos" :key="todo">
        <h4 style="margin-left: 20px;">{{ todo.nameTask }}</h4>
        <p style="margin-left: 20px;">{{ todo.createAt }}</p>
        <!-- <p style="margin-left: 20px;">{{ todo.status }}</p> -->
        <button class="btn-completed" @click="handleCompleted">Hoàn thành</button>
        <button class="btn-cancel">Từ bỏ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "TodoItemComponent",
  methods: {
    handleCompleted() {
      const a = [...this.getTodos]
      console.log(a);
    },
  ...mapActions({
    updateStatus: "updateStatus"
  })
  },
  computed: mapGetters(['getTodos'])
};
</script>

<style lang="scss" scoped>
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
.scroll-list-item {
  overflow: auto;
  height: 55vh;
  position: relative;
  top: 20px;
} 
.scroll-list-item::-webkit-scrollbar {
  width: 3px;
  height: 10rem;
}
.scroll-list-item::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 100rem;
}
.scroll-list-item::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 100rem;
}
</style>
