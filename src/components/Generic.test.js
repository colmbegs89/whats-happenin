import React from 'react'
import ReactDOM from 'react-dom'
import Generic from './Generic'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('Generic', () => {
  it('Generic renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Generic />, div)
  })

  it('has a defined structure', () => {
    const wrapper = shallow(<Generic body='test' title='Generic'/>)

    expect(wrapper.find('.Generic')).to.have.length(1)
    expect(wrapper.find('.container-fluid')).to.have.length(1)
    expect(wrapper.find('.Generic')).to.have.length(1)
    expect(wrapper.find('.row')).to.have.length(3)
    expect(wrapper.find('footer')).to.have.length(1)
  })
})
