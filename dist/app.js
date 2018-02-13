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
      pages: ['pages/mainPage', 'pages/activityPage', 'pages/activityWebPage', 'pages/timelinePage', 'pages/myTM', 'pages/editPage', 'pages/minePage', 'pages/individualPage', 'pages/itemEditPage', 'pages/aboutPage', 'pages/commentsPage', 'pages/notificationPage', 'pages/detailPage', 'pages/listPage'],
      tabBar: {
        color: '#828282',
        backgroundColor: '#ffffff',
        borderStyle: 'white',
        selectedColor: '#FF9F00',
        list: [{
          "pagePath": "pages/mainPage",
          "text": "线上",
          "iconPath": "assets/img/tab-list-empty.png",
          "selectedIconPath": "assets/img/tab-list-fill.png"
        }, {
          "pagePath": "pages/timelinePage",
          "text": "心情",
          "iconPath": "assets/img/tab-timeline-empty.png",
          "selectedIconPath": "assets/img/tab-timeline-fill.png"
        }, {
          "pagePath": "pages/activityPage",
          "text": "线下",
          "iconPath": "assets/img/tab-event-empty.png",
          "selectedIconPath": "assets/img/tab-event-fill.png"
        }, {
          "pagePath": "pages/minePage",
          "text": "自个儿",
          "iconPath": "assets/img/tab-mine-empty.png",
          "selectedIconPath": "assets/img/tab-mine-fill.png"
        }]
      },
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
                  //take nickName to test if user profile init or not
                  _wepy2.default.setStorageSync('UserGender', u.data.gender);
                  if (!u.data.nickName) {
                    _wepy2.default.setStorageSync('requireInit', true);
                  } else {
                    _wepy2.default.removeStorageSync('requireInit');
                  }
                  // wepy.setStorageSync('UserAuthority', u.data.user_position)
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImVkaXRlZFBpZWNlIiwidXNlIiwic2VsZiIsImdldFN0b3JhZ2VTeW5jIiwiVXNlclNlc3Npb24iLCJyZW1vdmVTdG9yYWdlU3luYyIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJsb2dpbiIsInJlcyIsImNvZGUiLCJnZXRVc2VySW5mbyIsImMiLCJzZXRTdG9yYWdlU3luYyIsInN5c3RlbUluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndlY2hhdEFjdGl2aXR5IiwicXVlcnkiLCJKU09OIiwic3RyaW5naWZ5Iiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJzZXNzaW9uSWQiLCJ1IiwiZGF0YSIsImZsYWciLCJ1c2VyX2lkIiwic2Vzc2lvbiIsImNiIiwidGhhdCIsInN1Y2Nlc3MiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUEzRGZBLE1BMkRlLEdBM0ROO0FBQ1BDLGFBQU8sQ0FDTCxnQkFESyxFQUVMLG9CQUZLLEVBR0wsdUJBSEssRUFJTCxvQkFKSyxFQUtMLFlBTEssRUFNTCxnQkFOSyxFQU9MLGdCQVBLLEVBUUwsc0JBUkssRUFTTCxvQkFUSyxFQVVMLGlCQVZLLEVBV0wsb0JBWEssRUFZTCx3QkFaSyxFQWFMLGtCQWJLLEVBY0wsZ0JBZEssQ0FEQTtBQWlCUEMsY0FBUTtBQUNO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OztnQ0FNS0MsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLbkMsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUthLFdBQUwsQ0FBaUI7QUFDZnNCLGVBRGUsbUJBQ054QixHQURNLEVBQ0Q7QUFDWnVCLGVBQUtuQyxVQUFMLENBQWdCQyxRQUFoQixHQUEyQlcsSUFBSVgsUUFBL0I7QUFDQWlDLGdCQUFNQSxHQUFHdEIsSUFBSVgsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBaEkwQixlQUFLb0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpL2FwaSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9tYWluUGFnZScsXHJcbiAgICAgICdwYWdlcy9hY3Rpdml0eVBhZ2UnLFxyXG4gICAgICAncGFnZXMvYWN0aXZpdHlXZWJQYWdlJyxcclxuICAgICAgJ3BhZ2VzL3RpbWVsaW5lUGFnZScsXHJcbiAgICAgICdwYWdlcy9teVRNJyxcclxuICAgICAgJ3BhZ2VzL2VkaXRQYWdlJyxcclxuICAgICAgJ3BhZ2VzL21pbmVQYWdlJyxcclxuICAgICAgJ3BhZ2VzL2luZGl2aWR1YWxQYWdlJyxcclxuICAgICAgJ3BhZ2VzL2l0ZW1FZGl0UGFnZScsXHJcbiAgICAgICdwYWdlcy9hYm91dFBhZ2UnLFxyXG4gICAgICAncGFnZXMvY29tbWVudHNQYWdlJyxcclxuICAgICAgJ3BhZ2VzL25vdGlmaWNhdGlvblBhZ2UnLFxyXG4gICAgICAncGFnZXMvZGV0YWlsUGFnZScsXHJcbiAgICAgICdwYWdlcy9saXN0UGFnZSdcclxuICAgIF0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgY29sb3I6ICcjODI4MjgyJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yIDogJyNmZmZmZmYnLFxyXG4gICAgICBib3JkZXJTdHlsZSA6ICd3aGl0ZScsXHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjRkY5RjAwJyxcclxuICAgICAgbGlzdDogW3tcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbWFpblBhZ2VcIixcclxuICAgICAgICBcInRleHRcIjogXCLnur/kuIpcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItbGlzdC1lbXB0eS5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi1saXN0LWZpbGwucG5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy90aW1lbGluZVBhZ2VcIixcclxuICAgICAgICBcInRleHRcIjogXCLlv4Pmg4VcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItdGltZWxpbmUtZW1wdHkucG5nXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItdGltZWxpbmUtZmlsbC5wbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2FjdGl2aXR5UGFnZVwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIue6v+S4i1wiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi1ldmVudC1lbXB0eS5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi1ldmVudC1maWxsLnBuZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbWluZVBhZ2VcIixcclxuICAgICAgICBcInRleHRcIjogXCLoh6rkuKrlhL9cIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItbWluZS1lbXB0eS5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi1taW5lLWZpbGwucG5nXCJcclxuICAgICAgfV1cclxuICAgIH0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNDRTQ1MkYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICBlZGl0ZWRQaWVjZToge31cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25MYXVuY2goKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgIHZhciB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJykgfHwge31cclxuICAgIC8vIGNvbnNvbGUubG9nKFwidXNlckluZm86IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlckluZm8pKTtcclxuICAgIHZhciBVc2VyU2Vzc2lvbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJTZXNzaW9uJykgfHwge31cclxuICAgIHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoJ1VzZXJTZXNzaW9uJylcclxuICAgIC8vIGlmKGZhbHNlKXtcclxuICAgIGlmKChVc2VyU2Vzc2lvbi5jcmVhdGVkQXQgfHwgRGF0ZS5ub3coKSkgPCAoRGF0ZS5ub3coKSArIDg2NDAwMDAwKSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnZXhwaXJlJyk7XHJcbiAgICAgIHZhciByZXMgPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3JlczogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXMuY29kZTogJyArIHJlcy5jb2RlKVxyXG5cclxuICAgICAgICAvL+WtmOWCqHVzZXJJbmZvwqBcclxuICAgICAgICB2YXIgYyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXJJbmZvJywgYy51c2VySW5mbylcclxuXHJcbiAgICAgICAgLy/lrZjlgqjns7vnu5/kv6Hmga/CoFxyXG4gICAgICAgIHZhciBzeXN0ZW1JbmZvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnU3lzdGVtSW5mbycsIHN5c3RlbUluZm8pXHJcblxyXG4gICAgICAgIHZhciB1ID0gYXdhaXQgYXBpLndlY2hhdEFjdGl2aXR5KHtcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlLFxyXG4gICAgICAgICAgICB1c2VySW5mbzogSlNPTi5zdHJpbmdpZnkoe25pY2tOYW1lOiBjLnVzZXJJbmZvLm5pY2tOYW1lLCBhdmF0YXJVcmw6IGMudXNlckluZm8uYXZhdGFyVXJsLCBnZW5kZXI6IGMudXNlckluZm8uZ2VuZGVyfSksXHJcbiAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IGMuZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgaXY6IGMuaXYsXHJcbiAgICAgICAgICAgIFVzZXJTZXNzaW9uOiBVc2VyU2Vzc2lvbi5zZXNzaW9uSWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbmZvIGZyb20gd2VjaGF0OiAnICsgSlNPTi5zdHJpbmdpZnkodSkpO1xyXG4gICAgICAgIGlmKHUgJiYgdS5kYXRhICYmIHUuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcklkJywgdS5kYXRhLnVzZXJfaWQpXHJcbiAgICAgICAgICAvL3Rha2Ugbmlja05hbWUgdG8gdGVzdCBpZiB1c2VyIHByb2ZpbGUgaW5pdCBvciBub3RcclxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXJHZW5kZXInLCB1LmRhdGEuZ2VuZGVyKVxyXG4gICAgICAgICAgaWYoIXUuZGF0YS5uaWNrTmFtZSkge1xyXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdyZXF1aXJlSW5pdCcsIHRydWUpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdyZXF1aXJlSW5pdCcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdVc2VyQXV0aG9yaXR5JywgdS5kYXRhLnVzZXJfcG9zaXRpb24pXHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdVc2VyU2Vzc2lvbicsIHUuZGF0YS5zZXNzaW9uKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1VzZXJJZDogJyArIEpTT04uc3RyaW5naWZ5KHUuZGF0YS51c2VyX2lkKSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVXNlclNlc3Npb246ICcgKyBKU09OLnN0cmluZ2lmeSh1LmRhdGEuc2Vzc2lvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICB9XHJcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=