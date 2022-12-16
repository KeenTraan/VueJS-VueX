<template>
  <div class="column-item">
    <h3 class="header-column">{{ columnTitle }}</h3>
    <div class="list">
      <AddToDoForm
        v-if="columnItem.status === STATUS.NEW && showingAddForm"
        @cancelAddingToDo="hiddenTodo"
        @hiddenTodo="hiddenTodo"
      />
      <div class="list-item">
        <TodoItem 
        :columnStatus="columnItem.status"
        />
      </div>
      <div class="cover" v-if="columnItem.status === STATUS.NEW">
        <button class="btn-add" @click="showingAddForm = true">Add New</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/Todo/components/TodoItem.vue";
import AddToDoForm from "@/components/Todo/components/AddToDoForm.vue";
import { STATUS } from "@/constant";
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
    todo: {
      type: Array,
      default: () => [],
    },
    columnItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      showingAddForm: false,
      STATUS
    };
  },
  methods: {
    hiddenTodo() {
      this.showingAddForm = false;
    }
  },
  computed: {

  },
};
</script>

<style lang="scss" scoped>
.column-item {
  position: relative;
  width: 20vw;
  .header-column {
    width: 20vw;
    background-color: white;
  }
  .list {
    // border: 1px solid red;
    overflow: auto;
    height: 80vh;
    width: 20vw;
  }
  .list-item {
    position: relative;
  }
  .cover {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    .btn-add {
      width: 18vw;
      border: none;
      padding: 5px;
      border-radius: 5px;
      opacity: 0.8;
    }
    .btn-add:hover {
      background-color: green;
      color: white;
    }
  }
}
.list::-webkit-scrollbar {
  width: 3px
}
.list::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 100rem; 
}
.list::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 100rem;
}
</style>
