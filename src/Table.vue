<script>
import TableErrors from './TableErrors.vue'
import TableValues from './TableValues.vue'

export default {
  props: ['table'],
  data: function() {
    return {
      id1: Math.random().toString(36).substring(10),
      id2: Math.random().toString(36).substring(10),
      show: false,
      values: false,
    }
  },
  components: {
    'table-values': TableValues,
    'table-errors': TableErrors,
  },
}
</script>

<template>
<div class="root">
  <h3 @click="show = !show">
    {{ table.source }}
    [{{ table['row-count'] }} rows/{{ table['error-count'] }} errors]
    [{{ (show) ? '-': '+' }}]
  </h3>
  <div v-if="show">
    <input :id="id1" type="radio" name="tabs" checked>
    <label :for="id1" @click="values = false">Errors view</label>
    <input :id="id2" type="radio" name="tabs">
    <label :for="id2" @click="values = true">Values view</label>
    <table-values v-if="values" :table="table" />
    <table-errors v-else :table="table" />
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
