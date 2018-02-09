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
      industryList: ['IT&Internet', '学生', '文化/艺术', '影视/娱乐', '金融', '医药/健康', '工业/制造业', 'IT/互联网/通信', '媒体/公关', '零售', '教育/科研'],
      majorList: ['Engineer', '高管', '创始人', '投资人', '职业经理人', '咨询顾问', '市场', '产品', '客服', '销售', '商务', '公关', '人事', '行政'],
      tagsList: [{ picked: false, value: 'Patient' }, { picked: false, value: 'Romantic' }, { picked: false, value: 'Skillful' }, { picked: false, value: 'Intelligent' }, { picked: false, value: 'Elegant' }, { picked: false, value: 'Creative' }, { picked: false, value: 'Charming' }, { picked: false, value: 'Caring' }, { picked: false, value: 'Calm' }, { picked: false, value: 'Active' }, { picked: false, value: '萌萌哒' }],
      sportsList: [{ picked: false, value: 'Running' }, { picked: false, value: 'Basketball' }, { picked: false, value: 'Badminton' }, { picked: false, value: '游泳' }, { picked: false, value: '跑步' }, { picked: false, value: '单车' }, { picked: false, value: '瑜伽' }, { picked: false, value: '篮球' }, { picked: false, value: '足球' }, { picked: false, value: '滑板' }, { picked: false, value: '滑雪' }],
      musicList: [{ picked: false, value: 'Easy Listening' }, { picked: false, value: '欧美' }, { picked: false, value: '日韩' }, { picked: false, value: '流行' }, { picked: false, value: '摇滚' }, { picked: false, value: '电子' }, { picked: false, value: 'R&B' }, { picked: false, value: '嘻哈' }, { picked: false, value: '爵士' }, { picked: false, value: '布鲁斯' }, { picked: false, value: '金属' }],
      foodList: [{ picked: false, value: '北京烤鸭' }, { picked: false, value: '港式早茶' }, { picked: false, value: '火锅' }, { picked: false, value: '烤串' }, { picked: false, value: '麻辣烫' }, { picked: false, value: '麻辣香锅' }, { picked: false, value: '麻小' }, { picked: false, value: '生煎包' }, { picked: false, value: '卤肉饭' }, { picked: false, value: '寿司' }, { picked: false, value: '生鱼片' }],
      tvList: [{ picked: false, value: '肖申克的救赎' }, { picked: false, value: '霸王别姬' }, { picked: false, value: '这个杀手不太冷' }, { picked: false, value: '教父' }, { picked: false, value: '阿甘正传' }, { picked: false, value: '泰坦尼克号' }, { picked: false, value: '盗梦空间' }, { picked: false, value: '黑客帝国' }, { picked: false, value: '蝙蝠侠' }, { picked: false, value: '低俗小说' }, { picked: false, value: '搏击俱乐部' }],
      bookList: [{ picked: false, value: '金庸' }, { picked: false, value: '古龙' }, { picked: false, value: '鲁迅' }, { picked: false, value: '韩寒' }, { picked: false, value: '郭敬明' }, { picked: false, value: '王朔' }, { picked: false, value: '王小波' }, { picked: false, value: '三毛' }, { picked: false, value: '琼瑶' }, { picked: false, value: '亦舒' }, { picked: false, value: '张爱玲' }],
      placeList: [{ picked: false, value: '法国' }, { picked: false, value: '日本' }, { picked: false, value: '非洲' }, { picked: false, value: '全世界' }, { picked: false, value: '成都' }, { picked: false, value: '桂林' }, { picked: false, value: '三亚' }, { picked: false, value: '丽江' }, { picked: false, value: '大理' }, { picked: false, value: '香格里拉' }, { picked: false, value: '西藏' }],
      genderArray: [{ picked: false, value: '男生' }, { picked: false, value: '女生' }],
      genderIndex: 0,
      industryIndex: undefined,
      majorIndex: undefined,
      birthDate: '1990-01-01',
      hometown: ['广东省', '广州市', '海珠区'],
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      index: undefined,
      backPack: {}
    }, _this.methods = {
      //index = person
      genderPick: function genderPick(e) {
        this.genderIndex = e.detail.value;
        this.backPack.gender = this.genderArray[this.genderIndex];
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
        // console.log(wepy.getStorageSync('editedPiece'));
      },
      nickNamePick: function nickNamePick(e) {
        this.backPack.nickName = e.detail.value;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
      },
      heightPick: function heightPick(e) {
        this.backPack.height = e.detail.value;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
      },
      weightPick: function weightPick(e) {
        this.backPack.weight = e.detail.value;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
      },
      dateBirthPick: function dateBirthPick(e) {
        this.birthDate = e.detail.value;
        this.backPack.birthDate = this.birthDate;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == 行业
      industryPick: function industryPick(index) {
        // console.log(e.detail.value);
        // console.log(this.industryList[index]);
        this.industryIndex = index;
        this.backPack.industry = this.industryList[index];
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
      },

      //index == 工作领域
      majorPick: function majorPick(index) {
        // console.log(e.detail.value);
        // console.log(this.industryList[index]);
        this.majorIndex = index;
        this.backPack.major = this.majorList[index];
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
      },

      //index == 公司
      companyPick: function companyPick(e) {
        this.backPack.company = e.detail.value;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
      },

      //index == 来自
      hometownPick: function hometownPick(e) {
        this.hometown = e.detail.value;
        this.backPack.hometown = this.hometown;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
      },

      //index == 经常出没
      spotPick: function spotPick(e) {
        this.backPack.input = e.detail.value;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
      },

      //index == 个人签名
      signaturePick: function signaturePick(e) {
        this.backPack.signature = e.detail.value;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
      },

      //index == 个人签名
      tagPick: function tagPick(index) {
        this.tagsList[index].picked = !this.tagsList[index].picked;
        this.backPack.tagsList = this.tagsList;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == sports
      sportsPick: function sportsPick(index) {
        this.sportsList[index].picked = !this.sportsList[index].picked;
        this.backPack.sportsList = this.sportsList;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == music
      musicPick: function musicPick(index) {
        this.musicList[index].picked = !this.musicList[index].picked;
        this.backPack.musicList = this.musicList;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == tv,
      tvPick: function tvPick(index) {
        this.tvList[index].picked = !this.tvList[index].picked;
        this.backPack.tvList = this.tvList;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == book,
      bookPick: function bookPick(index) {
        this.bookList[index].picked = !this.bookList[index].picked;
        this.backPack.bookList = this.bookList;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == place,
      spacePick: function spacePick(index) {
        this.placeList[index].picked = !this.placeList[index].picked;
        this.backPack.placeList = this.placeList;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == food
      foodPick: function foodPick(index) {
        this.foodList[index].picked = !this.foodList[index].picked;
        this.backPack.foodList = this.foodList;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      // index == question
      answerPick: function answerPick(e) {
        this.backPack.answer = e.detail.value;
        _wepy2.default.setStorageSync('editedPiece', this.backPack);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(option) {
      this.backPack = {};
      this.index = option.index;
      //index == question
      if (option.subIndex) {
        this.backPack.title = option.title;
        this.backPack.subIndex = option.subIndex;
      }
      this.backPack.index = this.index;
      _wepy2.default.setStorageSync('editedPiece', this.backPack);
      // wepy.setStorageSync('editedPiece', {faked: 'yes'})
      var test = _wepy2.default.getStorageSync('editedPiece');
      console.log(test);
      this.$apply();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/itemEditPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1FZGl0UGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW5kdXN0cnlMaXN0IiwibWFqb3JMaXN0IiwidGFnc0xpc3QiLCJwaWNrZWQiLCJ2YWx1ZSIsInNwb3J0c0xpc3QiLCJtdXNpY0xpc3QiLCJmb29kTGlzdCIsInR2TGlzdCIsImJvb2tMaXN0IiwicGxhY2VMaXN0IiwiZ2VuZGVyQXJyYXkiLCJnZW5kZXJJbmRleCIsImluZHVzdHJ5SW5kZXgiLCJ1bmRlZmluZWQiLCJtYWpvckluZGV4IiwiYmlydGhEYXRlIiwiaG9tZXRvd24iLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJpbmRleCIsImJhY2tQYWNrIiwibWV0aG9kcyIsImdlbmRlclBpY2siLCJlIiwiZGV0YWlsIiwiZ2VuZGVyIiwic2V0U3RvcmFnZVN5bmMiLCJuaWNrTmFtZVBpY2siLCJuaWNrTmFtZSIsImhlaWdodFBpY2siLCJoZWlnaHQiLCJ3ZWlnaHRQaWNrIiwid2VpZ2h0IiwiZGF0ZUJpcnRoUGljayIsImluZHVzdHJ5UGljayIsImluZHVzdHJ5IiwibWFqb3JQaWNrIiwibWFqb3IiLCJjb21wYW55UGljayIsImNvbXBhbnkiLCJob21ldG93blBpY2siLCJzcG90UGljayIsImlucHV0Iiwic2lnbmF0dXJlUGljayIsInNpZ25hdHVyZSIsInRhZ1BpY2siLCJzcG9ydHNQaWNrIiwibXVzaWNQaWNrIiwidHZQaWNrIiwiYm9va1BpY2siLCJzcGFjZVBpY2siLCJmb29kUGljayIsImFuc3dlclBpY2siLCJhbnN3ZXIiLCJvcHRpb24iLCJzdWJJbmRleCIsInRpdGxlIiwidGVzdCIsImdldFN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztB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QixFQUFtQyxLQUFLTixRQUF4QztBQUNEO0FBcEhPLEs7Ozs7OzJCQWZIa0MsTSxFQUFRO0FBQ2IsV0FBS2xDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxXQUFLRCxLQUFMLEdBQWFtQyxPQUFPbkMsS0FBcEI7QUFDQTtBQUNBLFVBQUdtQyxPQUFPQyxRQUFWLEVBQW9CO0FBQ2xCLGFBQUtuQyxRQUFMLENBQWNvQyxLQUFkLEdBQXNCRixPQUFPRSxLQUE3QjtBQUNBLGFBQUtwQyxRQUFMLENBQWNtQyxRQUFkLEdBQXlCRCxPQUFPQyxRQUFoQztBQUNEO0FBQ0QsV0FBS25DLFFBQUwsQ0FBY0QsS0FBZCxHQUFzQixLQUFLQSxLQUEzQjtBQUNBLHFCQUFLTyxjQUFMLENBQW9CLGFBQXBCLEVBQW1DLEtBQUtOLFFBQXhDO0FBQ0E7QUFDQSxVQUFJcUMsT0FBTyxlQUFLQyxjQUFMLENBQW9CLGFBQXBCLENBQVg7QUFDQUMsY0FBUUMsR0FBUixDQUFZSCxJQUFaO0FBQ0EsV0FBS0ksTUFBTDtBQUNEOzs7O0VBeENnQyxlQUFLQyxJOztrQkFBbkJ0RSxLIiwiZmlsZSI6Iml0ZW1FZGl0UGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6RJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgLy8gZGF0YTE6IFt7dGl0bGU6ICfmgKfliKsnLCB2YWx1ZTogJ+eUtyd9LCB7dGl0bGU6ICfmmLXnp7AnLCB2YWx1ZTogJ01pY2hhZWwnfSwge3RpdGxlOiAn55Sf5pelJywgdmFsdWU6ICcxLzEvMjAwMSd9IF0sXG4gICAgICBpbmR1c3RyeUxpc3Q6IFsnSVQmSW50ZXJuZXQnLCAn5a2m55SfJywgJ+aWh+WMli/oibrmnK8nLCAn5b2x6KeGL+WoseS5kCcsICfph5Hono0nLCAn5Yy76I2vL+WBpeW6tycsICflt6XkuJov5Yi26YCg5LiaJywgJ0lUL+S6kuiBlOe9kS/pgJrkv6EnLCAn5aqS5L2TL+WFrOWFsycsICfpm7bllK4nLCAn5pWZ6IKyL+enkeeglCcgXSxcbiAgICAgIG1ham9yTGlzdDogWydFbmdpbmVlcicsICfpq5jnrqEnLCAn5Yib5aeL5Lq6JywgJ+aKlei1hOS6uicsICfogYzkuJrnu4/nkIbkuronLCAn5ZKo6K+i6aG+6ZeuJywgJ+W4guWcuicsICfkuqflk4EnLCAn5a6i5pyNJywgJ+mUgOWUricsICfllYbliqEnLCAn5YWs5YWzJywgJ+S6uuS6iycsICfooYzmlL8nIF0sXG4gICAgICB0YWdzTGlzdDogW3twaWNrZWQ6ZmFsc2UsIHZhbHVlOiAnUGF0aWVudCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ1JvbWFudGljJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAnU2tpbGxmdWwnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICdJbnRlbGxpZ2VudCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ0VsZWdhbnQnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICdDcmVhdGl2ZSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ0NoYXJtaW5nJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAnQ2FyaW5nJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAnQ2FsbSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ0FjdGl2ZSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+iQjOiQjOWTkid9XSxcbiAgICAgIHNwb3J0c0xpc3Q6IFt7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ1J1bm5pbmcnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICdCYXNrZXRiYWxsJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAnQmFkbWludG9uJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn5ri45rOzJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn6LeR5q2lJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn5Y2V6L2mJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn55Gc5Ly9J30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn56+u55CDJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn6Laz55CDJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn5ruR5p2/J30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn5ruR6ZuqJ31dLFxuICAgICAgbXVzaWNMaXN0OiBbe3BpY2tlZDpmYWxzZSwgdmFsdWU6ICdFYXN5IExpc3RlbmluZyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+asp+e+jid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aXpemfqSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+a1geihjCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aRh+a7mid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+eUteWtkCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ1ImQid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+WYu+WTiCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+eIteWjqyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+W4g+mygeaWryd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+mHkeWxnid9XSxcbiAgICAgIGZvb2RMaXN0OiBbe3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfljJfkuqzng6TpuK0nfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfmuK/lvI/ml6nojLYnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfngavplIUnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfng6TkuLInfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpurvovqPng6snfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpurvovqPpppnplIUnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpurvlsI8nfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnlJ/nhY7ljIUnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfljaTogonppa0nfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICflr7/lj7gnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnlJ/psbzniYcnfV0sXG4gICAgICB0dkxpc3Q6IFt7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+iClueUs+WFi+eahOaVkei1jid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+mcuOeOi+WIq+WnrCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+i/meS4quadgOaJi+S4jeWkquWGtyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aVmeeItid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+mYv+eUmOato+S8oCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+azsOWdpuWwvOWFi+WPtyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+ebl+aipuepuumXtCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+m7keWuouW4neWbvSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+idmeidoOS+oCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+S9juS/l+Wwj+ivtCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aQj+WHu+S/seS5kOmDqCd9XSxcbiAgICAgIGJvb2tMaXN0OiBbe3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfph5HlurgnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICflj6TpvpknfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpsoHov4UnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpn6nlr5InfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpg63mlazmmI4nfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnjovmnJQnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnjovlsI/ms6InfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfkuInmr5snfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnkLznkbYnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfkuqboiJInfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICflvKDniLHnjrInfV0sXG4gICAgICBwbGFjZUxpc3Q6IFt7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+azleWbvSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aXpeacrCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+mdnua0sid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+WFqOS4lueVjCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aIkOmDvSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+ahguaelyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+S4ieS6mid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+S4veaxnyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+Wkp+eQhid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+mmmeagvOmHjOaLiSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+ilv+iXjyd9XSxcbiAgICAgIGdlbmRlckFycmF5OiBbe3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnlLfnlJ8nfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICflpbPnlJ8nfV0sXG4gICAgICBnZW5kZXJJbmRleDogMCxcbiAgICAgIGluZHVzdHJ5SW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIG1ham9ySW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGJpcnRoRGF0ZTogJzE5OTAtMDEtMDEnLFxuICAgICAgaG9tZXRvd246IFsn5bm/5Lic55yBJywgJ+W5v+W3nuW4gicsICfmtbfnj6DljLonXSxcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgYmFja1BhY2s6IHt9XG4gICAgfVxuICAgIG9uTG9hZChvcHRpb24pIHtcbiAgICAgIHRoaXMuYmFja1BhY2sgPSB7fVxuICAgICAgdGhpcy5pbmRleCA9IG9wdGlvbi5pbmRleFxuICAgICAgLy9pbmRleCA9PSBxdWVzdGlvblxuICAgICAgaWYob3B0aW9uLnN1YkluZGV4KSB7XG4gICAgICAgIHRoaXMuYmFja1BhY2sudGl0bGUgPSBvcHRpb24udGl0bGVcbiAgICAgICAgdGhpcy5iYWNrUGFjay5zdWJJbmRleCA9IG9wdGlvbi5zdWJJbmRleFxuICAgICAgfVxuICAgICAgdGhpcy5iYWNrUGFjay5pbmRleCA9IHRoaXMuaW5kZXhcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJywgdGhpcy5iYWNrUGFjaylcbiAgICAgIC8vIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJywge2Zha2VkOiAneWVzJ30pXG4gICAgICB2YXIgdGVzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJylcbiAgICAgIGNvbnNvbGUubG9nKHRlc3QpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvL2luZGV4ID0gcGVyc29uXG4gICAgICBnZW5kZXJQaWNrIChlKSB7XG4gICAgICAgIHRoaXMuZ2VuZGVySW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLmJhY2tQYWNrLmdlbmRlciA9IHRoaXMuZ2VuZGVyQXJyYXlbdGhpcy5nZW5kZXJJbmRleF1cbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnLCB0aGlzLmJhY2tQYWNrKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScpKTtcbiAgICAgIH0sXG4gICAgICBuaWNrTmFtZVBpY2sgKGUpIHtcbiAgICAgICAgdGhpcy5iYWNrUGFjay5uaWNrTmFtZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJywgdGhpcy5iYWNrUGFjaylcbiAgICAgIH0sXG4gICAgICBoZWlnaHRQaWNrIChlKSB7XG4gICAgICAgIHRoaXMuYmFja1BhY2suaGVpZ2h0ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnLCB0aGlzLmJhY2tQYWNrKVxuICAgICAgfSxcbiAgICAgIHdlaWdodFBpY2sgKGUpIHtcbiAgICAgICAgdGhpcy5iYWNrUGFjay53ZWlnaHQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScsIHRoaXMuYmFja1BhY2spXG4gICAgICB9LFxuICAgICAgZGF0ZUJpcnRoUGljayAoZSkge1xuICAgICAgICB0aGlzLmJpcnRoRGF0ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuYmFja1BhY2suYmlydGhEYXRlID0gdGhpcy5iaXJ0aERhdGVcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnLCB0aGlzLmJhY2tQYWNrKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScpKTtcbiAgICAgIH0sXG4gICAgICAvL2luZGV4ID09IOihjOS4mlxuICAgICAgaW5kdXN0cnlQaWNrIChpbmRleCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5kdXN0cnlMaXN0W2luZGV4XSk7XG4gICAgICAgIHRoaXMuaW5kdXN0cnlJbmRleCA9IGluZGV4XG4gICAgICAgIHRoaXMuYmFja1BhY2suaW5kdXN0cnkgPSB0aGlzLmluZHVzdHJ5TGlzdFtpbmRleF1cbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnLCB0aGlzLmJhY2tQYWNrKVxuICAgICAgfSxcbiAgICAgIC8vaW5kZXggPT0g5bel5L2c6aKG5Z+fXG4gICAgICBtYWpvclBpY2sgKGluZGV4KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbmR1c3RyeUxpc3RbaW5kZXhdKTtcbiAgICAgICAgdGhpcy5tYWpvckluZGV4ID0gaW5kZXhcbiAgICAgICAgdGhpcy5iYWNrUGFjay5tYWpvciA9IHRoaXMubWFqb3JMaXN0W2luZGV4XVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScsIHRoaXMuYmFja1BhY2spXG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSDlhazlj7hcbiAgICAgIGNvbXBhbnlQaWNrIChlKSB7XG4gICAgICAgIHRoaXMuYmFja1BhY2suY29tcGFueSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJywgdGhpcy5iYWNrUGFjaylcbiAgICAgIH0sXG4gICAgICAvL2luZGV4ID09IOadpeiHqlxuICAgICAgaG9tZXRvd25QaWNrIChlKSB7XG4gICAgICAgIHRoaXMuaG9tZXRvd24gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLmJhY2tQYWNrLmhvbWV0b3duID0gdGhpcy5ob21ldG93blxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScsIHRoaXMuYmFja1BhY2spXG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSDnu4/luLjlh7rmsqFcbiAgICAgIHNwb3RQaWNrIChlKSB7XG4gICAgICAgIHRoaXMuYmFja1BhY2suaW5wdXQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScsIHRoaXMuYmFja1BhY2spXG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSDkuKrkurrnrb7lkI1cbiAgICAgIHNpZ25hdHVyZVBpY2sgKGUpIHtcbiAgICAgICAgdGhpcy5iYWNrUGFjay5zaWduYXR1cmUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScsIHRoaXMuYmFja1BhY2spXG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSDkuKrkurrnrb7lkI1cbiAgICAgIHRhZ1BpY2sgKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFnc0xpc3RbaW5kZXhdLnBpY2tlZCA9ICF0aGlzLnRhZ3NMaXN0W2luZGV4XS5waWNrZWRcbiAgICAgICAgdGhpcy5iYWNrUGFjay50YWdzTGlzdCA9IHRoaXMudGFnc0xpc3RcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnLCB0aGlzLmJhY2tQYWNrKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScpKTtcbiAgICAgIH0sXG4gICAgICAvL2luZGV4ID09IHNwb3J0c1xuICAgICAgc3BvcnRzUGljayAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zcG9ydHNMaXN0W2luZGV4XS5waWNrZWQgPSAhdGhpcy5zcG9ydHNMaXN0W2luZGV4XS5waWNrZWRcbiAgICAgICAgdGhpcy5iYWNrUGFjay5zcG9ydHNMaXN0ID0gdGhpcy5zcG9ydHNMaXN0XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJywgdGhpcy5iYWNrUGFjaylcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VweS5nZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnKSk7XG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSBtdXNpY1xuICAgICAgbXVzaWNQaWNrIChpbmRleCkge1xuICAgICAgICB0aGlzLm11c2ljTGlzdFtpbmRleF0ucGlja2VkID0gIXRoaXMubXVzaWNMaXN0W2luZGV4XS5waWNrZWRcbiAgICAgICAgdGhpcy5iYWNrUGFjay5tdXNpY0xpc3QgPSB0aGlzLm11c2ljTGlzdFxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScsIHRoaXMuYmFja1BhY2spXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJykpO1xuICAgICAgfSxcbiAgICAgIC8vaW5kZXggPT0gdHYsXG4gICAgICB0dlBpY2sgKGluZGV4KSB7XG4gICAgICAgIHRoaXMudHZMaXN0W2luZGV4XS5waWNrZWQgPSAhdGhpcy50dkxpc3RbaW5kZXhdLnBpY2tlZFxuICAgICAgICB0aGlzLmJhY2tQYWNrLnR2TGlzdCA9IHRoaXMudHZMaXN0XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJywgdGhpcy5iYWNrUGFjaylcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VweS5nZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnKSk7XG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSBib29rLFxuICAgICAgYm9va1BpY2sgKGluZGV4KSB7XG4gICAgICAgIHRoaXMuYm9va0xpc3RbaW5kZXhdLnBpY2tlZCA9ICF0aGlzLmJvb2tMaXN0W2luZGV4XS5waWNrZWRcbiAgICAgICAgdGhpcy5iYWNrUGFjay5ib29rTGlzdCA9IHRoaXMuYm9va0xpc3RcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnLCB0aGlzLmJhY2tQYWNrKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScpKTtcbiAgICAgIH0sXG4gICAgICAvL2luZGV4ID09IHBsYWNlLFxuICAgICAgc3BhY2VQaWNrIChpbmRleCkge1xuICAgICAgICB0aGlzLnBsYWNlTGlzdFtpbmRleF0ucGlja2VkID0gIXRoaXMucGxhY2VMaXN0W2luZGV4XS5waWNrZWRcbiAgICAgICAgdGhpcy5iYWNrUGFjay5wbGFjZUxpc3QgPSB0aGlzLnBsYWNlTGlzdFxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScsIHRoaXMuYmFja1BhY2spXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJykpO1xuICAgICAgfSxcbiAgICAgIC8vaW5kZXggPT0gZm9vZFxuICAgICAgZm9vZFBpY2sgKGluZGV4KSB7XG4gICAgICAgIHRoaXMuZm9vZExpc3RbaW5kZXhdLnBpY2tlZCA9ICF0aGlzLmZvb2RMaXN0W2luZGV4XS5waWNrZWRcbiAgICAgICAgdGhpcy5iYWNrUGFjay5mb29kTGlzdCA9IHRoaXMuZm9vZExpc3RcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnLCB0aGlzLmJhY2tQYWNrKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScpKTtcbiAgICAgIH0sXG4gICAgICAvLyBpbmRleCA9PSBxdWVzdGlvblxuICAgICAgYW5zd2VyUGljayAoZSkge1xuICAgICAgICB0aGlzLmJhY2tQYWNrLmFuc3dlciA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJywgdGhpcy5iYWNrUGFjaylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==