import React from 'react'
import ReactDOM from 'react-dom'
import About from './About'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('About', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<About />, div)
  })

  it('has a defined structure', () => {
    const wrapper = shallow(<About />)

    expect(wrapper.find('.About')).to.have.length(1)
    expect(wrapper.find('.container-fluid')).to.have.length(1)
    expect(wrapper.find('.bodyDiv')).to.have.length(1)
    expect(wrapper.find('.row')).to.have.length(5)
    expect(wrapper.find('footer')).to.have.length(1)
  })
})
