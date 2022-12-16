<template>
  <div class="search">
    <input type="search" placeholder="Nhập từ khóa để tìm kiếm nhiệm vụ" v-model="keywork"/>
    <button class="btn-search">Search</button>
  </div>  
</template>

<script>
export default {
  name: "SearchTodoView",
  data() {
    return {
      keywork: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.search {
  margin: 1rem 0;
  input {
    width: 20vw;
    padding: 5px;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 3px;
    opacity: 0.5;
  }
  .btn-search {
    background-color: green;
    border: none;
    padding: 6px 20px;
    border-radius: 3px;
    cursor: pointer;
    color: white;
  }
  .btn:hover {
    outline: 3px solid rgb(129, 223, 255, 0.7);
  }
}
</style>
