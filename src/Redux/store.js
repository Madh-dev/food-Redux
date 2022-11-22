import { legacy_createStore as createStore,applyMiddleware,compose } from "redux";
import persistStore from "redux-persist/lib/persistStore";
// import { persistStore } from "redux-persist";
import foodReducer from './foodReducer'


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(foodReducer,composeEnhancers(applyMiddleware()));

const persistor = persistStore(store);

export {store,persistor};
