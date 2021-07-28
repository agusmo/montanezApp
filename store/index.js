import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import CategoryCafeReducer from "./reducers/category.cafe.reducer";
import CafeReducer from "./reducers/cafe.reducer";
import CategoryBakeryReducer from "./reducers/category.bakery.reducer";
import BakeryReducer from "./reducers/bakery.reducer"
import CartReducer from "./reducers/cart.reducer";


const RootReducer = combineReducers({
  categoriesCafe: CategoryCafeReducer,
  cafe: CafeReducer,
  categoriesBakery: CategoryBakeryReducer,
  bakery: BakeryReducer,
  cart: CartReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));
