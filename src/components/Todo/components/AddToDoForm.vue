<template>
  <div class="to-do-item">
    <div class="input-form">
      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Nhập tên nhiệm vụ" v-model="name" />
        <p style="margin-left: 10px">{{ this.currentTime }}</p>
        <button class="btn-save" type="submit" :disabled="this.name === ''">Lưu</button>
        <button class="btn-cancel" type="button" @click="cancel">Hủy Bỏ</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddToDoForm",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    cancel() {
      this.$emit("cancelAddingToDo");
    },
    handleSubmit() {
      const addTodo = {
        nameTask: this.name,
        createAt: `${new Date().getHours()}:${new Date().getMinutes()} ${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`,
        status: "new",
      };
      this.createTodo(addTodo);
      this.name = ""
    },
    ...mapActions({ createTodo: "createTodo" }),
  },
};
</script>

<style lang="scss">
.to-do-item {
  .input-form {
    position: relative;
    height: calc(100px - 10px);
    width: calc(100% - 20px);
    background-color: white;
    border-radius: 3px;
    left: 10px;
    top: 10px;
    input {
      width: 90%;
      margin: 10px 0 10px 10px;
      opacity: 0.5;
    }
    .btn-save {
      cursor: pointer;
      margin: 0 10px 0 10px;
      background-color: green;
      border: none;
      color: white;
      border-radius: 3px;
      padding: 4px 30px;
    }
    .btn-cancel {
      cursor: pointer;
      color: white;
      margin: 0 10px;
      background-color: red;
      border: none;
      border-radius: 3px;
      padding: 4px 20px;
    }
  }
}
</style>
