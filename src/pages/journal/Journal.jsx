import React from 'react'
import './Journal.css'
import Foto from '../../images/IMAGE (2).png'
import Foto1 from '../../images/IMAGE (3).png'
import Foto2 from '../../images/IMAGE (4).png'



function Journal() {
  return (
    <>
    <h1 className='latest-articles'>latest articles</h1>
    <div className='jounal-images'>
        <img src={Foto} alt="" />
        <img src={Foto1} alt="" />
        <img src={Foto2} alt="" />
    </div>
    </>
  )
}

export default Journal