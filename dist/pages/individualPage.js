'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _util = require('./../utils/util.js');

var _util2 = _interopRequireDefault(_util);

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
      myData: {},
      tempImgUrls: [],
      profileUser_id: '',
      self: false,
      currentUser_id: '',
      temp: ['待填']
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
                        var pack, temp, regExp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, r, key, myInfo, subObj, arr;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (!res.confirm) {
                                  _context2.next = 78;
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
                                console.log('check: ' + JSON.stringify(pack));
                                temp = {};

                                pack.intro.myInfo.forEach(function (item) {
                                  temp[item.title] = item.value;
                                });
                                pack.intro.myInfo = temp;

                                //check required items

                                if (self.tempImgUrls.length && pack.intro.myInfo['行业'] != '待填' && pack.intro.myInfo['工作领域'] != '待填' && pack.intro.myInfo['来自'] != '待填' && pack.intro.nickName && pack.intro.age && pack.intro.h && pack.intro.weight && pack.intro.gender) {
                                  _context2.next = 11;
                                  break;
                                }

                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '请完成绿色字样内容并上传至少一张图片',
                                  showCancel: false
                                }).then(function (res) {
                                  return;
                                });
                                _context2.next = 76;
                                break;

                              case 11:
                                // console.log('self.profileUser_id: ' + self.profileUser_id);
                                pack.user_id = self.profileUser_id;

                                // upload images
                                pack.intro.imgUrls = [];

                                if (!(self.tempImgUrls.length > 0)) {
                                  _context2.next = 56;
                                  break;
                                }

                                _context2.prev = 14;
                                regExp = /aliyuncs\.com/;
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context2.prev = 19;
                                _iterator = self.tempImgUrls[Symbol.iterator]();

                              case 21:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                  _context2.next = 35;
                                  break;
                                }

                                v = _step.value;

                                if (!regExp.test(v)) {
                                  _context2.next = 27;
                                  break;
                                }

                                //save existing img files
                                pack.intro.imgUrls.push(v);
                                _context2.next = 32;
                                break;

                              case 27:
                                _context2.next = 29;
                                return _wepy2.default.uploadFile({
                                  url: 'http://127.0.0.1:8000/api/upload/image',
                                  filePath: v,
                                  name: 'file',
                                  success: function success(res) {
                                    console.log('image has been successfully saved in server. Congrats!');
                                  }
                                });

                              case 29:
                                r = _context2.sent;


                                r.data = JSON.parse(r.data);
                                // console.log('r.data:' + JSON.stringify(r.data));
                                if (r.data.img) {
                                  // console.log('supposed to have url of OSS: ' + r.data.img)
                                  pack.intro.imgUrls.push(r.data.img);
                                } else {
                                  _wepy2.default.hideToast();
                                  _wepy2.default.showModal({
                                    title: '提示',
                                    content: '服务器错误，上传图片失败。请重试~：）' + r.data.errmsg,
                                    showCancel: false
                                  });
                                }

                              case 32:
                                _iteratorNormalCompletion = true;
                                _context2.next = 21;
                                break;

                              case 35:
                                _context2.next = 41;
                                break;

                              case 37:
                                _context2.prev = 37;
                                _context2.t0 = _context2['catch'](19);
                                _didIteratorError = true;
                                _iteratorError = _context2.t0;

                              case 41:
                                _context2.prev = 41;
                                _context2.prev = 42;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                  _iterator.return();
                                }

                              case 44:
                                _context2.prev = 44;

                                if (!_didIteratorError) {
                                  _context2.next = 47;
                                  break;
                                }

                                throw _iteratorError;

                              case 47:
                                return _context2.finish(44);

                              case 48:
                                return _context2.finish(41);

                              case 49:
                                _context2.next = 56;
                                break;

                              case 51:
                                _context2.prev = 51;
                                _context2.t1 = _context2['catch'](14);

                                _wepy2.default.hideToast();
                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '服务器错误，上传图片失败。' + _context2.t1.message,
                                  showCancel: false
                                });
                                self.editMode = !self.editMode;

                              case 56:
                                res = {};
                                //cleanse data by removing '待填'
                                // console.log('before cleansing...' + JSON.stringify(pack.intro))

                                for (key in pack.intro) {
                                  // console.log('?: ' + JSON.stringify(pack.intro[key]))
                                  if (JSON.stringify(pack.intro[key]) == JSON.stringify(['待填'])) {
                                    // console.log('??: ' + pack.intro[key]);
                                    pack.intro[key] = [];
                                    // console.log('???: ' + pack.intro[key]);
                                  }
                                }
                                for (key in pack.intro.myInfo) {
                                  if (pack.intro.myInfo[key] == '待填') {
                                    pack.intro.myInfo[key] = '';
                                  }
                                }

                                // console.log('after cleansing...' + JSON.stringify(pack.intro))
                                // console.log('before uploading: ' + JSON.stringify(pack));
                                _context2.next = 61;
                                return _api2.default.updateProfile({
                                  query: {
                                    pack: pack
                                  },
                                  method: 'POST'
                                });

                              case 61:
                                res = _context2.sent;

                                if (!(res.data && res.data.flag == 'success')) {
                                  _context2.next = 76;
                                  break;
                                }

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
                                _context2.next = 73;
                                return self.loadData(self.profileUser_id);

                              case 73:
                                self.editMode = !self.editMode;
                                _wepy2.default.removeStorageSync('requireInit');
                                self.$apply();

                              case 76:
                                _context2.next = 80;
                                break;

                              case 78:
                                self.editMode = !self.editMode;
                                self.$apply();

                              case 80:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this, [[14, 51], [19, 37, 41, 49], [42,, 44, 48]]);
                      }));

                      return function (_x) {
                        return _ref5.apply(this, arguments);
                      };
                    }());
                  } else {
                    this.tempImgUrls = this.myData.imgUrls;
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
        if (page = 'myTM') {
          _wepy2.default.navigateTo({
            url: 'myTM?type=posts'
          });
        } else {
          _wepy2.default.navigateTo({
            url: page
          });
        }
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
                this.self = option.self;
                this.profileUser_id = option._id;
                this.currentUser_id = _wepy2.default.getStorageSync('UserId');

                if (!_wepy2.default.getStorageSync('requireInit')) {
                  _context4.next = 8;
                  break;
                }

                this.myData = {
                  gender: '1',
                  age: '99',
                  birthDate: '1990-01-01',
                  nickName: '爱因斯坦',
                  h: '170',
                  weight: '70',
                  imgUrls: [],
                  myInfo: [{ title: '行业', value: '待填' }, { title: '工作领域', value: '待填' }, { title: '公司', value: '待填' }, { title: '来自', value: '待填' }, { title: '经常出没', value: '待填' }, { title: '个人签名', value: '待填' }],
                  myTags: ['待填'],
                  sports: ['待填'],
                  music: ['待填'],
                  food: ['待填'],
                  tv: ['待填'],
                  book: ['待填'],
                  place: ['待填'],
                  myAns: [{ title: '您的问题？', value: '哈哈' }]
                };
                this.editMode = true;
                _context4.next = 10;
                break;

              case 8:
                _context4.next = 10;
                return this.loadData(this.profileUser_id);

              case 10:
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
        // console.log('edited back');
        this.myData.gender = editedPiece.data.gender || this.myData.gender;
        this.myData.nickName = editedPiece.data.nickName || this.myData.nickName;
        this.myData.h = editedPiece.data.height || this.myData.h;
        this.myData.weight = editedPiece.data.weight || this.myData.weight;
        this.myData.birthDate = editedPiece.data.birthDate || this.myData.birthDate;
        if (editedPiece.data.birthDate) {
          this.myData.age = _util2.default.age(editedPiece.data.birthDate) || this.myData.age;
          var constellation = _util2.default.constellation(editedPiece.data.birthDate);
          this.myData.myInfo.find(function (item) {
            if (item.title == '星座') {
              item.value = constellation;
              return true;
            }
          });
        }
      } else if (editedPiece.index == '行业' && editedPiece.data) {
        // console.log('this.myData.myInfo: ' + JSON.stringify(this.myData.myInfo))
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
        console.log('this.myData.myInfo: ' + JSON.stringify(this.myData.myInfo));
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

                // console.log('res: ' + JSON.stringify(res.data));
                if (res.data && res.data.flag == 'success') {
                  data = res.data.data.intro;
                  // console.log('self.data: ' + JSON.stringify(self.myData.myInfo))

                  data.age = _util2.default.age(data.birthDate);
                  data.myInfo['星座'] = _util2.default.constellation(data.birthDate);

                  myInfo = data.myInfo;
                  subObj = {};
                  arr = [];

                  for (key in myInfo) {
                    subObj.title = key;
                    subObj.value = myInfo[key];
                    //console.log('subObj: ' + JSON.stringify(subObj))
                    arr.unshift(subObj);
                    subObj = {};
                    //  console.log('arr: ' + JSON.stringify(arr))
                  }
                  data.myInfo = arr;
                  this.myData = data;
                  //  console.log('myData: ' + JSON.stringify(this.myData));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGl2aWR1YWxQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlZGl0TW9kZSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsInRlbXBJbWdVcmxzIiwicHJvZmlsZVVzZXJfaWQiLCJzZWxmIiwiY3VycmVudFVzZXJfaWQiLCJ0ZW1wIiwibWV0aG9kcyIsImNob29zZUltYWdlIiwiY291bnQiLCJsZW5ndGgiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJwdXNoIiwiJGFwcGx5IiwicHJldmlld0ltYWdlIiwiY3VyIiwiaW1hZ2VMaXN0IiwiY3VycmVudCIsInVybHMiLCJnb0VkaXQiLCJpbmRleCIsInZhbCIsInN1YkluZGV4Iiwib2JqIiwibmlja05hbWUiLCJiaXJ0aERhdGUiLCJoZWlnaHQiLCJoIiwid2VpZ2h0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJlZGl0ZWRQaWVjZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b2dnbGUiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0aGVuIiwicmVzIiwiY29uZmlybSIsInBhY2siLCJpbnRybyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwibXlJbmZvIiwiZm9yRWFjaCIsIml0ZW0iLCJ2YWx1ZSIsImFnZSIsImdlbmRlciIsInNob3dDYW5jZWwiLCJ1c2VyX2lkIiwiaW1nVXJscyIsInJlZ0V4cCIsInYiLCJ0ZXN0IiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsInN1Y2Nlc3MiLCJyIiwicGFyc2UiLCJpbWciLCJoaWRlVG9hc3QiLCJlcnJtc2ciLCJtZXNzYWdlIiwia2V5IiwidXBkYXRlUHJvZmlsZSIsInF1ZXJ5IiwibWV0aG9kIiwiZmxhZyIsInN1Yk9iaiIsImFyciIsImxvYWREYXRhIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnbyIsInBhZ2UiLCJvcHRpb24iLCJfaWQiLCJnZXRTdG9yYWdlU3luYyIsIm15VGFncyIsInNwb3J0cyIsIm11c2ljIiwiZm9vZCIsInR2IiwiYm9vayIsInBsYWNlIiwibXlBbnMiLCJjb25zdGVsbGF0aW9uIiwiZmluZCIsImVsIiwicGlja2VkIiwicHJvZmlsZSIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0pDLGdCQUFVLEtBRE47QUFFSkMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRmxDO0FBR0pDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUhuQztBQUlKQyxjQUFRLEVBSko7QUFLSkMsbUJBQWEsRUFMVDtBQU1KQyxzQkFBZ0IsRUFOWjtBQU9KQyxZQUFNLEtBUEY7QUFRSkMsc0JBQWdCLEVBUlo7QUFTSkMsWUFBTSxDQUFDLElBQUQ7QUFURixLLFFBNE5QQyxPLEdBQVU7QUFDRkMsaUJBREU7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFMEIsZUFBS0EsV0FBTCxDQUFpQjtBQUMvQ0MsMkJBQU8sSUFBSSxLQUFLUCxXQUFMLENBQWlCUSxNQURtQjtBQUUvQ0MsOEJBQVU7QUFGcUMsbUJBQWpCLENBRjFCOztBQUFBO0FBQUE7QUFFRUMsK0JBRkYsU0FFRUEsYUFGRjs7QUFNTix1Q0FBS1YsV0FBTCxFQUFpQlcsSUFBakIsd0NBQXlCRCxhQUF6QjtBQUNBLHVCQUFLRSxNQUFMOztBQVBNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBU1JDLGtCQVRRLHdCQVNNQyxHQVROLEVBU1dDLFNBVFgsRUFTc0I7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LCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG4gIGltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpmYjms73pk60gJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgICBteURhdGE6IHt9LFxuICAgICAgIHRlbXBJbWdVcmxzOiBbXSxcbiAgICAgICBwcm9maWxlVXNlcl9pZDogJycsXG4gICAgICAgc2VsZjogZmFsc2UsXG4gICAgICAgY3VycmVudFVzZXJfaWQ6ICcnLFxuICAgICAgIHRlbXA6IFsn5b6F5aGrJ11cbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkIChvcHRpb24pIHtcbiAgICAgIC8vIHRoaXMucHJvZmlsZVVzZXJfaWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VySWQnKVxuICAgICAgdGhpcy5zZWxmID0gb3B0aW9uLnNlbGZcbiAgICAgIHRoaXMucHJvZmlsZVVzZXJfaWQgPSBvcHRpb24uX2lkXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyX2lkID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJylcbiAgICAgIGlmKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3JlcXVpcmVJbml0JykpIHtcbiAgICAgICAgdGhpcy5teURhdGEgPSB7XG4gICAgICAgICAgZ2VuZGVyOiAnMScsXG4gICAgICAgICAgYWdlOiAnOTknLFxuICAgICAgICAgIGJpcnRoRGF0ZTogJzE5OTAtMDEtMDEnLFxuICAgICAgICAgIG5pY2tOYW1lOiAn54ix5Zug5pav5Z2mJyxcbiAgICAgICAgICBoOiAnMTcwJyxcbiAgICAgICAgICB3ZWlnaHQ6ICc3MCcsXG4gICAgICAgICAgaW1nVXJsczogW10sXG4gICAgICAgICAgbXlJbmZvOiBbe3RpdGxlOiAn6KGM5LiaJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5bel5L2c6aKG5Z+fJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5YWs5Y+4JywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5p2l6IeqJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn57uP5bi45Ye65rKhJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5Liq5Lq6562+5ZCNJywgdmFsdWU6ICflvoXloasnfV0sXG4gICAgICAgICAgbXlUYWdzOiBbJ+W+heWhqyddLFxuICAgICAgICAgIHNwb3J0czogWyflvoXloasnXSxcbiAgICAgICAgICBtdXNpYzogWyflvoXloasnXSxcbiAgICAgICAgICBmb29kOiBbJ+W+heWhqyddLFxuICAgICAgICAgIHR2OiBbJ+W+heWhqyddLFxuICAgICAgICAgIGJvb2s6IFsn5b6F5aGrJ10sXG4gICAgICAgICAgcGxhY2U6IFsn5b6F5aGrJ10sXG4gICAgICAgICAgbXlBbnM6IFt7dGl0bGU6ICfmgqjnmoTpl67popjvvJ8nLCB2YWx1ZTogJ+WTiOWTiCd9XVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKHRoaXMucHJvZmlsZVVzZXJfaWQpXG4gICAgICB9XG4gICAgfVxuICAgIG9uU2hvdygpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgdmFyIGVkaXRlZFBpZWNlID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2VcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlZGl0ZWRQaWVjZTogJyArIEpTT04uc3RyaW5naWZ5KGVkaXRlZFBpZWNlKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgLSBlZGl0ZWRQaWVjZS5iaXJ0aERhdGUpO1xuICAgICAgLy8gY29uc29sZS5sb2coZWRpdGVkUGllY2UuYmlydGhEYXRlLmdldE1vbnRoKCkpO1xuICAgICAgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ3BlcnNvbicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZWRpdGVkIGJhY2snKTtcbiAgICAgICAgdGhpcy5teURhdGEuZ2VuZGVyID0gZWRpdGVkUGllY2UuZGF0YS5nZW5kZXIgfHwgdGhpcy5teURhdGEuZ2VuZGVyXG4gICAgICAgIHRoaXMubXlEYXRhLm5pY2tOYW1lID0gIGVkaXRlZFBpZWNlLmRhdGEubmlja05hbWUgfHwgdGhpcy5teURhdGEubmlja05hbWVcbiAgICAgICAgdGhpcy5teURhdGEuaCA9IGVkaXRlZFBpZWNlLmRhdGEuaGVpZ2h0IHx8IHRoaXMubXlEYXRhLmhcbiAgICAgICAgdGhpcy5teURhdGEud2VpZ2h0ID0gZWRpdGVkUGllY2UuZGF0YS53ZWlnaHQgfHwgdGhpcy5teURhdGEud2VpZ2h0XG4gICAgICAgIHRoaXMubXlEYXRhLmJpcnRoRGF0ZSA9IGVkaXRlZFBpZWNlLmRhdGEuYmlydGhEYXRlIHx8IHRoaXMubXlEYXRhLmJpcnRoRGF0ZVxuICAgICAgICBpZihlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSkge1xuICAgICAgICAgIHRoaXMubXlEYXRhLmFnZSA9IHV0aWwuYWdlKGVkaXRlZFBpZWNlLmRhdGEuYmlydGhEYXRlKSB8fCB0aGlzLm15RGF0YS5hZ2VcbiAgICAgICAgICB2YXIgY29uc3RlbGxhdGlvbiA9IHV0aWwuY29uc3RlbGxhdGlvbihlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSlcbiAgICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpZihpdGVtLnRpdGxlID09ICfmmJ/luqcnKSB7XG4gICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBjb25zdGVsbGF0aW9uXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICfooYzkuJonICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMubXlEYXRhLm15SW5mbzogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMubXlEYXRhLm15SW5mbykpXG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+ihjOS4micpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+W3peS9nOmihuWfnycgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICflt6XkvZzpoobln58nKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICflhazlj7gnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5YWs5Y+4Jykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn5p2l6IeqJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgICBjb25zb2xlLmxvZygndGhpcy5teURhdGEubXlJbmZvOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5teURhdGEubXlJbmZvKSlcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5p2l6IeqJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn57uP5bi45Ye65rKhJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+e7j+W4uOWHuuayoScpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+S4quS6uuetvuWQjScgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfkuKrkurrnrb7lkI0nKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICd0YWcnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEubXlUYWdzID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZWwudmFsdWU6ICcgKyBlbC52YWx1ZSk7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5teVRhZ3MucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcgIHRoaXMubXlEYXRhLm15VGFnczogJyArICAgc2VsZi5teURhdGEubXlUYWdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ3Nwb3J0cycgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS5zcG9ydHMgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5kYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC5waWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGYubXlEYXRhLnNwb3J0cy5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAnbXVzaWMnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEubXVzaWMgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5kYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC5waWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGYubXlEYXRhLm11c2ljLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdmb29kJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLmZvb2QgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5kYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC5waWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGYubXlEYXRhLmZvb2QucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ3R2JyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLnR2ID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS50di5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAnYm9vaycgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS5ib29rID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5ib29rLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdwbGFjZScgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS5wbGFjZSA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEucGxhY2UucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ3F1ZXN0aW9uJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLm15QW5zW2VkaXRlZFBpZWNlLnN1YkluZGV4XS52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGEudmFsdWVcbiAgICAgIH1cblxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UgPSB7fVxuICAgIH1cbiAgICBhc3luYyBsb2FkRGF0YShfaWQpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5wcm9maWxlKHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBfaWQ6IF9pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2coJ3JlczogJyArIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhKSk7XG4gICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGEuZGF0YS5pbnRyb1xuICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGYuZGF0YTogJyArIEpTT04uc3RyaW5naWZ5KHNlbGYubXlEYXRhLm15SW5mbykpXG4gICAgICAgICBkYXRhLmFnZSA9IHV0aWwuYWdlKGRhdGEuYmlydGhEYXRlKVxuICAgICAgICAgZGF0YS5teUluZm9bJ+aYn+W6pyddID0gdXRpbC5jb25zdGVsbGF0aW9uKGRhdGEuYmlydGhEYXRlKVxuXG4gICAgICAgICB2YXIgbXlJbmZvID0gZGF0YS5teUluZm9cbiAgICAgICAgIHZhciBzdWJPYmogPSB7fVxuICAgICAgICAgdmFyIGFyciA9IFtdXG4gICAgICAgICBmb3IodmFyIGtleSBpbiBteUluZm8pIHtcbiAgICAgICAgICAgc3ViT2JqLnRpdGxlID0ga2V5XG4gICAgICAgICAgIHN1Yk9iai52YWx1ZSA9IG15SW5mb1trZXldXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnc3ViT2JqOiAnICsgSlNPTi5zdHJpbmdpZnkoc3ViT2JqKSlcbiAgICAgICAgICAgYXJyLnVuc2hpZnQoc3ViT2JqKVxuICAgICAgICAgICBzdWJPYmogPSB7fVxuICAgICAgICAgIC8vICBjb25zb2xlLmxvZygnYXJyOiAnICsgSlNPTi5zdHJpbmdpZnkoYXJyKSlcbiAgICAgICAgIH1cbiAgICAgICAgIGRhdGEubXlJbmZvID0gYXJyXG4gICAgICAgICB0aGlzLm15RGF0YSA9IGRhdGFcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdteURhdGE6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLm15RGF0YSkpO1xuICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5teURhdGEgPSB7XG4gICAgICAgIC8vICAgZ2VuZGVyOiAnMCcsXG4gICAgICAgIC8vICAgYmlydGhEYXRlOiAnMTk5MC0wMS0wMScsXG4gICAgICAgIC8vICAgbmlja05hbWU6ICfnjovlsI/omY4nLFxuICAgICAgICAvLyAgIGg6ICcxNjUnLFxuICAgICAgICAvLyAgIHdlaWdodDogJzQ1JyxcbiAgICAgICAgLy8gICBpbWdVcmxzOiBbXG4gICAgICAgIC8vICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAvLyAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxSC5WUEpWWFhYWGJsWEZYWHE2eFhGWFhYai9EaXktRGlhbW9uZC1QYWludGluZy1LaXRzLTMweDMwY20tRnVsbC1EaWFtb25kLVNxdWFyZS1SaGluZXN0b25lLVBhc3RlZC1QYWludGluZy1Ib21lLURlY29yYXRpb24tTmF0dXJlLVNjZW5lcnktV2F0ZXJmYWxsLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgIC8vICAgICAgJ2h0dHBzOi8vd3d3LmRocmVzb3VyY2UuY29tLzB4MHMvZjItYWxidS1nNC1NMDAtMTItNDktckJWYUVGbVZvdHVBWG91OUFBTDNyUDVqU3VjNTMxLmpwZy9iZWF1dGlmdWwtc2NlbmVyeS1zZWFzaWRlLWRpeS1mdWxsLXNxdWFyZS5qcGcnXG4gICAgICAgIC8vICAgIF0sXG4gICAgICAgIC8vICAgIHRpbWVsaW5lX2ltZ1VybHM6IFtcbiAgICAgICAgLy8gICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAvLyAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUguVlBKVlhYWFhibFhGWFhxNnhYRlhYWGovRGl5LURpYW1vbmQtUGFpbnRpbmctS2l0cy0zMHgzMGNtLUZ1bGwtRGlhbW9uZC1TcXVhcmUtUmhpbmVzdG9uZS1QYXN0ZWQtUGFpbnRpbmctSG9tZS1EZWNvcmF0aW9uLU5hdHVyZS1TY2VuZXJ5LVdhdGVyZmFsbC5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAvLyAgICAgICAnaHR0cHM6Ly93d3cuZGhyZXNvdXJjZS5jb20vMHgwcy9mMi1hbGJ1LWc0LU0wMC0xMi00OS1yQlZhRUZtVm90dUFYb3U5QUFMM3JQNWpTdWM1MzEuanBnL2JlYXV0aWZ1bC1zY2VuZXJ5LXNlYXNpZGUtZGl5LWZ1bGwtc3F1YXJlLmpwZydcbiAgICAgICAgLy8gICAgXSxcbiAgICAgICAgLy8gICAgbXlJbmZvOiBbeyd0aXRsZSc6ICfmmJ/luqcnLCB2YWx1ZTogJ+WkqeidjuW6pyd9LCB7dGl0bGU6ICfooYzkuJonLCB2YWx1ZTogJ+mHkeiejSd9LCB7dGl0bGU6ICflt6XkvZzpoobln58nLCB2YWx1ZTogJ+etluWIkid9LCB7dGl0bGU6ICflhazlj7gnLCB2YWx1ZTogJ+eIsei+ieenkeaKgOaciemZkOWFrOWPuCd9LCB7dGl0bGU6ICfmnaXoh6onLCB2YWx1ZTogJ+axn+iLjyzljZfkuqws6byT5qW8J30sIHt0aXRsZTogJ+e7j+W4uOWHuuayoScsIHZhbHVlOiAn5pil54aZ6LevJ30sIHt0aXRsZTogJ+S4quS6uuetvuWQjScsIHZhbHVlOiAn6IGq5piO5piv5LiA56eN5aSp6LWL77yM6ICM5ZaE6Imv5piv5LiA56eN6YCJ5oup44CCJ31dLFxuICAgICAgICAvLyAgICBteVRhZ3M6IFsnUGF0aWVudCcsICdDcmVhdGl2ZScsICflpbPmsYnlrZAnLCAn5Zac5qyi566A5Y2VJywgJ+mdoOiwsScsICflronpnZknLCAn6YCJ5oup5oGQ5oOn55eHJywgJ+aWh+iJuicsICfljprpgZMnLCAn6K6y5LmJ5rCUJywgJ+maj+aApyddLFxuICAgICAgICAvLyAgICBzcG9ydHM6IFsnUnVubmluZycsICfnr67nkIMnLCAn5YGl6Lqr5oi/JywgJ+iInui5iCcsICflj7DnkIMnLCAn5bCE566tJywgJ+edoeiniSddLFxuICAgICAgICAvLyAgICBtdXNpYzogWyfliJjlvrfljY4nLCAn5LqU55m+JywgJzgw5bm05Luj57uP5YW4J10sXG4gICAgICAgIC8vICAgIGZvb2Q6IFsn54mb5o6SJywgJ+eBq+mUhScsICfnvo7po58nXSxcbiAgICAgICAgLy8gICAgdHY6IFsn5oiR55qE5bCR5aWz5pe25LujJywgJ+WWnOWJp+S5i+eOiycsICflgKnlpbPlub3prYInLCAn6IOM5pmv6YGH5LiK6KW/6ZuF5Zu+JywgJ+acuuaisOW4iCcsICfliarliIDmiYvniLHlvrfljY4nLCAn5YKy5oWi5LiO5YGP6KeBJ10sXG4gICAgICAgIC8vICAgIGJvb2s6IFsn5q635qGD5bCP5Li45a2QJywgJ+eQvOeRticsICfngYznr67pq5jmiYsnXSxcbiAgICAgICAgLy8gICAgcGxhY2U6IFsn5YyX5rW3JywgJ+azsOWbvScsICflpKfnkIYnLCAn5Lmd5a+o5rKfJywgJ+aIkOmDvScsICfkuL3msZ8nLCAn6aaZ5qC86YeM5ouJJywgJ+aZruWQieWymycsICfotorljZcnXSxcbiAgICAgICAgLy8gICAgbXlBbnM6IFt7dGl0bGU6ICflpoLmnpzog73mnInkuIDnp43otoXog73lipvvvIzopoHku4DkuYjvvJ8nLCB2YWx1ZTogJ+aXtuWFieiDveWAkua1gSd9LCB7dGl0bGU6ICflpoLmnpzmnInpkrHmnInml7bpl7TvvIzmnIDmg7PljrvlgZrku4DkuYjvvJ8nLCB2YWx1ZTogJ+eOr+a4uOS4lueVjCd9LCB7dGl0bGU6ICfku4DkuYjmoLfnmoTlvILmgKfmnIDorqnkvaDlv4PliqjvvJ8nLCB2YWx1ZTogJ+W4hSDpopzlgLzpq5gg57uF5aOrIOS6uuWTgeWlveS4quWtkOmrmCd9LCB7dGl0bGU6ICflpoLmnpzlpbPmnIvlj4sv55S35pyL5Y+L55Sf5rCU5LqG77yM5oCO5LmI5ZOE77yfJywgdmFsdWU6ICfkuIDnm7Tor7TlvIDlv4PnmoTkuovmg4XvvIzlpoLmnpzov5jlnKjnlJ/msJTlsLHkuIDnm7Tlk4QnfSwge3RpdGxlOiAn5Y+v5Lul5o6l5Y+X55qE57qm5Lya5pyJ5ZOq5Lqb77yfJywgdmFsdWU6ICfnlLXlvbEg5ZCD6aWtIOevrueQgyd9XVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyBjaG9vc2VJbWFnZSAoKSB7XG4gICAgICAgIGNvbnN0IHsgdGVtcEZpbGVQYXRocyB9ID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgY291bnQ6IDYgLSB0aGlzLnRlbXBJbWdVcmxzLmxlbmd0aCxcbiAgICAgICAgICBzaXplVHlwZTogJ2NvbXByZXNzZWQnXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudGVtcEltZ1VybHMucHVzaCguLi50ZW1wRmlsZVBhdGhzKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgcHJldmlld0ltYWdlIChjdXIsIGltYWdlTGlzdCkge1xuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgY3VycmVudDogY3VyLFxuICAgICAgICAgIHVybHM6IGltYWdlTGlzdFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvRWRpdCAoaW5kZXgsIHZhbCwgc3ViSW5kZXgpIHtcbiAgICAgICAgaWYoIXRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMubXlEYXRhXG4gICAgICAgIHZhciBvYmogPSB7fVxuICAgICAgICBpZihpbmRleCA9PSAncGVyc29uJykge1xuICAgICAgICAgIG9iaiA9IHtuaWNrTmFtZTogZGF0YS5uaWNrTmFtZSwgYmlydGhEYXRlOiBkYXRhLmJpcnRoRGF0ZSwgaGVpZ2h0OiBkYXRhLmgsIHdlaWdodDogZGF0YS53ZWlnaHR9XG4gICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UgPSB7aW5kZXg6IGluZGV4LCBkYXRhOiBvYmp9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJz8/OiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSkpXG4gICAgICAgIH0gZWxzZSBpZihpbmRleCA9PSAnbmV3UXVlc3Rpb24nKSB7XG4gICAgICAgICAgICAvL25ldyBxdWVzdGlvbj9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZSA9IHtpbmRleDogaW5kZXgsIGRhdGE6IHZhbCwgc3ViSW5kZXg6IHN1YkluZGV4fVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc/PzogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlLmRhdGEpKVxuICAgICAgICB9XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnaXRlbUVkaXRQYWdlJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHRvZ2dsZSAoKSB7XG4gICAgICAgIC8vIFRPRE86IHNhdmUgZWRpdGVkIHByb2ZpbGVcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgIGlmKHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn56Gu5a6a5L+d5a2Y5ZCX77yfJ1xuICAgICAgICAgIH0pLnRoZW4oYXN5bmMgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBpZihyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICB2YXIgcGFjayA9IHt9XG4gICAgICAgICAgICAgIHBhY2suaW50cm8gPSBzZWxmLm15RGF0YVxuXG4gICAgICAgICAgICAgIC8vIHBhY2suaW50cm8gPSB7XG4gICAgICAgICAgICAgIC8vICAgZ2VuZGVyOiAnMCcsXG4gICAgICAgICAgICAgIC8vICAgYmlydGhEYXRlOiAnMTk5MC0wMS0wMScsXG4gICAgICAgICAgICAgIC8vICAgbmlja05hbWU6ICfnjovlsI/omY4nLFxuICAgICAgICAgICAgICAvLyAgIGg6ICcxNjUnLFxuICAgICAgICAgICAgICAvLyAgIHdlaWdodDogJzQ1JyxcbiAgICAgICAgICAgICAgLy8gICBpbWdVcmxzOiBbXG4gICAgICAgICAgICAgIC8vICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgICAgICAvLyAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxSC5WUEpWWFhYWGJsWEZYWHE2eFhGWFhYai9EaXktRGlhbW9uZC1QYWludGluZy1LaXRzLTMweDMwY20tRnVsbC1EaWFtb25kLVNxdWFyZS1SaGluZXN0b25lLVBhc3RlZC1QYWludGluZy1Ib21lLURlY29yYXRpb24tTmF0dXJlLVNjZW5lcnktV2F0ZXJmYWxsLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgICAgICAgIC8vICAgICAgJ2h0dHBzOi8vd3d3LmRocmVzb3VyY2UuY29tLzB4MHMvZjItYWxidS1nNC1NMDAtMTItNDktckJWYUVGbVZvdHVBWG91OUFBTDNyUDVqU3VjNTMxLmpwZy9iZWF1dGlmdWwtc2NlbmVyeS1zZWFzaWRlLWRpeS1mdWxsLXNxdWFyZS5qcGcnXG4gICAgICAgICAgICAgIC8vICAgIF0sXG4gICAgICAgICAgICAgIC8vICAgIG15SW5mbzogW3t0aXRsZTogJ+ihjOS4micsIHZhbHVlOiAn6YeR6J6NJ30sIHt0aXRsZTogJ+W3peS9nOmihuWfnycsIHZhbHVlOiAn562W5YiSJ30sIHt0aXRsZTogJ+WFrOWPuCcsIHZhbHVlOiAn54ix6L6J56eR5oqA5pyJ6ZmQ5YWs5Y+4J30sIHt0aXRsZTogJ+adpeiHqicsIHZhbHVlOiAn5rGf6IuPLOWNl+S6rCzpvJPmpbwnfSwge3RpdGxlOiAn57uP5bi45Ye65rKhJywgdmFsdWU6ICfmmKXnhpnot68nfSwge3RpdGxlOiAn5Liq5Lq6562+5ZCNJywgdmFsdWU6ICfogarmmI7mmK/kuIDnp43lpKnotYvvvIzogIzlloToia/mmK/kuIDnp43pgInmi6njgIInfV0sXG4gICAgICAgICAgICAgIC8vICAgIG15VGFnczogWydQYXRpZW50JywgJ0NyZWF0aXZlJywgJ+Wls+axieWtkCcsICfllpzmrKLnroDljZUnLCAn6Z2g6LCxJywgJ+WuiemdmScsICfpgInmi6nmgZDmg6fnl4cnLCAn5paH6Im6JywgJ+WOmumBkycsICforrLkuYnmsJQnLCAn6ZqP5oCnJ10sXG4gICAgICAgICAgICAgIC8vICAgIHNwb3J0czogWydSdW5uaW5nJywgJ+evrueQgycsICflgaXouqvmiL8nLCAn6Iie6LmIJywgJ+WPsOeQgycsICflsITnrq0nLCAn552h6KeJJ10sXG4gICAgICAgICAgICAgIC8vICAgIG11c2ljOiBbJ+WImOW+t+WNjicsICfkupTnmb4nLCAnODDlubTku6Pnu4/lhbgnXSxcbiAgICAgICAgICAgICAgLy8gICAgZm9vZDogWyfniZvmjpInLCAn54Gr6ZSFJywgJ+e+jumjnyddLFxuICAgICAgICAgICAgICAvLyAgICB0djogWyfmiJHnmoTlsJHlpbPml7bku6MnLCAn5Zac5Ymn5LmL546LJywgJ+WAqeWls+W5vemtgicsICfog4zmma/pgYfkuIropb/pm4Xlm74nLCAn5py65qKw5biIJywgJ+WJquWIgOaJi+eIseW+t+WNjicsICflgrLmhaLkuI7lgY/op4EnXSxcbiAgICAgICAgICAgICAgLy8gICAgYm9vazogWyfmrrfmoYPlsI/kuLjlrZAnLCAn55C855G2JywgJ+eBjOevrumrmOaJiyddLFxuICAgICAgICAgICAgICAvLyAgICBwbGFjZTogWyfljJfmtbcnLCAn5rOw5Zu9JywgJ+Wkp+eQhicsICfkuZ3lr6jmsp8nLCAn5oiQ6YO9JywgJ+S4veaxnycsICfpppnmoLzph4zmi4knLCAn5pmu5ZCJ5bKbJywgJ+i2iuWNlyddLFxuICAgICAgICAgICAgICAvLyAgICBteUFuczogW3t0aXRsZTogJ+WmguaenOiDveacieS4gOenjei2heiDveWKm++8jOimgeS7gOS5iO+8nycsIHZhbHVlOiAn5pe25YWJ6IO95YCS5rWBJ30sIHt0aXRsZTogJ+WmguaenOaciemSseacieaXtumXtO+8jOacgOaDs+WOu+WBmuS7gOS5iO+8nycsIHZhbHVlOiAn546v5ri45LiW55WMJ30sIHt0aXRsZTogJ+S7gOS5iOagt+eahOW8guaAp+acgOiuqeS9oOW/g+WKqO+8nycsIHZhbHVlOiAn5biFIOminOWAvOmrmCDnu4Xlo6sg5Lq65ZOB5aW95Liq5a2Q6auYJ30sIHt0aXRsZTogJ+WmguaenOWls+aci+WPiy/nlLfmnIvlj4vnlJ/msJTkuobvvIzmgI7kuYjlk4TvvJ8nLCB2YWx1ZTogJ+S4gOebtOivtOW8gOW/g+eahOS6i+aDhe+8jOWmguaenOi/mOWcqOeUn+awlOWwseS4gOebtOWThCd9LCB7dGl0bGU6ICflj6/ku6XmjqXlj5fnmoTnuqbkvJrmnInlk6rkupvvvJ8nLCB2YWx1ZTogJ+eUteW9sSDlkIPppa0g56+u55CDJ31dXG4gICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAvL2hlcmUgbmVlZCB0byB0cmFuc2Zvcm0gbXlJbmZvIGZyb20gYXJyYXkgdG8gb2JqZWN0XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVjazogJyArIEpTT04uc3RyaW5naWZ5KHBhY2spKTtcbiAgICAgICAgICAgICAgdmFyIHRlbXAgPSB7fVxuICAgICAgICAgICAgICBwYWNrLmludHJvLm15SW5mby5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgICAgICAgIHRlbXBbaXRlbS50aXRsZV0gID0gaXRlbS52YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBwYWNrLmludHJvLm15SW5mbyA9IHRlbXBcblxuICAgICAgICAgICAgICAvL2NoZWNrIHJlcXVpcmVkIGl0ZW1zXG4gICAgICAgICAgICAgIGlmKCEoc2VsZi50ZW1wSW1nVXJscy5sZW5ndGggJiYgcGFjay5pbnRyby5teUluZm9bJ+ihjOS4middICE9ICflvoXloasnICYmIHBhY2suaW50cm8ubXlJbmZvWyflt6XkvZzpoobln58nXSAhPSAn5b6F5aGrJyAmJiBwYWNrLmludHJvLm15SW5mb1sn5p2l6IeqJ10gIT0gJ+W+heWhqycgJiYgcGFjay5pbnRyby5uaWNrTmFtZSAmJiBwYWNrLmludHJvLmFnZSAmJiBwYWNrLmludHJvLmggJiYgcGFjay5pbnRyby53ZWlnaHQgJiYgcGFjay5pbnRyby5nZW5kZXIpKSB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ivt+WujOaIkOe7v+iJsuWtl+agt+WGheWuueW5tuS4iuS8oOiHs+WwkeS4gOW8oOWbvueJhycsXG4gICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxmLnByb2ZpbGVVc2VyX2lkOiAnICsgc2VsZi5wcm9maWxlVXNlcl9pZCk7XG4gICAgICAgICAgICAgICAgcGFjay51c2VyX2lkID0gc2VsZi5wcm9maWxlVXNlcl9pZFxuXG4gICAgICAgICAgICAgICAgLy8gdXBsb2FkIGltYWdlc1xuICAgICAgICAgICAgICAgIHBhY2suaW50cm8uaW1nVXJscyA9IFtdXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYudGVtcEltZ1VybHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ0V4cCA9IC9hbGl5dW5jc1xcLmNvbS9cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdiBvZiBzZWxmLnRlbXBJbWdVcmxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYocmVnRXhwLnRlc3QodikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2F2ZSBleGlzdGluZyBpbWcgZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhY2suaW50cm8uaW1nVXJscy5wdXNoKHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBhd2FpdCB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VwbG9hZC9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiB2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc2F2ZWQgaW4gc2VydmVyLiBDb25ncmF0cyEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByLmRhdGEgPSBKU09OLnBhcnNlKHIuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyLmRhdGE6JyArIEpTT04uc3RyaW5naWZ5KHIuZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuZGF0YS5pbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N1cHBvc2VkIHRvIGhhdmUgdXJsIG9mIE9TUzogJyArIHIuZGF0YS5pbWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhY2suaW50cm8uaW1nVXJscy5wdXNoKHIuZGF0YS5pbWcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+acjeWKoeWZqOmUmeivr++8jOS4iuS8oOWbvueJh+Wksei0peOAguivt+mHjeivlX7vvJrvvIknICsgci5kYXRhLmVycm1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+acjeWKoeWZqOmUmeivr++8jOS4iuS8oOWbvueJh+Wksei0peOAgicgKyBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lZGl0TW9kZSA9ICFzZWxmLmVkaXRNb2RlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZXMgPSB7fVxuICAgICAgICAgICAgICAgIC8vY2xlYW5zZSBkYXRhIGJ5IHJlbW92aW5nICflvoXloasnXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2JlZm9yZSBjbGVhbnNpbmcuLi4nICsgSlNPTi5zdHJpbmdpZnkocGFjay5pbnRybykpXG4gICAgICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gcGFjay5pbnRybykge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJz86ICcgKyBKU09OLnN0cmluZ2lmeShwYWNrLmludHJvW2tleV0pKVxuICAgICAgICAgICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkocGFjay5pbnRyb1trZXldKSA9PSBKU09OLnN0cmluZ2lmeShbJ+W+heWhqyddKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPz86ICcgKyBwYWNrLmludHJvW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICBwYWNrLmludHJvW2tleV0gPSBbXVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPz8/OiAnICsgcGFjay5pbnRyb1trZXldKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gcGFjay5pbnRyby5teUluZm8pIHtcbiAgICAgICAgICAgICAgICAgIGlmKHBhY2suaW50cm8ubXlJbmZvW2tleV0gPT0gJ+W+heWhqycpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFjay5pbnRyby5teUluZm9ba2V5XSA9ICcnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyIGNsZWFuc2luZy4uLicgKyBKU09OLnN0cmluZ2lmeShwYWNrLmludHJvKSlcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYmVmb3JlIHVwbG9hZGluZzogJyArIEpTT04uc3RyaW5naWZ5KHBhY2spKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gYXdhaXQgYXBpLnVwZGF0ZVByb2ZpbGUoe1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFjazogcGFja1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj86IFwiKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS5kYXRhKSk7XG4gICAgICAgICAgICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzcycpO1xuXG4gICAgICAgICAgICAgICAgICBzZWxmLm15RGF0YSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxmLmRhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShzZWxmLm15RGF0YS5teUluZm8pKVxuICAgICAgICAgICAgICAgICAgdmFyIG15SW5mbyA9IHNlbGYubXlEYXRhLm15SW5mb1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ215SW5mbzogJysgbXlJbmZvKTtcbiAgICAgICAgICAgICAgICAgIHZhciBzdWJPYmogPSB7fVxuICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdXG4gICAgICAgICAgICAgICAgICBmb3IodmFyIGtleSBpbiBteUluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViT2JqLnRpdGxlID0ga2V5XG4gICAgICAgICAgICAgICAgICAgIHN1Yk9iai52YWx1ZSA9IG15SW5mb1trZXldXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHN1Yk9iailcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNlbGYubXlEYXRhLm15SW5mbyA9IGFyclxuICAgICAgICAgICAgICAgICAgYXdhaXQgc2VsZi5sb2FkRGF0YShzZWxmLnByb2ZpbGVVc2VyX2lkKVxuICAgICAgICAgICAgICAgICAgc2VsZi5lZGl0TW9kZSA9ICFzZWxmLmVkaXRNb2RlXG4gICAgICAgICAgICAgICAgICB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdyZXF1aXJlSW5pdCcpXG4gICAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuZWRpdE1vZGUgPSAhc2VsZi5lZGl0TW9kZVxuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudGVtcEltZ1VybHMgPSB0aGlzLm15RGF0YS5pbWdVcmxzXG4gICAgICAgICAgdGhpcy5lZGl0TW9kZSA9ICF0aGlzLmVkaXRNb2RlXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBnbyAocGFnZSkge1xuICAgICAgICBpZihwYWdlID0gJ215VE0nKSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJ215VE0/dHlwZT1wb3N0cydcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6IHBhZ2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=