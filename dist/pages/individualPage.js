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
      navigationBarTitleText: '陈泽铭 '
    }, _this.data = {
      editMode: false,
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myData: {
        gender: '1',
        age: '99',
        birthDate: '1990-01-01',
        xingZuo: '双鱼座',
        nickName: '爱因斯坦',
        h: '170',
        weight: '70',
        imgUrls: [],
        myInfo: [{ 'title': '星座', value: '待填' }, { title: '行业', value: '待填' }, { title: '工作领域', value: '待填' }, { title: '公司', value: '待填' }, { title: '来自', value: '待填' }, { title: '经常出没', value: '待填' }, { title: '个人签名', value: '待填' }],
        myTags: ['待填'],
        sports: ['待填'],
        music: ['待填'],
        food: ['待填'],
        tv: ['待填'],
        book: ['待填'],
        place: ['待填'],
        myAns: [{ title: '您的问题？', value: '待填' }]
      },
      tempImgUrls: [],
      profileUser_id: ''
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
          var self;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // TODO: save edited profile
                  self = this;

                  if (this.editMode) {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '确定保存吗？'
                    }).then(function () {
                      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
                        var pack, temp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, r, myInfo, subObj, arr, key;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (!res.confirm) {
                                  _context2.next = 51;
                                  break;
                                }

                                pack = {};

                                pack.intro = self.myData;

                                // pack.intro = {
                                //   gender: '0',
                                //   birthDate: '1990-01-01',
                                //   nickName: '王小虎',
                                //   h: '165',
                                //   weight: '45',
                                //   imgUrls: [
                                //      'https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg',
                                //      'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg',
                                //      'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'
                                //    ],
                                //    myInfo: [{title: '行业', value: '金融'}, {title: '工作领域', value: '策划'}, {title: '公司', value: '爱辉科技有限公司'}, {title: '来自', value: '江苏,南京,鼓楼'}, {title: '经常出没', value: '春熙路'}, {title: '个人签名', value: '聪明是一种天赋，而善良是一种选择。'}],
                                //    myTags: ['Patient', 'Creative', '女汉子', '喜欢简单', '靠谱', '安静', '选择恐惧症', '文艺', '厚道', '讲义气', '随性'],
                                //    sports: ['Running', '篮球', '健身房', '舞蹈', '台球', '射箭', '睡觉'],
                                //    music: ['刘德华', '五百', '80年代经典'],
                                //    food: ['牛排', '火锅', '美食'],
                                //    tv: ['我的少女时代', '喜剧之王', '倩女幽魂', '背景遇上西雅图', '机械师', '剪刀手爱德华', '傲慢与偏见'],
                                //    book: ['殷桃小丸子', '琼瑶', '灌篮高手'],
                                //    place: ['北海', '泰国', '大理', '九寨沟', '成都', '丽江', '香格里拉', '普吉岛', '越南'],
                                //    myAns: [{title: '如果能有一种超能力，要什么？', value: '时光能倒流'}, {title: '如果有钱有时间，最想去做什么？', value: '环游世界'}, {title: '什么样的异性最让你心动？', value: '帅 颜值高 绅士 人品好个子高'}, {title: '如果女朋友/男朋友生气了，怎么哄？', value: '一直说开心的事情，如果还在生气就一直哄'}, {title: '可以接受的约会有哪些？', value: '电影 吃饭 篮球'}]
                                // }


                                //here need to transform myInfo from array to object
                                temp = {};

                                pack.intro.myInfo.forEach(function (item) {
                                  temp[item.title] = item.value;
                                });
                                pack.intro.myInfo = temp;
                                // console.log('self.profileUser_id: ' + self.profileUser_id);
                                pack.user_id = self.profileUser_id;
                                // upload images

                                if (!(self.tempImgUrls.length > 0)) {
                                  _context2.next = 45;
                                  break;
                                }

                                _context2.prev = 8;
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context2.prev = 12;
                                _iterator = self.tempImgUrls[Symbol.iterator]();

                              case 14:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                  _context2.next = 24;
                                  break;
                                }

                                v = _step.value;
                                _context2.next = 18;
                                return _wepy2.default.uploadFile({
                                  url: 'http://127.0.0.1:8000/api/upload/image',
                                  filePath: v,
                                  name: 'file',
                                  success: function success(res) {
                                    console.log('image has been successfully saved in server. Congrats!');
                                  }
                                });

                              case 18:
                                r = _context2.sent;


                                r.data = JSON.parse(r.data);
                                // console.log('r.data:' + JSON.stringify(r.data));
                                if (r.data.img) {
                                  // console.log('supposed to have url of OSS: ' + r.data.img)
                                  pack.imgUrls.push(r.data.img);
                                } else {
                                  _wepy2.default.hideToast();
                                  _wepy2.default.showModal({
                                    title: '提示',
                                    content: '服务器错误，上传图片失败。请重试~：）' + r.data.errmsg,
                                    showCancel: false
                                  });
                                }

                              case 21:
                                _iteratorNormalCompletion = true;
                                _context2.next = 14;
                                break;

                              case 24:
                                _context2.next = 30;
                                break;

                              case 26:
                                _context2.prev = 26;
                                _context2.t0 = _context2['catch'](12);
                                _didIteratorError = true;
                                _iteratorError = _context2.t0;

                              case 30:
                                _context2.prev = 30;
                                _context2.prev = 31;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                  _iterator.return();
                                }

                              case 33:
                                _context2.prev = 33;

                                if (!_didIteratorError) {
                                  _context2.next = 36;
                                  break;
                                }

                                throw _iteratorError;

                              case 36:
                                return _context2.finish(33);

                              case 37:
                                return _context2.finish(30);

                              case 38:
                                _context2.next = 45;
                                break;

                              case 40:
                                _context2.prev = 40;
                                _context2.t1 = _context2['catch'](8);

                                _wepy2.default.hideToast();
                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '服务器错误，上传图片失败。' + _context2.t1.message,
                                  showCancel: false
                                });
                                self.editMode = !self.editMode;

                              case 45:
                                _context2.next = 47;
                                return _api2.default.updateProfile({
                                  query: {
                                    pack: pack
                                  },
                                  method: 'POST'
                                });

                              case 47:
                                res = _context2.sent;

                                // console.log("?: "+ JSON.stringify(res.data.data));
                                if (res.data && res.data.flag == 'success') {
                                  console.log('successs');

                                  self.myData = res.data.data;
                                  // console.log('self.data: ' + JSON.stringify(self.myData.myInfo))
                                  myInfo = self.myData.myInfo;

                                  console.log('myInfo: ' + myInfo);
                                  subObj = {};
                                  arr = [];

                                  for (key in myInfo) {
                                    subObj.title = key;
                                    subObj.value = myInfo[key];
                                    arr.push(subObj);
                                  }
                                  self.myData.myInfo = arr;
                                  self.editMode = !self.editMode;
                                  self.$apply();
                                }
                                _context2.next = 53;
                                break;

                              case 51:
                                self.editMode = !self.editMode;
                                self.$apply();

                              case 53:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this, [[8, 40], [12, 26, 30, 38], [31,, 33, 37]]);
                      }));

                      return function (_x) {
                        return _ref5.apply(this, arguments);
                      };
                    }());
                  } else {
                    this.editMode = !this.editMode;
                    this.$apply();
                  }
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
                // this.profileUser_id = wepy.getStorageSync('UserId')
                this.profileUser_id = option._id;
                _context4.next = 3;
                return this.loadData(this.profileUser_id);

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
        console.log('edited back');
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
        var res, data, myInfo, subObj, arr, key;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _api2.default.profile({
                  query: {
                    _id: _id
                  }
                });

              case 2:
                res = _context5.sent;

                // console.log('res: ' + JSON.stringify(res));
                if (res.data && res.data.flag == 'success' && res.data.data.intro.nickName) {
                  data = res.data.data.intro;
                  // console.log('self.data: ' + JSON.stringify(self.myData.myInfo))

                  myInfo = data.myInfo;
                  subObj = {};
                  arr = [];

                  for (key in myInfo) {
                    subObj.title = key;
                    subObj.value = myInfo[key];
                    //console.log('subObj: ' + JSON.stringify(subObj))
                    arr.unshift(subObj);
                    subObj = {};
                    console.log('arr: ' + JSON.stringify(arr));
                  }
                  data.myInfo = arr;
                  this.myData = data;
                  console.log('myData: ' + JSON.stringify(this.myData));
                }
                // this.myData = {
                //   gender: '0',
                //   birthDate: '1990-01-01',
                //   nickName: '王小虎',
                //   h: '165',
                //   weight: '45',
                //   imgUrls: [
                //      'https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg',
                //      'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg',
                //      'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'
                //    ],
                //    timeline_imgUrls: [
                //       'https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg',
                //       'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg',
                //       'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'
                //    ],
                //    myInfo: [{'title': '星座', value: '天蝎座'}, {title: '行业', value: '金融'}, {title: '工作领域', value: '策划'}, {title: '公司', value: '爱辉科技有限公司'}, {title: '来自', value: '江苏,南京,鼓楼'}, {title: '经常出没', value: '春熙路'}, {title: '个人签名', value: '聪明是一种天赋，而善良是一种选择。'}],
                //    myTags: ['Patient', 'Creative', '女汉子', '喜欢简单', '靠谱', '安静', '选择恐惧症', '文艺', '厚道', '讲义气', '随性'],
                //    sports: ['Running', '篮球', '健身房', '舞蹈', '台球', '射箭', '睡觉'],
                //    music: ['刘德华', '五百', '80年代经典'],
                //    food: ['牛排', '火锅', '美食'],
                //    tv: ['我的少女时代', '喜剧之王', '倩女幽魂', '背景遇上西雅图', '机械师', '剪刀手爱德华', '傲慢与偏见'],
                //    book: ['殷桃小丸子', '琼瑶', '灌篮高手'],
                //    place: ['北海', '泰国', '大理', '九寨沟', '成都', '丽江', '香格里拉', '普吉岛', '越南'],
                //    myAns: [{title: '如果能有一种超能力，要什么？', value: '时光能倒流'}, {title: '如果有钱有时间，最想去做什么？', value: '环游世界'}, {title: '什么样的异性最让你心动？', value: '帅 颜值高 绅士 人品好个子高'}, {title: '如果女朋友/男朋友生气了，怎么哄？', value: '一直说开心的事情，如果还在生气就一直哄'}, {title: '可以接受的约会有哪些？', value: '电影 吃饭 篮球'}]
                // }

              case 4:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGl2aWR1YWxQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlZGl0TW9kZSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsImdlbmRlciIsImFnZSIsImJpcnRoRGF0ZSIsInhpbmdadW8iLCJuaWNrTmFtZSIsImgiLCJ3ZWlnaHQiLCJpbWdVcmxzIiwibXlJbmZvIiwidmFsdWUiLCJ0aXRsZSIsIm15VGFncyIsInNwb3J0cyIsIm11c2ljIiwiZm9vZCIsInR2IiwiYm9vayIsInBsYWNlIiwibXlBbnMiLCJ0ZW1wSW1nVXJscyIsInByb2ZpbGVVc2VyX2lkIiwibWV0aG9kcyIsImNob29zZUltYWdlIiwiY291bnQiLCJsZW5ndGgiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJwdXNoIiwiJGFwcGx5IiwicHJldmlld0ltYWdlIiwiY3VyIiwiaW1hZ2VMaXN0IiwiY3VycmVudCIsInVybHMiLCJnb0VkaXQiLCJpbmRleCIsInZhbCIsInN1YkluZGV4Iiwib2JqIiwiaGVpZ2h0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJlZGl0ZWRQaWVjZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b2dnbGUiLCJzZWxmIiwic2hvd01vZGFsIiwiY29udGVudCIsInRoZW4iLCJyZXMiLCJjb25maXJtIiwicGFjayIsImludHJvIiwidGVtcCIsImZvckVhY2giLCJpdGVtIiwidXNlcl9pZCIsInYiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJuYW1lIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJyIiwiSlNPTiIsInBhcnNlIiwiaW1nIiwiaGlkZVRvYXN0IiwiZXJybXNnIiwic2hvd0NhbmNlbCIsIm1lc3NhZ2UiLCJ1cGRhdGVQcm9maWxlIiwicXVlcnkiLCJtZXRob2QiLCJmbGFnIiwic3ViT2JqIiwiYXJyIiwia2V5IiwiZ28iLCJwYWdlIiwib3B0aW9uIiwiX2lkIiwibG9hZERhdGEiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImN1c3RvbVJlZ0V4cCIsImRhdGUxIiwiZXhlYyIsImRhdGUyIiwiZmluZCIsImVsIiwicGlja2VkIiwicHJvZmlsZSIsInVuc2hpZnQiLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNKQyxnQkFBVSxLQUROO0FBRUpDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUZsQztBQUdKQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFIbkM7QUFJSkMsY0FBUTtBQUNOQyxnQkFBUSxHQURGO0FBRU5DLGFBQUssSUFGQztBQUdOQyxtQkFBVyxZQUhMO0FBSU5DLGlCQUFTLEtBSkg7QUFLTkMsa0JBQVUsTUFMSjtBQU1OQyxXQUFHLEtBTkc7QUFPTkMsZ0JBQVEsSUFQRjtBQVFOQyxpQkFBUyxFQVJIO0FBU0xDLGdCQUFRLENBQUMsRUFBQyxTQUFTLElBQVYsRUFBZ0JDLE9BQU8sSUFBdkIsRUFBRCxFQUErQixFQUFDQyxPQUFPLElBQVIsRUFBY0QsT0FBTyxJQUFyQixFQUEvQixFQUEyRCxFQUFDQyxPQUFPLE1BQVIsRUFBZ0JELE9BQU8sSUFBdkIsRUFBM0QsRUFBeUYsRUFBQ0MsT0FBTyxJQUFSLEVBQWNELE9BQU8sSUFBckIsRUFBekYsRUFBcUgsRUFBQ0MsT0FBTyxJQUFSLEVBQWNELE9BQU8sSUFBckIsRUFBckgsRUFBaUosRUFBQ0MsT0FBTyxNQUFSLEVBQWdCRCxPQUFPLElBQXZCLEVBQWpKLEVBQStLLEVBQUNDLE9BQU8sTUFBUixFQUFnQkQsT0FBTyxJQUF2QixFQUEvSyxDQVRIO0FBVUxFLGdCQUFRLENBQUMs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE5TTZCLGVBQUtrRixJOztrQkFBbkI1RixLIiwiZmlsZSI6ImluZGl2aWR1YWxQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZmI5rO96ZOtICdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICAgbXlEYXRhOiB7XG4gICAgICAgICBnZW5kZXI6ICcxJyxcbiAgICAgICAgIGFnZTogJzk5JyxcbiAgICAgICAgIGJpcnRoRGF0ZTogJzE5OTAtMDEtMDEnLFxuICAgICAgICAgeGluZ1p1bzogJ+WPjOmxvOW6pycsXG4gICAgICAgICBuaWNrTmFtZTogJ+eIseWboOaWr+WdpicsXG4gICAgICAgICBoOiAnMTcwJyxcbiAgICAgICAgIHdlaWdodDogJzcwJyxcbiAgICAgICAgIGltZ1VybHM6IFtdLFxuICAgICAgICAgIG15SW5mbzogW3sndGl0bGUnOiAn5pif5bqnJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn6KGM5LiaJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5bel5L2c6aKG5Z+fJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5YWs5Y+4JywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5p2l6IeqJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn57uP5bi45Ye65rKhJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5Liq5Lq6562+5ZCNJywgdmFsdWU6ICflvoXloasnfV0sXG4gICAgICAgICAgbXlUYWdzOiBbJ+W+heWhqyddLFxuICAgICAgICAgIHNwb3J0czogWyflvoXloasnXSxcbiAgICAgICAgICBtdXNpYzogWyflvoXloasnXSxcbiAgICAgICAgICBmb29kOiBbJ+W+heWhqyddLFxuICAgICAgICAgIHR2OiBbJ+W+heWhqyddLFxuICAgICAgICAgIGJvb2s6IFsn5b6F5aGrJ10sXG4gICAgICAgICAgcGxhY2U6IFsn5b6F5aGrJ10sXG4gICAgICAgICAgbXlBbnM6IFt7dGl0bGU6ICfmgqjnmoTpl67popjvvJ8nLCB2YWx1ZTogJ+W+heWhqyd9XVxuICAgICAgIH0sXG4gICAgICAgdGVtcEltZ1VybHM6IFtdLFxuICAgICAgIHByb2ZpbGVVc2VyX2lkOiAnJ1xuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKG9wdGlvbikge1xuICAgICAgLy8gdGhpcy5wcm9maWxlVXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgICB0aGlzLnByb2ZpbGVVc2VyX2lkID0gb3B0aW9uLl9pZFxuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSh0aGlzLnByb2ZpbGVVc2VyX2lkKVxuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHZhciBlZGl0ZWRQaWVjZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlXG4gICAgICAvLyBjb25zb2xlLmxvZygnZWRpdGVkUGllY2U6ICcgKyBKU09OLnN0cmluZ2lmeShlZGl0ZWRQaWVjZSkpO1xuICAgICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUoKS50b0lTT1N0cmluZygpIC0gZWRpdGVkUGllY2UuYmlydGhEYXRlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVkaXRlZFBpZWNlLmJpcnRoRGF0ZS5nZXRNb250aCgpKTtcbiAgICAgIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdwZXJzb24nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VkaXRlZCBiYWNrJyk7XG4gICAgICAgIHRoaXMubXlEYXRhLmdlbmRlciA9IGVkaXRlZFBpZWNlLmRhdGEuZ2VuZGVyIHx8IHRoaXMubXlEYXRhLmdlbmRlclxuICAgICAgICB0aGlzLm15RGF0YS5uaWNrTmFtZSA9ICBlZGl0ZWRQaWVjZS5kYXRhLm5pY2tOYW1lIHx8IHRoaXMubXlEYXRhLm5pY2tOYW1lXG4gICAgICAgIHRoaXMubXlEYXRhLmggPSBlZGl0ZWRQaWVjZS5kYXRhLmhlaWdodCB8fCB0aGlzLm15RGF0YS5oXG4gICAgICAgIHRoaXMubXlEYXRhLndlaWdodCA9IGVkaXRlZFBpZWNlLmRhdGEud2VpZ2h0IHx8IHRoaXMubXlEYXRhLndlaWdodFxuICAgICAgICB0aGlzLm15RGF0YS5iaXJ0aERhdGUgPSBlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSB8fCB0aGlzLm15RGF0YS5iaXJ0aERhdGVcbiAgICAgICAgaWYoZWRpdGVkUGllY2UuZGF0YS5iaXJ0aERhdGUpIHtcbiAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICB2YXIgY3VzdG9tUmVnRXhwID0gLyhcXGR7NH0pXFwtKFxcZHsyfSlcXC0oXFxkezJ9KS9cbiAgICAgICAgICB2YXIgZGF0ZTEgPSBjdXN0b21SZWdFeHAuZXhlYyhjdXJyZW50VGltZSlcbiAgICAgICAgICB2YXIgZGF0ZTIgPSBjdXN0b21SZWdFeHAuZXhlYyhlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSlcbiAgICAgICAgICB2YXIgYWdlID0gKGRhdGUxWzFdIC0gZGF0ZTJbMV0pIC0gKGRhdGUxWzJdIDwgZGF0ZTFbMl0gPyAxIDogMClcbiAgICAgICAgICB0aGlzLm15RGF0YS5hZ2UgPSBhZ2UgfHwgdGhpcy5teURhdGEuYWdlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn6KGM5LiaJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+ihjOS4micpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+W3peS9nOmihuWfnycgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICflt6XkvZzpoobln58nKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICflhazlj7gnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5YWs5Y+4Jykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn5p2l6IeqJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+adpeiHqicpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+e7j+W4uOWHuuayoScgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfnu4/luLjlh7rmsqEnKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICfkuKrkurrnrb7lkI0nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5Liq5Lq6562+5ZCNJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAndGFnJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLm15VGFncyA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsLnZhbHVlOiAnICsgZWwudmFsdWUpO1xuICAgICAgICAgICAgc2VsZi5teURhdGEubXlUYWdzLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnICB0aGlzLm15RGF0YS5teVRhZ3M6ICcgKyAgIHNlbGYubXlEYXRhLm15VGFncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdzcG9ydHMnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEuc3BvcnRzID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5zcG9ydHMucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ211c2ljJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLm11c2ljID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5tdXNpYy5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAnZm9vZCcgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS5mb29kID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5mb29kLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICd0dicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS50diA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEudHYucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ2Jvb2snICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEuYm9vayA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEuYm9vay5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAncGxhY2UnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEucGxhY2UgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5kYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC5waWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGYubXlEYXRhLnBsYWNlLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdxdWVzdGlvbicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUFuc1tlZGl0ZWRQaWVjZS5zdWJJbmRleF0udmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlID0ge31cbiAgICB9XG4gICAgYXN5bmMgbG9hZERhdGEoX2lkKSB7XG4gICAgICAvLyBUT0RPOiBsb2FkIGRhdGFcbiAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkucHJvZmlsZSh7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgX2lkOiBfaWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXM6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJyAmJiByZXMuZGF0YS5kYXRhLmludHJvLm5pY2tOYW1lKSB7XG4gICAgICAgICB2YXIgZGF0YSA9IHJlcy5kYXRhLmRhdGEuaW50cm9cbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxmLmRhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShzZWxmLm15RGF0YS5teUluZm8pKVxuICAgICAgICAgdmFyIG15SW5mbyA9IGRhdGEubXlJbmZvXG4gICAgICAgICB2YXIgc3ViT2JqID0ge31cbiAgICAgICAgIHZhciBhcnIgPSBbXVxuICAgICAgICAgZm9yKHZhciBrZXkgaW4gbXlJbmZvKSB7XG4gICAgICAgICAgIHN1Yk9iai50aXRsZSA9IGtleVxuICAgICAgICAgICBzdWJPYmoudmFsdWUgPSBteUluZm9ba2V5XVxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3N1Yk9iajogJyArIEpTT04uc3RyaW5naWZ5KHN1Yk9iaikpXG4gICAgICAgICAgIGFyci51bnNoaWZ0KHN1Yk9iailcbiAgICAgICAgICAgc3ViT2JqID0ge31cbiAgICAgICAgICAgY29uc29sZS5sb2coJ2FycjogJyArIEpTT04uc3RyaW5naWZ5KGFycikpXG4gICAgICAgICB9XG4gICAgICAgICBkYXRhLm15SW5mbyA9IGFyclxuICAgICAgICAgdGhpcy5teURhdGEgPSBkYXRhXG4gICAgICAgICBjb25zb2xlLmxvZygnbXlEYXRhOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5teURhdGEpKTtcbiAgICAgICB9XG4gICAgICAgIC8vIHRoaXMubXlEYXRhID0ge1xuICAgICAgICAvLyAgIGdlbmRlcjogJzAnLFxuICAgICAgICAvLyAgIGJpcnRoRGF0ZTogJzE5OTAtMDEtMDEnLFxuICAgICAgICAvLyAgIG5pY2tOYW1lOiAn546L5bCP6JmOJyxcbiAgICAgICAgLy8gICBoOiAnMTY1JyxcbiAgICAgICAgLy8gICB3ZWlnaHQ6ICc0NScsXG4gICAgICAgIC8vICAgaW1nVXJsczogW1xuICAgICAgICAvLyAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgLy8gICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUguVlBKVlhYWFhibFhGWFhxNnhYRlhYWGovRGl5LURpYW1vbmQtUGFpbnRpbmctS2l0cy0zMHgzMGNtLUZ1bGwtRGlhbW9uZC1TcXVhcmUtUmhpbmVzdG9uZS1QYXN0ZWQtUGFpbnRpbmctSG9tZS1EZWNvcmF0aW9uLU5hdHVyZS1TY2VuZXJ5LVdhdGVyZmFsbC5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAvLyAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJ1xuICAgICAgICAvLyAgICBdLFxuICAgICAgICAvLyAgICB0aW1lbGluZV9pbWdVcmxzOiBbXG4gICAgICAgIC8vICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgLy8gICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgLy8gICAgICAgJ2h0dHBzOi8vd3d3LmRocmVzb3VyY2UuY29tLzB4MHMvZjItYWxidS1nNC1NMDAtMTItNDktckJWYUVGbVZvdHVBWG91OUFBTDNyUDVqU3VjNTMxLmpwZy9iZWF1dGlmdWwtc2NlbmVyeS1zZWFzaWRlLWRpeS1mdWxsLXNxdWFyZS5qcGcnXG4gICAgICAgIC8vICAgIF0sXG4gICAgICAgIC8vICAgIG15SW5mbzogW3sndGl0bGUnOiAn5pif5bqnJywgdmFsdWU6ICflpKnonY7luqcnfSwge3RpdGxlOiAn6KGM5LiaJywgdmFsdWU6ICfph5Hono0nfSwge3RpdGxlOiAn5bel5L2c6aKG5Z+fJywgdmFsdWU6ICfnrZbliJInfSwge3RpdGxlOiAn5YWs5Y+4JywgdmFsdWU6ICfniLHovonnp5HmioDmnInpmZDlhazlj7gnfSwge3RpdGxlOiAn5p2l6IeqJywgdmFsdWU6ICfmsZ/oi48s5Y2X5LqsLOm8k+alvCd9LCB7dGl0bGU6ICfnu4/luLjlh7rmsqEnLCB2YWx1ZTogJ+aYpeeGmei3ryd9LCB7dGl0bGU6ICfkuKrkurrnrb7lkI0nLCB2YWx1ZTogJ+iBquaYjuaYr+S4gOenjeWkqei1i++8jOiAjOWWhOiJr+aYr+S4gOenjemAieaLqeOAgid9XSxcbiAgICAgICAgLy8gICAgbXlUYWdzOiBbJ1BhdGllbnQnLCAnQ3JlYXRpdmUnLCAn5aWz5rGJ5a2QJywgJ+WWnOasoueugOWNlScsICfpnaDosLEnLCAn5a6J6Z2ZJywgJ+mAieaLqeaBkOaDp+eXhycsICfmlofoibonLCAn5Y6a6YGTJywgJ+iusuS5ieawlCcsICfpmo/mgKcnXSxcbiAgICAgICAgLy8gICAgc3BvcnRzOiBbJ1J1bm5pbmcnLCAn56+u55CDJywgJ+WBpei6q+aIvycsICfoiJ7ouYgnLCAn5Y+w55CDJywgJ+WwhOeurScsICfnnaHop4knXSxcbiAgICAgICAgLy8gICAgbXVzaWM6IFsn5YiY5b635Y2OJywgJ+S6lOeZvicsICc4MOW5tOS7o+e7j+WFuCddLFxuICAgICAgICAvLyAgICBmb29kOiBbJ+eJm+aOkicsICfngavplIUnLCAn576O6aOfJ10sXG4gICAgICAgIC8vICAgIHR2OiBbJ+aIkeeahOWwkeWls+aXtuS7oycsICfllpzliafkuYvnjosnLCAn5YCp5aWz5bm96a2CJywgJ+iDjOaZr+mBh+S4iuilv+mbheWbvicsICfmnLrmorDluIgnLCAn5Ymq5YiA5omL54ix5b635Y2OJywgJ+WCsuaFouS4juWBj+ingSddLFxuICAgICAgICAvLyAgICBib29rOiBbJ+aut+ahg+Wwj+S4uOWtkCcsICfnkLznkbYnLCAn54GM56+u6auY5omLJ10sXG4gICAgICAgIC8vICAgIHBsYWNlOiBbJ+WMl+a1tycsICfms7Dlm70nLCAn5aSn55CGJywgJ+S5neWvqOaynycsICfmiJDpg70nLCAn5Li95rGfJywgJ+mmmeagvOmHjOaLiScsICfmma7lkInlspsnLCAn6LaK5Y2XJ10sXG4gICAgICAgIC8vICAgIG15QW5zOiBbe3RpdGxlOiAn5aaC5p6c6IO95pyJ5LiA56eN6LaF6IO95Yqb77yM6KaB5LuA5LmI77yfJywgdmFsdWU6ICfml7blhYnog73lgJLmtYEnfSwge3RpdGxlOiAn5aaC5p6c5pyJ6ZKx5pyJ5pe26Ze077yM5pyA5oOz5Y675YGa5LuA5LmI77yfJywgdmFsdWU6ICfnjq/muLjkuJbnlYwnfSwge3RpdGxlOiAn5LuA5LmI5qC355qE5byC5oCn5pyA6K6p5L2g5b+D5Yqo77yfJywgdmFsdWU6ICfluIUg6aKc5YC86auYIOe7heWjqyDkurrlk4Hlpb3kuKrlrZDpq5gnfSwge3RpdGxlOiAn5aaC5p6c5aWz5pyL5Y+LL+eUt+aci+WPi+eUn+awlOS6hu+8jOaAjuS5iOWThO+8nycsIHZhbHVlOiAn5LiA55u06K+05byA5b+D55qE5LqL5oOF77yM5aaC5p6c6L+Y5Zyo55Sf5rCU5bCx5LiA55u05ZOEJ30sIHt0aXRsZTogJ+WPr+S7peaOpeWPl+eahOe6puS8muacieWTquS6m++8nycsIHZhbHVlOiAn55S15b2xIOWQg+mlrSDnr67nkIMnfV1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgYXN5bmMgY2hvb3NlSW1hZ2UgKCkge1xuICAgICAgICBjb25zdCB7IHRlbXBGaWxlUGF0aHMgfSA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIGNvdW50OiA2IC0gdGhpcy50ZW1wSW1nVXJscy5sZW5ndGgsXG4gICAgICAgICAgc2l6ZVR5cGU6ICdjb21wcmVzc2VkJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnRlbXBJbWdVcmxzLnB1c2goLi4udGVtcEZpbGVQYXRocylcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHByZXZpZXdJbWFnZSAoY3VyLCBpbWFnZUxpc3QpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgIGN1cnJlbnQ6IGN1cixcbiAgICAgICAgICB1cmxzOiBpbWFnZUxpc3RcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnb0VkaXQgKGluZGV4LCB2YWwsIHN1YkluZGV4KSB7XG4gICAgICAgIGlmKCF0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLm15RGF0YVxuICAgICAgICB2YXIgb2JqID0ge31cbiAgICAgICAgaWYoaW5kZXggPT0gJ3BlcnNvbicpIHtcbiAgICAgICAgICBvYmogPSB7bmlja05hbWU6IGRhdGEubmlja05hbWUsIGJpcnRoRGF0ZTogZGF0YS5iaXJ0aERhdGUsIGhlaWdodDogZGF0YS5oLCB3ZWlnaHQ6IGRhdGEud2VpZ2h0fVxuICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlID0ge2luZGV4OiBpbmRleCwgZGF0YTogb2JqfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc/PzogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlLmRhdGEpKVxuICAgICAgICB9IGVsc2UgaWYoaW5kZXggPT0gJ25ld1F1ZXN0aW9uJykge1xuICAgICAgICAgICAgLy9uZXcgcXVlc3Rpb24/XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UgPSB7aW5kZXg6IGluZGV4LCBkYXRhOiB2YWwsIHN1YkluZGV4OiBzdWJJbmRleH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPz86ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZS5kYXRhKSlcbiAgICAgICAgfVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2l0ZW1FZGl0UGFnZSdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhc3luYyB0b2dnbGUgKCkge1xuICAgICAgICAvLyBUT0RPOiBzYXZlIGVkaXRlZCBwcm9maWxlXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgICBpZih0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ehruWumuS/neWtmOWQl++8nydcbiAgICAgICAgICB9KS50aGVuKGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgaWYocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgdmFyIHBhY2sgPSB7fVxuICAgICAgICAgICAgICBwYWNrLmludHJvID0gc2VsZi5teURhdGFcblxuICAgICAgICAgICAgICAvLyBwYWNrLmludHJvID0ge1xuICAgICAgICAgICAgICAvLyAgIGdlbmRlcjogJzAnLFxuICAgICAgICAgICAgICAvLyAgIGJpcnRoRGF0ZTogJzE5OTAtMDEtMDEnLFxuICAgICAgICAgICAgICAvLyAgIG5pY2tOYW1lOiAn546L5bCP6JmOJyxcbiAgICAgICAgICAgICAgLy8gICBoOiAnMTY1JyxcbiAgICAgICAgICAgICAgLy8gICB3ZWlnaHQ6ICc0NScsXG4gICAgICAgICAgICAgIC8vICAgaW1nVXJsczogW1xuICAgICAgICAgICAgICAvLyAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICAgICAgLy8gICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUguVlBKVlhYWFhibFhGWFhxNnhYRlhYWGovRGl5LURpYW1vbmQtUGFpbnRpbmctS2l0cy0zMHgzMGNtLUZ1bGwtRGlhbW9uZC1TcXVhcmUtUmhpbmVzdG9uZS1QYXN0ZWQtUGFpbnRpbmctSG9tZS1EZWNvcmF0aW9uLU5hdHVyZS1TY2VuZXJ5LVdhdGVyZmFsbC5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgICAgICAvLyAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJ1xuICAgICAgICAgICAgICAvLyAgICBdLFxuICAgICAgICAgICAgICAvLyAgICBteUluZm86IFt7dGl0bGU6ICfooYzkuJonLCB2YWx1ZTogJ+mHkeiejSd9LCB7dGl0bGU6ICflt6XkvZzpoobln58nLCB2YWx1ZTogJ+etluWIkid9LCB7dGl0bGU6ICflhazlj7gnLCB2YWx1ZTogJ+eIsei+ieenkeaKgOaciemZkOWFrOWPuCd9LCB7dGl0bGU6ICfmnaXoh6onLCB2YWx1ZTogJ+axn+iLjyzljZfkuqws6byT5qW8J30sIHt0aXRsZTogJ+e7j+W4uOWHuuayoScsIHZhbHVlOiAn5pil54aZ6LevJ30sIHt0aXRsZTogJ+S4quS6uuetvuWQjScsIHZhbHVlOiAn6IGq5piO5piv5LiA56eN5aSp6LWL77yM6ICM5ZaE6Imv5piv5LiA56eN6YCJ5oup44CCJ31dLFxuICAgICAgICAgICAgICAvLyAgICBteVRhZ3M6IFsnUGF0aWVudCcsICdDcmVhdGl2ZScsICflpbPmsYnlrZAnLCAn5Zac5qyi566A5Y2VJywgJ+mdoOiwsScsICflronpnZknLCAn6YCJ5oup5oGQ5oOn55eHJywgJ+aWh+iJuicsICfljprpgZMnLCAn6K6y5LmJ5rCUJywgJ+maj+aApyddLFxuICAgICAgICAgICAgICAvLyAgICBzcG9ydHM6IFsnUnVubmluZycsICfnr67nkIMnLCAn5YGl6Lqr5oi/JywgJ+iInui5iCcsICflj7DnkIMnLCAn5bCE566tJywgJ+edoeiniSddLFxuICAgICAgICAgICAgICAvLyAgICBtdXNpYzogWyfliJjlvrfljY4nLCAn5LqU55m+JywgJzgw5bm05Luj57uP5YW4J10sXG4gICAgICAgICAgICAgIC8vICAgIGZvb2Q6IFsn54mb5o6SJywgJ+eBq+mUhScsICfnvo7po58nXSxcbiAgICAgICAgICAgICAgLy8gICAgdHY6IFsn5oiR55qE5bCR5aWz5pe25LujJywgJ+WWnOWJp+S5i+eOiycsICflgKnlpbPlub3prYInLCAn6IOM5pmv6YGH5LiK6KW/6ZuF5Zu+JywgJ+acuuaisOW4iCcsICfliarliIDmiYvniLHlvrfljY4nLCAn5YKy5oWi5LiO5YGP6KeBJ10sXG4gICAgICAgICAgICAgIC8vICAgIGJvb2s6IFsn5q635qGD5bCP5Li45a2QJywgJ+eQvOeRticsICfngYznr67pq5jmiYsnXSxcbiAgICAgICAgICAgICAgLy8gICAgcGxhY2U6IFsn5YyX5rW3JywgJ+azsOWbvScsICflpKfnkIYnLCAn5Lmd5a+o5rKfJywgJ+aIkOmDvScsICfkuL3msZ8nLCAn6aaZ5qC86YeM5ouJJywgJ+aZruWQieWymycsICfotorljZcnXSxcbiAgICAgICAgICAgICAgLy8gICAgbXlBbnM6IFt7dGl0bGU6ICflpoLmnpzog73mnInkuIDnp43otoXog73lipvvvIzopoHku4DkuYjvvJ8nLCB2YWx1ZTogJ+aXtuWFieiDveWAkua1gSd9LCB7dGl0bGU6ICflpoLmnpzmnInpkrHmnInml7bpl7TvvIzmnIDmg7PljrvlgZrku4DkuYjvvJ8nLCB2YWx1ZTogJ+eOr+a4uOS4lueVjCd9LCB7dGl0bGU6ICfku4DkuYjmoLfnmoTlvILmgKfmnIDorqnkvaDlv4PliqjvvJ8nLCB2YWx1ZTogJ+W4hSDpopzlgLzpq5gg57uF5aOrIOS6uuWTgeWlveS4quWtkOmrmCd9LCB7dGl0bGU6ICflpoLmnpzlpbPmnIvlj4sv55S35pyL5Y+L55Sf5rCU5LqG77yM5oCO5LmI5ZOE77yfJywgdmFsdWU6ICfkuIDnm7Tor7TlvIDlv4PnmoTkuovmg4XvvIzlpoLmnpzov5jlnKjnlJ/msJTlsLHkuIDnm7Tlk4QnfSwge3RpdGxlOiAn5Y+v5Lul5o6l5Y+X55qE57qm5Lya5pyJ5ZOq5Lqb77yfJywgdmFsdWU6ICfnlLXlvbEg5ZCD6aWtIOevrueQgyd9XVxuICAgICAgICAgICAgICAvLyB9XG5cblxuICAgICAgICAgICAgICAvL2hlcmUgbmVlZCB0byB0cmFuc2Zvcm0gbXlJbmZvIGZyb20gYXJyYXkgdG8gb2JqZWN0XG4gICAgICAgICAgICAgIHZhciB0ZW1wID0ge31cbiAgICAgICAgICAgICAgcGFjay5pbnRyby5teUluZm8uZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICAgICB0ZW1wW2l0ZW0udGl0bGVdICA9IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcGFjay5pbnRyby5teUluZm8gPSB0ZW1wXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxmLnByb2ZpbGVVc2VyX2lkOiAnICsgc2VsZi5wcm9maWxlVXNlcl9pZCk7XG4gICAgICAgICAgICAgIHBhY2sudXNlcl9pZCA9IHNlbGYucHJvZmlsZVVzZXJfaWRcbiAgICAgICAgICAgICAgLy8gdXBsb2FkIGltYWdlc1xuICAgICAgICAgICAgICBpZiAoc2VsZi50ZW1wSW1nVXJscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYgb2Ygc2VsZi50ZW1wSW1nVXJscykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gYXdhaXQgd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VwbG9hZC9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHYsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzYXZlZCBpbiBzZXJ2ZXIuIENvbmdyYXRzIScpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHIuZGF0YSA9IEpTT04ucGFyc2Uoci5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnci5kYXRhOicgKyBKU09OLnN0cmluZ2lmeShyLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuZGF0YS5pbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3VwcG9zZWQgdG8gaGF2ZSB1cmwgb2YgT1NTOiAnICsgci5kYXRhLmltZylcbiAgICAgICAgICAgICAgICAgICAgICBwYWNrLmltZ1VybHMucHVzaChyLmRhdGEuaW1nKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM5LiK5Lyg5Zu+54mH5aSx6LSl44CC6K+36YeN6K+Vfu+8mu+8iScgKyByLmRhdGEuZXJybXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmnI3liqHlmajplJnor6/vvIzkuIrkvKDlm77niYflpLHotKXjgIInICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIHNlbGYuZWRpdE1vZGUgPSAhc2VsZi5lZGl0TW9kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkudXBkYXRlUHJvZmlsZSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIHBhY2s6IHBhY2tcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPzogXCIrIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKTtcbiAgICAgICAgICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc3MnKTtcblxuICAgICAgICAgICAgICAgIHNlbGYubXlEYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxmLmRhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShzZWxmLm15RGF0YS5teUluZm8pKVxuICAgICAgICAgICAgICAgIHZhciBteUluZm8gPSBzZWxmLm15RGF0YS5teUluZm9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbXlJbmZvOiAnKyBteUluZm8pO1xuICAgICAgICAgICAgICAgIHZhciBzdWJPYmogPSB7fVxuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXVxuICAgICAgICAgICAgICAgIGZvcih2YXIga2V5IGluIG15SW5mbykge1xuICAgICAgICAgICAgICAgICAgc3ViT2JqLnRpdGxlID0ga2V5XG4gICAgICAgICAgICAgICAgICBzdWJPYmoudmFsdWUgPSBteUluZm9ba2V5XVxuICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc3ViT2JqKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLm15RGF0YS5teUluZm8gPSBhcnJcbiAgICAgICAgICAgICAgICBzZWxmLmVkaXRNb2RlID0gIXNlbGYuZWRpdE1vZGVcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuZWRpdE1vZGUgPSAhc2VsZi5lZGl0TW9kZVxuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZWRpdE1vZGUgPSAhdGhpcy5lZGl0TW9kZVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgZ28gKHBhZ2UpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IHBhZ2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==