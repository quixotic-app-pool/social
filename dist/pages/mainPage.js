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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var col1H = 0;
var col2H = 0;

var MainPage = function (_wepy$page) {
  _inherits(MainPage, _wepy$page);

  function MainPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MainPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '相识于眼缘',
      enablePullDownRefresh: true
    }, _this.data = {
      scrollH: 0,
      imgWidth: 0,
      loadingCount: 0,
      images: [],
      col1: [],
      col2: [],
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      veryFirst: true,
      currentUser_id: '',
      requiredInit: false,
      currentPage: -1,
      userGender: ''
    }, _this.methods = {
      navigate: function navigate(_id) {
        console.log('_id: ' + _id);
        if (_id) {
          _wepy2.default.navigateTo({ url: 'individualPage?_id=' + _id });
        } else {
          _wepy2.default.showModal({
            title: '哈喽',
            content: '这个只是sample，看看其他的吧。',
            showCancel: false
          });
        }
      },
      subscribe: function subscribe() {
        //  var res = await api.subscribe({
        //    query: {
        //      page: 0
        //    }
        //  })
        //
        //  if(res.data && res.data.flag == 'success') {
        //    list = res.data.data
        //  }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MainPage, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var imgWidth, scrollH;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log("wepy.getStorageSync('UserId'): " + wepy.getStorageSync('UserId'));
                // console.log('??' + wepy.getStorageSync('requireInit'));
                this.requiredInit = _wepy2.default.getStorageSync('requireInit');
                this.currentUser_id = _wepy2.default.getStorageSync('UserId');
                this.userGender = _wepy2.default.getStorageSync('UserGender');
                imgWidth = this.screenWidth * 0.48;
                scrollH = this.screenHeight;


                this.scrollH = scrollH;
                this.imgWidth = imgWidth;

                _context.next = 9;
                return this.loadImages();

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onImageLoad',
    value: function onImageLoad(e) {
      var imageId = e.currentTarget.id;
      var oImgW = e.detail.width; //图片原始宽度
      var oImgH = e.detail.height; //图片原始高度
      var imgWidth = this.data.imgWidth; //图片设置的宽度
      //  console.log('this.data : ' + JSON.stringify(this.data))
      var scale = imgWidth / oImgW; //比例计算
      var imgHeight = oImgH * scale; //自适应高度

      var images = this.data.images;
      var imageObj = null;

      for (var i = 0; i < images.length; i++) {
        var img = images[i];
        if (img.id === imageId) {
          imageObj = img;
          break;
        }
      }

      imageObj.height = imgHeight;

      var loadingCount = this.data.loadingCount - 1;
      var col1 = this.data.col1;
      var col2 = this.data.col2;

      if (col1H <= col2H) {
        col1H += imgHeight;
        col1.push(imageObj);
      } else {
        col2H += imgHeight;
        col2.push(imageObj);
      }

      var data = {
        loadingCount: loadingCount,
        col1: col1,
        col2: col2
      };

      if (!loadingCount) {
        data.images = [];
      }

      this.data.loadingCount = loadingCount;
      this.data.col1 = col1;
      this.data.col2 = col2;
      if (!loadingCount) {
        this.data.images = [];
      }

      //  this.setData(data);
    }
  }, {
    key: 'loadImages',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var self, list, baseId, i, gender, res, o1, o2, o3, arr;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: here we gonna load data
                //  console.log('so....');
                self = this;
                list = [];
                list = [{ pic: "../assets/img/sample2-img.jpeg", height: 0, age: '25', gender: 'female', h: '163', weight: '45' }, { pic: "../assets/img/sample-img.jpg", height: 0, age: '25', gender: 'female', h: '161', weight: '45' }, { pic: "../assets/img/sample-img.jpg", height: 0, age: '25', gender: 'female', h: '162', weight: '45' }, { pic: "../assets/img/sample2-img.jpeg", height: 0, age: '25', gender: 'female', h: '163', weight: '45' }, { pic: "../assets/img/sample2-img.jpeg", height: 0, age: '25', gender: 'female', h: '163', weight: '45' }];

                if (!this.veryFirst) {
                  _context2.next = 12;
                  break;
                }

                baseId = "img-" + +new Date();


                for (i = 0; i < list.length; i++) {
                  list[i].id = baseId + "-" + i;
                }
                //  console.log('list: ' + JSON.stringify(list))
                this.loadingCount = list.length;
                this.images = list;
                //  console.log('images: ' + JSON.stringify(this.images))
                this.veryFirst = !this.veryFirst;
                return _context2.abrupt('return');

              case 12:
                this.currentPage++;

              case 13:
                gender = this.userGender == 1 ? 1 : 1;
                _context2.next = 16;
                return _api2.default.profileList({
                  query: {
                    currentPage: this.currentPage,
                    gender: gender
                  }
                });

              case 16:
                res = _context2.sent;

                //  console.log('res.data.data: ' + JSON.stringify(res.data.data));
                //  return
                if (res.data && res.data.flag == 'success' && res.data.data.length) {
                  list = res.data.data;
                  o1 = {};
                  o2 = {};
                  o3 = {};
                  arr = [];

                  list.forEach(function (obj) {
                    o1 = { _id: obj._id };
                    o2 = obj.intro;
                    o2.subscribed = obj.subscribed.indexOf(self.currentUser_id) != -1;
                    o2.pic = o2.imgUrls[0];
                    o2.imgUrls = [];
                    o2.height = 0;
                    o3 = Object.assign(o1, o2);
                    arr.push(o3);
                  });
                  console.log('o3: ' + JSON.stringify(arr));
                  list = arr;
                  baseId = "img-" + +new Date();


                  for (i = 0; i < list.length; i++) {
                    list[i].id = baseId + "-" + i;
                  }
                  //  console.log('list: ' + JSON.stringify(list))

                  this.loadingCount = list.length;
                  this.images = list;
                  //  this.$apply()
                  //  console.log('images: ' + JSON.stringify(this.images))
                } else {
                  this.currentPage--;
                }
                _wepy2.default.stopPullDownRefresh();
                this.$apply();

              case 20:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadImages() {
        return _ref3.apply(this, arguments);
      }

      return loadImages;
    }()
  }, {
    key: 'onReachBottom',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.loadImages();

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onReachBottom() {
        return _ref4.apply(this, arguments);
      }

      return onReachBottom;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.images = [];
                this.col1 = [];
                this.col2 = [];
                this.currentPage = -1;
                // console.log('pull down')
                _context4.next = 6;
                return this.loadImages();

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onPullDownRefresh() {
        return _ref5.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()
  }]);

  return MainPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MainPage , 'pages/mainPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5QYWdlLmpzIl0sIm5hbWVzIjpbImNvbDFIIiwiY29sMkgiLCJNYWluUGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwic2Nyb2xsSCIsImltZ1dpZHRoIiwibG9hZGluZ0NvdW50IiwiaW1hZ2VzIiwiY29sMSIsImNvbDIiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJ2ZXJ5Rmlyc3QiLCJjdXJyZW50VXNlcl9pZCIsInJlcXVpcmVkSW5pdCIsImN1cnJlbnRQYWdlIiwidXNlckdlbmRlciIsIm1ldGhvZHMiLCJuYXZpZ2F0ZSIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInN1YnNjcmliZSIsImdldFN0b3JhZ2VTeW5jIiwibG9hZEltYWdlcyIsImUiLCJpbWFnZUlkIiwiY3VycmVudFRhcmdldCIsImlkIiwib0ltZ1ciLCJkZXRhaWwiLCJ3aWR0aCIsIm9JbWdIIiwiaGVpZ2h0Iiwic2NhbGUiLCJpbWdIZWlnaHQiLCJpbWFnZU9iaiIsImkiLCJsZW5ndGgiLCJpbWciLCJwdXNoIiwic2VsZiIsImxpc3QiLCJwaWMiLCJhZ2UiLCJnZW5kZXIiLCJoIiwid2VpZ2h0IiwiYmFzZUlkIiwiRGF0ZSIsInByb2ZpbGVMaXN0IiwicXVlcnkiLCJyZXMiLCJmbGFnIiwibzEiLCJvMiIsIm8zIiwiYXJyIiwiZm9yRWFjaCIsIm9iaiIsImludHJvIiwic3Vic2NyaWJlZCIsImluZGV4T2YiLCJpbWdVcmxzIiwiT2JqZWN0IiwiYXNzaWduIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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QUFMO0FBQ0Q7QUFDRCwrQkFBSzJELG1CQUFMO0FBQ0EscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSUssS0FBSzdDLFVBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0wscUJBQUsxQixNQUFMLEdBQWMsRUFBZDtBQUNBLHFCQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLHFCQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLHFCQUFLUyxXQUFMLEdBQW1CLENBQUMsQ0FBcEI7QUFDQTs7dUJBQ00sS0FBS2UsVUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeks0QixlQUFLOEMsSTs7a0JBQXRCaEYsUSIsImZpbGUiOiJtYWluUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcblxuICB2YXIgY29sMUggPSAwO1xuICB2YXIgY29sMkggPSAwO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebuOivhuS6juecvOe8mCcsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcm9sbEg6IDAsXG4gICAgICBpbWdXaWR0aDogMCxcbiAgICAgIGxvYWRpbmdDb3VudDogMCxcbiAgICAgIGltYWdlczogW10sXG4gICAgICBjb2wxOiBbXSxcbiAgICAgIGNvbDI6IFtdLFxuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIHZlcnlGaXJzdDogdHJ1ZSxcbiAgICAgIGN1cnJlbnRVc2VyX2lkOiAnJyxcbiAgICAgIHJlcXVpcmVkSW5pdDogZmFsc2UsXG4gICAgICBjdXJyZW50UGFnZTogLTEsXG4gICAgICB1c2VyR2VuZGVyOiAnJ1xuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VySWQnKTogXCIgKyB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VySWQnKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnPz8nICsgd2VweS5nZXRTdG9yYWdlU3luYygncmVxdWlyZUluaXQnKSk7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5pdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3JlcXVpcmVJbml0JylcbiAgICAgIHRoaXMuY3VycmVudFVzZXJfaWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VySWQnKVxuICAgICAgdGhpcy51c2VyR2VuZGVyID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlckdlbmRlcicpXG4gICAgICB2YXIgaW1nV2lkdGggPSB0aGlzLnNjcmVlbldpZHRoICogMC40ODtcbiAgICAgIHZhciBzY3JvbGxIID0gdGhpcy5zY3JlZW5IZWlnaHQ7XG5cbiAgICAgIHRoaXMuc2Nyb2xsSD0gc2Nyb2xsSFxuICAgICAgdGhpcy5pbWdXaWR0aD0gaW1nV2lkdGhcblxuICAgICAgYXdhaXQgdGhpcy5sb2FkSW1hZ2VzKClcbiAgICAgfVxuICAgICBvbkltYWdlTG9hZCAoZSkge1xuICAgICAgIHZhciBpbWFnZUlkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgIHZhciBvSW1nVyA9IGUuZGV0YWlsLndpZHRoOyAgICAgICAgIC8v5Zu+54mH5Y6f5aeL5a695bqmXG4gICAgICAgdmFyIG9JbWdIID0gZS5kZXRhaWwuaGVpZ2h0OyAgICAgICAgLy/lm77niYfljp/lp4vpq5jluqZcbiAgICAgICB2YXIgaW1nV2lkdGggPSB0aGlzLmRhdGEuaW1nV2lkdGg7ICAvL+WbvueJh+iuvue9rueahOWuveW6plxuICAgICAgLy8gIGNvbnNvbGUubG9nKCd0aGlzLmRhdGEgOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSlcbiAgICAgICB2YXIgc2NhbGUgPSBpbWdXaWR0aCAvIG9JbWdXOyAgICAgICAgLy/mr5TkvovorqHnrpdcbiAgICAgICB2YXIgaW1nSGVpZ2h0ID0gb0ltZ0ggKiBzY2FsZTsgICAgICAvL+iHqumAguW6lOmrmOW6plxuXG4gICAgICAgdmFyIGltYWdlcyA9IHRoaXMuZGF0YS5pbWFnZXM7XG4gICAgICAgdmFyIGltYWdlT2JqID0gbnVsbDtcblxuICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgIHZhciBpbWcgPSBpbWFnZXNbaV07XG4gICAgICAgICAgIGlmIChpbWcuaWQgPT09IGltYWdlSWQpIHtcbiAgICAgICAgICAgICAgIGltYWdlT2JqID0gaW1nO1xuICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICBpbWFnZU9iai5oZWlnaHQgPSBpbWdIZWlnaHQ7XG5cbiAgICAgICB2YXIgbG9hZGluZ0NvdW50ID0gdGhpcy5kYXRhLmxvYWRpbmdDb3VudCAtIDE7XG4gICAgICAgdmFyIGNvbDEgPSB0aGlzLmRhdGEuY29sMTtcbiAgICAgICB2YXIgY29sMiA9IHRoaXMuZGF0YS5jb2wyO1xuXG4gICAgICAgaWYgKGNvbDFIIDw9IGNvbDJIKSB7XG4gICAgICAgICAgIGNvbDFIICs9IGltZ0hlaWdodDtcbiAgICAgICAgICAgY29sMS5wdXNoKGltYWdlT2JqKTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBjb2wySCArPSBpbWdIZWlnaHQ7XG4gICAgICAgICAgIGNvbDIucHVzaChpbWFnZU9iaik7XG4gICAgICAgfVxuXG4gICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgIGxvYWRpbmdDb3VudDogbG9hZGluZ0NvdW50LFxuICAgICAgICAgICBjb2wxOiBjb2wxLFxuICAgICAgICAgICBjb2wyOiBjb2wyXG4gICAgICAgfTtcblxuICAgICAgIGlmICghbG9hZGluZ0NvdW50KSB7XG4gICAgICAgICAgIGRhdGEuaW1hZ2VzID0gW107XG4gICAgICAgfVxuXG4gICAgICAgdGhpcy5kYXRhLmxvYWRpbmdDb3VudCA9IGxvYWRpbmdDb3VudFxuICAgICAgIHRoaXMuZGF0YS5jb2wxID0gY29sMVxuICAgICAgIHRoaXMuZGF0YS5jb2wyID0gY29sMlxuICAgICAgIGlmKCFsb2FkaW5nQ291bnQpIHtcbiAgICAgICAgIHRoaXMuZGF0YS5pbWFnZXMgPSBbXVxuICAgICAgIH1cblxuICAgICAgLy8gIHRoaXMuc2V0RGF0YShkYXRhKTtcbiAgICAgfVxuICAgICBhc3luYyBsb2FkSW1hZ2VzICgpIHtcbiAgICAgICAvLyBUT0RPOiBoZXJlIHdlIGdvbm5hIGxvYWQgZGF0YVxuICAgICAgLy8gIGNvbnNvbGUubG9nKCdzby4uLi4nKTtcbiAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICB2YXIgbGlzdCA9IFtdXG4gICAgICAgdmFyIGxpc3QgPSBbXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvc2FtcGxlMi1pbWcuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYzJywgd2VpZ2h0OiAnNDUnfSxcbiAgICAgICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy9zYW1wbGUtaW1nLmpwZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYxJywgd2VpZ2h0OiAnNDUnfSxcbiAgICAgICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy9zYW1wbGUtaW1nLmpwZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYyJywgd2VpZ2h0OiAnNDUnfSxcbiAgICAgICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy9zYW1wbGUyLWltZy5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjMnLCB3ZWlnaHQ6ICc0NSd9LFxuICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nL3NhbXBsZTItaW1nLmpwZWdcIiwgaGVpZ2h0OiAwLCBhZ2U6JzI1JywgZ2VuZGVyOiAnZmVtYWxlJywgaDogJzE2MycsIHdlaWdodDogJzQ1J31cbiAgICAgICBdO1xuICAgICAgIGlmKHRoaXMudmVyeUZpcnN0KSB7XG4gICAgICAgICB2YXIgYmFzZUlkID0gXCJpbWctXCIgKyAoK25ldyBEYXRlKCkpO1xuXG4gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICBsaXN0W2ldLmlkID0gYmFzZUlkICsgXCItXCIgKyBpO1xuICAgICAgICAgfVxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ2xpc3Q6ICcgKyBKU09OLnN0cmluZ2lmeShsaXN0KSlcbiAgICAgICAgIHRoaXMubG9hZGluZ0NvdW50PSBsaXN0Lmxlbmd0aFxuICAgICAgICAgdGhpcy5pbWFnZXM9IGxpc3RcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdpbWFnZXM6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmltYWdlcykpXG4gICAgICAgICB0aGlzLnZlcnlGaXJzdCA9ICF0aGlzLnZlcnlGaXJzdFxuICAgICAgICAgcmV0dXJuXG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UrK1xuICAgICAgIH1cblxuICAgICAgIHZhciBnZW5kZXIgPSB0aGlzLnVzZXJHZW5kZXIgPT0gMSA/IDEgOiAxXG4gICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5wcm9maWxlTGlzdCh7XG4gICAgICAgICBxdWVyeToge1xuICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgZ2VuZGVyOiBnZW5kZXJcbiAgICAgICAgIH1cbiAgICAgICB9KVxuICAgICAgLy8gIGNvbnNvbGUubG9nKCdyZXMuZGF0YS5kYXRhOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEuZGF0YSkpO1xuICAgICAgLy8gIHJldHVyblxuICAgICAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnICYmIHJlcy5kYXRhLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICBsaXN0ID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgdmFyIG8xID0ge31cbiAgICAgICAgIHZhciBvMiA9IHt9XG4gICAgICAgICB2YXIgbzMgPSB7fVxuICAgICAgICAgdmFyIGFyciA9IFtdXG4gICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgIG8xID0geyBfaWQgOiBvYmouX2lkIH1cbiAgICAgICAgICAgbzIgPSBvYmouaW50cm9cbiAgICAgICAgICAgbzIuc3Vic2NyaWJlZCA9IG9iai5zdWJzY3JpYmVkLmluZGV4T2Yoc2VsZi5jdXJyZW50VXNlcl9pZCkgIT0gLTFcbiAgICAgICAgICAgbzIucGljID0gbzIuaW1nVXJsc1swXVxuICAgICAgICAgICBvMi5pbWdVcmxzID0gW11cbiAgICAgICAgICAgbzIuaGVpZ2h0ID0gMFxuICAgICAgICAgICBvMyA9IE9iamVjdC5hc3NpZ24obzEsIG8yKVxuICAgICAgICAgICBhcnIucHVzaChvMylcbiAgICAgICAgIH0pXG4gICAgICAgICBjb25zb2xlLmxvZygnbzM6ICcgKyBKU09OLnN0cmluZ2lmeShhcnIpKTtcbiAgICAgICAgIGxpc3QgPSBhcnJcbiAgICAgICAgIHZhciBiYXNlSWQgPSBcImltZy1cIiArICgrbmV3IERhdGUoKSk7XG5cbiAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgIGxpc3RbaV0uaWQgPSBiYXNlSWQgKyBcIi1cIiArIGk7XG4gICAgICAgICB9XG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnbGlzdDogJyArIEpTT04uc3RyaW5naWZ5KGxpc3QpKVxuXG4gICAgICAgICB0aGlzLmxvYWRpbmdDb3VudD0gbGlzdC5sZW5ndGhcbiAgICAgICAgIHRoaXMuaW1hZ2VzPSBsaXN0XG4gICAgICAgIC8vICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnaW1hZ2VzOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5pbWFnZXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZS0tXG4gICAgICB9XG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgICBhc3luYyBvblJlYWNoQm90dG9tICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnYXQgYm90dG9tJylcbiAgICAgYXdhaXQgdGhpcy5sb2FkSW1hZ2VzKClcbiAgICB9XG4gICAgYXN5bmMgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgICAgdGhpcy5pbWFnZXMgPSBbXVxuICAgICAgdGhpcy5jb2wxID0gW11cbiAgICAgIHRoaXMuY29sMiA9IFtdXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gLTFcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdwdWxsIGRvd24nKVxuICAgICAgYXdhaXQgdGhpcy5sb2FkSW1hZ2VzKClcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG5hdmlnYXRlIChfaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ19pZDogJyArIF9pZCk7XG4gICAgICAgIGlmKF9pZCkge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7dXJsOiAnaW5kaXZpZHVhbFBhZ2U/X2lkPScgKyBfaWR9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5ZOI5Za9JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfov5nkuKrlj6rmmK9zYW1wbGXvvIznnIvnnIvlhbbku5bnmoTlkKfjgIInLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3Vic2NyaWJlICgpIHtcbiAgICAgICAgLy8gIHZhciByZXMgPSBhd2FpdCBhcGkuc3Vic2NyaWJlKHtcbiAgICAgICAgLy8gICAgcXVlcnk6IHtcbiAgICAgICAgLy8gICAgICBwYWdlOiAwXG4gICAgICAgIC8vICAgIH1cbiAgICAgICAgLy8gIH0pXG4gICAgICAgICAvL1xuICAgICAgICAvLyAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgLy8gICAgbGlzdCA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgLy8gIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==