import { createStore, combineReducers } from "redux";

import CategoryCafeReducer from "./reducers/category.cafe.reducer";
import CafeReducer from "./reducers/cafe.reducer";
import CategoryBakeryReducer from "./reducers/category.bakery.reducer";
import BakeryReducer from "./reducers/bakery.reducer"

const RootReducer = combineReducers({
  categoriesCafe: CategoryCafeReducer,
  cafe: CafeReducer,
  categoriesBakery: CategoryBakeryReducer,
  bakery: BakeryReducer,
});

export default createStore(RootReducer);
