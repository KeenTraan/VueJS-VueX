<template>
  <div class="scroll-cancel-item">
    <div v-for="todo in getTodos" :key="todo" class="cancel-list">
      <div v-if="todo.status === 'cancel'">
        <h4 class="text">
          {{todo.nameTask}} bị hủy bỏ 
        </h4>
        <p class="text">{{todo.createAt}}</p>
        <p class="text-cancel">Hủy bỏ lúc: <br>{{`${this.time} ${this.date}`}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "CancelItemVue",
  data() {
    return {
      date: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/ ${new Date().getFullYear()}`,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    };
  },
  computed:{
    ...mapGetters(['getTodos'])
  }
}
</script>

<style lang="scss" scoped>
.scroll-cancel-item {
  // border: 1px solid red;
  overflow: auto;
  height: 80vh;
  position: absolute;
  width: 19vw;
  left: 7px;
  top: 60px;
}
.cancel-list {
  background-color: white;
  border-radius: 3px;
  .text{
    padding: 10px 0 5px 20px;
  }
  .text-cancel {
    padding: 10px 0 10px 20px;
    color: red;
  }
}
.scroll-cancel-item::-webkit-scrollbar{
  width: 3px;
}
.scroll-cancel-item::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 100rem;

}
.scroll-cancel-item::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 100rem;
}
</style>