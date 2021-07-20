import categories from "../../screens/data/CategoriesBakeryData";
import { SELECT_BAKERY_CATEGORY } from "../actions/category.bakery.action";



const INITIAL_STATE = {
  list: categories,
  selected: null,
};

const CategoryBakeryReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case SELECT_BAKERY_CATEGORY:
       const categoryIndex = state.list.findIndex(
         (cat) => cat.id === action.categoryID
       );
       if (categoryIndex === -1) return { ...state };
       return {
         ...state,
         selected: state.list[categoryIndex],
       };
     default:
       return { ...state };
   }
};

export default CategoryBakeryReducer;
