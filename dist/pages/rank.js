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
      navigationBarTitleText: 'Rank'
    }, _this.data = {
      data1: [{ imgUrl: '../assets/img/boy.jpeg', name: '陈泽铭', gender: 'female', title: '特约加冰', from: '武汉大学', fans: '23万' }, { imgUrl: '../assets/img/boy.jpeg', name: '陈泽铭', gender: 'female', title: '特约加冰', from: '武汉大学', fans: '23万' }, { imgUrl: '../assets/img/boy.jpeg', name: '陈泽铭', gender: 'female', title: '特约加冰', from: '武汉大学', fans: '23万' }, { imgUrl: '../assets/img/boy.jpeg', name: '陈泽铭', gender: 'female', title: '特约加冰', from: '武汉大学', fans: '23万' }],
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmsuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImRhdGExIiwiaW1nVXJsIiwibmFtZSIsImdlbmRlciIsInRpdGxlIiwiZnJvbSIsImZhbnMiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLENBQUMsRUFBQ0MsUUFBUSx3QkFBVCxFQUFtQ0MsTUFBTSxLQUF6QyxFQUFnREMsUUFBUSxRQUF4RCxFQUFrRUMsT0FBTyxNQUF6RSxFQUFpRkMsTUFBTSxNQUF2RixFQUErRkMsTUFBTSxLQUFyRyxFQUFELEVBQThHLEVBQUNMLFFBQVEsd0JBQVQsRUFBbUNDLE1BQU0sS0FBekMsRUFBZ0RDLFFBQVEsUUFBeEQsRUFBa0VDLE9BQU8sTUFBekUsRUFBaUZDLE1BQU0sTUFBdkYsRUFBK0ZDLE1BQU0sS0FBckcsRUFBOUcsRUFBMk4sRUFBQ0wsUUFBUSx3QkFBVCxFQUFtQ0MsTUFBTSxLQUF6QyxFQUFnREMsUUFBUSxRQUF4RCxFQUFrRUMsT0FBTyxNQUF6RSxFQUFpRkMsTUFBTSxNQUF2RixFQUErRkMsTUFBTSxLQUFyRyxFQUEzTixFQUF3VSxFQUFDTCxRQUFRLHdCQUFULEVBQW1DQyxNQUFNLEtBQXpDLEVBQWdEQyxRQUFRLFFBQXhELEVBQWtFQyxPQUFPLE1BQXpFLEVBQWlGQyxNQUFNLE1BQXZGLEVBQStGQyxNQUFNLEtBQXJHLEVBQXhVLENBREY7QUFFTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRmpDO0FBR0xDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRztBQUhsQyxLLFFBTVBDLE8sR0FBVSxFOzs7O0VBVnVCLGVBQUtDLEk7O2tCQUFuQmpCLEsiLCJmaWxlIjoicmFuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnUmFuaydcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGRhdGExOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn6ZmI5rO96ZOtJywgZ2VuZGVyOiAnZmVtYWxlJywgdGl0bGU6ICfnibnnuqbliqDlhrAnLCBmcm9tOiAn5q2m5rGJ5aSn5a2mJywgZmFuczogJzIz5LiHJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+mZiOazvemTrScsIGdlbmRlcjogJ2ZlbWFsZScsIHRpdGxlOiAn54m557qm5Yqg5YawJywgZnJvbTogJ+atpuaxieWkp+WtpicsIGZhbnM6ICcyM+S4hyd9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICfpmYjms73pk60nLCBnZW5kZXI6ICdmZW1hbGUnLCB0aXRsZTogJ+eJuee6puWKoOWGsCcsIGZyb206ICfmrabmsYnlpKflraYnLCBmYW5zOiAnMjPkuIcnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn6ZmI5rO96ZOtJywgZ2VuZGVyOiAnZmVtYWxlJywgdGl0bGU6ICfnibnnuqbliqDlhrAnLCBmcm9tOiAn5q2m5rGJ5aSn5a2mJywgZmFuczogJzIz5LiHJ31dLFxuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICB9XG4iXX0=