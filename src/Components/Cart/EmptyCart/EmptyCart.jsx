import React from 'react'
import './emptycart.css'
import { useNavigate} from "react-router-dom";
import emptyCartImg from './logo.png'

const EmptyCart = () => {
    const history = useNavigate();
  return (
    <div className='emptyCart'>
       <img src={emptyCartImg}  alt='empty' />
        <button onClick={()=> history('/')}>
            <i className='fas fa-long-arrow-alt-left'></i>Shop Now
        </button>
        </div>
  )
}

export default EmptyCart