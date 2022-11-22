import React from 'react'
import './logo.css'
import logo from './log2.png'

const Logo = () => {
  return (
    <div className='logo'>
        <div >
            <img src={logo} alt='logo' />
            <span><b>Tasty food</b></span>
        </div>
        <p>
            <b>Restaurant & BBQ</b>
        </p>
    </div>
  )
}

export default Logo