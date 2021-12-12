import { combineReducers } from "redux";
import auth from '../reducers/authReducer';
import loader from '../reducers/loaderReducer';
import products from '../reducers/products'
import categories from '../reducers/category'

export default combineReducers({
    auth,
    loader,
    products,
    categories,
})