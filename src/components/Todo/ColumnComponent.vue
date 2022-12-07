<template>
  <div class="column-list">
    <div v-for="column in columns" :key="column" class="column">
      <h2 class="header">{{ column.name }}</h2>
      <AddItemVue v-show="column.status === 'new' && this.ishiden" />
      <div class="cover" v-show="column.status === 'new'">
        <button class="btn-add" @click="ishiden = !ishiden">Thêm Mới</button>
      </div>
    </div>
  </div>
</template>

<script>
import AddItemVue from "./AddItem.vue";
export default {
  data() {
    return {
      columns: [
        { id: 1, name: "Mới", status: "new" },
        { id: 2, name: "Đã Hoàn Thành", status: "completed" },
        { id: 3, name: "Đã Hủy Bỏ", status: "cancel" },
      ],
      ishiden: false,
    };
  },
  components: {
    AddItemVue,
  },
};
</script>

<style lang="scss" scoped>
.column-list {
  display: flex;
}
.column {
  background-color: #dcdcdc;
  margin-right: 20px;
  width: 20vw;
  height: 85vh;
  position: relative;
  // display: flex;
  // flex-direction: column;
}
.header {
  background-color: white;
}
.cover {
  width: 20vw;
  position: absolute;
  bottom: 15px;
  text-align: center;
  .btn-add {
    cursor: pointer;
    border: none;
    border-radius: 3px;
    width: 15vw;
    background-color: green;
    padding: 6px 14px;
    color: white;
  }
  .btn-add:hover {
    outline: 4px solid rgb(176, 232, 250, 0.6);
  }
}
</style>
