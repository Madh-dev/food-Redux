import React from 'react'
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem/ButtonAddRemoveItem'
import './menuitem.css'
import { createStructuredSelector } from 'reselect/es'
import { selectCartItemsCount,selectCartItems } from '../../../../Redux/cartSelector'
import { cartAddItem,cartRemoveItem} from '../../../../Redux/cartAction'
import { connect } from 'react-redux'


const MenuItems = ({ item,cartCount,cartList,cartAddItem,cartRemoveItem }) => {
    const { id, name, info, price, img } = item;

const handleItemQuantity = () =>{
    let quantity =0;
    if(cartCount !== 0){
        const foundItemInCart = cartList.find(item => item.id === id);

        if(foundItemInCart){
            quantity = foundItemInCart.quantity;
        }
    }
    return quantity;
}


    return (
        <div className='item' key={id}>
            <img src={img} alt='item' />
            <div className='item-head_desc'>
                <p className='head_desc-name'>{name}</p>
                <p className='head_desc-info'>
                    <small>{info}</small>
                </p>
            </div>
            <div className='item-foot_desc'>
                <span className='foot_desc-price'>${price} </span>
               <ButtonAddRemoveItem
                quantity={handleItemQuantity()} 
                handleAddItem = {()=>cartAddItem(item)}
                handleRemoveItem = {()=>cartRemoveItem(item)}
                />
            </div>
        </div>
    )
}


const mapStateToProps = createStructuredSelector(
    {
      cartCount: selectCartItemsCount,
      cartList: selectCartItems,
    }
  );
  const mapDispatchToProps = dispatch=>({
    cartAddItem: (item)=> dispatch(cartAddItem(item)),
    cartRemoveItem: (item)=> dispatch(cartRemoveItem(item)),
  })
 
export default connect(mapStateToProps,mapDispatchToProps)(MenuItems)