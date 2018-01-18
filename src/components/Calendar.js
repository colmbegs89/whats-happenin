import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react'
import eventDates from '../eventDates';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const Calendar = props => (
  <BigCalendar
    {...props}
    events={eventDates}
    views={{ month: true, agenda: true }}
    step={60}
    defaultDate={new Date(2018, 0, 18)}
  />
)


export default Calendar
