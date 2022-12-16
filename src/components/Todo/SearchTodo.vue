<template>
  <div class="search">
    <input type="search" placeholder="Nhập từ khóa để tìm kiếm nhiệm vụ" />
    <button class="btn">Search</button>
  </div>  
</template>

<script>
export default {
  name: "SearchTodoView",
  
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
  .btn {
    background-color: green;
    border: none;
    padding: 7px;
    border-radius: 3px;
    cursor: pointer;
    color: white;
  }
  .btn:hover {
    outline: 3px solid rgb(129, 223, 255, 0.7);
  }
}
</style>
