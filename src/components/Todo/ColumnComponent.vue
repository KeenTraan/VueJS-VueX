<template>
  <div class="column-list">
    <div v-for="column in columns" :key="column" class="column">
      <h2 class="header">{{ column.name }}</h2>
      <form class="input" v-if="column.id === 1 && ishiden">
        <input
          type="text"
          placeholder="Nhập tên nhiệm vụ"
          v-model="nameTask"
        />
        <p style="margin-left: 16px">{{ `${this.time} ${this.date}` }}</p>
        <button class="btn-save" @click="handleSave" :disabled="this.nameTask ===''">Lưu</button>
        <button class="btn-destroy" @click="ishiden = false">Hủy bỏ</button>
      </form>
      <div class="cover" v-show="column.status === 'new'">
        <button class="btn-add" @click="ishiden = !ishiden">Thêm Mới</button>
      </div>
      <TodoItemVue v-if="column.id === 1" />
    </div>
  </div>
</template>

<script>
import TodoItemVue from "./components/TodoItem.vue";
import { v4 as idv4 } from "uuid";
import { mapActions } from 'vuex';
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
  components: {
    TodoItemVue,
  },
  methods: {
    handleSave(e) {
      e.preventDefault();
      const newTodo = {
        id: idv4(),
        nameTask: this.nameTask,
        createAt: new Date(),
        status: "",
      }
      this.nameTask = ""  //clear input 
      this.ishiden = false //hiden input when completed add data
      this.createTodo(newTodo)
    },
    ...mapActions({
      createTodo: "createTodo"
    })
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
  height: 85vh;
  position: relative;
  border-radius: 3px;
  box-shadow: 5px 10px 8px #888888;
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
  width: 18vw;
  position: relative;
  left: 1rem;
  top: 1rem;
  border-radius: 3px;
  input {
    width: 16vw;
    margin: 1rem;
    border: 1px solid rgba(65, 65, 65, 0.8);
    border-radius: 3px;
    padding: 5px;
    opacity: 0.6;
  }
}
.btn-destroy {
  margin: 10px 15px 10px 0;
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
  margin: 10px 0 10px 15px;
  background-color: green;
  border: none;
  width: 7rem;
  padding: 4px 16px;
  border-radius: 3px;
  color: white;
  cursor: pointer;
}
</style>
