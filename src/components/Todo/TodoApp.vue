<template>
  <SearchTodo @handleSearch="searchTodo"/>
  <div class="todoItem">
    <ColumnItem
      v-for="column in columns"
      :key="column.id"
      :columnTitle="column.columnTitle"
      :status="column.status"
      :columnItem="column"
      :keyword="keyword"
    />
  </div>
</template>

<script>
import ColumnItem from "@/components/Todo/components/ColumnItem.vue";
import SearchTodo from "@/components/Todo/components/SearchTodo.vue";
import { STATUS } from "@/constant";

export default {
  name: "TodoApp",
  data() {
    return {
      columns: [
        { id: 1, columnTitle: "New", status: STATUS.NEW },
        { id: 2, columnTitle: "Completed", status: STATUS.COMPLETED },
        { id: 3, columnTitle: "Canceled", status: STATUS.CANCELED },
      ],
      keyword: ""
    };
  },
  components: {
    ColumnItem,
    SearchTodo
  },
  methods: {
    searchTodo(keyword) {
      this.keyword = keyword;
    }
  }
};
</script>

<style lang="scss" scoped>
.todoItem {
  display: flex;
}

</style>
