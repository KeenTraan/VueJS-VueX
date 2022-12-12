<template>
  <div v-for="todos in getTodos" :key="todos">
    <div>
      <h4>
        {{todos.nameTask}}
      </h4>
      <p>{{todos.status}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['getTodos'])
}
</script>

<style>
</style>