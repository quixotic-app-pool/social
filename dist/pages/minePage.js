'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _util = require('./../utils/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MinePage = function (_wepy$page) {
  _inherits(MinePage, _wepy$page);

  function MinePage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MinePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MinePage.__proto__ || Object.getPrototypeOf(MinePage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '自个儿',
      enablePullDownRefresh: false
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      lang: '',
      user_id: '',
      info: {}
    }, _this.methods = {
      about: function about() {
        // wepy.navigateTo({
        //   url: "about"
        // })
      },
      go: function go(type) {
        // wepy.navigateTo({
        //   url: "userList?type=" + type + '&user_id=' + this.user_id
        // })
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MinePage, [{
    key: 'onLoad',
    value: function onLoad(option) {}
    // onShow () {
    // }

  }, {
    key: 'onReady',
    value: function onReady() {}
  }]);

  return MinePage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MinePage , 'pages/minePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmVQYWdlLmpzIl0sIm5hbWVzIjpbIk1pbmVQYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJsYW5nIiwidXNlcl9pZCIsImluZm8iLCJtZXRob2RzIiwiYWJvdXQiLCJnbyIsInR5cGUiLCJvcHRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxlQUFTLEVBSko7QUFLTEMsWUFBTTtBQUxELEssUUFjUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0M7QUFDUDtBQUNBO0FBQ0E7QUFDRCxPQUxPO0FBTVJDLFFBTlEsY0FNSkMsSUFOSSxFQU1FO0FBQ1I7QUFDQTtBQUNBO0FBQ0Q7QUFWTyxLOzs7OzsyQkFQRkMsTSxFQUFRLENBRWY7QUFDRDtBQUNBOzs7OzhCQUNVLENBQ1Q7Ozs7RUFsQm1DLGVBQUtDLEk7O2tCQUF0QmxCLFEiLCJmaWxlIjoibWluZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmVQYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoh6rkuKrlhL8nLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2VcbiAgfVxuICBkYXRhID0ge1xuICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgIGxhbmc6ICcnLFxuICAgIHVzZXJfaWQ6ICcnLFxuICAgIGluZm86IHt9XG4gIH1cbiAgb25Mb2FkIChvcHRpb24pIHtcblxuICB9XG4gIC8vIG9uU2hvdyAoKSB7XG4gIC8vIH1cbiAgb25SZWFkeSgpIHtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGFib3V0ICgpIHtcbiAgICAgIC8vIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAvLyAgIHVybDogXCJhYm91dFwiXG4gICAgICAvLyB9KVxuICAgIH0sXG4gICAgZ28gKHR5cGUpIHtcbiAgICAgIC8vIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAvLyAgIHVybDogXCJ1c2VyTGlzdD90eXBlPVwiICsgdHlwZSArICcmdXNlcl9pZD0nICsgdGhpcy51c2VyX2lkXG4gICAgICAvLyB9KVxuICAgIH1cbiAgfVxufVxuIl19