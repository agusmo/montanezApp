export const SELECT_CAFE_CATEGORY = 'SELECT_CAFE_CATEGORY';

export const selectCafeCategory = (id) => ({
    type: SELECT_CAFE_CATEGORY,
    categoryID: id
})