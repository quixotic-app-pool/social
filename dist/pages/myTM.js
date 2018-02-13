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
      subType: '',
      currentPage: -1
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
                // TODO: load data
                this.currentPage++;
                _context2.next = 3;
                return _api2.default.fetchPostList({
                  query: {
                    currentPage: this.currentPage,
                    user_id: this.currentUser_id,
                    type: 'user',
                    subType: this.subType,
                    matchType: 'post'
                  }
                });

              case 3:
                res = _context2.sent;


                //  console.log('res.data.data: ' + JSON.stringify(res.data.data))
                if (res.data && res.data.flag == 'success') {
                  res.data.data.forEach(function (item) {
                    item.timeDiff = _util2.default.calcTime(item.createdAt);
                  });
                  this.listData = res.data.data;
                  this.$apply();
                } else {
                  this.currentPage--;
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
                _wepy2.default.stopPullDownRefresh();
                this.$apply();

              case 7:
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
  }, {
    key: 'onReachBottom',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.loadImages();

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
    key: 'loadData',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.listData = [];
                this.currentPage = -1;
                // console.log('pull down')
                _context4.next = 4;
                return this.loadData();

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadData() {
        return _ref5.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/myTM'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15VE0uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJsaXN0RGF0YSIsImN1cnJlbnRVc2VyX2lkIiwic3ViVHlwZSIsImN1cnJlbnRQYWdlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicG9zdENvbXBvbmVudCIsIm1ldGhvZHMiLCJnb0RldGFpbFBhZ2UiLCJfaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwib3B0aW9uIiwiZ2V0U3RvcmFnZVN5bmMiLCJ0eXBlIiwibG9hZERhdGEiLCJmZXRjaFBvc3RMaXN0IiwicXVlcnkiLCJ1c2VyX2lkIiwibWF0Y2hUeXBlIiwicmVzIiwiZmxhZyIsImZvckVhY2giLCJpdGVtIiwidGltZURpZmYiLCJjYWxjVGltZSIsImNyZWF0ZWRBdCIsIiRhcHBseSIsInN0b3BQdWxsRG93blJlZnJlc2giLCJsb2FkSW1hZ2VzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLE1BRmpCO0FBR1BDLHVCQUFpQjtBQUhWLEssUUFLVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxzQkFBZ0IsRUFKWDtBQUtMQyxlQUFTLEVBTEo7QUFNTEMsbUJBQWEsQ0FBQztBQUNkO0FBQ0E7QUFDQTtBQVRLLEssUUFXUkMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sZUFBUCxFQUF1QixTQUFRLFVBQS9CLEVBQVosRSxRQUNiQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sVUFBbEIsRUFBNkIsUUFBTyxNQUFwQyxFQUEyQyxTQUFRLE9BQW5ELEVBQTJELE9BQU0sT0FBakUsRUFBaEIsRUFBMEYsd0JBQXVCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxVQUFwQyxFQUErQyxRQUFPLE1BQXRELEVBQTZELFNBQVEsT0FBckUsRUFBNkUsT0FBTSxPQUFuRixFQUFqSCxFQUFqQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUE4RFZDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDTUMsR0FETixFQUNXO0FBQ2pCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssd0JBQXdCRjtBQURmLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs7MkZBM0RJRyxNOzs7OztBQUNaLHFCQUFLYixjQUFMLEdBQXNCLGVBQUtjLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBdEI7QUFDQSxxQkFBS2IsT0FBTCxHQUFlWSxPQUFPRSxJQUF0Qjs7dUJBQ00sS0FBS0MsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR047QUFDQyxxQkFBS2QsV0FBTDs7dUJBQ2dCLGNBQUllLGFBQUosQ0FBa0I7QUFDaENDLHlCQUFPO0FBQ0xoQixpQ0FBYSxLQUFLQSxXQURiO0FBRUxpQiw2QkFBUyxLQUFLbkIsY0FGVDtBQUdMZSwwQkFBTSxNQUhEO0FBSUxkLDZCQUFTLEtBQUtBLE9BSlQ7QUFLTG1CLCtCQUFXO0FBTE47QUFEeUIsaUJBQWxCLEM7OztBQUFaQyxtQjs7O0FBVUw7QUFDQyxvQkFBR0EsSUFBSTVCLElBQUosSUFBWTRCLElBQUk1QixJQUFKLENBQVM2QixJQUFULElBQWlCLFNBQWhDLEVBQTJDO0FBQ3pDRCxzQkFBSTVCLElBQUosQ0FBU0EsSUFBVCxDQUFjOEIsT0FBZCxDQUFzQixVQUFTQyxJQUFULEVBQWU7QUFDbkNBLHlCQUFLQyxRQUFMLEdBQWdCLGVBQUtDLFFBQUwsQ0FBY0YsS0FBS0csU0FBbkIsQ0FBaEI7QUFDRCxtQkFGRDtBQUdBLHVCQUFLNUIsUUFBTCxHQUFnQnNCLElBQUk1QixJQUFKLENBQVNBLElBQXpCO0FBQ0EsdUJBQUttQyxNQUFMO0FBQ0QsaUJBTkQsTUFNTztBQUNMLHVCQUFLMUIsV0FBTDtBQUNEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQUsyQixtQkFBTDtBQUNBLHFCQUFLRCxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUlLLEtBQUtFLFVBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0wscUJBQUsvQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EscUJBQUtHLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtBQUNBOzt1QkFDTSxLQUFLYyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoRnlCLGVBQUtlLEk7O2tCQUFuQjNDLEsiLCJmaWxlIjoibXlUTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbiAgaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbHMvdXRpbCdcbiAgaW1wb3J0IHBvc3RDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0Q29tcG9uZW50J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzIwQkVFQycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq654q25oCBJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMzIsMjMyLDIzMiknXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbGlzdERhdGE6IFtdLFxuICAgICAgY3VycmVudFVzZXJfaWQ6ICcnLFxuICAgICAgc3ViVHlwZTogJycsXG4gICAgICBjdXJyZW50UGFnZTogLTFcbiAgICAgIC8vIGltZ1VybHMyOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ31dLFxuICAgICAgLy8gZGF0YTE6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5qCh5Zut5rWq5ryrIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9mb29kLnBuZycsIHRpdGxlOiAnI+aIkOmDvee+jumjnyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZmlyZS5wbmcnLCB0aXRsZTogJyPnh4Png6fpnZLmmKUjJ31dLFxuICAgICAgLy8gZGF0YTI6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5Y2V6Lqr54uX55qE5pel5bi4Iyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9mb29kLnBuZycsIHRpdGxlOiAnI+aIkei/meS5iOe+juS4uuS7gOS5iOWNlei6qyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+S4gOi1t+adpei/kOWKqCMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+aIkeaYr+WtpumcuOaIkeaAleiwgSMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZmlyZS5wbmcnLCB0aXRsZTogJyPmnaHpqprluILlnLojJ31dXG4gICAgfVxuICAgJHJlcGVhdCA9IHtcImxpc3REYXRhXCI6e1wiY29tXCI6XCJwb3N0Q29tcG9uZW50XCIsXCJwcm9wc1wiOlwicG9zdERhdGFcIn19O1xyXG4kcHJvcHMgPSB7XCJwb3N0Q29tcG9uZW50XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnBvc3REYXRhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwb3N0Q29tcG9uZW50IDogcG9zdENvbXBvbmVudFxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKG9wdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgICB0aGlzLnN1YlR5cGUgPSBvcHRpb24udHlwZVxuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgICAgIHRoaXMuY3VycmVudFBhZ2UrK1xuICAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkuZmV0Y2hQb3N0TGlzdCh7XG4gICAgICAgICBxdWVyeToge1xuICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgdXNlcl9pZDogdGhpcy5jdXJyZW50VXNlcl9pZCxcbiAgICAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICAgICBzdWJUeXBlOiB0aGlzLnN1YlR5cGUsXG4gICAgICAgICAgIG1hdGNoVHlwZTogJ3Bvc3QnXG4gICAgICAgICB9XG4gICAgICAgfSlcblxuICAgICAgLy8gIGNvbnNvbGUubG9nKCdyZXMuZGF0YS5kYXRhOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEuZGF0YSkpXG4gICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgIHJlcy5kYXRhLmRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgIGl0ZW0udGltZURpZmYgPSB1dGlsLmNhbGNUaW1lKGl0ZW0uY3JlYXRlZEF0KVxuICAgICAgICAgfSlcbiAgICAgICAgIHRoaXMubGlzdERhdGEgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UtLVxuICAgICAgIH1cbiAgICAgIC8vIHRoaXMubGlzdERhdGEgPSBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAvLyAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgLy8gICAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgICAvLyAgICAgaW1nVXJsczogWycuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzQuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnXSxcbiAgICAgIC8vICAgICBjb21tZW50c051bTogMTIsXG4gICAgICAvLyAgICAgbGlrZXNOdW06IDMyXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAvLyAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgLy8gICAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgICAvLyAgICAgaW1nVXJsczogWycuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzQuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy8xLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8yLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8zLmpwZWcnXSxcbiAgICAgIC8vICAgICBjb21tZW50c051bTogMTIsXG4gICAgICAvLyAgICAgbGlrZXNOdW06IDMyXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIF1cbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICAgIGFzeW5jIG9uUmVhY2hCb3R0b20gKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhdCBib3R0b20nKVxuICAgICBhd2FpdCB0aGlzLmxvYWRJbWFnZXMoKVxuICAgIH1cbiAgICBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAgICB0aGlzLmxpc3REYXRhID0gW11cbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAtMVxuICAgICAgLy8gY29uc29sZS5sb2coJ3B1bGwgZG93bicpXG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdvRGV0YWlsUGFnZSAoX2lkKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnZGV0YWlsUGFnZT9wb3N0X2lkPScgKyBfaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==