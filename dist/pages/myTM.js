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
      navigationBarTitleText: '个人状态',
      backgroundColor: 'rgb(232,232,232)'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      listData: []
      // imgUrls2: [{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}],
      // data1: [{imgUrl: '../assets/img/school.png', title: '#校园浪漫#'}, {imgUrl: '../assets/img/food.png', title: '#成都美食#'}, {imgUrl: '../assets/img/fire.png', title: '#燃烧青春#'}],
      // data2: [{imgUrl: '../assets/img/school.png', title: '#单身狗的日常#'}, {imgUrl: '../assets/img/food.png', title: '#我这么美为什么单身#'}, {imgUrl: '../assets/img/school.png', title: '#一起来运动#'}, {imgUrl: '../assets/img/school.png', title: '#我是学霸我怕谁#'}, {imgUrl: '../assets/img/fire.png', title: '#条骚市场#'}]
    }, _this.$repeat = { "listData": { "com": "postComponent", "props": "postData" } }, _this.$props = { "postComponent": { "xmlns:v-bind": { "value": "", "for": "listData", "item": "item", "index": "index", "key": "index" }, "v-bind:postData.once": { "value": "item", "type": "item", "for": "listData", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      postComponent: _postComponent2.default
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
                //      type: '?'
                //    }
                //  })
                //
                //  if(res.data && res.data.flag == 'success') {
                //    list = res.data.data
                //  }
                this.listData = [
                  // {
                  //   nickName: '谭马儒',
                  //   createdAt: '昨日 23：27',
                  //   msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  //   imgUrls: ['../assets/img/1.jpeg', '../assets/img/2.jpeg', '../assets/img/3.jpeg', '../assets/img/4.jpg', '../assets/img/5.jpg'],
                  //   commentsNum: 12,
                  //   likesNum: 32
                  // },
                  // {
                  //   nickName: '谭马儒',
                  //   createdAt: '昨日 23：27',
                  //   msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  //   imgUrls: ['../assets/img/1.jpeg', '../assets/img/2.jpeg', '../assets/img/3.jpeg', '../assets/img/4.jpg', '../assets/img/5.jpg', '../assets/img/1.jpeg', '../assets/img/2.jpeg', '../assets/img/3.jpeg'],
                  //   commentsNum: 12,
                  //   likesNum: 32
                  // }
                ];

              case 1:
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/myTM'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15VE0uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJsaXN0RGF0YSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBvc3RDb21wb25lbnQiLCJtZXRob2RzIiwibG9hZERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixNQUZqQjtBQUdQQyx1QkFBaUI7QUFIVixLLFFBS1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGdCQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBTkssSyxRQVFSQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsT0FBTSxlQUFQLEVBQXVCLFNBQVEsVUFBL0IsRUFBWixFLFFBQ2JDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxVQUFsQixFQUE2QixRQUFPLE1BQXBDLEVBQTJDLFNBQVEsT0FBbkQsRUFBMkQsT0FBTSxPQUFqRSxFQUFoQixFQUEwRix3QkFBdUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFVBQXBDLEVBQStDLFFBQU8sTUFBdEQsRUFBNkQsU0FBUSxPQUFyRSxFQUE2RSxPQUFNLE9BQW5GLEVBQWpILEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQXFDVkMsTyxHQUFVLEU7Ozs7Ozs7Ozs7Ozt1QkFqQ0YsS0FBS0MsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EscUJBQUtQLFFBQUwsR0FBZ0I7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCYyxpQkFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQytCLGVBQUtRLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoibXlUTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgcG9zdENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RDb21wb25lbnQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMjBCRUVDJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrnirbmgIEnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIzMiwyMzIsMjMyKSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBsaXN0RGF0YTogW11cbiAgICAgIC8vIGltZ1VybHMyOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ31dLFxuICAgICAgLy8gZGF0YTE6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5qCh5Zut5rWq5ryrIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9mb29kLnBuZycsIHRpdGxlOiAnI+aIkOmDvee+jumjnyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZmlyZS5wbmcnLCB0aXRsZTogJyPnh4Png6fpnZLmmKUjJ31dLFxuICAgICAgLy8gZGF0YTI6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5Y2V6Lqr54uX55qE5pel5bi4Iyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9mb29kLnBuZycsIHRpdGxlOiAnI+aIkei/meS5iOe+juS4uuS7gOS5iOWNlei6qyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+S4gOi1t+adpei/kOWKqCMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+aIkeaYr+WtpumcuOaIkeaAleiwgSMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZmlyZS5wbmcnLCB0aXRsZTogJyPmnaHpqprluILlnLojJ31dXG4gICAgfVxuICAgJHJlcGVhdCA9IHtcImxpc3REYXRhXCI6e1wiY29tXCI6XCJwb3N0Q29tcG9uZW50XCIsXCJwcm9wc1wiOlwicG9zdERhdGFcIn19O1xyXG4kcHJvcHMgPSB7XCJwb3N0Q29tcG9uZW50XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnBvc3REYXRhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwb3N0Q29tcG9uZW50IDogcG9zdENvbXBvbmVudFxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgICAgLy8gIHZhciByZXMgPSBhd2FpdCBhcGkuZmV0Y2hQb3N0TGlzdCh7XG4gICAgICAvLyAgICBxdWVyeToge1xuICAgICAgLy8gICAgICBwYWdlOiAwLFxuICAgICAgLy8gICAgICB0eXBlOiAnPydcbiAgICAgIC8vICAgIH1cbiAgICAgIC8vICB9KVxuICAgICAgIC8vXG4gICAgICAvLyAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgIC8vICAgIGxpc3QgPSByZXMuZGF0YS5kYXRhXG4gICAgICAvLyAgfVxuICAgICAgdGhpcy5saXN0RGF0YSA9IFtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgICAgLy8gICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAgIC8vICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgICAgLy8gICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvMS5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMi5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMy5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvNC5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZyddLFxuICAgICAgICAvLyAgIGNvbW1lbnRzTnVtOiAxMixcbiAgICAgICAgLy8gICBsaWtlc051bTogMzJcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgICAgLy8gICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAgIC8vICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgICAgLy8gICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvMS5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMi5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMy5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvNC5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzMuanBlZyddLFxuICAgICAgICAvLyAgIGNvbW1lbnRzTnVtOiAxMixcbiAgICAgICAgLy8gICBsaWtlc051bTogMzJcbiAgICAgICAgLy8gfVxuICAgICAgXVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgfVxuIl19