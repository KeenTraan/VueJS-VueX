<template>
  <div class="todoItem">
    <ColumnItem
      v-for="column in columns"
      :key="column.id"
      :columnTitle="column.columnTitle"
      :status="column.status"
      :columnItem="column"
      class="columnItem"
    />
  </div>
</template>

<script>
import ColumnItem from "@/components/Todo/components/ColumnItem.vue";
export default {
  name: "TodoApp",
  data() {
    return {
      columns: [
        { id: 1, columnTitle: "New", status: "new" },
        { id: 2, columnTitle: "Completed", status: "complete" },
        { id: 3, columnTitle: "Canceled", status: "cancel" },
      ],
    };
  },
  components: {
    ColumnItem,
  },
};
</script>

<style lang="scss" scoped>
.todoItem {
  display: flex;
}
.columnItem {
  width: 20vw;
  height: 90vh;
  background-color: rgb(184, 184, 184);
  margin-right: 10px;
}
</style>
