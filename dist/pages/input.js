'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      navigationBarTitleText: '编辑'
    }, _this.data = {
      // data1: [{title: '性别', value: '男'}, {title: '昵称', value: 'Michael'}, {title: '生日', value: '1/1/2001'} ],
      data2: ['IT&Internet', '学生', '文化/艺术', '影视/娱乐', '金融', '医药/健康', '工业/制造业', 'IT/互联网/通信', '媒体/公关', '零售', '教育/科研'],
      data3: ['Engineer', '高管', '创始人', '投资人', '职业经理人', '咨询顾问', '市场', '产品', '客服', '销售', '商务', '公关', '人事', '行政'],
      data4: ['Patient', 'Romantic', 'Skillful', 'Intelligent', 'Elegant', 'Creative', 'Charming', 'Caring', 'Calm', 'Active', '萌萌哒'],
      data5: ['Running', 'Basketball', 'Badminton', '游泳', '跑步', '单车', '瑜伽', '篮球', '足球', '滑板', '滑雪'],
      data6: ['Easy Listening', '欧美', '日韩', '流行', '摇滚', '电子', 'R&B', '嘻哈', '爵士', '布鲁斯', '金属'],
      data7: ['北京烤鸭', '港式早茶', '火锅', '烤串', '麻辣烫', '麻辣香锅', '麻小', '生煎包', '卤肉饭', '寿司', '生鱼片'],
      data8: ['肖申克的救赎', '霸王别姬', '这个杀手不太冷', '教父', '阿甘正传', '泰坦尼克号', '盗梦空间', '黑客帝国', '蝙蝠侠', '低俗小说', '搏击俱乐部'],
      data9: ['金庸', '古龙', '鲁迅', '韩寒', '郭敬明', '王朔', '王小波', '三毛', '琼瑶', '亦舒', '张爱玲'],
      data10: ['法国', '日本', '非洲', '全世界', '成都', '桂林', '三亚', '丽江', '大理', '香格里拉', '西藏'],
      array1: ['男生', '女生'],
      index1: 0,
      date1: '2016-09-01',
      region1: ['广东省', '广州市', '海珠区'],
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      index: undefined
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      this.index = option.index;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/input'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJkYXRhMiIsImRhdGEzIiwiZGF0YTQiLCJkYXRhNSIsImRhdGE2IiwiZGF0YTciLCJkYXRhOCIsImRhdGE5IiwiZGF0YTEwIiwiYXJyYXkxIiwiaW5kZXgxIiwiZGF0ZTEiLCJyZWdpb24xIiwic2NyZWVuV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwic2NyZWVuSGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJtZXRob2RzIiwib3B0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0w7QUFDQUMsYUFBTyxDQUFDLGFBQUQsRUFBZ0IsSUFBaEIsRUFBc0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsSUFBeEMsRUFBOEMsT0FBOUMsRUFBdUQsUUFBdkQsRUFBaUUsV0FBakUsRUFBOEUsT0FBOUUsRUFBdUYsSUFBdkYsRUFBNkYsT0FBN0YsQ0FGRjtBQUdMQyxhQUFPLENBQUMsVUFBRCxFQUFhLElBQWIsRUFBbUIsS0FBbkIsRUFBMEIsS0FBMUIsRUFBaUMsT0FBakMsRUFBMEMsTUFBMUMsRUFBa0QsSUFBbEQsRUFBd0QsSUFBeEQsRUFBOEQsSUFBOUQsRUFBb0UsSUFBcEUsRUFBMEUsSUFBMUUsRUFBZ0YsSUFBaEYsRUFBc0YsSUFBdEYsRUFBNEYsSUFBNUYsQ0FIRjtBQUlMQyxhQUFPLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsVUFBeEIsRUFBb0MsYUFBcEMsRUFBbUQsU0FBbkQsRUFBOEQsVUFBOUQsRUFBMEUsVUFBMUUsRUFBc0YsUUFBdEYsRUFBZ0csTUFBaEcsRUFBd0csUUFBeEcsRUFBa0gsS0FBbEgsQ0FKRjtBQUtMQyxhQUFPLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsV0FBMUIsRUFBdUMsSUFBdkMsRUFBNkMsSUFBN0MsRUFBbUQsSUFBbkQsRUFBeUQsSUFBekQsRUFBK0QsSUFBL0QsRUFBcUUsSUFBckUsRUFBMkUsSUFBM0UsRUFBaUYsSUFBakYsQ0FMRjtBQU1MQyxhQUFPLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsRUFBMkMsSUFBM0MsRUFBaUQsS0FBakQsRUFBd0QsSUFBeEQsRUFBOEQsSUFBOUQsRUFBb0UsS0FBcEUsRUFBMkUsSUFBM0UsQ0FORjtBQU9MQyxhQUFPLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsS0FBN0IsRUFBb0MsTUFBcEMsRUFBNEMsSUFBNUMsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsRUFBZ0UsSUFBaEUsRUFBc0UsS0FBdEUsQ0FQRjtBQVFMQyxhQUFPLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsU0FBbkIsRUFBOEIsSUFBOUIsRUFBb0MsTUFBcEMsRUFBNEMsT0FBNUMsRUFBcUQsTUFBckQsRUFBNkQsTUFBN0QsRUFBcUUsS0FBckUsRUFBNEUsTUFBNUUsRUFBb0YsT0FBcEYsQ0FSRjtBQVNMQyxhQUFPLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLEtBQXpCLEVBQWdDLElBQWhDLEVBQXNDLEtBQXRDLEVBQTZDLElBQTdDLEVBQW1ELElBQW5ELEVBQXlELElBQXpELEVBQStELEtBQS9ELENBVEY7QUFVTEMsY0FBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixLQUFuQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQyxJQUF0QyxFQUE0QyxJQUE1QyxFQUFrRCxJQUFsRCxFQUF3RCxNQUF4RCxFQUFnRSxJQUFoRSxDQVZIO0FBV0xDLGNBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQVhIO0FBWUxDLGNBQVEsQ0FaSDtBQWFMQyxhQUFPLFlBYkY7QUFjTEMsZUFBUyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQWRKO0FBZUxDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQWZqQztBQWdCTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBaEJsQztBQWlCTEMsYUFBT0M7QUFqQkYsSyxRQXNCUEMsTyxHQUFVLEU7Ozs7OzJCQUhIQyxNLEVBQVE7QUFDYixXQUFLSCxLQUFMLEdBQWFHLE9BQU9ILEtBQXBCO0FBQ0Q7Ozs7RUF6QmdDLGVBQUtJLEk7O2tCQUFuQjFCLEsiLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e8lui+kSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIC8vIGRhdGExOiBbe3RpdGxlOiAn5oCn5YirJywgdmFsdWU6ICfnlLcnfSwge3RpdGxlOiAn5pi156ewJywgdmFsdWU6ICdNaWNoYWVsJ30sIHt0aXRsZTogJ+eUn+aXpScsIHZhbHVlOiAnMS8xLzIwMDEnfSBdLFxuICAgICAgZGF0YTI6IFsnSVQmSW50ZXJuZXQnLCAn5a2m55SfJywgJ+aWh+WMli/oibrmnK8nLCAn5b2x6KeGL+WoseS5kCcsICfph5Hono0nLCAn5Yy76I2vL+WBpeW6tycsICflt6XkuJov5Yi26YCg5LiaJywgJ0lUL+S6kuiBlOe9kS/pgJrkv6EnLCAn5aqS5L2TL+WFrOWFsycsICfpm7bllK4nLCAn5pWZ6IKyL+enkeeglCcgXSxcbiAgICAgIGRhdGEzOiBbJ0VuZ2luZWVyJywgJ+mrmOeuoScsICfliJvlp4vkuronLCAn5oqV6LWE5Lq6JywgJ+iBjOS4mue7j+eQhuS6uicsICflkqjor6Lpob7pl64nLCAn5biC5Zy6JywgJ+S6p+WTgScsICflrqLmnI0nLCAn6ZSA5ZSuJywgJ+WVhuWKoScsICflhazlhbMnLCAn5Lq65LqLJywgJ+ihjOaUvycgXSxcbiAgICAgIGRhdGE0OiBbJ1BhdGllbnQnLCAnUm9tYW50aWMnLCAnU2tpbGxmdWwnLCAnSW50ZWxsaWdlbnQnLCAnRWxlZ2FudCcsICdDcmVhdGl2ZScsICdDaGFybWluZycsICdDYXJpbmcnLCAnQ2FsbScsICdBY3RpdmUnLCAn6JCM6JCM5ZOSJ10sXG4gICAgICBkYXRhNTogWydSdW5uaW5nJywgJ0Jhc2tldGJhbGwnLCAnQmFkbWludG9uJywgJ+a4uOazsycsICfot5HmraUnLCAn5Y2V6L2mJywgJ+eRnOS8vScsICfnr67nkIMnLCAn6Laz55CDJywgJ+a7keadvycsICfmu5Hpm6onXSxcbiAgICAgIGRhdGE2OiBbJ0Vhc3kgTGlzdGVuaW5nJywgJ+asp+e+jicsICfml6Xpn6knLCAn5rWB6KGMJywgJ+aRh+a7micsICfnlLXlrZAnLCAnUiZCJywgJ+WYu+WTiCcsICfniLXlo6snLCAn5biD6bKB5pavJywgJ+mHkeWxniddLFxuICAgICAgZGF0YTc6IFsn5YyX5Lqs54Ok6bitJywgJ+a4r+W8j+aXqeiMticsICfngavplIUnLCAn54Ok5LiyJywgJ+m6u+i+o+eDqycsICfpurvovqPpppnplIUnLCAn6bq75bCPJywgJ+eUn+eFjuWMhScsICfljaTogonppa0nLCAn5a+/5Y+4JywgJ+eUn+mxvOeJhyddLFxuICAgICAgZGF0YTg6IFsn6IKW55Sz5YWL55qE5pWR6LWOJywgJ+mcuOeOi+WIq+WnrCcsICfov5nkuKrmnYDmiYvkuI3lpKrlhrcnLCAn5pWZ54i2JywgJ+mYv+eUmOato+S8oCcsICfms7DlnablsLzlhYvlj7cnLCAn55uX5qKm56m66Ze0JywgJ+m7keWuouW4neWbvScsICfonZnonaDkvqAnLCAn5L2O5L+X5bCP6K+0JywgJ+aQj+WHu+S/seS5kOmDqCddLFxuICAgICAgZGF0YTk6IFsn6YeR5bq4JywgJ+WPpOm+mScsICfpsoHov4UnLCAn6Z+p5a+SJywgJ+mDreaVrOaYjicsICfnjovmnJQnLCAn546L5bCP5rOiJywgJ+S4ieavmycsICfnkLznkbYnLCAn5Lqm6IiSJywgJ+W8oOeIseeOsiddLFxuICAgICAgZGF0YTEwOiBbJ+azleWbvScsICfml6XmnKwnLCAn6Z2e5rSyJywgJ+WFqOS4lueVjCcsICfmiJDpg70nLCAn5qGC5p6XJywgJ+S4ieS6micsICfkuL3msZ8nLCAn5aSn55CGJywgJ+mmmeagvOmHjOaLiScsICfopb/ol48nXSxcbiAgICAgIGFycmF5MTogWyfnlLfnlJ8nLCAn5aWz55SfJ10sXG4gICAgICBpbmRleDE6IDAsXG4gICAgICBkYXRlMTogJzIwMTYtMDktMDEnLFxuICAgICAgcmVnaW9uMTogWyflub/kuJznnIEnLCAn5bm/5bee5biCJywgJ+a1t+ePoOWMuiddLFxuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIGluZGV4OiB1bmRlZmluZWRcbiAgICB9XG4gICAgb25Mb2FkKG9wdGlvbikge1xuICAgICAgdGhpcy5pbmRleCA9IG9wdGlvbi5pbmRleFxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgfVxuIl19