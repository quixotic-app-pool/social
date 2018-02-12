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
                  //  console.log('o3: ' + JSON.stringify(arr));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5QYWdlLmpzIl0sIm5hbWVzIjpbImNvbDFIIiwiY29sMkgiLCJNYWluUGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwic2Nyb2xsSCIsImltZ1dpZHRoIiwibG9hZGluZ0NvdW50IiwiaW1hZ2VzIiwiY29sMSIsImNvbDIiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJ2ZXJ5Rmlyc3QiLCJjdXJyZW50VXNlcl9pZCIsInJlcXVpcmVkSW5pdCIsImN1cnJlbnRQYWdlIiwidXNlckdlbmRlciIsIm1ldGhvZHMiLCJuYXZpZ2F0ZSIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInN1YnNjcmliZSIsImdldFN0b3JhZ2VTeW5jIiwibG9hZEltYWdlcyIsImUiLCJpbWFnZUlkIiwiY3VycmVudFRhcmdldCIsImlkIiwib0ltZ1ciLCJkZXRhaWwiLCJ3aWR0aCIsIm9JbWdIIiwiaGVpZ2h0Iiwic2NhbGUiLCJpbWdIZWlnaHQiLCJpbWFnZU9iaiIsImkiLCJsZW5ndGgiLCJpbWciLCJwdXNoIiwic2VsZiIsImxpc3QiLCJwaWMiLCJhZ2UiLCJnZW5kZXIiLCJoIiwid2VpZ2h0IiwiYmFzZUlkIiwiRGF0ZSIsInByb2ZpbGVMaXN0IiwicXVlcnkiLCJyZXMiLCJmbGFnIiwibzEiLCJvMiIsIm8zIiwiYXJyIiwiZm9yRWFjaCIsIm9iaiIsImludHJvIiwic3Vic2NyaWJlZCIsImluZGV4T2YiLCJpbWdVcmxzIiwiT2JqZWN0IiwiYXNzaWduIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUSxDQUFaO0FBQ0EsSUFBSUMsUUFBUSxDQUFaOztJQUNxQkMsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxlQUFTLENBREo7QUFFTEMsZ0JBQVUsQ0FGTDtBQUdMQyxvQkFBYyxDQUhUO0FBSUxDLGNBQVEsRUFKSDtBQUtMQyxZQUFNLEVBTEQ7QUFNTEMsWUFBTSxFQU5EO0FBT0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQVBqQztBQVFMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFSbEM7QUFTTEMsaUJBQVcsSUFUTjtBQVVMQyxzQkFBZ0IsRUFWWDtBQVdMQyxvQkFBYyxLQVhUO0FBWUxDLG1CQUFhLENBQUMsQ0FaVDtBQWFMQyxrQkFBWTtBQWJQLEssUUFzS1BDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNFQyxHQURGLEVBQ087QUFDYkMsZ0JBQVFDLEdBQVIsQ0FBWSxVQUFVRixHQUF0QjtBQUNBLFlBQUdBLEdBQUgsRUFBUTtBQUNOLHlCQUFLRyxVQUFMLENBQWdCLEVBQUNDLEtBQUssd0JBQXdCSixHQUE5QixFQUFoQjtBQUNELFNBRkQsTUFFTztBQUNMLHlCQUFLSyxTQUFMLENBQWU7QUFDYkMsbUJBQU8sSUFETTtBQUViQyxxQkFBUyxvQkFGSTtBQUdiQyx3QkFBWTtBQUhDLFdBQWY7QUFLRDtBQUNGLE9BWk87QUFhUkMsZUFiUSx1QkFhSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNEO0FBdkJPLEs7Ozs7Ozs7Ozs7OztBQXRKUjtBQUNBO0FBQ0EscUJBQUtkLFlBQUwsR0FBb0IsZUFBS2UsY0FBTCxDQUFvQixhQUFwQixDQUFwQjtBQUNBLHFCQUFLaEIsY0FBTCxHQUFzQixlQUFLZ0IsY0FBTCxDQUFvQixRQUFwQixDQUF0QjtBQUNBLHFCQUFLYixVQUFMLEdBQWtCLGVBQUthLGNBQUwsQ0FBb0IsWUFBcEIsQ0FBbEI7QUFDSTNCLHdCLEdBQVcsS0FBS0ssV0FBTCxHQUFtQixJO0FBQzlCTix1QixHQUFVLEtBQUtTLFk7OztBQUVuQixxQkFBS1QsT0FBTCxHQUFjQSxPQUFkO0FBQ0EscUJBQUtDLFFBQUwsR0FBZUEsUUFBZjs7O3VCQUVNLEtBQUs0QixVQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FFTUMsQyxFQUFHO0FBQ2QsVUFBSUMsVUFBVUQsRUFBRUUsYUFBRixDQUFnQkMsRUFBOUI7QUFDQSxVQUFJQyxRQUFRSixFQUFFSyxNQUFGLENBQVNDLEtBQXJCLENBRmMsQ0FFc0I7QUFDcEMsVUFBSUMsUUFBUVAsRUFBRUssTUFBRixDQUFTRyxNQUFyQixDQUhjLENBR3NCO0FBQ3BDLFVBQUlyQyxXQUFXLEtBQUtGLElBQUwsQ0FBVUUsUUFBekIsQ0FKYyxDQUlzQjtBQUNyQztBQUNDLFVBQUlzQyxRQUFRdEMsV0FBV2lDLEtBQXZCLENBTmMsQ0FNdUI7QUFDckMsVUFBSU0sWUFBWUgsUUFBUUUsS0FBeEIsQ0FQYyxDQU9zQjs7QUFFcEMsVUFBSXBDLFNBQVMsS0FBS0osSUFBTCxDQUFVSSxNQUF2QjtBQUNBLFVBQUlzQyxXQUFXLElBQWY7O0FBRUEsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUl2QyxPQUFPd0MsTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3BDLFlBQUlFLE1BQU16QyxPQUFPdUMsQ0FBUCxDQUFWO0FBQ0EsWUFBSUUsSUFBSVgsRUFBSixLQUFXRixPQUFmLEVBQXdCO0FBQ3BCVSxxQkFBV0csR0FBWDtBQUNBO0FBQ0g7QUFDSjs7QUFFREgsZUFBU0gsTUFBVCxHQUFrQkUsU0FBbEI7O0FBRUEsVUFBSXRDLGVBQWUsS0FBS0gsSUFBTCxDQUFVRyxZQUFWLEdBQXlCLENBQTVDO0FBQ0EsVUFBSUUsT0FBTyxLQUFLTCxJQUFMLENBQVVLLElBQXJCO0FBQ0EsVUFBSUMsT0FBTyxLQUFLTixJQUFMLENBQVVNLElBQXJCOztBQUVBLFVBQUlaLFNBQVNDLEtBQWIsRUFBb0I7QUFDaEJELGlCQUFTK0MsU0FBVDtBQUNBcEMsYUFBS3lDLElBQUwsQ0FBVUosUUFBVjtBQUNILE9BSEQsTUFHTztBQUNIL0MsaUJBQVM4QyxTQUFUO0FBQ0FuQyxhQUFLd0MsSUFBTCxDQUFVSixRQUFWO0FBQ0g7O0FBRUQsVUFBSTFDLE9BQU87QUFDUEcsc0JBQWNBLFlBRFA7QUFFUEUsY0FBTUEsSUFGQztBQUdQQyxjQUFNQTtBQUhDLE9BQVg7O0FBTUEsVUFBSSxDQUFDSCxZQUFMLEVBQW1CO0FBQ2ZILGFBQUtJLE1BQUwsR0FBYyxFQUFkO0FBQ0g7O0FBRUQsV0FBS0osSUFBTCxDQUFVRyxZQUFWLEdBQXlCQSxZQUF6QjtBQUNBLFdBQUtILElBQUwsQ0FBVUssSUFBVixHQUFpQkEsSUFBakI7QUFDQSxXQUFLTCxJQUFMLENBQVVNLElBQVYsR0FBaUJBLElBQWpCO0FBQ0EsVUFBRyxDQUFDSCxZQUFKLEVBQWtCO0FBQ2hCLGFBQUtILElBQUwsQ0FBVUksTUFBVixHQUFtQixFQUFuQjtBQUNEOztBQUVGO0FBQ0E7Ozs7Ozs7Ozs7QUFFQztBQUNEO0FBQ0syQyxvQixHQUFPLEk7QUFDUEMsb0IsR0FBTyxFO0FBQ1BBLG9CLEdBQU8sQ0FDVCxFQUFDQyxLQUFLLGdDQUFOLEVBQXdDVixRQUFRLENBQWhELEVBQW1EVyxLQUFJLElBQXZELEVBQTZEQyxRQUFRLFFBQXJFLEVBQStFQyxHQUFHLEtBQWxGLEVBQXlGQyxRQUFRLElBQWpHLEVBRFMsRUFFVCxFQUFDSixLQUFLLDhCQUFOLEVBQXNDVixRQUFRLENBQTlDLEVBQWlEVyxLQUFJLElBQXJELEVBQTJEQyxRQUFRLFFBQW5FLEVBQTZFQyxHQUFHLEtBQWhGLEVBQXVGQyxRQUFRLElBQS9GLEVBRlMsRUFHVCxFQUFDSixLQUFLLDhCQUFOLEVBQXNDVixRQUFRLENBQTlDLEVBQWlEVyxLQUFJLElBQXJELEVBQTJEQyxRQUFRLFFBQW5FLEVBQTZFQyxHQUFHLEtBQWhGLEVBQXVGQyxRQUFRLElBQS9GLEVBSFMsRUFJVCxFQUFDSixLQUFLLGdDQUFOLEVBQXdDVixRQUFRLENBQWhELEVBQW1EVyxLQUFJLElBQXZELEVBQTZEQyxRQUFRLFFBQXJFLEVBQStFQyxHQUFHLEtBQWxGLEVBQXlGQyxRQUFRLElBQWpHLEVBSlMsRUFLVCxFQUFDSixLQUFLLGdDQUFOLEVBQXdDVixRQUFRLENBQWhELEVBQW1EVyxLQUFJLElBQXZELEVBQTZEQyxRQUFRLFFBQXJFLEVBQStFQyxHQUFHLEtBQWxGLEVBQXlGQyxRQUFRLElBQWpHLEVBTFMsQzs7cUJBT1IsS0FBS3pDLFM7Ozs7O0FBQ0YwQyxzQixHQUFTLFNBQVUsQ0FBQyxJQUFJQyxJQUFKLEU7OztBQUV4QixxQkFBU1osQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLElBQUlLLEtBQUtKLE1BQXpCLEVBQWlDRCxHQUFqQyxFQUFzQztBQUNsQ0ssdUJBQUtMLENBQUwsRUFBUVQsRUFBUixHQUFhb0IsU0FBUyxHQUFULEdBQWVYLENBQTVCO0FBQ0g7QUFDRjtBQUNDLHFCQUFLeEMsWUFBTCxHQUFtQjZDLEtBQUtKLE1BQXhCO0FBQ0EscUJBQUt4QyxNQUFMLEdBQWE0QyxJQUFiO0FBQ0Q7QUFDQyxxQkFBS3BDLFNBQUwsR0FBaUIsQ0FBQyxLQUFLQSxTQUF2Qjs7OztBQUdBLHFCQUFLRyxXQUFMOzs7QUFHRW9DLHNCLEdBQVMsS0FBS25DLFVBQUwsSUFBbUIsQ0FBbkIsR0FBdUIsQ0FBdkIsR0FBMkIsQzs7dUJBQ3hCLGNBQUl3QyxXQUFKLENBQWdCO0FBQzlCQyx5QkFBTztBQUNMMUMsaUNBQWEsS0FBS0EsV0FEYjtBQUVMb0MsNEJBQVFBO0FBRkg7QUFEdUIsaUJBQWhCLEM7OztBQUFaTyxtQjs7QUFNTDtBQUNBO0FBQ0Msb0JBQUdBLElBQUkxRCxJQUFKLElBQVkwRCxJQUFJMUQsSUFBSixDQUFTMkQsSUFBVCxJQUFpQixTQUE3QixJQUEwQ0QsSUFBSTFELElBQUosQ0FBU0EsSUFBVCxDQUFjNEMsTUFBM0QsRUFBbUU7QUFDakVJLHlCQUFPVSxJQUFJMUQsSUFBSixDQUFTQSxJQUFoQjtBQUNJNEQsb0JBRjZELEdBRXhELEVBRndEO0FBRzdEQyxvQkFINkQsR0FHeEQsRUFId0Q7QUFJN0RDLG9CQUo2RCxHQUl4RCxFQUp3RDtBQUs3REMscUJBTDZELEdBS3ZELEVBTHVEOztBQU1qRWYsdUJBQUtnQixPQUFMLENBQWEsVUFBU0MsR0FBVCxFQUFjO0FBQ3pCTCx5QkFBSyxFQUFFekMsS0FBTThDLElBQUk5QyxHQUFaLEVBQUw7QUFDQTBDLHlCQUFLSSxJQUFJQyxLQUFUO0FBQ0FMLHVCQUFHTSxVQUFILEdBQWdCRixJQUFJRSxVQUFKLENBQWVDLE9BQWYsQ0FBdUJyQixLQUFLbEMsY0FBNUIsS0FBK0MsQ0FBQyxDQUFoRTtBQUNBZ0QsdUJBQUdaLEdBQUgsR0FBU1ksR0FBR1EsT0FBSCxDQUFXLENBQVgsQ0FBVDtBQUNBUix1QkFBR1EsT0FBSCxHQUFhLEVBQWI7QUFDQVIsdUJBQUd0QixNQUFILEdBQVksQ0FBWjtBQUNBdUIseUJBQUtRLE9BQU9DLE1BQVAsQ0FBY1gsRUFBZCxFQUFrQkMsRUFBbEIsQ0FBTDtBQUNBRSx3QkFBSWpCLElBQUosQ0FBU2dCLEVBQVQ7QUFDRCxtQkFURDtBQVVEO0FBQ0NkLHlCQUFPZSxHQUFQO0FBQ0lULHdCQWxCNkQsR0FrQnBELFNBQVUsQ0FBQyxJQUFJQyxJQUFKLEVBbEJ5Qzs7O0FBb0JqRSx1QkFBU1osQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLElBQUlLLEtBQUtKLE1BQXpCLEVBQWlDRCxHQUFqQyxFQUFzQztBQUNsQ0sseUJBQUtMLENBQUwsRUFBUVQsRUFBUixHQUFhb0IsU0FBUyxHQUFULEdBQWVYLENBQTVCO0FBQ0g7QUFDRjs7QUFFQyx1QkFBS3hDLFlBQUwsR0FBbUI2QyxLQUFLSixNQUF4QjtBQUNBLHVCQUFLeEMsTUFBTCxHQUFhNEMsSUFBYjtBQUNEO0FBQ0E7QUFDRCxpQkE3QkEsTUE2Qk07QUFDTCx1QkFBS2pDLFdBQUw7QUFDRDtBQUNELCtCQUFLeUQsbUJBQUw7QUFDQSxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJSyxLQUFLM0MsVUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTCxxQkFBSzFCLE1BQUwsR0FBYyxFQUFkO0FBQ0EscUJBQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0EscUJBQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0EscUJBQUtTLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtBQUNBOzt1QkFDTSxLQUFLZSxVQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6SzRCLGVBQUs0QyxJOztrQkFBdEI5RSxRIiwiZmlsZSI6Im1haW5QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIHZhciBjb2wxSCA9IDA7XG4gIHZhciBjb2wySCA9IDA7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55u46K+G5LqO55y857yYJyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2Nyb2xsSDogMCxcbiAgICAgIGltZ1dpZHRoOiAwLFxuICAgICAgbG9hZGluZ0NvdW50OiAwLFxuICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgIGNvbDE6IFtdLFxuICAgICAgY29sMjogW10sXG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgdmVyeUZpcnN0OiB0cnVlLFxuICAgICAgY3VycmVudFVzZXJfaWQ6ICcnLFxuICAgICAgcmVxdWlyZWRJbml0OiBmYWxzZSxcbiAgICAgIGN1cnJlbnRQYWdlOiAtMSxcbiAgICAgIHVzZXJHZW5kZXI6ICcnXG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIndlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpOiBcIiArIHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCc/PycgKyB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdyZXF1aXJlSW5pdCcpKTtcbiAgICAgIHRoaXMucmVxdWlyZWRJbml0ID0gd2VweS5nZXRTdG9yYWdlU3luYygncmVxdWlyZUluaXQnKVxuICAgICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgICB0aGlzLnVzZXJHZW5kZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyR2VuZGVyJylcbiAgICAgIHZhciBpbWdXaWR0aCA9IHRoaXMuc2NyZWVuV2lkdGggKiAwLjQ4O1xuICAgICAgdmFyIHNjcm9sbEggPSB0aGlzLnNjcmVlbkhlaWdodDtcblxuICAgICAgdGhpcy5zY3JvbGxIPSBzY3JvbGxIXG4gICAgICB0aGlzLmltZ1dpZHRoPSBpbWdXaWR0aFxuXG4gICAgICBhd2FpdCB0aGlzLmxvYWRJbWFnZXMoKVxuICAgICB9XG4gICAgIG9uSW1hZ2VMb2FkIChlKSB7XG4gICAgICAgdmFyIGltYWdlSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAgdmFyIG9JbWdXID0gZS5kZXRhaWwud2lkdGg7ICAgICAgICAgLy/lm77niYfljp/lp4vlrr3luqZcbiAgICAgICB2YXIgb0ltZ0ggPSBlLmRldGFpbC5oZWlnaHQ7ICAgICAgICAvL+WbvueJh+WOn+Wni+mrmOW6plxuICAgICAgIHZhciBpbWdXaWR0aCA9IHRoaXMuZGF0YS5pbWdXaWR0aDsgIC8v5Zu+54mH6K6+572u55qE5a695bqmXG4gICAgICAvLyAgY29uc29sZS5sb2coJ3RoaXMuZGF0YSA6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKVxuICAgICAgIHZhciBzY2FsZSA9IGltZ1dpZHRoIC8gb0ltZ1c7ICAgICAgICAvL+avlOS+i+iuoeeul1xuICAgICAgIHZhciBpbWdIZWlnaHQgPSBvSW1nSCAqIHNjYWxlOyAgICAgIC8v6Ieq6YCC5bqU6auY5bqmXG5cbiAgICAgICB2YXIgaW1hZ2VzID0gdGhpcy5kYXRhLmltYWdlcztcbiAgICAgICB2YXIgaW1hZ2VPYmogPSBudWxsO1xuXG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgdmFyIGltZyA9IGltYWdlc1tpXTtcbiAgICAgICAgICAgaWYgKGltZy5pZCA9PT0gaW1hZ2VJZCkge1xuICAgICAgICAgICAgICAgaW1hZ2VPYmogPSBpbWc7XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgIGltYWdlT2JqLmhlaWdodCA9IGltZ0hlaWdodDtcblxuICAgICAgIHZhciBsb2FkaW5nQ291bnQgPSB0aGlzLmRhdGEubG9hZGluZ0NvdW50IC0gMTtcbiAgICAgICB2YXIgY29sMSA9IHRoaXMuZGF0YS5jb2wxO1xuICAgICAgIHZhciBjb2wyID0gdGhpcy5kYXRhLmNvbDI7XG5cbiAgICAgICBpZiAoY29sMUggPD0gY29sMkgpIHtcbiAgICAgICAgICAgY29sMUggKz0gaW1nSGVpZ2h0O1xuICAgICAgICAgICBjb2wxLnB1c2goaW1hZ2VPYmopO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIGNvbDJIICs9IGltZ0hlaWdodDtcbiAgICAgICAgICAgY29sMi5wdXNoKGltYWdlT2JqKTtcbiAgICAgICB9XG5cbiAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgbG9hZGluZ0NvdW50OiBsb2FkaW5nQ291bnQsXG4gICAgICAgICAgIGNvbDE6IGNvbDEsXG4gICAgICAgICAgIGNvbDI6IGNvbDJcbiAgICAgICB9O1xuXG4gICAgICAgaWYgKCFsb2FkaW5nQ291bnQpIHtcbiAgICAgICAgICAgZGF0YS5pbWFnZXMgPSBbXTtcbiAgICAgICB9XG5cbiAgICAgICB0aGlzLmRhdGEubG9hZGluZ0NvdW50ID0gbG9hZGluZ0NvdW50XG4gICAgICAgdGhpcy5kYXRhLmNvbDEgPSBjb2wxXG4gICAgICAgdGhpcy5kYXRhLmNvbDIgPSBjb2wyXG4gICAgICAgaWYoIWxvYWRpbmdDb3VudCkge1xuICAgICAgICAgdGhpcy5kYXRhLmltYWdlcyA9IFtdXG4gICAgICAgfVxuXG4gICAgICAvLyAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgICB9XG4gICAgIGFzeW5jIGxvYWRJbWFnZXMgKCkge1xuICAgICAgIC8vIFRPRE86IGhlcmUgd2UgZ29ubmEgbG9hZCBkYXRhXG4gICAgICAvLyAgY29uc29sZS5sb2coJ3NvLi4uLicpO1xuICAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgIHZhciBsaXN0ID0gW11cbiAgICAgICB2YXIgbGlzdCA9IFtcbiAgICAgICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy9zYW1wbGUyLWltZy5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjMnLCB3ZWlnaHQ6ICc0NSd9LFxuICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nL3NhbXBsZS1pbWcuanBnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjEnLCB3ZWlnaHQ6ICc0NSd9LFxuICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nL3NhbXBsZS1pbWcuanBnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjInLCB3ZWlnaHQ6ICc0NSd9LFxuICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nL3NhbXBsZTItaW1nLmpwZWdcIiwgaGVpZ2h0OiAwLCBhZ2U6JzI1JywgZ2VuZGVyOiAnZmVtYWxlJywgaDogJzE2MycsIHdlaWdodDogJzQ1J30sXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvc2FtcGxlMi1pbWcuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYzJywgd2VpZ2h0OiAnNDUnfVxuICAgICAgIF07XG4gICAgICAgaWYodGhpcy52ZXJ5Rmlyc3QpIHtcbiAgICAgICAgIHZhciBiYXNlSWQgPSBcImltZy1cIiArICgrbmV3IERhdGUoKSk7XG5cbiAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgIGxpc3RbaV0uaWQgPSBiYXNlSWQgKyBcIi1cIiArIGk7XG4gICAgICAgICB9XG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnbGlzdDogJyArIEpTT04uc3RyaW5naWZ5KGxpc3QpKVxuICAgICAgICAgdGhpcy5sb2FkaW5nQ291bnQ9IGxpc3QubGVuZ3RoXG4gICAgICAgICB0aGlzLmltYWdlcz0gbGlzdFxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ2ltYWdlczogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VzKSlcbiAgICAgICAgIHRoaXMudmVyeUZpcnN0ID0gIXRoaXMudmVyeUZpcnN0XG4gICAgICAgICByZXR1cm5cbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSsrXG4gICAgICAgfVxuXG4gICAgICAgdmFyIGdlbmRlciA9IHRoaXMudXNlckdlbmRlciA9PSAxID8gMSA6IDFcbiAgICAgICB2YXIgcmVzID0gYXdhaXQgYXBpLnByb2ZpbGVMaXN0KHtcbiAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICBnZW5kZXI6IGdlbmRlclxuICAgICAgICAgfVxuICAgICAgIH0pXG4gICAgICAvLyAgY29uc29sZS5sb2coJ3Jlcy5kYXRhLmRhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS5kYXRhKSk7XG4gICAgICAvLyAgcmV0dXJuXG4gICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycgJiYgcmVzLmRhdGEuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgIGxpc3QgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICB2YXIgbzEgPSB7fVxuICAgICAgICAgdmFyIG8yID0ge31cbiAgICAgICAgIHZhciBvMyA9IHt9XG4gICAgICAgICB2YXIgYXJyID0gW11cbiAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgbzEgPSB7IF9pZCA6IG9iai5faWQgfVxuICAgICAgICAgICBvMiA9IG9iai5pbnRyb1xuICAgICAgICAgICBvMi5zdWJzY3JpYmVkID0gb2JqLnN1YnNjcmliZWQuaW5kZXhPZihzZWxmLmN1cnJlbnRVc2VyX2lkKSAhPSAtMVxuICAgICAgICAgICBvMi5waWMgPSBvMi5pbWdVcmxzWzBdXG4gICAgICAgICAgIG8yLmltZ1VybHMgPSBbXVxuICAgICAgICAgICBvMi5oZWlnaHQgPSAwXG4gICAgICAgICAgIG8zID0gT2JqZWN0LmFzc2lnbihvMSwgbzIpXG4gICAgICAgICAgIGFyci5wdXNoKG8zKVxuICAgICAgICAgfSlcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdvMzogJyArIEpTT04uc3RyaW5naWZ5KGFycikpO1xuICAgICAgICAgbGlzdCA9IGFyclxuICAgICAgICAgdmFyIGJhc2VJZCA9IFwiaW1nLVwiICsgKCtuZXcgRGF0ZSgpKTtcblxuICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgbGlzdFtpXS5pZCA9IGJhc2VJZCArIFwiLVwiICsgaTtcbiAgICAgICAgIH1cbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdsaXN0OiAnICsgSlNPTi5zdHJpbmdpZnkobGlzdCkpXG5cbiAgICAgICAgIHRoaXMubG9hZGluZ0NvdW50PSBsaXN0Lmxlbmd0aFxuICAgICAgICAgdGhpcy5pbWFnZXM9IGxpc3RcbiAgICAgICAgLy8gIHRoaXMuJGFwcGx5KClcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdpbWFnZXM6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmltYWdlcykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLS1cbiAgICAgIH1cbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICAgIGFzeW5jIG9uUmVhY2hCb3R0b20gKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhdCBib3R0b20nKVxuICAgICBhd2FpdCB0aGlzLmxvYWRJbWFnZXMoKVxuICAgIH1cbiAgICBhc3luYyBvblB1bGxEb3duUmVmcmVzaCAoKSB7XG4gICAgICB0aGlzLmltYWdlcyA9IFtdXG4gICAgICB0aGlzLmNvbDEgPSBbXVxuICAgICAgdGhpcy5jb2wyID0gW11cbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAtMVxuICAgICAgLy8gY29uc29sZS5sb2coJ3B1bGwgZG93bicpXG4gICAgICBhd2FpdCB0aGlzLmxvYWRJbWFnZXMoKVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgbmF2aWdhdGUgKF9pZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnX2lkOiAnICsgX2lkKTtcbiAgICAgICAgaWYoX2lkKSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6ICdpbmRpdmlkdWFsUGFnZT9faWQ9JyArIF9pZH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICflk4jllr0nLFxuICAgICAgICAgICAgY29udGVudDogJ+i/meS4quWPquaYr3NhbXBsZe+8jOeci+eci+WFtuS7lueahOWQp+OAgicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmUgKCkge1xuICAgICAgICAvLyAgdmFyIHJlcyA9IGF3YWl0IGFwaS5zdWJzY3JpYmUoe1xuICAgICAgICAvLyAgICBxdWVyeToge1xuICAgICAgICAvLyAgICAgIHBhZ2U6IDBcbiAgICAgICAgLy8gICAgfVxuICAgICAgICAvLyAgfSlcbiAgICAgICAgIC8vXG4gICAgICAgIC8vICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAvLyAgICBsaXN0ID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAvLyAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19