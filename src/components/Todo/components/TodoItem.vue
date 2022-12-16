<template>
  <div class="to-do-item" v-for="todo in getTodos" :key="todo.id">
    <div class="to-do-list" v-if="todo.status === columnStatus">
      <h4>{{ todo.nameTask }}</h4>
      <p class="to-do-time">{{ todo.createAt }}</p>
      <div v-if="todo.status === STATUS.NEW">
        <button class="btn-completed" @click="handleUpdate(todo, STATUS.COMPLETED)">
          Complete
        </button>
        <button class="btn-cancel" @click="handleUpdate(todo, STATUS.CANCELED)">
          Destroy
        </button>
      </div>
      <div v-else-if="todo.status === STATUS.COMPLETED">
        <p>Hoàn thành lúc:</p>
        <p>{{currentTime}}</p>
      </div>
      <div v-else>
        <p>Hủy bỏ lúc: </p>
        <p>{{currentTime}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { getFormatTime } from "@/utils";
import { STATUS } from "@/constant";
export default {
  name: "TodoItem",
  data() {
    return{
      currentTime: getFormatTime(new Date()), 
      STATUS
    }
  },
  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },
    columnStatus: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    handleUpdate(todo, status) {
      const updateTodo = { ...todo, status };
      console.log(this.updateStatus(updateTodo));
      this.updateStatus(updateTodo);
    },
    ...mapActions(["updateStatus"]),
  },
  computed: {
    ...mapGetters(["getTodos"]),
  },
};
</script>

<style lang="scss" scoped>
.to-do-item {
  // position: relative;
  .to-do-list {
    background-color: white;
    margin: 20px 10px;
    border-radius: 5px;
    padding: 10px;
    .to-do-time {
      margin-bottom: 10px;
    }
  }
  .btn-completed {
    background-color: green;
    padding: 4px 10px;
    border: none;
    margin: 10px 10px 5px 0;
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
