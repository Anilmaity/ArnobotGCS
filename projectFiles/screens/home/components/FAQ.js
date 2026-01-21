"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var responsiveness_1 = require("../../../utilities/responsiveness");
var rightChevron_1 = require("../../../assets/svgs/rightChevron");
var dropDownIcon_1 = require("../../../assets/svgs/dropDownIcon");
var colors_1 = require("../../../styles/colors");
var Collapsible = function (_a) {
    var que = _a.que, ans = _a.ans;
    var _b = (0, react_1.useState)(true), isCollapsed = _b[0], setIsCollapsed = _b[1];
    var toggleCollapse = function () {
        setIsCollapsed(!isCollapsed);
    };
    return (<>
      <react_native_1.View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <react_native_1.Pressable style={styles.container} onPress={toggleCollapse}>
          <react_native_1.View style={styles.header}>
            <react_native_1.Text style={styles.headerText}>{que}</react_native_1.Text>
            <react_native_1.View style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: (0, responsiveness_1.ms)(8),
            backgroundColor: 'transparent'
        }}>
              {!isCollapsed ? <dropDownIcon_1["default"] /> : <rightChevron_1["default"] />}
            </react_native_1.View>
          </react_native_1.View>
        </react_native_1.Pressable>
        {!isCollapsed && (<react_native_1.View style={styles.body}>
            <react_native_1.Text>{ans}</react_native_1.Text>
          </react_native_1.View>)}
      </react_native_1.View>
    </>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: COLORS.backgroundWhite,
        paddingVertical: (0, responsiveness_1.ms)(5),
        borderRadius: (0, responsiveness_1.ms)(8)
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors_1["default"].backgroundWhite,
        padding: (0, responsiveness_1.ms)(10),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 3,
        borderRadius: (0, responsiveness_1.ms)(8)
    },
    headerText: {
        fontSize: (0, responsiveness_1.fs)(14),
        width: (0, responsiveness_1.hs)(290),
        color: colors_1["default"].textSecondary3
    },
    body: {
        padding: (0, responsiveness_1.ms)(10),
        color: colors_1["default"].textSecondary3,
        backgroundColor: colors_1["default"].background5 + '70',
        fontSize: (0, responsiveness_1.fs)(14),
        borderRadius: (0, responsiveness_1.ms)(8),
        // marginRight: hs(10),
        width: (0, responsiveness_1.hs)(325),
        marginBottom: (0, responsiveness_1.vs)(10)
    }
});
exports["default"] = Collapsible;
