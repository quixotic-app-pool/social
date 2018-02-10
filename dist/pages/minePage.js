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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MinePage , 'pages/minePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmVQYWdlLmpzIl0sIm5hbWVzIjpbIk1pbmVQYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsInVzZXJfaWQiLCJteURhdGEiLCJtZXRob2RzIiwiZ28iLCJwYWdlIiwibmF2aWdhdGVUbyIsInVybCIsIm9wdGlvbiIsImxvYWREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsS0FEakI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLG9DQUE4QixTQUh2QjtBQUlQQyw2QkFBdUI7QUFKaEIsSyxRQU1UQyxJLEdBQU87QUFDTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRGpDO0FBRUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUZsQztBQUdMQyxlQUFTLEVBSEo7QUFJTEMsY0FBUTtBQUpILEssUUErQlBDLE8sR0FBVTtBQUNSQyxRQURRLGNBQ0pDLElBREksRUFDRTtBQUNSLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUtGO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzsyRkF6QklHLE07Ozs7Ozt1QkFDTixLQUFLQyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFzQkUsQ0FDVDs7OztFQXJDbUMsZUFBS0osSTs7a0JBQXRCaEIsUSIsImZpbGUiOiJtaW5lUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbHMvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZVBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iHquS4quWEvycsXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBmYWxzZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgdXNlcl9pZDogJycsXG4gICAgbXlEYXRhOiB7fVxuICB9XG4gIGFzeW5jIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gIH1cbiAgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgLy8gVE9ETzogbG9hZCBkYXRhXG4gICAgLy8gdmFyIHJlcyA9IGF3YWl0IGFwaS51c2VySW5mbyh7XG4gICAgLy8gICBwYWNrOiB7XG4gICAgLy8gICAgIF9pZDogX2lkXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgICAvLyBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgIC8vICAgdGhpcy5teURhdGEgPSByZXMuZGF0YS5kYXRhXG4gICAgLy8gfVxuXG4gICAgLy8gdGhpcy5teURhdGEgPSB7XG4gICAgLy8gICBhdmF0YXJVcmw6ICcnLFxuICAgIC8vICAgbmlja05hbWU6ICfmiY7opb/lvrfli5InLFxuICAgIC8vICAgc3Vic2NyaWJlZE51bTogJzIzMycsXG4gICAgLy8gICBzdWJzY3JpYmVOdW06ICcxMjInLFxuICAgIC8vICAgcG9zdHNOdW06ICcxMicsXG4gICAgLy8gICBjb21tZW50c051bTogJzMyJ1xuICAgIC8vIH1cbiAgfVxuICBvblJlYWR5KCkge1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ28gKHBhZ2UpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogcGFnZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==