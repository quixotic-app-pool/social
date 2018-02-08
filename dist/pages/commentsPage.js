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

var TestPage = function (_wepy$page) {
  _inherits(TestPage, _wepy$page);

  function TestPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TestPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TestPage.__proto__ || Object.getPrototypeOf(TestPage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的评论',
      backgroundColor: '#6fe0e7',
      navigationBarBackgroundColor: '#6fe0e7',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myComments: [],
      currentPage: -1,
      user_id: ''
    }, _this.methods = {
      go: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function go() {
          return _ref2.apply(this, arguments);
        }

        return go;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TestPage, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(option) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // wepy.setNavigationBarTitle({title: option.topic})
                this.user_id = _wepy2.default.getStorageSync('UserId');
                //load notification list
                _context2.next = 3;
                return this.loadData();

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadData',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.myComments = [{
                  avatarUrl: '../assets/img/boy.jpeg',
                  nickName: '扎西德勒',
                  gender: 'male',
                  age: 25,
                  createdAt: '一小时前',
                  msg: '你想我说什么好呢，你好无聊'
                }, {
                  avatarUrl: '../assets/img/boy.jpeg',
                  nickName: '小叮当',
                  gender: 'female',
                  age: 22,
                  createdAt: '一小时前',
                  msg: '你想我说什么好呢，爱聊不聊'
                }, {
                  avatarUrl: '../assets/img/boy.jpeg',
                  nickName: '爱的狂想曲',
                  gender: 'male',
                  age: 30,
                  createdAt: '两小时前',
                  msg: '你想我说什么好呢，无聊呗'
                }];

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadData() {
        return _ref4.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: 'lower',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.loadData();

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function lower() {
        return _ref5.apply(this, arguments);
      }

      return lower;
    }()
  }, {
    key: 'upper',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function upper() {
        return _ref6.apply(this, arguments);
      }

      return upper;
    }()
  }]);

  return TestPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TestPage , 'pages/commentsPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzUGFnZS5qcyJdLCJuYW1lcyI6WyJUZXN0UGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteUNvbW1lbnRzIiwiY3VycmVudFBhZ2UiLCJ1c2VyX2lkIiwibWV0aG9kcyIsImdvIiwib3B0aW9uIiwiZ2V0U3RvcmFnZVN5bmMiLCJsb2FkRGF0YSIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwiZ2VuZGVyIiwiYWdlIiwiY3JlYXRlZEF0IiwibXNnIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQixTQUZWO0FBR1BDLG9DQUE4QixTQUh2QjtBQUlQQyw4QkFBd0IsT0FKakI7QUFLUEMsNkJBQXVCO0FBTGhCLEssUUFPVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsa0JBQVksRUFIUDtBQUlMQyxtQkFBYSxDQUFDLENBSlQ7QUFLTEMsZUFBUztBQUxKLEssUUErQ1BDLE8sR0FBVTtBQUNGQyxRQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs0RkF4Q0lDLE07Ozs7O0FBQ1o7QUFDQSxxQkFBS0gsT0FBTCxHQUFlLGVBQUtJLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBZjtBQUNBOzt1QkFDTSxLQUFLQyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdQLHFCQUFLUCxVQUFMLEdBQWtCLENBQ2hCO0FBQ0VRLDZCQUFXLHdCQURiO0FBRUVDLDRCQUFVLE1BRlo7QUFHRUMsMEJBQVEsTUFIVjtBQUlFQyx1QkFBSyxFQUpQO0FBS0VDLDZCQUFXLE1BTGI7QUFNRUMsdUJBQUs7QUFOUCxpQkFEZ0IsRUFTaEI7QUFDRUwsNkJBQVcsd0JBRGI7QUFFRUMsNEJBQVUsS0FGWjtBQUdFQywwQkFBUSxRQUhWO0FBSUVDLHVCQUFLLEVBSlA7QUFLRUMsNkJBQVcsTUFMYjtBQU1FQyx1QkFBSztBQU5QLGlCQVRnQixFQWlCaEI7QUFDRUwsNkJBQVcsd0JBRGI7QUFFRUMsNEJBQVUsT0FGWjtBQUdFQywwQkFBUSxNQUhWO0FBSUVDLHVCQUFLLEVBSlA7QUFLRUMsNkJBQVcsTUFMYjtBQU1FQyx1QkFBSztBQU5QLGlCQWpCZ0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBNEJNLEtBQUtOLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWxENkIsZUFBS08sSTs7a0JBQXRCM0IsUSIsImZpbGUiOiJjb21tZW50c1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RQYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTor4TorronLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyM2ZmUwZTcnLFxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjNmZlMGU3JyxcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgbXlDb21tZW50czogW10sXG4gICAgY3VycmVudFBhZ2U6IC0xLFxuICAgIHVzZXJfaWQ6ICcnXG4gIH1cbiAgYXN5bmMgb25Mb2FkIChvcHRpb24pIHtcbiAgICAvLyB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6IG9wdGlvbi50b3BpY30pXG4gICAgdGhpcy51c2VyX2lkID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJylcbiAgICAvL2xvYWQgbm90aWZpY2F0aW9uIGxpc3RcbiAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgfVxuIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgIHRoaXMubXlDb21tZW50cyA9IFtcbiAgICAge1xuICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgICAgIG5pY2tOYW1lOiAn5omO6KW/5b635YuSJyxcbiAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgICBhZ2U6IDI1LFxuICAgICAgIGNyZWF0ZWRBdDogJ+S4gOWwj+aXtuWJjScsXG4gICAgICAgbXNnOiAn5L2g5oOz5oiR6K+05LuA5LmI5aW95ZGi77yM5L2g5aW95peg6IGKJ1xuICAgICB9LFxuICAgICB7XG4gICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsXG4gICAgICAgbmlja05hbWU6ICflsI/lj67lvZMnLFxuICAgICAgIGdlbmRlcjogJ2ZlbWFsZScsXG4gICAgICAgYWdlOiAyMixcbiAgICAgICBjcmVhdGVkQXQ6ICfkuIDlsI/ml7bliY0nLFxuICAgICAgIG1zZzogJ+S9oOaDs+aIkeivtOS7gOS5iOWlveWRou+8jOeIseiBiuS4jeiBiidcbiAgICAgfSxcbiAgICAge1xuICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgICAgIG5pY2tOYW1lOiAn54ix55qE54uC5oOz5puyJyxcbiAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgICBhZ2U6IDMwLFxuICAgICAgIGNyZWF0ZWRBdDogJ+S4pOWwj+aXtuWJjScsXG4gICAgICAgbXNnOiAn5L2g5oOz5oiR6K+05LuA5LmI5aW95ZGi77yM5peg6IGK5ZGXJ1xuICAgICB9XG4gICBdXG4gfVxuIGFzeW5jIGxvd2VyICgpIHtcbiAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuIH1cbiBhc3luYyB1cHBlciAoKSB7XG5cbiB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgZ28gKCkge1xuICAgIH1cbiAgfVxufVxuIl19