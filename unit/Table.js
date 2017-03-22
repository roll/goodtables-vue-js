import {should} from 'chai'
import {mount} from 'avoriaz'
import Table from '../src/Table.vue'
import ErrorGroup from '../src/ErrorGroup.vue'
const report = require('../data/report.json')
should()

// Tests

describe('Table', () => {

  it('should contain ErrorGroup component', () => {
    const propsData = {table: report.tables[0]}
    const wrapper = mount(Table, {propsData})
    wrapper.find(ErrorGroup).should.has.length(6)
    wrapper.find(ErrorGroup)[0].propsData().errorGroup.name.should.equal('blank-header')
    wrapper.find(ErrorGroup)[0].propsData().errorGroup.type.should.equal('type')
    wrapper.find(ErrorGroup)[0].propsData().errorGroup.count.should.equal(1)
  })

})
