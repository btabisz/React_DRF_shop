import { combineReducers, applyMiddleware } from 'redux';
// import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,

})

const initialState = {}

const middleware = [thunk]

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
const store = configureStore({reducer}, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store