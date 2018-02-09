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
      genderArray: ['女生', '男生'],
      genderIndex: 0,
      nickName: '',
      birthDate: '',
      height: '',
      weight: '',
      industryIndex: undefined,
      majorIndex: undefined,
      company: '',
      spot: '',
      signature: '',
      questionanswer: {},
      hometown: ['江苏省', '南京市', '鼓楼区'],
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      index: undefined,
      backPack: {}
    }, _this.methods = {
      //index = person
      genderPick: function genderPick(e) {
        this.genderIndex = e.detail.value;
        this.backPack.gender = this.genderIndex;
        this.$parent.globalData.editedPiece.data = this.backPack;
      },
      nickNamePick: function nickNamePick(e) {
        this.backPack.nickName = e.detail.value;
        this.$parent.globalData.editedPiece.data = this.backPack;
      },
      heightPick: function heightPick(e) {
        this.backPack.height = e.detail.value;
        this.$parent.globalData.editedPiece.data = this.backPack;
      },
      weightPick: function weightPick(e) {
        this.backPack.weight = e.detail.value;
        this.$parent.globalData.editedPiece.data = this.backPack;
      },
      dateBirthPick: function dateBirthPick(e) {
        this.birthDate = e.detail.value;
        this.backPack.birthDate = this.birthDate;
        this.$parent.globalData.editedPiece.data = this.backPack;
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == 行业
      industryPick: function industryPick(index) {
        // console.log(e.detail.value);
        // console.log(this.industryList[index]);
        this.industryIndex = index;
        this.backPack = this.industryList[index];
        this.$parent.globalData.editedPiece.data = this.backPack;
      },

      //index == 工作领域
      majorPick: function majorPick(index) {
        // console.log(e.detail.value);
        // console.log(this.industryList[index]);
        this.majorIndex = index;
        this.backPack = this.majorList[index];
        this.$parent.globalData.editedPiece.data = this.backPack;
      },

      //index == 公司
      companyPick: function companyPick(e) {
        this.backPack = e.detail.value;
        this.$parent.globalData.editedPiece.data = this.backPack;
      },

      //index == 来自
      hometownPick: function hometownPick(e) {
        this.hometown = e.detail.value;
        this.backPack = this.hometown;
        this.$parent.globalData.editedPiece.data = this.backPack;
      },

      //index == 经常出没
      spotPick: function spotPick(e) {
        this.backPack = e.detail.value;
        this.$parent.globalData.editedPiece.data = this.backPack;
      },

      //index == 个人签名
      signaturePick: function signaturePick(e) {
        this.backPack = e.detail.value;
        this.$parent.globalData.editedPiece.data = this.backPack;
      },

      //index == 个人签名
      tagPick: function tagPick(index) {
        this.tagsList[index].picked = !this.tagsList[index].picked;
        this.backPack = this.tagsList;
        this.$parent.globalData.editedPiece.data = this.backPack;
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == sports
      sportsPick: function sportsPick(index) {
        this.sportsList[index].picked = !this.sportsList[index].picked;
        this.backPack = this.sportsList;
        this.$parent.globalData.editedPiece.data = this.backPack;
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == music
      musicPick: function musicPick(index) {
        this.musicList[index].picked = !this.musicList[index].picked;
        this.backPack = this.musicList;
        this.$parent.globalData.editedPiece.data = this.backPack;
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == tv,
      tvPick: function tvPick(index) {
        this.tvList[index].picked = !this.tvList[index].picked;
        this.backPack = this.tvList;
        this.$parent.globalData.editedPiece.data = this.backPack;
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == book,
      bookPick: function bookPick(index) {
        this.bookList[index].picked = !this.bookList[index].picked;
        this.backPack = this.bookList;
        this.$parent.globalData.editedPiece.data = this.backPack;
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == place,
      spacePick: function spacePick(index) {
        this.placeList[index].picked = !this.placeList[index].picked;
        this.backPack = this.placeList;
        this.$parent.globalData.editedPiece.data = this.backPack;
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      //index == food
      foodPick: function foodPick(index) {
        this.foodList[index].picked = !this.foodList[index].picked;
        this.backPack = this.foodList;
        this.$parent.globalData.editedPiece.data = this.backPack;
        // console.log(wepy.getStorageSync('editedPiece'));
      },

      // index == question
      answerPick: function answerPick(e) {
        this.backPack.value = e.detail.value;
        this.$parent.globalData.editedPiece.data = this.backPack;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.index = this.$parent.globalData.editedPiece.index;
      this.backPack = this.$parent.globalData.editedPiece.data;
      this.$parent.globalData.editedPiece.data = '';
      // console.log('index: ' + this.index);
      if (this.index == 'person') {
        this.genderIndex = this.backPack.gender;
        this.nickName = this.backPack.nickName;
        this.birthDate = this.backPack.birthDate || '1990-01-01';
        this.height = this.backPack.height;
        this.weight = this.backPack.weight;
      } else if (this.index == '行业') {
        // console.log('?: ' + JSON.stringify(this.backPack))
        this.industryList.find(function (el, i) {
          if (el == self.backPack) {
            self.industryIndex = i;
          }
        });
      } else if (this.index == '工作领域') {
        this.majorList.find(function (el, i) {
          if (el == self.backPack) {
            self.majorIndex = i;
          }
        });
      } else if (this.index == '公司') {
        this.company = this.backPack;
      } else if (this.index == '来自') {
        this.hometown = this.backPack;
      } else if (this.index == '经常出没') {
        this.spot = this.backPack;
      } else if (this.index == '个人签名') {
        this.signature = this.backPack;
      } else if (this.index == 'tag') {
        this.tagsList.forEach(function (el) {
          // console.log(self.backPack)
          self.backPack.find(function (item) {
            // console.log(item);
            if (el.value == item) {
              el.picked = true;
              return true;
            }
          });
        });
      } else if (this.index == 'sports') {
        this.sportsList.forEach(function (el) {
          // console.log(self.backPack)
          self.backPack.find(function (item) {
            // console.log(item);
            if (el.value == item) {
              el.picked = true;
              return true;
            }
          });
        });
      } else if (this.index == 'music') {
        this.musicList.forEach(function (el) {
          // console.log(self.backPack)
          self.backPack.find(function (item) {
            // console.log(item);
            if (el.value == item) {
              el.picked = true;
              return true;
            }
          });
        });
      } else if (this.index == 'food') {
        this.foodList.forEach(function (el) {
          // console.log(self.backPack)
          self.backPack.find(function (item) {
            // console.log(item);
            if (el.value == item) {
              el.picked = true;
              return true;
            }
          });
        });
      } else if (this.index == 'tv') {
        this.tvList.forEach(function (el) {
          // console.log(self.backPack)
          self.backPack.find(function (item) {
            // console.log(item);
            if (el.value == item) {
              el.picked = true;
              return true;
            }
          });
        });
      } else if (this.index == 'book') {
        this.bookList.forEach(function (el) {
          // console.log(self.backPack)
          self.backPack.find(function (item) {
            // console.log(item);
            if (el.value == item) {
              el.picked = true;
              return true;
            }
          });
        });
      } else if (this.index == 'place') {
        this.placeList.forEach(function (el) {
          // console.log(self.backPack)
          self.backPack.find(function (item) {
            // console.log(item);
            if (el.value == item) {
              el.picked = true;
              return true;
            }
          });
        });
      } else if (this.index == 'question') {
        this.questionanswer = this.backPack;
      }
      //index == question
      // if(option.subIndex) {
      //   this.backPack.title = option.title
      //   this.backPack.subIndex = option.subIndex
      // }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/itemEditPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1FZGl0UGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW5kdXN0cnlMaXN0IiwibWFqb3JMaXN0IiwidGFnc0xpc3QiLCJwaWNrZWQiLCJ2YWx1ZSIsInNwb3J0c0xpc3QiLCJtdXNpY0xpc3QiLCJmb29kTGlzdCIsInR2TGlzdCIsImJvb2tMaXN0IiwicGxhY2VMaXN0IiwiZ2VuZGVyQXJyYXkiLCJnZW5kZXJJbmRleCIsIm5pY2tOYW1lIiwiYmlydGhEYXRlIiwiaGVpZ2h0Iiwid2VpZ2h0IiwiaW5kdXN0cnlJbmRleCIsInVuZGVmaW5lZCIsIm1ham9ySW5kZXgiLCJjb21wYW55Iiwic3BvdCIsInNpZ25hdHVyZSIsInF1ZXN0aW9uYW5zd2VyIiwiaG9tZXRvd24iLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJpbmRleCIsImJhY2tQYWNrIiwibWV0aG9kcyIsImdlbmRlclBpY2siLCJlIiwiZGV0YWlsIiwiZ2VuZGVyIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJlZGl0ZWRQaWVjZSIsIm5pY2tOYW1lUGljayIsImhlaWdodFBpY2siLCJ3ZWlnaHRQaWNrIiwiZGF0ZUJpcnRoUGljayIsImluZHVzdHJ5UGljayIsIm1ham9yUGljayIsImNvbXBhbnlQaWNrIiwiaG9tZXRvd25QaWNrIiwic3BvdFBpY2siLCJzaWduYXR1cmVQaWNrIiwidGFnUGljayIsInNwb3J0c1BpY2siLCJtdXNpY1BpY2siLCJ0dlBpY2siLCJib29rUGljayIsInNwYWNlUGljayIsImZvb2RQaWNrIiwiYW5zd2VyUGljayIsInNlbGYiLCJmaW5kIiwiZWwiLCJpIiwiZm9yRWFjaCIsIml0ZW0iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7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QVREO0FBVUQsT0FYTSxNQVdBLElBQUcsS0FBSzJCLEtBQUwsSUFBYyxVQUFqQixFQUE2QjtBQUNsQyxhQUFLUCxjQUFMLEdBQXNCLEtBQUtRLFFBQTNCO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUF2SmdDLGVBQUtpQyxJOztrQkFBbkJwRSxLIiwiZmlsZSI6Iml0ZW1FZGl0UGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6RJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgLy8gZGF0YTE6IFt7dGl0bGU6ICfmgKfliKsnLCB2YWx1ZTogJ+eUtyd9LCB7dGl0bGU6ICfmmLXnp7AnLCB2YWx1ZTogJ01pY2hhZWwnfSwge3RpdGxlOiAn55Sf5pelJywgdmFsdWU6ICcxLzEvMjAwMSd9IF0sXG4gICAgICBpbmR1c3RyeUxpc3Q6IFsnSVQmSW50ZXJuZXQnLCAn5a2m55SfJywgJ+aWh+WMli/oibrmnK8nLCAn5b2x6KeGL+WoseS5kCcsICfph5Hono0nLCAn5Yy76I2vL+WBpeW6tycsICflt6XkuJov5Yi26YCg5LiaJywgJ0lUL+S6kuiBlOe9kS/pgJrkv6EnLCAn5aqS5L2TL+WFrOWFsycsICfpm7bllK4nLCAn5pWZ6IKyL+enkeeglCcgXSxcbiAgICAgIG1ham9yTGlzdDogWydFbmdpbmVlcicsICfpq5jnrqEnLCAn5Yib5aeL5Lq6JywgJ+aKlei1hOS6uicsICfogYzkuJrnu4/nkIbkuronLCAn5ZKo6K+i6aG+6ZeuJywgJ+W4guWcuicsICfkuqflk4EnLCAn5a6i5pyNJywgJ+mUgOWUricsICfllYbliqEnLCAn5YWs5YWzJywgJ+S6uuS6iycsICfooYzmlL8nIF0sXG4gICAgICB0YWdzTGlzdDogW3twaWNrZWQ6ZmFsc2UsIHZhbHVlOiAnUGF0aWVudCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ1JvbWFudGljJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAnU2tpbGxmdWwnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICdJbnRlbGxpZ2VudCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ0VsZWdhbnQnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICdDcmVhdGl2ZSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ0NoYXJtaW5nJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAnQ2FyaW5nJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAnQ2FsbSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ0FjdGl2ZSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+iQjOiQjOWTkid9XSxcbiAgICAgIHNwb3J0c0xpc3Q6IFt7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ1J1bm5pbmcnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICdCYXNrZXRiYWxsJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAnQmFkbWludG9uJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn5ri45rOzJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn6LeR5q2lJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn5Y2V6L2mJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn55Gc5Ly9J30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn56+u55CDJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn6Laz55CDJ30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn5ruR5p2/J30sIHtwaWNrZWQ6ZmFsc2UsIHZhbHVlOiAn5ruR6ZuqJ31dLFxuICAgICAgbXVzaWNMaXN0OiBbe3BpY2tlZDpmYWxzZSwgdmFsdWU6ICdFYXN5IExpc3RlbmluZyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+asp+e+jid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aXpemfqSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+a1geihjCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aRh+a7mid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+eUteWtkCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ1ImQid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+WYu+WTiCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+eIteWjqyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+W4g+mygeaWryd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+mHkeWxnid9XSxcbiAgICAgIGZvb2RMaXN0OiBbe3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfljJfkuqzng6TpuK0nfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfmuK/lvI/ml6nojLYnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfngavplIUnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfng6TkuLInfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpurvovqPng6snfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpurvovqPpppnplIUnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpurvlsI8nfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnlJ/nhY7ljIUnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfljaTogonppa0nfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICflr7/lj7gnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnlJ/psbzniYcnfV0sXG4gICAgICB0dkxpc3Q6IFt7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+iClueUs+WFi+eahOaVkei1jid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+mcuOeOi+WIq+WnrCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+i/meS4quadgOaJi+S4jeWkquWGtyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aVmeeItid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+mYv+eUmOato+S8oCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+azsOWdpuWwvOWFi+WPtyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+ebl+aipuepuumXtCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+m7keWuouW4neWbvSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+idmeidoOS+oCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+S9juS/l+Wwj+ivtCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aQj+WHu+S/seS5kOmDqCd9XSxcbiAgICAgIGJvb2tMaXN0OiBbe3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfph5HlurgnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICflj6TpvpknfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpsoHov4UnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpn6nlr5InfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfpg63mlazmmI4nfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnjovmnJQnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnjovlsI/ms6InfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfkuInmr5snfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfnkLznkbYnfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICfkuqboiJInfSwge3BpY2tlZDpmYWxzZSwgdmFsdWU6ICflvKDniLHnjrInfV0sXG4gICAgICBwbGFjZUxpc3Q6IFt7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+azleWbvSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aXpeacrCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+mdnua0sid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+WFqOS4lueVjCd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+aIkOmDvSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+ahguaelyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+S4ieS6mid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+S4veaxnyd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+Wkp+eQhid9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+mmmeagvOmHjOaLiSd9LCB7cGlja2VkOmZhbHNlLCB2YWx1ZTogJ+ilv+iXjyd9XSxcbiAgICAgIGdlbmRlckFycmF5OiBbJ+Wls+eUnycsICfnlLfnlJ8nXSxcbiAgICAgIGdlbmRlckluZGV4OiAwLFxuICAgICAgbmlja05hbWU6ICcnLFxuICAgICAgYmlydGhEYXRlOiAnJyxcbiAgICAgIGhlaWdodDogJycsXG4gICAgICB3ZWlnaHQ6ICcnLFxuICAgICAgaW5kdXN0cnlJbmRleDogdW5kZWZpbmVkLFxuICAgICAgbWFqb3JJbmRleDogdW5kZWZpbmVkLFxuICAgICAgY29tcGFueTogJycsXG4gICAgICBzcG90OiAnJyxcbiAgICAgIHNpZ25hdHVyZTogJycsXG4gICAgICBxdWVzdGlvbmFuc3dlcjoge30sXG4gICAgICBob21ldG93bjogWyfmsZ/oi4/nnIEnLCAn5Y2X5Lqs5biCJywgJ+m8k+alvOWMuiddLFxuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBiYWNrUGFjazoge31cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICB0aGlzLmluZGV4ID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuaW5kZXhcbiAgICAgIHRoaXMuYmFja1BhY2sgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZS5kYXRhXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZS5kYXRhID0gJydcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbmRleDogJyArIHRoaXMuaW5kZXgpO1xuICAgICAgaWYodGhpcy5pbmRleCA9PSAncGVyc29uJykge1xuICAgICAgICB0aGlzLmdlbmRlckluZGV4ID0gdGhpcy5iYWNrUGFjay5nZW5kZXJcbiAgICAgICAgdGhpcy5uaWNrTmFtZSA9IHRoaXMuYmFja1BhY2submlja05hbWVcbiAgICAgICAgdGhpcy5iaXJ0aERhdGUgPSB0aGlzLmJhY2tQYWNrLmJpcnRoRGF0ZSB8fCAnMTk5MC0wMS0wMSdcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJhY2tQYWNrLmhlaWdodFxuICAgICAgICB0aGlzLndlaWdodCA9IHRoaXMuYmFja1BhY2sud2VpZ2h0XG4gICAgICB9IGVsc2UgaWYodGhpcy5pbmRleCA9PSAn6KGM5LiaJykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnPzogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuYmFja1BhY2spKVxuICAgICAgICB0aGlzLmluZHVzdHJ5TGlzdC5maW5kKGZ1bmN0aW9uKGVsLCBpKSB7XG4gICAgICAgICAgaWYoZWwgPT0gc2VsZi5iYWNrUGFjaykge1xuICAgICAgICAgICAgc2VsZi5pbmR1c3RyeUluZGV4ID0gaVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZih0aGlzLmluZGV4ID09ICflt6XkvZzpoobln58nKSB7XG4gICAgICAgIHRoaXMubWFqb3JMaXN0LmZpbmQoZnVuY3Rpb24oZWwsIGkpIHtcbiAgICAgICAgICBpZihlbCA9PSBzZWxmLmJhY2tQYWNrKSB7XG4gICAgICAgICAgICBzZWxmLm1ham9ySW5kZXggPSBpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKHRoaXMuaW5kZXggPT0gJ+WFrOWPuCcpIHtcbiAgICAgICAgdGhpcy5jb21wYW55ID0gdGhpcy5iYWNrUGFja1xuICAgICAgfSBlbHNlIGlmKHRoaXMuaW5kZXggPT0gJ+adpeiHqicpIHtcbiAgICAgICAgdGhpcy5ob21ldG93biA9IHRoaXMuYmFja1BhY2tcbiAgICAgIH0gZWxzZSBpZih0aGlzLmluZGV4ID09ICfnu4/luLjlh7rmsqEnKSB7XG4gICAgICAgIHRoaXMuc3BvdCA9IHRoaXMuYmFja1BhY2tcbiAgICAgIH0gZWxzZSBpZih0aGlzLmluZGV4ID09ICfkuKrkurrnrb7lkI0nKSB7XG4gICAgICAgIHRoaXMuc2lnbmF0dXJlID0gdGhpcy5iYWNrUGFja1xuICAgICAgfSBlbHNlIGlmKHRoaXMuaW5kZXggPT0gJ3RhZycpIHtcbiAgICAgICAgdGhpcy50YWdzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZi5iYWNrUGFjaylcbiAgICAgICAgICBzZWxmLmJhY2tQYWNrLmZpbmQoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICBpZihlbC52YWx1ZSA9PSBpdGVtKSB7XG4gICAgICAgICAgICAgIGVsLnBpY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKHRoaXMuaW5kZXggPT0gJ3Nwb3J0cycpIHtcbiAgICAgICAgdGhpcy5zcG9ydHNMaXN0LmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLmJhY2tQYWNrKVxuICAgICAgICAgIHNlbGYuYmFja1BhY2suZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICAgIGlmKGVsLnZhbHVlID09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgZWwucGlja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYodGhpcy5pbmRleCA9PSAnbXVzaWMnKSB7XG4gICAgICAgIHRoaXMubXVzaWNMaXN0LmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLmJhY2tQYWNrKVxuICAgICAgICAgIHNlbGYuYmFja1BhY2suZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICAgIGlmKGVsLnZhbHVlID09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgZWwucGlja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYodGhpcy5pbmRleCA9PSAnZm9vZCcpIHtcbiAgICAgICAgdGhpcy5mb29kTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZi5iYWNrUGFjaylcbiAgICAgICAgICBzZWxmLmJhY2tQYWNrLmZpbmQoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICBpZihlbC52YWx1ZSA9PSBpdGVtKSB7XG4gICAgICAgICAgICAgIGVsLnBpY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKHRoaXMuaW5kZXggPT0gJ3R2Jykge1xuICAgICAgICB0aGlzLnR2TGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZi5iYWNrUGFjaylcbiAgICAgICAgICBzZWxmLmJhY2tQYWNrLmZpbmQoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICBpZihlbC52YWx1ZSA9PSBpdGVtKSB7XG4gICAgICAgICAgICAgIGVsLnBpY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKHRoaXMuaW5kZXggPT0gJ2Jvb2snKSB7XG4gICAgICAgIHRoaXMuYm9va0xpc3QuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuYmFja1BhY2spXG4gICAgICAgICAgc2VsZi5iYWNrUGFjay5maW5kKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgaWYoZWwudmFsdWUgPT0gaXRlbSkge1xuICAgICAgICAgICAgICBlbC5waWNrZWQgPSB0cnVlXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZih0aGlzLmluZGV4ID09ICdwbGFjZScpIHtcbiAgICAgICAgdGhpcy5wbGFjZUxpc3QuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuYmFja1BhY2spXG4gICAgICAgICAgc2VsZi5iYWNrUGFjay5maW5kKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgaWYoZWwudmFsdWUgPT0gaXRlbSkge1xuICAgICAgICAgICAgICBlbC5waWNrZWQgPSB0cnVlXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZih0aGlzLmluZGV4ID09ICdxdWVzdGlvbicpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbmFuc3dlciA9IHRoaXMuYmFja1BhY2tcbiAgICAgIH1cbiAgICAgIC8vaW5kZXggPT0gcXVlc3Rpb25cbiAgICAgIC8vIGlmKG9wdGlvbi5zdWJJbmRleCkge1xuICAgICAgLy8gICB0aGlzLmJhY2tQYWNrLnRpdGxlID0gb3B0aW9uLnRpdGxlXG4gICAgICAvLyAgIHRoaXMuYmFja1BhY2suc3ViSW5kZXggPSBvcHRpb24uc3ViSW5kZXhcbiAgICAgIC8vIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8vaW5kZXggPSBwZXJzb25cbiAgICAgIGdlbmRlclBpY2sgKGUpIHtcbiAgICAgICAgdGhpcy5nZW5kZXJJbmRleCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuYmFja1BhY2suZ2VuZGVyID0gdGhpcy5nZW5kZXJJbmRleFxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZS5kYXRhID0gdGhpcy5iYWNrUGFja1xuICAgICAgfSxcbiAgICAgIG5pY2tOYW1lUGljayAoZSkge1xuICAgICAgICB0aGlzLmJhY2tQYWNrLm5pY2tOYW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSA9IHRoaXMuYmFja1BhY2tcbiAgICAgIH0sXG4gICAgICBoZWlnaHRQaWNrIChlKSB7XG4gICAgICAgIHRoaXMuYmFja1BhY2suaGVpZ2h0ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSA9IHRoaXMuYmFja1BhY2tcbiAgICAgIH0sXG4gICAgICB3ZWlnaHRQaWNrIChlKSB7XG4gICAgICAgIHRoaXMuYmFja1BhY2sud2VpZ2h0ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSA9IHRoaXMuYmFja1BhY2tcbiAgICAgIH0sXG4gICAgICBkYXRlQmlydGhQaWNrIChlKSB7XG4gICAgICAgIHRoaXMuYmlydGhEYXRlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy5iYWNrUGFjay5iaXJ0aERhdGUgPSB0aGlzLmJpcnRoRGF0ZVxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZS5kYXRhID0gdGhpcy5iYWNrUGFja1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScpKTtcbiAgICAgIH0sXG4gICAgICAvL2luZGV4ID09IOihjOS4mlxuICAgICAgaW5kdXN0cnlQaWNrIChpbmRleCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5kdXN0cnlMaXN0W2luZGV4XSk7XG4gICAgICAgIHRoaXMuaW5kdXN0cnlJbmRleCA9IGluZGV4XG4gICAgICAgIHRoaXMuYmFja1BhY2sgPSB0aGlzLmluZHVzdHJ5TGlzdFtpbmRleF1cbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSA9IHRoaXMuYmFja1BhY2tcbiAgICAgIH0sXG4gICAgICAvL2luZGV4ID09IOW3peS9nOmihuWfn1xuICAgICAgbWFqb3JQaWNrIChpbmRleCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5kdXN0cnlMaXN0W2luZGV4XSk7XG4gICAgICAgIHRoaXMubWFqb3JJbmRleCA9IGluZGV4XG4gICAgICAgIHRoaXMuYmFja1BhY2sgPSB0aGlzLm1ham9yTGlzdFtpbmRleF1cbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSA9IHRoaXMuYmFja1BhY2tcbiAgICAgIH0sXG4gICAgICAvL2luZGV4ID09IOWFrOWPuFxuICAgICAgY29tcGFueVBpY2sgKGUpIHtcbiAgICAgICAgdGhpcy5iYWNrUGFjayA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlLmRhdGEgPSB0aGlzLmJhY2tQYWNrXG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSDmnaXoh6pcbiAgICAgIGhvbWV0b3duUGljayAoZSkge1xuICAgICAgICB0aGlzLmhvbWV0b3duID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy5iYWNrUGFjayA9IHRoaXMuaG9tZXRvd25cbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSA9IHRoaXMuYmFja1BhY2tcbiAgICAgIH0sXG4gICAgICAvL2luZGV4ID09IOe7j+W4uOWHuuayoVxuICAgICAgc3BvdFBpY2sgKGUpIHtcbiAgICAgICAgdGhpcy5iYWNrUGFjayA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlLmRhdGEgPSB0aGlzLmJhY2tQYWNrXG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSDkuKrkurrnrb7lkI1cbiAgICAgIHNpZ25hdHVyZVBpY2sgKGUpIHtcbiAgICAgICAgdGhpcy5iYWNrUGFjayA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlLmRhdGEgPSB0aGlzLmJhY2tQYWNrXG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSDkuKrkurrnrb7lkI1cbiAgICAgIHRhZ1BpY2sgKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFnc0xpc3RbaW5kZXhdLnBpY2tlZCA9ICF0aGlzLnRhZ3NMaXN0W2luZGV4XS5waWNrZWRcbiAgICAgICAgdGhpcy5iYWNrUGFjayA9IHRoaXMudGFnc0xpc3RcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSA9IHRoaXMuYmFja1BhY2tcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VweS5nZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnKSk7XG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSBzcG9ydHNcbiAgICAgIHNwb3J0c1BpY2sgKGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3BvcnRzTGlzdFtpbmRleF0ucGlja2VkID0gIXRoaXMuc3BvcnRzTGlzdFtpbmRleF0ucGlja2VkXG4gICAgICAgIHRoaXMuYmFja1BhY2sgPSB0aGlzLnNwb3J0c0xpc3RcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSA9IHRoaXMuYmFja1BhY2tcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VweS5nZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnKSk7XG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSBtdXNpY1xuICAgICAgbXVzaWNQaWNrIChpbmRleCkge1xuICAgICAgICB0aGlzLm11c2ljTGlzdFtpbmRleF0ucGlja2VkID0gIXRoaXMubXVzaWNMaXN0W2luZGV4XS5waWNrZWRcbiAgICAgICAgdGhpcy5iYWNrUGFjayA9IHRoaXMubXVzaWNMaXN0XG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlLmRhdGEgPSB0aGlzLmJhY2tQYWNrXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJykpO1xuICAgICAgfSxcbiAgICAgIC8vaW5kZXggPT0gdHYsXG4gICAgICB0dlBpY2sgKGluZGV4KSB7XG4gICAgICAgIHRoaXMudHZMaXN0W2luZGV4XS5waWNrZWQgPSAhdGhpcy50dkxpc3RbaW5kZXhdLnBpY2tlZFxuICAgICAgICB0aGlzLmJhY2tQYWNrID0gdGhpcy50dkxpc3RcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSA9IHRoaXMuYmFja1BhY2tcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VweS5nZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnKSk7XG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSBib29rLFxuICAgICAgYm9va1BpY2sgKGluZGV4KSB7XG4gICAgICAgIHRoaXMuYm9va0xpc3RbaW5kZXhdLnBpY2tlZCA9ICF0aGlzLmJvb2tMaXN0W2luZGV4XS5waWNrZWRcbiAgICAgICAgdGhpcy5iYWNrUGFjayA9IHRoaXMuYm9va0xpc3RcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSA9IHRoaXMuYmFja1BhY2tcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VweS5nZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnKSk7XG4gICAgICB9LFxuICAgICAgLy9pbmRleCA9PSBwbGFjZSxcbiAgICAgIHNwYWNlUGljayAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5wbGFjZUxpc3RbaW5kZXhdLnBpY2tlZCA9ICF0aGlzLnBsYWNlTGlzdFtpbmRleF0ucGlja2VkXG4gICAgICAgIHRoaXMuYmFja1BhY2sgPSB0aGlzLnBsYWNlTGlzdFxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZS5kYXRhID0gdGhpcy5iYWNrUGFja1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScpKTtcbiAgICAgIH0sXG4gICAgICAvL2luZGV4ID09IGZvb2RcbiAgICAgIGZvb2RQaWNrIChpbmRleCkge1xuICAgICAgICB0aGlzLmZvb2RMaXN0W2luZGV4XS5waWNrZWQgPSAhdGhpcy5mb29kTGlzdFtpbmRleF0ucGlja2VkXG4gICAgICAgIHRoaXMuYmFja1BhY2sgPSB0aGlzLmZvb2RMaXN0XG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlLmRhdGEgPSB0aGlzLmJhY2tQYWNrXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2VkaXRlZFBpZWNlJykpO1xuICAgICAgfSxcbiAgICAgIC8vIGluZGV4ID09IHF1ZXN0aW9uXG4gICAgICBhbnN3ZXJQaWNrIChlKSB7XG4gICAgICAgIHRoaXMuYmFja1BhY2sudmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZS5kYXRhID0gdGhpcy5iYWNrUGFja1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19