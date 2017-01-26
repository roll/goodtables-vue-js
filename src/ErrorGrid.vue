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
  min-width: 50em;
}
</style>
