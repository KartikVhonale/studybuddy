import React from 'react'
import "../component/css/card.css"
function Card({str,str2,i}) {
  return (
    <>
    <div className='card'>
        <div className='image'>
            <img id="image1" src={i}/>
        </div>
        <div className='text'>
            <h1>{str}</h1>
            <p>{str2}</p>
        </div>
    </div><br/>
    </>
  )
}

export default Card