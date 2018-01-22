'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      navigationBarTitleText: 'Timeline'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      imgUrls1: ['../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg', '../assets/img/bg.jpg'],
      imgUrls2: [{ imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }, { imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学' }],
      data1: [{ imgUrl: '../assets/img/school.png', title: '#校园浪漫#' }, { imgUrl: '../assets/img/food.png', title: '#成都美食#' }, { imgUrl: '../assets/img/fire.png', title: '#燃烧青春#' }],
      data2: [{ imgUrl: '../assets/img/school.png', title: '#单身狗的日常#' }, { imgUrl: '../assets/img/food.png', title: '#我这么美为什么单身#' }, { imgUrl: '../assets/img/school.png', title: '#一起来运动#' }, { imgUrl: '../assets/img/school.png', title: '#我是学霸我怕谁#' }, { imgUrl: '../assets/img/fire.png', title: '#条骚市场#' }]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJpbWdVcmxzMSIsImltZ1VybHMyIiwiaW1nVXJsIiwibmFtZSIsImZyb20iLCJkYXRhMSIsInRpdGxlIiwiZGF0YTIiLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGdCQUFVLENBQUMsc0JBQUQsRUFBeUIsc0JBQXpCLEVBQWlELHNCQUFqRCxFQUF5RSxzQkFBekUsRUFBaUcsc0JBQWpHLEVBQXlILHNCQUF6SCxFQUFpSixzQkFBakosRUFBeUssc0JBQXpLLENBSEw7QUFJTEMsZ0JBQVUsQ0FBQyxFQUFDQyxRQUFRLHdCQUFULEVBQW1DQyxNQUFNLEtBQXpDLEVBQWdEQyxNQUFNLE1BQXRELEVBQUQsRUFBZ0UsRUFBQ0YsUUFBUSx3QkFBVCxFQUFtQ0MsTUFBTSxLQUF6QyxFQUFnREMsTUFBTSxNQUF0RCxFQUFoRSxFQUErSCxFQUFDRixRQUFRLHdCQUFULEVBQW1DQyxNQUFNLEtBQXpDLEVBQWdEQyxNQUFNLE1BQXRELEVBQS9ILEVBQThMLEVBQUNGLFFBQVEsd0JBQVQsRUFBbUNDLE1BQU0sS0FBekMsRUFBZ0RDLE1BQU0sTUFBdEQsRUFBOUwsRUFBNFAsRUFBQ0YsUUFBUSx3QkFBVCxFQUFtQ0MsTUFBTSxLQUF6QyxFQUFnREMsTUFBTSxNQUF0RCxFQUE1UCxFQUEyVCxFQUFDRixRQUFRLHdCQUFULEVBQW1DQyxNQUFNLEtBQXpDLEVBQWdEQyxNQUFNLE1BQXRELEVBQTNULEVBQXlYLEVBQUNGLFFBQVEsd0JBQVQsRUFBbUNDLE1BQU0sS0FBekMsRUFBZ0RDLE1BQU0sTUFBdEQsRUFBelgsRUFBdWIsRUFBQ0YsUUFBUSx3QkFBVCxFQUFtQ0MsTUFBTSxLQUF6QyxFQUFnREMsTUFBTSxNQUF0RCxFQUF2YixDQUpMO0FBS0xDLGFBQU8sQ0FBQyxFQUFDSCxRQUFRLDBCQUFULEVBQXFDSSxPQUFPLFFBQTVDLEVBQUQsRUFBd0QsRUFBQ0osUUFBUSx3QkFBVCxFQUFtQ0ksT0FBTyxRQUExQyxFQUF4RCxFQUE2RyxFQUFDSixRQUFRLHdCQUFULEVBQW1DSSxPQUFPLFFBQTFDLEVBQTdHLENBTEY7QUFNTEMsYUFBTyxDQUFDLEVBQUNMLFFBQVEsMEJBQVQsRUFBcUNJLE9BQU8sVUFBNUMsRUFBRCxFQUEwRCxFQUFDSixRQUFRLHdCQUFULEVBQW1DSSxPQUFPLGFBQTFDLEVBQTFELEVBQW9ILEVBQUNKLFFBQVEsMEJBQVQsRUFBcUNJLE9BQU8sU0FBNUMsRUFBcEgsRUFBNEssRUFBQ0osUUFBUSwwQkFBVCxFQUFxQ0ksT0FBTyxXQUE1QyxFQUE1SyxFQUFzTyxFQUFDSixRQUFRLHdCQUFULEVBQW1DSSxPQUFPLFFBQTFDLEVBQXRPO0FBTkYsSyxRQVNQRSxPLEdBQVUsRTs7OztFQWJ1QixlQUFLQyxJOztrQkFBbkJsQixLIiwiZmlsZSI6InRpbWVsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdUaW1lbGluZSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBpbWdVcmxzMTogWycuLi9hc3NldHMvaW1nL2JnLmpwZycsICcuLi9hc3NldHMvaW1nL2JnLmpwZycsICcuLi9hc3NldHMvaW1nL2JnLmpwZycsICcuLi9hc3NldHMvaW1nL2JnLmpwZycsICcuLi9hc3NldHMvaW1nL2JnLmpwZycsICcuLi9hc3NldHMvaW1nL2JnLmpwZycsICcuLi9hc3NldHMvaW1nL2JnLmpwZycsICcuLi9hc3NldHMvaW1nL2JnLmpwZyddLFxuICAgICAgaW1nVXJsczI6IFt7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfV0sXG4gICAgICBkYXRhMTogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPmoKHlm63mtarmvKsjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2Zvb2QucG5nJywgdGl0bGU6ICcj5oiQ6YO9576O6aOfIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9maXJlLnBuZycsIHRpdGxlOiAnI+eHg+eDp+mdkuaYpSMnfV0sXG4gICAgICBkYXRhMjogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPljZXouqvni5fnmoTml6XluLgjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2Zvb2QucG5nJywgdGl0bGU6ICcj5oiR6L+Z5LmI576O5Li65LuA5LmI5Y2V6LqrIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5LiA6LW35p2l6L+Q5YqoIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9zY2hvb2wucG5nJywgdGl0bGU6ICcj5oiR5piv5a2m6Zy45oiR5oCV6LCBIyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9maXJlLnBuZycsIHRpdGxlOiAnI+adoemqmuW4guWcuiMnfV1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgfVxuIl19