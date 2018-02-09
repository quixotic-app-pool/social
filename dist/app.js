'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _api = require('./api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: [
      // 'pages/mainPage',
      // 'pages/activityPage',
      // 'pages/activityWebPage',
      // 'pages/timelinePage',
      // 'pages/myTM',
      // 'pages/editPage',
      // 'pages/minePage',
      'pages/individualPage', 'pages/itemEditPage', 'pages/aboutPage', 'pages/commentsPage', 'pages/notificationPage', 'pages/detailPage', 'pages/listPage'],
      // tabBar: {
      //   color: '#828282',
      //   backgroundColor : '#ffffff',
      //   borderStyle : 'white',
      //   selectedColor: '#FF9F00',
      //   list: [{
      //     "pagePath": "pages/mainPage",
      //     "text": "线上",
      //     "iconPath": "assets/img/tab-list-empty.png",
      //     "selectedIconPath": "assets/img/tab-list-fill.png"
      //   },
      //   {
      //     "pagePath": "pages/timelinePage",
      //     "text": "心情",
      //     "iconPath": "assets/img/tab-timeline-empty.png",
      //     "selectedIconPath": "assets/img/tab-timeline-fill.png"
      //   },
      //   {
      //     "pagePath": "pages/activityPage",
      //     "text": "线下",
      //     "iconPath": "assets/img/tab-event-empty.png",
      //     "selectedIconPath": "assets/img/tab-event-fill.png"
      //   },
      //   {
      //     "pagePath": "pages/minePage",
      //     "text": "自个儿",
      //     "iconPath": "assets/img/tab-mine-empty.png",
      //     "selectedIconPath": "assets/img/tab-mine-fill.png"
      //   }]
      // },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#CE452F',
        navigationBarTextStyle: 'white'
      }
    };
    _this.globalData = {
      userInfo: null,
      editedPiece: {}
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self, userInfo, UserSession, res, c, systemInfo, u;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                userInfo = _wepy2.default.getStorageSync('userInfo') || {};
                // console.log("userInfo: " + JSON.stringify(userInfo));

                UserSession = _wepy2.default.getStorageSync('UserSession') || {};

                _wepy2.default.removeStorageSync('UserSession');
                // if(false){

                if (!((UserSession.createdAt || Date.now()) < Date.now() + 86400000)) {
                  _context.next = 19;
                  break;
                }

                _context.next = 7;
                return _wepy2.default.login();

              case 7:
                res = _context.sent;

                if (!res.code) {
                  _context.next = 19;
                  break;
                }

                _context.next = 11;
                return _wepy2.default.getUserInfo();

              case 11:
                c = _context.sent;

                _wepy2.default.setStorageSync('UserInfo', c.userInfo);

                //存储系统信息 
                systemInfo = _wepy2.default.getSystemInfoSync();

                _wepy2.default.setStorageSync('SystemInfo', systemInfo);

                _context.next = 17;
                return _api2.default.wechatActivity({
                  query: {
                    code: res.code,
                    userInfo: JSON.stringify({ nickName: c.userInfo.nickName, avatarUrl: c.userInfo.avatarUrl, gender: c.userInfo.gender }),
                    encryptedData: c.encryptedData,
                    iv: c.iv,
                    UserSession: UserSession.sessionId
                  }
                });

              case 17:
                u = _context.sent;

                // console.log('info from wechat: ' + JSON.stringify(u));
                if (u && u.data && u.data.flag == 'success') {
                  _wepy2.default.setStorageSync('UserId', u.data.user_id);
                  _wepy2.default.setStorageSync('UserAuthority', u.data.user_position);
                  _wepy2.default.setStorageSync('UserSession', u.data.session);
                  // console.log('UserId: ' + JSON.stringify(u.data.user_id));
                  // console.log('UserSession: ' + JSON.stringify(u.data.session));
                }

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImVkaXRlZFBpZWNlIiwidXNlIiwic2VsZiIsImdldFN0b3JhZ2VTeW5jIiwiVXNlclNlc3Npb24iLCJyZW1vdmVTdG9yYWdlU3luYyIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJsb2dpbiIsInJlcyIsImNvZGUiLCJnZXRVc2VySW5mbyIsImMiLCJzZXRTdG9yYWdlU3luYyIsInN5c3RlbUluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndlY2hhdEFjdGl2aXR5IiwicXVlcnkiLCJKU09OIiwic3RyaW5naWZ5Iiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJzZXNzaW9uSWQiLCJ1IiwiZGF0YSIsImZsYWciLCJ1c2VyX2lkIiwidXNlcl9wb3NpdGlvbiIsInNlc3Npb24iLCJjYiIsInRoYXQiLCJzdWNjZXNzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQThERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBM0RmQSxNQTJEZSxHQTNETjtBQUNQQyxhQUFPO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFSSyxFQVNMLG9CQVRLLEVBVUwsaUJBVkssRUFXTCxvQkFYSyxFQVlMLHdCQVpLLEVBYUwsa0JBYkssRUFjTCxnQkFkSyxDQURBO0FBaUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0I7QUFIbEI7QUEvQ0QsS0EyRE07QUFBQSxVQUxmQyxVQUtlLEdBTEY7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxtQkFBYTtBQUZGLEtBS0U7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7Ozs7Ozs7O0FBR0tDLG9CLEdBQU8sSTtBQUNQSCx3QixHQUFXLGVBQUtJLGNBQUwsQ0FBb0IsVUFBcEIsS0FBbUMsRTtBQUNsRDs7QUFDSUMsMkIsR0FBYyxlQUFLRCxjQUFMLENBQW9CLGFBQXBCLEtBQXNDLEU7O0FBQ3hELCtCQUFLRSxpQkFBTCxDQUF1QixhQUF2QjtBQUNBOztzQkFDRyxDQUFDRCxZQUFZRSxTQUFaLElBQXlCQyxLQUFLQyxHQUFMLEVBQTFCLElBQXlDRCxLQUFLQyxHQUFMLEtBQWEsUTs7Ozs7O3VCQUV2QyxlQUFLQyxLQUFMLEU7OztBQUFaQyxtQjs7cUJBRUFBLElBQUlDLEk7Ozs7Ozt1QkFJUSxlQUFLQyxXQUFMLEU7OztBQUFWQyxpQjs7QUFDSiwrQkFBS0MsY0FBTCxDQUFvQixVQUFwQixFQUFnQ0QsRUFBRWQsUUFBbEM7O0FBRUE7QUFDSWdCLDBCLEdBQWEsZUFBS0MsaUJBQUwsRTs7QUFDakIsK0JBQUtGLGNBQUwsQ0FBb0IsWUFBcEIsRUFBa0NDLFVBQWxDOzs7dUJBRWMsY0FBSUUsY0FBSixDQUFtQjtBQUMvQkMseUJBQU87QUFDTFAsMEJBQU1ELElBQUlDLElBREw7QUFFTFosOEJBQVVvQixLQUFLQyxTQUFMLENBQWUsRUFBQ0MsVUFBVVIsRUFBRWQsUUFBRixDQUFXc0IsUUFBdEIsRUFBZ0NDLFdBQVdULEVBQUVkLFFBQUYsQ0FBV3VCLFNBQXRELEVBQWlFQyxRQUFRVixFQUFFZCxRQUFGLENBQVd3QixNQUFwRixFQUFmLENBRkw7QUFHTEMsbUNBQWVYLEVBQUVXLGFBSFo7QUFJTEMsd0JBQUlaLEVBQUVZLEVBSkQ7QUFLTHJCLGlDQUFhQSxZQUFZc0I7QUFMcEI7QUFEd0IsaUJBQW5CLEM7OztBQUFWQyxpQjs7QUFTSjtBQUNBLG9CQUFHQSxLQUFLQSxFQUFFQyxJQUFQLElBQWVELEVBQUVDLElBQUYsQ0FBT0MsSUFBUCxJQUFlLFNBQWpDLEVBQTRDO0FBQzFDLGlDQUFLZixjQUFMLENBQW9CLFFBQXBCLEVBQThCYSxFQUFFQyxJQUFGLENBQU9FLE9BQXJDO0FBQ0EsaUNBQUtoQixjQUFMLENBQW9CLGVBQXBCLEVBQXFDYSxFQUFFQyxJQUFGLENBQU9HLGFBQTVDO0FBQ0EsaUNBQUtqQixjQUFMLENBQW9CLGFBQXBCLEVBQW1DYSxFQUFFQyxJQUFGLENBQU9JLE9BQTFDO0FBQ0E7QUFDQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBTUtDLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS3BDLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLYSxXQUFMLENBQWlCO0FBQ2Z1QixlQURlLG1CQUNOekIsR0FETSxFQUNEO0FBQ1p3QixlQUFLcEMsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJXLElBQUlYLFFBQS9CO0FBQ0FrQyxnQkFBTUEsR0FBR3ZCLElBQUlYLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXpIMEIsZUFBS3FDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IGFwaSBmcm9tICcuL2FwaS9hcGknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAvLyAncGFnZXMvbWFpblBhZ2UnLFxyXG4gICAgICAvLyAncGFnZXMvYWN0aXZpdHlQYWdlJyxcclxuICAgICAgLy8gJ3BhZ2VzL2FjdGl2aXR5V2ViUGFnZScsXHJcbiAgICAgIC8vICdwYWdlcy90aW1lbGluZVBhZ2UnLFxyXG4gICAgICAvLyAncGFnZXMvbXlUTScsXHJcbiAgICAgIC8vICdwYWdlcy9lZGl0UGFnZScsXHJcbiAgICAgIC8vICdwYWdlcy9taW5lUGFnZScsXHJcbiAgICAgICdwYWdlcy9pbmRpdmlkdWFsUGFnZScsXHJcbiAgICAgICdwYWdlcy9pdGVtRWRpdFBhZ2UnLFxyXG4gICAgICAncGFnZXMvYWJvdXRQYWdlJyxcclxuICAgICAgJ3BhZ2VzL2NvbW1lbnRzUGFnZScsXHJcbiAgICAgICdwYWdlcy9ub3RpZmljYXRpb25QYWdlJyxcclxuICAgICAgJ3BhZ2VzL2RldGFpbFBhZ2UnLFxyXG4gICAgICAncGFnZXMvbGlzdFBhZ2UnXHJcbiAgICBdLFxyXG4gICAgLy8gdGFiQmFyOiB7XHJcbiAgICAvLyAgIGNvbG9yOiAnIzgyODI4MicsXHJcbiAgICAvLyAgIGJhY2tncm91bmRDb2xvciA6ICcjZmZmZmZmJyxcclxuICAgIC8vICAgYm9yZGVyU3R5bGUgOiAnd2hpdGUnLFxyXG4gICAgLy8gICBzZWxlY3RlZENvbG9yOiAnI0ZGOUYwMCcsXHJcbiAgICAvLyAgIGxpc3Q6IFt7XHJcbiAgICAvLyAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21haW5QYWdlXCIsXHJcbiAgICAvLyAgICAgXCJ0ZXh0XCI6IFwi57q/5LiKXCIsXHJcbiAgICAvLyAgICAgXCJpY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLWxpc3QtZW1wdHkucG5nXCIsXHJcbiAgICAvLyAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItbGlzdC1maWxsLnBuZ1wiXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvdGltZWxpbmVQYWdlXCIsXHJcbiAgICAvLyAgICAgXCJ0ZXh0XCI6IFwi5b+D5oOFXCIsXHJcbiAgICAvLyAgICAgXCJpY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLXRpbWVsaW5lLWVtcHR5LnBuZ1wiLFxyXG4gICAgLy8gICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLXRpbWVsaW5lLWZpbGwucG5nXCJcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9hY3Rpdml0eVBhZ2VcIixcclxuICAgIC8vICAgICBcInRleHRcIjogXCLnur/kuItcIixcclxuICAgIC8vICAgICBcImljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItZXZlbnQtZW1wdHkucG5nXCIsXHJcbiAgICAvLyAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItZXZlbnQtZmlsbC5wbmdcIlxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21pbmVQYWdlXCIsXHJcbiAgICAvLyAgICAgXCJ0ZXh0XCI6IFwi6Ieq5Liq5YS/XCIsXHJcbiAgICAvLyAgICAgXCJpY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLW1pbmUtZW1wdHkucG5nXCIsXHJcbiAgICAvLyAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItbWluZS1maWxsLnBuZ1wiXHJcbiAgICAvLyAgIH1dXHJcbiAgICAvLyB9LFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjQ0U0NTJGJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgZWRpdGVkUGllY2U6IHt9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uTGF1bmNoKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICB2YXIgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpIHx8IHt9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInVzZXJJbmZvOiBcIiArIEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvKSk7XHJcbiAgICB2YXIgVXNlclNlc3Npb24gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyU2Vzc2lvbicpIHx8IHt9XHJcbiAgICB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdVc2VyU2Vzc2lvbicpXHJcbiAgICAvLyBpZihmYWxzZSl7XHJcbiAgICBpZigoVXNlclNlc3Npb24uY3JlYXRlZEF0IHx8IERhdGUubm93KCkpIDwgKERhdGUubm93KCkgKyA4NjQwMDAwMCkpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2V4cGlyZScpO1xyXG4gICAgICB2YXIgcmVzID0gYXdhaXQgd2VweS5sb2dpbigpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXM6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzLmNvZGU6ICcgKyByZXMuY29kZSlcclxuXHJcbiAgICAgICAgLy/lrZjlgqh1c2VySW5mb8KgXHJcbiAgICAgICAgdmFyIGMgPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdVc2VySW5mbycsIGMudXNlckluZm8pXHJcblxyXG4gICAgICAgIC8v5a2Y5YKo57O757uf5L+h5oGvwqBcclxuICAgICAgICB2YXIgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1N5c3RlbUluZm8nLCBzeXN0ZW1JbmZvKVxyXG5cclxuICAgICAgICB2YXIgdSA9IGF3YWl0IGFwaS53ZWNoYXRBY3Rpdml0eSh7XHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBjb2RlOiByZXMuY29kZSxcclxuICAgICAgICAgICAgdXNlckluZm86IEpTT04uc3RyaW5naWZ5KHtuaWNrTmFtZTogYy51c2VySW5mby5uaWNrTmFtZSwgYXZhdGFyVXJsOiBjLnVzZXJJbmZvLmF2YXRhclVybCwgZ2VuZGVyOiBjLnVzZXJJbmZvLmdlbmRlcn0pLFxyXG4gICAgICAgICAgICBlbmNyeXB0ZWREYXRhOiBjLmVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAgIGl2OiBjLml2LFxyXG4gICAgICAgICAgICBVc2VyU2Vzc2lvbjogVXNlclNlc3Npb24uc2Vzc2lvbklkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5mbyBmcm9tIHdlY2hhdDogJyArIEpTT04uc3RyaW5naWZ5KHUpKTtcclxuICAgICAgICBpZih1ICYmIHUuZGF0YSAmJiB1LmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcsIHUuZGF0YS51c2VyX2lkKVxyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlckF1dGhvcml0eScsIHUuZGF0YS51c2VyX3Bvc2l0aW9uKVxyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlclNlc3Npb24nLCB1LmRhdGEuc2Vzc2lvbilcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdVc2VySWQ6ICcgKyBKU09OLnN0cmluZ2lmeSh1LmRhdGEudXNlcl9pZCkpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1VzZXJTZXNzaW9uOiAnICsgSlNPTi5zdHJpbmdpZnkodS5kYXRhLnNlc3Npb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19