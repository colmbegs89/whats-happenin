import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('App', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('has a defined structure', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('.App')).to.have.length(1)
    expect(wrapper.find('.container-fluid')).to.have.length(2)
    expect(wrapper.find('#body')).to.have.length(1)
    expect(wrapper.find('.row')).to.have.length(4)
    expect(wrapper.find('footer')).to.have.length(1)
  })
})
