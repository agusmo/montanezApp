import categories from "../../screens/data/CategoriesBakeryData";

const INITIAL_STATE = {
  list: categories,
  selected: null,
};

const CategoryBakeryReducer = (state = INITIAL_STATE, action) => {
  return { ...state };
};

export default CategoryBakeryReducer;
