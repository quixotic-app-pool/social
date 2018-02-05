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
      pages: ['pages/minePage', 'pages/mainPage', 'pages/activityPage',
      // 'pages/newActivity',
      'pages/heldActivity', 'pages/timelinePage', 'pages/editPage',
      // 'pages/minePage',
      'pages/individualPage', 'pages/itemEditPage'],
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
          "pagePath": "pages/activityPage",
          "text": "线下",
          "iconPath": "assets/img/tab-event-empty.png",
          "selectedIconPath": "assets/img/tab-event-fill.png"
        }, {
          "pagePath": "pages/timelinePage",
          "text": "心情",
          "iconPath": "assets/img/tab-timeline-empty.png",
          "selectedIconPath": "assets/img/tab-timeline-fill.png"
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
        navigationBarTitleText: 'WeChat',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzZWxmIiwiZ2V0U3RvcmFnZVN5bmMiLCJVc2VyU2Vzc2lvbiIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsImxvZ2luIiwicmVzIiwiY29kZSIsImdldFVzZXJJbmZvIiwiYyIsInNldFN0b3JhZ2VTeW5jIiwic3lzdGVtSW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwid2VjaGF0QWN0aXZpdHkiLCJxdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImdlbmRlciIsImVuY3J5cHRlZERhdGEiLCJpdiIsInNlc3Npb25JZCIsInUiLCJkYXRhIiwiZmxhZyIsInVzZXJfaWQiLCJ1c2VyX3Bvc2l0aW9uIiwic2Vzc2lvbiIsImNiIiwidGhhdCIsInN1Y2Nlc3MiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUF2RGZBLE1BdURlLEdBdkROO0FBQ1BDLGFBQU8sQ0FDTCxnQkFESyxFQUVMLGdCQUZLLEVBR0wsb0JBSEs7QUFJTDtBQUNBLDBCQUxLLEVBTUwsb0JBTkssRUFPTCxnQkFQSztBQVFMO0FBQ0EsNEJBVEssRUFVTCxvQkFWSyxDQURBO0FBYVBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHlCQUFrQixTQUZa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QixlQUFLbkMsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJVLElBQUlWLFFBQS9CO0FBQ0FpQyxnQkFBTUEsR0FBR3ZCLElBQUlWLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXJIMEIsZUFBS29DLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IGFwaSBmcm9tICcuL2FwaS9hcGknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvbWluZVBhZ2UnLFxyXG4gICAgICAncGFnZXMvbWFpblBhZ2UnLFxyXG4gICAgICAncGFnZXMvYWN0aXZpdHlQYWdlJyxcclxuICAgICAgLy8gJ3BhZ2VzL25ld0FjdGl2aXR5JyxcclxuICAgICAgJ3BhZ2VzL2hlbGRBY3Rpdml0eScsXHJcbiAgICAgICdwYWdlcy90aW1lbGluZVBhZ2UnLFxyXG4gICAgICAncGFnZXMvZWRpdFBhZ2UnLFxyXG4gICAgICAvLyAncGFnZXMvbWluZVBhZ2UnLFxyXG4gICAgICAncGFnZXMvaW5kaXZpZHVhbFBhZ2UnLFxyXG4gICAgICAncGFnZXMvaXRlbUVkaXRQYWdlJ1xyXG4gICAgXSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBjb2xvcjogJyM4MjgyODInLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnI2ZmZmZmZicsXHJcbiAgICAgIGJvcmRlclN0eWxlIDogJ3doaXRlJyxcclxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyNGRjlGMDAnLFxyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9tYWluUGFnZVwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIue6v+S4ilwiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi1saXN0LWVtcHR5LnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLWxpc3QtZmlsbC5wbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2FjdGl2aXR5UGFnZVwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIue6v+S4i1wiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi1ldmVudC1lbXB0eS5wbmdcIixcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi1ldmVudC1maWxsLnBuZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvdGltZWxpbmVQYWdlXCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5b+D5oOFXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLXRpbWVsaW5lLWVtcHR5LnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLXRpbWVsaW5lLWZpbGwucG5nXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9taW5lUGFnZVwiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuiHquS4quWEv1wiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJhc3NldHMvaW1nL3RhYi1taW5lLWVtcHR5LnBuZ1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImFzc2V0cy9pbWcvdGFiLW1pbmUtZmlsbC5wbmdcIlxyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0NFNDUyRicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25MYXVuY2goKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgIHZhciB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJykgfHwge31cclxuICAgIC8vIGNvbnNvbGUubG9nKFwidXNlckluZm86IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlckluZm8pKTtcclxuICAgIHZhciBVc2VyU2Vzc2lvbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJTZXNzaW9uJykgfHwge31cclxuICAgIHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoJ1VzZXJTZXNzaW9uJylcclxuICAgIC8vIGlmKGZhbHNlKXtcclxuICAgIGlmKChVc2VyU2Vzc2lvbi5jcmVhdGVkQXQgfHwgRGF0ZS5ub3coKSkgPCAoRGF0ZS5ub3coKSArIDg2NDAwMDAwKSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnZXhwaXJlJyk7XHJcbiAgICAgIHZhciByZXMgPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3JlczogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXMuY29kZTogJyArIHJlcy5jb2RlKVxyXG5cclxuICAgICAgICAvL+WtmOWCqHVzZXJJbmZvwqBcclxuICAgICAgICB2YXIgYyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXJJbmZvJywgYy51c2VySW5mbylcclxuXHJcbiAgICAgICAgLy/lrZjlgqjns7vnu5/kv6Hmga/CoFxyXG4gICAgICAgIHZhciBzeXN0ZW1JbmZvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnU3lzdGVtSW5mbycsIHN5c3RlbUluZm8pXHJcblxyXG4gICAgICAgIHZhciB1ID0gYXdhaXQgYXBpLndlY2hhdEFjdGl2aXR5KHtcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlLFxyXG4gICAgICAgICAgICB1c2VySW5mbzogSlNPTi5zdHJpbmdpZnkoe25pY2tOYW1lOiBjLnVzZXJJbmZvLm5pY2tOYW1lLCBhdmF0YXJVcmw6IGMudXNlckluZm8uYXZhdGFyVXJsLCBnZW5kZXI6IGMudXNlckluZm8uZ2VuZGVyfSksXHJcbiAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IGMuZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgaXY6IGMuaXYsXHJcbiAgICAgICAgICAgIFVzZXJTZXNzaW9uOiBVc2VyU2Vzc2lvbi5zZXNzaW9uSWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbmZvIGZyb20gd2VjaGF0OiAnICsgSlNPTi5zdHJpbmdpZnkodSkpO1xyXG4gICAgICAgIGlmKHUgJiYgdS5kYXRhICYmIHUuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcklkJywgdS5kYXRhLnVzZXJfaWQpXHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdVc2VyQXV0aG9yaXR5JywgdS5kYXRhLnVzZXJfcG9zaXRpb24pXHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdVc2VyU2Vzc2lvbicsIHUuZGF0YS5zZXNzaW9uKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1VzZXJJZDogJyArIEpTT04uc3RyaW5naWZ5KHUuZGF0YS51c2VyX2lkKSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVXNlclNlc3Npb246ICcgKyBKU09OLnN0cmluZ2lmeSh1LmRhdGEuc2Vzc2lvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICB9XHJcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=