<template>
  <div class="input">
   <input type="text" placeholder="Nhập tên nhiệm vụ">
     <button class="btn-save">Lưu</button>
     <button class="btn-destroy">Hủy bỏ</button>
  </div>
</template>

<script>
export default {
  name: 'AdditemVue',
  computed: {
    addItem() {
      return this.$store.state.todos
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  background-color: white;
  width: 18vw;
  position: relative;
  left: 1rem;
  top: 1rem;
  border-radius: 3px;
  input {
    width: 16vw;
    margin: 1rem;
    border: 1px solid rgba(65, 65, 65, 0.8);
    border-radius: 3px;
    padding: 5px;
    opacity: 0.6;
  }
}
.btn-destroy {
  margin: 10px 15px 10px 0;
  float: right;
  background-color: red;
  border: none;
  padding: 4px 16px;
  border-radius: 2px;
  color: white;
  cursor: pointer;
}
.btn-save {
  margin: 10px 0 10px 15px;
  background-color: green;
  border: none;
  padding: 4px 16px;
  border-radius: 2px;
  color: white;
  cursor: pointer;
}

</style>