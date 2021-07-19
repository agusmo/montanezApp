import  mockData  from "../../screens/data/FlatListDrinksData";
import { SELECT_CAFE, FILTER_CAFE } from "../actions/cafe.action";

const INITIAL_STATE = {
  list: mockData,
  filteredCafe: [],
  selected: null,
};

const CafeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SELECT_CAFE:
        return {
          ...state,
          selected: state.list.find((cafe) => cafe.id === action.cafeID),
        };
      case FILTER_CAFE:
        return {
          ...state,
          filteredCafe: state.list.filter(
            (cafe) => cafe.category === action.categoryID
          ),
        };
      default:
        return { ...state };
    }
};

export default CafeReducer;
