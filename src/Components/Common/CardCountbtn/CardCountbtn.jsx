import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CardCountbtn.css'
import { createStructuredSelector } from 'reselect/es'
import { selectCartItemsCount, } from '../../../Redux/cartSelector'
import { connect } from 'react-redux'




const CardCountbtn = ({cartCount}) => {

  const history = useNavigate();
  return (
    <div className='btnCartCount' onClick={()=>history('/cart')}>
        <div className='count'>{cartCount >=100? '99+' : cartCount}</div>
        <i className='fas fa-shopping-cart'></i>
        </div>
  )
}

const mapStateToProps = createStructuredSelector(
  {
    cartCount: selectCartItemsCount,
  }
);

export default connect(mapStateToProps)(CardCountbtn)