<template>
  <div class="scroll-completed-item">
    <div v-for="todo in getTodos" :key="todo" class="list-completed">
      <div class="todo-completed" v-if="todo.status === 'completed'">
        <h4 class="text">
          {{ todo.nameTask }}
        </h4>
        <p class="text">{{ todo.createAt }}</p>
        <p class="text-completed">Hoàn thành lúc: <br />{{ `${this.time} ${this.date}` }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      date: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/ ${new Date().getFullYear()}`,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    };
  },
  computed: {
    ...mapGetters(["getTodos"]),
  },
};
</script>

<style scoped lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.scroll-completed-item {
  margin-top: 32px;
  position: relative;
  left: 10px;
  height: 80vh;
  padding-right: 10px;
  // border: 1px solid red;
  overflow: auto;
  width: 19vw;
}
.list-completed {
  margin:0 20px 20px 0;
}
.todo-completed {
  background-color: white;
  width: 18vw;
  border-radius: 3px;
  padding: 10px;
  .text{
    margin: 0 0 10px 10px;
  }
  .text-completed {
    margin: 0 0 10px 10px;
    color: green;
  }
}
.scroll-completed-item::-webkit-scrollbar{
  width: 3px;
}
.scroll-completed-item::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 100rem;

}
.scroll-completed-item::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 100rem;
}

</style>
