import React from 'react'
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem/ButtonAddRemoveItem'
import './menuitem.css'


const MenuItems = ({ item }) => {
    const { id, name, info, price, img } = item
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
               <ButtonAddRemoveItem quantity={0}/>
            </div>
        </div>
    )
}
 
export default MenuItems