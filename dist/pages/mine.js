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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      navigationBarTitleText: '',
      backgroundColor: '#3FC5F4',
      navigationBarBackgroundColor: '#3FC5F4',
      navigationBarTextStyle: 'white',
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
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        var lang, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(option)
                this.user_id = _wepy2.default.getStorageSync('UserId');
                lang = _wepy2.default.getStorageSync('lang');

                if (lang && lang === 'EN') {
                  this.lang = 'EN';
                  _wepy2.default.setNavigationBarTitle({ title: 'Mine' });
                } else {
                  this.lang = '中文';
                  _wepy2.default.setNavigationBarTitle({ title: '我的' });
                }

                // TODO: user info
                _context.next = 5;
                return _api2.default.userInfo({
                  query: {
                    user_id: this.user_id
                  }
                });

              case 5:
                res = _context.sent;

                if (res.data && res.data.flag == 'success') {
                  this.info = res.data.data;
                  this.info.lv = _util2.default.calLevel(this.info.points);
                  this.$apply();
                  // console.log('info: ' + JSON.stringify(res.data.data));
                }

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow(_x) {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
    // onShow () {
    // }

  }, {
    key: 'onReady',
    value: function onReady() {}
  }]);

  return MinePage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MinePage , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZVBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwic2NyZWVuV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwic2NyZWVuSGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwibGFuZyIsInVzZXJfaWQiLCJpbmZvIiwibWV0aG9kcyIsImFib3V0IiwiZ28iLCJ0eXBlIiwib3B0aW9uIiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInVzZXJJbmZvIiwicXVlcnkiLCJyZXMiLCJmbGFnIiwibHYiLCJjYWxMZXZlbCIsInBvaW50cyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixFQURqQjtBQUVQQyx1QkFBaUIsU0FGVjtBQUdQQyxvQ0FBOEIsU0FIdkI7QUFJUEMsOEJBQXdCLE9BSmpCO0FBS1BDLDZCQUF1QjtBQUxoQixLLFFBT1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxlQUFTLEVBSko7QUFLTEMsWUFBTTtBQUxELEssUUFvQ1BDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNDO0FBQ1A7QUFDQTtBQUNBO0FBQ0QsT0FMTztBQU1SQyxRQU5RLGNBTUpDLElBTkksRUFNRTtBQUNSO0FBQ0E7QUFDQTtBQUNEO0FBVk8sSzs7Ozs7OzJGQTdCSUMsTTs7Ozs7O0FBQ1o7QUFDQSxxQkFBS04sT0FBTCxHQUFlLGVBQUtPLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBZjtBQUNJUixvQixHQUFPLGVBQUtRLGNBQUwsQ0FBb0IsTUFBcEIsQzs7QUFDWCxvQkFBSVIsUUFBUUEsU0FBUyxJQUFyQixFQUEyQjtBQUN6Qix1QkFBS0EsSUFBTCxHQUFZLElBQVo7QUFDQSxpQ0FBS1MscUJBQUwsQ0FBMkIsRUFBQ0MsT0FBTyxNQUFSLEVBQTNCO0FBQ0QsaUJBSEQsTUFHTztBQUNMLHVCQUFLVixJQUFMLEdBQVksSUFBWjtBQUNBLGlDQUFLUyxxQkFBTCxDQUEyQixFQUFDQyxPQUFPLElBQVIsRUFBM0I7QUFDRDs7QUFFRDs7dUJBQ2dCLGNBQUlDLFFBQUosQ0FBYTtBQUMzQkMseUJBQU87QUFDSFgsNkJBQVMsS0FBS0E7QUFEWDtBQURvQixpQkFBYixDOzs7QUFBWlksbUI7O0FBS0osb0JBQUdBLElBQUluQixJQUFKLElBQVltQixJQUFJbkIsSUFBSixDQUFTb0IsSUFBVCxJQUFpQixTQUFoQyxFQUEyQztBQUN6Qyx1QkFBS1osSUFBTCxHQUFZVyxJQUFJbkIsSUFBSixDQUFTQSxJQUFyQjtBQUNBLHVCQUFLUSxJQUFMLENBQVVhLEVBQVYsR0FBZSxlQUFLQyxRQUFMLENBQWMsS0FBS2QsSUFBTCxDQUFVZSxNQUF4QixDQUFmO0FBQ0EsdUJBQUtDLE1BQUw7QUFDQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUg7QUFDQTs7Ozs4QkFDVSxDQUNUOzs7O0VBM0NtQyxlQUFLQyxJOztrQkFBdEJoQyxRIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmVQYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMzRkM1RjQnLFxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjM0ZDNUY0JyxcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2VcbiAgfVxuICBkYXRhID0ge1xuICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgIGxhbmc6ICcnLFxuICAgIHVzZXJfaWQ6ICcnLFxuICAgIGluZm86IHt9XG4gIH1cbiAgYXN5bmMgb25TaG93IChvcHRpb24pIHtcbiAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pXG4gICAgdGhpcy51c2VyX2lkID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJylcbiAgICB2YXIgbGFuZyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2xhbmcnKVxuICAgIGlmIChsYW5nICYmIGxhbmcgPT09ICdFTicpIHtcbiAgICAgIHRoaXMubGFuZyA9ICdFTidcbiAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogJ01pbmUnfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYW5nID0gJ+S4reaWhydcbiAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogJ+aIkeeahCd9KVxuICAgIH1cblxuICAgIC8vIFRPRE86IHVzZXIgaW5mb1xuICAgIHZhciByZXMgPSBhd2FpdCBhcGkudXNlckluZm8oe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgICB1c2VyX2lkOiB0aGlzLnVzZXJfaWRcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICB0aGlzLmluZm8gPSByZXMuZGF0YS5kYXRhXG4gICAgICB0aGlzLmluZm8ubHYgPSB1dGlsLmNhbExldmVsKHRoaXMuaW5mby5wb2ludHMpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyBjb25zb2xlLmxvZygnaW5mbzogJyArIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKTtcbiAgICB9XG4gIH1cbiAgLy8gb25TaG93ICgpIHtcbiAgLy8gfVxuICBvblJlYWR5KCkge1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYWJvdXQgKCkge1xuICAgICAgLy8gd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgIC8vICAgdXJsOiBcImFib3V0XCJcbiAgICAgIC8vIH0pXG4gICAgfSxcbiAgICBnbyAodHlwZSkge1xuICAgICAgLy8gd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgIC8vICAgdXJsOiBcInVzZXJMaXN0P3R5cGU9XCIgKyB0eXBlICsgJyZ1c2VyX2lkPScgKyB0aGlzLnVzZXJfaWRcbiAgICAgIC8vIH0pXG4gICAgfVxuICB9XG59XG4iXX0=