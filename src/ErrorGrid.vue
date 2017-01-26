<script>
export default {
  props: ['table'],
}
</script>

<template>
<div class="root">
  <table>
    <thead>
      <tr>
        <th v-for="header of table.headers">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="error of table.errors" v-if="error.row">
        <td v-for="value of error.row">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<style scoped>
table {
  border: 2px solid #d9534f;
  border-radius: 3px;
  background-color: #fff;
  min-width: 50em;
}

th {
  background-color: #d9534f;
  color: #eee;
}

td {
  background-color: #f9f9f9;
}

th, td {
  padding: 10px 20px;
}

th.active {
  color: #fff;
}
</style>
