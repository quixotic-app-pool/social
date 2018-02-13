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

              case 1:
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
                // console.log('showing');
                // this.listData = []
                // this.currentPage = -1
                // await this.loadData()
                this.currentPage = -1;
                this.listData = [];
                _context2.next = 4;
                return this.loadData();

              case 4:
                _context2.next = 6;
                return _api2.default.fetchNotificationNum({
                  query: {
                    user_id: this.currentUser_id
                  }
                });

              case 6:
                result = _context2.sent;

                // console.log('num: ' + JSON.stringify(result.data));
                if (result.data && result.data.flag == 'success') {
                  this.numOfNotif = result.data.numOfNotif;
                  // console.log('insde' + JSON.stringify(this.numOfNotif));
                  _wepy2.default.stopPullDownRefresh();
                  this.$apply();
                }

              case 8:
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
                // console.log('???');
                this.currentPage++;
                _context3.next = 3;
                return _api2.default.fetchPostList({
                  query: {
                    currentPage: this.currentPage,
                    user_id: this.currentUser_id,
                    type: 'post'
                  }
                });

              case 3:
                res = _context3.sent;


                console.log('timeline res.data.data: ' + JSON.stringify(res.data.data));
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

              case 8:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lUGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImxpc3REYXRhIiwibnVtT2ZOb3RpZiIsImN1cnJlbnRVc2VyX2lkIiwiY3VycmVudFBhZ2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0Q29tcG9uZW50IiwibWV0aG9kcyIsImVkaXRTdGF0dXMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ28iLCJfaWQiLCJub3RpZmljYXRpb25zIiwiZ2V0U3RvcmFnZVN5bmMiLCJsb2FkRGF0YSIsImZldGNoTm90aWZpY2F0aW9uTnVtIiwicXVlcnkiLCJ1c2VyX2lkIiwicmVzdWx0IiwiZmxhZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkYXBwbHkiLCJmZXRjaFBvc3RMaXN0IiwidHlwZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsIml0ZW0iLCJ0aW1lRGlmZiIsImNhbGNUaW1lIiwiY3JlYXRlZEF0IiwibGVuZ3RoIiwicHVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLHVCQUFpQjtBQUhWLEssUUFLVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxH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TCx5QkFBS00sUUFBTCxHQUFnQjJCLElBQUlqQyxJQUFKLENBQVNBLElBQXpCO0FBQ0Q7QUFDRixpQkFURCxNQVNPO0FBQ0wsdUJBQUtTLFdBQUw7QUFDRDtBQUNGO0FBQ0MsK0JBQUtvQixtQkFBTDtBQUNBLHFCQUFLQyxNQUFMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUtLLEtBQUtQLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0wscUJBQUtqQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EscUJBQUtHLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtBQUNBOzt1QkFDTSxLQUFLYyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2R3lCLGVBQUtzQixJOztrQkFBbkJsRCxLIiwiZmlsZSI6InRpbWVsaW5lUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbiAgaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbHMvdXRpbCdcbiAgaW1wb3J0IHBvc3RDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0Q29tcG9uZW50J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzIwQkVFQycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55u455+l5LqO5paH5a2XJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMEJFRUMnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbGlzdERhdGE6IFtdLFxuICAgICAgbnVtT2ZOb3RpZjogMCxcbiAgICAgIGN1cnJlbnRVc2VyX2lkOiAnJyxcbiAgICAgIGN1cnJlbnRQYWdlOiAtMVxuICAgICAgLy8gaW1nVXJsczI6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfV0sXG4gICAgICAvLyBkYXRhMTogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPmoKHlm63mtarmvKsjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2Zvb2QucG5nJywgdGl0bGU6ICcj5oiQ6YO9576O6aOfIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9maXJlLnBuZycsIHRpdGxlOiAnI+eHg+eDp+mdkuaYpSMnfV0sXG4gICAgICAvLyBkYXRhMjogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPljZXouqvni5fnmoTml6XluLgjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2Zvb2QucG5nJywgdGl0bGU6ICcj5oiR6L+Z5LmI576O5Li65LuA5LmI5Y2V6LqrIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5LiA6LW35p2l6L+Q5YqoIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5oiR5piv5a2m6Zy45oiR5oCV6LCBIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9maXJlLnBuZycsIHRpdGxlOiAnI+adoemqmuW4guWcuiMnfV1cbiAgICB9XG4gICAkcmVwZWF0ID0ge1wibGlzdERhdGFcIjp7XCJjb21cIjpcInBvc3RDb21wb25lbnRcIixcInByb3BzXCI6XCJwb3N0RGF0YS5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wicG9zdENvbXBvbmVudFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdERhdGFcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpwb3N0RGF0YS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdERhdGFcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgcG9zdENvbXBvbmVudCA6IHBvc3RDb21wb25lbnRcbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkICgpIHtcbiAgICAgIHRoaXMuY3VycmVudFVzZXJfaWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VySWQnKVxuICAgIH1cbiAgICBhc3luYyBvblNob3cgKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3Nob3dpbmcnKTtcbiAgICAgIC8vIHRoaXMubGlzdERhdGEgPSBbXVxuICAgICAgLy8gdGhpcy5jdXJyZW50UGFnZSA9IC0xXG4gICAgICAvLyBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAtMVxuICAgICAgdGhpcy5saXN0RGF0YSA9IFtdXG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBhcGkuZmV0Y2hOb3RpZmljYXRpb25OdW0oe1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIHVzZXJfaWQ6IHRoaXMuY3VycmVudFVzZXJfaWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdudW06ICcgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YSkpO1xuICAgICAgaWYocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgdGhpcy5udW1PZk5vdGlmID0gcmVzdWx0LmRhdGEubnVtT2ZOb3RpZlxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5zZGUnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5udW1PZk5vdGlmKSk7XG4gICAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgbG9hZERhdGEgKCkge1xuICAgICAgLy8gVE9ETzogbG9hZCBkYXRhXG4gICAgICAvLyBjb25zb2xlLmxvZygnPz8/Jyk7XG4gICAgICAgdGhpcy5jdXJyZW50UGFnZSsrXG4gICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5mZXRjaFBvc3RMaXN0KHtcbiAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICB1c2VyX2lkOiB0aGlzLmN1cnJlbnRVc2VyX2lkLFxuICAgICAgICAgICB0eXBlOiAncG9zdCdcbiAgICAgICAgIH1cbiAgICAgICB9KVxuXG4gICAgICAgY29uc29sZS5sb2coJ3RpbWVsaW5lIHJlcy5kYXRhLmRhdGE6ICcgKyAgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEuZGF0YSkpXG4gICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgIHJlcy5kYXRhLmRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgIGl0ZW0udGltZURpZmYgPSB1dGlsLmNhbGNUaW1lKGl0ZW0uY3JlYXRlZEF0KVxuICAgICAgICAgfSlcbiAgICAgICAgIGlmKHRoaXMubGlzdERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgIHRoaXMubGlzdERhdGEucHVzaCguLi5yZXMuZGF0YS5kYXRhKVxuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgdGhpcy5saXN0RGF0YSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgIH1cbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5jdXJyZW50UGFnZS0tXG4gICAgICAgfVxuICAgICAgLy8gIGNvbnNvbGUubG9nKCd0aGlzLmxpc3REYXRhOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0RGF0YSkpXG4gICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyB0aGlzLmxpc3REYXRhID0gW1xuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgLy8gICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgIC8vICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgLy8gICAgIGltZ1VybHM6IFsnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJywgJy4uL2Fzc2V0cy9pbWcvMy5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMi5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMS5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJ10sXG4gICAgICAvLyAgICAgY29tbWVudHNOdW06IDEyLFxuICAgICAgLy8gICAgIGxpa2VzTnVtOiAzMlxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgLy8gICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgIC8vICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgLy8gICAgIGltZ1VybHM6IFsnLi4vYXNzZXRzL2ltZy80LmpwZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvMy5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMi5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMS5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJ10sXG4gICAgICAvLyAgICAgY29tbWVudHNOdW06IDEyLFxuICAgICAgLy8gICAgIGxpa2VzTnVtOiAzMlxuICAgICAgLy8gICB9XG4gICAgICAvLyBdXG5cbiAgICB9XG4gICAgYXN5bmMgb25SZWFjaEJvdHRvbSAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2F0IGJvdHRvbScpXG4gICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIH1cbiAgICBhc3luYyBvblB1bGxEb3duUmVmcmVzaCAoKSB7XG4gICAgICB0aGlzLmxpc3REYXRhID0gW11cbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAtMVxuICAgICAgLy8gY29uc29sZS5sb2coJ3B1bGwgZG93bicpXG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGVkaXRTdGF0dXMgKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5jdXJyZW50VXNlcl9pZDogJyArIHRoaXMuY3VycmVudFVzZXJfaWQpO1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2VkaXRQYWdlP3R5cGU9cG9zdCZ1c2VyX2lkPScgKyB0aGlzLmN1cnJlbnRVc2VyX2lkXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ28oX2lkKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnZGV0YWlsUGFnZT9wb3N0X2lkPScgKyBfaWRcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBub3RpZmljYXRpb25zICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdub3RpZmljYXRpb25QYWdlP3VzZXJfaWQ9JyArIHRoaXMuY3VycmVudFVzZXJfaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==