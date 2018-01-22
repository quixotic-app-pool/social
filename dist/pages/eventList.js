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
      navigationBarTitleText: 'EventList'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      data1: [{ imgUrl: 'http://shopgostar.info/interpretation/activity/activity-02.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9' }, { imgUrl: 'http://shopgostar.info/interpretation/activity/activity-02.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9' }, { imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9' }]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2NyZWVuV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwic2NyZWVuSGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwiZGF0YTEiLCJpbWdVcmwiLCJtYWluVGl0bGUiLCJzdWJUaXRsZSIsImV2ZW50VGltZSIsIm51bSIsIm1ldGhvZHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsYUFBTyxDQUFDLEVBQUNDLFFBQVEsZ0VBQVQsRUFBMkVDLFdBQVcsS0FBdEYsRUFBNkZDLFVBQVUsUUFBdkcsRUFBaUhDLFdBQVcsb0JBQTVILEVBQWtKQyxLQUFLLEdBQXZKLEVBQUQsRUFBOEosRUFBQ0osUUFBUSxnRUFBVCxFQUEyRUMsV0FBVyxLQUF0RixFQUE2RkMsVUFBVSxRQUF2RyxFQUFpSEMsV0FBVyxvQkFBNUgsRUFBa0pDLEtBQUssR0FBdkosRUFBOUosRUFBMlQsRUFBQ0osUUFBUSwrSEFBVCxFQUEwSUMsV0FBVyxLQUFySixFQUE0SkMsVUFBVSxRQUF0SyxFQUFnTEMsV0FBVyxvQkFBM0wsRUFBaU5DLEtBQUssR0FBdE4sRUFBM1Q7QUFIRixLLFFBTVBDLE8sR0FBVSxFOzs7O0VBVnVCLGVBQUtDLEk7O2tCQUFuQmhCLEsiLCJmaWxlIjoiZXZlbnRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdFdmVudExpc3QnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgZGF0YTE6IFt7aW1nVXJsOiAnaHR0cDovL3Nob3Bnb3N0YXIuaW5mby9pbnRlcnByZXRhdGlvbi9hY3Rpdml0eS9hY3Rpdml0eS0wMi5qcGcnLCBtYWluVGl0bGU6ICfmtLvliqjkuIAnLCBzdWJUaXRsZTogJ+i/meaYr+WJr+agh+mimOminScsIGV2ZW50VGltZTogJzIvMTQgMTc6MDAgfiAyMTowMCcsIG51bTogJzknfSwge2ltZ1VybDogJ2h0dHA6Ly9zaG9wZ29zdGFyLmluZm8vaW50ZXJwcmV0YXRpb24vYWN0aXZpdHkvYWN0aXZpdHktMDIuanBnJywgbWFpblRpdGxlOiAn5rS75Yqo5LiAJywgc3ViVGl0bGU6ICfov5nmmK/lia/moIfpopjpop0nLCBldmVudFRpbWU6ICcyLzE0IDE3OjAwIH4gMjE6MDAnLCBudW06ICc5J30sIHtpbWdVcmw6ICdodHRwczovL3d3dy5lYXRyaWdodG9udGFyaW8uY2EvRWF0UmlnaHRPbnRhcmlvL21lZGlhL1dlYnNpdGUtaW1hZ2VzLXJlc2l6ZWQvMTAtMjJzbWFydC0yMi1waHlzaWNhbC1hY3Rpdml0eS1nb2Fscy1yZXNpemVkLmpwZycsIG1haW5UaXRsZTogJ+a0u+WKqOS4gCcsIHN1YlRpdGxlOiAn6L+Z5piv5Ymv5qCH6aKY6aKdJywgZXZlbnRUaW1lOiAnMi8xNCAxNzowMCB+IDIxOjAwJywgbnVtOiAnOSd9XVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICB9XG4iXX0=