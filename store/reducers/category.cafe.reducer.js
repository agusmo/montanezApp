import categories from "../../screens/data/CategoriesCafeData";
import { SELECT_CAFE_CATEGORY } from "../actions/category.cafe.action";



const INITIAL_STATE = {
  list: categories,
  selected: null,
};

const CategoryCafeReducer = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CAFE_CATEGORY:
      const categoryIndex = state.list.findIndex(
        cat => cat.id === action.categoryID
      );
      if (categoryIndex === -1) return { ...state };
      return {
        ...state,
        selected: state.list[categoryIndex],
      };
    default:
      return { ...state };
  }
}

export default CategoryCafeReducer