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

var _commentsComponent = require('./../components/commentsComponent.js');

var _commentsComponent2 = _interopRequireDefault(_commentsComponent);

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
    }, _this.$repeat = {}, _this.$props = { "commentsComponent": { "xmlns:v-bind": "", "v-bind:type.once": "{user_id: ''}" } }, _this.$events = {}, _this.components = {
      commentsComponent: _commentsComponent2.default
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

              case 1:
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
    key: 'lower',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TestPage , 'pages/commentsPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzUGFnZS5qcyJdLCJuYW1lcyI6WyJUZXN0UGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteUNvbW1lbnRzIiwiY3VycmVudFBhZ2UiLCJ1c2VyX2lkIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY29tbWVudHNDb21wb25lbnQiLCJtZXRob2RzIiwiZ28iLCJvcHRpb24iLCJnZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQixTQUZWO0FBR1BDLG9DQUE4QixTQUh2QjtBQUlQQyw4QkFBd0IsT0FKakI7QUFLUEMsNkJBQXVCO0FBTGhCLEssUUFPVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsa0JBQVksRUFIUDtBQUlMQyxtQkFBYSxDQUFDLENBSlQ7QUFLTEMsZUFBUztBQUxKLEssUUFPUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLGVBQXRDLEVBQXJCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQWFaQyxPLEdBQVU7QUFDRkMsUUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7NEZBVklDLE07Ozs7O0FBQ1o7QUFDQSxxQkFBS1IsT0FBTCxHQUFlLGVBQUtTLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZCa0MsZUFBS0MsSTs7a0JBQXRCekIsUSIsImZpbGUiOiJjb21tZW50c1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5pbXBvcnQgY29tbWVudHNDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tZW50c0NvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdFBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOivhOiuuicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzZmZTBlNycsXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM2ZmUwZTcnLFxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICBteUNvbW1lbnRzOiBbXSxcbiAgICBjdXJyZW50UGFnZTogLTEsXG4gICAgdXNlcl9pZDogJydcbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY29tbWVudHNDb21wb25lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnR5cGUub25jZVwiOlwie3VzZXJfaWQ6ICcnfVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY29tbWVudHNDb21wb25lbnQgOiBjb21tZW50c0NvbXBvbmVudFxuICB9XG4gIGFzeW5jIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgLy8gd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb24udG9waWN9KVxuICAgIHRoaXMudXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gIH1cbiBhc3luYyBsb3dlciAoKSB7XG5cbiB9XG4gYXN5bmMgdXBwZXIgKCkge1xuXG4gfVxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGdvICgpIHtcbiAgICB9XG4gIH1cbn1cbiJdfQ==