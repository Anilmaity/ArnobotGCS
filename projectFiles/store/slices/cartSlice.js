"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.cartActions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var cartSlice = (0, toolkit_1.createSlice)({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalAmount: 0
    },
    reducers: {
        initializeCart: function (state, action) {
            var cartData = action.payload;
            state.itemsList = cartData;
            // state.totalAmount = cartData[cartData.length - 1].totalAmount
            // state.customerid = cartData[0].customerid
            // state.username = cartData[0].username
            // console.log('cartData', action.payload)
        },
        addToCart: function (state, action) {
            var newItem = action.payload;
            var existingItem = state.itemsList.find(function (item) { return item.CId === newItem.CId; });
            if (!existingItem) {
                state.itemsList.push(__assign({}, newItem));
            }
            else {
                existingItem.Quantity += newItem.Quantity;
            }
        },
        removeFromCart: function (state, action) {
            var newItem = action.payload;
            var existingItem = state.itemsList.find(function (item) { return item.CId === newItem.CId; });
            if (existingItem) {
                if ((existingItem === null || existingItem === void 0 ? void 0 : existingItem.Quantity) === 1) {
                    existingItem.Quantity--;
                    state.itemsList = state.itemsList.filter(function (item) { return item.CId !== newItem.CId; });
                }
                else {
                    existingItem.Quantity--;
                }
            }
        },
        placeOrder: function (state, action) {
            state.itemsList = [];
        },
        clearCart: function (state) {
            state.itemsList = [];
        }
    }
});
exports.cartActions = cartSlice.actions;
exports["default"] = cartSlice;
