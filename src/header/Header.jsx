import React from 'react'
import './Header.css'



function Header() {
  return (
    <>
     <nav className='navigation'>
        <a className='menu-link' href="/journal">journal</a> 
        <a className='menu-link' href="/about">about</a>
        <a className='menu-link' href="/">home</a>
    </nav>
    
    </>
  )
}

export default Header