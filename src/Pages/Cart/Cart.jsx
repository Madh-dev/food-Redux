import React from 'react'
import EmptyCart from '../../Components/Cart/EmptyCart/EmptyCart'
import Footer from '../../Components/Common/Footer/Footer'
import Logo from '../../Components/Common/Logo/Logo'
import { menuItemsData } from '../../Components/Common/Menu/data'
import Menu from '../../Components/Common/Menu/Menu'
import './cart.css'

const Cart = () => {
  return (
   <>
      <div className='cart-header'>
        <Logo />
      </div>
      <EmptyCart />
      <div className='orders'>

        <h1 className='orders-heading'>Your orders</h1>
        <div className='orders-menu'>
          <Menu list={menuItemsData} />
        </div>
        <h3 className='orders-total'>Your Total $23</h3>
      </div>
      <Footer />
    </>
  )
}

export default Cart