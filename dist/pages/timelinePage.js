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
                this.listData = [
                  // {
                  //   nickName: '谭马儒',
                  //   createdAt: '昨日 23：27',
                  //   msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  //   imgUrls: ['../assets/img/5.jpg', '../assets/img/4.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                  //   commentsNum: 12,
                  //   likesNum: 32
                  // },
                  // {
                  //   nickName: '谭马儒',
                  //   createdAt: '昨日 23：27',
                  //   msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  //   imgUrls: ['../assets/img/4.jpg', '../assets/img/5.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                  //   commentsNum: 12,
                  //   likesNum: 32
                  // }
                ];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lUGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImxpc3REYXRhIiwibm90aWZOdW0iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0Q29tcG9uZW50IiwibWV0aG9kcyIsImVkaXRTdGF0dXMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ28iLCJwYWdlIiwibG9hZERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLHVCQUFpQjtBQUhWLEssUUFLVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxnQkFBVTtBQUNWO0FBQ0E7QUFDQTtBQVBLLEssUUFTUkMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sZUFBUCxFQUF1QixTQUFRLGVBQS9CLEVBQVosRSxRQUNiQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sVUFBbEIsRUFBNkIsUUFBTyxNQUFwQyxFQUEyQyxTQUFRLE9BQW5ELEVBQTJELE9BQU0sT0FBakUsRUFBaEIsRUFBMEYsd0JBQXVCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxVQUFwQyxFQUErQyxRQUFPLE1BQXRELEVBQTZELFNBQVEsT0FBckUsRUFBNkUsT0FBTSxPQUFuRixFQUFqSCxFQUFqQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUF1Q1ZDLE8sR0FBVTtBQUNSQyxnQkFEUSx3QkFDTTtBQUNaLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsUUFOUSxjQU1MQyxJQU5LLEVBTUM7QUFDUCx1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLRTtBQURTLFNBQWhCO0FBR0Q7QUFWTyxLOzs7Ozs7Ozs7Ozs7dUJBbkNGLEtBQUtDLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFCQUFLYixRQUFMLEdBQWdCO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQmMsaUJBQWhCOztBQW1CQSxxQkFBS0MsUUFBTCxHQUFnQixFQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZEK0IsZUFBS1csSTs7a0JBQW5CdkIsSyIsImZpbGUiOiJ0aW1lbGluZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHBvc3RDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0Q29tcG9uZW50J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzIwQkVFQycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55u455+l5LqO5paH5a2XJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMzIsMjMyLDIzMiknXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbGlzdERhdGE6IFtdLFxuICAgICAgbm90aWZOdW06IDBcbiAgICAgIC8vIGltZ1VybHMyOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ31dLFxuICAgICAgLy8gZGF0YTE6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5qCh5Zut5rWq5ryrIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9mb29kLnBuZycsIHRpdGxlOiAnI+aIkOmDvee+jumjnyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZmlyZS5wbmcnLCB0aXRsZTogJyPnh4Png6fpnZLmmKUjJ31dLFxuICAgICAgLy8gZGF0YTI6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5Y2V6Lqr54uX55qE5pel5bi4Iyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9mb29kLnBuZycsIHRpdGxlOiAnI+aIkei/meS5iOe+juS4uuS7gOS5iOWNlei6qyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+S4gOi1t+adpei/kOWKqCMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+aIkeaYr+WtpumcuOaIkeaAleiwgSMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZmlyZS5wbmcnLCB0aXRsZTogJyPmnaHpqprluILlnLojJ31dXG4gICAgfVxuICAgJHJlcGVhdCA9IHtcImxpc3REYXRhXCI6e1wiY29tXCI6XCJwb3N0Q29tcG9uZW50XCIsXCJwcm9wc1wiOlwicG9zdERhdGEuc3luY1wifX07XHJcbiRwcm9wcyA9IHtcInBvc3RDb21wb25lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3REYXRhXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6cG9zdERhdGEuc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImxpc3REYXRhXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHBvc3RDb21wb25lbnQgOiBwb3N0Q29tcG9uZW50XG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCAoKSB7XG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICB9XG4gICAgYXN5bmMgbG9hZERhdGEgKCkge1xuICAgICAgLy8gVE9ETzogbG9hZCBkYXRhXG4gICAgICAvLyAgdmFyIHJlcyA9IGF3YWl0IGFwaS5mZXRjaFBvc3RMaXN0KHtcbiAgICAgIC8vICAgIHF1ZXJ5OiB7XG4gICAgICAvLyAgICAgIHBhZ2U6IDAsXG4gICAgICAvLyAgICAgIHR5cGU6ICdhbGwnXG4gICAgICAvLyAgICB9XG4gICAgICAvLyAgfSlcbiAgICAgICAvL1xuICAgICAgLy8gIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAvLyAgICBsaXN0ID0gcmVzLmRhdGEuZGF0YVxuICAgICAgLy8gIH1cbiAgICAgIHRoaXMubGlzdERhdGEgPSBbXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAgIC8vICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgICAvLyAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgICAgIC8vICAgaW1nVXJsczogWycuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNC5qcGcnLCAnLi4vYXNzZXRzL2ltZy8zLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8yLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8xLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNC5qcGcnXSxcbiAgICAgICAgLy8gICBjb21tZW50c051bTogMTIsXG4gICAgICAgIC8vICAgbGlrZXNOdW06IDMyXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAgIC8vICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgICAvLyAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgICAgIC8vICAgaW1nVXJsczogWycuLi9hc3NldHMvaW1nLzQuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy8zLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8yLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8xLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNC5qcGcnXSxcbiAgICAgICAgLy8gICBjb21tZW50c051bTogMTIsXG4gICAgICAgIC8vICAgbGlrZXNOdW06IDMyXG4gICAgICAgIC8vIH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5ub3RpZk51bSA9IDY2XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBlZGl0U3RhdHVzICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdlZGl0UGFnZSdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnbyhwYWdlKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBwYWdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=