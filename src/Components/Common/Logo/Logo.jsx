import React from 'react'
import './logo.css'
import logo from './log2.png'
import { useNavigate } from 'react-router-dom'

const Logo = () => {

const history = useNavigate()

  return (
    <div className='logo' onClick={()=>history('/')}>
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