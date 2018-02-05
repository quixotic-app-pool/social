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
      navigationBarTitleText: '相知于活动'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      data1: [{ imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9' }, { imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9' }, { imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9' }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5UGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImRhdGExIiwiaW1nVXJsIiwibWFpblRpdGxlIiwic3ViVGl0bGUiLCJldmVudFRpbWUiLCJudW0iLCJtZXRob2RzIiwiZ29EZXRhaWwiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUE4QixTQUR2QjtBQUVQQyw4QkFBd0I7QUFGakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRGpDO0FBRUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUZsQztBQUdMQyxhQUFPLENBQUMsRUFBQ0MsUUFBUSwrSEFBVCxFQUEwSUMsV0FBVyxLQUFySixFQUE0SkMsVUFBVSxRQUF0SyxFQUFnTEMsV0FBVyxvQkFBM0wsRUFBaU5DLEtBQUssR0FBdE4sRUFBRCxFQUE2TixFQUFDSixRQUFRLCtIQUFULEVBQTBJQyxXQUFXLEtBQXJKLEVBQTRKQyxVQUFVLFFBQXRLLEVBQWdMQyxXQUFXLG9CQUEzTCxFQUFpTkMsS0FBSyxHQUF0TixFQUE3TixFQUF5YixFQUFDSixRQUFRLCtIQUFULEVBQTBJQyxXQUFXLEtBQXJKLEVBQTRKQyxVQUFVLFFBQXRLLEVBQWdMQyxXQUFXLG9CQUEzTCxFQUFpTkMsS0FBSyxHQUF0TixFQUF6YjtBQUhGLEssUUFNUEMsTyxHQUFVO0FBQ1JDLGNBRFEsc0JBQ0k7QUFDVix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7RUFYdUIsZUFBS0MsSTs7a0JBQW5CcEIsSyIsImZpbGUiOiJhY3Rpdml0eVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGRkQzMDAnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebuOefpeS6jua0u+WKqCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBkYXRhMTogW3tpbWdVcmw6ICdodHRwczovL3d3dy5lYXRyaWdodG9udGFyaW8uY2EvRWF0UmlnaHRPbnRhcmlvL21lZGlhL1dlYnNpdGUtaW1hZ2VzLXJlc2l6ZWQvMTAtMjJzbWFydC0yMi1waHlzaWNhbC1hY3Rpdml0eS1nb2Fscy1yZXNpemVkLmpwZycsIG1haW5UaXRsZTogJ+a0u+WKqOS4gCcsIHN1YlRpdGxlOiAn6L+Z5piv5Ymv5qCH6aKY6aKdJywgZXZlbnRUaW1lOiAnMi8xNCAxNzowMCB+IDIxOjAwJywgbnVtOiAnOSd9LCB7aW1nVXJsOiAnaHR0cHM6Ly93d3cuZWF0cmlnaHRvbnRhcmlvLmNhL0VhdFJpZ2h0T250YXJpby9tZWRpYS9XZWJzaXRlLWltYWdlcy1yZXNpemVkLzEwLTIyc21hcnQtMjItcGh5c2ljYWwtYWN0aXZpdHktZ29hbHMtcmVzaXplZC5qcGcnLCBtYWluVGl0bGU6ICfmtLvliqjkuIAnLCBzdWJUaXRsZTogJ+i/meaYr+WJr+agh+mimOminScsIGV2ZW50VGltZTogJzIvMTQgMTc6MDAgfiAyMTowMCcsIG51bTogJzknfSwge2ltZ1VybDogJ2h0dHBzOi8vd3d3LmVhdHJpZ2h0b250YXJpby5jYS9FYXRSaWdodE9udGFyaW8vbWVkaWEvV2Vic2l0ZS1pbWFnZXMtcmVzaXplZC8xMC0yMnNtYXJ0LTIyLXBoeXNpY2FsLWFjdGl2aXR5LWdvYWxzLXJlc2l6ZWQuanBnJywgbWFpblRpdGxlOiAn5rS75Yqo5LiAJywgc3ViVGl0bGU6ICfov5nmmK/lia/moIfpopjpop0nLCBldmVudFRpbWU6ICcyLzE0IDE3OjAwIH4gMjE6MDAnLCBudW06ICc5J31dXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdvRGV0YWlsICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdoZWxkQWN0aXZpdHknXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=