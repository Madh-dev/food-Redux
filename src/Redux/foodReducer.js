
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer";

const persistConfig ={
    key: 'food-shop',
    storage,
    whitelist: ['cart']
}

const foodReducer = combineReducers({
    cart: cartReducer,
});





export default persistReducer(persistConfig,foodReducer);