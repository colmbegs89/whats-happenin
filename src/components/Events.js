import React from 'react'

//Example of how to make a basic json object array processor which outputs html
const processDataArray = (props) => {
  let eventInfo = props.eventInformation.map(function (data, i) {
    return (
      <div className='row'id={'event'+i}  key={i}>
        <h4 className='row'>{data.title}</h4>
        <img src={data.img} alt='test' className='row img-responsive col-lg-12 col-md-12 col-sm-12 col-xs-12'/>
        <p className='row col-lg-12 col-md-12 col-sm-12 col-xs-12'>{data.body}</p>
        <br />
      </div>
    )
  })
  return eventInfo
}

//how to use that processor
const Events = (props) => {
  return (
    <div id='events'>
      {processDataArray(props)}
    </div>
  )
}

export default Events
