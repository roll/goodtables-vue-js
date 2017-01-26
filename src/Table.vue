<script>
import ErrorGrid from './ErrorGrid.vue'
import ErrorList from './ErrorList.vue'

export default {
  props: ['table'],
  data: function() {
    return {
      id1: Math.random().toString(36).substring(10),
      id2: Math.random().toString(36).substring(10),
      show: false,
      grid: false,
    }
  },
  components: {
    'error-grid': ErrorGrid,
    'error-list': ErrorList,
  },
}
</script>

<template>
<div class="root">
  <h3 @click="show = !show">{{ table.source }} [{{ (show) ? '-': '+' }}]</h3>
  <div v-if="show">
    <input :id="id1" type="radio" name="tabs" checked>
    <label :for="id1" @click="grid = false">Error list view</label>
    <input :id="id2" type="radio" name="tabs">
    <label :for="id2" @click="grid = true">Interactive view</label>
    <error-grid v-if="grid" :table="table" />
    <error-list v-else :table="table" />
  </div>
</div>
</template>

<style scoped>
h3 {
  display: inline-block;
  color: #d9534f;
}

h3:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
