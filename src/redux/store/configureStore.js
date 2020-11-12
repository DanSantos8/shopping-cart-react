import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import products from '../reducers/products';
import cart from '../reducers/cart';

const middleware = getDefaultMiddleware();
const reducer = combineReducers({products, cart});
const store = configureStore({reducer, middleware});

export default store;