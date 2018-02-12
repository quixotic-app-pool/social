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

var _commentsComponent = require('./../components/commentsComponent.js');

var _commentsComponent2 = _interopRequireDefault(_commentsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      navigationBarTitleText: '我的评论',
      backgroundColor: '#6fe0e7',
      navigationBarBackgroundColor: '#6fe0e7',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myComments: [],
      currentPage: -1,
      user_id: '',
      subType: '',
      clickable: true
    }, _this.$repeat = {}, _this.$props = { "commentsComponent": { "xmlns:v-bind": "", "v-bind:myComments.sync": "myComments", "v-bind:clickable.sync": "clickable" } }, _this.$events = {}, _this.components = {
      commentsComponent: _commentsComponent2.default
    }, _this.methods = {
      go: function () {
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

        function go() {
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
                this.currentUser_id = _wepy2.default.getStorageSync('UserId');
                this.subType = option.type;
                _context2.next = 4;
                return this.loadComments();

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadComments',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api2.default.commentList({
                  query: {
                    type: 'user',
                    subType: this.subType,
                    user_id: this.currentUser_id
                  }
                });

              case 2:
                res = _context3.sent;

                // console.log('comments: ' + JSON.stringify(res.data.data));
                if (res.data && res.data.flag == 'success') {
                  res.data.data.forEach(function (item) {
                    item.timeDiff = _util2.default.calcTime(item.createdAt);
                  });
                  this.myComments = res.data.data;
                  this.$apply();
                }
                // this.myComments1 = [
                //   {
                //       avatarUrl: '../assets/img/boy.jpeg',
                //       nickName: '谭马儒',
                //       gender: 'male',
                //       age: 25,
                //       createdAt: '昨日 23：27',
                //       msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //       likesNum: 32
                //     },
                //     {
                //         avatarUrl: '../assets/img/boy.jpeg',
                //         nickName: '谭马儒',
                //         gender: 'male',
                //         age: 25,
                //         createdAt: '昨日 23：27',
                //         msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //         likesNum: 32
                //       },{
                //           avatarUrl: '../assets/img/boy.jpeg',
                //           nickName: '谭马儒',
                //           gender: 'male',
                //           age: 25,
                //           createdAt: '昨日 23：27',
                //           msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //           likesNum: 32
                //         }
                // ]

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadComments() {
        return _ref4.apply(this, arguments);
      }

      return loadComments;
    }()
  }, {
    key: 'lower',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TestPage , 'pages/commentsPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzUGFnZS5qcyJdLCJuYW1lcyI6WyJUZXN0UGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteUNvbW1lbnRzIiwiY3VycmVudFBhZ2UiLCJ1c2VyX2lkIiwic3ViVHlwZSIsImNsaWNrYWJsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbW1lbnRzQ29tcG9uZW50IiwibWV0aG9kcyIsImdvIiwib3B0aW9uIiwiY3VycmVudFVzZXJfaWQiLCJnZXRTdG9yYWdlU3luYyIsInR5cGUiLCJsb2FkQ29tbWVudHMiLCJjb21tZW50TGlzdCIsInF1ZXJ5IiwicmVzIiwiZmxhZyIsImZvckVhY2giLCJpdGVtIiwidGltZURpZmYiLCJjYWxjVGltZSIsImNyZWF0ZWRBdCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQixTQUZWO0FBR1BDLG9DQUE4QixTQUh2QjtBQUlQQyw4QkFBd0IsT0FKakI7QUFLUEMsNkJBQXVCO0FBTGhCLEssUUFPVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsa0JBQVksRUFIUDtBQUlMQyxtQkFBYSxDQUFDLENBSlQ7QUFLTEMsZUFBUyxFQUxKO0FBTUxDLGVBQVMsRUFOSjtBQU9MQyxpQkFBVztBQVBOLEssUUFTUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMEJBQXlCLFlBQTVDLEVBQXlELHlCQUF3QixXQUFqRixFQUFyQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUE2RFpDLE8sR0FBVTtBQUNGQyxRQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs0RkExRElDLE07Ozs7O0FBQ1o7QUFDQSxxQkFBS0MsY0FBTCxHQUFzQixlQUFLQyxjQUFMLENBQW9CLFFBQXBCLENBQXRCO0FBQ0EscUJBQUtYLE9BQUwsR0FBZVMsT0FBT0csSUFBdEI7O3VCQUNNLEtBQUtDLFlBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSVUsY0FBSUMsV0FBSixDQUFnQjtBQUM5QkMseUJBQU87QUFDTEgsMEJBQU0sTUFERDtBQUVMWiw2QkFBUyxLQUFLQSxPQUZUO0FBR0xELDZCQUFTLEtBQUtXO0FBSFQ7QUFEdUIsaUJBQWhCLEM7OztBQUFaTSxtQjs7QUFPSjtBQUNBLG9CQUFHQSxJQUFJekIsSUFBSixJQUFZeUIsSUFBSXpCLElBQUosQ0FBUzBCLElBQVQsSUFBaUIsU0FBaEMsRUFBMkM7QUFDekNELHNCQUFJekIsSUFBSixDQUFTQSxJQUFULENBQWMyQixPQUFkLENBQXNCLFVBQVNDLElBQVQsRUFBZTtBQUNuQ0EseUJBQUtDLFFBQUwsR0FBZ0IsZUFBS0MsUUFBTCxDQUFjRixLQUFLRyxTQUFuQixDQUFoQjtBQUNELG1CQUZEO0FBR0EsdUJBQUt6QixVQUFMLEdBQWtCbUIsSUFBSXpCLElBQUosQ0FBU0EsSUFBM0I7QUFDQSx1QkFBS2dDLE1BQUw7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekVrQyxlQUFLQyxJOztrQkFBdEJ4QyxRIiwiZmlsZSI6ImNvbW1lbnRzUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbHMvdXRpbCdcbmltcG9ydCBjb21tZW50c0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1lbnRzQ29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0UGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE6K+E6K66JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNmZlMGU3JyxcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzZmZTBlNycsXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfVxuICBkYXRhID0ge1xuICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgIG15Q29tbWVudHM6IFtdLFxuICAgIGN1cnJlbnRQYWdlOiAtMSxcbiAgICB1c2VyX2lkOiAnJyxcbiAgICBzdWJUeXBlOiAnJyxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY29tbWVudHNDb21wb25lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm15Q29tbWVudHMuc3luY1wiOlwibXlDb21tZW50c1wiLFwidi1iaW5kOmNsaWNrYWJsZS5zeW5jXCI6XCJjbGlja2FibGVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNvbW1lbnRzQ29tcG9uZW50IDogY29tbWVudHNDb21wb25lbnRcbiAgfVxuICBhc3luYyBvbkxvYWQgKG9wdGlvbikge1xuICAgIC8vIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9uLnRvcGljfSlcbiAgICB0aGlzLmN1cnJlbnRVc2VyX2lkID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJylcbiAgICB0aGlzLnN1YlR5cGUgPSBvcHRpb24udHlwZVxuICAgIGF3YWl0IHRoaXMubG9hZENvbW1lbnRzKClcbiAgfVxuICBhc3luYyBsb2FkQ29tbWVudHMgKCkge1xuICAgIC8vIFRPRE86IGxvYWQgY29tbWVudFxuICAgIHZhciByZXMgPSBhd2FpdCBhcGkuY29tbWVudExpc3Qoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICBzdWJUeXBlOiB0aGlzLnN1YlR5cGUsXG4gICAgICAgIHVzZXJfaWQ6IHRoaXMuY3VycmVudFVzZXJfaWRcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKCdjb21tZW50czogJyArIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKTtcbiAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgcmVzLmRhdGEuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaXRlbS50aW1lRGlmZiA9IHV0aWwuY2FsY1RpbWUoaXRlbS5jcmVhdGVkQXQpXG4gICAgICB9KVxuICAgICAgdGhpcy5teUNvbW1lbnRzID0gcmVzLmRhdGEuZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgICAvLyB0aGlzLm15Q29tbWVudHMxID0gW1xuICAgIC8vICAge1xuICAgIC8vICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgIC8vICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAvLyAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAvLyAgICAgICBhZ2U6IDI1LFxuICAgIC8vICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAvLyAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgIC8vICAgICAgIGxpa2VzTnVtOiAzMlxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJyxcbiAgICAvLyAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAvLyAgICAgICAgIGdlbmRlcjogJ21hbGUnLFxuICAgIC8vICAgICAgICAgYWdlOiAyNSxcbiAgICAvLyAgICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAvLyAgICAgICAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgLy8gICAgICAgICBsaWtlc051bTogMzJcbiAgICAvLyAgICAgICB9LHtcbiAgICAvLyAgICAgICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsXG4gICAgLy8gICAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAvLyAgICAgICAgICAgZ2VuZGVyOiAnbWFsZScsXG4gICAgLy8gICAgICAgICAgIGFnZTogMjUsXG4gICAgLy8gICAgICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAvLyAgICAgICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAvLyAgICAgICAgICAgbGlrZXNOdW06IDMyXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gXVxuICB9XG4gYXN5bmMgbG93ZXIgKCkge1xuXG4gfVxuIGFzeW5jIHVwcGVyICgpIHtcblxuIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBnbyAoKSB7XG4gICAgfVxuICB9XG59XG4iXX0=