import Vue from 'vue'
import Report from '../src/Report.vue'
const assert = require('chai').assert

// Tests

describe('Report', () => {

  it('should render table', () => {
    const vm = new Vue({
      template: '<div><goodtables-report :report="report" /></div>',
      data: {
        report: {
          valid: true,
          time: 0.01,
          'row-count': 100,
          'error-count': 0,
          tables: [
            {
              valid: true,
              source: 'table.csv',
              'row-count': 100,
              'error-count': 0,
            },
          ],
        },
      },
      components: {
        'goodtables-report': Report,
      },
    }).$mount()
    const html = vm.$el.innerHTML
    assert.include(html, 'Report')
  })

})
