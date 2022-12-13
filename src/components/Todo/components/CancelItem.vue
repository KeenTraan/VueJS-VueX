<template>
  <div>
    <div v-for="todo in getTodos" :key="todo">
      <div v-if="todo.status === 'cancel'">
        <h4>
          {{todo.nameTask}}
        </h4>
        <p>{{todo.createAt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "CancelItemVue",
  computed:{
    ...mapGetters(['getTodos'])
  }
}
</script>

<style>

</style>