import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalAmount: 0,
  },
  reducers: {
    initializeCart(state, action) {
      const cartData = action.payload
      state.itemsList = cartData
      // state.totalAmount = cartData[cartData.length - 1].totalAmount
      // state.customerid = cartData[0].customerid
      // state.username = cartData[0].username
      // console.log('cartData', action.payload)
    },

    addToCart(state, action) {
      const newItem = action.payload
      let existingItem = state.itemsList.find(
        (item) => item.CId === newItem.CId,
      )

      if (!existingItem) {
        state.itemsList.push({ ...newItem })
      } else {
        existingItem.Quantity += newItem.Quantity
      }
    },

    removeFromCart(state, action) {
      const newItem = action.payload
      const existingItem = state.itemsList.find(
        (item) => item.CId === newItem.CId,
      )
      if (existingItem) {
        if (existingItem?.Quantity === 1) {
          existingItem.Quantity--
          state.itemsList = state.itemsList.filter(
            (item) => item.CId !== newItem.CId,
          )
        } else {
          existingItem.Quantity--
        }
      }
    },

    placeOrder(state, action) {
      state.itemsList = []
    },

    clearCart(state) {
      state.itemsList = []
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice
