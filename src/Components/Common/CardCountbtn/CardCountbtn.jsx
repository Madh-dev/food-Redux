import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CardCountbtn.css'

const CardCountbtn = ({cartCount}) => {

  const history = useNavigate();
  return (
    <div className='btnCartCount' onClick={()=>history('/cart')}>
       {cartCount >=100? '99+' : cartCount}
        <div className='count'>99+</div>
        <i className='fas fa-shopping-cart'></i>
        </div>
  )
}

export default CardCountbtn