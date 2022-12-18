<template>
  <div>
    <div class="to-do-item">
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
      <div v-if="todo.status === STATUS.COMPLETED">
        <p class="notify-complete">Hoàn thành lúc:</p>
        <p class="notify-complete">{{currentTime}}</p>
      </div>
      <div v-if="todo.status === STATUS.CANCELED">
        <p class="notify-destroy">Hủy bỏ lúc: </p>
        <p class="notify-destroy">{{currentTime}}</p>
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
      STATUS
    }
  },
  props: {
    columnStatus: {
      type: String,
      default: () => "",
    },
    todo: {
      type: Object,
      default: () => ({}),
    }
  },
  methods: {
    handleUpdate(todo, status) {
      const updateTodo = { ...todo, status };
      console.log(this.updateStatus(updateTodo));
      this.updateStatus(updateTodo);
      this.currentTime
    },
    ...mapActions(["updateStatus"]),
  },
  computed: {
    ...mapGetters(['getTodos']),
    currentTime(){
      let currentTime = new Date()
      return getFormatTime(currentTime)
    }  
  },
};
</script>

<style lang="scss" scoped>

  .to-do-item {
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    .to-do-time {
      margin-bottom: 10px;
    }
    .notify-complete {
      color: green;
    }
    .notify-destroy {
      color: red;
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

</style>
