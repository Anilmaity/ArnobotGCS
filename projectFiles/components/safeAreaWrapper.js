"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SafeAreaWrapper = function (_a) {
    var children = _a.children;
    return (<>
      <react_native_1.SafeAreaView style={styles.style1}/>
      <react_native_1.SafeAreaView style={styles.style2}>{children}</react_native_1.SafeAreaView>
      <react_native_1.SafeAreaView style={styles.style1}/>
    </>);
};
exports["default"] = SafeAreaWrapper;
var styles = react_native_1.StyleSheet.create({
    style1: { opacity: 0 },
    style2: { flex: 1 }
});
