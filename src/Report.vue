<script>
import Table from './Table.vue'

export default {
  props: {
    report: Object,
  },
  components: {
    MyTable: Table,
  },
}
</script>

<template>
<div class="goodtables-vue-report">

  <ul class="dataset-errors">
    <li v-for="error of report.errors">{{ error.message }}</li>
  </ul>

  <template v-for="(table, index) of report.tables">
    <MyTable :table="table" :tableCount="report['table-count']" :tableNumber="index + 1" />
  </template>

</div>
</template>

<style src="./styles.css"></style>
