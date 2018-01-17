import React from 'react'
import ReactDOM from 'react-dom'
import Accommodation from './Accommodation'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('About', () => {
  it('About renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Accommodation />, div)
  })

  it('has a defined structure', () => {
    const wrapper = shallow(<Accommodation />)

    expect(wrapper.find('.Accommodation')).to.have.length(1)
    expect(wrapper.find('.container-fluid')).to.have.length(1)
    expect(wrapper.find('.bodyDiv')).to.have.length(1)
    expect(wrapper.find('.row')).to.have.length(5)
    expect(wrapper.find('footer')).to.have.length(1)
  })
})
