<template>
  <div v-if="!addModel" class="TodoItem">
    <div class="input-form">
      <form @submit.prevent="onSubmit(nameTask)">
        <input type="text" placeholder="Nhập tên nhiệm vụ" v-model="nameTask" />
        <p style="margin-left: 10px">{{this.currentTime}}</p>
        <button class="btn-save" type="submit">Lưu</button>
        <button class="btn-cancel" @click="onCancel">
          Hủy Bỏ
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { getFormatTime } from "@/utils";
export default {
  name: "TodoItem",
  data() {
    return {
      nameTask: "",
    };
  },
  props: {
    todo: {
      type: Array,
      default: () => [],
    },
    addModel: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    onSubmit(nameTask) {
      this.$emit("onSubmit", { nameTask, createAt: this.currentTime});
      this.nameTask = "";
    },
    onCancel() {
      this.$emit("onCancel");
    },
  },
  computed: {
    currentTime() {
      let dateTime = new Date();
      return getFormatTime(dateTime);
    },
  },
};
</script>

<style lang="scss" scoped>
.TodoItem {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 10px;
  width: calc(100% - 10px);
  height: calc(100px - 10px);
  border-radius: 5px;
  background-color: white;
  border-radius: 3px;
  left: 5px;
  .input-form {
    position: absolute;
    width: 100%;
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
      padding: 4px 8px;
    }
    .btn-cancel {
      cursor: pointer;
      color: white;
      margin: 0 10px;
      background-color: red;
      border: none;
      border-radius: 3px;
      padding: 4px 8px;
    }
  }
}
</style>
