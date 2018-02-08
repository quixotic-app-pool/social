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
      pages: ['pages/mainPage', 'pages/activityPage',
      // 'pages/newActivity',
      'pages/heldActivity', 'pages/timelinePage', 'pages/myTM', 'pages/editPage', 'pages/minePage', 'pages/individualPage', 'pages/itemEditPage', 'pages/aboutPage', 'pages/commentsPage', 'pages/notificationPage', 'pages/detailPage', 'pages/listPage'],
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
      userInfo: null
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInNlbGYiLCJnZXRTdG9yYWdlU3luYyIsIlVzZXJTZXNzaW9uIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwibG9naW4iLCJyZXMiLCJjb2RlIiwiZ2V0VXNlckluZm8iLCJjIiwic2V0U3RvcmFnZVN5bmMiLCJzeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3ZWNoYXRBY3Rpdml0eSIsInF1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiZ2VuZGVyIiwiZW5jcnlwdGVkRGF0YSIsIml2Iiwic2Vzc2lvbklkIiwidSIsImRhdGEiLCJmbGFnIiwidXNlcl9pZCIsInVzZXJfcG9zaXRpb24iLCJzZXNzaW9uIiwiY2IiLCJ0aGF0Iiwic3VjY2VzcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQTNEZkEsTUEyRGUsR0EzRE47QUFDUEMsYUFBTyxDQUNMLGdCQURLLEVBRUwsb0JBRks7QUFHTDtBQUNBLDBCQUpLLEVBS0wsb0JBTEssRUFNTCxZQU5LLEVBT0wsZ0JBUEssRUFRTCxnQkFSSyxFQVNMLHNCQVRLLEVBVUwsb0JBVkssRUFXTCxpQkFYSyxFQVlMLG9CQVpLLEVBYUwsd0JBYkssRUFjTCxrQkFkSyxFQWVMLGdCQWZLLENBREE7QUFrQlBDLGNB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ekIsR0FETSxFQUNEO0FBQ1p3QixlQUFLbkMsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJVLElBQUlWLFFBQS9CO0FBQ0FpQyxnQkFBTUEsR0FBR3ZCLElBQUlWLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXpIMEIsZUFBS29DLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IGFwaSBmcm9tICcuL2FwaS9hcGknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvbWFpblBhZ2UnLFxyXG4gICAgICAncGFnZXMvYWN0aXZpdHlQYWdlJyxcclxuICAgICAgLy8gJ3BhZ2VzL25ld0FjdGl2aXR5JyxcclxuICAgICAgJ3BhZ2VzL2hlbGRBY3Rpdml0eScsXHJcbiAgICAgICdwYWdlcy90aW1lbGluZVBhZ2UnLFxyXG4gICAgICAncGFnZXMvbXlUTScsXHJcbiAgICAgICdwYWdlcy9lZGl0UGFnZScsXHJcbiAgICAgICdwYWdlcy9taW5lUGFnZScsXHJcbiAgICAgICdwYWdlcy9pbmRpdmlkdWFsUGFnZScsXHJcbiAgICAgICdwYWdlcy9pdGVtRWRpdFBhZ2UnLFxyXG4gICAgICAncGFnZXMvYWJvdXRQYWdlJyxcclxuICAgICAgJ3BhZ2VzL2NvbW1lbnRzUGFnZScsXHJcbiAgICAgICdwYWdlcy9ub3RpZmljYXRpb25QYWdlJyxcclxuICAgICAgJ3BhZ2VzL2RldGFpbFBhZ2UnLFxyXG4gICAgICAncGFnZXMvbGlzdFBhZ2UnXHJcbiAgICBdLFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIGNvbG9yOiAnIzgyODI4MicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjZmZmZmZmJyxcclxuICAgICAgYm9yZGVyU3R5bGUgOiAnd2hpdGUnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnI0ZGOUYwMCcsXHJcbiAgICAgIGxpc3Q6IFt7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21haW5QYWdlXCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi57q/5LiKXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLWxpc3QtZW1wdHkucG5nXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItbGlzdC1maWxsLnBuZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvdGltZWxpbmVQYWdlXCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5b+D5oOFXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLXRpbWVsaW5lLWVtcHR5LnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLXRpbWVsaW5lLWZpbGwucG5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9hY3Rpdml0eVBhZ2VcIixcclxuICAgICAgICBcInRleHRcIjogXCLnur/kuItcIixcclxuICAgICAgICBcImljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItZXZlbnQtZW1wdHkucG5nXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItZXZlbnQtZmlsbC5wbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21pbmVQYWdlXCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6Ieq5Liq5YS/XCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLW1pbmUtZW1wdHkucG5nXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiYXNzZXRzL2ltZy90YWItbWluZS1maWxsLnBuZ1wiXHJcbiAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjQ0U0NTJGJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uTGF1bmNoKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICB2YXIgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpIHx8IHt9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInVzZXJJbmZvOiBcIiArIEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvKSk7XHJcbiAgICB2YXIgVXNlclNlc3Npb24gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyU2Vzc2lvbicpIHx8IHt9XHJcbiAgICB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdVc2VyU2Vzc2lvbicpXHJcbiAgICAvLyBpZihmYWxzZSl7XHJcbiAgICBpZigoVXNlclNlc3Npb24uY3JlYXRlZEF0IHx8IERhdGUubm93KCkpIDwgKERhdGUubm93KCkgKyA4NjQwMDAwMCkpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2V4cGlyZScpO1xyXG4gICAgICB2YXIgcmVzID0gYXdhaXQgd2VweS5sb2dpbigpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXM6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzLmNvZGU6ICcgKyByZXMuY29kZSlcclxuXHJcbiAgICAgICAgLy/lrZjlgqh1c2VySW5mb8KgXHJcbiAgICAgICAgdmFyIGMgPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdVc2VySW5mbycsIGMudXNlckluZm8pXHJcblxyXG4gICAgICAgIC8v5a2Y5YKo57O757uf5L+h5oGvwqBcclxuICAgICAgICB2YXIgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1N5c3RlbUluZm8nLCBzeXN0ZW1JbmZvKVxyXG5cclxuICAgICAgICB2YXIgdSA9IGF3YWl0IGFwaS53ZWNoYXRBY3Rpdml0eSh7XHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBjb2RlOiByZXMuY29kZSxcclxuICAgICAgICAgICAgdXNlckluZm86IEpTT04uc3RyaW5naWZ5KHtuaWNrTmFtZTogYy51c2VySW5mby5uaWNrTmFtZSwgYXZhdGFyVXJsOiBjLnVzZXJJbmZvLmF2YXRhclVybCwgZ2VuZGVyOiBjLnVzZXJJbmZvLmdlbmRlcn0pLFxyXG4gICAgICAgICAgICBlbmNyeXB0ZWREYXRhOiBjLmVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAgIGl2OiBjLml2LFxyXG4gICAgICAgICAgICBVc2VyU2Vzc2lvbjogVXNlclNlc3Npb24uc2Vzc2lvbklkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5mbyBmcm9tIHdlY2hhdDogJyArIEpTT04uc3RyaW5naWZ5KHUpKTtcclxuICAgICAgICBpZih1ICYmIHUuZGF0YSAmJiB1LmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcsIHUuZGF0YS51c2VyX2lkKVxyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlckF1dGhvcml0eScsIHUuZGF0YS51c2VyX3Bvc2l0aW9uKVxyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlclNlc3Npb24nLCB1LmRhdGEuc2Vzc2lvbilcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdVc2VySWQ6ICcgKyBKU09OLnN0cmluZ2lmeSh1LmRhdGEudXNlcl9pZCkpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1VzZXJTZXNzaW9uOiAnICsgSlNPTi5zdHJpbmdpZnkodS5kYXRhLnNlc3Npb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19