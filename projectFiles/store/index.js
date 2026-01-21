"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var cartSlice_1 = require("./slices/cartSlice");
var store = (0, toolkit_1.configureStore)({
    reducer: {
        cart: cartSlice_1["default"].reducer
    }
});
exports["default"] = store;
