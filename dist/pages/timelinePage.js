'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _postComponent = require('./../components/postComponent.js');

var _postComponent2 = _interopRequireDefault(_postComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      backgroundColor: 'rgb(232,232,232)'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      listData: [],
      notifNum: 0
      // imgUrls2: [{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}],
      // data1: [{imgUrl: '../assets/img/school.png', title: '#校园浪漫#'}, {imgUrl: '../assets/img/food.png', title: '#成都美食#'}, {imgUrl: '../assets/img/fire.png', title: '#燃烧青春#'}],
      // data2: [{imgUrl: '../assets/img/school.png', title: '#单身狗的日常#'}, {imgUrl: '../assets/img/food.png', title: '#我这么美为什么单身#'}, {imgUrl: '../assets/img/school.png', title: '#一起来运动#'}, {imgUrl: '../assets/img/school.png', title: '#我是学霸我怕谁#'}, {imgUrl: '../assets/img/fire.png', title: '#条骚市场#'}]
    }, _this.$repeat = { "listData": { "com": "postComponent", "props": "postData.sync" } }, _this.$props = { "postComponent": { "xmlns:v-bind": { "value": "", "for": "listData", "item": "item", "index": "index", "key": "index" }, "v-bind:postData.sync": { "value": "item", "type": "item", "for": "listData", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      postComponent: _postComponent2.default
    }, _this.methods = {
      editStatus: function editStatus() {
        _wepy2.default.navigateTo({
          url: 'editPage'
        });
      },
      go: function go(page) {
        _wepy2.default.navigateTo({
          url: page
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
                _context.next = 2;
                return this.loadData();

              case 2:
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
    key: 'loadData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: load data
                //  var res = await api.fetchPostList({
                //    query: {
                //      page: 0,
                //      type: 'all'
                //    }
                //  })
                //
                //  if(res.data && res.data.flag == 'success') {
                //    list = res.data.data
                //  }
                this.listData = [{
                  nickName: '谭马儒',
                  createdAt: '昨日 23：27',
                  msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  imgUrls: ['../assets/img/5.jpg', '../assets/img/4.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                  commentsNum: 12,
                  likesNum: 32
                }, {
                  nickName: '谭马儒',
                  createdAt: '昨日 23：27',
                  msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  imgUrls: ['../assets/img/4.jpg', '../assets/img/5.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                  commentsNum: 12,
                  likesNum: 32
                }];

                this.notifNum = 66;

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _ref3.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/timelinePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lUGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImxpc3REYXRhIiwibm90aWZOdW0iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0Q29tcG9uZW50IiwibWV0aG9kcyIsImVkaXRTdGF0dXMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ28iLCJwYWdlIiwibG9hZERhdGEiLCJuaWNrTmFtZSIsImNyZWF0ZWRBdCIsIm1zZyIsImltZ1VybHMiLCJjb21tZW50c051bSIsImxpa2VzTnVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyx1QkFBaUI7QUFIVixLLFFBS1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsZ0JBQVU7QUFDVjtBQUNBO0FBQ0E7QUFQSyxLLFFBU1JDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxPQUFNLGVBQVAsRUFBdUIsU0FBUSxlQUEvQixFQUFaLEUsUUFDYkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFVBQWxCLEVBQTZCLFFBQU8sTUFBcEMsRUFBMkMsU0FBUSxPQUFuRCxFQUEyRCxPQUFNLE9BQWpFLEVBQWhCLEVBQTBGLHdCQUF1QixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sVUFBcEMsRUFBK0MsUUFBTyxNQUF0RCxFQUE2RCxTQUFRLE9BQXJFLEVBQTZFLE9BQU0sT0FBbkYsRUFBakgsRUFBakIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBdUNWQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ007QUFDWix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFFBTlEsY0FNTEMsSUFOSyxFQU1DO0FBQ1AsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsZUFBS0U7QUFEUyxTQUFoQjtBQUdEO0FBVk8sSzs7Ozs7Ozs7Ozs7O3VCQW5DRixLQUFLQyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7QUFDQSxxQkFBS2IsUUFBTCxHQUFnQixDQUNkO0FBQ0VjLDRCQUFVLEtBRFo7QUFFRUMsNkJBQVcsVUFGYjtBQUdFQyx1QkFBSyxpREFIUDtBQUlFQywyQkFBUyxDQUFDLHFCQUFELEVBQXdCLHFCQUF4QixFQUErQyxzQkFBL0MsRUFBdUUsc0JBQXZFLEVBQStGLHNCQUEvRixFQUF1SCxxQkFBdkgsRUFBOEkscUJBQTlJLEVBQXFLLHFCQUFySyxDQUpYO0FBS0VDLCtCQUFhLEVBTGY7QUFNRUMsNEJBQVU7QUFOWixpQkFEYyxFQVNkO0FBQ0VMLDRCQUFVLEtBRFo7QUFFRUMsNkJBQVcsVUFGYjtBQUdFQyx1QkFBSyxpREFIUDtBQUlFQywyQkFBUyxDQUFDLHFCQUFELEVBQXdCLHFCQUF4QixFQUErQyxzQkFBL0MsRUFBdUUsc0JBQXZFLEVBQStGLHNCQUEvRixFQUF1SCxxQkFBdkgsRUFBOEkscUJBQTlJLEVBQXFLLHFCQUFySyxDQUpYO0FBS0VDLCtCQUFhLEVBTGY7QUFNRUMsNEJBQVU7QUFOWixpQkFUYyxDQUFoQjs7QUFtQkEscUJBQUtsQixRQUFMLEdBQWdCLEVBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkQrQixlQUFLVyxJOztrQkFBbkJ2QixLIiwiZmlsZSI6InRpbWVsaW5lUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgcG9zdENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RDb21wb25lbnQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMjBCRUVDJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm7jnn6Xkuo7mloflrZcnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIzMiwyMzIsMjMyKSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBsaXN0RGF0YTogW10sXG4gICAgICBub3RpZk51bTogMFxuICAgICAgLy8gaW1nVXJsczI6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfV0sXG4gICAgICAvLyBkYXRhMTogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPmoKHlm63mtarmvKsjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2Zvb2QucG5nJywgdGl0bGU6ICcj5oiQ6YO9576O6aOfIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9maXJlLnBuZycsIHRpdGxlOiAnI+eHg+eDp+mdkuaYpSMnfV0sXG4gICAgICAvLyBkYXRhMjogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPljZXouqvni5fnmoTml6XluLgjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2Zvb2QucG5nJywgdGl0bGU6ICcj5oiR6L+Z5LmI576O5Li65LuA5LmI5Y2V6LqrIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5LiA6LW35p2l6L+Q5YqoIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5oiR5piv5a2m6Zy45oiR5oCV6LCBIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9maXJlLnBuZycsIHRpdGxlOiAnI+adoemqmuW4guWcuiMnfV1cbiAgICB9XG4gICAkcmVwZWF0ID0ge1wibGlzdERhdGFcIjp7XCJjb21cIjpcInBvc3RDb21wb25lbnRcIixcInByb3BzXCI6XCJwb3N0RGF0YS5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wicG9zdENvbXBvbmVudFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdERhdGFcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpwb3N0RGF0YS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdERhdGFcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgcG9zdENvbXBvbmVudCA6IHBvc3RDb21wb25lbnRcbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkICgpIHtcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIH1cbiAgICBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAgICAvLyBUT0RPOiBsb2FkIGRhdGFcbiAgICAgIC8vICB2YXIgcmVzID0gYXdhaXQgYXBpLmZldGNoUG9zdExpc3Qoe1xuICAgICAgLy8gICAgcXVlcnk6IHtcbiAgICAgIC8vICAgICAgcGFnZTogMCxcbiAgICAgIC8vICAgICAgdHlwZTogJ2FsbCdcbiAgICAgIC8vICAgIH1cbiAgICAgIC8vICB9KVxuICAgICAgIC8vXG4gICAgICAvLyAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgIC8vICAgIGxpc3QgPSByZXMuZGF0YS5kYXRhXG4gICAgICAvLyAgfVxuICAgICAgdGhpcy5saXN0RGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgICAgICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZyddLFxuICAgICAgICAgIGNvbW1lbnRzTnVtOiAxMixcbiAgICAgICAgICBsaWtlc051bTogMzJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgICAgICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvNC5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZyddLFxuICAgICAgICAgIGNvbW1lbnRzTnVtOiAxMixcbiAgICAgICAgICBsaWtlc051bTogMzJcbiAgICAgICAgfVxuICAgICAgXVxuXG4gICAgICB0aGlzLm5vdGlmTnVtID0gNjZcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGVkaXRTdGF0dXMgKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2VkaXRQYWdlJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvKHBhZ2UpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IHBhZ2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==