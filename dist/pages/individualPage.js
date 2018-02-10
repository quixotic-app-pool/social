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
      editMode: false,
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
      goEdit: function goEdit(index, val, subIndex) {
        if (!this.editMode) {
          return;
        }
        var data = this.myData;
        var obj = {};
        if (index == 'person') {
          obj = { nickName: data.nickName, birthDate: data.birthDate, height: data.h, weight: data.weight };
          this.$parent.globalData.editedPiece = { index: index, data: obj
            // console.log('??: ' + JSON.stringify(this.$parent.globalData.editedPiece.data))
          };
        } else if (index == 'newQuestion') {
          //new question?
        } else {
          this.$parent.globalData.editedPiece = { index: index, data: val, subIndex: subIndex
            // console.log('??: ' + JSON.stringify(this.$parent.globalData.editedPiece.data))
          };
        }
        _wepy2.default.navigateTo({
          url: 'itemEditPage'
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
      var editedPiece = this.$parent.globalData.editedPiece;
      // console.log('editedPiece: ' + JSON.stringify(editedPiece));
      // console.log(new Date().toISOString() - editedPiece.birthDate);
      // console.log(editedPiece.birthDate.getMonth());
      if (editedPiece.index == 'person' && editedPiece.data) {
        this.myData.gender = editedPiece.data.gender || this.myData.gender;
        this.myData.nickName = editedPiece.data.nickName || this.myData.nickName;
        this.myData.h = editedPiece.data.height || this.myData.h;
        this.myData.weight = editedPiece.data.weight || this.myData.weight;
        this.myData.birthDate = editedPiece.data.birthDate || this.myData.birthDate;
        if (editedPiece.data.birthDate) {
          var currentTime = new Date().toISOString();
          var customRegExp = /(\d{4})\-(\d{2})\-(\d{2})/;
          var date1 = customRegExp.exec(currentTime);
          var date2 = customRegExp.exec(editedPiece.data.birthDate);
          var age = date1[1] - date2[1] - (date1[2] < date1[2] ? 1 : 0);
          this.myData.age = age || this.myData.age;
        }
        // console.log('age: ' + age);
        // console.log('date1: ' + date1);
        // console.log('date2: ' + date2);
        // console.log(currentTime);
      } else if (editedPiece.index == '行业' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '行业') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == '工作领域' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '工作领域') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == '公司' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '公司') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == '来自' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '来自') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == '经常出没' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '经常出没') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == '个人签名' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '个人签名') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == 'tag' && editedPiece.data) {
        self.myData.myTags = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            // console.log('el.value: ' + el.value);
            self.myData.myTags.push(el.value);
            // console.log('  this.myData.myTags: ' +   self.myData.myTags);
          }
        });
      } else if (editedPiece.index == 'sports' && editedPiece.data) {
        self.myData.sports = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.sports.push(el.value);
          }
        });
      } else if (editedPiece.index == 'music' && editedPiece.data) {
        self.myData.music = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.music.push(el.value);
          }
        });
      } else if (editedPiece.index == 'food' && editedPiece.data) {
        self.myData.food = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.food.push(el.value);
          }
        });
      } else if (editedPiece.index == 'tv' && editedPiece.data) {
        self.myData.tv = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.tv.push(el.value);
          }
        });
      } else if (editedPiece.index == 'book' && editedPiece.data) {
        self.myData.book = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.book.push(el.value);
          }
        });
      } else if (editedPiece.index == 'place' && editedPiece.data) {
        self.myData.place = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.place.push(el.value);
          }
        });
      } else if (editedPiece.index == 'question' && editedPiece.data) {
        this.myData.myAns[editedPiece.subIndex].value = editedPiece.data.value;
      }

      this.$parent.globalData.editedPiece = {};
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
                  gender: '0',
                  age: '25',
                  xingZuo: '双鱼座',
                  nickName: '王小虎',
                  h: '165',
                  weight: '45',
                  imgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'],
                  timeline_imgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'],
                  myInfo: [{ 'title': '星座', value: '天蝎座' }, { title: '行业', value: '金融' }, { title: '工作领域', value: '策划' }, { title: '公司', value: '爱辉科技有限公司' }, { title: '来自', value: '江苏,南京,鼓楼' }, { title: '经常出没', value: '春熙路' }, { title: '个人签名', value: '聪明是一种天赋，而善良是一种选择。' }],
                  myTags: ['Patient', 'Creative', '女汉子', '喜欢简单', '靠谱', '安静', '选择恐惧症', '文艺', '厚道', '讲义气', '随性'],
                  sports: ['Running', '篮球', '健身房', '舞蹈', '台球', '射箭', '睡觉'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGl2aWR1YWxQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlZGl0TW9kZSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsInRlbXBJbWdVcmxzIiwicHJvZmlsZV9pZCIsIm1ldGhvZHMiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwibGVuZ3RoIiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicHVzaCIsIiRhcHBseSIsInByZXZpZXdJbWFnZSIsImN1ciIsImltYWdlTGlzdCIsImN1cnJlbnQiLCJ1cmxzIiwiZ29FZGl0IiwiaW5kZXgiLCJ2YWwiLCJzdWJJbmRleCIsIm9iaiIsIm5pY2tOYW1lIiwiYmlydGhEYXRlIiwiaGVpZ2h0IiwiaCIsIndlaWdodCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZWRpdGVkUGllY2UiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9nZ2xlIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiY29uZmlybSIsImdvIiwicGFnZSIsIm9wdGlvbiIsIl9pZCIsImxvYWREYXRhIiwic2VsZiIsImdlbmRlciIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY3VzdG9tUmVnRXhwIiwiZGF0ZTEiLCJleGVjIiwiZGF0ZTIiLCJhZ2UiLCJteUluZm8iLCJmaW5kIiwiZWwiLCJ2YWx1ZSIsIm15VGFncyIsImZvckVhY2giLCJwaWNrZWQiLCJzcG9ydHMiLCJtdXNpYyIsImZvb2QiLCJ0diIsImJvb2siLCJwbGFjZSIsIm15QW5zIiwieGluZ1p1byIsImltZ1VybHMiLCJ0aW1lbGluZV9pbWdVcmxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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MEIyQixPQUFPLE9BQWpDLEVBQUQsRUFBNEMsRUFBQzNCLE9BQU8saUJBQVIsRUFBMkIyQixPQUFPLE1BQWxDLEVBQTVDLEVBQXVGLEVBQUMzQixPQUFPLGNBQVIsRUFBd0IyQixPQUFPLGlCQUEvQixFQUF2RixFQUEwSSxFQUFDM0IsT0FBTyxtQkFBUixFQUE2QjJCLE9BQU8scUJBQXBDLEVBQTFJLEVBQXNNLEVBQUMzQixPQUFPLGFBQVIsRUFBdUIyQixPQUFPLFVBQTlCLEVBQXRNO0FBekJJLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUo2QixlQUFLakIsSTs7a0JBQW5CckQsSyIsImZpbGUiOiJpbmRpdmlkdWFsUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eOi+Wwj+iZjidcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICAgbXlEYXRhOiB7fSxcbiAgICAgICB0ZW1wSW1nVXJsczogW1xuICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJyxcbiAgICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJ1xuICAgICAgIF0sXG4gICAgICAgcHJvZmlsZV9pZDogJydcbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkIChvcHRpb24pIHtcbiAgICAgIHRoaXMucHJvZmlsZV9pZCA9IG9wdGlvbi5faWRcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEodGhpcy5wcm9maWxlX2lkKVxuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHZhciBlZGl0ZWRQaWVjZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlXG4gICAgICAvLyBjb25zb2xlLmxvZygnZWRpdGVkUGllY2U6ICcgKyBKU09OLnN0cmluZ2lmeShlZGl0ZWRQaWVjZSkpO1xuICAgICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUoKS50b0lTT1N0cmluZygpIC0gZWRpdGVkUGllY2UuYmlydGhEYXRlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVkaXRlZFBpZWNlLmJpcnRoRGF0ZS5nZXRNb250aCgpKTtcbiAgICAgIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdwZXJzb24nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEuZ2VuZGVyID0gZWRpdGVkUGllY2UuZGF0YS5nZW5kZXIgfHwgdGhpcy5teURhdGEuZ2VuZGVyXG4gICAgICAgIHRoaXMubXlEYXRhLm5pY2tOYW1lID0gIGVkaXRlZFBpZWNlLmRhdGEubmlja05hbWUgfHwgdGhpcy5teURhdGEubmlja05hbWVcbiAgICAgICAgdGhpcy5teURhdGEuaCA9IGVkaXRlZFBpZWNlLmRhdGEuaGVpZ2h0IHx8IHRoaXMubXlEYXRhLmhcbiAgICAgICAgdGhpcy5teURhdGEud2VpZ2h0ID0gZWRpdGVkUGllY2UuZGF0YS53ZWlnaHQgfHwgdGhpcy5teURhdGEud2VpZ2h0XG4gICAgICAgIHRoaXMubXlEYXRhLmJpcnRoRGF0ZSA9IGVkaXRlZFBpZWNlLmRhdGEuYmlydGhEYXRlIHx8IHRoaXMubXlEYXRhLmJpcnRoRGF0ZVxuICAgICAgICBpZihlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSkge1xuICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgIHZhciBjdXN0b21SZWdFeHAgPSAvKFxcZHs0fSlcXC0oXFxkezJ9KVxcLShcXGR7Mn0pL1xuICAgICAgICAgIHZhciBkYXRlMSA9IGN1c3RvbVJlZ0V4cC5leGVjKGN1cnJlbnRUaW1lKVxuICAgICAgICAgIHZhciBkYXRlMiA9IGN1c3RvbVJlZ0V4cC5leGVjKGVkaXRlZFBpZWNlLmRhdGEuYmlydGhEYXRlKVxuICAgICAgICAgIHZhciBhZ2UgPSAoZGF0ZTFbMV0gLSBkYXRlMlsxXSkgLSAoZGF0ZTFbMl0gPCBkYXRlMVsyXSA/IDEgOiAwKVxuICAgICAgICAgIHRoaXMubXlEYXRhLmFnZSA9IGFnZSB8fCB0aGlzLm15RGF0YS5hZ2VcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWdlOiAnICsgYWdlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGUxOiAnICsgZGF0ZTEpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0ZTI6ICcgKyBkYXRlMik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRUaW1lKTtcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn6KGM5LiaJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+ihjOS4micpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+W3peS9nOmihuWfnycgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICflt6XkvZzpoobln58nKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICflhazlj7gnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5YWs5Y+4Jykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn5p2l6IeqJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+adpeiHqicpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+e7j+W4uOWHuuayoScgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfnu4/luLjlh7rmsqEnKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICfkuKrkurrnrb7lkI0nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5Liq5Lq6562+5ZCNJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAndGFnJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLm15VGFncyA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsLnZhbHVlOiAnICsgZWwudmFsdWUpO1xuICAgICAgICAgICAgc2VsZi5teURhdGEubXlUYWdzLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnICB0aGlzLm15RGF0YS5teVRhZ3M6ICcgKyAgIHNlbGYubXlEYXRhLm15VGFncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdzcG9ydHMnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEuc3BvcnRzID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5zcG9ydHMucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ211c2ljJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLm11c2ljID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5tdXNpYy5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAnZm9vZCcgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS5mb29kID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5mb29kLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICd0dicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS50diA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEudHYucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ2Jvb2snICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEuYm9vayA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEuYm9vay5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAncGxhY2UnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEucGxhY2UgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5kYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC5waWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGYubXlEYXRhLnBsYWNlLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdxdWVzdGlvbicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUFuc1tlZGl0ZWRQaWVjZS5zdWJJbmRleF0udmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlID0ge31cbiAgICB9XG4gICAgYXN5bmMgbG9hZERhdGEoX2lkKSB7XG4gICAgICAvLyBUT0RPOiBsb2FkIGRhdGFcbiAgICAgIC8vIHZhciByZXMgPSBhd2FpdCBhcGkucHJvZmlsZSh7XG4gICAgICAvLyAgIHF1ZXJ5OiB7XG4gICAgICAvLyAgICAgX2lkOiBfaWRcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgIC8vICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgLy8gICAgdGhpcy5teURhdGEgPSByZXMuZGF0YS5kYXRhXG4gICAgICAvLyAgfVxuICAgICAgICB0aGlzLm15RGF0YSA9IHtcbiAgICAgICAgICBnZW5kZXI6ICcwJyxcbiAgICAgICAgICBhZ2U6ICcyNScsXG4gICAgICAgICAgeGluZ1p1bzogJ+WPjOmxvOW6pycsXG4gICAgICAgICAgbmlja05hbWU6ICfnjovlsI/omY4nLFxuICAgICAgICAgIGg6ICcxNjUnLFxuICAgICAgICAgIHdlaWdodDogJzQ1JyxcbiAgICAgICAgICBpbWdVcmxzOiBbXG4gICAgICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxSC5WUEpWWFhYWGJsWEZYWHE2eFhGWFhYai9EaXktRGlhbW9uZC1QYWludGluZy1LaXRzLTMweDMwY20tRnVsbC1EaWFtb25kLVNxdWFyZS1SaGluZXN0b25lLVBhc3RlZC1QYWludGluZy1Ib21lLURlY29yYXRpb24tTmF0dXJlLVNjZW5lcnktV2F0ZXJmYWxsLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmRocmVzb3VyY2UuY29tLzB4MHMvZjItYWxidS1nNC1NMDAtMTItNDktckJWYUVGbVZvdHVBWG91OUFBTDNyUDVqU3VjNTMxLmpwZy9iZWF1dGlmdWwtc2NlbmVyeS1zZWFzaWRlLWRpeS1mdWxsLXNxdWFyZS5qcGcnXG4gICAgICAgICAgIF0sXG4gICAgICAgICAgIHRpbWVsaW5lX2ltZ1VybHM6IFtcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUguVlBKVlhYWFhibFhGWFhxNnhYRlhYWGovRGl5LURpYW1vbmQtUGFpbnRpbmctS2l0cy0zMHgzMGNtLUZ1bGwtRGlhbW9uZC1TcXVhcmUtUmhpbmVzdG9uZS1QYXN0ZWQtUGFpbnRpbmctSG9tZS1EZWNvcmF0aW9uLU5hdHVyZS1TY2VuZXJ5LVdhdGVyZmFsbC5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgICAgICAnaHR0cHM6Ly93d3cuZGhyZXNvdXJjZS5jb20vMHgwcy9mMi1hbGJ1LWc0LU0wMC0xMi00OS1yQlZhRUZtVm90dUFYb3U5QUFMM3JQNWpTdWM1MzEuanBnL2JlYXV0aWZ1bC1zY2VuZXJ5LXNlYXNpZGUtZGl5LWZ1bGwtc3F1YXJlLmpwZydcbiAgICAgICAgICAgXSxcbiAgICAgICAgICAgbXlJbmZvOiBbeyd0aXRsZSc6ICfmmJ/luqcnLCB2YWx1ZTogJ+WkqeidjuW6pyd9LCB7dGl0bGU6ICfooYzkuJonLCB2YWx1ZTogJ+mHkeiejSd9LCB7dGl0bGU6ICflt6XkvZzpoobln58nLCB2YWx1ZTogJ+etluWIkid9LCB7dGl0bGU6ICflhazlj7gnLCB2YWx1ZTogJ+eIsei+ieenkeaKgOaciemZkOWFrOWPuCd9LCB7dGl0bGU6ICfmnaXoh6onLCB2YWx1ZTogJ+axn+iLjyzljZfkuqws6byT5qW8J30sIHt0aXRsZTogJ+e7j+W4uOWHuuayoScsIHZhbHVlOiAn5pil54aZ6LevJ30sIHt0aXRsZTogJ+S4quS6uuetvuWQjScsIHZhbHVlOiAn6IGq5piO5piv5LiA56eN5aSp6LWL77yM6ICM5ZaE6Imv5piv5LiA56eN6YCJ5oup44CCJ31dLFxuICAgICAgICAgICBteVRhZ3M6IFsnUGF0aWVudCcsICdDcmVhdGl2ZScsICflpbPmsYnlrZAnLCAn5Zac5qyi566A5Y2VJywgJ+mdoOiwsScsICflronpnZknLCAn6YCJ5oup5oGQ5oOn55eHJywgJ+aWh+iJuicsICfljprpgZMnLCAn6K6y5LmJ5rCUJywgJ+maj+aApyddLFxuICAgICAgICAgICBzcG9ydHM6IFsnUnVubmluZycsICfnr67nkIMnLCAn5YGl6Lqr5oi/JywgJ+iInui5iCcsICflj7DnkIMnLCAn5bCE566tJywgJ+edoeiniSddLFxuICAgICAgICAgICBtdXNpYzogWyfliJjlvrfljY4nLCAn5LqU55m+JywgJzgw5bm05Luj57uP5YW4J10sXG4gICAgICAgICAgIGZvb2Q6IFsn54mb5o6SJywgJ+eBq+mUhScsICfnvo7po58nXSxcbiAgICAgICAgICAgdHY6IFsn5oiR55qE5bCR5aWz5pe25LujJywgJ+WWnOWJp+S5i+eOiycsICflgKnlpbPlub3prYInLCAn6IOM5pmv6YGH5LiK6KW/6ZuF5Zu+JywgJ+acuuaisOW4iCcsICfliarliIDmiYvniLHlvrfljY4nLCAn5YKy5oWi5LiO5YGP6KeBJ10sXG4gICAgICAgICAgIGJvb2s6IFsn5q635qGD5bCP5Li45a2QJywgJ+eQvOeRticsICfngYznr67pq5jmiYsnXSxcbiAgICAgICAgICAgcGxhY2U6IFsn5YyX5rW3JywgJ+azsOWbvScsICflpKfnkIYnLCAn5Lmd5a+o5rKfJywgJ+aIkOmDvScsICfkuL3msZ8nLCAn6aaZ5qC86YeM5ouJJywgJ+aZruWQieWymycsICfotorljZcnXSxcbiAgICAgICAgICAgbXlBbnM6IFt7dGl0bGU6ICflpoLmnpzog73mnInkuIDnp43otoXog73lipvvvIzopoHku4DkuYjvvJ8nLCB2YWx1ZTogJ+aXtuWFieiDveWAkua1gSd9LCB7dGl0bGU6ICflpoLmnpzmnInpkrHmnInml7bpl7TvvIzmnIDmg7PljrvlgZrku4DkuYjvvJ8nLCB2YWx1ZTogJ+eOr+a4uOS4lueVjCd9LCB7dGl0bGU6ICfku4DkuYjmoLfnmoTlvILmgKfmnIDorqnkvaDlv4PliqjvvJ8nLCB2YWx1ZTogJ+W4hSDpopzlgLzpq5gg57uF5aOrIOS6uuWTgeWlveS4quWtkOmrmCd9LCB7dGl0bGU6ICflpoLmnpzlpbPmnIvlj4sv55S35pyL5Y+L55Sf5rCU5LqG77yM5oCO5LmI5ZOE77yfJywgdmFsdWU6ICfkuIDnm7Tor7TlvIDlv4PnmoTkuovmg4XvvIzlpoLmnpzov5jlnKjnlJ/msJTlsLHkuIDnm7Tlk4QnfSwge3RpdGxlOiAn5Y+v5Lul5o6l5Y+X55qE57qm5Lya5pyJ5ZOq5Lqb77yfJywgdmFsdWU6ICfnlLXlvbEg5ZCD6aWtIOevrueQgyd9XVxuICAgICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyBjaG9vc2VJbWFnZSAoKSB7XG4gICAgICAgIGNvbnN0IHsgdGVtcEZpbGVQYXRocyB9ID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgY291bnQ6IDYgLSB0aGlzLnRlbXBJbWdVcmxzLmxlbmd0aCxcbiAgICAgICAgICBzaXplVHlwZTogJ2NvbXByZXNzZWQnXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudGVtcEltZ1VybHMucHVzaCguLi50ZW1wRmlsZVBhdGhzKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgcHJldmlld0ltYWdlIChjdXIsIGltYWdlTGlzdCkge1xuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgY3VycmVudDogY3VyLFxuICAgICAgICAgIHVybHM6IGltYWdlTGlzdFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvRWRpdCAoaW5kZXgsIHZhbCwgc3ViSW5kZXgpIHtcbiAgICAgICAgaWYoIXRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMubXlEYXRhXG4gICAgICAgIHZhciBvYmogPSB7fVxuICAgICAgICBpZihpbmRleCA9PSAncGVyc29uJykge1xuICAgICAgICAgIG9iaiA9IHtuaWNrTmFtZTogZGF0YS5uaWNrTmFtZSwgYmlydGhEYXRlOiBkYXRhLmJpcnRoRGF0ZSwgaGVpZ2h0OiBkYXRhLmgsIHdlaWdodDogZGF0YS53ZWlnaHR9XG4gICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UgPSB7aW5kZXg6IGluZGV4LCBkYXRhOiBvYmp9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJz8/OiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSkpXG4gICAgICAgIH0gZWxzZSBpZihpbmRleCA9PSAnbmV3UXVlc3Rpb24nKSB7XG4gICAgICAgICAgICAvL25ldyBxdWVzdGlvbj9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZSA9IHtpbmRleDogaW5kZXgsIGRhdGE6IHZhbCwgc3ViSW5kZXg6IHN1YkluZGV4fVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc/PzogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlLmRhdGEpKVxuICAgICAgICB9XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnaXRlbUVkaXRQYWdlJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHRvZ2dsZSAoKSB7XG4gICAgICAgIC8vIFRPRE86IHNhdmUgZWRpdGVkIHByb2ZpbGVcbiAgICAgICAgaWYodGhpcy5lZGl0TW9kZSkge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfnoa7lrprkv53lrZjlkJfvvJ8nXG4gICAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgaWYocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgLy8gdmFyIHJlcyA9IGF3YWl0IGFwaS51cGRhdGVQcm9maWxlKHtcbiAgICAgICAgICAgICAgLy8gICBwYWNrOiB7XG4gICAgICAgICAgICAgIC8vICAgICBfaWQ6IHRoaXMucHJvZmlsZV9pZCxcbiAgICAgICAgICAgICAgLy8gICAgIGRhdGE6IHRoaXMubXlEYXRhXG4gICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAvLyBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAvLyAgIHRoaXMubXlEYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSAhdGhpcy5lZGl0TW9kZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgZ28gKHBhZ2UpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IHBhZ2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==