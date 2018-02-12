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
      currentUser_id: ''
    }, _this.methods = {
      previewImage: function previewImage(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },
      like: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var self, res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // TODO: update like
                  self = this;
                  _context.next = 3;
                  return _api2.default.like({
                    query: {
                      pack: {
                        user_id: self.currentUser_id,
                        post_id: self.postData._id
                      }
                    },
                    method: 'POST'
                  });

                case 3:
                  res = _context.sent;

                  //  console.log('like: ' + JSON.stringify(res.data))
                  if (res.data && res.data.flag == 'success') {
                    this.postData.likedBy.push(this.currentUser_id);
                    this.$apply();
                    //  list = res.data.data
                  }

                case 5:
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
          url: 'detailPage?post_id=' + this.postData._id
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
    value: function onLoad() {
      this.currentUser_id = _wepy2.default.getStorageSync('UserId');
    }
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RDb21wb25lbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJwb3N0RGF0YSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImN1cnJlbnRVc2VyX2lkIiwibWV0aG9kcyIsInByZXZpZXdJbWFnZSIsImN1ciIsImltYWdlTGlzdCIsImN1cnJlbnQiLCJ1cmxzIiwibGlrZSIsInNlbGYiLCJxdWVyeSIsInBhY2siLCJ1c2VyX2lkIiwicG9zdF9pZCIsIl9pZCIsIm1ldGhvZCIsInJlcyIsImZsYWciLCJsaWtlZEJ5IiwicHVzaCIsIiRhcHBseSIsImdvIiwibmF2aWdhdGVUbyIsInVybCIsIm1vcmVPcHRpb24iLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInRoZW4iLCJnZXRTdG9yYWdlU3luYyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCO0FBRHZCLEssUUFHVEMsSyxHQUFRO0FBQ05DLGdCQUFVO0FBQ1JDLGNBQU1DLE1BREU7QUFFUkMsaUJBQVM7QUFGRDtBQURKLEssUUFNUkMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsc0JBQWdCO0FBSFgsSyxRQVFQQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ01DLEdBRE4sRUFDV0MsU0FEWCxFQUNzQjtBQUM1Qix1QkFBS0YsWUFBTCxDQUFrQjtBQUNoQkcsbUJBQVNGLEdBRE87QUFFaEJHLGdCQUFNRjtBQUZVLFNBQWxCO0FBSUQsT0FOTztBQU9GRyxVQVBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUU47QUFDS0Msc0JBVEMsR0FTTSxJQVROO0FBQUE7QUFBQSx5QkFVVyxjQUFJRCxJQUFKLENBQVM7QUFDdkJFLDJCQUFPO0FBQ0xDLDRCQUFNO0FBQ0pDLGlDQUFTSCxLQUFLUixjQURWO0FBRUpZLGlDQUFTSixLQUFLbEIsUUFBTCxDQUFjdUI7QUFGbkI7QUFERCxxQkFEZ0I7QUFPdkJDLDRCQUFRO0FBUGUsbUJBQVQsQ0FWWDs7QUFBQTtBQVVEQyxxQkFWQzs7QUFtQk47QUFDQyxzQkFBR0EsSUFBSXJCLElBQUosSUFBWXFCLElBQUlyQixJQUFKLENBQVNzQixJQUFULElBQWlCLFNBQWhDLEVBQTJDO0FBQ3pDLHlCQUFLMUIsUUFBTCxDQUFjMkIsT0FBZCxDQUFzQkMsSUFBdEIsQ0FBMkIsS0FBS2xCLGNBQWhDO0FBQ0EseUJBQUttQixNQUFMO0FBQ0Q7QUFDQTs7QUF4Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUEwQlJDLFFBMUJRLGdCQTBCRjtBQUNKLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssd0JBQXdCLEtBQUtoQyxRQUFMLENBQWN1QjtBQUQ3QixTQUFoQjtBQUdELE9BOUJPO0FBK0JSVSxnQkEvQlEsd0JBK0JNO0FBQ1osdUJBQUtDLGVBQUwsQ0FBcUI7QUFDbkJDLG9CQUFVLENBQUMsSUFBRCxFQUFNLE1BQU4sRUFBYyxJQUFkO0FBRFMsU0FBckIsRUFFR0MsSUFGSDtBQUFBLDhFQUVRLGtCQUFlWCxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvQkY7QUFpQ0Q7QUFqRU8sSzs7Ozs7NkJBSEE7QUFDUixXQUFLZixjQUFMLEdBQXNCLGVBQUsyQixjQUFMLENBQW9CLFFBQXBCLENBQXRCO0FBQ0Q7Ozs7RUFqQmdDLGVBQUtDLFM7O2tCQUFuQjFDLEsiLCJmaWxlIjoicG9zdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbiAgaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbHMvdXRpbCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZGRDMwMCdcbiAgICB9XG4gICAgcHJvcHMgPSB7XG4gICAgICBwb3N0RGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgY3VycmVudFVzZXJfaWQ6ICcnXG4gICAgfVxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRVc2VyX2lkID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJylcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHByZXZpZXdJbWFnZSAoY3VyLCBpbWFnZUxpc3QpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgIGN1cnJlbnQ6IGN1cixcbiAgICAgICAgICB1cmxzOiBpbWFnZUxpc3RcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhc3luYyBsaWtlICgpIHtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIGxpa2VcbiAgICAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5saWtlKHtcbiAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICBwYWNrOiB7XG4gICAgICAgICAgICAgICB1c2VyX2lkOiBzZWxmLmN1cnJlbnRVc2VyX2lkLFxuICAgICAgICAgICAgICAgcG9zdF9pZDogc2VsZi5wb3N0RGF0YS5faWRcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICB9KVxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ2xpa2U6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpXG4gICAgICAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICB0aGlzLnBvc3REYXRhLmxpa2VkQnkucHVzaCh0aGlzLmN1cnJlbnRVc2VyX2lkKVxuICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgLy8gIGxpc3QgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ28gKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2RldGFpbFBhZ2U/cG9zdF9pZD0nICsgdGhpcy5wb3N0RGF0YS5faWRcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBtb3JlT3B0aW9uICgpIHtcbiAgICAgICAgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgIGl0ZW1MaXN0OiBbJ+WIoOmZpCcsJ+WPlua2iOWFs+azqCcsICfkuL7miqUnXVxuICAgICAgICB9KS50aGVuKGFzeW5jIGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgLy8gaWYocmVzLnRhcEluZGV4ID09IDApIHtcbiAgICAgICAgICAvLyAgIHZhciByID0gYXdhaXQgYXBpLmRlbFBvc3Qoe1xuICAgICAgICAgIC8vICAgICBwYWNrOiB7XG4gICAgICAgICAgLy8gICAgICAgdXNlcl9pZDogdGhpcy51c2VyX2lkXG4gICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAvLyAgIH0pXG4gICAgICAgICAgLy8gICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vIGlmKHJlcy50YXBJbmRleCA9IDEpIHtcbiAgICAgICAgICAvLyAgIHZhciByID0gYXdhaXQgYXBpLnN1YnNjcmliZSh7XG4gICAgICAgICAgLy8gICAgIHBhY2s6IHtcbiAgICAgICAgICAvLyAgICAgICB1c2VyX2lkOiB0aGlzLnVzZXJfaWRcbiAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgIC8vICAgfSlcbiAgICAgICAgICAvLyAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgIC8vICAgdmFyIHIgPSBhd2FpdCBhcGkucmVwb3J0KHtcbiAgICAgICAgICAvLyAgICAgcGFjazoge1xuICAgICAgICAgIC8vICAgICAgIHVzZXJfaWQ6IHRoaXMudXNlcl9pZFxuICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgLy8gICB9KVxuICAgICAgICAgIC8vICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfVxuICB9XG4iXX0=