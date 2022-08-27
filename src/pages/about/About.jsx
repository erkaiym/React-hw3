import React from 'react'
import './About.css'
import Circle from '.././../images/IMAGE (5).png'
import Circle1 from '../../images/IMAGE (6).png'
import Circle2 from '../../images/IMAGE (7).png'
import Circle3 from '../../images/IMAGE (8).png'



function About() {
  return (
    <>
    
    <div className='title'>
        <h1 className=''>

        </h1>
    </div>

    <div className='block1'>
     <p className='text-lt'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
     Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
     </p>

     <p className='text-lt'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
     Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
     </p>

     <p className='text-lt'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
     Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
     </p>

    </div>

    <div className='about-writer'>
    <h2 className='writer'>katie, Chicago</h2>
    <h2 className='writer'>katie, Chicago</h2>
    <h2 className='writer'>katie, Chicago</h2>

    </div>

    <div className='circle-images'>
        <img src={Circle} alt="" />
        <img src={Circle1} alt="" />
        <img src={Circle2} alt="" />
        <img src={Circle3} alt="" />
    </div>

    {/* <div className='block1'>
     <p className='text-lt'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
     Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
     </p>
     <h2 className='writer'>katie, Chicago</h2>
    </div>

    <div className='block1'>
     <p className='text-lt'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
     Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
     </p>
     <h2 className='writer'>katie, Chicago</h2>
    </div> */}
    
    </>
  )
}

export default About