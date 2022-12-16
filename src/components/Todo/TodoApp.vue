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
  background-color: rgb(224, 224, 224);
  margin-right: 10px;
}
</style>
