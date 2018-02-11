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
                        var pack, temp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, r, key, myInfo, subObj, arr;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (!res.confirm) {
                                  _context2.next = 72;
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

                                //check required items

                                if (self.tempImgUrls.length && pack.intro.myInfo['行业'] != '待填' && pack.intro.myInfo['工作领域'] != '待填' && pack.intro.myInfo['来自'] != '待填' && pack.intro.nickName && pack.intro.age && pack.intro.h && pack.intro.weight && pack.intro.gender) {
                                  _context2.next = 10;
                                  break;
                                }

                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '请完成绿色字样内容并上传至少一张图片',
                                  showCancel: false
                                }).then(function (res) {
                                  return;
                                });
                                _context2.next = 70;
                                break;

                              case 10:
                                // console.log('self.profileUser_id: ' + self.profileUser_id);
                                pack.user_id = self.profileUser_id;

                                // upload images
                                pack.intro.imgUrls = [];

                                if (!(self.tempImgUrls.length > 0)) {
                                  _context2.next = 50;
                                  break;
                                }

                                _context2.prev = 13;
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context2.prev = 17;
                                _iterator = self.tempImgUrls[Symbol.iterator]();

                              case 19:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                  _context2.next = 29;
                                  break;
                                }

                                v = _step.value;
                                _context2.next = 23;
                                return _wepy2.default.uploadFile({
                                  url: 'http://127.0.0.1:8000/api/upload/image',
                                  filePath: v,
                                  name: 'file',
                                  success: function success(res) {
                                    console.log('image has been successfully saved in server. Congrats!');
                                  }
                                });

                              case 23:
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

                              case 26:
                                _iteratorNormalCompletion = true;
                                _context2.next = 19;
                                break;

                              case 29:
                                _context2.next = 35;
                                break;

                              case 31:
                                _context2.prev = 31;
                                _context2.t0 = _context2['catch'](17);
                                _didIteratorError = true;
                                _iteratorError = _context2.t0;

                              case 35:
                                _context2.prev = 35;
                                _context2.prev = 36;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                  _iterator.return();
                                }

                              case 38:
                                _context2.prev = 38;

                                if (!_didIteratorError) {
                                  _context2.next = 41;
                                  break;
                                }

                                throw _iteratorError;

                              case 41:
                                return _context2.finish(38);

                              case 42:
                                return _context2.finish(35);

                              case 43:
                                _context2.next = 50;
                                break;

                              case 45:
                                _context2.prev = 45;
                                _context2.t1 = _context2['catch'](13);

                                _wepy2.default.hideToast();
                                _wepy2.default.showModal({
                                  title: '提示',
                                  content: '服务器错误，上传图片失败。' + _context2.t1.message,
                                  showCancel: false
                                });
                                self.editMode = !self.editMode;

                              case 50:
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
                                _context2.next = 55;
                                return _api2.default.updateProfile({
                                  query: {
                                    pack: pack
                                  },
                                  method: 'POST'
                                });

                              case 55:
                                res = _context2.sent;

                                if (!(res.data && res.data.flag == 'success')) {
                                  _context2.next = 70;
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
                                _context2.next = 67;
                                return self.loadData(self.profileUser_id);

                              case 67:
                                self.editMode = !self.editMode;
                                _wepy2.default.removeStorageSync('requireInit');
                                self.$apply();

                              case 70:
                                _context2.next = 74;
                                break;

                              case 72:
                                self.editMode = !self.editMode;
                                self.$apply();

                              case 74:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this, [[13, 45], [17, 31, 35, 43], [36,, 38, 42]]);
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

                if (!_wepy2.default.getStorageSync('requireInit')) {
                  _context4.next = 6;
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
                _context4.next = 8;
                break;

              case 6:
                _context4.next = 8;
                return this.loadData(this.profileUser_id);

              case 8:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGl2aWR1YWxQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlZGl0TW9kZSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsInRlbXBJbWdVcmxzIiwicHJvZmlsZVVzZXJfaWQiLCJtZXRob2RzIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsImxlbmd0aCIsInNpemVUeXBlIiwidGVtcEZpbGVQYXRocyIsInB1c2giLCIkYXBwbHkiLCJwcmV2aWV3SW1hZ2UiLCJjdXIiLCJpbWFnZUxpc3QiLCJjdXJyZW50IiwidXJscyIsImdvRWRpdCIsImluZGV4IiwidmFsIiwic3ViSW5kZXgiLCJvYmoiLCJuaWNrTmFtZSIsImJpcnRoRGF0ZSIsImhlaWdodCIsImgiLCJ3ZWlnaHQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImVkaXRlZFBpZWNlIiwibmF2aWdhdGVUbyIsInVybCIsInRvZ2dsZSIsInNlbGYiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0aGVuIiwicmVzIiwiY29uZmlybSIsInBhY2siLCJpbnRybyIsInRlbXAiLCJteUluZm8iLCJmb3JFYWNoIiwiaXRlbSIsInZhbHVlIiwiYWdlIiwiZ2VuZGVyIiwic2hvd0NhbmNlbCIsInVzZXJfaWQiLCJpbWdVcmxzIiwidiIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInIiLCJKU09OIiwicGFyc2UiLCJpbWciLCJoaWRlVG9hc3QiLCJlcnJtc2ciLCJtZXNzYWdlIiwia2V5Iiwic3RyaW5naWZ5IiwidXBkYXRlUHJvZmlsZSIsInF1ZXJ5IiwibWV0aG9kIiwiZmxhZyIsInN1Yk9iaiIsImFyciIsImxvYWREYXRhIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnbyIsInBhZ2UiLCJvcHRpb24iLCJfaWQiLCJnZXRTdG9yYWdlU3luYyIsIm15VGFncyIsInNwb3J0cyIsIm11c2ljIiwiZm9vZCIsInR2IiwiYm9vayIsInBsYWNlIiwibXlBbnMiLCJjb25zdGVsbGF0aW9uIiwiZmluZCIsImVsIiwicGlja2VkIiwicHJvZmlsZSIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0pDLGdCQUFVLEtBRE47QUFFSkMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRmxDO0FBR0pDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUhuQztBQUlKQyxjQUFRLEVBSko7QUFLSkMsbUJBQWEsRUFMVDtBQU1KQyxzQkFBZ0I7QUFOWixLLFFBdU5QQyxPLEdBQVU7QUFDRkMsaUJBREU7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFMEIsZUFBS0EsV0FBTCxDQUFpQjtBQUMvQ0MsMkJBQU8sSUFBSSxLQUFLSixXQUFMLENBQWlCSyxNQURtQjtBQUUvQ0MsOEJBQVU7QUFGcUMsbUJBQWpCLENBRjFCOztBQUFBO0FBQUE7QUFFRUMsK0JBRkYsU0FFRUEsYUFGRjs7QUFNTix1Q0FBS1AsV0FBTCxFQUFpQlEsSUFBakIsd0NBQXlCRCxhQUF6QjtBQUNBLHVCQUFLRSxNQUFMOztBQVBNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBU1JDLGtCQVRRLHdCQVNNQyxHQVROLEVBU1dDLFNBVFgsRUFTc0I7QUFDNUIsdUJBQUtGLFlBQUwsQ0FBa0I7QUFDaEJHLG1CQUFTRixHQURPO0FBRWhCRyxnQkFBTUY7QUFGVSxTQUFsQjtBQUlELE9BZE87QUFlUkcsWUFmUSxrQkFl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ZStCLEdBQWY7QUFDQU0sMkJBQU8xQixLQUFQLEdBQWVILE9BQU91QixHQUFQLENBQWY7QUFDRDtBQUNDTyx3QkFBSXFCLE9BQUosQ0FBWXRCLE1BQVo7QUFDQUEsNkJBQVMsRUFBVDtBQUNEO0FBQ0E7QUFDRDlFLHVCQUFLaUQsTUFBTCxHQUFjOEIsR0FBZDtBQUNBLHVCQUFLeEUsTUFBTCxHQUFjUCxJQUFkO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6TjZCLGVBQUttRixJOztrQkFBbkJ0RixLIiwiZmlsZSI6ImluZGl2aWR1YWxQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuICBpbXBvcnQgdXRpbCBmcm9tICcuLi91dGlscy91dGlsJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZmI5rO96ZOtICdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICAgbXlEYXRhOiB7fSxcbiAgICAgICB0ZW1wSW1nVXJsczogW10sXG4gICAgICAgcHJvZmlsZVVzZXJfaWQ6ICcnXG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgICAvLyB0aGlzLnByb2ZpbGVVc2VyX2lkID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJylcbiAgICAgIHRoaXMucHJvZmlsZVVzZXJfaWQgPSBvcHRpb24uX2lkXG4gICAgICBpZih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdyZXF1aXJlSW5pdCcpKSB7XG4gICAgICAgIHRoaXMubXlEYXRhID0ge1xuICAgICAgICAgIGdlbmRlcjogJzEnLFxuICAgICAgICAgIGFnZTogJzk5JyxcbiAgICAgICAgICBiaXJ0aERhdGU6ICcxOTkwLTAxLTAxJyxcbiAgICAgICAgICBuaWNrTmFtZTogJ+eIseWboOaWr+WdpicsXG4gICAgICAgICAgaDogJzE3MCcsXG4gICAgICAgICAgd2VpZ2h0OiAnNzAnLFxuICAgICAgICAgIGltZ1VybHM6IFtdLFxuICAgICAgICAgIG15SW5mbzogW3t0aXRsZTogJ+ihjOS4micsIHZhbHVlOiAn5b6F5aGrJ30sIHt0aXRsZTogJ+W3peS9nOmihuWfnycsIHZhbHVlOiAn5b6F5aGrJ30sIHt0aXRsZTogJ+WFrOWPuCcsIHZhbHVlOiAn5b6F5aGrJ30sIHt0aXRsZTogJ+adpeiHqicsIHZhbHVlOiAn5b6F5aGrJ30sIHt0aXRsZTogJ+e7j+W4uOWHuuayoScsIHZhbHVlOiAn5b6F5aGrJ30sIHt0aXRsZTogJ+S4quS6uuetvuWQjScsIHZhbHVlOiAn5b6F5aGrJ31dLFxuICAgICAgICAgIG15VGFnczogWyflvoXloasnXSxcbiAgICAgICAgICBzcG9ydHM6IFsn5b6F5aGrJ10sXG4gICAgICAgICAgbXVzaWM6IFsn5b6F5aGrJ10sXG4gICAgICAgICAgZm9vZDogWyflvoXloasnXSxcbiAgICAgICAgICB0djogWyflvoXloasnXSxcbiAgICAgICAgICBib29rOiBbJ+W+heWhqyddLFxuICAgICAgICAgIHBsYWNlOiBbJ+W+heWhqyddLFxuICAgICAgICAgIG15QW5zOiBbe3RpdGxlOiAn5oKo55qE6Zeu6aKY77yfJywgdmFsdWU6ICflk4jlk4gnfV1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkaXRNb2RlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSh0aGlzLnByb2ZpbGVVc2VyX2lkKVxuICAgICAgfVxuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHZhciBlZGl0ZWRQaWVjZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlXG4gICAgICAvLyBjb25zb2xlLmxvZygnZWRpdGVkUGllY2U6ICcgKyBKU09OLnN0cmluZ2lmeShlZGl0ZWRQaWVjZSkpO1xuICAgICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUoKS50b0lTT1N0cmluZygpIC0gZWRpdGVkUGllY2UuYmlydGhEYXRlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVkaXRlZFBpZWNlLmJpcnRoRGF0ZS5nZXRNb250aCgpKTtcbiAgICAgIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdwZXJzb24nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VkaXRlZCBiYWNrJyk7XG4gICAgICAgIHRoaXMubXlEYXRhLmdlbmRlciA9IGVkaXRlZFBpZWNlLmRhdGEuZ2VuZGVyIHx8IHRoaXMubXlEYXRhLmdlbmRlclxuICAgICAgICB0aGlzLm15RGF0YS5uaWNrTmFtZSA9ICBlZGl0ZWRQaWVjZS5kYXRhLm5pY2tOYW1lIHx8IHRoaXMubXlEYXRhLm5pY2tOYW1lXG4gICAgICAgIHRoaXMubXlEYXRhLmggPSBlZGl0ZWRQaWVjZS5kYXRhLmhlaWdodCB8fCB0aGlzLm15RGF0YS5oXG4gICAgICAgIHRoaXMubXlEYXRhLndlaWdodCA9IGVkaXRlZFBpZWNlLmRhdGEud2VpZ2h0IHx8IHRoaXMubXlEYXRhLndlaWdodFxuICAgICAgICB0aGlzLm15RGF0YS5iaXJ0aERhdGUgPSBlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSB8fCB0aGlzLm15RGF0YS5iaXJ0aERhdGVcbiAgICAgICAgaWYoZWRpdGVkUGllY2UuZGF0YS5iaXJ0aERhdGUpIHtcbiAgICAgICAgICB0aGlzLm15RGF0YS5hZ2UgPSB1dGlsLmFnZShlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSkgfHwgdGhpcy5teURhdGEuYWdlXG4gICAgICAgICAgdmFyIGNvbnN0ZWxsYXRpb24gPSB1dGlsLmNvbnN0ZWxsYXRpb24oZWRpdGVkUGllY2UuZGF0YS5iaXJ0aERhdGUpXG4gICAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaWYoaXRlbS50aXRsZSA9PSAn5pif5bqnJykge1xuICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gY29uc3RlbGxhdGlvblxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn6KGM5LiaJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLm15RGF0YS5teUluZm86ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLm15RGF0YS5teUluZm8pKVxuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfooYzkuJonKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICflt6XkvZzpoobln58nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5bel5L2c6aKG5Z+fJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn5YWs5Y+4JyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+WFrOWPuCcpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+adpeiHqicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubXlEYXRhLm15SW5mbzogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMubXlEYXRhLm15SW5mbykpXG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+adpeiHqicpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+e7j+W4uOWHuuayoScgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfnu4/luLjlh7rmsqEnKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICfkuKrkurrnrb7lkI0nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5Liq5Lq6562+5ZCNJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAndGFnJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLm15VGFncyA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsLnZhbHVlOiAnICsgZWwudmFsdWUpO1xuICAgICAgICAgICAgc2VsZi5teURhdGEubXlUYWdzLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnICB0aGlzLm15RGF0YS5teVRhZ3M6ICcgKyAgIHNlbGYubXlEYXRhLm15VGFncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdzcG9ydHMnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEuc3BvcnRzID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5zcG9ydHMucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ211c2ljJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLm11c2ljID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5tdXNpYy5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAnZm9vZCcgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS5mb29kID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5mb29kLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICd0dicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS50diA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEudHYucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ2Jvb2snICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEuYm9vayA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEuYm9vay5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAncGxhY2UnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEucGxhY2UgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5kYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC5waWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGYubXlEYXRhLnBsYWNlLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdxdWVzdGlvbicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUFuc1tlZGl0ZWRQaWVjZS5zdWJJbmRleF0udmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlID0ge31cbiAgICB9XG4gICAgYXN5bmMgbG9hZERhdGEoX2lkKSB7XG4gICAgICAvLyBUT0RPOiBsb2FkIGRhdGFcbiAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkucHJvZmlsZSh7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgX2lkOiBfaWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXM6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xuICAgICAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICB2YXIgZGF0YSA9IHJlcy5kYXRhLmRhdGEuaW50cm9cbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxmLmRhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShzZWxmLm15RGF0YS5teUluZm8pKVxuICAgICAgICAgZGF0YS5hZ2UgPSB1dGlsLmFnZShkYXRhLmJpcnRoRGF0ZSlcbiAgICAgICAgIGRhdGEubXlJbmZvWyfmmJ/luqcnXSA9IHV0aWwuY29uc3RlbGxhdGlvbihkYXRhLmJpcnRoRGF0ZSlcblxuICAgICAgICAgdmFyIG15SW5mbyA9IGRhdGEubXlJbmZvXG4gICAgICAgICB2YXIgc3ViT2JqID0ge31cbiAgICAgICAgIHZhciBhcnIgPSBbXVxuICAgICAgICAgZm9yKHZhciBrZXkgaW4gbXlJbmZvKSB7XG4gICAgICAgICAgIHN1Yk9iai50aXRsZSA9IGtleVxuICAgICAgICAgICBzdWJPYmoudmFsdWUgPSBteUluZm9ba2V5XVxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3N1Yk9iajogJyArIEpTT04uc3RyaW5naWZ5KHN1Yk9iaikpXG4gICAgICAgICAgIGFyci51bnNoaWZ0KHN1Yk9iailcbiAgICAgICAgICAgc3ViT2JqID0ge31cbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coJ2FycjogJyArIEpTT04uc3RyaW5naWZ5KGFycikpXG4gICAgICAgICB9XG4gICAgICAgICBkYXRhLm15SW5mbyA9IGFyclxuICAgICAgICAgdGhpcy5teURhdGEgPSBkYXRhXG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnbXlEYXRhOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5teURhdGEpKTtcbiAgICAgICB9XG4gICAgICAgIC8vIHRoaXMubXlEYXRhID0ge1xuICAgICAgICAvLyAgIGdlbmRlcjogJzAnLFxuICAgICAgICAvLyAgIGJpcnRoRGF0ZTogJzE5OTAtMDEtMDEnLFxuICAgICAgICAvLyAgIG5pY2tOYW1lOiAn546L5bCP6JmOJyxcbiAgICAgICAgLy8gICBoOiAnMTY1JyxcbiAgICAgICAgLy8gICB3ZWlnaHQ6ICc0NScsXG4gICAgICAgIC8vICAgaW1nVXJsczogW1xuICAgICAgICAvLyAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgLy8gICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUguVlBKVlhYWFhibFhGWFhxNnhYRlhYWGovRGl5LURpYW1vbmQtUGFpbnRpbmctS2l0cy0zMHgzMGNtLUZ1bGwtRGlhbW9uZC1TcXVhcmUtUmhpbmVzdG9uZS1QYXN0ZWQtUGFpbnRpbmctSG9tZS1EZWNvcmF0aW9uLU5hdHVyZS1TY2VuZXJ5LVdhdGVyZmFsbC5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAvLyAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJ1xuICAgICAgICAvLyAgICBdLFxuICAgICAgICAvLyAgICB0aW1lbGluZV9pbWdVcmxzOiBbXG4gICAgICAgIC8vICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgLy8gICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgLy8gICAgICAgJ2h0dHBzOi8vd3d3LmRocmVzb3VyY2UuY29tLzB4MHMvZjItYWxidS1nNC1NMDAtMTItNDktckJWYUVGbVZvdHVBWG91OUFBTDNyUDVqU3VjNTMxLmpwZy9iZWF1dGlmdWwtc2NlbmVyeS1zZWFzaWRlLWRpeS1mdWxsLXNxdWFyZS5qcGcnXG4gICAgICAgIC8vICAgIF0sXG4gICAgICAgIC8vICAgIG15SW5mbzogW3sndGl0bGUnOiAn5pif5bqnJywgdmFsdWU6ICflpKnonY7luqcnfSwge3RpdGxlOiAn6KGM5LiaJywgdmFsdWU6ICfph5Hono0nfSwge3RpdGxlOiAn5bel5L2c6aKG5Z+fJywgdmFsdWU6ICfnrZbliJInfSwge3RpdGxlOiAn5YWs5Y+4JywgdmFsdWU6ICfniLHovonnp5HmioDmnInpmZDlhazlj7gnfSwge3RpdGxlOiAn5p2l6IeqJywgdmFsdWU6ICfmsZ/oi48s5Y2X5LqsLOm8k+alvCd9LCB7dGl0bGU6ICfnu4/luLjlh7rmsqEnLCB2YWx1ZTogJ+aYpeeGmei3ryd9LCB7dGl0bGU6ICfkuKrkurrnrb7lkI0nLCB2YWx1ZTogJ+iBquaYjuaYr+S4gOenjeWkqei1i++8jOiAjOWWhOiJr+aYr+S4gOenjemAieaLqeOAgid9XSxcbiAgICAgICAgLy8gICAgbXlUYWdzOiBbJ1BhdGllbnQnLCAnQ3JlYXRpdmUnLCAn5aWz5rGJ5a2QJywgJ+WWnOasoueugOWNlScsICfpnaDosLEnLCAn5a6J6Z2ZJywgJ+mAieaLqeaBkOaDp+eXhycsICfmlofoibonLCAn5Y6a6YGTJywgJ+iusuS5ieawlCcsICfpmo/mgKcnXSxcbiAgICAgICAgLy8gICAgc3BvcnRzOiBbJ1J1bm5pbmcnLCAn56+u55CDJywgJ+WBpei6q+aIvycsICfoiJ7ouYgnLCAn5Y+w55CDJywgJ+WwhOeurScsICfnnaHop4knXSxcbiAgICAgICAgLy8gICAgbXVzaWM6IFsn5YiY5b635Y2OJywgJ+S6lOeZvicsICc4MOW5tOS7o+e7j+WFuCddLFxuICAgICAgICAvLyAgICBmb29kOiBbJ+eJm+aOkicsICfngavplIUnLCAn576O6aOfJ10sXG4gICAgICAgIC8vICAgIHR2OiBbJ+aIkeeahOWwkeWls+aXtuS7oycsICfllpzliafkuYvnjosnLCAn5YCp5aWz5bm96a2CJywgJ+iDjOaZr+mBh+S4iuilv+mbheWbvicsICfmnLrmorDluIgnLCAn5Ymq5YiA5omL54ix5b635Y2OJywgJ+WCsuaFouS4juWBj+ingSddLFxuICAgICAgICAvLyAgICBib29rOiBbJ+aut+ahg+Wwj+S4uOWtkCcsICfnkLznkbYnLCAn54GM56+u6auY5omLJ10sXG4gICAgICAgIC8vICAgIHBsYWNlOiBbJ+WMl+a1tycsICfms7Dlm70nLCAn5aSn55CGJywgJ+S5neWvqOaynycsICfmiJDpg70nLCAn5Li95rGfJywgJ+mmmeagvOmHjOaLiScsICfmma7lkInlspsnLCAn6LaK5Y2XJ10sXG4gICAgICAgIC8vICAgIG15QW5zOiBbe3RpdGxlOiAn5aaC5p6c6IO95pyJ5LiA56eN6LaF6IO95Yqb77yM6KaB5LuA5LmI77yfJywgdmFsdWU6ICfml7blhYnog73lgJLmtYEnfSwge3RpdGxlOiAn5aaC5p6c5pyJ6ZKx5pyJ5pe26Ze077yM5pyA5oOz5Y675YGa5LuA5LmI77yfJywgdmFsdWU6ICfnjq/muLjkuJbnlYwnfSwge3RpdGxlOiAn5LuA5LmI5qC355qE5byC5oCn5pyA6K6p5L2g5b+D5Yqo77yfJywgdmFsdWU6ICfluIUg6aKc5YC86auYIOe7heWjqyDkurrlk4Hlpb3kuKrlrZDpq5gnfSwge3RpdGxlOiAn5aaC5p6c5aWz5pyL5Y+LL+eUt+aci+WPi+eUn+awlOS6hu+8jOaAjuS5iOWThO+8nycsIHZhbHVlOiAn5LiA55u06K+05byA5b+D55qE5LqL5oOF77yM5aaC5p6c6L+Y5Zyo55Sf5rCU5bCx5LiA55u05ZOEJ30sIHt0aXRsZTogJ+WPr+S7peaOpeWPl+eahOe6puS8muacieWTquS6m++8nycsIHZhbHVlOiAn55S15b2xIOWQg+mlrSDnr67nkIMnfV1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgYXN5bmMgY2hvb3NlSW1hZ2UgKCkge1xuICAgICAgICBjb25zdCB7IHRlbXBGaWxlUGF0aHMgfSA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIGNvdW50OiA2IC0gdGhpcy50ZW1wSW1nVXJscy5sZW5ndGgsXG4gICAgICAgICAgc2l6ZVR5cGU6ICdjb21wcmVzc2VkJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnRlbXBJbWdVcmxzLnB1c2goLi4udGVtcEZpbGVQYXRocylcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHByZXZpZXdJbWFnZSAoY3VyLCBpbWFnZUxpc3QpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgIGN1cnJlbnQ6IGN1cixcbiAgICAgICAgICB1cmxzOiBpbWFnZUxpc3RcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnb0VkaXQgKGluZGV4LCB2YWwsIHN1YkluZGV4KSB7XG4gICAgICAgIGlmKCF0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLm15RGF0YVxuICAgICAgICB2YXIgb2JqID0ge31cbiAgICAgICAgaWYoaW5kZXggPT0gJ3BlcnNvbicpIHtcbiAgICAgICAgICBvYmogPSB7bmlja05hbWU6IGRhdGEubmlja05hbWUsIGJpcnRoRGF0ZTogZGF0YS5iaXJ0aERhdGUsIGhlaWdodDogZGF0YS5oLCB3ZWlnaHQ6IGRhdGEud2VpZ2h0fVxuICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlID0ge2luZGV4OiBpbmRleCwgZGF0YTogb2JqfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc/PzogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlLmRhdGEpKVxuICAgICAgICB9IGVsc2UgaWYoaW5kZXggPT0gJ25ld1F1ZXN0aW9uJykge1xuICAgICAgICAgICAgLy9uZXcgcXVlc3Rpb24/XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UgPSB7aW5kZXg6IGluZGV4LCBkYXRhOiB2YWwsIHN1YkluZGV4OiBzdWJJbmRleH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPz86ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZS5kYXRhKSlcbiAgICAgICAgfVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2l0ZW1FZGl0UGFnZSdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhc3luYyB0b2dnbGUgKCkge1xuICAgICAgICAvLyBUT0RPOiBzYXZlIGVkaXRlZCBwcm9maWxlXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgICBpZih0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ehruWumuS/neWtmOWQl++8nydcbiAgICAgICAgICB9KS50aGVuKGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgaWYocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgdmFyIHBhY2sgPSB7fVxuICAgICAgICAgICAgICBwYWNrLmludHJvID0gc2VsZi5teURhdGFcblxuICAgICAgICAgICAgICAvLyBwYWNrLmludHJvID0ge1xuICAgICAgICAgICAgICAvLyAgIGdlbmRlcjogJzAnLFxuICAgICAgICAgICAgICAvLyAgIGJpcnRoRGF0ZTogJzE5OTAtMDEtMDEnLFxuICAgICAgICAgICAgICAvLyAgIG5pY2tOYW1lOiAn546L5bCP6JmOJyxcbiAgICAgICAgICAgICAgLy8gICBoOiAnMTY1JyxcbiAgICAgICAgICAgICAgLy8gICB3ZWlnaHQ6ICc0NScsXG4gICAgICAgICAgICAgIC8vICAgaW1nVXJsczogW1xuICAgICAgICAgICAgICAvLyAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICAgICAgLy8gICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUguVlBKVlhYWFhibFhGWFhxNnhYRlhYWGovRGl5LURpYW1vbmQtUGFpbnRpbmctS2l0cy0zMHgzMGNtLUZ1bGwtRGlhbW9uZC1TcXVhcmUtUmhpbmVzdG9uZS1QYXN0ZWQtUGFpbnRpbmctSG9tZS1EZWNvcmF0aW9uLU5hdHVyZS1TY2VuZXJ5LVdhdGVyZmFsbC5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgICAgICAvLyAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJ1xuICAgICAgICAgICAgICAvLyAgICBdLFxuICAgICAgICAgICAgICAvLyAgICBteUluZm86IFt7dGl0bGU6ICfooYzkuJonLCB2YWx1ZTogJ+mHkeiejSd9LCB7dGl0bGU6ICflt6XkvZzpoobln58nLCB2YWx1ZTogJ+etluWIkid9LCB7dGl0bGU6ICflhazlj7gnLCB2YWx1ZTogJ+eIsei+ieenkeaKgOaciemZkOWFrOWPuCd9LCB7dGl0bGU6ICfmnaXoh6onLCB2YWx1ZTogJ+axn+iLjyzljZfkuqws6byT5qW8J30sIHt0aXRsZTogJ+e7j+W4uOWHuuayoScsIHZhbHVlOiAn5pil54aZ6LevJ30sIHt0aXRsZTogJ+S4quS6uuetvuWQjScsIHZhbHVlOiAn6IGq5piO5piv5LiA56eN5aSp6LWL77yM6ICM5ZaE6Imv5piv5LiA56eN6YCJ5oup44CCJ31dLFxuICAgICAgICAgICAgICAvLyAgICBteVRhZ3M6IFsnUGF0aWVudCcsICdDcmVhdGl2ZScsICflpbPmsYnlrZAnLCAn5Zac5qyi566A5Y2VJywgJ+mdoOiwsScsICflronpnZknLCAn6YCJ5oup5oGQ5oOn55eHJywgJ+aWh+iJuicsICfljprpgZMnLCAn6K6y5LmJ5rCUJywgJ+maj+aApyddLFxuICAgICAgICAgICAgICAvLyAgICBzcG9ydHM6IFsnUnVubmluZycsICfnr67nkIMnLCAn5YGl6Lqr5oi/JywgJ+iInui5iCcsICflj7DnkIMnLCAn5bCE566tJywgJ+edoeiniSddLFxuICAgICAgICAgICAgICAvLyAgICBtdXNpYzogWyfliJjlvrfljY4nLCAn5LqU55m+JywgJzgw5bm05Luj57uP5YW4J10sXG4gICAgICAgICAgICAgIC8vICAgIGZvb2Q6IFsn54mb5o6SJywgJ+eBq+mUhScsICfnvo7po58nXSxcbiAgICAgICAgICAgICAgLy8gICAgdHY6IFsn5oiR55qE5bCR5aWz5pe25LujJywgJ+WWnOWJp+S5i+eOiycsICflgKnlpbPlub3prYInLCAn6IOM5pmv6YGH5LiK6KW/6ZuF5Zu+JywgJ+acuuaisOW4iCcsICfliarliIDmiYvniLHlvrfljY4nLCAn5YKy5oWi5LiO5YGP6KeBJ10sXG4gICAgICAgICAgICAgIC8vICAgIGJvb2s6IFsn5q635qGD5bCP5Li45a2QJywgJ+eQvOeRticsICfngYznr67pq5jmiYsnXSxcbiAgICAgICAgICAgICAgLy8gICAgcGxhY2U6IFsn5YyX5rW3JywgJ+azsOWbvScsICflpKfnkIYnLCAn5Lmd5a+o5rKfJywgJ+aIkOmDvScsICfkuL3msZ8nLCAn6aaZ5qC86YeM5ouJJywgJ+aZruWQieWymycsICfotorljZcnXSxcbiAgICAgICAgICAgICAgLy8gICAgbXlBbnM6IFt7dGl0bGU6ICflpoLmnpzog73mnInkuIDnp43otoXog73lipvvvIzopoHku4DkuYjvvJ8nLCB2YWx1ZTogJ+aXtuWFieiDveWAkua1gSd9LCB7dGl0bGU6ICflpoLmnpzmnInpkrHmnInml7bpl7TvvIzmnIDmg7PljrvlgZrku4DkuYjvvJ8nLCB2YWx1ZTogJ+eOr+a4uOS4lueVjCd9LCB7dGl0bGU6ICfku4DkuYjmoLfnmoTlvILmgKfmnIDorqnkvaDlv4PliqjvvJ8nLCB2YWx1ZTogJ+W4hSDpopzlgLzpq5gg57uF5aOrIOS6uuWTgeWlveS4quWtkOmrmCd9LCB7dGl0bGU6ICflpoLmnpzlpbPmnIvlj4sv55S35pyL5Y+L55Sf5rCU5LqG77yM5oCO5LmI5ZOE77yfJywgdmFsdWU6ICfkuIDnm7Tor7TlvIDlv4PnmoTkuovmg4XvvIzlpoLmnpzov5jlnKjnlJ/msJTlsLHkuIDnm7Tlk4QnfSwge3RpdGxlOiAn5Y+v5Lul5o6l5Y+X55qE57qm5Lya5pyJ5ZOq5Lqb77yfJywgdmFsdWU6ICfnlLXlvbEg5ZCD6aWtIOevrueQgyd9XVxuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgLy9oZXJlIG5lZWQgdG8gdHJhbnNmb3JtIG15SW5mbyBmcm9tIGFycmF5IHRvIG9iamVjdFxuICAgICAgICAgICAgICB2YXIgdGVtcCA9IHt9XG4gICAgICAgICAgICAgIHBhY2suaW50cm8ubXlJbmZvLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgICAgdGVtcFtpdGVtLnRpdGxlXSAgPSBpdGVtLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHBhY2suaW50cm8ubXlJbmZvID0gdGVtcFxuXG4gICAgICAgICAgICAgIC8vY2hlY2sgcmVxdWlyZWQgaXRlbXNcbiAgICAgICAgICAgICAgaWYoIShzZWxmLnRlbXBJbWdVcmxzLmxlbmd0aCAmJiBwYWNrLmludHJvLm15SW5mb1sn6KGM5LiaJ10gIT0gJ+W+heWhqycgJiYgcGFjay5pbnRyby5teUluZm9bJ+W3peS9nOmihuWfnyddICE9ICflvoXloasnICYmIHBhY2suaW50cm8ubXlJbmZvWyfmnaXoh6onXSAhPSAn5b6F5aGrJyAmJiBwYWNrLmludHJvLm5pY2tOYW1lICYmIHBhY2suaW50cm8uYWdlICYmIHBhY2suaW50cm8uaCAmJiBwYWNrLmludHJvLndlaWdodCAmJiBwYWNrLmludHJvLmdlbmRlcikpIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn6K+35a6M5oiQ57u/6Imy5a2X5qC35YaF5a655bm25LiK5Lyg6Iez5bCR5LiA5byg5Zu+54mHJyxcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGYucHJvZmlsZVVzZXJfaWQ6ICcgKyBzZWxmLnByb2ZpbGVVc2VyX2lkKTtcbiAgICAgICAgICAgICAgICBwYWNrLnVzZXJfaWQgPSBzZWxmLnByb2ZpbGVVc2VyX2lkXG5cbiAgICAgICAgICAgICAgICAvLyB1cGxvYWQgaW1hZ2VzXG4gICAgICAgICAgICAgICAgcGFjay5pbnRyby5pbWdVcmxzID0gW11cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi50ZW1wSW1nVXJscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2IG9mIHNlbGYudGVtcEltZ1VybHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gYXdhaXQgd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXBsb2FkL2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiB2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc2F2ZWQgaW4gc2VydmVyLiBDb25ncmF0cyEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICByLmRhdGEgPSBKU09OLnBhcnNlKHIuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnci5kYXRhOicgKyBKU09OLnN0cmluZ2lmeShyLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoci5kYXRhLmltZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N1cHBvc2VkIHRvIGhhdmUgdXJsIG9mIE9TUzogJyArIHIuZGF0YS5pbWcpXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWNrLmludHJvLmltZ1VybHMucHVzaChyLmRhdGEuaW1nKVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+acjeWKoeWZqOmUmeivr++8jOS4iuS8oOWbvueJh+Wksei0peOAguivt+mHjeivlX7vvJrvvIknICsgci5kYXRhLmVycm1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM5LiK5Lyg5Zu+54mH5aSx6LSl44CCJyArIGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVkaXRNb2RlID0gIXNlbGYuZWRpdE1vZGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHt9XG4gICAgICAgICAgICAgICAgLy9jbGVhbnNlIGRhdGEgYnkgcmVtb3ZpbmcgJ+W+heWhqydcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYmVmb3JlIGNsZWFuc2luZy4uLicgKyBKU09OLnN0cmluZ2lmeShwYWNrLmludHJvKSlcbiAgICAgICAgICAgICAgICBmb3IodmFyIGtleSBpbiBwYWNrLmludHJvKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPzogJyArIEpTT04uc3RyaW5naWZ5KHBhY2suaW50cm9ba2V5XSkpXG4gICAgICAgICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShwYWNrLmludHJvW2tleV0pID09IEpTT04uc3RyaW5naWZ5KFsn5b6F5aGrJ10pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc/PzogJyArIHBhY2suaW50cm9ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIHBhY2suaW50cm9ba2V5XSA9IFtdXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc/Pz86ICcgKyBwYWNrLmludHJvW2tleV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IodmFyIGtleSBpbiBwYWNrLmludHJvLm15SW5mbykge1xuICAgICAgICAgICAgICAgICAgaWYocGFjay5pbnRyby5teUluZm9ba2V5XSA9PSAn5b6F5aGrJykge1xuICAgICAgICAgICAgICAgICAgICBwYWNrLmludHJvLm15SW5mb1trZXldID0gJydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXIgY2xlYW5zaW5nLi4uJyArIEpTT04uc3RyaW5naWZ5KHBhY2suaW50cm8pKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiZWZvcmUgdXBsb2FkaW5nOiAnICsgSlNPTi5zdHJpbmdpZnkocGFjaykpO1xuICAgICAgICAgICAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkudXBkYXRlUHJvZmlsZSh7XG4gICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBwYWNrOiBwYWNrXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPzogXCIrIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKTtcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NzJyk7XG5cbiAgICAgICAgICAgICAgICAgIHNlbGYubXlEYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGYuZGF0YTogJyArIEpTT04uc3RyaW5naWZ5KHNlbGYubXlEYXRhLm15SW5mbykpXG4gICAgICAgICAgICAgICAgICB2YXIgbXlJbmZvID0gc2VsZi5teURhdGEubXlJbmZvXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbXlJbmZvOiAnKyBteUluZm8pO1xuICAgICAgICAgICAgICAgICAgdmFyIHN1Yk9iaiA9IHt9XG4gICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW11cbiAgICAgICAgICAgICAgICAgIGZvcih2YXIga2V5IGluIG15SW5mbykge1xuICAgICAgICAgICAgICAgICAgICBzdWJPYmoudGl0bGUgPSBrZXlcbiAgICAgICAgICAgICAgICAgICAgc3ViT2JqLnZhbHVlID0gbXlJbmZvW2tleV1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc3ViT2JqKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc2VsZi5teURhdGEubXlJbmZvID0gYXJyXG4gICAgICAgICAgICAgICAgICBhd2FpdCBzZWxmLmxvYWREYXRhKHNlbGYucHJvZmlsZVVzZXJfaWQpXG4gICAgICAgICAgICAgICAgICBzZWxmLmVkaXRNb2RlID0gIXNlbGYuZWRpdE1vZGVcbiAgICAgICAgICAgICAgICAgIHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoJ3JlcXVpcmVJbml0JylcbiAgICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5lZGl0TW9kZSA9ICFzZWxmLmVkaXRNb2RlXG4gICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lZGl0TW9kZSA9ICF0aGlzLmVkaXRNb2RlXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBnbyAocGFnZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogcGFnZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19