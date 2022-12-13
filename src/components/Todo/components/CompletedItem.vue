<template>
  <div v-for="todo in getTodos" :key="todo">
    <div v-if="todo.status === 'completed'">
      <h4>
        {{todo.nameTask}}
      </h4>
      <!-- <p>{{todos.status}}</p> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getTodos'])
  }
}
</script>

<style>
</style>