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
      myData: [{ imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9', address: '春熙路14号大街' }, { imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9', address: '春熙路14号大街' }, { imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9', address: '春熙路14号大街' }],
      piece: 1
    }, _this.methods = {
      jump: function jump(index) {
        this.piece = index;
      },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5UGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsImltZ1VybCIsIm1haW5UaXRsZSIsInN1YlRpdGxlIiwiZXZlbnRUaW1lIiwibnVtIiwiYWRkcmVzcyIsInBpZWNlIiwibWV0aG9kcyIsImp1bXAiLCJpbmRleCIsImdvRGV0YWlsIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCO0FBRmpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsY0FBUSxDQUNKLEVBQUNDLFFBQVEsK0hBQVQsRUFBMElDLFdBQVcsS0FBckosRUFBNEpDLFVBQVUsUUFBdEssRUFBZ0xDLFdBQVcsb0JBQTNMLEVBQWlOQyxLQUFLLEdBQXROLEVBQTJOQyxTQUFTLFVBQXBPLEVBREksRUFFSixFQUFDTCxRQUFRLCtIQUFULEVBQTBJQyxXQUFXLEtBQXJKLEVBQTRKQyxVQUFVLFFBQXRLLEVBQWdMQyxXQUFXLG9CQUEzTCxFQUFpTkMsS0FBSyxHQUF0TixFQUEyTkMsU0FBUyxVQUFwTyxFQUZJLEVBR0osRUFBQ0wsUUFBUSwrSEFBVCxFQUEwSUMsV0FBVyxLQUFySixFQUE0SkMsVUFBVSxRQUF0SyxFQUFnTEMsV0FBVyxvQkFBM0wsRUFBaU5DLEtBQUssR0FBdE4sRUFBMk5DLFNBQVMsVUFBcE8sRUFISSxDQUhIO0FBUUxDLGFBQU87QUFSRixLLFFBV1BDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNGQyxLQURFLEVBQ0s7QUFDWCxhQUFLSCxLQUFMLEdBQWFHLEtBQWI7QUFDRCxPQUhPO0FBSVJDLGNBSlEsc0JBSUk7QUFDVix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQVJPLEs7Ozs7RUFoQnVCLGVBQUtDLEk7O2tCQUFuQnhCLEsiLCJmaWxlIjoiYWN0aXZpdHlQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkZEMzAwJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm7jkuqTkuo7mtLvliqgnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbXlEYXRhOiBbXG4gICAgICAgICAge2ltZ1VybDogJ2h0dHBzOi8vd3d3LmVhdHJpZ2h0b250YXJpby5jYS9FYXRSaWdodE9udGFyaW8vbWVkaWEvV2Vic2l0ZS1pbWFnZXMtcmVzaXplZC8xMC0yMnNtYXJ0LTIyLXBoeXNpY2FsLWFjdGl2aXR5LWdvYWxzLXJlc2l6ZWQuanBnJywgbWFpblRpdGxlOiAn5rS75Yqo5LiAJywgc3ViVGl0bGU6ICfov5nmmK/lia/moIfpopjpop0nLCBldmVudFRpbWU6ICcyLzE0IDE3OjAwIH4gMjE6MDAnLCBudW06ICc5JywgYWRkcmVzczogJ+aYpeeGmei3rzE05Y+35aSn6KGXJ30sXG4gICAgICAgICAge2ltZ1VybDogJ2h0dHBzOi8vd3d3LmVhdHJpZ2h0b250YXJpby5jYS9FYXRSaWdodE9udGFyaW8vbWVkaWEvV2Vic2l0ZS1pbWFnZXMtcmVzaXplZC8xMC0yMnNtYXJ0LTIyLXBoeXNpY2FsLWFjdGl2aXR5LWdvYWxzLXJlc2l6ZWQuanBnJywgbWFpblRpdGxlOiAn5rS75Yqo5LiAJywgc3ViVGl0bGU6ICfov5nmmK/lia/moIfpopjpop0nLCBldmVudFRpbWU6ICcyLzE0IDE3OjAwIH4gMjE6MDAnLCBudW06ICc5JywgYWRkcmVzczogJ+aYpeeGmei3rzE05Y+35aSn6KGXJ30sXG4gICAgICAgICAge2ltZ1VybDogJ2h0dHBzOi8vd3d3LmVhdHJpZ2h0b250YXJpby5jYS9FYXRSaWdodE9udGFyaW8vbWVkaWEvV2Vic2l0ZS1pbWFnZXMtcmVzaXplZC8xMC0yMnNtYXJ0LTIyLXBoeXNpY2FsLWFjdGl2aXR5LWdvYWxzLXJlc2l6ZWQuanBnJywgbWFpblRpdGxlOiAn5rS75Yqo5LiAJywgc3ViVGl0bGU6ICfov5nmmK/lia/moIfpopjpop0nLCBldmVudFRpbWU6ICcyLzE0IDE3OjAwIH4gMjE6MDAnLCBudW06ICc5JywgYWRkcmVzczogJ+aYpeeGmei3rzE05Y+35aSn6KGXJ31cbiAgICAgICAgXSxcbiAgICAgIHBpZWNlOiAxXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGp1bXAgKGluZGV4KSB7XG4gICAgICAgIHRoaXMucGllY2UgPSBpbmRleFxuICAgICAgfSxcbiAgICAgIGdvRGV0YWlsICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdoZWxkQWN0aXZpdHknXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=