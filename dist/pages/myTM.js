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
      listData: [],
      currentUser_id: '',
      subType: ''
      // imgUrls2: [{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}],
      // data1: [{imgUrl: '../assets/img/school.png', title: '#校园浪漫#'}, {imgUrl: '../assets/img/food.png', title: '#成都美食#'}, {imgUrl: '../assets/img/fire.png', title: '#燃烧青春#'}],
      // data2: [{imgUrl: '../assets/img/school.png', title: '#单身狗的日常#'}, {imgUrl: '../assets/img/food.png', title: '#我这么美为什么单身#'}, {imgUrl: '../assets/img/school.png', title: '#一起来运动#'}, {imgUrl: '../assets/img/school.png', title: '#我是学霸我怕谁#'}, {imgUrl: '../assets/img/fire.png', title: '#条骚市场#'}]
    }, _this.$repeat = { "listData": { "com": "postComponent", "props": "postData" } }, _this.$props = { "postComponent": { "xmlns:v-bind": { "value": "", "for": "listData", "item": "item", "index": "index", "key": "index" }, "v-bind:postData.once": { "value": "item", "type": "item", "for": "listData", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      postComponent: _postComponent2.default
    }, _this.methods = {
      goDetailPage: function goDetailPage(_id) {
        _wepy2.default.navigateTo({
          url: 'detailPage?post_id=' + _id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.currentUser_id = _wepy2.default.getStorageSync('UserId');
                this.subType = option.type;
                _context.next = 4;
                return this.loadData();

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
    key: 'loadData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.fetchPostList({
                  query: {
                    user_id: this.currentUser_id,
                    page: 0,
                    type: 'user',
                    subType: this.subType
                  }
                });

              case 2:
                res = _context2.sent;


                console.log('res.data.data: ' + JSON.stringify(res.data.data));
                if (res.data && res.data.flag == 'success') {
                  res.data.data.forEach(function (item) {
                    item.timeDiff = _util2.default.calcTime(item.createdAt);
                  });
                  this.listData = res.data.data;
                  this.$apply();
                }
                // this.listData = [
                //   {
                //     nickName: '谭马儒',
                //     createdAt: '昨日 23：27',
                //     msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //     imgUrls: ['../assets/img/1.jpeg', '../assets/img/2.jpeg', '../assets/img/3.jpeg', '../assets/img/4.jpg', '../assets/img/5.jpg'],
                //     commentsNum: 12,
                //     likesNum: 32
                //   },
                //   {
                //     nickName: '谭马儒',
                //     createdAt: '昨日 23：27',
                //     msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //     imgUrls: ['../assets/img/1.jpeg', '../assets/img/2.jpeg', '../assets/img/3.jpeg', '../assets/img/4.jpg', '../assets/img/5.jpg', '../assets/img/1.jpeg', '../assets/img/2.jpeg', '../assets/img/3.jpeg'],
                //     commentsNum: 12,
                //     likesNum: 32
                //   }
                // ]

              case 5:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15VE0uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJsaXN0RGF0YSIsImN1cnJlbnRVc2VyX2lkIiwic3ViVHlwZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBvc3RDb21wb25lbnQiLCJtZXRob2RzIiwiZ29EZXRhaWxQYWdlIiwiX2lkIiwibmF2aWdhdGVUbyIsInVybCIsIm9wdGlvbiIsImdldFN0b3JhZ2VTeW5jIiwidHlwZSIsImxvYWREYXRhIiwiZmV0Y2hQb3N0TGlzdCIsInF1ZXJ5IiwidXNlcl9pZCIsInBhZ2UiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImZsYWciLCJmb3JFYWNoIiwiaXRlbSIsInRpbWVEaWZmIiwiY2FsY1RpbWUiLCJjcmVhdGVkQXQiLCIkYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixNQUZqQjtBQUdQQyx1QkFBaUI7QUFIVixLLFFBS1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsc0JBQWdCLEVBSlg7QUFLTEMsZUFBUztBQUNUO0FBQ0E7QUFDQTtBQVJLLEssUUFVUkMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sZUFBUCxFQUF1QixTQUFRLFVBQS9CLEVBQVosRSxRQUNiQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sVUFBbEIsRUFBNkIsUUFBTyxNQUFwQyxFQUEyQyxTQUFRLE9BQW5ELEVBQTJELE9BQU0sT0FBakUsRUFBaEIsRUFBMEYsd0JBQXVCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxVQUFwQyxFQUErQyxRQUFPLE1BQXRELEVBQTZELFNBQVEsT0FBckUsRUFBNkUsT0FBTSxPQUFuRixFQUFqSCxFQUFqQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUE4Q1ZDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDTUMsR0FETixFQUNXO0FBQ2pCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssd0JBQXdCRjtBQURmLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs7MkZBM0NJRyxNOzs7OztBQUNaLHFCQUFLWixjQUFMLEdBQXNCLGVBQUthLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBdEI7QUFDQSxxQkFBS1osT0FBTCxHQUFlVyxPQUFPRSxJQUF0Qjs7dUJBQ00sS0FBS0MsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJVyxjQUFJQyxhQUFKLENBQWtCO0FBQ2hDQyx5QkFBTztBQUNMQyw2QkFBUyxLQUFLbEIsY0FEVDtBQUVMbUIsMEJBQU0sQ0FGRDtBQUdMTCwwQkFBTSxNQUhEO0FBSUxiLDZCQUFTLEtBQUtBO0FBSlQ7QUFEeUIsaUJBQWxCLEM7OztBQUFabUIsbUI7OztBQVNKQyx3QkFBUUMsR0FBUixDQUFZLG9CQUFvQkMsS0FBS0MsU0FBTCxDQUFlSixJQUFJM0IsSUFBSixDQUFTQSxJQUF4QixDQUFoQztBQUNBLG9CQUFHMkIsSUFBSTNCLElBQUosSUFBWTJCLElBQUkzQixJQUFKLENBQVNnQyxJQUFULElBQWlCLFNBQWhDLEVBQTJDO0FBQ3pDTCxzQkFBSTNCLElBQUosQ0FBU0EsSUFBVCxDQUFjaUMsT0FBZCxDQUFzQixVQUFTQyxJQUFULEVBQWU7QUFDbkNBLHlCQUFLQyxRQUFMLEdBQWdCLGVBQUtDLFFBQUwsQ0FBY0YsS0FBS0csU0FBbkIsQ0FBaEI7QUFDRCxtQkFGRDtBQUdBLHVCQUFLL0IsUUFBTCxHQUFnQnFCLElBQUkzQixJQUFKLENBQVNBLElBQXpCO0FBQ0EsdUJBQUtzQyxNQUFMO0FBQ0Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvRCtCLGVBQUtaLEk7O2tCQUFuQi9CLEsiLCJmaWxlIjoibXlUTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbiAgaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbHMvdXRpbCdcbiAgaW1wb3J0IHBvc3RDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0Q29tcG9uZW50J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzIwQkVFQycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq654q25oCBJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMzIsMjMyLDIzMiknXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbGlzdERhdGE6IFtdLFxuICAgICAgY3VycmVudFVzZXJfaWQ6ICcnLFxuICAgICAgc3ViVHlwZTogJydcbiAgICAgIC8vIGltZ1VybHMyOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ31dLFxuICAgICAgLy8gZGF0YTE6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5qCh5Zut5rWq5ryrIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9mb29kLnBuZycsIHRpdGxlOiAnI+aIkOmDvee+jumjnyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZmlyZS5wbmcnLCB0aXRsZTogJyPnh4Png6fpnZLmmKUjJ31dLFxuICAgICAgLy8gZGF0YTI6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5Y2V6Lqr54uX55qE5pel5bi4Iyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9mb29kLnBuZycsIHRpdGxlOiAnI+aIkei/meS5iOe+juS4uuS7gOS5iOWNlei6qyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+S4gOi1t+adpei/kOWKqCMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+aIkeaYr+WtpumcuOaIkeaAleiwgSMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZmlyZS5wbmcnLCB0aXRsZTogJyPmnaHpqprluILlnLojJ31dXG4gICAgfVxuICAgJHJlcGVhdCA9IHtcImxpc3REYXRhXCI6e1wiY29tXCI6XCJwb3N0Q29tcG9uZW50XCIsXCJwcm9wc1wiOlwicG9zdERhdGFcIn19O1xyXG4kcHJvcHMgPSB7XCJwb3N0Q29tcG9uZW50XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnBvc3REYXRhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwb3N0Q29tcG9uZW50IDogcG9zdENvbXBvbmVudFxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKG9wdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgICB0aGlzLnN1YlR5cGUgPSBvcHRpb24udHlwZVxuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkuZmV0Y2hQb3N0TGlzdCh7XG4gICAgICAgICBxdWVyeToge1xuICAgICAgICAgICB1c2VyX2lkOiB0aGlzLmN1cnJlbnRVc2VyX2lkLFxuICAgICAgICAgICBwYWdlOiAwLFxuICAgICAgICAgICB0eXBlOiAndXNlcicsXG4gICAgICAgICAgIHN1YlR5cGU6IHRoaXMuc3ViVHlwZVxuICAgICAgICAgfVxuICAgICAgIH0pXG5cbiAgICAgICBjb25zb2xlLmxvZygncmVzLmRhdGEuZGF0YTogJyArIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKVxuICAgICAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICByZXMuZGF0YS5kYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICBpdGVtLnRpbWVEaWZmID0gdXRpbC5jYWxjVGltZShpdGVtLmNyZWF0ZWRBdClcbiAgICAgICAgIH0pXG4gICAgICAgICB0aGlzLmxpc3REYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgIH1cbiAgICAgIC8vIHRoaXMubGlzdERhdGEgPSBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAvLyAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgLy8gICAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgICAvLyAgICAgaW1nVXJsczogWycuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzQuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnXSxcbiAgICAgIC8vICAgICBjb21tZW50c051bTogMTIsXG4gICAgICAvLyAgICAgbGlrZXNOdW06IDMyXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAvLyAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgLy8gICAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgICAvLyAgICAgaW1nVXJsczogWycuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzQuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy8xLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8yLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8zLmpwZWcnXSxcbiAgICAgIC8vICAgICBjb21tZW50c051bTogMTIsXG4gICAgICAvLyAgICAgbGlrZXNOdW06IDMyXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIF1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdvRGV0YWlsUGFnZSAoX2lkKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnZGV0YWlsUGFnZT9wb3N0X2lkPScgKyBfaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==