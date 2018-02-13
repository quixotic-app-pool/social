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
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TestPage, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // wepy.setNavigationBarTitle({title: option.topic})
                this.currentUser_id = _wepy2.default.getStorageSync('UserId');
                this.subType = option.type;
                _context.next = 4;
                return this.loadComments();

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadComments',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: load comment
                this.currentPage++;
                _context2.next = 3;
                return _api2.default.commentList({
                  query: {
                    currentPage: this.currentPage,
                    type: 'user',
                    subType: this.subType,
                    user_id: this.currentUser_id,
                    matchType: 'post'
                  }
                });

              case 3:
                res = _context2.sent;

                // console.log('comments: ' + JSON.stringify(res.data.data));
                if (res.data && res.data.flag == 'success') {
                  res.data.data.forEach(function (item) {
                    item.timeDiff = _util2.default.calcTime(item.createdAt);
                  });
                  this.myComments = res.data.data;
                  this.$apply();
                } else {
                  this.currentPage--;
                }
                _wepy2.default.stopPullDownRefresh();
                this.$apply();
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

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadComments() {
        return _ref3.apply(this, arguments);
      }

      return loadComments;
    }()
  }, {
    key: 'onReachBottom',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.loadComments();

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onReachBottom() {
        return _ref4.apply(this, arguments);
      }

      return onReachBottom;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.myComments = [];
                this.currentPage = -1;
                _context4.next = 4;
                return this.loadComments();

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onPullDownRefresh() {
        return _ref5.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()
  }]);

  return TestPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TestPage , 'pages/commentsPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzUGFnZS5qcyJdLCJuYW1lcyI6WyJUZXN0UGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteUNvbW1lbnRzIiwiY3VycmVudFBhZ2UiLCJ1c2VyX2lkIiwic3ViVHlwZSIsImNsaWNrYWJsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbW1lbnRzQ29tcG9uZW50IiwibWV0aG9kcyIsIm9wdGlvbiIsImN1cnJlbnRVc2VyX2lkIiwiZ2V0U3RvcmFnZVN5bmMiLCJ0eXBlIiwibG9hZENvbW1lbnRzIiwiY29tbWVudExpc3QiLCJxdWVyeSIsIm1hdGNoVHlwZSIsInJlcyIsImZsYWciLCJmb3JFYWNoIiwiaXRlbSIsInRpbWVEaWZmIiwiY2FsY1RpbWUiLCJjcmVhdGVkQXQiLCIkYXBwbHkiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsdUJBQWlCLFNBRlY7QUFHUEMsb0NBQThCLFNBSHZCO0FBSVBDLDhCQUF3QixPQUpqQjtBQUtQQyw2QkFBdUI7QUFMaEIsSyxRQU9UQyxJLEdBQU87QUFDTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRGpDO0FBRUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUZsQztBQUdMQyxrQkFBWSxFQUhQO0FBSUxDLG1CQUFhLENBQUMsQ0FKVDtBQUtMQyxlQUFTLEVBTEo7QUFNTEMsZUFBUyxFQU5KO0FBT0xDLGlCQUFXO0FBUE4sSyxRQVNSQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxxQkFBb0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwwQkFBeUIsWUFBNUMsRUFBeUQseUJBQXdCLFdBQWpGLEVBQXJCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQXVFWkMsTyxHQUFVLEU7Ozs7OzsyRkFwRUlDLE07Ozs7O0FBQ1o7QUFDQSxxQkFBS0MsY0FBTCxHQUFzQixlQUFLQyxjQUFMLENBQW9CLFFBQXBCLENBQXRCO0FBQ0EscUJBQUtWLE9BQUwsR0FBZVEsT0FBT0csSUFBdEI7O3VCQUNNLEtBQUtDLFlBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdOO0FBQ0EscUJBQUtkLFdBQUw7O3VCQUNnQixjQUFJZSxXQUFKLENBQWdCO0FBQzlCQyx5QkFBTztBQUNMaEIsaUNBQWEsS0FBS0EsV0FEYjtBQUVMYSwwQkFBTSxNQUZEO0FBR0xYLDZCQUFTLEtBQUtBLE9BSFQ7QUFJTEQsNkJBQVMsS0FBS1UsY0FKVDtBQUtMTSwrQkFBVztBQUxOO0FBRHVCLGlCQUFoQixDOzs7QUFBWkMsbUI7O0FBU0o7QUFDQSxvQkFBR0EsSUFBSXpCLElBQUosSUFBWXlCLElBQUl6QixJQUFKLENBQVMwQixJQUFULElBQWlCLFNBQWhDLEVBQTJDO0FBQ3pDRCxzQkFBSXpCLElBQUosQ0FBU0EsSUFBVCxDQUFjMkIsT0FBZCxDQUFzQixVQUFTQyxJQUFULEVBQWU7QUFDbkNBLHlCQUFLQyxRQUFMLEdBQWdCLGVBQUtDLFFBQUwsQ0FBY0YsS0FBS0csU0FBbkIsQ0FBaEI7QUFDRCxtQkFGRDtBQUdBLHVCQUFLekIsVUFBTCxHQUFrQm1CLElBQUl6QixJQUFKLENBQVNBLElBQTNCO0FBQ0EsdUJBQUtnQyxNQUFMO0FBQ0QsaUJBTkQsTUFNTztBQUNMLHVCQUFLekIsV0FBTDtBQUNEO0FBQ0QsK0JBQUswQixtQkFBTDtBQUNBLHFCQUFLRCxNQUFMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSUssS0FBS1gsWUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTCxxQkFBS2YsVUFBTCxHQUFrQixFQUFsQjtBQUNBLHFCQUFLQyxXQUFMLEdBQW1CLENBQUMsQ0FBcEI7O3VCQUNNLEtBQUtjLFlBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpGNEIsZUFBS2EsSTs7a0JBQXRCekMsUSIsImZpbGUiOiJjb21tZW50c1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5pbXBvcnQgY29tbWVudHNDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tZW50c0NvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdFBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOivhOiuuicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzZmZTBlNycsXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM2ZmUwZTcnLFxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICBteUNvbW1lbnRzOiBbXSxcbiAgICBjdXJyZW50UGFnZTogLTEsXG4gICAgdXNlcl9pZDogJycsXG4gICAgc3ViVHlwZTogJycsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImNvbW1lbnRzQ29tcG9uZW50XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpteUNvbW1lbnRzLnN5bmNcIjpcIm15Q29tbWVudHNcIixcInYtYmluZDpjbGlja2FibGUuc3luY1wiOlwiY2xpY2thYmxlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjb21tZW50c0NvbXBvbmVudCA6IGNvbW1lbnRzQ29tcG9uZW50XG4gIH1cbiAgYXN5bmMgb25Mb2FkIChvcHRpb24pIHtcbiAgICAvLyB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6IG9wdGlvbi50b3BpY30pXG4gICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgdGhpcy5zdWJUeXBlID0gb3B0aW9uLnR5cGVcbiAgICBhd2FpdCB0aGlzLmxvYWRDb21tZW50cygpXG4gIH1cbiAgYXN5bmMgbG9hZENvbW1lbnRzICgpIHtcbiAgICAvLyBUT0RPOiBsb2FkIGNvbW1lbnRcbiAgICB0aGlzLmN1cnJlbnRQYWdlKytcbiAgICB2YXIgcmVzID0gYXdhaXQgYXBpLmNvbW1lbnRMaXN0KHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICB0eXBlOiAndXNlcicsXG4gICAgICAgIHN1YlR5cGU6IHRoaXMuc3ViVHlwZSxcbiAgICAgICAgdXNlcl9pZDogdGhpcy5jdXJyZW50VXNlcl9pZCxcbiAgICAgICAgbWF0Y2hUeXBlOiAncG9zdCdcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKCdjb21tZW50czogJyArIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKTtcbiAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgcmVzLmRhdGEuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaXRlbS50aW1lRGlmZiA9IHV0aWwuY2FsY1RpbWUoaXRlbS5jcmVhdGVkQXQpXG4gICAgICB9KVxuICAgICAgdGhpcy5teUNvbW1lbnRzID0gcmVzLmRhdGEuZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlLS1cbiAgICB9XG4gICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB0aGlzLiRhcHBseSgpXG4gICAgLy8gdGhpcy5teUNvbW1lbnRzMSA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJyxcbiAgICAvLyAgICAgICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgLy8gICAgICAgZ2VuZGVyOiAnbWFsZScsXG4gICAgLy8gICAgICAgYWdlOiAyNSxcbiAgICAvLyAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgLy8gICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAvLyAgICAgICBsaWtlc051bTogMzJcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsXG4gICAgLy8gICAgICAgICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgLy8gICAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAvLyAgICAgICAgIGFnZTogMjUsXG4gICAgLy8gICAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgLy8gICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgIC8vICAgICAgICAgbGlrZXNOdW06IDMyXG4gICAgLy8gICAgICAgfSx7XG4gICAgLy8gICAgICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgIC8vICAgICAgICAgICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgLy8gICAgICAgICAgIGdlbmRlcjogJ21hbGUnLFxuICAgIC8vICAgICAgICAgICBhZ2U6IDI1LFxuICAgIC8vICAgICAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgLy8gICAgICAgICAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgLy8gICAgICAgICAgIGxpa2VzTnVtOiAzMlxuICAgIC8vICAgICAgICAgfVxuICAgIC8vIF1cbiAgfVxuICBhc3luYyBvblJlYWNoQm90dG9tICgpIHtcbiAgLy8gY29uc29sZS5sb2coJ2F0IGJvdHRvbScpXG4gICBhd2FpdCB0aGlzLmxvYWRDb21tZW50cygpXG4gIH1cbiAgYXN5bmMgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgIHRoaXMubXlDb21tZW50cyA9IFtdXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IC0xXG4gICAgYXdhaXQgdGhpcy5sb2FkQ29tbWVudHMoKVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gIH1cbn1cbiJdfQ==