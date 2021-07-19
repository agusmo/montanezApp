import { mockData } from "../../screens/data/FlatlistFoodData";

const INITIAL_STATE = {
  list: mockData,
  filteredDrinks: [],
};

const BakeryReducer = (state = INITIAL_STATE, action) => {
  return { ...state };
};

export default BakeryReducer;
