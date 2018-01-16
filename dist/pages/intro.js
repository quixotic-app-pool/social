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
      navigationBarTitleText: 'Intro'
    }, _this.data = {
      imgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'],
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myInfo: [{ 'title': '星座', value: '天蝎座' }, { title: '行业', value: '旅游' }, { title: '工作领域', value: '策划' }, { title: '经常出没', value: '春熙路' }, { title: '个人签名', value: '聪明是一种天赋，而善良是一种选择。' }],
      myTags: ['女汉子', '喜欢简单', '靠谱', '安静', '选择恐惧症', '文艺', '厚道', '讲义气', '随性'],
      myInterest1: ['篮球', '健身房', '舞蹈', '台球', '射箭', '睡觉'],
      myInterest2: ['刘德华', '五百', '80年代经典'],
      myInterest3: ['牛排', '火锅', '美食'],
      myInterest4: ['我的少女时代', '喜剧之王', '倩女幽魂', '背景遇上西雅图', '机械师', '剪刀手爱德华', '傲慢与偏见'],
      myInterest5: ['殷桃小丸子', '琼瑶', '灌篮高手'],
      myInterest6: ['北海', '泰国', '大理', '九寨沟', '成都', '丽江', '香格里拉', '普吉岛', '越南'],
      myAns: [{ title: '如果能有一种超能力，要什么？', value: '时光能倒流' }, { title: '如果有钱有时间，最想去做什么？', value: '环游世界' }, { title: '什么样的异性最让你心动？', value: '帅 颜值高 绅士 人品好个子高' }, { title: '如果女朋友/男朋友生气了，怎么哄？', value: '一直说开心的事情，如果还在生气就一直哄' }, { title: '可以接受的约会有哪些？', value: '电影 吃饭 篮球' }]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/intro'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwic2NyZWVuV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwic2NyZWVuSGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwibXlJbmZvIiwidmFsdWUiLCJ0aXRsZSIsIm15VGFncyIsIm15SW50ZXJlc3QxIiwibXlJbnRlcmVzdDIiLCJteUludGVyZXN0MyIsIm15SW50ZXJlc3Q0IiwibXlJbnRlcmVzdDUiLCJteUludGVyZXN0NiIsIm15QW5zIiwibWV0aG9kcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxDQUNOLDBMQURNLEVBRU4sb01BRk0sRUFHTix1SUFITSxDQURKO0FBTUpDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQU5sQztBQU9KQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFQbkM7QUFRSkMsY0FBUSxDQUFDLEVBQUMsU0FBUyxJQUFWLEVBQWdCQyxPQUFPLEtBQXZCLEVBQUQsRUFBZ0MsRUFBQ0MsT0FBTyxJQUFSLEVBQWNELE9BQU8sSUFBckIsRUFBaEMsRUFBNEQsRUFBQ0MsT0FBTyxNQUFSLEVBQWdCRCxPQUFPLElBQXZCLEVBQTVELEVBQTBGLEVBQUNDLE9BQU8sTUFBUixFQUFnQkQsT0FBTyxLQUF2QixFQUExRixFQUF5SCxFQUFDQyxPQUFPLE1BQVIsRUFBZ0JELE9BQU8sbUJBQXZCLEVBQXpILENBUko7QUFTSkUsY0FBUSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLE9BQTVCLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELEtBQWpELEVBQXdELElBQXhELENBVEo7QUFVSkMsbUJBQWEsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FWVDtBQVdKQyxtQkFBYSxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsUUFBZCxDQVhUO0FBWUpDLG1CQUFhLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBWlQ7QUFhSkMsbUJBQWEsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixNQUFuQixFQUEyQixTQUEzQixFQUFzQyxLQUF0QyxFQUE2QyxRQUE3QyxFQUF1RCxPQUF2RCxDQWJUO0FBY0pDLG1CQUFhLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FkVDtBQWVKQyxtQkFBYSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixLQUFuQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQyxNQUF0QyxFQUE4QyxLQUE5QyxFQUFxRCxJQUFyRCxDQWZUO0FBZ0JKQyxhQUFPLENBQUMsRUFBQ1IsT0FBTyxnQkFBUixFQUEwQkQsT0FBTyxPQUFqQyxFQUFELEVBQTRDLEVBQUNDLE9BQU8saUJBQVIsRUFBMkJELE9BQU8sTUFBbEMsRUFBNUMsRUFBdUYsRUFBQ0MsT0FBTyxjQUFSLEVBQXdCRCxPQUFPLGlCQUEvQixFQUF2RixFQUEwSSxFQUFDQyxPQUFPLG1CQUFSLEVBQTZCRCxPQUFPLHFCQUFwQyxFQUExSSxFQUFzTSxFQUFDQyxPQUFPLGFBQVIsRUFBdUJELE9BQU8sVUFBOUIsRUFBdE07QUFoQkgsSyxRQW1CUFUsTyxHQUFVLEU7Ozs7RUF2QnVCLGVBQUtDLEk7O2tCQUFuQnRCLEsiLCJmaWxlIjoiaW50cm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0ludHJvJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgaW1nVXJsczogW1xuICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJ1xuICAgICAgIF0sXG4gICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICAgbXlJbmZvOiBbeyd0aXRsZSc6ICfmmJ/luqcnLCB2YWx1ZTogJ+WkqeidjuW6pyd9LCB7dGl0bGU6ICfooYzkuJonLCB2YWx1ZTogJ+aXhea4uCd9LCB7dGl0bGU6ICflt6XkvZzpoobln58nLCB2YWx1ZTogJ+etluWIkid9LCB7dGl0bGU6ICfnu4/luLjlh7rmsqEnLCB2YWx1ZTogJ+aYpeeGmei3ryd9LCB7dGl0bGU6ICfkuKrkurrnrb7lkI0nLCB2YWx1ZTogJ+iBquaYjuaYr+S4gOenjeWkqei1i++8jOiAjOWWhOiJr+aYr+S4gOenjemAieaLqeOAgid9XSxcbiAgICAgICBteVRhZ3M6IFsn5aWz5rGJ5a2QJywgJ+WWnOasoueugOWNlScsICfpnaDosLEnLCAn5a6J6Z2ZJywgJ+mAieaLqeaBkOaDp+eXhycsICfmlofoibonLCAn5Y6a6YGTJywgJ+iusuS5ieawlCcsICfpmo/mgKcnXSxcbiAgICAgICBteUludGVyZXN0MTogWyfnr67nkIMnLCAn5YGl6Lqr5oi/JywgJ+iInui5iCcsICflj7DnkIMnLCAn5bCE566tJywgJ+edoeiniSddLFxuICAgICAgIG15SW50ZXJlc3QyOiBbJ+WImOW+t+WNjicsICfkupTnmb4nLCAnODDlubTku6Pnu4/lhbgnXSxcbiAgICAgICBteUludGVyZXN0MzogWyfniZvmjpInLCAn54Gr6ZSFJywgJ+e+jumjnyddLFxuICAgICAgIG15SW50ZXJlc3Q0OiBbJ+aIkeeahOWwkeWls+aXtuS7oycsICfllpzliafkuYvnjosnLCAn5YCp5aWz5bm96a2CJywgJ+iDjOaZr+mBh+S4iuilv+mbheWbvicsICfmnLrmorDluIgnLCAn5Ymq5YiA5omL54ix5b635Y2OJywgJ+WCsuaFouS4juWBj+ingSddLFxuICAgICAgIG15SW50ZXJlc3Q1OiBbJ+aut+ahg+Wwj+S4uOWtkCcsICfnkLznkbYnLCAn54GM56+u6auY5omLJ10sXG4gICAgICAgbXlJbnRlcmVzdDY6IFsn5YyX5rW3JywgJ+azsOWbvScsICflpKfnkIYnLCAn5Lmd5a+o5rKfJywgJ+aIkOmDvScsICfkuL3msZ8nLCAn6aaZ5qC86YeM5ouJJywgJ+aZruWQieWymycsICfotorljZcnXSxcbiAgICAgICBteUFuczogW3t0aXRsZTogJ+WmguaenOiDveacieS4gOenjei2heiDveWKm++8jOimgeS7gOS5iO+8nycsIHZhbHVlOiAn5pe25YWJ6IO95YCS5rWBJ30sIHt0aXRsZTogJ+WmguaenOaciemSseacieaXtumXtO+8jOacgOaDs+WOu+WBmuS7gOS5iO+8nycsIHZhbHVlOiAn546v5ri45LiW55WMJ30sIHt0aXRsZTogJ+S7gOS5iOagt+eahOW8guaAp+acgOiuqeS9oOW/g+WKqO+8nycsIHZhbHVlOiAn5biFIOminOWAvOmrmCDnu4Xlo6sg5Lq65ZOB5aW95Liq5a2Q6auYJ30sIHt0aXRsZTogJ+WmguaenOWls+aci+WPiy/nlLfmnIvlj4vnlJ/msJTkuobvvIzmgI7kuYjlk4TvvJ8nLCB2YWx1ZTogJ+S4gOebtOivtOW8gOW/g+eahOS6i+aDhe+8jOWmguaenOi/mOWcqOeUn+awlOWwseS4gOebtOWThCd9LCB7dGl0bGU6ICflj6/ku6XmjqXlj5fnmoTnuqbkvJrmnInlk6rkupvvvJ8nLCB2YWx1ZTogJ+eUteW9sSDlkIPppa0g56+u55CDJ31dXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gIH1cbiJdfQ==