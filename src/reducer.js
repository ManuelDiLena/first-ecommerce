export const initialState = {
  cart: []
}

export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ITEM: 'REMOVE_ITEM',
}

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item]
      }
    case 'REMOVE_ITEM':
      const index = state.cart.findIndex((cartItem => cartItem.id === action.id))
      let newCart = [...state.cart]
      if (index >= 0) {
        newCart.splice(index, 1)
      }
      else {
        console.log('Cant remove item')
      }
      return {
        ...state,
        cart: newCart
      }
    default: return state
  }
}

export default reducer;