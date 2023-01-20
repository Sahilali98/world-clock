import React from 'react'

export default function ClockImage(props) {
  return (
    <div className='imageContainer' style={{height:50,width:50}}>
      <img src={props.ClockImage} alt="" />
    </div>
  )
}
