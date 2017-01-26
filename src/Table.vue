<script>
import ErrorGrid from './ErrorGrid.vue'
import ErrorList from './ErrorList.vue'

export default {
  props: ['table'],
  components: {
    'error-grid': ErrorGrid,
    'error-list': ErrorList,
  }
}
</script>

<template>
<div class="root">
  <h2>{{ table.source }}</h2>
  <div>
    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1">Error list view</label>
    <input id="tab2" type="radio" name="tabs">
    <label for="tab2">Interactive view</label>
  </div>
  <error-list :table="table" />
</template>

<style scoped>
input {
  display: none;
}

label {
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
  margin-bottom: -1px;
}
</style>
