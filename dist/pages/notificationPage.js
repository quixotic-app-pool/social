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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      currentUser_id: ''
    }, _this.methods = {
      go: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
          var result, ob, post_id;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _api2.default.updateNotification({
                    query: {
                      _id: item._id
                    },
                    method: 'POST'
                  });

                case 2:
                  result = _context.sent;


                  if (result.data && result.data.flag == 'success') {
                    ob = this.dataList.find(function (o) {
                      return o._id == item._id;
                    });

                    if (ob.unRead == true) {
                      ob.unRead = false;
                    }
                    post_id = item.post.to_post ? item.post.to_post : item.post._id;

                    _wepy2.default.navigateTo({
                      url: 'detailPage?post_id=' + post_id
                    });
                    // this.$emit('event-notif')
                  } else {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '抱歉，服务器发生异常，请联系泽铭: takeiteasydude',
                      showCancel: false
                    });
                  }

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function go(_x) {
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
                this.currentUser_id = option.user_id;
                //load notification list
                _context2.next = 3;
                return this.loadData();

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x2) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadData',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var self, res, data, _self$dataList;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // TODO: load data
                self = this;

                self.currentPage++;
                _context3.next = 4;
                return _api2.default.fetchNotificationList({
                  query: {
                    currentPage: self.currentPage,
                    user_id: self.currentUser_id
                  }
                });

              case 4:
                res = _context3.sent;
                data = res.data;

                if (data.length) {
                  data.forEach(function (item, index) {
                    item.timeDiff = _util2.default.calcTime(item.createdAt);
                  });
                  if (self.dataList.length === 0) {
                    self.dataList = data;
                  } else {
                    (_self$dataList = self.dataList).push.apply(_self$dataList, _toConsumableArray(data));
                  }
                } else {
                  self.currentPage--;
                }
                _wepy2.default.stopPullDownRefresh();
                this.$apply();
                //  this.dataList = [
                //      {
                //       from_user: {
                //         nickName: '扎西德勒',
                //         avatarUrl: '../assets/img/boy.jpeg'
                //       },
                //       type: 'comment',
                //       post: {value: '标题标题是啥？'},
                //       unRead: true,
                //       createdAt: '两分钟前'
                //     },
                //     {
                //      from_user: {
                //        nickName: '小叮当',
                //        avatarUrl: '../assets/img/boy.jpeg'
                //      },
                //      type: 'like',
                //      post: {value: '标题标题是啥？'},
                //      unRead: true,
                //      createdAt: '两分钟前'
                //    },
                //    {
                //     from_user: {
                //       nickName: '小叮当',
                //       avatarUrl: '../assets/img/boy.jpeg'
                //     },
                //     type: 'comment',
                //     post: {value: '标题标题是啥？'},
                //     unRead: true,
                //     createdAt: '两分钟前'
                //   }
                //  ]

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadData() {
        return _ref4.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: 'lower',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.loadData();

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function lower() {
        return _ref5.apply(this, arguments);
      }

      return lower;
    }()
  }, {
    key: 'upper',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.dataList = [];
                this.currentPage = -1;
                _context5.next = 4;
                return this.loadData();

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function upper() {
        return _ref6.apply(this, arguments);
      }

      return upper;
    }()
  }]);

  return TestPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TestPage , 'pages/notificationPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOlsiVGVzdFBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwic2NyZWVuV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwic2NyZWVuSGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwiZGF0YUxpc3QiLCJjdXJyZW50UGFnZSIsImN1cnJlbnRVc2VyX2lkIiwibWV0aG9kcyIsImdvIiwiaXRlbSIsInVwZGF0ZU5vdGlmaWNhdGlvbiIsInF1ZXJ5IiwiX2lkIiwibWV0aG9kIiwicmVzdWx0IiwiZmxhZyIsIm9iIiwiZmluZCIsIm8iLCJ1blJlYWQiLCJwb3N0X2lkIiwicG9zdCIsInRvX3Bvc3QiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsIm9wdGlvbiIsInVzZXJfaWQiLCJsb2FkRGF0YSIsInNlbGYiLCJmZXRjaE5vdGlmaWNhdGlvbkxpc3QiLCJyZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaW5kZXgiLCJ0aW1lRGlmZiIsImNhbGNUaW1lIiwiY3JlYXRlZEF0IiwicHVzaCIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixLQURqQjtBQUVQQyx1QkFBaUIsU0FGVjtBQUdQQyxvQ0FBOEIsU0FIdkI7QUFJUEMsOEJBQXdCLE9BSmpCO0FBS1BDLDZCQUF1QjtBQUxoQixLLFFBT1RDLEksR0FBTztB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Ozs7Ozs7Ozs7dUJBR08sS0FBS1osUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTixxQkFBSzNCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxxQkFBS0MsV0FBTCxHQUFtQixDQUFDLENBQXBCOzt1QkFDTSxLQUFLMEIsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckY2QixlQUFLYSxJOztrQkFBdEJyRCxRIiwiZmlsZSI6Im5vdGlmaWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RQYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlrDmtojmga8nLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyM2ZmUwZTcnLFxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjNmZlMGU3JyxcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgZGF0YUxpc3Q6IFtdLFxuICAgIGN1cnJlbnRQYWdlOiAtMSxcbiAgICBjdXJyZW50VXNlcl9pZDogJydcbiAgfVxuICBhc3luYyBvbkxvYWQgKG9wdGlvbikge1xuICAgIC8vIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9uLnRvcGljfSlcbiAgICB0aGlzLmN1cnJlbnRVc2VyX2lkID0gb3B0aW9uLnVzZXJfaWRcbiAgICAvL2xvYWQgbm90aWZpY2F0aW9uIGxpc3RcbiAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgfVxuIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgdmFyIHNlbGYgPSB0aGlzXG4gICBzZWxmLmN1cnJlbnRQYWdlKytcbiAgIHZhciByZXMgPSBhd2FpdCBhcGkuZmV0Y2hOb3RpZmljYXRpb25MaXN0KHtcbiAgICAgcXVlcnk6IHtcbiAgICAgICBjdXJyZW50UGFnZTogc2VsZi5jdXJyZW50UGFnZSxcbiAgICAgICB1c2VyX2lkOiBzZWxmLmN1cnJlbnRVc2VyX2lkXG4gICAgIH1cbiAgIH0pXG4gICB2YXIgZGF0YSA9IHJlcy5kYXRhXG4gICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgaXRlbS50aW1lRGlmZiA9IHV0aWwuY2FsY1RpbWUoaXRlbS5jcmVhdGVkQXQpXG4gICAgIH0pXG4gICAgIGlmIChzZWxmLmRhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgIHNlbGYuZGF0YUxpc3QgPSBkYXRhXG4gICAgIH0gZWxzZSB7XG4gICAgICAgc2VsZi5kYXRhTGlzdC5wdXNoKC4uLmRhdGEpXG4gICAgIH1cbiAgIH0gZWxzZSB7XG4gICAgIHNlbGYuY3VycmVudFBhZ2UtLVxuICAgfVxuICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgIHRoaXMuJGFwcGx5KClcbiAgLy8gIHRoaXMuZGF0YUxpc3QgPSBbXG4gIC8vICAgICAge1xuICAvLyAgICAgICBmcm9tX3VzZXI6IHtcbiAgLy8gICAgICAgICBuaWNrTmFtZTogJ+aJjuilv+W+t+WLkicsXG4gIC8vICAgICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZydcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAgdHlwZTogJ2NvbW1lbnQnLFxuICAvLyAgICAgICBwb3N0OiB7dmFsdWU6ICfmoIfpopjmoIfpopjmmK/llaXvvJ8nfSxcbiAgLy8gICAgICAgdW5SZWFkOiB0cnVlLFxuICAvLyAgICAgICBjcmVhdGVkQXQ6ICfkuKTliIbpkp/liY0nXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgIGZyb21fdXNlcjoge1xuICAvLyAgICAgICAgbmlja05hbWU6ICflsI/lj67lvZMnLFxuICAvLyAgICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZydcbiAgLy8gICAgICB9LFxuICAvLyAgICAgIHR5cGU6ICdsaWtlJyxcbiAgLy8gICAgICBwb3N0OiB7dmFsdWU6ICfmoIfpopjmoIfpopjmmK/llaXvvJ8nfSxcbiAgLy8gICAgICB1blJlYWQ6IHRydWUsXG4gIC8vICAgICAgY3JlYXRlZEF0OiAn5Lik5YiG6ZKf5YmNJ1xuICAvLyAgICB9LFxuICAvLyAgICB7XG4gIC8vICAgICBmcm9tX3VzZXI6IHtcbiAgLy8gICAgICAgbmlja05hbWU6ICflsI/lj67lvZMnLFxuICAvLyAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJ1xuICAvLyAgICAgfSxcbiAgLy8gICAgIHR5cGU6ICdjb21tZW50JyxcbiAgLy8gICAgIHBvc3Q6IHt2YWx1ZTogJ+agh+mimOagh+mimOaYr+WVpe+8nyd9LFxuICAvLyAgICAgdW5SZWFkOiB0cnVlLFxuICAvLyAgICAgY3JlYXRlZEF0OiAn5Lik5YiG6ZKf5YmNJ1xuICAvLyAgIH1cbiAgLy8gIF1cbiB9XG4gYXN5bmMgbG93ZXIgKCkge1xuICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gfVxuIGFzeW5jIHVwcGVyICgpIHtcbiAgIHRoaXMuZGF0YUxpc3QgPSBbXVxuICAgdGhpcy5jdXJyZW50UGFnZSA9IC0xXG4gICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgZ28gKGl0ZW0pIHtcbiAgICAgIC8vIFRPRE86IHVwZGF0ZVxuICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGFwaS51cGRhdGVOb3RpZmljYXRpb24oe1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIF9pZDogaXRlbS5faWRcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgIH0pXG5cbiAgICAgIGlmKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIHZhciBvYiA9IHRoaXMuZGF0YUxpc3QuZmluZChmdW5jdGlvbihvKXtcbiAgICAgICAgICByZXR1cm4gby5faWQgPT0gaXRlbS5faWRcbiAgICAgICAgfSlcbiAgICAgICAgaWYob2IudW5SZWFkID09IHRydWUpIHtcbiAgICAgICAgICBvYi51blJlYWQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHZhciBwb3N0X2lkID0gaXRlbS5wb3N0LnRvX3Bvc3QgPyBpdGVtLnBvc3QudG9fcG9zdCA6IGl0ZW0ucG9zdC5faWRcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdkZXRhaWxQYWdlP3Bvc3RfaWQ9JyArIHBvc3RfaWRcbiAgICAgICAgfSlcbiAgICAgICAgLy8gdGhpcy4kZW1pdCgnZXZlbnQtbm90aWYnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICBjb250ZW50OiAn5oqx5q2J77yM5pyN5Yqh5Zmo5Y+R55Sf5byC5bi477yM6K+36IGU57O75rO96ZOtOiB0YWtlaXRlYXN5ZHVkZScsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==