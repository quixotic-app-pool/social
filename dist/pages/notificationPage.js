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
      allRead: function allRead() {
        // TODO: all set read
        var self = this;
        var count = 0;
        var ob = this.dataList.forEach(function (o) {
          count++;
          setTimeout(function () {
            o.unRead = false;
            self.$apply();
          }, 100 * count);
        });
      },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOlsiVGVzdFBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwic2NyZWVuV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwic2NyZWVuSGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwiZGF0YUxpc3QiLCJjdXJyZW50UGFnZSIsImN1cnJlbnRVc2VyX2lkIiwibWV0aG9kcyIsImFsbFJlYWQiLCJzZWxmIiwiY291bnQiLCJvYiIsImZvckVhY2giLCJvIiwic2V0VGltZW91dCIsInVuUmVhZCIsIiRhcHBseSIsImdvIiwiaXRlbSIsInVwZGF0ZU5vdGlmaWNhdGlvbiIsInF1ZXJ5IiwiX2lkIiwibWV0aG9kIiwicmVzdWx0IiwiZmxhZyIsImZpbmQiLCJwb3N0X2lkIiwicG9zdCIsInRvX3Bvc3QiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsIm9wdGlvbiIsInVzZXJfaWQiLCJsb2FkRGF0YSIsImZldGNoTm90aWZpY2F0aW9uTGlzdCIsInJlcyIsImxlbmd0aCIsImluZGV4IiwidGltZURpZmYiLCJjYWxjVGltZSIsImNyZWF0ZWRBdCIsInB1c2giLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsS0FEakI7QUFFUEMsdUJBQWlCLFNBRlY7QUFHUEMsb0NBQThCLFNBSHZCO0FBSVBDLDhCQUF3QixPQUpqQjtBQUtQ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ZCwwQ0FBc0IvQyxJQUF0QjtBQUNEO0FBQ0YsaUJBVEQsTUFTTztBQUNMVyx1QkFBS0osV0FBTDtBQUNEO0FBQ0QsK0JBQUt5QyxtQkFBTDtBQUNBLHFCQUFLOUIsTUFBTDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR08sS0FBS3FCLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR04scUJBQUtqQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EscUJBQUtDLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjs7dUJBQ00sS0FBS2dDLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJGNkIsZUFBS1UsSTs7a0JBQXRCeEQsUSIsImZpbGUiOiJub3RpZmljYXRpb25QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG5pbXBvcnQgdXRpbCBmcm9tICcuLi91dGlscy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0UGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paw5raI5oGvJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNmZlMGU3JyxcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzZmZTBlNycsXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfVxuICBkYXRhID0ge1xuICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgIGRhdGFMaXN0OiBbXSxcbiAgICBjdXJyZW50UGFnZTogLTEsXG4gICAgY3VycmVudFVzZXJfaWQ6ICcnXG4gIH1cbiAgYXN5bmMgb25Mb2FkIChvcHRpb24pIHtcbiAgICAvLyB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6IG9wdGlvbi50b3BpY30pXG4gICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IG9wdGlvbi51c2VyX2lkXG4gICAgLy9sb2FkIG5vdGlmaWNhdGlvbiBsaXN0XG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gIH1cbiBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAvLyBUT0RPOiBsb2FkIGRhdGFcbiAgIHZhciBzZWxmID0gdGhpc1xuICAgc2VsZi5jdXJyZW50UGFnZSsrXG4gICB2YXIgcmVzID0gYXdhaXQgYXBpLmZldGNoTm90aWZpY2F0aW9uTGlzdCh7XG4gICAgIHF1ZXJ5OiB7XG4gICAgICAgY3VycmVudFBhZ2U6IHNlbGYuY3VycmVudFBhZ2UsXG4gICAgICAgdXNlcl9pZDogc2VsZi5jdXJyZW50VXNlcl9pZFxuICAgICB9XG4gICB9KVxuICAgdmFyIGRhdGEgPSByZXMuZGF0YVxuICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgIGl0ZW0udGltZURpZmYgPSB1dGlsLmNhbGNUaW1lKGl0ZW0uY3JlYXRlZEF0KVxuICAgICB9KVxuICAgICBpZiAoc2VsZi5kYXRhTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICBzZWxmLmRhdGFMaXN0ID0gZGF0YVxuICAgICB9IGVsc2Uge1xuICAgICAgIHNlbGYuZGF0YUxpc3QucHVzaCguLi5kYXRhKVxuICAgICB9XG4gICB9IGVsc2Uge1xuICAgICBzZWxmLmN1cnJlbnRQYWdlLS1cbiAgIH1cbiAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICB0aGlzLiRhcHBseSgpXG4gIC8vICB0aGlzLmRhdGFMaXN0ID0gW1xuICAvLyAgICAgIHtcbiAgLy8gICAgICAgZnJvbV91c2VyOiB7XG4gIC8vICAgICAgICAgbmlja05hbWU6ICfmiY7opb/lvrfli5InLFxuICAvLyAgICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIHR5cGU6ICdjb21tZW50JyxcbiAgLy8gICAgICAgcG9zdDoge3ZhbHVlOiAn5qCH6aKY5qCH6aKY5piv5ZWl77yfJ30sXG4gIC8vICAgICAgIHVuUmVhZDogdHJ1ZSxcbiAgLy8gICAgICAgY3JlYXRlZEF0OiAn5Lik5YiG6ZKf5YmNJ1xuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICBmcm9tX3VzZXI6IHtcbiAgLy8gICAgICAgIG5pY2tOYW1lOiAn5bCP5Y+u5b2TJyxcbiAgLy8gICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnXG4gIC8vICAgICAgfSxcbiAgLy8gICAgICB0eXBlOiAnbGlrZScsXG4gIC8vICAgICAgcG9zdDoge3ZhbHVlOiAn5qCH6aKY5qCH6aKY5piv5ZWl77yfJ30sXG4gIC8vICAgICAgdW5SZWFkOiB0cnVlLFxuICAvLyAgICAgIGNyZWF0ZWRBdDogJ+S4pOWIhumSn+WJjSdcbiAgLy8gICAgfSxcbiAgLy8gICAge1xuICAvLyAgICAgZnJvbV91c2VyOiB7XG4gIC8vICAgICAgIG5pY2tOYW1lOiAn5bCP5Y+u5b2TJyxcbiAgLy8gICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZydcbiAgLy8gICAgIH0sXG4gIC8vICAgICB0eXBlOiAnY29tbWVudCcsXG4gIC8vICAgICBwb3N0OiB7dmFsdWU6ICfmoIfpopjmoIfpopjmmK/llaXvvJ8nfSxcbiAgLy8gICAgIHVuUmVhZDogdHJ1ZSxcbiAgLy8gICAgIGNyZWF0ZWRBdDogJ+S4pOWIhumSn+WJjSdcbiAgLy8gICB9XG4gIC8vICBdXG4gfVxuIGFzeW5jIGxvd2VyICgpIHtcbiAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuIH1cbiBhc3luYyB1cHBlciAoKSB7XG4gICB0aGlzLmRhdGFMaXN0ID0gW11cbiAgIHRoaXMuY3VycmVudFBhZ2UgPSAtMVxuICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gfVxuICBtZXRob2RzID0ge1xuICAgIGFsbFJlYWQgKCkge1xuICAgICAgLy8gVE9ETzogYWxsIHNldCByZWFkXG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHZhciBjb3VudCA9IDBcbiAgICAgIHZhciBvYiA9IHRoaXMuZGF0YUxpc3QuZm9yRWFjaChmdW5jdGlvbihvKXtcbiAgICAgICAgY291bnQrK1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgby51blJlYWQgPSBmYWxzZVxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfSwxMDAgKiBjb3VudClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhc3luYyBnbyAoaXRlbSkge1xuICAgICAgLy8gVE9ETzogdXBkYXRlXG4gICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXBpLnVwZGF0ZU5vdGlmaWNhdGlvbih7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgX2lkOiBpdGVtLl9pZFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgfSlcblxuICAgICAgaWYocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgdmFyIG9iID0gdGhpcy5kYXRhTGlzdC5maW5kKGZ1bmN0aW9uKG8pe1xuICAgICAgICAgIHJldHVybiBvLl9pZCA9PSBpdGVtLl9pZFxuICAgICAgICB9KVxuICAgICAgICBpZihvYi51blJlYWQgPT0gdHJ1ZSkge1xuICAgICAgICAgIG9iLnVuUmVhZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvc3RfaWQgPSBpdGVtLnBvc3QudG9fcG9zdCA/IGl0ZW0ucG9zdC50b19wb3N0IDogaXRlbS5wb3N0Ll9pZFxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2RldGFpbFBhZ2U/cG9zdF9pZD0nICsgcG9zdF9pZFxuICAgICAgICB9KVxuICAgICAgICAvLyB0aGlzLiRlbWl0KCdldmVudC1ub3RpZicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIGNvbnRlbnQ6ICfmirHmrYnvvIzmnI3liqHlmajlj5HnlJ/lvILluLjvvIzor7fogZTns7vms73pk606IHRha2VpdGVhc3lkdWRlJyxcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19