<script>
import Table from './Table.vue'

export default {
  props: ['report'],
  components: {
    'report-table': Table,
  },
}
</script>

<template>
<div class="goodtables-vue-report">
  <h1>Report</h1>
  <table class="summary" :class="{error: !report.valid}">
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

<style src="./styles.css"></style>
