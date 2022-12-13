<template>
  <div class="column-list">
    <div v-for="column in columns" :key="column" class="column">
      <h2 class="header">{{ column.name }}</h2>
      <form class="input" v-if="column.id === 1 && ishiden">
        <input type="text" placeholder="Nhập tên nhiệm vụ" v-model="nameTask" />
        <p style="margin-left: 20px">{{ `${this.time} ${this.date}` }}</p>
        <button
          class="btn-save"
          @click="handleSave"
          :disabled="this.nameTask === ''"
        >
          Lưu
        </button>
        <button class="btn-destroy" @click="ishiden = false">Hủy bỏ</button>
      </form>
      <div class="cover" v-show="column.status === 'new'">
        <button class="btn-add" @click="ishiden = !ishiden">Thêm Mới</button>
      </div>
      <TodoItemVue v-if="column.id === 1" />
      <CompletedItemVue v-if="column.id === 2" />
      <CancelItemVue v-if="column.id === 3"/>
    </div>
  </div>
</template>

<script>
import TodoItemVue from "@/components/Todo/components/TodoItem.vue";
import CompletedItemVue from "@/components/Todo/components/CompletedItem.vue";
import { v4 as idv4 } from "uuid";
import { mapActions } from "vuex";
import CancelItemVue from './components/CancelItem.vue';
export default {
  data() {
    return {
      ishiden: false,
      nameTask: "",
      date: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/ ${new Date().getFullYear()}`,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      columns: [
        { id: 1, name: "Mới", status: "new" },
        { id: 2, name: "Đã Hoàn Thành", status: "completed" },
        { id: 3, name: "Đã Hủy Bỏ", status: "cancel" },
      ],
    };
  },
  props: {
    type: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    TodoItemVue,
    CompletedItemVue,
    CancelItemVue
  },
  methods: {
    handleSave(e) {
      e.preventDefault();
      const newTodo = {
        id: idv4(),
        nameTask: this.nameTask,
        createAt: `${this.time} ${this.date}`,
        status: "new",
      };
      this.nameTask = ""; //clear input
      this.ishiden = false; //hiden input when completed add data
      this.createTodo(newTodo);
    },
    ...mapActions({
      createTodo: "createTodo",
    }),
  },
};
</script>

<style lang="scss" scoped>
.column-list {
  display: flex;
}
.column {
  background-color: #dcdcdc;
  margin-right: 20px;
  width: 20vw;
  height: 90vh;
  position: relative;
  border-radius: 3px;
  box-shadow: 2px 2px 8px #888888;
}
.header {
  background-color: white;
  margin: 0;
}
.cover {
  width: 20vw;
  position: absolute;
  bottom: 15px;
  text-align: center;
  .btn-add {
    cursor: pointer;
    border: none;
    border-radius: 3px;
    width: 18vw;
    background-color: green;
    padding: 10px 14px;
    color: white;
  }
  .btn-add:hover {
    outline: 4px solid rgb(176, 232, 250, 0.6);
  }
}
.input {
  background-color: white;
  width: 18.5vw;
  position: relative;
  left: 0.7rem;
  top: 1rem;
  margin-top: 15px;
  border-radius: 3px;
  input {
    width: 16vw;
    margin: 20px 0 15px 20px;
    border: 1px solid rgba(65, 65, 65, 0.8);
    border-radius: 3px;
    padding: 5px;
    opacity: 0.6;
  }
}
.btn-destroy {
  margin: 10px 20px 10px 0;
  float: right;
  background-color: red;
  border: none;
  width: 7rem;
  padding: 4px 16px;
  border-radius: 3px;
  color: white;
  cursor: pointer;
}
.btn-save {
  margin: 10px 0 10px 20px;
  background-color: #186a3b;
  border: none;
  width: 7rem;
  padding: 4px 16px;
  border-radius: 3px;
  color: white;
  cursor: pointer;
}
</style>
