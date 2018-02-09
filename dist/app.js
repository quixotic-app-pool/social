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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInNlbGYiLCJnZXRTdG9yYWdlU3luYyIsIlVzZXJTZXNzaW9uIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwibG9naW4iLCJyZXMiLCJjb2RlIiwiZ2V0VXNlckluZm8iLCJjIiwic2V0U3RvcmFnZVN5bmMiLCJzeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3ZWNoYXRBY3Rpdml0eSIsInF1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiZ2VuZGVyIiwiZW5jcnlwdGVkRGF0YSIsIml2Iiwic2Vzc2lvbklkIiwidSIsImRhdGEiLCJmbGFnIiwidXNlcl9pZCIsInVzZXJfcG9zaXRpb24iLCJzZXNzaW9uIiwiY2IiLCJ0aGF0Iiwic3VjY2VzcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQTFEZkEsTUEwRGUsR0ExRE47QUFDUEMsYUFBTyxDQUNMLGdCQURLLEVBRUwsb0JBRkssRUFHTCx1QkFISyxFQUlMLG9CQUpLLEVBS0wsWUFMSyxFQU1MLGdCQU5LLEVBT0wsZ0JBUEssRUFRTCxzQkFSSyxFQVNMLG9CQVRLLEVBVUwsaUJBVkssRUFXTCxvQkFYSyxFQVlMLHdCQVpLLEVBYUwsa0JBYkssRUFjTCxnQkFkSyxDQURBO0FBaUJQQyxjQUFRO0FB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RE0sRUFDRDtBQUNad0IsZUFBS25DLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCVSxJQUFJVixRQUEvQjtBQUNBaUMsZ0JBQU1BLEdBQUd2QixJQUFJVixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUF4SDBCLGVBQUtvQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGkvYXBpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL21haW5QYWdlJyxcclxuICAgICAgJ3BhZ2VzL2FjdGl2aXR5UGFnZScsXHJcbiAgICAgICdwYWdlcy9hY3Rpdml0eVdlYlBhZ2UnLFxyXG4gICAgICAncGFnZXMvdGltZWxpbmVQYWdlJyxcclxuICAgICAgJ3BhZ2VzL215VE0nLFxyXG4gICAgICAncGFnZXMvZWRpdFBhZ2UnLFxyXG4gICAgICAncGFnZXMvbWluZVBhZ2UnLFxyXG4gICAgICAncGFnZXMvaW5kaXZpZHVhbFBhZ2UnLFxyXG4gICAgICAncGFnZXMvaXRlbUVkaXRQYWdlJyxcclxuICAgICAgJ3BhZ2VzL2Fib3V0UGFnZScsXHJcbiAgICAgICdwYWdlcy9jb21tZW50c1BhZ2UnLFxyXG4gICAgICAncGFnZXMvbm90aWZpY2F0aW9uUGFnZScsXHJcbiAgICAgICdwYWdlcy9kZXRhaWxQYWdlJyxcclxuICAgICAgJ3BhZ2VzL2xpc3RQYWdlJ1xyXG4gICAgXSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBjb2xvcjogJyM4MjgyODInLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnI2ZmZmZmZicsXHJcbiAgICAgIGJvcmRlclN0eWxlIDogJ3doaXRlJyxcclxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyNGRjlGMDAnLFxyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9tYWluUGFnZVwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIue6v+S4ilwiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi1saXN0LWVtcHR5LnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLWxpc3QtZmlsbC5wbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL3RpbWVsaW5lUGFnZVwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuW/g+aDhVwiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi10aW1lbGluZS1lbXB0eS5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi10aW1lbGluZS1maWxsLnBuZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvYWN0aXZpdHlQYWdlXCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi57q/5LiLXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLWV2ZW50LWVtcHR5LnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLWV2ZW50LWZpbGwucG5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9taW5lUGFnZVwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuiHquS4quWEv1wiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi1taW5lLWVtcHR5LnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLW1pbmUtZmlsbC5wbmdcIlxyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0NFNDUyRicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxhdW5jaCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgdmFyIHVzZXJJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKSB8fCB7fVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJ1c2VySW5mbzogXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VySW5mbykpO1xyXG4gICAgdmFyIFVzZXJTZXNzaW9uID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlclNlc3Npb24nKSB8fCB7fVxyXG4gICAgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnVXNlclNlc3Npb24nKVxyXG4gICAgLy8gaWYoZmFsc2Upe1xyXG4gICAgaWYoKFVzZXJTZXNzaW9uLmNyZWF0ZWRBdCB8fCBEYXRlLm5vdygpKSA8IChEYXRlLm5vdygpICsgODY0MDAwMDApKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdleHBpcmUnKTtcclxuICAgICAgdmFyIHJlcyA9IGF3YWl0IHdlcHkubG9naW4oKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZygncmVzOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlcy5jb2RlOiAnICsgcmVzLmNvZGUpXHJcblxyXG4gICAgICAgIC8v5a2Y5YKodXNlckluZm/CoFxyXG4gICAgICAgIHZhciBjID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlckluZm8nLCBjLnVzZXJJbmZvKVxyXG5cclxuICAgICAgICAvL+WtmOWCqOezu+e7n+S/oeaBr8KgXHJcbiAgICAgICAgdmFyIHN5c3RlbUluZm8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdTeXN0ZW1JbmZvJywgc3lzdGVtSW5mbylcclxuXHJcbiAgICAgICAgdmFyIHUgPSBhd2FpdCBhcGkud2VjaGF0QWN0aXZpdHkoe1xyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiBKU09OLnN0cmluZ2lmeSh7bmlja05hbWU6IGMudXNlckluZm8ubmlja05hbWUsIGF2YXRhclVybDogYy51c2VySW5mby5hdmF0YXJVcmwsIGdlbmRlcjogYy51c2VySW5mby5nZW5kZXJ9KSxcclxuICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogYy5lbmNyeXB0ZWREYXRhLFxyXG4gICAgICAgICAgICBpdjogYy5pdixcclxuICAgICAgICAgICAgVXNlclNlc3Npb246IFVzZXJTZXNzaW9uLnNlc3Npb25JZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luZm8gZnJvbSB3ZWNoYXQ6ICcgKyBKU09OLnN0cmluZ2lmeSh1KSk7XHJcbiAgICAgICAgaWYodSAmJiB1LmRhdGEgJiYgdS5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdVc2VySWQnLCB1LmRhdGEudXNlcl9pZClcclxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXJBdXRob3JpdHknLCB1LmRhdGEudXNlcl9wb3NpdGlvbilcclxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXJTZXNzaW9uJywgdS5kYXRhLnNlc3Npb24pXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVXNlcklkOiAnICsgSlNPTi5zdHJpbmdpZnkodS5kYXRhLnVzZXJfaWQpKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdVc2VyU2Vzc2lvbjogJyArIEpTT04uc3RyaW5naWZ5KHUuZGF0YS5zZXNzaW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==