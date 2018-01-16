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
      navigationBarTitleText: 'Input'
    }, _this.data = {
      data1: [{ title: '性别', value: '男' }, { title: '昵称', value: 'Michael' }, { title: '生日', value: '1/1/2001' }],
      data2: ['IT&Internet', '学生', '文化/艺术', '影视/娱乐', '金融', '医药/健康', '工业/制造业', 'IT/互联网/通信', '媒体/公关', '零售', '教育/科研'],
      data3: ['Engineer', '高管', '创始人', '投资人', '职业经理人', '咨询顾问', '市场', '产品', '客服', '销售', '商务', '公关', '人事', '行政'],
      data4: ['Patient', 'Romantic', 'Skillful', 'Intelligent', 'Elegant', 'Creative', 'Charming', 'Caring', 'Calm', 'Active', '萌萌哒'],
      data5: ['Running', 'Basketball', 'Badminton', '游泳', '跑步', '单车', '瑜伽', '篮球', '足球', '滑板', '滑雪'],
      data6: ['Easy Listening', '欧美', '日韩', '流行', '摇滚', '电子', 'R&B', '嘻哈', '爵士', '布鲁斯', '金属'],
      data7: ['北京烤鸭', '港式早茶', '火锅', '烤串', '麻辣烫', '麻辣香锅', '麻小', '生煎包', '卤肉饭', '寿司', '生鱼片'],
      data8: ['肖申克的救赎', '霸王别姬', '这个杀手不太冷', '教父', '阿甘正传', '泰坦尼克号', '盗梦空间', '黑客帝国', '蝙蝠侠', '低俗小说', '搏击俱乐部'],
      data9: ['金庸', '古龙', '鲁迅', '韩寒', '郭敬明', '王朔', '王小波', '三毛', '琼瑶', '亦舒', '张爱玲'],
      data10: ['法国', '日本', '非洲', '全世界', '成都', '桂林', '三亚', '丽江', '大理', '香格里拉', '西藏'],
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/input'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJkYXRhMSIsInRpdGxlIiwidmFsdWUiLCJkYXRhMiIsImRhdGEzIiwiZGF0YTQiLCJkYXRhNSIsImRhdGE2IiwiZGF0YTciLCJkYXRhOCIsImRhdGE5IiwiZGF0YTEwIiwic2NyZWVuV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwic2NyZWVuSGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwibWV0aG9kcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxDQUFDLEVBQUNDLE9BQU8sSUFBUixFQUFjQyxPQUFPLEdBQXJCLEVBQUQsRUFBNEIsRUFBQ0QsT0FBTyxJQUFSLEVBQWNDLE9BQU8sU0FBckIsRUFBNUIsRUFBNkQsRUFBQ0QsT0FBTyxJQUFSLEVBQWNDLE9BQU8sVUFBckIsRUFBN0QsQ0FERjtBQUVMQyxhQUFPLENBQUMsYUFBRCxFQUFnQixJQUFoQixFQUFzQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxJQUF4QyxFQUE4QyxPQUE5QyxFQUF1RCxRQUF2RCxFQUFpRSxXQUFqRSxFQUE4RSxPQUE5RSxFQUF1RixJQUF2RixFQUE2RixPQUE3RixDQUZGO0FBR0xDLGFBQU8sQ0FBQyxVQUFELEVBQWEsSUFBYixFQUFtQixLQUFuQixFQUEwQixLQUExQixFQUFpQyxPQUFqQyxFQUEwQyxNQUExQyxFQUFrRCxJQUFsRCxFQUF3RCxJQUF4RCxFQUE4RCxJQUE5RCxFQUFvRSxJQUFwRSxFQUEwRSxJQUExRSxFQUFnRixJQUFoRixFQUFzRixJQUF0RixFQUE0RixJQUE1RixDQUhGO0FBSUxDLGFBQU8sQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxhQUFwQyxFQUFtRCxTQUFuRCxFQUE4RCxVQUE5RCxFQUEwRSxVQUExRSxFQUFzRixRQUF0RixFQUFnRyxNQUFoRyxFQUF3RyxRQUF4RyxFQUFrSCxLQUFsSCxDQUpGO0FBS0xDLGFBQU8sQ0FBQyxTQUFELEVBQVksWUFBWixFQUEwQixXQUExQixFQUF1QyxJQUF2QyxFQUE2QyxJQUE3QyxFQUFtRCxJQUFuRCxFQUF5RCxJQUF6RCxFQUErRCxJQUEvRCxFQUFxRSxJQUFyRSxFQUEyRSxJQUEzRSxFQUFpRixJQUFqRixDQUxGO0FBTUxDLGFBQU8sQ0FBQyxnQkFBRCxFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxLQUFqRCxFQUF3RCxJQUF4RCxFQUE4RCxJQUE5RCxFQUFvRSxLQUFwRSxFQUEyRSxJQUEzRSxDQU5GO0FBT0xDLGFBQU8sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QixLQUE3QixFQUFvQyxNQUFwQyxFQUE0QyxJQUE1QyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxFQUFnRSxJQUFoRSxFQUFzRSxLQUF0RSxDQVBGO0FBUUxDLGFBQU8sQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixTQUFuQixFQUE4QixJQUE5QixFQUFvQyxNQUFwQyxFQUE0QyxPQUE1QyxFQUFxRCxNQUFyRCxFQUE2RCxNQUE3RCxFQUFxRSxLQUFyRSxFQUE0RSxNQUE1RSxFQUFvRixPQUFwRixDQVJGO0FBU0xDLGFBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsS0FBekIsRUFBZ0MsSUFBaEMsRUFBc0MsS0FBdEMsRUFBNkMsSUFBN0MsRUFBbUQsSUFBbkQsRUFBeUQsSUFBekQsRUFBK0QsS0FBL0QsQ0FURjtBQVVMQyxjQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLEtBQW5CLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDLEVBQXNDLElBQXRDLEVBQTRDLElBQTVDLEVBQWtELElBQWxELEVBQXdELE1BQXhELEVBQWdFLElBQWhFLENBVkg7QUFXTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBWGpDO0FBWUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRztBQVpsQyxLLFFBZVBDLE8sR0FBVSxFOzs7O0VBbkJ1QixlQUFLQyxJOztrQkFBbkJ0QixLIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdJbnB1dCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGRhdGExOiBbe3RpdGxlOiAn5oCn5YirJywgdmFsdWU6ICfnlLcnfSwge3RpdGxlOiAn5pi156ewJywgdmFsdWU6ICdNaWNoYWVsJ30sIHt0aXRsZTogJ+eUn+aXpScsIHZhbHVlOiAnMS8xLzIwMDEnfSBdLFxuICAgICAgZGF0YTI6IFsnSVQmSW50ZXJuZXQnLCAn5a2m55SfJywgJ+aWh+WMli/oibrmnK8nLCAn5b2x6KeGL+WoseS5kCcsICfph5Hono0nLCAn5Yy76I2vL+WBpeW6tycsICflt6XkuJov5Yi26YCg5LiaJywgJ0lUL+S6kuiBlOe9kS/pgJrkv6EnLCAn5aqS5L2TL+WFrOWFsycsICfpm7bllK4nLCAn5pWZ6IKyL+enkeeglCcgXSxcbiAgICAgIGRhdGEzOiBbJ0VuZ2luZWVyJywgJ+mrmOeuoScsICfliJvlp4vkuronLCAn5oqV6LWE5Lq6JywgJ+iBjOS4mue7j+eQhuS6uicsICflkqjor6Lpob7pl64nLCAn5biC5Zy6JywgJ+S6p+WTgScsICflrqLmnI0nLCAn6ZSA5ZSuJywgJ+WVhuWKoScsICflhazlhbMnLCAn5Lq65LqLJywgJ+ihjOaUvycgXSxcbiAgICAgIGRhdGE0OiBbJ1BhdGllbnQnLCAnUm9tYW50aWMnLCAnU2tpbGxmdWwnLCAnSW50ZWxsaWdlbnQnLCAnRWxlZ2FudCcsICdDcmVhdGl2ZScsICdDaGFybWluZycsICdDYXJpbmcnLCAnQ2FsbScsICdBY3RpdmUnLCAn6JCM6JCM5ZOSJ10sXG4gICAgICBkYXRhNTogWydSdW5uaW5nJywgJ0Jhc2tldGJhbGwnLCAnQmFkbWludG9uJywgJ+a4uOazsycsICfot5HmraUnLCAn5Y2V6L2mJywgJ+eRnOS8vScsICfnr67nkIMnLCAn6Laz55CDJywgJ+a7keadvycsICfmu5Hpm6onXSxcbiAgICAgIGRhdGE2OiBbJ0Vhc3kgTGlzdGVuaW5nJywgJ+asp+e+jicsICfml6Xpn6knLCAn5rWB6KGMJywgJ+aRh+a7micsICfnlLXlrZAnLCAnUiZCJywgJ+WYu+WTiCcsICfniLXlo6snLCAn5biD6bKB5pavJywgJ+mHkeWxniddLFxuICAgICAgZGF0YTc6IFsn5YyX5Lqs54Ok6bitJywgJ+a4r+W8j+aXqeiMticsICfngavplIUnLCAn54Ok5LiyJywgJ+m6u+i+o+eDqycsICfpurvovqPpppnplIUnLCAn6bq75bCPJywgJ+eUn+eFjuWMhScsICfljaTogonppa0nLCAn5a+/5Y+4JywgJ+eUn+mxvOeJhyddLFxuICAgICAgZGF0YTg6IFsn6IKW55Sz5YWL55qE5pWR6LWOJywgJ+mcuOeOi+WIq+WnrCcsICfov5nkuKrmnYDmiYvkuI3lpKrlhrcnLCAn5pWZ54i2JywgJ+mYv+eUmOato+S8oCcsICfms7DlnablsLzlhYvlj7cnLCAn55uX5qKm56m66Ze0JywgJ+m7keWuouW4neWbvScsICfonZnonaDkvqAnLCAn5L2O5L+X5bCP6K+0JywgJ+aQj+WHu+S/seS5kOmDqCddLFxuICAgICAgZGF0YTk6IFsn6YeR5bq4JywgJ+WPpOm+mScsICfpsoHov4UnLCAn6Z+p5a+SJywgJ+mDreaVrOaYjicsICfnjovmnJQnLCAn546L5bCP5rOiJywgJ+S4ieavmycsICfnkLznkbYnLCAn5Lqm6IiSJywgJ+W8oOeIseeOsiddLFxuICAgICAgZGF0YTEwOiBbJ+azleWbvScsICfml6XmnKwnLCAn6Z2e5rSyJywgJ+WFqOS4lueVjCcsICfmiJDpg70nLCAn5qGC5p6XJywgJ+S4ieS6micsICfkuL3msZ8nLCAn5aSn55CGJywgJ+mmmeagvOmHjOaLiScsICfopb/ol48nXSxcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHRcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgfVxuIl19