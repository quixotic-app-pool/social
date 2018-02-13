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
      temp: ['待填'],
      deletedImgUrl: []
    }, _this.methods = {
      delImg: function delImg(index) {
        var self = this;
        _wepy2.default.showModal({
          title: '哈喽',
          content: '要删除这张照片吗？'
        }).then(function (res) {
          if (res.confirm) {
            self.deletedImgUrl.push(self.tempImgUrls[index]);
            self.tempImgUrls.splice(index, 1);
            self.$apply();
          }
        });
      },
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
                                _context2.next = 81;
                                break;

                              case 78:
                                self.deletedImgUrl = [];
                                self.editMode = !self.editMode;
                                self.$apply();

                              case 81:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGl2aWR1YWxQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlZGl0TW9kZSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsInRlbXBJbWdVcmxzIiwicHJvZmlsZVVzZXJfaWQiLCJzZWxmIiwiY3VycmVudFVzZXJfaWQiLCJ0ZW1wIiwiZGVsZXRlZEltZ1VybCIsIm1ldGhvZHMiLCJkZWxJbWciLCJpbmRleCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInRoZW4iLCJyZXMiLCJjb25maXJtIiwicHVzaCIsInNwbGljZSIsIiRhcHBseSIsImNob29zZUltYWdlIiwiY291bnQiLCJsZW5ndGgiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJwcmV2aWV3SW1hZ2UiLCJjdXIiLCJpbWFnZUxpc3QiLCJjdXJyZW50IiwidXJscyIsImdvRWRpdCIsInZhbCIsInN1YkluZGV4Iiwib2JqIiwibmlja05hbWUiLCJiaXJ0aERhdGUiLCJoZWlnaHQiLCJoIiwid2VpZ2h0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJlZGl0ZWRQaWVjZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b2dnbGUiLCJwYWNrIiwiaW50cm8iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm15SW5mbyIsImZvckVhY2giLCJpdGVtIiwidmFsdWUiLCJhZ2UiLCJnZW5kZXIiLCJzaG93Q2FuY2VsIiwidXNlcl9pZCIsImltZ1VybHMiLCJyZWdFeHAiLCJ2IiwidGVzdCIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJzdWNjZXNzIiwiciIsInBhcnNlIiwiaW1nIiwiaGlkZVRvYXN0IiwiZXJybXNnIiwibWVzc2FnZSIsImtleSIsInVwZGF0ZVByb2ZpbGUiLCJxdWVyeSIsIm1ldGhvZCIsImZsYWciLCJzdWJPYmoiLCJhcnIiLCJsb2FkRGF0YSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ28iLCJwYWdlIiwib3B0aW9uIiwiX2lkIiwiZ2V0U3RvcmFnZVN5bmMiLCJteVRhZ3MiLCJzcG9ydHMiLCJtdXNpYyIsImZvb2QiLCJ0diIsImJvb2siLCJwbGFjZSIsIm15QW5zIiwiY29uc3RlbGxhdGlvbiIsImZpbmQiLCJlbCIsInBpY2tlZCIsInByb2ZpbGUiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNKQyxnQkFBVSxLQUROO0FBRUpDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUZsQztBQUdKQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFIbkM7QUFJSkMsY0FBUSxFQUpKO0FBS0pDLG1CQUFhLEVBTFQ7QUFNSkMsc0JBQWdCLEVBTlo7QUFPSkMsWUFBTSxLQVBGO0FBUUpDLHNCQUFnQixFQVJaO0FBU0pDLFlBQU0sQ0FBQyxJQUFELENBVEY7QUFVSkMscUJBQWU7QUFWWCxLLFFBNk5QQyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDQUMsS0FEQSxFQUNPO0FBQ2IsWUFBSU4sT0FBTyxJQUFYO0FBQ0EsdUJBQUtPLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxJQURNO0FBRWJDLG1CQUFTO0FBRkksU0FBZixFQUdHQyxJQUhILENBR1EsVUFBU0MsR0FBVCxFQUFhO0FBQ25CLGNBQUdBLElBQUlDLE9BQVAsRUFBZ0I7QUFDZFosaUJBQUtHLGFBQUwsQ0FBbUJVLElBQW5CLENBQXdCYixLQUFLRixXQUFMLENBQWlCUSxLQUFqQixDQUF4QjtBQUNBTixpQkFBS0YsV0FBTCxDQUFpQmdCLE1BQWpCLENBQXdCUixLQUF4QixFQUErQixDQUEvQjtBQUNBTixpQkFB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NUIsRUFQNEI7QUFRckNDLHFCQVJxQyxHQVEvQixFQVIrQjs7QUFTekMsdUJBQVFOLEdBQVIsSUFBZXRCLE1BQWYsRUFBdUI7QUFDckIyQiwyQkFBT2xFLEtBQVAsR0FBZTZELEdBQWY7QUFDQUssMkJBQU94QixLQUFQLEdBQWVILE9BQU9zQixHQUFQLENBQWY7QUFDRDtBQUNDTSx3QkFBSXFCLE9BQUosQ0FBWXRCLE1BQVo7QUFDQUEsNkJBQVMsRUFBVDtBQUNEO0FBQ0E7QUFDRHBGLHVCQUFLeUQsTUFBTCxHQUFjNEIsR0FBZDtBQUNBLHVCQUFLOUUsTUFBTCxHQUFjUCxJQUFkO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvTjZCLGVBQUt5RixJOztrQkFBbkI1RixLIiwiZmlsZSI6ImluZGl2aWR1YWxQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuICBpbXBvcnQgdXRpbCBmcm9tICcuLi91dGlscy91dGlsJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZmI5rO96ZOtICdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICAgbXlEYXRhOiB7fSxcbiAgICAgICB0ZW1wSW1nVXJsczogW10sXG4gICAgICAgcHJvZmlsZVVzZXJfaWQ6ICcnLFxuICAgICAgIHNlbGY6IGZhbHNlLFxuICAgICAgIGN1cnJlbnRVc2VyX2lkOiAnJyxcbiAgICAgICB0ZW1wOiBbJ+W+heWhqyddLFxuICAgICAgIGRlbGV0ZWRJbWdVcmw6IFtdXG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgICAvLyB0aGlzLnByb2ZpbGVVc2VyX2lkID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJylcbiAgICAgIHRoaXMuc2VsZiA9IG9wdGlvbi5zZWxmXG4gICAgICB0aGlzLnByb2ZpbGVVc2VyX2lkID0gb3B0aW9uLl9pZFxuICAgICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgICBpZih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdyZXF1aXJlSW5pdCcpKSB7XG4gICAgICAgIHRoaXMubXlEYXRhID0ge1xuICAgICAgICAgIGdlbmRlcjogJzEnLFxuICAgICAgICAgIGFnZTogJzk5JyxcbiAgICAgICAgICBiaXJ0aERhdGU6ICcxOTkwLTAxLTAxJyxcbiAgICAgICAgICBuaWNrTmFtZTogJ+eIseWboOaWr+WdpicsXG4gICAgICAgICAgaDogJzE3MCcsXG4gICAgICAgICAgd2VpZ2h0OiAnNzAnLFxuICAgICAgICAgIGltZ1VybHM6IFtdLFxuICAgICAgICAgIG15SW5mbzogW3t0aXRsZTogJ+ihjOS4micsIHZhbHVlOiAn5b6F5aGrJ30sIHt0aXRsZTogJ+W3peS9nOmihuWfnycsIHZhbHVlOiAn5b6F5aGrJ30sIHt0aXRsZTogJ+WFrOWPuCcsIHZhbHVlOiAn5b6F5aGrJ30sIHt0aXRsZTogJ+adpeiHqicsIHZhbHVlOiAn5b6F5aGrJ30sIHt0aXRsZTogJ+e7j+W4uOWHuuayoScsIHZhbHVlOiAn5b6F5aGrJ30sIHt0aXRsZTogJ+S4quS6uuetvuWQjScsIHZhbHVlOiAn5b6F5aGrJ31dLFxuICAgICAgICAgIG15VGFnczogWyflvoXloasnXSxcbiAgICAgICAgICBzcG9ydHM6IFsn5b6F5aGrJ10sXG4gICAgICAgICAgbXVzaWM6IFsn5b6F5aGrJ10sXG4gICAgICAgICAgZm9vZDogWyflvoXloasnXSxcbiAgICAgICAgICB0djogWyflvoXloasnXSxcbiAgICAgICAgICBib29rOiBbJ+W+heWhqyddLFxuICAgICAgICAgIHBsYWNlOiBbJ+W+heWhqyddLFxuICAgICAgICAgIG15QW5zOiBbe3RpdGxlOiAn5oKo55qE6Zeu6aKY77yfJywgdmFsdWU6ICflk4jlk4gnfV1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkaXRNb2RlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSh0aGlzLnByb2ZpbGVVc2VyX2lkKVxuICAgICAgfVxuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHZhciBlZGl0ZWRQaWVjZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlXG4gICAgICAvLyBjb25zb2xlLmxvZygnZWRpdGVkUGllY2U6ICcgKyBKU09OLnN0cmluZ2lmeShlZGl0ZWRQaWVjZSkpO1xuICAgICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUoKS50b0lTT1N0cmluZygpIC0gZWRpdGVkUGllY2UuYmlydGhEYXRlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVkaXRlZFBpZWNlLmJpcnRoRGF0ZS5nZXRNb250aCgpKTtcbiAgICAgIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdwZXJzb24nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VkaXRlZCBiYWNrJyk7XG4gICAgICAgIHRoaXMubXlEYXRhLmdlbmRlciA9IGVkaXRlZFBpZWNlLmRhdGEuZ2VuZGVyIHx8IHRoaXMubXlEYXRhLmdlbmRlclxuICAgICAgICB0aGlzLm15RGF0YS5uaWNrTmFtZSA9ICBlZGl0ZWRQaWVjZS5kYXRhLm5pY2tOYW1lIHx8IHRoaXMubXlEYXRhLm5pY2tOYW1lXG4gICAgICAgIHRoaXMubXlEYXRhLmggPSBlZGl0ZWRQaWVjZS5kYXRhLmhlaWdodCB8fCB0aGlzLm15RGF0YS5oXG4gICAgICAgIHRoaXMubXlEYXRhLndlaWdodCA9IGVkaXRlZFBpZWNlLmRhdGEud2VpZ2h0IHx8IHRoaXMubXlEYXRhLndlaWdodFxuICAgICAgICB0aGlzLm15RGF0YS5iaXJ0aERhdGUgPSBlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSB8fCB0aGlzLm15RGF0YS5iaXJ0aERhdGVcbiAgICAgICAgaWYoZWRpdGVkUGllY2UuZGF0YS5iaXJ0aERhdGUpIHtcbiAgICAgICAgICB0aGlzLm15RGF0YS5hZ2UgPSB1dGlsLmFnZShlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSkgfHwgdGhpcy5teURhdGEuYWdlXG4gICAgICAgICAgdmFyIGNvbnN0ZWxsYXRpb24gPSB1dGlsLmNvbnN0ZWxsYXRpb24oZWRpdGVkUGllY2UuZGF0YS5iaXJ0aERhdGUpXG4gICAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5pif5bqnJykge1xuICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gY29uc3RlbGxhdGlvblxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn6KGM5LiaJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLm15RGF0YS5teUluZm86ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLm15RGF0YS5teUluZm8pKVxuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfooYzkuJonKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICflt6XkvZzpoobln58nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5bel5L2c6aKG5Z+fJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn5YWs5Y+4JyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+WFrOWPuCcpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+adpeiHqicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubXlEYXRhLm15SW5mbzogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMubXlEYXRhLm15SW5mbykpXG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+adpeiHqicpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+e7j+W4uOWHuuayoScgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfnu4/luLjlh7rmsqEnKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICfkuKrkurrnrb7lkI0nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5Liq5Lq6562+5ZCNJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAndGFnJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLm15VGFncyA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsLnZhbHVlOiAnICsgZWwudmFsdWUpO1xuICAgICAgICAgICAgc2VsZi5teURhdGEubXlUYWdzLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnICB0aGlzLm15RGF0YS5teVRhZ3M6ICcgKyAgIHNlbGYubXlEYXRhLm15VGFncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdzcG9ydHMnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEuc3BvcnRzID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5zcG9ydHMucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ211c2ljJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLm11c2ljID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5tdXNpYy5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAnZm9vZCcgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS5mb29kID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5mb29kLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICd0dicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS50diA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEudHYucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ2Jvb2snICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEuYm9vayA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEuYm9vay5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAncGxhY2UnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEucGxhY2UgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5kYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC5waWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGYubXlEYXRhLnBsYWNlLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdxdWVzdGlvbicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUFuc1tlZGl0ZWRQaWVjZS5zdWJJbmRleF0udmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlID0ge31cbiAgICB9XG4gICAgYXN5bmMgbG9hZERhdGEoX2lkKSB7XG4gICAgICAvLyBUT0RPOiBsb2FkIGRhdGFcbiAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkucHJvZmlsZSh7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgX2lkOiBfaWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXM6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xuICAgICAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICB2YXIgZGF0YSA9IHJlcy5kYXRhLmRhdGEuaW50cm9cbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxmLmRhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShzZWxmLm15RGF0YS5teUluZm8pKVxuICAgICAgICAgZGF0YS5hZ2UgPSB1dGlsLmFnZShkYXRhLmJpcnRoRGF0ZSlcbiAgICAgICAgIGRhdGEubXlJbmZvWyfmmJ/luqcnXSA9IHV0aWwuY29uc3RlbGxhdGlvbihkYXRhLmJpcnRoRGF0ZSlcblxuICAgICAgICAgdmFyIG15SW5mbyA9IGRhdGEubXlJbmZvXG4gICAgICAgICB2YXIgc3ViT2JqID0ge31cbiAgICAgICAgIHZhciBhcnIgPSBbXVxuICAgICAgICAgZm9yKHZhciBrZXkgaW4gbXlJbmZvKSB7XG4gICAgICAgICAgIHN1Yk9iai50aXRsZSA9IGtleVxuICAgICAgICAgICBzdWJPYmoudmFsdWUgPSBteUluZm9ba2V5XVxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3N1Yk9iajogJyArIEpTT04uc3RyaW5naWZ5KHN1Yk9iaikpXG4gICAgICAgICAgIGFyci51bnNoaWZ0KHN1Yk9iailcbiAgICAgICAgICAgc3ViT2JqID0ge31cbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coJ2FycjogJyArIEpTT04uc3RyaW5naWZ5KGFycikpXG4gICAgICAgICB9XG4gICAgICAgICBkYXRhLm15SW5mbyA9IGFyclxuICAgICAgICAgdGhpcy5teURhdGEgPSBkYXRhXG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnbXlEYXRhOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5teURhdGEpKTtcbiAgICAgICB9XG4gICAgICAgIC8vIHRoaXMubXlEYXRhID0ge1xuICAgICAgICAvLyAgIGdlbmRlcjogJzAnLFxuICAgICAgICAvLyAgIGJpcnRoRGF0ZTogJzE5OTAtMDEtMDEnLFxuICAgICAgICAvLyAgIG5pY2tOYW1lOiAn546L5bCP6JmOJyxcbiAgICAgICAgLy8gICBoOiAnMTY1JyxcbiAgICAgICAgLy8gICB3ZWlnaHQ6ICc0NScsXG4gICAgICAgIC8vICAgaW1nVXJsczogW1xuICAgICAgICAvLyAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgLy8gICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUguVlBKVlhYWFhibFhGWFhxNnhYRlhYWGovRGl5LURpYW1vbmQtUGFpbnRpbmctS2l0cy0zMHgzMGNtLUZ1bGwtRGlhbW9uZC1TcXVhcmUtUmhpbmVzdG9uZS1QYXN0ZWQtUGFpbnRpbmctSG9tZS1EZWNvcmF0aW9uLU5hdHVyZS1TY2VuZXJ5LVdhdGVyZmFsbC5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAvLyAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJ1xuICAgICAgICAvLyAgICBdLFxuICAgICAgICAvLyAgICB0aW1lbGluZV9pbWdVcmxzOiBbXG4gICAgICAgIC8vICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgLy8gICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgLy8gICAgICAgJ2h0dHBzOi8vd3d3LmRocmVzb3VyY2UuY29tLzB4MHMvZjItYWxidS1nNC1NMDAtMTItNDktckJWYUVGbVZvdHVBWG91OUFBTDNyUDVqU3VjNTMxLmpwZy9iZWF1dGlmdWwtc2NlbmVyeS1zZWFzaWRlLWRpeS1mdWxsLXNxdWFyZS5qcGcnXG4gICAgICAgIC8vICAgIF0sXG4gICAgICAgIC8vICAgIG15SW5mbzogW3sndGl0bGUnOiAn5pif5bqnJywgdmFsdWU6ICflpKnonY7luqcnfSwge3RpdGxlOiAn6KGM5LiaJywgdmFsdWU6ICfph5Hono0nfSwge3RpdGxlOiAn5bel5L2c6aKG5Z+fJywgdmFsdWU6ICfnrZbliJInfSwge3RpdGxlOiAn5YWs5Y+4JywgdmFsdWU6ICfniLHovonnp5HmioDmnInpmZDlhazlj7gnfSwge3RpdGxlOiAn5p2l6IeqJywgdmFsdWU6ICfmsZ/oi48s5Y2X5LqsLOm8k+alvCd9LCB7dGl0bGU6ICfnu4/luLjlh7rmsqEnLCB2YWx1ZTogJ+aYpeeGmei3ryd9LCB7dGl0bGU6ICfkuKrkurrnrb7lkI0nLCB2YWx1ZTogJ+iBquaYjuaYr+S4gOenjeWkqei1i++8jOiAjOWWhOiJr+aYr+S4gOenjemAieaLqeOAgid9XSxcbiAgICAgICAgLy8gICAgbXlUYWdzOiBbJ1BhdGllbnQnLCAnQ3JlYXRpdmUnLCAn5aWz5rGJ5a2QJywgJ+WWnOasoueugOWNlScsICfpnaDosLEnLCAn5a6J6Z2ZJywgJ+mAieaLqeaBkOaDp+eXhycsICfmlofoibonLCAn5Y6a6YGTJywgJ+iusuS5ieawlCcsICfpmo/mgKcnXSxcbiAgICAgICAgLy8gICAgc3BvcnRzOiBbJ1J1bm5pbmcnLCAn56+u55CDJywgJ+WBpei6q+aIvycsICfoiJ7ouYgnLCAn5Y+w55CDJywgJ+WwhOeurScsICfnnaHop4knXSxcbiAgICAgICAgLy8gICAgbXVzaWM6IFsn5YiY5b635Y2OJywgJ+S6lOeZvicsICc4MOW5tOS7o+e7j+WFuCddLFxuICAgICAgICAvLyAgICBmb29kOiBbJ+eJm+aOkicsICfngavplIUnLCAn576O6aOfJ10sXG4gICAgICAgIC8vICAgIHR2OiBbJ+aIkeeahOWwkeWls+aXtuS7oycsICfllpzliafkuYvnjosnLCAn5YCp5aWz5bm96a2CJywgJ+iDjOaZr+mBh+S4iuilv+mbheWbvicsICfmnLrmorDluIgnLCAn5Ymq5YiA5omL54ix5b635Y2OJywgJ+WCsuaFouS4juWBj+ingSddLFxuICAgICAgICAvLyAgICBib29rOiBbJ+aut+ahg+Wwj+S4uOWtkCcsICfnkLznkbYnLCAn54GM56+u6auY5omLJ10sXG4gICAgICAgIC8vICAgIHBsYWNlOiBbJ+WMl+a1tycsICfms7Dlm70nLCAn5aSn55CGJywgJ+S5neWvqOaynycsICfmiJDpg70nLCAn5Li95rGfJywgJ+mmmeagvOmHjOaLiScsICfmma7lkInlspsnLCAn6LaK5Y2XJ10sXG4gICAgICAgIC8vICAgIG15QW5zOiBbe3RpdGxlOiAn5aaC5p6c6IO95pyJ5LiA56eN6LaF6IO95Yqb77yM6KaB5LuA5LmI77yfJywgdmFsdWU6ICfml7blhYnog73lgJLmtYEnfSwge3RpdGxlOiAn5aaC5p6c5pyJ6ZKx5pyJ5pe26Ze077yM5pyA5oOz5Y675YGa5LuA5LmI77yfJywgdmFsdWU6ICfnjq/muLjkuJbnlYwnfSwge3RpdGxlOiAn5LuA5LmI5qC355qE5byC5oCn5pyA6K6p5L2g5b+D5Yqo77yfJywgdmFsdWU6ICfluIUg6aKc5YC86auYIOe7heWjqyDkurrlk4Hlpb3kuKrlrZDpq5gnfSwge3RpdGxlOiAn5aaC5p6c5aWz5pyL5Y+LL+eUt+aci+WPi+eUn+awlOS6hu+8jOaAjuS5iOWThO+8nycsIHZhbHVlOiAn5LiA55u06K+05byA5b+D55qE5LqL5oOF77yM5aaC5p6c6L+Y5Zyo55Sf5rCU5bCx5LiA55u05ZOEJ30sIHt0aXRsZTogJ+WPr+S7peaOpeWPl+eahOe6puS8muacieWTquS6m++8nycsIHZhbHVlOiAn55S15b2xIOWQg+mlrSDnr67nkIMnfV1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgZGVsSW1nIChpbmRleCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5ZOI5Za9JyxcbiAgICAgICAgICBjb250ZW50OiAn6KaB5Yig6Zmk6L+Z5byg54Wn54mH5ZCX77yfJ1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgaWYocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIHNlbGYuZGVsZXRlZEltZ1VybC5wdXNoKHNlbGYudGVtcEltZ1VybHNbaW5kZXhdKVxuICAgICAgICAgICAgc2VsZi50ZW1wSW1nVXJscy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGNob29zZUltYWdlICgpIHtcbiAgICAgICAgY29uc3QgeyB0ZW1wRmlsZVBhdGhzIH0gPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBjb3VudDogNiAtIHRoaXMudGVtcEltZ1VybHMubGVuZ3RoLFxuICAgICAgICAgIHNpemVUeXBlOiAnY29tcHJlc3NlZCdcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy50ZW1wSW1nVXJscy5wdXNoKC4uLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1hZ2VMaXN0KSB7XG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiBjdXIsXG4gICAgICAgICAgdXJsczogaW1hZ2VMaXN0XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ29FZGl0IChpbmRleCwgdmFsLCBzdWJJbmRleCkge1xuICAgICAgICBpZighdGhpcy5lZGl0TW9kZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5teURhdGFcbiAgICAgICAgdmFyIG9iaiA9IHt9XG4gICAgICAgIGlmKGluZGV4ID09ICdwZXJzb24nKSB7XG4gICAgICAgICAgb2JqID0ge25pY2tOYW1lOiBkYXRhLm5pY2tOYW1lLCBiaXJ0aERhdGU6IGRhdGEuYmlydGhEYXRlLCBoZWlnaHQ6IGRhdGEuaCwgd2VpZ2h0OiBkYXRhLndlaWdodH1cbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZSA9IHtpbmRleDogaW5kZXgsIGRhdGE6IG9ian1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPz86ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZS5kYXRhKSlcbiAgICAgICAgfSBlbHNlIGlmKGluZGV4ID09ICduZXdRdWVzdGlvbicpIHtcbiAgICAgICAgICAgIC8vbmV3IHF1ZXN0aW9uP1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlID0ge2luZGV4OiBpbmRleCwgZGF0YTogdmFsLCBzdWJJbmRleDogc3ViSW5kZXh9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJz8/OiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSkpXG4gICAgICAgIH1cbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdpdGVtRWRpdFBhZ2UnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXN5bmMgdG9nZ2xlICgpIHtcbiAgICAgICAgLy8gVE9ETzogc2F2ZSBlZGl0ZWQgcHJvZmlsZVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYodGhpcy5lZGl0TW9kZSkge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfnoa7lrprkv53lrZjlkJfvvJ8nXG4gICAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGlmKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIHZhciBwYWNrID0ge31cbiAgICAgICAgICAgICAgcGFjay5pbnRybyA9IHNlbGYubXlEYXRhXG5cbiAgICAgICAgICAgICAgLy8gcGFjay5pbnRybyA9IHtcbiAgICAgICAgICAgICAgLy8gICBnZW5kZXI6ICcwJyxcbiAgICAgICAgICAgICAgLy8gICBiaXJ0aERhdGU6ICcxOTkwLTAxLTAxJyxcbiAgICAgICAgICAgICAgLy8gICBuaWNrTmFtZTogJ+eOi+Wwj+iZjicsXG4gICAgICAgICAgICAgIC8vICAgaDogJzE2NScsXG4gICAgICAgICAgICAgIC8vICAgd2VpZ2h0OiAnNDUnLFxuICAgICAgICAgICAgICAvLyAgIGltZ1VybHM6IFtcbiAgICAgICAgICAgICAgLy8gICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTRhLlpsenVoU0tKalNzcGpxNkFpOFZYYVMvTmVlZGxld29yay1kaXktZGlhbW9uZC1wYWludGluZy1jcm9zcy1zdGl0Y2gta2l0cy1mdWxsLXJlc2luLXNxdWFyZS1kaWFtb25kLWVtYnJvaWRlcnktTW9zYWljLUhvbWUtRGVjb3Itc2NlbmljLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgICAgICAgIC8vICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICAgICAgLy8gICAgICAnaHR0cHM6Ly93d3cuZGhyZXNvdXJjZS5jb20vMHgwcy9mMi1hbGJ1LWc0LU0wMC0xMi00OS1yQlZhRUZtVm90dUFYb3U5QUFMM3JQNWpTdWM1MzEuanBnL2JlYXV0aWZ1bC1zY2VuZXJ5LXNlYXNpZGUtZGl5LWZ1bGwtc3F1YXJlLmpwZydcbiAgICAgICAgICAgICAgLy8gICAgXSxcbiAgICAgICAgICAgICAgLy8gICAgbXlJbmZvOiBbe3RpdGxlOiAn6KGM5LiaJywgdmFsdWU6ICfph5Hono0nfSwge3RpdGxlOiAn5bel5L2c6aKG5Z+fJywgdmFsdWU6ICfnrZbliJInfSwge3RpdGxlOiAn5YWs5Y+4JywgdmFsdWU6ICfniLHovonnp5HmioDmnInpmZDlhazlj7gnfSwge3RpdGxlOiAn5p2l6IeqJywgdmFsdWU6ICfmsZ/oi48s5Y2X5LqsLOm8k+alvCd9LCB7dGl0bGU6ICfnu4/luLjlh7rmsqEnLCB2YWx1ZTogJ+aYpeeGmei3ryd9LCB7dGl0bGU6ICfkuKrkurrnrb7lkI0nLCB2YWx1ZTogJ+iBquaYjuaYr+S4gOenjeWkqei1i++8jOiAjOWWhOiJr+aYr+S4gOenjemAieaLqeOAgid9XSxcbiAgICAgICAgICAgICAgLy8gICAgbXlUYWdzOiBbJ1BhdGllbnQnLCAnQ3JlYXRpdmUnLCAn5aWz5rGJ5a2QJywgJ+WWnOasoueugOWNlScsICfpnaDosLEnLCAn5a6J6Z2ZJywgJ+mAieaLqeaBkOaDp+eXhycsICfmlofoibonLCAn5Y6a6YGTJywgJ+iusuS5ieawlCcsICfpmo/mgKcnXSxcbiAgICAgICAgICAgICAgLy8gICAgc3BvcnRzOiBbJ1J1bm5pbmcnLCAn56+u55CDJywgJ+WBpei6q+aIvycsICfoiJ7ouYgnLCAn5Y+w55CDJywgJ+WwhOeurScsICfnnaHop4knXSxcbiAgICAgICAgICAgICAgLy8gICAgbXVzaWM6IFsn5YiY5b635Y2OJywgJ+S6lOeZvicsICc4MOW5tOS7o+e7j+WFuCddLFxuICAgICAgICAgICAgICAvLyAgICBmb29kOiBbJ+eJm+aOkicsICfngavplIUnLCAn576O6aOfJ10sXG4gICAgICAgICAgICAgIC8vICAgIHR2OiBbJ+aIkeeahOWwkeWls+aXtuS7oycsICfllpzliafkuYvnjosnLCAn5YCp5aWz5bm96a2CJywgJ+iDjOaZr+mBh+S4iuilv+mbheWbvicsICfmnLrmorDluIgnLCAn5Ymq5YiA5omL54ix5b635Y2OJywgJ+WCsuaFouS4juWBj+ingSddLFxuICAgICAgICAgICAgICAvLyAgICBib29rOiBbJ+aut+ahg+Wwj+S4uOWtkCcsICfnkLznkbYnLCAn54GM56+u6auY5omLJ10sXG4gICAgICAgICAgICAgIC8vICAgIHBsYWNlOiBbJ+WMl+a1tycsICfms7Dlm70nLCAn5aSn55CGJywgJ+S5neWvqOaynycsICfmiJDpg70nLCAn5Li95rGfJywgJ+mmmeagvOmHjOaLiScsICfmma7lkInlspsnLCAn6LaK5Y2XJ10sXG4gICAgICAgICAgICAgIC8vICAgIG15QW5zOiBbe3RpdGxlOiAn5aaC5p6c6IO95pyJ5LiA56eN6LaF6IO95Yqb77yM6KaB5LuA5LmI77yfJywgdmFsdWU6ICfml7blhYnog73lgJLmtYEnfSwge3RpdGxlOiAn5aaC5p6c5pyJ6ZKx5pyJ5pe26Ze077yM5pyA5oOz5Y675YGa5LuA5LmI77yfJywgdmFsdWU6ICfnjq/muLjkuJbnlYwnfSwge3RpdGxlOiAn5LuA5LmI5qC355qE5byC5oCn5pyA6K6p5L2g5b+D5Yqo77yfJywgdmFsdWU6ICfluIUg6aKc5YC86auYIOe7heWjqyDkurrlk4Hlpb3kuKrlrZDpq5gnfSwge3RpdGxlOiAn5aaC5p6c5aWz5pyL5Y+LL+eUt+aci+WPi+eUn+awlOS6hu+8jOaAjuS5iOWThO+8nycsIHZhbHVlOiAn5LiA55u06K+05byA5b+D55qE5LqL5oOF77yM5aaC5p6c6L+Y5Zyo55Sf5rCU5bCx5LiA55u05ZOEJ30sIHt0aXRsZTogJ+WPr+S7peaOpeWPl+eahOe6puS8muacieWTquS6m++8nycsIHZhbHVlOiAn55S15b2xIOWQg+mlrSDnr67nkIMnfV1cbiAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgIC8vaGVyZSBuZWVkIHRvIHRyYW5zZm9ybSBteUluZm8gZnJvbSBhcnJheSB0byBvYmplY3RcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrOiAnICsgSlNPTi5zdHJpbmdpZnkocGFjaykpO1xuICAgICAgICAgICAgICB2YXIgdGVtcCA9IHt9XG4gICAgICAgICAgICAgIHBhY2suaW50cm8ubXlJbmZvLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgICAgdGVtcFtpdGVtLnRpdGxlXSAgPSBpdGVtLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHBhY2suaW50cm8ubXlJbmZvID0gdGVtcFxuXG4gICAgICAgICAgICAgIC8vY2hlY2sgcmVxdWlyZWQgaXRlbXNcbiAgICAgICAgICAgICAgaWYoIShzZWxmLnRlbXBJbWdVcmxzLmxlbmd0aCAmJiBwYWNrLmludHJvLm15SW5mb1sn6KGM5LiaJ10gIT0gJ+W+heWhqycgJiYgcGFjay5pbnRyby5teUluZm9bJ+W3peS9nOmihuWfnyddICE9ICflvoXloasnICYmIHBhY2suaW50cm8ubXlJbmZvWyfmnaXoh6onXSAhPSAn5b6F5aGrJyAmJiBwYWNrLmludHJvLm5pY2tOYW1lICYmIHBhY2suaW50cm8uYWdlICYmIHBhY2suaW50cm8uaCAmJiBwYWNrLmludHJvLndlaWdodCAmJiBwYWNrLmludHJvLmdlbmRlcikpIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn6K+35a6M5oiQ57u/6Imy5a2X5qC35YaF5a655bm25LiK5Lyg6Iez5bCR5LiA5byg5Zu+54mHJyxcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGYucHJvZmlsZVVzZXJfaWQ6ICcgKyBzZWxmLnByb2ZpbGVVc2VyX2lkKTtcbiAgICAgICAgICAgICAgICBwYWNrLnVzZXJfaWQgPSBzZWxmLnByb2ZpbGVVc2VyX2lkXG5cbiAgICAgICAgICAgICAgICAvLyB1cGxvYWQgaW1hZ2VzXG4gICAgICAgICAgICAgICAgcGFjay5pbnRyby5pbWdVcmxzID0gW11cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi50ZW1wSW1nVXJscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVnRXhwID0gL2FsaXl1bmNzXFwuY29tL1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2IG9mIHNlbGYudGVtcEltZ1VybHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZihyZWdFeHAudGVzdCh2KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zYXZlIGV4aXN0aW5nIGltZyBmaWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFjay5pbnRyby5pbWdVcmxzLnB1c2godilcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IGF3YWl0IHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXBsb2FkL2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzYXZlZCBpbiBzZXJ2ZXIuIENvbmdyYXRzIScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHIuZGF0YSA9IEpTT04ucGFyc2Uoci5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3IuZGF0YTonICsgSlNPTi5zdHJpbmdpZnkoci5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5kYXRhLmltZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3VwcG9zZWQgdG8gaGF2ZSB1cmwgb2YgT1NTOiAnICsgci5kYXRhLmltZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFjay5pbnRyby5pbWdVcmxzLnB1c2goci5kYXRhLmltZylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM5LiK5Lyg5Zu+54mH5aSx6LSl44CC6K+36YeN6K+Vfu+8mu+8iScgKyByLmRhdGEuZXJybXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM5LiK5Lyg5Zu+54mH5aSx6LSl44CCJyArIGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVkaXRNb2RlID0gIXNlbGYuZWRpdE1vZGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHt9XG4gICAgICAgICAgICAgICAgLy9jbGVhbnNlIGRhdGEgYnkgcmVtb3ZpbmcgJ+W+heWhqydcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYmVmb3JlIGNsZWFuc2luZy4uLicgKyBKU09OLnN0cmluZ2lmeShwYWNrLmludHJvKSlcbiAgICAgICAgICAgICAgICBmb3IodmFyIGtleSBpbiBwYWNrLmludHJvKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPzogJyArIEpTT04uc3RyaW5naWZ5KHBhY2suaW50cm9ba2V5XSkpXG4gICAgICAgICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShwYWNrLmludHJvW2tleV0pID09IEpTT04uc3RyaW5naWZ5KFsn5b6F5aGrJ10pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc/PzogJyArIHBhY2suaW50cm9ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIHBhY2suaW50cm9ba2V5XSA9IFtdXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc/Pz86ICcgKyBwYWNrLmludHJvW2tleV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IodmFyIGtleSBpbiBwYWNrLmludHJvLm15SW5mbykge1xuICAgICAgICAgICAgICAgICAgaWYocGFjay5pbnRyby5teUluZm9ba2V5XSA9PSAn5b6F5aGrJykge1xuICAgICAgICAgICAgICAgICAgICBwYWNrLmludHJvLm15SW5mb1trZXldID0gJydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXIgY2xlYW5zaW5nLi4uJyArIEpTT04uc3RyaW5naWZ5KHBhY2suaW50cm8pKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiZWZvcmUgdXBsb2FkaW5nOiAnICsgSlNPTi5zdHJpbmdpZnkocGFjaykpO1xuICAgICAgICAgICAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkudXBkYXRlUHJvZmlsZSh7XG4gICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBwYWNrOiBwYWNrXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPzogXCIrIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKTtcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NzJyk7XG5cbiAgICAgICAgICAgICAgICAgIHNlbGYubXlEYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGYuZGF0YTogJyArIEpTT04uc3RyaW5naWZ5KHNlbGYubXlEYXRhLm15SW5mbykpXG4gICAgICAgICAgICAgICAgICB2YXIgbXlJbmZvID0gc2VsZi5teURhdGEubXlJbmZvXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbXlJbmZvOiAnKyBteUluZm8pO1xuICAgICAgICAgICAgICAgICAgdmFyIHN1Yk9iaiA9IHt9XG4gICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW11cbiAgICAgICAgICAgICAgICAgIGZvcih2YXIga2V5IGluIG15SW5mbykge1xuICAgICAgICAgICAgICAgICAgICBzdWJPYmoudGl0bGUgPSBrZXlcbiAgICAgICAgICAgICAgICAgICAgc3ViT2JqLnZhbHVlID0gbXlJbmZvW2tleV1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc3ViT2JqKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc2VsZi5teURhdGEubXlJbmZvID0gYXJyXG4gICAgICAgICAgICAgICAgICBhd2FpdCBzZWxmLmxvYWREYXRhKHNlbGYucHJvZmlsZVVzZXJfaWQpXG4gICAgICAgICAgICAgICAgICBzZWxmLmVkaXRNb2RlID0gIXNlbGYuZWRpdE1vZGVcbiAgICAgICAgICAgICAgICAgIHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoJ3JlcXVpcmVJbml0JylcbiAgICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5kZWxldGVkSW1nVXJsID0gW11cbiAgICAgICAgICAgICAgc2VsZi5lZGl0TW9kZSA9ICFzZWxmLmVkaXRNb2RlXG4gICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50ZW1wSW1nVXJscyA9IHRoaXMubXlEYXRhLmltZ1VybHNcbiAgICAgICAgICB0aGlzLmVkaXRNb2RlID0gIXRoaXMuZWRpdE1vZGVcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIGdvIChwYWdlKSB7XG4gICAgICAgIGlmKHBhZ2UgPSAnbXlUTScpIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnbXlUTT90eXBlPXBvc3RzJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogcGFnZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==