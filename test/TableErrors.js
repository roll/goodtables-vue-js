import Vue from 'vue'
import TableErrors from '../src/TableErrors.vue'
const assert = require('chai').assert

// Tests

describe('TableErrors', () => {

  it('should render table', () => {
    const vm = new Vue({
      template: '<div><table-errors :table="table" /></div>',
      data: {
        table: {
          errors: [
            {code: 'code', message: 'message', 'row-number': 1, 'col-number': 1},
          ],
        },
      },
      components: {
        'table-errors': TableErrors,
      },
    }).$mount()
    const html = vm.$el.innerHTML
    assert.include(html, '<th>Row</th>')
    assert.include(html, '<th>Col</th>')
    assert.include(html, '<th>Code</th>')
    assert.include(html, '<th>Message</th>')
    assert.include(html, '<td>1</td>')
    assert.include(html, '<td>1</td>')
    assert.include(html, '<td>code</td>')
    assert.include(html, '<td>message</td>')
  })

})
