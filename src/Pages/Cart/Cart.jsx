import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect/es'
import EmptyCart from '../../Components/Cart/EmptyCart/EmptyCart'
import Footer from '../../Components/Common/Footer/Footer'
import Logo from '../../Components/Common/Logo/Logo'
import Menu from '../../Components/Common/Menu/Menu'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../Redux/cartSelector'
import './cart.css'

const Cart = ({ cartCount, cartList, cartTotal }) => (
    <>
      <div className='cart-header'>
        <Logo />
      </div>
      {cartCount === 0 ? (
      <EmptyCart />
      ) :
      (
        <div className='orders'>

          <h1 className='orders-heading'>Your orders</h1>
          <div className='orders-menu'>
            <Menu list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total ${cartTotal}</h3>
        </div>)
      }
      <Footer />
    </>
);

const mapStateToProps = createStructuredSelector(
  {
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
    cartTotal: selectCartTotal,
  }
);


export default connect(mapStateToProps)(Cart)