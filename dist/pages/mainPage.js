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
      navigationBarTitleText: '相识于眼缘'
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
      currrentUser_id: '',
      requiredInit: false
    }, _this.methods = {
      navigate: function navigate(_id) {
        // console.log('_id: ' + _id);
        _wepy2.default.navigateTo({ url: 'individualPage?_id=' + _id });
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
                this.requiredInit = _wepy2.default.getStorageSync('requireInit');
                this.currrentUser_id = _wepy2.default.getStorageSync('UserId');
                imgWidth = this.screenWidth * 0.48;
                scrollH = this.screenHeight;


                this.scrollH = scrollH;
                this.imgWidth = imgWidth;

                _context.next = 8;
                return this.loadImages();

              case 8:
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
        var list, baseId, i, res, o1, o2, o3, arr;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: here we gonna load data
                //  console.log('so....');
                list = [];
                list = [{ pic: "../assets/img/1.jpeg", height: 0, age: '25', gender: 'female', h: '161', weight: '45' }, { pic: "../assets/img/2.jpeg", height: 0, age: '25', gender: 'female', h: '162', weight: '45' }, { pic: "../assets/img/3.jpeg", height: 0, age: '25', gender: 'female', h: '163', weight: '45' }, { pic: "../assets/img/4.jpg", height: 0, age: '25', gender: 'female', h: '163', weight: '45' }];

                if (!this.veryFirst) {
                  _context2.next = 9;
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

              case 9:
                _context2.next = 11;
                return _api2.default.profileList({
                  query: {
                    currentPage: 0,
                    gender: '1'
                  }
                });

              case 11:
                res = _context2.sent;

                //  return
                if (res.data && res.data.flag == 'success') {
                  list = res.data.data;
                  o1 = {};
                  o2 = {};
                  o3 = {};
                  arr = [];

                  list.forEach(function (obj) {
                    o1 = { _id: obj._id };
                    o2 = obj.intro;
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
                }

              case 13:
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
  }]);

  return MainPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MainPage , 'pages/mainPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5QYWdlLmpzIl0sIm5hbWVzIjpbImNvbDFIIiwiY29sMkgiLCJNYWluUGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2Nyb2xsSCIsImltZ1dpZHRoIiwibG9hZGluZ0NvdW50IiwiaW1hZ2VzIiwiY29sMSIsImNvbDIiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJ2ZXJ5Rmlyc3QiLCJjdXJycmVudFVzZXJfaWQiLCJyZXF1aXJlZEluaXQiLCJtZXRob2RzIiwibmF2aWdhdGUiLCJfaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic3Vic2NyaWJlIiwiZ2V0U3RvcmFnZVN5bmMiLCJsb2FkSW1hZ2VzIiwiZSIsImltYWdlSWQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJvSW1nVyIsImRldGFpbCIsIndpZHRoIiwib0ltZ0giLCJoZWlnaHQiLCJzY2FsZSIsImltZ0hlaWdodCIsImltYWdlT2JqIiwiaSIsImxlbmd0aCIsImltZyIsInB1c2giLCJsaXN0IiwicGljIiwiYWdlIiwiZ2VuZGVyIiwiaCIsIndlaWdodCIsImJhc2VJZCIsIkRhdGUiLCJwcm9maWxlTGlzdCIsInF1ZXJ5IiwiY3VycmVudFBhZ2UiLCJyZXMiLCJmbGFnIiwibzEiLCJvMiIsIm8zIiwiYXJyIiwiZm9yRWFjaCIsIm9iaiIsImludHJvIiwiaW1nVXJscyIsIk9iamVjdCIsImFzc2lnbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUSxDQUFaO0FBQ0EsSUFBSUMsUUFBUSxDQUFaOztJQUNxQkMsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FESjtBQUVMQyxnQkFBVSxDQUZM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bUMsSUFBYjtBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdJZ0MsZUFBS3VCLEk7O2tCQUF0QmpFLFEiLCJmaWxlIjoibWFpblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG5cbiAgdmFyIGNvbDFIID0gMDtcbiAgdmFyIGNvbDJIID0gMDtcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm7jor4bkuo7nnLznvJgnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JvbGxIOiAwLFxuICAgICAgaW1nV2lkdGg6IDAsXG4gICAgICBsb2FkaW5nQ291bnQ6IDAsXG4gICAgICBpbWFnZXM6IFtdLFxuICAgICAgY29sMTogW10sXG4gICAgICBjb2wyOiBbXSxcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICB2ZXJ5Rmlyc3Q6IHRydWUsXG4gICAgICBjdXJycmVudFVzZXJfaWQ6ICcnLFxuICAgICAgcmVxdWlyZWRJbml0OiBmYWxzZVxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VySWQnKTogXCIgKyB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VySWQnKSk7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5pdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3JlcXVpcmVJbml0JylcbiAgICAgIHRoaXMuY3VycnJlbnRVc2VyX2lkID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJylcbiAgICAgIHZhciBpbWdXaWR0aCA9IHRoaXMuc2NyZWVuV2lkdGggKiAwLjQ4O1xuICAgICAgdmFyIHNjcm9sbEggPSB0aGlzLnNjcmVlbkhlaWdodDtcblxuICAgICAgdGhpcy5zY3JvbGxIPSBzY3JvbGxIXG4gICAgICB0aGlzLmltZ1dpZHRoPSBpbWdXaWR0aFxuXG4gICAgICBhd2FpdCB0aGlzLmxvYWRJbWFnZXMoKVxuICAgICB9XG4gICAgIG9uSW1hZ2VMb2FkIChlKSB7XG4gICAgICAgdmFyIGltYWdlSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAgdmFyIG9JbWdXID0gZS5kZXRhaWwud2lkdGg7ICAgICAgICAgLy/lm77niYfljp/lp4vlrr3luqZcbiAgICAgICB2YXIgb0ltZ0ggPSBlLmRldGFpbC5oZWlnaHQ7ICAgICAgICAvL+WbvueJh+WOn+Wni+mrmOW6plxuICAgICAgIHZhciBpbWdXaWR0aCA9IHRoaXMuZGF0YS5pbWdXaWR0aDsgIC8v5Zu+54mH6K6+572u55qE5a695bqmXG4gICAgICAvLyAgY29uc29sZS5sb2coJ3RoaXMuZGF0YSA6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKVxuICAgICAgIHZhciBzY2FsZSA9IGltZ1dpZHRoIC8gb0ltZ1c7ICAgICAgICAvL+avlOS+i+iuoeeul1xuICAgICAgIHZhciBpbWdIZWlnaHQgPSBvSW1nSCAqIHNjYWxlOyAgICAgIC8v6Ieq6YCC5bqU6auY5bqmXG5cbiAgICAgICB2YXIgaW1hZ2VzID0gdGhpcy5kYXRhLmltYWdlcztcbiAgICAgICB2YXIgaW1hZ2VPYmogPSBudWxsO1xuXG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgdmFyIGltZyA9IGltYWdlc1tpXTtcbiAgICAgICAgICAgaWYgKGltZy5pZCA9PT0gaW1hZ2VJZCkge1xuICAgICAgICAgICAgICAgaW1hZ2VPYmogPSBpbWc7XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgIGltYWdlT2JqLmhlaWdodCA9IGltZ0hlaWdodDtcblxuICAgICAgIHZhciBsb2FkaW5nQ291bnQgPSB0aGlzLmRhdGEubG9hZGluZ0NvdW50IC0gMTtcbiAgICAgICB2YXIgY29sMSA9IHRoaXMuZGF0YS5jb2wxO1xuICAgICAgIHZhciBjb2wyID0gdGhpcy5kYXRhLmNvbDI7XG5cbiAgICAgICBpZiAoY29sMUggPD0gY29sMkgpIHtcbiAgICAgICAgICAgY29sMUggKz0gaW1nSGVpZ2h0O1xuICAgICAgICAgICBjb2wxLnB1c2goaW1hZ2VPYmopO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIGNvbDJIICs9IGltZ0hlaWdodDtcbiAgICAgICAgICAgY29sMi5wdXNoKGltYWdlT2JqKTtcbiAgICAgICB9XG5cbiAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgbG9hZGluZ0NvdW50OiBsb2FkaW5nQ291bnQsXG4gICAgICAgICAgIGNvbDE6IGNvbDEsXG4gICAgICAgICAgIGNvbDI6IGNvbDJcbiAgICAgICB9O1xuXG4gICAgICAgaWYgKCFsb2FkaW5nQ291bnQpIHtcbiAgICAgICAgICAgZGF0YS5pbWFnZXMgPSBbXTtcbiAgICAgICB9XG5cbiAgICAgICB0aGlzLmRhdGEubG9hZGluZ0NvdW50ID0gbG9hZGluZ0NvdW50XG4gICAgICAgdGhpcy5kYXRhLmNvbDEgPSBjb2wxXG4gICAgICAgdGhpcy5kYXRhLmNvbDIgPSBjb2wyXG4gICAgICAgaWYoIWxvYWRpbmdDb3VudCkge1xuICAgICAgICAgdGhpcy5kYXRhLmltYWdlcyA9IFtdXG4gICAgICAgfVxuXG4gICAgICAvLyAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgICB9XG4gICAgIGFzeW5jIGxvYWRJbWFnZXMgKCkge1xuICAgICAgIC8vIFRPRE86IGhlcmUgd2UgZ29ubmEgbG9hZCBkYXRhXG4gICAgICAvLyAgY29uc29sZS5sb2coJ3NvLi4uLicpO1xuICAgICAgIHZhciBsaXN0ID0gW11cbiAgICAgICB2YXIgbGlzdCA9IFtcbiAgICAgICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy8xLmpwZWdcIiwgaGVpZ2h0OiAwLCBhZ2U6JzI1JywgZ2VuZGVyOiAnZmVtYWxlJywgaDogJzE2MScsIHdlaWdodDogJzQ1J30sXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvMi5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjInLCB3ZWlnaHQ6ICc0NSd9LFxuICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nLzMuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYzJywgd2VpZ2h0OiAnNDUnfSxcbiAgICAgICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy80LmpwZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYzJywgd2VpZ2h0OiAnNDUnfVxuICAgICAgIF07XG4gICAgICAgaWYodGhpcy52ZXJ5Rmlyc3QpIHtcbiAgICAgICAgIHZhciBiYXNlSWQgPSBcImltZy1cIiArICgrbmV3IERhdGUoKSk7XG5cbiAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgIGxpc3RbaV0uaWQgPSBiYXNlSWQgKyBcIi1cIiArIGk7XG4gICAgICAgICB9XG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnbGlzdDogJyArIEpTT04uc3RyaW5naWZ5KGxpc3QpKVxuICAgICAgICAgdGhpcy5sb2FkaW5nQ291bnQ9IGxpc3QubGVuZ3RoXG4gICAgICAgICB0aGlzLmltYWdlcz0gbGlzdFxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ2ltYWdlczogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VzKSlcbiAgICAgICAgIHRoaXMudmVyeUZpcnN0ID0gIXRoaXMudmVyeUZpcnN0XG4gICAgICAgICByZXR1cm5cbiAgICAgICB9XG5cbiAgICAgICB2YXIgcmVzID0gYXdhaXQgYXBpLnByb2ZpbGVMaXN0KHtcbiAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgICAgICAgICBnZW5kZXI6ICcxJ1xuICAgICAgICAgfVxuICAgICAgIH0pXG4gICAgICAvLyAgcmV0dXJuXG4gICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgIGxpc3QgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICB2YXIgbzEgPSB7fVxuICAgICAgICAgdmFyIG8yID0ge31cbiAgICAgICAgIHZhciBvMyA9IHt9XG4gICAgICAgICB2YXIgYXJyID0gW11cbiAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgbzEgPSB7IF9pZCA6IG9iai5faWQgfVxuICAgICAgICAgICBvMiA9IG9iai5pbnRyb1xuICAgICAgICAgICBvMi5waWMgPSBvMi5pbWdVcmxzWzBdXG4gICAgICAgICAgIG8yLmltZ1VybHMgPSBbXVxuICAgICAgICAgICBvMi5oZWlnaHQgPSAwXG4gICAgICAgICAgIG8zID0gT2JqZWN0LmFzc2lnbihvMSwgbzIpXG4gICAgICAgICAgIGFyci5wdXNoKG8zKVxuICAgICAgICAgfSlcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdvMzogJyArIEpTT04uc3RyaW5naWZ5KGFycikpO1xuICAgICAgICAgbGlzdCA9IGFyclxuICAgICAgICAgdmFyIGJhc2VJZCA9IFwiaW1nLVwiICsgKCtuZXcgRGF0ZSgpKTtcblxuICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgbGlzdFtpXS5pZCA9IGJhc2VJZCArIFwiLVwiICsgaTtcbiAgICAgICAgIH1cbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdsaXN0OiAnICsgSlNPTi5zdHJpbmdpZnkobGlzdCkpXG5cbiAgICAgICAgIHRoaXMubG9hZGluZ0NvdW50PSBsaXN0Lmxlbmd0aFxuICAgICAgICAgdGhpcy5pbWFnZXM9IGxpc3RcbiAgICAgICAgLy8gIHRoaXMuJGFwcGx5KClcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdpbWFnZXM6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmltYWdlcykpXG4gICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgbmF2aWdhdGUgKF9pZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnX2lkOiAnICsgX2lkKTtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6ICdpbmRpdmlkdWFsUGFnZT9faWQ9JyArIF9pZH0pXG4gICAgICB9LFxuICAgICAgc3Vic2NyaWJlICgpIHtcbiAgICAgICAgLy8gIHZhciByZXMgPSBhd2FpdCBhcGkuc3Vic2NyaWJlKHtcbiAgICAgICAgLy8gICAgcXVlcnk6IHtcbiAgICAgICAgLy8gICAgICBwYWdlOiAwXG4gICAgICAgIC8vICAgIH1cbiAgICAgICAgLy8gIH0pXG4gICAgICAgICAvL1xuICAgICAgICAvLyAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgLy8gICAgbGlzdCA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgLy8gIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==