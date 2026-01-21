"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var matruLogo_1 = require("../../assets/svgs/matruLogo");
var safeAreaWrapper_1 = require("../../components/safeAreaWrapper");
var colors_1 = require("../../styles/colors");
var responsiveness_1 = require("../../utilities/responsiveness");
var header_1 = require("../common/components/header");
var client_1 = require("@apollo/client");
var client_2 = require("../../Feature/client");
var Home = function (_a) {
    var navigation = _a.navigation;
    var _b = (0, react_1.useState)([]), allFAQs = _b[0], setAllFAQs = _b[1];
    var query = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query {\n      allFaq\n    }\n  "], ["\n    query {\n      allFaq\n    }\n  "])));
    var getAllFaqs = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client_2.client.query({
                            query: query,
                            fetchPolicy: 'no-cache'
                        })];
                case 1:
                    data = (_a.sent()).data;
                    setAllFAQs(JSON.parse(data.allFaq));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        getAllFaqs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<react_native_1.View style={styles.mainContainer}>
      <safeAreaWrapper_1["default"]>
        <header_1["default"] navigation={navigation} title="About Us"/>
        {/* <ScrollView style={styles.container}> */}
        <react_native_1.View style={styles.container}>
          <react_native_1.View>
            <react_native_1.View style={styles.logoContainer}>
              <matruLogo_1["default"] height={(0, responsiveness_1.ms)(100)} width={(0, responsiveness_1.ms)(100)}/>
              <react_native_1.Text style={styles.tagLineText}>
                Bringing{' '}
                <react_native_1.Text style={{ color: colors_1["default"].textSecondary3 }}>Home</react_native_1.Text> to
                you
              </react_native_1.Text>
            </react_native_1.View>
            <react_native_1.Text style={styles.text1}>
              <react_native_1.Text style={styles.firstWord}>Matru</react_native_1.Text> is a unique platform
              where you can find your favorite Mithai and Namkeen, the exact
              same taste from the exact same shop .
            </react_native_1.Text>
            <react_native_1.Text style={styles.text2}>
              With Matru, you can relive the enjoyable experience of visiting
              your trusted shop for these treats, all from the comfort of your
              own home.
            </react_native_1.Text>
          </react_native_1.View>
          <react_native_1.View style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <react_native_1.Text style={{
            color: colors_1["default"].primary,
            fontSize: (0, responsiveness_1.fs)(14)
        }}>
              Version: 0.0.8
            </react_native_1.Text>
            <react_native_1.TouchableOpacity>
              <react_native_1.Text style={{
            color: colors_1["default"].primary,
            fontSize: (0, responsiveness_1.fs)(16),
            borderBottomWidth: 1,
            borderBottomColor: colors_1["default"].primary
        }}>
                Terms and Conditions
              </react_native_1.Text>
            </react_native_1.TouchableOpacity>
          </react_native_1.View>
        </react_native_1.View>
        {/* </ScrollView> */}
      </safeAreaWrapper_1["default"]>
    </react_native_1.View>);
};
exports["default"] = Home;
var styles = react_native_1.StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors_1["default"].backgroundWhite,
        height: '100%'
    },
    container: {
        paddingBottom: (0, responsiveness_1.vs)(100),
        height: '100%',
        paddingHorizontal: 16,
        justifyContent: 'space-between'
    },
    text1: {
        color: colors_1["default"].primary,
        fontSize: (0, responsiveness_1.fs)(16),
        fontFamily: 'Inter-Medium'
    },
    text2: {
        marginTop: 15,
        color: colors_1["default"].primary,
        fontSize: (0, responsiveness_1.fs)(16),
        fontFamily: 'Inter-Medium'
    },
    tagLineText: {
        color: colors_1["default"].primary,
        fontSize: (0, responsiveness_1.ms)(24),
        fontFamily: 'Inter-Medium',
        textAlign: 'center',
        marginTop: 15
    },
    firstWord: { fontSize: (0, responsiveness_1.fs)(24) },
    logoContainer: { marginVertical: (0, responsiveness_1.vs)(60), alignItems: 'center' }
});
var templateObject_1;
