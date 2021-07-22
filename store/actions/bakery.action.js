export const SELECT_BAKERY = "SELECT_BAKERY";

export const FILTER_BAKERY = "FILTER_BAKERY";

export const selectBakery = (id) => ([
  {
    type: SELECT_BAKERY,
    bakeryID: id
  }
])

export const filterBakery = (id) => (
  {
    type: FILTER_BAKERY,
    categoryID: id,
  })
