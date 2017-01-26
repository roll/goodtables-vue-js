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
    <label :for="id1">Error list view</label>
    <input :id="id2" type="radio" name="tabs">
    <label :for="id2">Interactive view</label>
    <error-list :table="table" />
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

input {
  display: none;
}

label {
  width: 10em;
  display: inline-block;
  margin: 0 0 -1px;
  padding: 15px 25px;
  font-weight: 600;
  text-align: center;
  color: #bbb;
  border: 1px solid transparent;
}

label:hover {
  color: #888;
  cursor: pointer;
}

input:checked + label {
  color: #333;
  border: 1px solid #d9534f;
  border-top: 2px solid #d9534f;
  border-bottom: 1px solid #fff;
}
</style>
