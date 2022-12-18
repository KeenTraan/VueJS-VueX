<template>
  <div class="to-do-item">
    <div class="input-form">
      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Nhập tên nhiệm vụ" v-model="name" />
        <p style="margin-left: 10px">{{ currentTime }}</p>
        <button class="btn-save" type="submit" :disabled="this.name === ''">
          Save
        </button>
        <button class="btn-cancel" type="button" @click="cancel">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getFormatTime } from "@/utils";
import { v4 as idv4 } from "uuid";
import { STATUS } from "@/constant";
export default {
  name: "AddToDoForm",
  data() {
    return {
      name: "",
      STATUS,
    };
  },
  methods: {
    cancel() {
      this.$emit("cancelAddingToDo");
    },
    handleSubmit() {
      const addTodo = {
        id: idv4(),
        nameTask: this.name,
        createAt: this.currentTime,
        status: STATUS.NEW,
      };
      this.createTodo(addTodo);
      this.name = "";
      this.$emit("hiddenTodo");
    },
    ...mapActions({ createTodo: "createTodo" }),
  },
  computed: {
    currentTime() {
      let currentTime = new Date();
      return getFormatTime(currentTime);
    },
  }
};
</script>

<style lang="scss">
.to-do-item {
  .input-form {
    background-color: white;
    border-radius: 5px;
    input {
      width: 90%;
      border-radius: 3px;
      margin: 10px;
      opacity: 0.8;
      color: black;
      padding: 8px;
    }
    .btn-save {
      cursor: pointer;
      margin: 5px 10px 0 10px;
      background-color: green;
      border: none;
      color: white;
      border-radius: 3px;
      padding: 4px 30px;
    }
    .btn-cancel {
      cursor: pointer;
      color: white;
      margin: 5px 10px;
      background-color: red;
      border: none;
      border-radius: 3px;
      padding: 4px 20px;
    }
  }
}
</style>
