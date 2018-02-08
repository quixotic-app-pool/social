'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarBackgroundColor: '#FFD300'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myComments: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.myComments = [{
        avatarUrl: '../assets/img/boy.jpeg',
        nickName: '扎西德勒',
        gender: 'male',
        age: 25,
        createdAt: '一小时前',
        msg: '你想我说什么好呢，你好无聊',
        likeNum: 2
      }, {
        avatarUrl: '../assets/img/boy.jpeg',
        nickName: '小叮当',
        gender: 'female',
        age: 22,
        createdAt: '一小时前',
        msg: '你想我说什么好呢，爱聊不聊',
        likeNum: 22
      }, {
        avatarUrl: '../assets/img/boy.jpeg',
        nickName: '爱的狂想曲',
        gender: 'male',
        age: 30,
        createdAt: '两小时前',
        msg: '你想我说什么好呢，无聊呗',
        likeNum: 12
      }];
    }
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteUNvbW1lbnRzIiwibWV0aG9kcyIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwiZ2VuZGVyIiwiYWdlIiwiY3JlYXRlZEF0IiwibXNnIiwibGlrZU51bSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCO0FBRHZCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsa0JBQVk7QUFIUCxLLFFBcUNQQyxPLEdBQVUsRTs7Ozs7NkJBaENBO0FBQ1IsV0FBS0QsVUFBTCxHQUFrQixDQUNoQjtBQUNFRSxtQkFBVyx3QkFEYjtBQUVFQyxrQkFBVSxNQUZaO0FBR0VDLGdCQUFRLE1BSFY7QUFJRUMsYUFBSyxFQUpQO0FBS0VDLG1CQUFXLE1BTGI7QUFNRUMsYUFBSyxlQU5QO0FBT0VDLGlCQUFTO0FBUFgsT0FEZ0IsRUFVaEI7QUFDRU4sbUJBQVcsd0JBRGI7QUFFRUMsa0JBQVUsS0FGWjtBQUdFQyxnQkFBUSxRQUhWO0FBSUVDLGFBQUssRUFKUDtBQUtFQyxtQkFBVyxNQUxiO0FBTUVDLGFBQUssZUFOUDtBQU9FQyxpQkFBUztBQVBYLE9BVmdCLEVBbUJoQjtBQUNFTixtQkFBVyx3QkFEYjtBQUVFQyxrQkFBVSxPQUZaO0FBR0VDLGdCQUFRLE1BSFY7QUFJRUMsYUFBSyxFQUpQO0FBS0VDLG1CQUFXLE1BTGI7QUFNRUMsYUFBSyxjQU5QO0FBT0VDLGlCQUFTO0FBUFgsT0FuQmdCLENBQWxCO0FBNkJEOzs7O0VBdkNnQyxlQUFLQyxTOztrQkFBbkJsQixLIiwiZmlsZSI6ImNvbW1lbnRzQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGRkQzMDAnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbXlDb21tZW50czogW11cbiAgICB9XG4gICAgb25Mb2FkICgpIHtcbiAgICAgIHRoaXMubXlDb21tZW50cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgICAgICAgIG5pY2tOYW1lOiAn5omO6KW/5b635YuSJyxcbiAgICAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgICAgICBhZ2U6IDI1LFxuICAgICAgICAgIGNyZWF0ZWRBdDogJ+S4gOWwj+aXtuWJjScsXG4gICAgICAgICAgbXNnOiAn5L2g5oOz5oiR6K+05LuA5LmI5aW95ZGi77yM5L2g5aW95peg6IGKJyxcbiAgICAgICAgICBsaWtlTnVtOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJyxcbiAgICAgICAgICBuaWNrTmFtZTogJ+Wwj+WPruW9kycsXG4gICAgICAgICAgZ2VuZGVyOiAnZmVtYWxlJyxcbiAgICAgICAgICBhZ2U6IDIyLFxuICAgICAgICAgIGNyZWF0ZWRBdDogJ+S4gOWwj+aXtuWJjScsXG4gICAgICAgICAgbXNnOiAn5L2g5oOz5oiR6K+05LuA5LmI5aW95ZGi77yM54ix6IGK5LiN6IGKJyxcbiAgICAgICAgICBsaWtlTnVtOiAyMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsXG4gICAgICAgICAgbmlja05hbWU6ICfniLHnmoTni4Lmg7Pmm7InLFxuICAgICAgICAgIGdlbmRlcjogJ21hbGUnLFxuICAgICAgICAgIGFnZTogMzAsXG4gICAgICAgICAgY3JlYXRlZEF0OiAn5Lik5bCP5pe25YmNJyxcbiAgICAgICAgICBtc2c6ICfkvaDmg7PmiJHor7Tku4DkuYjlpb3lkaLvvIzml6DogYrlkZcnLFxuICAgICAgICAgIGxpa2VOdW06IDEyXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgfVxuIl19