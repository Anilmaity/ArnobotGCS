"use strict";
exports.__esModule = true;
exports.fs = exports.ms = exports.vs = exports.hs = void 0;
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
var guidelineBaseWidth = 375;
var guidelineBaseHeight = 812;
var hs = function (size) { return (width / guidelineBaseWidth) * size; };
exports.hs = hs;
var vs = function (size) { return (height / guidelineBaseHeight) * size; };
exports.vs = vs;
var ms = function (size, factor) {
    if (factor === void 0) { factor = 0.8; }
    return size + (hs(size) - size) * factor;
};
exports.ms = ms;
var fs = function (size, factor) {
    if (factor === void 0) { factor = 0.8; }
    return size + (hs(size) - size) * factor;
};
exports.fs = fs;
