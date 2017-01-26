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
        <th>Row</th>
        <th>Col</th>
        <th>Code</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="error of table.errors">
        <td>{{ error['row-number'] || '-' }}</td>
        <td>{{ error['column-number'] || '-' }}</td>
        <td>{{ error.code }}</td>
        <td>{{ error.message }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border: 2px solid #d9534f;
  border-radius: 3px;
  background-color: #fff;
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
