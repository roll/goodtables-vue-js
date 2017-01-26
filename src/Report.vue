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
<div class="root">
  <h1>Report</h1>
  <report-table v-for="table of report.tables" :table="table" />
</div>
</template>

<style scoped>
.root {
  color: #333;
}
</style>
