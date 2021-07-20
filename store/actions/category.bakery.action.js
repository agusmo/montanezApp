export const SELECT_BAKERY_CATEGORY = "SELECT_BAKERY_CATEGORY";

export const selectBakeryCategory = (id) => ({
  type: SELECT_BAKERY_CATEGORY,
  categoryID: id,
});
