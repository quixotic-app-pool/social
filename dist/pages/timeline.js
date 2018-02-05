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
      navigationBarTitleText: 'Timeline',
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
          url: 'edit'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/timeline'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJpbWdVcmxzMSIsImltZ1VybHMyIiwiaW1nVXJsIiwibmFtZSIsImZyb20iLCJkYXRhMSIsInRpdGxlIiwiZGF0YTIiLCJtZXRob2RzIiwiZWRpdFN0YXR1cyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFVBRGpCO0FBRVBDLHVCQUFpQjtBQUZWLEssUUFJVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsZ0JBQVUsQ0FBQyxzQkFBRCxFQUF5QixzQkFBekIsRUFBaUQsc0JBQWpELEVBQXlFLHNCQUF6RSxFQUFpRyxzQkFBakcsRUFBeUgsc0JBQXpILEVBQWlKLHNCQUFqSixFQUF5SyxzQkFBekssQ0FITDtBQUlMQyxnQkFBVSxDQUFDLEVBQUNDLFFBQVEsd0JBQVQsRUFBbUNDLE1BQU0sS0FBekMsRUFBZ0RDLE1BQU0sTUFBdEQsRUFBRCxFQUFnRSxFQUFDRixRQUFRLHdCQUFULEVBQW1DQyxNQUFNLEtBQXpDLEVBQWdEQyxNQUFNLE1BQXRELEVBQWhFLEVBQStILEVBQUNGLFFBQVEsd0JBQVQsRUFBbUNDLE1BQU0sS0FBekMsRUFBZ0RDLE1BQU0sTUFBdEQsRUFBL0gsRUFBOEwsRUFBQ0YsUUFBUSx3QkFBVCxFQUFtQ0MsTUFBTSxLQUF6QyxFQUFnREMsTUFBTSxNQUF0RCxFQUE5TCxFQUE0UCxFQUFDRixRQUFRLHdCQUFULEVBQW1DQyxNQUFNLEtBQXpDLEVBQWdEQyxNQUFNLE1BQXRELEVBQTVQLEVBQTJULEVBQUNGLFFBQVEsd0JBQVQsRUFBbUNDLE1BQU0sS0FBekMsRUFBZ0RDLE1BQU0sTUFBdEQsRUFBM1QsRUFBeVgsRUFBQ0YsUUFBUSx3QkFBVCxFQUFtQ0MsTUFBTSxLQUF6QyxFQUFnREMsTUFBTSxNQUF0RCxFQUF6WCxFQUF1YixFQUFDRixRQUFRLHdCQUFULEVBQW1DQyxNQUFNLEtBQXpDLEVBQWdEQyxNQUFNLE1BQXRELEVBQXZiLENBSkw7QUFLTEMsYUFBTyxDQUFDLEVBQUNILFFBQVEsMEJBQVQsRUFBcUNJLE9BQU8sUUFBNUMsRUFBRCxFQUF3RCxFQUFDSixRQUFRLHdCQUFULEVBQW1DSSxPQUFPLFFBQTFDLEVBQXhELEVBQTZHLEVBQUNKLFFBQVEsd0JBQVQsRUFBbUNJLE9BQU8sUUFBMUMsRUFBN0csQ0FMRjtBQU1MQyxhQUFPLENBQUMsRUFBQ0wsUUFBUSwwQkFBVCxFQUFxQ0ksT0FBTyxVQUE1QyxFQUFELEVBQTBELEVBQUNKLFFBQVEsd0JBQVQsRUFBbUNJLE9BQU8sYUFBMUMsRUFBMUQsRUFBb0gsRUFBQ0osUUFBUSwwQkFBVCxFQUFxQ0ksT0FBTyxTQUE1QyxFQUFwSCxFQUE0SyxFQUFDSixRQUFRLDBCQUFULEVBQXFDSSxPQUFPLFdBQTVDLEVBQTVLLEVBQXNPLEVBQUNKLFFBQVEsd0JBQVQsRUFBbUNJLE9BQU8sUUFBMUMsRUFBdE87QUFORixLLFFBU1BFLE8sR0FBVTtBQUNSQyxnQkFEUSx3QkFDTTtBQUNaLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSzs7OztFQWR1QixlQUFLQyxJOztrQkFBbkJ0QixLIiwiZmlsZSI6InRpbWVsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdUaW1lbGluZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjMyLDIzMiwyMzIpJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIGltZ1VybHMxOiBbJy4uL2Fzc2V0cy9pbWcvYmcuanBnJywgJy4uL2Fzc2V0cy9pbWcvYmcuanBnJywgJy4uL2Fzc2V0cy9pbWcvYmcuanBnJywgJy4uL2Fzc2V0cy9pbWcvYmcuanBnJywgJy4uL2Fzc2V0cy9pbWcvYmcuanBnJywgJy4uL2Fzc2V0cy9pbWcvYmcuanBnJywgJy4uL2Fzc2V0cy9pbWcvYmcuanBnJywgJy4uL2Fzc2V0cy9pbWcvYmcuanBnJ10sXG4gICAgICBpbWdVcmxzMjogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9XSxcbiAgICAgIGRhdGExOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+agoeWbrea1qua8qyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZm9vZC5wbmcnLCB0aXRsZTogJyPmiJDpg73nvo7po58jJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2ZpcmUucG5nJywgdGl0bGU6ICcj54eD54On6Z2S5pilIyd9XSxcbiAgICAgIGRhdGEyOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+WNlei6q+eLl+eahOaXpeW4uCMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZm9vZC5wbmcnLCB0aXRsZTogJyPmiJHov5nkuYjnvo7kuLrku4DkuYjljZXouqsjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPkuIDotbfmnaXov5DliqgjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPmiJHmmK/lrabpnLjmiJHmgJXosIEjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2ZpcmUucG5nJywgdGl0bGU6ICcj5p2h6aqa5biC5Zy6Iyd9XVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBlZGl0U3RhdHVzICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdlZGl0J1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19