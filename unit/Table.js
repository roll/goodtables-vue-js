import Vue from 'vue'
import Table from '../src/Table.vue'
const assert = require('chai').assert

// Tests

describe('Table', () => {

  it('should render table', () => {
    const vm = new Vue({
      template: '<div><report-table :table="table" /></div>',
      data: {
        table: {
          valid: true,
          source: 'table.csv',
          'row-count': 100,
          'error-count': 0,
        },
      },
      components: {
        'report-table': Table,
      },
    }).$mount()
    const html = vm.$el.innerHTML
    assert.include(html, 'table.csv')
    assert.include(html, '[100 rows/0 errors]')
  })

})
