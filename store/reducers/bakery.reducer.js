import { mockData } from "../../screens/data/FlatlistFoodData";
import { FILTER_BAKERY, SELECT_BAKERY } from "../actions/bakery.action";

const INITIAL_STATE = {
  list: mockData,
  filteredBakery: [],
  selected: null,
};

const BakeryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_BAKERY:
      return {
        ...state,
        selected: state.list.find((bakery) => bakery.id === action.bakeryID),
      };
    case FILTER_BAKERY:
      return {
        ...state,
        filteredBakery: state.list.filter(
          (bakery) => bakery.category === action.categoryID
        ),
      };
    default:
      return { ...state };
  }
};

export default BakeryReducer;
