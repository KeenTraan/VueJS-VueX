<template>
  <div class="columnItem">
    <h3 class="header-column">{{ columnTitle }}</h3>
    <div class="list">
      <div class="list-item">
        <TodoItem
          v-if="columnItem.status == 'new'"
          @onSubmit="onSubmit($event)"
          @onCancel="onCancel"
        />
      </div>
      <div class="cover" v-if="columnItem.status == 'new'">
        <button class="btn-add">Add New</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/Todo/components/TodoItem.vue";
import { mapGetters } from "vuex";
export default {
  props: {
    columnTitle: {
      type: String,
      default: () => "",
    },
    todos: {
      type: Array,
      default: () => [],
    },
    columnItem: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onSubmit(e) {
      console.log(e);
    },
    onCancel() {
      console.log("Cancel!");
    },
  },
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(["getShowInput"]),
  },
};
</script>

<style lang="scss" scoped>
.columnItem {
  position: relative;
  width: 20vw;
  .header-column {
    width: 20vw;
    background-color: white;
  }
  .list {
    // border: 1px solid red;
    height: 80vh;
    width: 20vw;
  }
  .list-item {
    display: flex;
    flex-direction: column;
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
</style>
