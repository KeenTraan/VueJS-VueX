<template>
  <div class="column-item">
    <h3 class="header-column">{{ columnTitle }}</h3>
    <div>
      <div class="list-item">
        <AddToDoForm
          v-if="columnItem.status === STATUS.NEW && showingAddForm"
          @cancelAddingToDo="hiddenTodo"
          @hiddenTodo="hiddenTodo"
        />
        <div v-for="todo in todoList" :key="todo.id" class="item">
          <TodoItem :todo="todo" />
        </div>
      </div>
    </div>
    <div class="cover" v-if="columnItem.status === STATUS.NEW">
      <button
        class="btn-add"
        @click="showingAddForm = true"
        :disabled="showingAddForm"
      >
        <strong>Add New</strong>
      </button>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/Todo/components/TodoItem.vue";
import AddToDoForm from "@/components/Todo/components/AddToDoForm.vue";
import { STATUS } from "@/constant";
import { mapGetters } from "vuex";
export default {
  name: "ColumnItem",
  components: {
    TodoItem,
    AddToDoForm,
  },
  props: {
    columnTitle: {
      type: String,
      default: () => "",
    },
    columnItem: {
      type: Object,
      default: () => ({}),
    },
    status: {
      type: String,
      default: () => "",
    },
    keyword: {
      type: String,
      default: () => "",
    }
  },
  data() {
    return {
      showingAddForm: false,
      STATUS,
    };
  },
  methods: {
    hiddenTodo() {
      this.showingAddForm = false;
    },

  },
  computed: {
    ...mapGetters(["getTodos"]),
    todoList() {
      return this.$store.getters.getTodos.filter(todo => todo.status === this.status && todo.nameTask.toLowerCase().includes(this.keyword.toLowerCase()));
    }
  },
};
</script>

<style lang="scss" scoped>
.column-item {
  position: relative;
  width: 20vw;
  height: 90vh;
  background-color: rgb(224, 224, 224);
  margin-right: 10px;
  .header-column {
    width: 20vw;
    background-color: white;
  }
  .list-item {
    overflow: auto;
    height: calc(100vh - 20vh);
    padding: 10px;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .cover {
    bottom: 10px;
    position: absolute;
    width: 100%;
    text-align: center;
    .btn-add {
      width: 18vw;
      border: 1px solid green;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      color: green;
      font-size: medium;
    }
  }
}
.list-item::-webkit-scrollbar {
  width: 3px;
  height: 0;
}
.list-item::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 100rem;
}
.list-item::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 100rem;
}
</style>
