import React from 'react'
import ReactDOM from 'react-dom'
import NewPage from './NewPage'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('NewPage', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewPage />, div)
  })

  it('has a defined structure', () => {
    const wrapper = shallow(<NewPage />)

    expect(wrapper.find('.NewPage')).to.have.length(1)
    expect(wrapper.find('.container-fluid')).to.have.length(1)
    expect(wrapper.find('.bodyDiv')).to.have.length(1)
    expect(wrapper.find('.row')).to.have.length(4)
    expect(wrapper.find('footer')).to.have.length(1)
  })
})
