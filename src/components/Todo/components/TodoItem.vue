<template>
  <div class="scroll-list-item">
    <div class="todo-list">
      <div  v-for="todo in getTodos" :key="todo">
        <div class="todo-item" v-if="todo.status === 'new'">
          <h4 class="text">{{ todo.nameTask }}</h4>
          <p class="text">{{ todo.createAt }}</p>
          <button class="btn-completed" @click="handleUpadteStatus(todo, 'completed')">Hoàn thành</button>  <!-- truyền data ban đầu cùng status xuống -->
          <button class="btn-cancel" @click="handleUpadteStatus(todo, 'cancel')">Từ bỏ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "TodoItemComponent",
  methods: {
    handleUpadteStatus(todo, status) {
      const newTodo = {...todo, status} // coppy dữ liệu sang một object mới 
     this.updateStatus(newTodo) // đẩy dữ liệu được coppy qua acction function để xử lý
    },
  ...mapActions({
    updateStatus: "updateStatus"
  })
  },
  computed: {
    ...mapGetters(['getTodos']), //khoi tao state khi component được mount
} 
};
</script>

<style lang="scss" scoped>
.todo-item {
  background-color: white;
  margin: 0 10px 20px 12px;
  padding: 20px 0 25px 0;
  border-radius: 3px;
  .text{
    margin:0 0 10px 20px
  }
}
.btn-completed {
  background-color: #186A3B;
  border: none;
  border-radius: 3px;
  padding: 4px 10px 4px 10px;
  margin: 6px 12px 0 16px;
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
  height: 50vh;
  position: relative;
  top: 30px;
  width: 20vw; 
  // border: 1px solid red;
} 
.scroll-list-item::-webkit-scrollbar {
  width: 3px;
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
