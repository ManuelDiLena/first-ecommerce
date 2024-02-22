export const initialState = {
  cart: []
}

export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART'
}

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'ADD_TO_CART':
    return {
      ...state,
      cart: [...state.cart, action.item]
    }
    default: return state;
  }
}

export default reducer;