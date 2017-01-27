<script>
import Table from './Table.vue'

export default {
  props: ['report'],
  components: {
    'report-table': Table,
  }
}
</script>

<template>
<div class="goodtables-vue-report">
  <h1>Report</h1>
  <table class="summary">
    <tbody>
      <tr><th>valid</th><td>{{ (report.valid) ? 'yes' : 'no' }}</td></tr>
      <tr><th>tables</th><td>{{ report['table-count'] }}</td></tr>
      <tr><th>errors</th><td>{{ report['error-count'] }}</td></tr>
      <tr><th>time</th><td>{{ report.time }}</td></tr>
    </tbody>
  </table>
  <h2>Tables</h2>
  <report-table v-for="table of report.tables" :table="table" />
</div>
</template>

<style scoped>
table.summary {
  width: 10em;
}

h2 {
  margin-bottom: 0;
}
</style>

<style>
.goodtables-vue-report {
  color: #333;
  font-family: monospace;
  letter-spacing: -0.5px;
}

.goodtables-vue-report table {
  border: 2px solid #d9534f;
  border-radius: 3px;
  background-color: #fff;
}

.goodtables-vue-report th {
  background-color: #d9534f;
  color: #eee;
}

.goodtables-vue-report td {
  background-color: #f9f9f9;
}

.goodtables-vue-report th,
.goodtables-vue-report td {
  padding: 10px 20px;
  height: 1em;
}

.goodtables-vue-report th.active {
  color: #fff;
}
</style>
