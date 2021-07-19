export const SELECT_CAFE = "SELECT_CAFE";

export const FILTER_CAFE = "FILTER_CAFE"

export const selectCafe = (id) => ([{
    type: SELECT_CAFE,
    cafeID: id
}])

export const filterCafe = (id) => [
  {
    type: FILTER_CAFE,
    categoryID: id,
  },
];
