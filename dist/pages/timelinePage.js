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

var _postComponent = require('./../components/postComponent.js');

var _postComponent2 = _interopRequireDefault(_postComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarBackgroundColor: '#20BEEC',
      navigationBarTitleText: '相知于文字',
      backgroundColor: '#20BEEC'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      listData: [],
      numOfNotif: 0,
      currentUser_id: '',
      currentPage: -1
      // imgUrls2: [{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}],
      // data1: [{imgUrl: '../assets/img/school.png', title: '#校园浪漫#'}, {imgUrl: '../assets/img/food.png', title: '#成都美食#'}, {imgUrl: '../assets/img/fire.png', title: '#燃烧青春#'}],
      // data2: [{imgUrl: '../assets/img/school.png', title: '#单身狗的日常#'}, {imgUrl: '../assets/img/food.png', title: '#我这么美为什么单身#'}, {imgUrl: '../assets/img/school.png', title: '#一起来运动#'}, {imgUrl: '../assets/img/school.png', title: '#我是学霸我怕谁#'}, {imgUrl: '../assets/img/fire.png', title: '#条骚市场#'}]
    }, _this.$repeat = { "listData": { "com": "postComponent", "props": "postData.sync" } }, _this.$props = { "postComponent": { "xmlns:v-bind": { "value": "", "for": "listData", "item": "item", "index": "index", "key": "index" }, "v-bind:postData.sync": { "value": "item", "type": "item", "for": "listData", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      postComponent: _postComponent2.default
    }, _this.methods = {
      editStatus: function editStatus() {
        // console.log('this.currentUser_id: ' + this.currentUser_id);
        _wepy2.default.navigateTo({
          url: 'editPage?type=post&user_id=' + this.currentUser_id
        });
      },
      go: function go(_id) {
        _wepy2.default.navigateTo({
          url: 'detailPage?post_id=' + _id
        });
      },
      notifications: function notifications() {
        _wepy2.default.navigateTo({
          url: 'notificationPage?user_id=' + this.currentUser_id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.currentUser_id = _wepy2.default.getStorageSync('UserId');
                _context.next = 3;
                return this.loadData();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.fetchNotificationNum({
                  query: {
                    user_id: this.currentUser_id
                  }
                });

              case 2:
                result = _context2.sent;

                // console.log('num: ' + JSON.stringify(result.data));
                if (result.data && result.data.flag == 'success') {
                  this.numOfNotif = result.data.numOfNotif;
                  // console.log('insde' + JSON.stringify(this.numOfNotif));
                  _wepy2.default.stopPullDownRefresh();
                  this.$apply();
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'loadData',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res, _listData;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // TODO: load data
                this.currentPage++;
                _context3.next = 3;
                return _api2.default.fetchPostList({
                  query: {
                    currentPage: this.currentPage,
                    user_id: this.currentUser_id,
                    page: 0,
                    type: 'post'
                  }
                });

              case 3:
                res = _context3.sent;


                //  console.log('timeline res.data.data: ' +  JSON.stringify(res.data.data))
                if (res.data && res.data.flag == 'success') {
                  res.data.data.forEach(function (item) {
                    item.timeDiff = _util2.default.calcTime(item.createdAt);
                  });
                  if (this.listData.length) {
                    (_listData = this.listData).push.apply(_listData, _toConsumableArray(res.data.data));
                  } else {
                    this.listData = res.data.data;
                  }
                } else {
                  this.currentPage--;
                }
                //  console.log('this.listData: ' + JSON.stringify(this.listData))
                _wepy2.default.stopPullDownRefresh();
                this.$apply();
                // this.listData = [
                //   {
                //     nickName: '谭马儒',
                //     createdAt: '昨日 23：27',
                //     msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //     imgUrls: ['../assets/img/5.jpg', '../assets/img/4.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                //     commentsNum: 12,
                //     likesNum: 32
                //   },
                //   {
                //     nickName: '谭马儒',
                //     createdAt: '昨日 23：27',
                //     msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //     imgUrls: ['../assets/img/4.jpg', '../assets/img/5.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                //     commentsNum: 12,
                //     likesNum: 32
                //   }
                // ]

              case 7:
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
    key: 'onReachBottom',
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

      function onReachBottom() {
        return _ref5.apply(this, arguments);
      }

      return onReachBottom;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.listData = [];
                this.currentPage = -1;
                // console.log('pull down')
                _context5.next = 4;
                return this.loadData();

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onPullDownRefresh() {
        return _ref6.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/timelinePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lUGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImxpc3REYXRhIiwibnVtT2ZOb3RpZiIsImN1cnJlbnRVc2VyX2lkIiwiY3VycmVudFBhZ2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0Q29tcG9uZW50IiwibWV0aG9kcyIsImVkaXRTdGF0dXMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ28iLCJfaWQiLCJub3RpZmljYXRpb25zIiwiZ2V0U3RvcmFnZVN5bmMiLCJsb2FkRGF0YSIsImZldGNoTm90aWZpY2F0aW9uTnVtIiwicXVlcnkiLCJ1c2VyX2lkIiwicmVzdWx0IiwiZmxhZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkYXBwbHkiLCJmZXRjaFBvc3RMaXN0IiwicGFnZSIsInR5cGUiLCJyZXMiLCJmb3JFYWNoIiwiaXRlbSIsInRpbWVEaWZmIiwiY2FsY1RpbWUiLCJjcmVhdGVkQXQiLCJsZW5ndGgiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyx1QkFBaUI7QUFIVixLLFFBS1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUtLLEtBQUtQLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0wscUJBQUtqQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EscUJBQUtHLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtBQUNBOzt1QkFDTSxLQUFLYyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyR3lCLGVBQUtTLEk7O2tCQUFuQnJDLEsiLCJmaWxlIjoidGltZWxpbmVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuICBpbXBvcnQgdXRpbCBmcm9tICcuLi91dGlscy91dGlsJ1xuICBpbXBvcnQgcG9zdENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RDb21wb25lbnQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMjBCRUVDJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm7jnn6Xkuo7mloflrZcnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIwQkVFQydcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBsaXN0RGF0YTogW10sXG4gICAgICBudW1PZk5vdGlmOiAwLFxuICAgICAgY3VycmVudFVzZXJfaWQ6ICcnLFxuICAgICAgY3VycmVudFBhZ2U6IC0xXG4gICAgICAvLyBpbWdVcmxzMjogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9XSxcbiAgICAgIC8vIGRhdGExOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+agoeWbrea1qua8qyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZm9vZC5wbmcnLCB0aXRsZTogJyPmiJDpg73nvo7po58jJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2ZpcmUucG5nJywgdGl0bGU6ICcj54eD54On6Z2S5pilIyd9XSxcbiAgICAgIC8vIGRhdGEyOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+WNlei6q+eLl+eahOaXpeW4uCMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZm9vZC5wbmcnLCB0aXRsZTogJyPmiJHov5nkuYjnvo7kuLrku4DkuYjljZXouqsjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPkuIDotbfmnaXov5DliqgjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPmiJHmmK/lrabpnLjmiJHmgJXosIEjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2ZpcmUucG5nJywgdGl0bGU6ICcj5p2h6aqa5biC5Zy6Iyd9XVxuICAgIH1cbiAgICRyZXBlYXQgPSB7XCJsaXN0RGF0YVwiOntcImNvbVwiOlwicG9zdENvbXBvbmVudFwiLFwicHJvcHNcIjpcInBvc3REYXRhLnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJwb3N0Q29tcG9uZW50XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnBvc3REYXRhLnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwb3N0Q29tcG9uZW50IDogcG9zdENvbXBvbmVudFxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICB9XG4gICAgYXN5bmMgb25TaG93ICgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzaG93aW5nJyk7XG4gICAgICAvLyB0aGlzLmxpc3REYXRhID0gW11cbiAgICAgIC8vIHRoaXMuY3VycmVudFBhZ2UgPSAtMVxuICAgICAgLy8gYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXBpLmZldGNoTm90aWZpY2F0aW9uTnVtKHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICB1c2VyX2lkOiB0aGlzLmN1cnJlbnRVc2VyX2lkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZygnbnVtOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEpKTtcbiAgICAgIGlmKHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIHRoaXMubnVtT2ZOb3RpZiA9IHJlc3VsdC5kYXRhLm51bU9mTm90aWZcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luc2RlJyArIEpTT04uc3RyaW5naWZ5KHRoaXMubnVtT2ZOb3RpZikpO1xuICAgICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgICAgIHRoaXMuY3VycmVudFBhZ2UrK1xuICAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkuZmV0Y2hQb3N0TGlzdCh7XG4gICAgICAgICBxdWVyeToge1xuICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgdXNlcl9pZDogdGhpcy5jdXJyZW50VXNlcl9pZCxcbiAgICAgICAgICAgcGFnZTogMCxcbiAgICAgICAgICAgdHlwZTogJ3Bvc3QnXG4gICAgICAgICB9XG4gICAgICAgfSlcblxuICAgICAgLy8gIGNvbnNvbGUubG9nKCd0aW1lbGluZSByZXMuZGF0YS5kYXRhOiAnICsgIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKVxuICAgICAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICByZXMuZGF0YS5kYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICBpdGVtLnRpbWVEaWZmID0gdXRpbC5jYWxjVGltZShpdGVtLmNyZWF0ZWRBdClcbiAgICAgICAgIH0pXG4gICAgICAgICBpZih0aGlzLmxpc3REYXRhLmxlbmd0aCkge1xuICAgICAgICAgICB0aGlzLmxpc3REYXRhLnB1c2goLi4ucmVzLmRhdGEuZGF0YSlcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHRoaXMubGlzdERhdGEgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICB9XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UtLVxuICAgICAgIH1cbiAgICAgIC8vICBjb25zb2xlLmxvZygndGhpcy5saXN0RGF0YTogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdERhdGEpKVxuICAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gdGhpcy5saXN0RGF0YSA9IFtcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgIC8vICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAvLyAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgIC8vICAgICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZyddLFxuICAgICAgLy8gICAgIGNvbW1lbnRzTnVtOiAxMixcbiAgICAgIC8vICAgICBsaWtlc051bTogMzJcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgIC8vICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAvLyAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgIC8vICAgICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvNC5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZyddLFxuICAgICAgLy8gICAgIGNvbW1lbnRzTnVtOiAxMixcbiAgICAgIC8vICAgICBsaWtlc051bTogMzJcbiAgICAgIC8vICAgfVxuICAgICAgLy8gXVxuXG4gICAgfVxuICAgIGFzeW5jIG9uUmVhY2hCb3R0b20gKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhdCBib3R0b20nKVxuICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICB9XG4gICAgYXN5bmMgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgICAgdGhpcy5saXN0RGF0YSA9IFtdXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gLTFcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdwdWxsIGRvd24nKVxuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBlZGl0U3RhdHVzICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuY3VycmVudFVzZXJfaWQ6ICcgKyB0aGlzLmN1cnJlbnRVc2VyX2lkKTtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdlZGl0UGFnZT90eXBlPXBvc3QmdXNlcl9pZD0nICsgdGhpcy5jdXJyZW50VXNlcl9pZFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvKF9pZCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2RldGFpbFBhZ2U/cG9zdF9pZD0nICsgX2lkXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgbm90aWZpY2F0aW9ucyAoKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnbm90aWZpY2F0aW9uUGFnZT91c2VyX2lkPScgKyB0aGlzLmN1cnJlbnRVc2VyX2lkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=