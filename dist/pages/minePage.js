'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      navigationBarTitleText: '自个儿',
      navigationBarTextStyle: 'black',
      navigationBarBackgroundColor: '#ffffff',
      enablePullDownRefresh: false
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      user_id: '',
      myData: {}
    }, _this.methods = {
      go: function go(page) {
        _wepy2.default.navigateTo({
          url: page
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MinePage, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loadData();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: load data
                // var res = await api.userInfo({
                //   pack: {
                //     _id: _id
                //   }
                // })
                // if(res.data && res.data.flag == 'success') {
                //   this.myData = res.data.data
                // }

                this.myData = {
                  avatarUrl: '',
                  nickName: '扎西德勒',
                  subscribedNum: '233',
                  subscribeNum: '122',
                  postsNum: '12',
                  commentsNum: '32'
                };

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _ref3.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: 'onReady',
    value: function onReady() {}
  }]);

  return MinePage;
}(_wepy2.default.page);

exports.default = MinePage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmVQYWdlLmpzIl0sIm5hbWVzIjpbIk1pbmVQYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsInVzZXJfaWQiLCJteURhdGEiLCJtZXRob2RzIiwiZ28iLCJwYWdlIiwibmF2aWdhdGVUbyIsInVybCIsIm9wdGlvbiIsImxvYWREYXRhIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJzdWJzY3JpYmVkTnVtIiwic3Vic2NyaWJlTnVtIiwicG9zdHNOdW0iLCJjb21tZW50c051bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyxvQ0FBOEIsU0FIdkI7QUFJUEMsNkJBQXVCO0FBSmhCLEssUUFNVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsZUFBUyxFQUhKO0FBSUxDLGNBQVE7QUFKSCxLLFFBK0JQQyxPLEdBQVU7QUFDUkMsUUFEUSxjQUNKQyxJQURJLEVBQ0U7QUFDUix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLRjtBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs7MkZBekJJRyxNOzs7Ozs7dUJBQ04sS0FBS0MsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQUtQLE1BQUwsR0FBYztBQUNaUSw2QkFBVyxFQURDO0FBRVpDLDRCQUFVLE1BRkU7QUFHWkMsaUNBQWUsS0FISDtBQUlaQyxnQ0FBYyxLQUpGO0FBS1pDLDRCQUFVLElBTEU7QUFNWkMsK0JBQWE7QUFORCxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVNRLENBQ1Q7Ozs7RUFyQ21DLGVBQUtWLEk7O2tCQUF0QmhCLFEiLCJmaWxlIjoibWluZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmVQYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoh6rkuKrlhL8nLFxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2VcbiAgfVxuICBkYXRhID0ge1xuICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgIHVzZXJfaWQ6ICcnLFxuICAgIG15RGF0YToge31cbiAgfVxuICBhc3luYyBvbkxvYWQgKG9wdGlvbikge1xuICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICB9XG4gIGFzeW5jIGxvYWREYXRhKCkge1xuICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgIC8vIHZhciByZXMgPSBhd2FpdCBhcGkudXNlckluZm8oe1xuICAgIC8vICAgcGFjazoge1xuICAgIC8vICAgICBfaWQ6IF9pZFxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gICAgLy8gaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAvLyAgIHRoaXMubXlEYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgIC8vIH1cblxuICAgIHRoaXMubXlEYXRhID0ge1xuICAgICAgYXZhdGFyVXJsOiAnJyxcbiAgICAgIG5pY2tOYW1lOiAn5omO6KW/5b635YuSJyxcbiAgICAgIHN1YnNjcmliZWROdW06ICcyMzMnLFxuICAgICAgc3Vic2NyaWJlTnVtOiAnMTIyJyxcbiAgICAgIHBvc3RzTnVtOiAnMTInLFxuICAgICAgY29tbWVudHNOdW06ICczMidcbiAgICB9XG4gIH1cbiAgb25SZWFkeSgpIHtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdvIChwYWdlKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IHBhZ2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=