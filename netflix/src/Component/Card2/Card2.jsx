import './Card2.css'
import React from 'react'

const Card2 = ({title,icon}) => {
  return (
<>
<div className='card2'>
    <h1 className='card2-h1'>{title}</h1>
    <div className="card2-icon">{icon}</div>
</div>
</>
  )
}

export default Card2
