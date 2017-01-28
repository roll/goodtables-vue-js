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
  <template v-if="table.valid">
    <h3>
      {{ table.source }}
      [{{ table['row-count'] }} rows/{{ table['error-count'] }} errors]
    </h3>
  </template>
  <template v-else>
    <h3 @click="show = !show" class="error">
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
  </template>
</div>
</template>

<style scoped>
h3 {
  display: inline-block;
  color: #5cb85c;
  margin: 10px 0;
}

h3.error {
  color: #d9534f;
  cursor: pointer;
}

h3.error:hover {
  text-decoration: underline;
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
