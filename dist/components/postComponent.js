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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarBackgroundColor: '#FFD300'
    }, _this.props = {
      postData: {
        type: Object,
        default: {}
      }
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      post_id: ''
    }, _this.methods = {
      previewImage: function previewImage(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },
      like: function () {
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

        function like() {
          return _ref2.apply(this, arguments);
        }

        return like;
      }(),
      go: function go() {
        _wepy2.default.navigateTo({
          url: page
        });
      },
      moreOption: function moreOption() {
        _wepy2.default.showActionSheet({
          itemList: ['删除', '取消关注', '举报']
        }).then(function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
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

          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }()
        // if(res.tapIndex == 0) {
        //   var r = await api.delPost({
        //     pack: {
        //       user_id: this.user_id
        //     }
        //   })
        //   if(res.data && res.data.flag == 'success') {
        //
        //   }
        // }
        // if(res.tapIndex = 1) {
        //   var r = await api.subscribe({
        //     pack: {
        //       user_id: this.user_id
        //     }
        //   })
        //   if(res.data && res.data.flag == 'success') {
        //
        //   }
        // } else {
        //   var r = await api.report({
        //     pack: {
        //       user_id: this.user_id
        //     }
        //   })
        //   if(res.data && res.data.flag == 'success') {
        //
        //   }
        // }
        );
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {}
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RDb21wb25lbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJwb3N0RGF0YSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsInBvc3RfaWQiLCJtZXRob2RzIiwicHJldmlld0ltYWdlIiwiY3VyIiwiaW1hZ2VMaXN0IiwiY3VycmVudCIsInVybHMiLCJsaWtlIiwiZ28iLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSIsIm1vcmVPcHRpb24iLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInRoZW4iLCJyZXMiLCJvcHRpb24iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEI7QUFEdkIsSyxRQUdUQyxLLEdBQVE7QUFDTkMsZ0JBQVU7QUFDUkMsY0FBTUMsTUFERTtBQUVSQyxpQkFBUztBQUZEO0FBREosSyxRQU1SQyxJLEdBQU87QUFDTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRGpDO0FBRUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUZsQztBQUdMQyxlQUFTO0FBSEosSyxRQVNQQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ01DLEdBRE4sRUFDV0MsU0FEWCxFQUNzQjtBQUM1Qix1QkFBS0YsWUFBTCxDQUFrQjtBQUNoQkcsbUJBQVNGLEdBRE87QUFFaEJHLGdCQUFNRjtBQUZVLFNBQWxCO0FBSUQsT0FOTztBQU9GRyxVQVBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXFCUkMsUUFyQlEsZ0JBcUJGO0FBQ0osdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBS0M7QUFEUyxTQUFoQjtBQUdELE9BekJPO0FBMEJSQyxnQkExQlEsd0JBMEJNO0FBQ1osdUJBQUtDLGVBQUwsQ0FBcUI7QUFDbkJDLG9CQUFVLENBQUMsSUFBRCxFQUFNLE1BQU4sRUFBYyxJQUFkO0FBRFMsU0FBckIsRUFFR0MsSUFGSDtBQUFBLDhFQUVRLGtCQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvQkY7QUFpQ0Q7QUE1RE8sSzs7Ozs7MkJBSkZDLE0sRUFBUSxDQUVmOzs7O0VBakJnQyxlQUFLQyxTOztrQkFBbkJoQyxLIiwiZmlsZSI6InBvc3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGRkQzMDAnXG4gICAgfVxuICAgIHByb3BzID0ge1xuICAgICAgcG9zdERhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgfVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIHBvc3RfaWQ6ICcnXG4gICAgfVxuICAgIG9uTG9hZCAob3B0aW9uKSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgcHJldmlld0ltYWdlIChjdXIsIGltYWdlTGlzdCkge1xuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgY3VycmVudDogY3VyLFxuICAgICAgICAgIHVybHM6IGltYWdlTGlzdFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGxpa2UgKCkge1xuICAgICAgICAvLyBUT0RPOiB1cGRhdGUgbGlrZVxuICAgICAgICAvLyAgdmFyIHJlcyA9IGF3YWl0IGFwaS5saWtlKHtcbiAgICAgICAgLy8gICAgcGFjazoge1xuICAgICAgICAvLyAgICAgIHBhZ2U6IDAsXG4gICAgICAgIC8vICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAvLyAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIC8vICAgIH1cbiAgICAgICAgLy8gIH0pXG4gICAgICAgICAvL1xuICAgICAgICAvLyAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgLy8gICAgbGlzdCA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgLy8gIH1cbiAgICAgIH0sXG4gICAgICBnbyAoKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBwYWdlXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgbW9yZU9wdGlvbiAoKSB7XG4gICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogWyfliKDpmaQnLCflj5bmtojlhbPms6gnLCAn5Li+5oqlJ11cbiAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbihyZXMpe1xuICAgICAgICAgIC8vIGlmKHJlcy50YXBJbmRleCA9PSAwKSB7XG4gICAgICAgICAgLy8gICB2YXIgciA9IGF3YWl0IGFwaS5kZWxQb3N0KHtcbiAgICAgICAgICAvLyAgICAgcGFjazoge1xuICAgICAgICAgIC8vICAgICAgIHVzZXJfaWQ6IHRoaXMudXNlcl9pZFxuICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgLy8gICB9KVxuICAgICAgICAgIC8vICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBpZihyZXMudGFwSW5kZXggPSAxKSB7XG4gICAgICAgICAgLy8gICB2YXIgciA9IGF3YWl0IGFwaS5zdWJzY3JpYmUoe1xuICAgICAgICAgIC8vICAgICBwYWNrOiB7XG4gICAgICAgICAgLy8gICAgICAgdXNlcl9pZDogdGhpcy51c2VyX2lkXG4gICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAvLyAgIH0pXG4gICAgICAgICAgLy8gICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAvLyAgIHZhciByID0gYXdhaXQgYXBpLnJlcG9ydCh7XG4gICAgICAgICAgLy8gICAgIHBhY2s6IHtcbiAgICAgICAgICAvLyAgICAgICB1c2VyX2lkOiB0aGlzLnVzZXJfaWRcbiAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgIC8vICAgfSlcbiAgICAgICAgICAvLyAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH1cbiAgfVxuIl19