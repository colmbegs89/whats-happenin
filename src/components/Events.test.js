import React from 'react'
import ReactDOM from 'react-dom'
import Events from './Events'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Events from './Events.js'

import events1 from '../img/Jazz.jpg'

describe('Events', () => {
  const eventsData = [
    {
      title:'Derry City Travelodge Events',
      body: "The Derry Travelodge is centrally located in  the heart of the city with views of the River Foyle. Our Events is situated on  Strand Street which is popular for nightlife, restaurants, shopping and minutes’  walk from Derry City’s many attractions",
      telephone:'+44 (0)870 1 911 733', 
      email:'derry@travelodge.ie',
      web:'http://www.travelodge.ie/Eventss/225/Derry-Events',
      image: events1
    }
  ]
  it('Events renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Events EventsInformation={eventsData} />, div)
  })

  it('has a defined structure', () => {
    const wrapper = shallow(<Events EventsInformation={eventsData}/>)
    expect(wrapper.find('#Events')).to.have.length(1)
    expect(wrapper.find('.row')).to.have.length(1)
  })
})
