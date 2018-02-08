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
      navigationBarTitleText: '新消息',
      backgroundColor: '#6fe0e7',
      navigationBarBackgroundColor: '#6fe0e7',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      dataList: [],
      currentPage: -1,
      user_id: ''
    }, _this.methods = {
      go: function go(page) {
        _wepy2.default.navigateTo({ url: page });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TestPage, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // wepy.setNavigationBarTitle({title: option.topic})
                this.user_id = _wepy2.default.getStorageSync('UserId');
                //load notification list
                _context.next = 3;
                return this.loadData();

              case 3:
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
                this.dataList = [{
                  from_user: {
                    nickName: '扎西德勒',
                    avatarUrl: '../assets/img/boy.jpeg'
                  },
                  type: 'comment',
                  post: { value: '标题标题是啥？' },
                  unRead: true,
                  createdAt: '两分钟前'
                }, {
                  from_user: {
                    nickName: '小叮当',
                    avatarUrl: '../assets/img/boy.jpeg'
                  },
                  type: 'like',
                  post: { value: '标题标题是啥？' },
                  unRead: true,
                  createdAt: '两分钟前'
                }, {
                  from_user: {
                    nickName: '小叮当',
                    avatarUrl: '../assets/img/boy.jpeg'
                  },
                  type: 'comment',
                  post: { value: '标题标题是啥？' },
                  unRead: true,
                  createdAt: '两分钟前'
                }];

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
    key: 'lower',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.loadData();

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function lower() {
        return _ref4.apply(this, arguments);
      }

      return lower;
    }()
  }, {
    key: 'upper',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function upper() {
        return _ref5.apply(this, arguments);
      }

      return upper;
    }()
  }]);

  return TestPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TestPage , 'pages/notificationPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOlsiVGVzdFBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwic2NyZWVuV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwic2NyZWVuSGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwiZGF0YUxpc3QiLCJjdXJyZW50UGFnZSIsInVzZXJfaWQiLCJtZXRob2RzIiwiZ28iLCJwYWdlIiwibmF2aWdhdGVUbyIsInVybCIsIm9wdGlvbiIsImdldFN0b3JhZ2VTeW5jIiwibG9hZERhdGEiLCJmcm9tX3VzZXIiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInR5cGUiLCJwb3N0IiwidmFsdWUiLCJ1blJlYWQiLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixLQURqQjtBQUVQQyx1QkFBaUIsU0FGVjtBQUdQQyxvQ0FBOEIsU0FIdkI7QUFJUEMsOEJBQXdCLE9BSmpCO0FBS1BDLDZCQUF1QjtBQUxoQixLLFFBT1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsbUJBQWEsQ0FBQyxDQUpUO0FBS0xDLGVBQVM7QUFMSixLLFFBcURQQyxPLEdBQVU7QUFDUkMsUUFEUSxjQUNKQyxJQURJLEVBQ0U7QUFDUix1QkFBS0MsVUFBTCxDQUFnQixFQUFDQyxLQUFLRixJQUFOLEVBQWhCO0FBQ0Q7QUFITyxLOzs7Ozs7MkZBOUNJRyxNOzs7OztBQUNaO0FBQ0EscUJBQUtOLE9BQUwsR0FBZSxlQUFLTyxjQUFMLENBQW9CLFFBQXBCLENBQWY7QUFDQTs7dUJBQ00sS0FBS0MsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUDtBQUNBLHFCQUFLVixRQUFMLEdBQWdCLENBQ2Q7QUFDQ1csNkJBQVc7QUFDVEMsOEJBQVUsTUFERDtBQUVUQywrQkFBVztBQUZGLG1CQURaO0FBS0NDLHdCQUFNLFNBTFA7QUFNQ0Msd0JBQU0sRUFBQ0MsT0FBTyxTQUFSLEVBTlA7QUFPQ0MsMEJBQVEsSUFQVDtBQVFDQyw2QkFBVztBQVJaLGlCQURjLEVBV2Y7QUFDQ1AsNkJBQVc7QUFDVEMsOEJBQVUsS0FERDtBQUVUQywrQkFBVztBQUZGLG1CQURaO0FBS0NDLHdCQUFNLE1BTFA7QUFNQ0Msd0JBQU0sRUFBQ0MsT0FBTyxTQUFSLEVBTlA7QUFPQ0MsMEJBQVEsSUFQVDtBQVFDQyw2QkFBVztBQVJaLGlCQVhlLEVBcUJoQjtBQUNDUCw2QkFBVztBQUNUQyw4QkFBVSxLQUREO0FBRVRDLCtCQUFXO0FBRkYsbUJBRFo7QUFLQ0Msd0JBQU0sU0FMUDtBQU1DQyx3QkFBTSxFQUFDQyxPQUFPLFNBQVIsRUFOUDtBQU9DQywwQkFBUSxJQVBUO0FBUUNDLDZCQUFXO0FBUlosaUJBckJnQixDQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFrQ00sS0FBS1IsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekQ2QixlQUFLTCxJOztrQkFBdEJsQixRIiwiZmlsZSI6Im5vdGlmaWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RQYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlrDmtojmga8nLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyM2ZmUwZTcnLFxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjNmZlMGU3JyxcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgZGF0YUxpc3Q6IFtdLFxuICAgIGN1cnJlbnRQYWdlOiAtMSxcbiAgICB1c2VyX2lkOiAnJ1xuICB9XG4gIGFzeW5jIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgLy8gd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb24udG9waWN9KVxuICAgIHRoaXMudXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgLy9sb2FkIG5vdGlmaWNhdGlvbiBsaXN0XG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gIH1cbiBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAvLyBUT0RPOiBsb2FkIGRhdGFcbiAgIHRoaXMuZGF0YUxpc3QgPSBbXG4gICAgIHtcbiAgICAgIGZyb21fdXNlcjoge1xuICAgICAgICBuaWNrTmFtZTogJ+aJjuilv+W+t+WLkicsXG4gICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnXG4gICAgICB9LFxuICAgICAgdHlwZTogJ2NvbW1lbnQnLFxuICAgICAgcG9zdDoge3ZhbHVlOiAn5qCH6aKY5qCH6aKY5piv5ZWl77yfJ30sXG4gICAgICB1blJlYWQ6IHRydWUsXG4gICAgICBjcmVhdGVkQXQ6ICfkuKTliIbpkp/liY0nXG4gICAgfSxcbiAgICB7XG4gICAgIGZyb21fdXNlcjoge1xuICAgICAgIG5pY2tOYW1lOiAn5bCP5Y+u5b2TJyxcbiAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJ1xuICAgICB9LFxuICAgICB0eXBlOiAnbGlrZScsXG4gICAgIHBvc3Q6IHt2YWx1ZTogJ+agh+mimOagh+mimOaYr+WVpe+8nyd9LFxuICAgICB1blJlYWQ6IHRydWUsXG4gICAgIGNyZWF0ZWRBdDogJ+S4pOWIhumSn+WJjSdcbiAgIH0sXG4gICB7XG4gICAgZnJvbV91c2VyOiB7XG4gICAgICBuaWNrTmFtZTogJ+Wwj+WPruW9kycsXG4gICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJ1xuICAgIH0sXG4gICAgdHlwZTogJ2NvbW1lbnQnLFxuICAgIHBvc3Q6IHt2YWx1ZTogJ+agh+mimOagh+mimOaYr+WVpe+8nyd9LFxuICAgIHVuUmVhZDogdHJ1ZSxcbiAgICBjcmVhdGVkQXQ6ICfkuKTliIbpkp/liY0nXG4gIH1cbiAgIF1cbiB9XG4gYXN5bmMgbG93ZXIgKCkge1xuICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gfVxuIGFzeW5jIHVwcGVyICgpIHtcbiB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ28gKHBhZ2UpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7dXJsOiBwYWdlfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==