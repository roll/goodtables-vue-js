<script>
export default {
  props: ['table'],
  data: () => {
    return {
      expandedRows: [],
    }
  },
  computed: {
    rows() {
      const rows = []
      for (const error of this.table.errors) {
        const rowNumber = error['row-number'] || 0
        const values = [null, ...((rowNumber === 0) ? this.table.headers : error.row)]
        const headers = [null, ...this.table.headers]
        // Initial
        if (!rows[rowNumber]) rows[rowNumber] = {values: [], badcols: [], errors: []}
        // Values
        if (error.code === 'blank-row') {
          rows[rowNumber].values = headers.map(() => '')
        } else {
          rows[rowNumber].values = values
          if (error.code === 'missing-value') {
            rows[rowNumber].values[error['column-number']] = ''
          }
        }
        // Badcols
        if (!error['column-number']) {
          const base = (error.code === 'blank-row') ? headers : values
          rows[rowNumber].badcols = base.map((value, index) => index).filter(Boolean)
        } else {
          rows[rowNumber].badcols.push(error['column-number'])
        }
        // Errors
        rows[rowNumber].errors.push(error)
      }
      return rows
    },
  },
  methods: {
    toggleExpandedRow(rowNumber) {
      if (this.expandedRows.includes(rowNumber)) {
        this.expandedRows = this.expandedRows.filter(value => value !== rowNumber)
      } else {
        this.expandedRows.push(rowNumber)
      }
    },
  },
}
</script>

<template>
<div>
  <table class="values">
    <tbody>
      <template v-for="(row, rowNumber) of rows" v-if="row">
        <tr @click="toggleExpandedRow(rowNumber)">
          <td class="row-number">{{ rowNumber || 'H' }}</td>
          <td v-for="(value, colNumber) of row.values" v-if="colNumber"
              :class="{error: row.badcols.includes(colNumber)}">
            {{ value }}
          </td>
        </tr>
        <tr v-if="expandedRows.includes(rowNumber)">
          <td class="errors" colspan="100%">
            <div v-for="error of row.errors">
              [{{ error['column-number'] || '-' }}] {{ error.message }}
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <p class="help">*click on a row to see errors</p>
</div>
</template>
