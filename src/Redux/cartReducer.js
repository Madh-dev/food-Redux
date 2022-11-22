import { CartActionTypes } from "./cartactionTypes";
import { addItemToCart,removeItemFromCart } from "./cartUtils";


const InitialState={
    cartItems:[]  
};

const cartReducer=(state=InitialState,action)=>{
    switch(action.type){
        case CartActionTypes.CART_ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload),
            }
            case CartActionTypes.CART_REMOVE_ITEM:
                return{
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems,action.payload),
                }
                default: return state;
                
    }
};

export default cartReducer;