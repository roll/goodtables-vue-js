import Vue from 'vue'
import TableValues from '../src/TableValues.vue'
const assert = require('chai').assert

// Tests

describe('TableValues', () => {

  it('should render table', () => {
    const vm = new Vue({
      template: '<div><table-values :table="table" /></div>',
      data: {
        table: {
          headers: ['h1', 'h2'],
          errors: [
            {
              code: 'code',
              message: 'message',
              'row-number': 1,
              'col-number': 1,
              row: ['v1', 'v2'],
            },
          ],
        },
      },
      components: {
        'table-values': TableValues,
      },
    }).$mount()
    const html = vm.$el.innerHTML
    assert.include(html, 'v1')
    assert.include(html, 'v2')
  })

})
