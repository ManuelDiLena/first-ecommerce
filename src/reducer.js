export const initialState = {
  cart: [],
  user: null,
}

export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ITEM: 'REMOVE_ITEM',
  SET_USER: 'SET_USER',
  EMPTY_CART: 'EMPTY_CART'
}

// Function to add the prices of the products
export const getCartTotal = (cart) => {
  const totalPrice = cart?.reduce((acc, item) => acc + item.price, 0)
  return totalPrice
}

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
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
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'EMPTY_CART':
      return {
        ...state,
        cart: action.cart
      }
    default: return state
  }
}

export default reducer;