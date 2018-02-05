'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      navigationBarTitleText: '相交于文字',
      backgroundColor: 'rgb(232,232,232)'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      imgUrls1: ['../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg'],
      imgUrls2: [{ imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }],
      data1: [{ imgUrl: '../assets/img/school.png', title: '#校园浪漫#' }, { imgUrl: '../assets/img/food.png', title: '#成都美食#' }, { imgUrl: '../assets/img/fire.png', title: '#燃烧青春#' }],
      data2: [{ imgUrl: '../assets/img/school.png', title: '#单身狗的日常#' }, { imgUrl: '../assets/img/food.png', title: '#我这么美为什么单身#' }, { imgUrl: '../assets/img/school.png', title: '#一起来运动#' }, { imgUrl: '../assets/img/school.png', title: '#我是学霸我怕谁#' }, { imgUrl: '../assets/img/fire.png', title: '#条骚市场#' }]
    }, _this.methods = {
      editStatus: function editStatus() {
        _wepy2.default.navigateTo({
          url: 'editPage'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/timelinePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lUGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImltZ1VybHMxIiwiaW1nVXJsczIiLCJpbWdVcmwiLCJuYW1lIiwiZnJvbSIsImRhdGExIiwidGl0bGUiLCJkYXRhMiIsIm1ldGhvZHMiLCJlZGl0U3RhdHVzIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLHVCQUFpQjtBQUhWLEssUUFLVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsZ0JBQVUsQ0FBQyxzQkFBRCxFQUF5QixzQkFBekIsRUFBaUQsc0JBQWpELEVBQXlFLHNCQUF6RSxFQUFpRyxzQkFBakcsRUFBeUgsc0JBQXpILEVBQWlKLHNCQUFqSixFQUF5SyxzQkFBekssQ0FITDtBQUlMQyxnQkFBVSxDQUFDLEVBQUNDLFFBQVEsd0JBQVQsRUFBbUNDLE1BQU0sS0FBekMsRUFBZ0RDLE1BQU0sTUFBdEQsRUFBRCxFQUFnRSxFQUFDRixRQUFRLHdCQUFULEVBQW1DQyxNQUFNLEtBQXpDLEVBQWdEQyxNQUFNLE1BQXRELEVBQWhFLEVBQStILEVBQUNGLFFBQVEsd0JBQVQsRUFBbUNDLE1BQU0sS0FBekMsRUFBZ0RDLE1BQU0sTUFBdEQsRUFBL0gsRUFBOEwsRUFBQ0YsUUFBUSx3QkFBVCxFQUFtQ0MsTUFBTSxLQUF6QyxFQUFnREMsTUFBTSxNQUF0RCxFQUE5TCxFQUE0UCxFQUFDRixRQUFRLHdCQUFULEVBQW1DQyxNQUFNLEtBQXpDLEVBQWdEQyxNQUFNLE1BQXRELEVBQTVQLEVBQTJULEVBQUNGLFFBQVEsd0JBQVQsRUFBbUNDLE1BQU0sS0FBekMsRUFBZ0RDLE1BQU0sTUFBdEQsRUFBM1QsRUFBeVgsRUFBQ0YsUUFBUSx3QkFBVCxFQUFtQ0MsTUFBTSxLQUF6QyxFQUFnREMsTUFBTSxNQUF0RCxFQUF6WCxFQUF1YixFQUFDRixRQUFRLHdCQUFULEVBQW1DQyxNQUFNLEtBQXpDLEVBQWdEQyxNQUFNLE1BQXRELEVBQXZiLENBSkw7QUFLTEMsYUFBTyxDQUFDLEVBQUNILFFBQVEsMEJBQVQsRUFBcUNJLE9BQU8sUUFBNUMsRUFBRCxFQUF3RCxFQUFDSixRQUFRLHdCQUFULEVBQW1DSSxPQUFPLFFBQTFDLEVBQXhELEVBQTZHLEVBQUNKLFFBQVEsd0JBQVQsRUFBbUNJLE9BQU8sUUFBMUMsRUFBN0csQ0FMRjtBQU1MQyxhQUFPLENBQUMsRUFBQ0wsUUFBUSwwQkFBVCxFQUFxQ0ksT0FBTyxVQUE1QyxFQUFELEVBQTBELEVBQUNKLFFBQVEsd0JBQVQsRUFBbUNJLE9BQU8sYUFBMUMsRUFBMUQsRUFBb0gsRUFBQ0osUUFBUSwwQkFBVCxFQUFxQ0ksT0FBTyxTQUE1QyxFQUFwSCxFQUE0SyxFQUFDSixRQUFRLDBCQUFULEVBQXFDSSxPQUFPLFdBQTVDLEVBQTVLLEVBQXNPLEVBQUNKLFFBQVEsd0JBQVQsRUFBbUNJLE9BQU8sUUFBMUMsRUFBdE87QUFORixLLFFBU1BFLE8sR0FBVTtBQUNSQyxnQkFEUSx3QkFDTTtBQUNaLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSzs7OztFQWZ1QixlQUFLQyxJOztrQkFBbkJ2QixLIiwiZmlsZSI6InRpbWVsaW5lUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzIwQkVFQycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55u45Lqk5LqO5paH5a2XJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMzIsMjMyLDIzMiknXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgaW1nVXJsczE6IFsnLi4vYXNzZXRzL2ltZy9iZy5qcGcnLCAnLi4vYXNzZXRzL2ltZy9iZy5qcGcnLCAnLi4vYXNzZXRzL2ltZy9iZy5qcGcnLCAnLi4vYXNzZXRzL2ltZy9iZy5qcGcnLCAnLi4vYXNzZXRzL2ltZy9iZy5qcGcnLCAnLi4vYXNzZXRzL2ltZy9iZy5qcGcnLCAnLi4vYXNzZXRzL2ltZy9iZy5qcGcnLCAnLi4vYXNzZXRzL2ltZy9iZy5qcGcnXSxcbiAgICAgIGltZ1VybHMyOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ31dLFxuICAgICAgZGF0YTE6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5qCh5Zut5rWq5ryrIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9mb29kLnBuZycsIHRpdGxlOiAnI+aIkOmDvee+jumjnyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZmlyZS5wbmcnLCB0aXRsZTogJyPnh4Png6fpnZLmmKUjJ31dLFxuICAgICAgZGF0YTI6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5Y2V6Lqr54uX55qE5pel5bi4Iyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9mb29kLnBuZycsIHRpdGxlOiAnI+aIkei/meS5iOe+juS4uuS7gOS5iOWNlei6qyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+S4gOi1t+adpei/kOWKqCMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+aIkeaYr+WtpumcuOaIkeaAleiwgSMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZmlyZS5wbmcnLCB0aXRsZTogJyPmnaHpqprluILlnLojJ31dXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGVkaXRTdGF0dXMgKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2VkaXRQYWdlJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19