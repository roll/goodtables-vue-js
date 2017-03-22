import {should} from 'chai'
import {mount} from 'avoriaz'
import Report from '../src/Report.vue'
import Table from '../src/Table.vue'
const report = require('../data/report.json')
should()

// Tests

describe('Report', () => {

  it('should contain Table component', () => {
    const propsData = {report}
    const wrapper = mount(Report, {propsData})
    wrapper.find(Table).should.has.length(1)
    wrapper.find(Table)[0].propsData().table.valid.should.be.false
    wrapper.find(Table)[0].propsData().tableNumber.should.be.equal(1)
    wrapper.find(Table)[0].propsData().tablesCount.should.be.equal(2)
  })

})
