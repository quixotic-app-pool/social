'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      navigationBarTitleText: '王小虎'
    }, _this.data = {
      editMode: true,
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myData: {},
      tempImgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg', 'https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg'],
      profile_id: ''
    }, _this.methods = {
      chooseImage: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _tempImgUrls;

          var _ref3, tempFilePaths;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 6 - this.tempImgUrls.length,
                    sizeType: 'compressed'
                  });

                case 2:
                  _ref3 = _context.sent;
                  tempFilePaths = _ref3.tempFilePaths;

                  (_tempImgUrls = this.tempImgUrls).push.apply(_tempImgUrls, _toConsumableArray(tempFilePaths));
                  this.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function chooseImage() {
          return _ref2.apply(this, arguments);
        }

        return chooseImage;
      }(),
      previewImage: function previewImage(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },
      goEdit: function goEdit(index) {
        if (!this.editMode) {
          return;
        }
        _wepy2.default.navigateTo({
          url: 'itemEditPage?index=' + index
        });
      },
      goEditQuestion: function goEditQuestion(index, title) {
        if (!this.editMode) {
          return;
        }
        _wepy2.default.navigateTo({
          url: 'itemEditPage?index=question&subIndex=' + index + '&title=' + title
        });
      },
      toggle: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // TODO: save edited profile
                  if (this.editMode) {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '确定保存吗？'
                    }).then(function () {
                      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                console.log(JSON.stringify(res));
                                if (res.confirm) {
                                  // var res = await api.updateProfile({
                                  //   pack: {
                                  //     _id: this.profile_id,
                                  //     data: this.myData
                                  //   }
                                  // })
                                  // if(res.data && res.data.flag == 'success') {
                                  //   this.myData = res.data.data
                                  // }
                                }

                              case 2:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));

                      return function (_x) {
                        return _ref5.apply(this, arguments);
                      };
                    }());
                  }
                  this.editMode = !this.editMode;
                  this.$apply();

                case 3:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function toggle() {
          return _ref4.apply(this, arguments);
        }

        return toggle;
      }(),
      go: function go(page) {
        _wepy2.default.navigateTo({
          url: page
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(option) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.profile_id = option._id;
                _context4.next = 3;
                return this.loadData(this.profile_id);

              case 3:
                _wepy2.default.removeStorageSync('editedPiece');

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onLoad(_x2) {
        return _ref6.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      var editedPiece = _wepy2.default.getStorageSync('editedPiece');
      // console.log('editedPiece: ' + JSON.stringify(editedPiece));
      // console.log(new Date().toISOString() - editedPiece.birthDate);
      // console.log(editedPiece.birthDate.getMonth());
      if (editedPiece.index == 'person') {
        this.myData.gender = editedPiece.gender && editedPiece.gender || this.myData.gender;
        this.myData.nickName = editedPiece.nickName && editedPiece.nickName || this.myData.nickName;
        this.myData.h = editedPiece.height && editedPiece.height || this.myData.h;
        this.myData.weight = editedPiece.weight && editedPiece.weight || this.myData.weight;
        this.myData.birthDate = editedPiece.birthDate && editedPiece.birthDate || this.myData.birthDate;
        if (editedPiece.birthDate) {
          var currentTime = new Date().toISOString();
          var customRegExp = /(\d{4})\-(\d{2})\-(\d{2})/;
          var date1 = customRegExp.exec(currentTime);
          var date2 = customRegExp.exec(editedPiece.birthDate);
          var age = date1[1] - date2[1] - (date1[2] < date1[2] ? 1 : 0);
          this.myData.age = age || this.myData.age;
        }
        // console.log('age: ' + age);
        // console.log('date1: ' + date1);
        // console.log('date2: ' + date2);
        // console.log(currentTime);
      } else if (editedPiece.index == '行业') {
        this.myData.myInfo.find(function (el) {
          if (el.title == '行业') {
            el.value = editedPiece.industry;
            return true;
          }
        });
      } else if (editedPiece.index == '工作领域') {
        this.myData.myInfo.find(function (el) {
          if (el.title == '工作领域') {
            el.value = editedPiece.major;
            return true;
          }
        });
      } else if (editedPiece.index == '公司') {
        this.myData.myInfo.find(function (el) {
          if (el.title == '公司') {
            el.value = editedPiece.company;
            return true;
          }
        });
      } else if (editedPiece.index == '来自') {
        this.myData.myInfo.find(function (el) {
          if (el.title == '来自') {
            el.value = editedPiece.hometown;
            return true;
          }
        });
      } else if (editedPiece.index == '经常出没') {
        this.myData.myInfo.find(function (el) {
          if (el.title == '经常出没') {
            el.value = editedPiece.input;
            return true;
          }
        });
      } else if (editedPiece.index == '个人签名') {
        this.myData.myInfo.find(function (el) {
          if (el.title == '个人签名') {
            el.value = editedPiece.signature;
            return true;
          }
        });
      } else if (editedPiece.index == 'tag') {
        self.myData.myTags = [];
        editedPiece.tagsList.forEach(function (el) {
          if (el.picked) {
            // console.log('el.value: ' + el.value);
            self.myData.myTags.push(el.value);
            // console.log('  this.myData.myTags: ' +   self.myData.myTags);
          }
        });
      } else if (editedPiece.index == 'sports') {
        self.myData.sports = [];
        editedPiece.sportsList.forEach(function (el) {
          if (el.picked) {
            self.myData.sports.push(el.value);
          }
        });
      } else if (editedPiece.index == 'music') {
        self.myData.music = [];
        editedPiece.musicList.forEach(function (el) {
          if (el.picked) {
            self.myData.music.push(el.value);
          }
        });
      } else if (editedPiece.index == 'food') {
        self.myData.food = [];
        editedPiece.foodList.forEach(function (el) {
          if (el.picked) {
            self.myData.food.push(el.value);
          }
        });
      } else if (editedPiece.index == 'tv') {
        self.myData.tv = [];
        editedPiece.tvList.forEach(function (el) {
          if (el.picked) {
            self.myData.tv.push(el.value);
          }
        });
      } else if (editedPiece.index == 'book') {
        self.myData.book = [];
        editedPiece.bookList.forEach(function (el) {
          if (el.picked) {
            self.myData.book.push(el.value);
          }
        });
      } else if (editedPiece.index == 'place') {
        self.myData.place = [];
        editedPiece.placeList.forEach(function (el) {
          if (el.picked) {
            self.myData.place.push(el.value);
          }
        });
      } else if (editedPiece.index == 'question') {
        this.myData.myAns[editedPiece.subIndex].value = editedPiece.answer;
      }

      _wepy2.default.removeStorageSync('editedPiece');
    }
  }, {
    key: 'loadData',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_id) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // TODO: load data
                // var res = await api.profile({
                //   query: {
                //     _id: _id
                //   }
                // })
                //  if(res.data && res.data.flag == 'success') {
                //    this.myData = res.data.data
                //  }
                this.myData = {
                  gender: 'female',
                  age: '25',
                  xingZuo: '双鱼座',
                  nickName: '王小虎',
                  h: '165',
                  weight: '45',
                  imgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'],
                  timeline_imgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'],
                  myInfo: [{ 'title': '星座', value: '天蝎座' }, { title: '行业', value: '旅游' }, { title: '工作领域', value: '策划' }, { title: '公司', value: '爱辉科技有限公司' }, { title: '来自', value: '江苏' }, { title: '经常出没', value: '春熙路' }, { title: '个人签名', value: '聪明是一种天赋，而善良是一种选择。' }],
                  myTags: ['女汉子', '喜欢简单', '靠谱', '安静', '选择恐惧症', '文艺', '厚道', '讲义气', '随性'],
                  sports: ['篮球', '健身房', '舞蹈', '台球', '射箭', '睡觉'],
                  music: ['刘德华', '五百', '80年代经典'],
                  food: ['牛排', '火锅', '美食'],
                  tv: ['我的少女时代', '喜剧之王', '倩女幽魂', '背景遇上西雅图', '机械师', '剪刀手爱德华', '傲慢与偏见'],
                  book: ['殷桃小丸子', '琼瑶', '灌篮高手'],
                  place: ['北海', '泰国', '大理', '九寨沟', '成都', '丽江', '香格里拉', '普吉岛', '越南'],
                  myAns: [{ title: '如果能有一种超能力，要什么？', value: '时光能倒流' }, { title: '如果有钱有时间，最想去做什么？', value: '环游世界' }, { title: '什么样的异性最让你心动？', value: '帅 颜值高 绅士 人品好个子高' }, { title: '如果女朋友/男朋友生气了，怎么哄？', value: '一直说开心的事情，如果还在生气就一直哄' }, { title: '可以接受的约会有哪些？', value: '电影 吃饭 篮球' }]
                };

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function loadData(_x3) {
        return _ref7.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/individualPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGl2aWR1YWxQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlZGl0TW9kZSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsInRlbXBJbWdVcmxzIiwicHJvZmlsZV9pZCIsIm1ldGhvZHMiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwibGVuZ3RoIiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicHVzaCIsIiRhcHBseSIsInByZXZpZXdJbWFnZSIsImN1ciIsImltYWdlTGlzdCIsImN1cnJlbnQiLCJ1cmxzIiwiZ29FZGl0IiwiaW5kZXgiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ29FZGl0UXVlc3Rpb24iLCJ0aXRsZSIsInRvZ2dsZSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25maXJtIiwiZ28iLCJwYWdlIiwib3B0aW9uIiwiX2lkIiwibG9hZERhdGEiLCJyZW1vdmVTdG9yYWdlU3luYyIsInNlbGYiLCJlZGl0ZWRQaWVjZSIsImdldFN0b3JhZ2VTeW5jIiwiZ2VuZGVyIiwibmlja05hbWUiLCJoIiwiaGVpZ2h0Iiwid2VpZ2h0IiwiYmlydGhEYXRlIiwiY3VycmVudFRpbWUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjdXN0b21SZWdFeHAiLCJkYXRlMSIsImV4ZWMiLCJkYXRlMiIsImFnZSIsIm15SW5mbyIsImZpbmQiLCJlbCIsInZhbHVlIiwiaW5kdXN0cnkiLCJtYWpvciIsImNvbXBhbnkiLCJob21ldG93biIsImlucHV0Iiwic2lnbmF0dXJlIiwibXlUYWdzIiwidGFnc0xpc3QiLCJmb3JFYWNoIiwicGlja2VkIiwic3BvcnRzIiwic3BvcnRzTGlzdCIsIm11c2ljIiwibXVzaWNMaXN0IiwiZm9vZCIsImZvb2RMaXN0IiwidHYiLCJ0dkxpc3QiLCJib29rIiwiYm9va0xpc3QiLCJwbGFjZSIsInBsYWNlTGlzdCIsIm15QW5zIiwic3ViSW5kZXgiLCJhbnN3ZXIiLCJ4aW5nWnVvIiwiaW1nVXJscyIsInRpbWVsaW5lX2ltZ1VybHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNKQyxnQkFBVSxJQUROO0FBRUpDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUZsQztBQUdKQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFIbkM7QUFJSkMsY0FBUSxFQUpKO0FBS0pDLG1CQUFhLENBQ1gsMExBRFcsRUFFWCxvTUFGVyxFQUdYLHVJQUhXLEVBSVgsMExBSlcsQ0FMVDtBQVdKQyxrQkFBWTtBQVhSLEssUUFtTFBDLE8sR0FBVTtBQUNGQyxpQkFERTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUUwQixlQUFLQSxXQUFMLENBQWlCO0FBQy9DQywyQkFBTyxJQUFJLEtBQUtKLFdBQUwsQ0FBaUJLLE1BRG1CO0FBRS9DQyw4QkFBVTtBQUZxQyxtQkFBakIsQ0FGMUI7O0FBQUE7QUFBQTtBQUVFQywrQkFGRixTQUVFQSxhQUZGOztBQU1OLHVDQUFLUCxXQUFMLEVBQWlCUSxJQUFqQix3Q0FBeUJELGFBQXpCO0FBQ0EsdUJBQUtFLE1BQUw7O0FBUE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFTUkMsa0JBVFEsd0JBU01DLEdBVE4sRUFTV0MsU0FUWCxFQVNzQjtBQUM1Qix1QkFBS0YsWUFBTCxDQUFrQjtBQUNoQkcsbUJBQVNGLEdBRE87QUFFaEJHLGdCQUFNRjtBQUZVLFNBQWxCO0FBSUQs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aEMsQ0FuQkc7QUFvQlhFLHlCQUFPLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxRQUFkLENBcEJJO0FBcUJYRSx3QkFBTSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQXJCSztBQXNCWEUsc0JBQUksQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixNQUFuQixFQUEyQixTQUEzQixFQUFzQyxLQUF0QyxFQUE2QyxRQUE3QyxFQUF1RCxPQUF2RCxDQXRCTztBQXVCWEUsd0JBQU0sQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixNQUFoQixDQXZCSztBQXdCWEUseUJBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsS0FBbkIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0MsTUFBdEMsRUFBOEMsS0FBOUMsRUFBcUQsSUFBckQsQ0F4Qkk7QUF5QlhFLHlCQUFPLENBQUMsRUFBQzVELE9BQU8sZ0JBQVIsRUFBMEJxQyxPQUFPLE9BQWpDLEVBQUQsRUFBNEMsRUFBQ3JDLE9BQU8saUJBQVIsRUFBMkJxQyxPQUFPLE1BQWxDLEVBQTVDLEVBQXVGLEVBQUNyQyxPQUFPLGNBQVIsRUFBd0JxQyxPQUFPLGlCQUEvQixFQUF2RixFQUEwSSxFQUFDckMsT0FBTyxtQkFBUixFQUE2QnFDLE9BQU8scUJBQXBDLEVBQTFJLEVBQXNNLEVBQUNyQyxPQUFPLGFBQVIsRUFBdUJxQyxPQUFPLFVBQTlCLEVBQXRNO0FBekJJLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0o2QixlQUFLekIsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJpbmRpdmlkdWFsUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eOi+Wwj+iZjidcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgICBlZGl0TW9kZTogdHJ1ZSxcbiAgICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgICBteURhdGE6IHt9LFxuICAgICAgIHRlbXBJbWdVcmxzOiBbXG4gICAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTRhLlpsenVoU0tKalNzcGpxNkFpOFZYYVMvTmVlZGxld29yay1kaXktZGlhbW9uZC1wYWludGluZy1jcm9zcy1zdGl0Y2gta2l0cy1mdWxsLXJlc2luLXNxdWFyZS1kaWFtb25kLWVtYnJvaWRlcnktTW9zYWljLUhvbWUtRGVjb3Itc2NlbmljLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUguVlBKVlhYWFhibFhGWFhxNnhYRlhYWGovRGl5LURpYW1vbmQtUGFpbnRpbmctS2l0cy0zMHgzMGNtLUZ1bGwtRGlhbW9uZC1TcXVhcmUtUmhpbmVzdG9uZS1QYXN0ZWQtUGFpbnRpbmctSG9tZS1EZWNvcmF0aW9uLU5hdHVyZS1TY2VuZXJ5LVdhdGVyZmFsbC5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgJ2h0dHBzOi8vd3d3LmRocmVzb3VyY2UuY29tLzB4MHMvZjItYWxidS1nNC1NMDAtMTItNDktckJWYUVGbVZvdHVBWG91OUFBTDNyUDVqU3VjNTMxLmpwZy9iZWF1dGlmdWwtc2NlbmVyeS1zZWFzaWRlLWRpeS1mdWxsLXNxdWFyZS5qcGcnLFxuICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnXG4gICAgICAgXSxcbiAgICAgICBwcm9maWxlX2lkOiAnJ1xuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKG9wdGlvbikge1xuICAgICAgdGhpcy5wcm9maWxlX2lkID0gb3B0aW9uLl9pZFxuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSh0aGlzLnByb2ZpbGVfaWQpXG4gICAgICB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScpXG4gICAgfVxuICAgIG9uU2hvdygpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgdmFyIGVkaXRlZFBpZWNlID0gd2VweS5nZXRTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2VkaXRlZFBpZWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoZWRpdGVkUGllY2UpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSAtIGVkaXRlZFBpZWNlLmJpcnRoRGF0ZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlZGl0ZWRQaWVjZS5iaXJ0aERhdGUuZ2V0TW9udGgoKSk7XG4gICAgICBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAncGVyc29uJykge1xuICAgICAgICB0aGlzLm15RGF0YS5nZW5kZXIgPSBlZGl0ZWRQaWVjZS5nZW5kZXIgJiYgZWRpdGVkUGllY2UuZ2VuZGVyIHx8IHRoaXMubXlEYXRhLmdlbmRlclxuICAgICAgICB0aGlzLm15RGF0YS5uaWNrTmFtZSA9ICBlZGl0ZWRQaWVjZS5uaWNrTmFtZSAmJiBlZGl0ZWRQaWVjZS5uaWNrTmFtZSB8fCB0aGlzLm15RGF0YS5uaWNrTmFtZVxuICAgICAgICB0aGlzLm15RGF0YS5oID0gZWRpdGVkUGllY2UuaGVpZ2h0ICYmIGVkaXRlZFBpZWNlLmhlaWdodCB8fCB0aGlzLm15RGF0YS5oXG4gICAgICAgIHRoaXMubXlEYXRhLndlaWdodCA9IGVkaXRlZFBpZWNlLndlaWdodCAmJiBlZGl0ZWRQaWVjZS53ZWlnaHQgfHwgdGhpcy5teURhdGEud2VpZ2h0XG4gICAgICAgIHRoaXMubXlEYXRhLmJpcnRoRGF0ZSA9IGVkaXRlZFBpZWNlLmJpcnRoRGF0ZSAmJiBlZGl0ZWRQaWVjZS5iaXJ0aERhdGUgfHwgdGhpcy5teURhdGEuYmlydGhEYXRlXG4gICAgICAgIGlmKGVkaXRlZFBpZWNlLmJpcnRoRGF0ZSkge1xuICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgIHZhciBjdXN0b21SZWdFeHAgPSAvKFxcZHs0fSlcXC0oXFxkezJ9KVxcLShcXGR7Mn0pL1xuICAgICAgICAgIHZhciBkYXRlMSA9IGN1c3RvbVJlZ0V4cC5leGVjKGN1cnJlbnRUaW1lKVxuICAgICAgICAgIHZhciBkYXRlMiA9IGN1c3RvbVJlZ0V4cC5leGVjKGVkaXRlZFBpZWNlLmJpcnRoRGF0ZSlcbiAgICAgICAgICB2YXIgYWdlID0gKGRhdGUxWzFdIC0gZGF0ZTJbMV0pIC0gKGRhdGUxWzJdIDwgZGF0ZTFbMl0gPyAxIDogMClcbiAgICAgICAgICB0aGlzLm15RGF0YS5hZ2UgPSBhZ2UgfHwgdGhpcy5teURhdGEuYWdlXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FnZTogJyArIGFnZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRlMTogJyArIGRhdGUxKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGUyOiAnICsgZGF0ZTIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VGltZSk7XG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+ihjOS4micpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn6KGM5LiaJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5pbmR1c3RyeVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+W3peS9nOmihuWfnycpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5bel5L2c6aKG5Z+fJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5tYWpvclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+WFrOWPuCcpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5YWs5Y+4Jykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5jb21wYW55XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn5p2l6IeqJykge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfmnaXoh6onKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmhvbWV0b3duXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn57uP5bi45Ye65rKhJykge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfnu4/luLjlh7rmsqEnKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmlucHV0XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn5Liq5Lq6562+5ZCNJykge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfkuKrkurrnrb7lkI0nKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLnNpZ25hdHVyZVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ3RhZycpIHtcbiAgICAgICAgc2VsZi5teURhdGEubXlUYWdzID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UudGFnc0xpc3QuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsLnZhbHVlOiAnICsgZWwudmFsdWUpO1xuICAgICAgICAgICAgc2VsZi5teURhdGEubXlUYWdzLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnICB0aGlzLm15RGF0YS5teVRhZ3M6ICcgKyAgIHNlbGYubXlEYXRhLm15VGFncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdzcG9ydHMnKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLnNwb3J0cyA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLnNwb3J0c0xpc3QuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEuc3BvcnRzLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdtdXNpYycpIHtcbiAgICAgICAgc2VsZi5teURhdGEubXVzaWMgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5tdXNpY0xpc3QuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEubXVzaWMucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ2Zvb2QnKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLmZvb2QgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5mb29kTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5mb29kLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICd0dicpIHtcbiAgICAgICAgc2VsZi5teURhdGEudHYgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS50dkxpc3QuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEudHYucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ2Jvb2snKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLmJvb2sgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5ib29rTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5ib29rLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdwbGFjZScpIHtcbiAgICAgICAgc2VsZi5teURhdGEucGxhY2UgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5wbGFjZUxpc3QuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEucGxhY2UucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ3F1ZXN0aW9uJykge1xuICAgICAgICB0aGlzLm15RGF0YS5teUFuc1tlZGl0ZWRQaWVjZS5zdWJJbmRleF0udmFsdWUgPSBlZGl0ZWRQaWVjZS5hbnN3ZXJcbiAgICAgIH1cblxuICAgICAgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnZWRpdGVkUGllY2UnKVxuICAgIH1cbiAgICBhc3luYyBsb2FkRGF0YShfaWQpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgICAgLy8gdmFyIHJlcyA9IGF3YWl0IGFwaS5wcm9maWxlKHtcbiAgICAgIC8vICAgcXVlcnk6IHtcbiAgICAgIC8vICAgICBfaWQ6IF9pZFxuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICAgICAgLy8gIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAvLyAgICB0aGlzLm15RGF0YSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgIC8vICB9XG4gICAgICAgIHRoaXMubXlEYXRhID0ge1xuICAgICAgICAgIGdlbmRlcjogJ2ZlbWFsZScsXG4gICAgICAgICAgYWdlOiAnMjUnLFxuICAgICAgICAgIHhpbmdadW86ICflj4zpsbzluqcnLFxuICAgICAgICAgIG5pY2tOYW1lOiAn546L5bCP6JmOJyxcbiAgICAgICAgICBoOiAnMTY1JyxcbiAgICAgICAgICB3ZWlnaHQ6ICc0NScsXG4gICAgICAgICAgaW1nVXJsczogW1xuICAgICAgICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUguVlBKVlhYWFhibFhGWFhxNnhYRlhYWGovRGl5LURpYW1vbmQtUGFpbnRpbmctS2l0cy0zMHgzMGNtLUZ1bGwtRGlhbW9uZC1TcXVhcmUtUmhpbmVzdG9uZS1QYXN0ZWQtUGFpbnRpbmctSG9tZS1EZWNvcmF0aW9uLU5hdHVyZS1TY2VuZXJ5LVdhdGVyZmFsbC5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJ1xuICAgICAgICAgICBdLFxuICAgICAgICAgICB0aW1lbGluZV9pbWdVcmxzOiBbXG4gICAgICAgICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmRocmVzb3VyY2UuY29tLzB4MHMvZjItYWxidS1nNC1NMDAtMTItNDktckJWYUVGbVZvdHVBWG91OUFBTDNyUDVqU3VjNTMxLmpwZy9iZWF1dGlmdWwtc2NlbmVyeS1zZWFzaWRlLWRpeS1mdWxsLXNxdWFyZS5qcGcnXG4gICAgICAgICAgIF0sXG4gICAgICAgICAgIG15SW5mbzogW3sndGl0bGUnOiAn5pif5bqnJywgdmFsdWU6ICflpKnonY7luqcnfSwge3RpdGxlOiAn6KGM5LiaJywgdmFsdWU6ICfml4XmuLgnfSwge3RpdGxlOiAn5bel5L2c6aKG5Z+fJywgdmFsdWU6ICfnrZbliJInfSwge3RpdGxlOiAn5YWs5Y+4JywgdmFsdWU6ICfniLHovonnp5HmioDmnInpmZDlhazlj7gnfSwge3RpdGxlOiAn5p2l6IeqJywgdmFsdWU6ICfmsZ/oi48nfSwge3RpdGxlOiAn57uP5bi45Ye65rKhJywgdmFsdWU6ICfmmKXnhpnot68nfSwge3RpdGxlOiAn5Liq5Lq6562+5ZCNJywgdmFsdWU6ICfogarmmI7mmK/kuIDnp43lpKnotYvvvIzogIzlloToia/mmK/kuIDnp43pgInmi6njgIInfV0sXG4gICAgICAgICAgIG15VGFnczogWyflpbPmsYnlrZAnLCAn5Zac5qyi566A5Y2VJywgJ+mdoOiwsScsICflronpnZknLCAn6YCJ5oup5oGQ5oOn55eHJywgJ+aWh+iJuicsICfljprpgZMnLCAn6K6y5LmJ5rCUJywgJ+maj+aApyddLFxuICAgICAgICAgICBzcG9ydHM6IFsn56+u55CDJywgJ+WBpei6q+aIvycsICfoiJ7ouYgnLCAn5Y+w55CDJywgJ+WwhOeurScsICfnnaHop4knXSxcbiAgICAgICAgICAgbXVzaWM6IFsn5YiY5b635Y2OJywgJ+S6lOeZvicsICc4MOW5tOS7o+e7j+WFuCddLFxuICAgICAgICAgICBmb29kOiBbJ+eJm+aOkicsICfngavplIUnLCAn576O6aOfJ10sXG4gICAgICAgICAgIHR2OiBbJ+aIkeeahOWwkeWls+aXtuS7oycsICfllpzliafkuYvnjosnLCAn5YCp5aWz5bm96a2CJywgJ+iDjOaZr+mBh+S4iuilv+mbheWbvicsICfmnLrmorDluIgnLCAn5Ymq5YiA5omL54ix5b635Y2OJywgJ+WCsuaFouS4juWBj+ingSddLFxuICAgICAgICAgICBib29rOiBbJ+aut+ahg+Wwj+S4uOWtkCcsICfnkLznkbYnLCAn54GM56+u6auY5omLJ10sXG4gICAgICAgICAgIHBsYWNlOiBbJ+WMl+a1tycsICfms7Dlm70nLCAn5aSn55CGJywgJ+S5neWvqOaynycsICfmiJDpg70nLCAn5Li95rGfJywgJ+mmmeagvOmHjOaLiScsICfmma7lkInlspsnLCAn6LaK5Y2XJ10sXG4gICAgICAgICAgIG15QW5zOiBbe3RpdGxlOiAn5aaC5p6c6IO95pyJ5LiA56eN6LaF6IO95Yqb77yM6KaB5LuA5LmI77yfJywgdmFsdWU6ICfml7blhYnog73lgJLmtYEnfSwge3RpdGxlOiAn5aaC5p6c5pyJ6ZKx5pyJ5pe26Ze077yM5pyA5oOz5Y675YGa5LuA5LmI77yfJywgdmFsdWU6ICfnjq/muLjkuJbnlYwnfSwge3RpdGxlOiAn5LuA5LmI5qC355qE5byC5oCn5pyA6K6p5L2g5b+D5Yqo77yfJywgdmFsdWU6ICfluIUg6aKc5YC86auYIOe7heWjqyDkurrlk4Hlpb3kuKrlrZDpq5gnfSwge3RpdGxlOiAn5aaC5p6c5aWz5pyL5Y+LL+eUt+aci+WPi+eUn+awlOS6hu+8jOaAjuS5iOWThO+8nycsIHZhbHVlOiAn5LiA55u06K+05byA5b+D55qE5LqL5oOF77yM5aaC5p6c6L+Y5Zyo55Sf5rCU5bCx5LiA55u05ZOEJ30sIHt0aXRsZTogJ+WPr+S7peaOpeWPl+eahOe6puS8muacieWTquS6m++8nycsIHZhbHVlOiAn55S15b2xIOWQg+mlrSDnr67nkIMnfV1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgYXN5bmMgY2hvb3NlSW1hZ2UgKCkge1xuICAgICAgICBjb25zdCB7IHRlbXBGaWxlUGF0aHMgfSA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIGNvdW50OiA2IC0gdGhpcy50ZW1wSW1nVXJscy5sZW5ndGgsXG4gICAgICAgICAgc2l6ZVR5cGU6ICdjb21wcmVzc2VkJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnRlbXBJbWdVcmxzLnB1c2goLi4udGVtcEZpbGVQYXRocylcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHByZXZpZXdJbWFnZSAoY3VyLCBpbWFnZUxpc3QpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgIGN1cnJlbnQ6IGN1cixcbiAgICAgICAgICB1cmxzOiBpbWFnZUxpc3RcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnb0VkaXQgKGluZGV4KSB7XG4gICAgICAgIGlmKCF0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdpdGVtRWRpdFBhZ2U/aW5kZXg9JyArIGluZGV4XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ29FZGl0UXVlc3Rpb24gKGluZGV4LCB0aXRsZSkge1xuICAgICAgICBpZighdGhpcy5lZGl0TW9kZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnaXRlbUVkaXRQYWdlP2luZGV4PXF1ZXN0aW9uJnN1YkluZGV4PScgKyBpbmRleCArICcmdGl0bGU9JyArIHRpdGxlXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXN5bmMgdG9nZ2xlICgpIHtcbiAgICAgICAgLy8gVE9ETzogc2F2ZSBlZGl0ZWQgcHJvZmlsZVxuICAgICAgICBpZih0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ehruWumuS/neWtmOWQl++8nydcbiAgICAgICAgICB9KS50aGVuKGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBpZihyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAvLyB2YXIgcmVzID0gYXdhaXQgYXBpLnVwZGF0ZVByb2ZpbGUoe1xuICAgICAgICAgICAgICAvLyAgIHBhY2s6IHtcbiAgICAgICAgICAgICAgLy8gICAgIF9pZDogdGhpcy5wcm9maWxlX2lkLFxuICAgICAgICAgICAgICAvLyAgICAgZGF0YTogdGhpcy5teURhdGFcbiAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgIC8vIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgIC8vICAgdGhpcy5teURhdGEgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGl0TW9kZSA9ICF0aGlzLmVkaXRNb2RlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBnbyAocGFnZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogcGFnZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19