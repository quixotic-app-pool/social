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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/itemEditPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1FZGl0UGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiZGF0YTIiLCJkYXRhMyIsImRhdGE0IiwiZGF0YTUiLCJkYXRhNiIsImRhdGE3IiwiZGF0YTgiLCJkYXRhOSIsImRhdGExMCIsImFycmF5MSIsImluZGV4MSIsImRhdGUxIiwicmVnaW9uMSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImluZGV4IiwidW5kZWZpbmVkIiwibWV0aG9kcyIsIm9wdGlvbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMO0FBQ0FDLGFBQU8sQ0FBQyxhQUFELEVBQWdCLElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLElBQXhDLEVBQThDLE9BQTlDLEVBQXVELFFBQXZELEVBQWlFLFdBQWpFLEVBQThFLE9BQTlFLEVBQXVGLElBQXZGLEVBQTZGLE9BQTdGLENBRkY7QUFHTEMsYUFBTyxDQUFDLFVBQUQsRUFBYSxJQUFiLEVBQW1CLEtBQW5CLEVBQTBCLEtBQTFCLEVBQWlDLE9BQWpDLEVBQTBDLE1BQTFDLEVBQWtELElBQWxELEVBQXdELElBQXhELEVBQThELElBQTlELEVBQW9FLElBQXBFLEVBQTBFLElBQTFFLEVBQWdGLElBQWhGLEVBQXNGLElBQXRGLEVBQTRGLElBQTVGLENBSEY7QUFJTEMsYUFBTyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLFVBQXhCLEVBQW9DLGFBQXBDLEVBQW1ELFNBQW5ELEVBQThELFVBQTlELEVBQTBFLFVBQTFFLEVBQXNGLFFBQXRGLEVBQWdHLE1BQWhHLEVBQXdHLFFBQXhHLEVBQWtILEtBQWxILENBSkY7QUFLTEMsYUFBTyxDQUFDLFNBQUQsRUFBWSxZQUFaLEVBQTBCLFdBQTFCLEVBQXVDLElBQXZDLEVBQTZDLElBQTdDLEVBQW1ELElBQW5ELEVBQXlELElBQXpELEVBQStELElBQS9ELEVBQXFFLElBQXJFLEVBQTJFLElBQTNFLEVBQWlGLElBQWpGLENBTEY7QUFNTEMsYUFBTyxDQUFDLGdCQUFELEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELEtBQWpELEVBQXdELElBQXhELEVBQThELElBQTlELEVBQW9FLEtBQXBFLEVBQTJFLElBQTNFLENBTkY7QUFPTEMsYUFBTyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLEtBQTdCLEVBQW9DLE1BQXBDLEVBQTRDLElBQTVDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLElBQWhFLEVBQXNFLEtBQXRFLENBUEY7QUFRTEMsYUFBTyxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLFNBQW5CLEVBQThCLElBQTlCLEVBQW9DLE1BQXBDLEVBQTRDLE9BQTVDLEVBQXFELE1BQXJELEVBQTZELE1BQTdELEVBQXFFLEtBQXJFLEVBQTRFLE1BQTVFLEVBQW9GLE9BQXBGLENBUkY7QUFTTEMsYUFBTyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixLQUF6QixFQUFnQyxJQUFoQyxFQUFzQyxLQUF0QyxFQUE2QyxJQUE3QyxFQUFtRCxJQUFuRCxFQUF5RCxJQUF6RCxFQUErRCxLQUEvRCxDQVRGO0FBVUxDLGNBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsS0FBbkIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0MsSUFBdEMsRUFBNEMsSUFBNUMsRUFBa0QsSUFBbEQsRUFBd0QsTUFBeEQsRUFBZ0UsSUFBaEUsQ0FWSDtBQVdMQyxjQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FYSDtBQVlMQyxjQUFRLENBWkg7QUFhTEMsYUFBTyxZQWJGO0FBY0xDLGVBQVMsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FkSjtBQWVMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FmakM7QUFnQkxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQWhCbEM7QUFpQkxDLGFBQU9DO0FBakJGLEssUUFzQlBDLE8sR0FBVSxFOzs7OzsyQkFISEMsTSxFQUFRO0FBQ2IsV0FBS0gsS0FBTCxHQUFhRyxPQUFPSCxLQUFwQjtBQUNEOzs7O0VBekJnQyxlQUFLSSxJOztrQkFBbkIxQixLIiwiZmlsZSI6Iml0ZW1FZGl0UGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6RJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgLy8gZGF0YTE6IFt7dGl0bGU6ICfmgKfliKsnLCB2YWx1ZTogJ+eUtyd9LCB7dGl0bGU6ICfmmLXnp7AnLCB2YWx1ZTogJ01pY2hhZWwnfSwge3RpdGxlOiAn55Sf5pelJywgdmFsdWU6ICcxLzEvMjAwMSd9IF0sXG4gICAgICBkYXRhMjogWydJVCZJbnRlcm5ldCcsICflrabnlJ8nLCAn5paH5YyWL+iJuuacrycsICflvbHop4Yv5aix5LmQJywgJ+mHkeiejScsICfljLvoja8v5YGl5bq3JywgJ+W3peS4mi/liLbpgKDkuJonLCAnSVQv5LqS6IGU572RL+mAmuS/oScsICflqpLkvZMv5YWs5YWzJywgJ+mbtuWUricsICfmlZnogrIv56eR56CUJyBdLFxuICAgICAgZGF0YTM6IFsnRW5naW5lZXInLCAn6auY566hJywgJ+WIm+Wni+S6uicsICfmipXotYTkuronLCAn6IGM5Lia57uP55CG5Lq6JywgJ+WSqOivoumhvumXricsICfluILlnLonLCAn5Lqn5ZOBJywgJ+WuouacjScsICfplIDllK4nLCAn5ZWG5YqhJywgJ+WFrOWFsycsICfkurrkuosnLCAn6KGM5pS/JyBdLFxuICAgICAgZGF0YTQ6IFsnUGF0aWVudCcsICdSb21hbnRpYycsICdTa2lsbGZ1bCcsICdJbnRlbGxpZ2VudCcsICdFbGVnYW50JywgJ0NyZWF0aXZlJywgJ0NoYXJtaW5nJywgJ0NhcmluZycsICdDYWxtJywgJ0FjdGl2ZScsICfokIzokIzlk5InXSxcbiAgICAgIGRhdGE1OiBbJ1J1bm5pbmcnLCAnQmFza2V0YmFsbCcsICdCYWRtaW50b24nLCAn5ri45rOzJywgJ+i3keatpScsICfljZXovaYnLCAn55Gc5Ly9JywgJ+evrueQgycsICfotrPnkIMnLCAn5ruR5p2/JywgJ+a7kembqiddLFxuICAgICAgZGF0YTY6IFsnRWFzeSBMaXN0ZW5pbmcnLCAn5qyn576OJywgJ+aXpemfqScsICfmtYHooYwnLCAn5pGH5ruaJywgJ+eUteWtkCcsICdSJkInLCAn5Zi75ZOIJywgJ+eIteWjqycsICfluIPpsoHmlq8nLCAn6YeR5bGeJ10sXG4gICAgICBkYXRhNzogWyfljJfkuqzng6TpuK0nLCAn5riv5byP5pep6Iy2JywgJ+eBq+mUhScsICfng6TkuLInLCAn6bq76L6j54OrJywgJ+m6u+i+o+mmmemUhScsICfpurvlsI8nLCAn55Sf54WO5YyFJywgJ+WNpOiCiemlrScsICflr7/lj7gnLCAn55Sf6bG854mHJ10sXG4gICAgICBkYXRhODogWyfogpbnlLPlhYvnmoTmlZHotY4nLCAn6Zy4546L5Yir5aesJywgJ+i/meS4quadgOaJi+S4jeWkquWGtycsICfmlZnniLYnLCAn6Zi/55SY5q2j5LygJywgJ+azsOWdpuWwvOWFi+WPtycsICfnm5fmoqbnqbrpl7QnLCAn6buR5a6i5bid5Zu9JywgJ+idmeidoOS+oCcsICfkvY7kv5flsI/or7QnLCAn5pCP5Ye75L+x5LmQ6YOoJ10sXG4gICAgICBkYXRhOTogWyfph5HlurgnLCAn5Y+k6b6ZJywgJ+mygei/hScsICfpn6nlr5InLCAn6YOt5pWs5piOJywgJ+eOi+aclCcsICfnjovlsI/ms6InLCAn5LiJ5q+bJywgJ+eQvOeRticsICfkuqboiJInLCAn5byg54ix546yJ10sXG4gICAgICBkYXRhMTA6IFsn5rOV5Zu9JywgJ+aXpeacrCcsICfpnZ7mtLInLCAn5YWo5LiW55WMJywgJ+aIkOmDvScsICfmoYLmnpcnLCAn5LiJ5LqaJywgJ+S4veaxnycsICflpKfnkIYnLCAn6aaZ5qC86YeM5ouJJywgJ+ilv+iXjyddLFxuICAgICAgYXJyYXkxOiBbJ+eUt+eUnycsICflpbPnlJ8nXSxcbiAgICAgIGluZGV4MTogMCxcbiAgICAgIGRhdGUxOiAnMjAxNi0wOS0wMScsXG4gICAgICByZWdpb24xOiBbJ+W5v+S4nOecgScsICflub/lt57luIInLCAn5rW354+g5Yy6J10sXG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZFxuICAgIH1cbiAgICBvbkxvYWQob3B0aW9uKSB7XG4gICAgICB0aGlzLmluZGV4ID0gb3B0aW9uLmluZGV4XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICB9XG4iXX0=