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
      navigationBarBackgroundColor: '#FFD300',
      navigationBarTitleText: '相交于活动'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myData: [{ imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9', address: '春熙路14号大街' }, { imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9', address: '春熙路14号大街' }, { imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9', address: '春熙路14号大街' }]
    }, _this.methods = {
      goDetail: function goDetail() {
        _wepy2.default.navigateTo({
          url: 'heldActivity'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/activityPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5UGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsImltZ1VybCIsIm1haW5UaXRsZSIsInN1YlRpdGxlIiwiZXZlbnRUaW1lIiwibnVtIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnb0RldGFpbCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QjtBQUZqQixLLFFBSVRDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGNBQVEsQ0FDSixFQUFDQyxRQUFRLCtIQUFULEVBQTBJQyxXQUFXLEtBQXJKLEVBQTRKQyxVQUFVLFFBQXRLLEVBQWdMQyxXQUFXLG9CQUEzTCxFQUFpTkMsS0FBSyxHQUF0TixFQUEyTkMsU0FBUyxVQUFwTyxFQURJLEVBRUosRUFBQ0wsUUFBUSwrSEFBVCxFQUEwSUMsV0FBVyxLQUFySixFQUE0SkMsVUFBVSxRQUF0SyxFQUFnTEMsV0FBVyxvQkFBM0wsRUFBaU5DLEtBQUssR0FBdE4sRUFBMk5DLFNBQVMsVUFBcE8sRUFGSSxFQUdKLEVBQUNMLFFBQVEsK0hBQVQsRUFBMElDLFdBQVcsS0FBckosRUFBNEpDLFVBQVUsUUFBdEssRUFBZ0xDLFdBQVcsb0JBQTNMLEVBQWlOQyxLQUFLLEdBQXROLEVBQTJOQyxTQUFTLFVBQXBPLEVBSEk7QUFISCxLLFFBVVBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNJO0FBQ1YsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7O0VBZnVCLGVBQUtDLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoiYWN0aXZpdHlQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkZEMzAwJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm7jkuqTkuo7mtLvliqgnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbXlEYXRhOiBbXG4gICAgICAgICAge2ltZ1VybDogJ2h0dHBzOi8vd3d3LmVhdHJpZ2h0b250YXJpby5jYS9FYXRSaWdodE9udGFyaW8vbWVkaWEvV2Vic2l0ZS1pbWFnZXMtcmVzaXplZC8xMC0yMnNtYXJ0LTIyLXBoeXNpY2FsLWFjdGl2aXR5LWdvYWxzLXJlc2l6ZWQuanBnJywgbWFpblRpdGxlOiAn5rS75Yqo5LiAJywgc3ViVGl0bGU6ICfov5nmmK/lia/moIfpopjpop0nLCBldmVudFRpbWU6ICcyLzE0IDE3OjAwIH4gMjE6MDAnLCBudW06ICc5JywgYWRkcmVzczogJ+aYpeeGmei3rzE05Y+35aSn6KGXJ30sXG4gICAgICAgICAge2ltZ1VybDogJ2h0dHBzOi8vd3d3LmVhdHJpZ2h0b250YXJpby5jYS9FYXRSaWdodE9udGFyaW8vbWVkaWEvV2Vic2l0ZS1pbWFnZXMtcmVzaXplZC8xMC0yMnNtYXJ0LTIyLXBoeXNpY2FsLWFjdGl2aXR5LWdvYWxzLXJlc2l6ZWQuanBnJywgbWFpblRpdGxlOiAn5rS75Yqo5LiAJywgc3ViVGl0bGU6ICfov5nmmK/lia/moIfpopjpop0nLCBldmVudFRpbWU6ICcyLzE0IDE3OjAwIH4gMjE6MDAnLCBudW06ICc5JywgYWRkcmVzczogJ+aYpeeGmei3rzE05Y+35aSn6KGXJ30sXG4gICAgICAgICAge2ltZ1VybDogJ2h0dHBzOi8vd3d3LmVhdHJpZ2h0b250YXJpby5jYS9FYXRSaWdodE9udGFyaW8vbWVkaWEvV2Vic2l0ZS1pbWFnZXMtcmVzaXplZC8xMC0yMnNtYXJ0LTIyLXBoeXNpY2FsLWFjdGl2aXR5LWdvYWxzLXJlc2l6ZWQuanBnJywgbWFpblRpdGxlOiAn5rS75Yqo5LiAJywgc3ViVGl0bGU6ICfov5nmmK/lia/moIfpopjpop0nLCBldmVudFRpbWU6ICcyLzE0IDE3OjAwIH4gMjE6MDAnLCBudW06ICc5JywgYWRkcmVzczogJ+aYpeeGmei3rzE05Y+35aSn6KGXJ31cbiAgICAgICAgXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBnb0RldGFpbCAoKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnaGVsZEFjdGl2aXR5J1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19