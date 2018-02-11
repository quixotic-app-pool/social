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
      currrentUser_id: ''
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
                this.currrentUser_id = _wepy2.default.getStorageSync('UserId');
                imgWidth = this.screenWidth * 0.48;
                scrollH = this.screenHeight;


                this.scrollH = scrollH;
                this.imgWidth = imgWidth;

                _context.next = 7;
                return this.loadImages();

              case 7:
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
                list = [{ pic: "../assets/img/1.jpeg", height: 0, age: '25', gender: 'female', h: '161', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/2.jpeg", height: 0, age: '25', gender: 'female', h: '162', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/3.jpeg", height: 0, age: '25', gender: 'female', h: '163', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/4.jpg", height: 0, age: '25', gender: 'female', h: '163', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5QYWdlLmpzIl0sIm5hbWVzIjpbImNvbDFIIiwiY29sMkgiLCJNYWluUGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2Nyb2xsSCIsImltZ1dpZHRoIiwibG9hZGluZ0NvdW50IiwiaW1hZ2VzIiwiY29sMSIsImNvbDIiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJ2ZXJ5Rmlyc3QiLCJjdXJycmVudFVzZXJfaWQiLCJtZXRob2RzIiwibmF2aWdhdGUiLCJfaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic3Vic2NyaWJlIiwiZ2V0U3RvcmFnZVN5bmMiLCJsb2FkSW1hZ2VzIiwiZSIsImltYWdlSWQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJvSW1nVyIsImRldGFpbCIsIndpZHRoIiwib0ltZ0giLCJoZWlnaHQiLCJzY2FsZSIsImltZ0hlaWdodCIsImltYWdlT2JqIiwiaSIsImxlbmd0aCIsImltZyIsInB1c2giLCJsaXN0IiwicGljIiwiYWdlIiwiZ2VuZGVyIiwiaCIsIndlaWdodCIsImRlZ3JlZSIsInR5cGUiLCJjb21wYW55IiwiYmFzZUlkIiwiRGF0ZSIsInByb2ZpbGVMaXN0IiwicXVlcnkiLCJjdXJyZW50UGFnZSIsInJlcyIsImZsYWciLCJvMSIsIm8yIiwibzMiLCJhcnIiLCJmb3JFYWNoIiwib2JqIiwiaW50cm8iLCJpbWdVcmxzIiwiT2JqZWN0IiwiYXNzaWduIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRLENBQVo7QUFDQSxJQUFJQyxRQUFRLENBQVo7O0lBQ3FCQyxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxDQURKO0FBRUxD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S0FBS0gsTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ2xDSSx5QkFBS0osQ0FBTCxFQUFRVCxFQUFSLEdBQWFzQixTQUFTLEdBQVQsR0FBZWIsQ0FBNUI7QUFDSDtBQUNGOztBQUVDLHVCQUFLL0IsWUFBTCxHQUFtQm1DLEtBQUtILE1BQXhCO0FBQ0EsdUJBQUsvQixNQUFMLEdBQWFrQyxJQUFiO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0lnQyxlQUFLMEIsSTs7a0JBQXRCbkUsUSIsImZpbGUiOiJtYWluUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcblxuICB2YXIgY29sMUggPSAwO1xuICB2YXIgY29sMkggPSAwO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebuOivhuS6juecvOe8mCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcm9sbEg6IDAsXG4gICAgICBpbWdXaWR0aDogMCxcbiAgICAgIGxvYWRpbmdDb3VudDogMCxcbiAgICAgIGltYWdlczogW10sXG4gICAgICBjb2wxOiBbXSxcbiAgICAgIGNvbDI6IFtdLFxuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIHZlcnlGaXJzdDogdHJ1ZSxcbiAgICAgIGN1cnJyZW50VXNlcl9pZDogJydcbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkICgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwid2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJyk6IFwiICsgd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJykpO1xuICAgICAgdGhpcy5jdXJycmVudFVzZXJfaWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VySWQnKVxuICAgICAgdmFyIGltZ1dpZHRoID0gdGhpcy5zY3JlZW5XaWR0aCAqIDAuNDg7XG4gICAgICB2YXIgc2Nyb2xsSCA9IHRoaXMuc2NyZWVuSGVpZ2h0O1xuXG4gICAgICB0aGlzLnNjcm9sbEg9IHNjcm9sbEhcbiAgICAgIHRoaXMuaW1nV2lkdGg9IGltZ1dpZHRoXG5cbiAgICAgIGF3YWl0IHRoaXMubG9hZEltYWdlcygpXG4gICAgIH1cbiAgICAgb25JbWFnZUxvYWQgKGUpIHtcbiAgICAgICB2YXIgaW1hZ2VJZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICB2YXIgb0ltZ1cgPSBlLmRldGFpbC53aWR0aDsgICAgICAgICAvL+WbvueJh+WOn+Wni+WuveW6plxuICAgICAgIHZhciBvSW1nSCA9IGUuZGV0YWlsLmhlaWdodDsgICAgICAgIC8v5Zu+54mH5Y6f5aeL6auY5bqmXG4gICAgICAgdmFyIGltZ1dpZHRoID0gdGhpcy5kYXRhLmltZ1dpZHRoOyAgLy/lm77niYforr7nva7nmoTlrr3luqZcbiAgICAgIC8vICBjb25zb2xlLmxvZygndGhpcy5kYXRhIDogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpXG4gICAgICAgdmFyIHNjYWxlID0gaW1nV2lkdGggLyBvSW1nVzsgICAgICAgIC8v5q+U5L6L6K6h566XXG4gICAgICAgdmFyIGltZ0hlaWdodCA9IG9JbWdIICogc2NhbGU7ICAgICAgLy/oh6rpgILlupTpq5jluqZcblxuICAgICAgIHZhciBpbWFnZXMgPSB0aGlzLmRhdGEuaW1hZ2VzO1xuICAgICAgIHZhciBpbWFnZU9iaiA9IG51bGw7XG5cbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICB2YXIgaW1nID0gaW1hZ2VzW2ldO1xuICAgICAgICAgICBpZiAoaW1nLmlkID09PSBpbWFnZUlkKSB7XG4gICAgICAgICAgICAgICBpbWFnZU9iaiA9IGltZztcbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgaW1hZ2VPYmouaGVpZ2h0ID0gaW1nSGVpZ2h0O1xuXG4gICAgICAgdmFyIGxvYWRpbmdDb3VudCA9IHRoaXMuZGF0YS5sb2FkaW5nQ291bnQgLSAxO1xuICAgICAgIHZhciBjb2wxID0gdGhpcy5kYXRhLmNvbDE7XG4gICAgICAgdmFyIGNvbDIgPSB0aGlzLmRhdGEuY29sMjtcblxuICAgICAgIGlmIChjb2wxSCA8PSBjb2wySCkge1xuICAgICAgICAgICBjb2wxSCArPSBpbWdIZWlnaHQ7XG4gICAgICAgICAgIGNvbDEucHVzaChpbWFnZU9iaik7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgY29sMkggKz0gaW1nSGVpZ2h0O1xuICAgICAgICAgICBjb2wyLnB1c2goaW1hZ2VPYmopO1xuICAgICAgIH1cblxuICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICBsb2FkaW5nQ291bnQ6IGxvYWRpbmdDb3VudCxcbiAgICAgICAgICAgY29sMTogY29sMSxcbiAgICAgICAgICAgY29sMjogY29sMlxuICAgICAgIH07XG5cbiAgICAgICBpZiAoIWxvYWRpbmdDb3VudCkge1xuICAgICAgICAgICBkYXRhLmltYWdlcyA9IFtdO1xuICAgICAgIH1cblxuICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nQ291bnQgPSBsb2FkaW5nQ291bnRcbiAgICAgICB0aGlzLmRhdGEuY29sMSA9IGNvbDFcbiAgICAgICB0aGlzLmRhdGEuY29sMiA9IGNvbDJcbiAgICAgICBpZighbG9hZGluZ0NvdW50KSB7XG4gICAgICAgICB0aGlzLmRhdGEuaW1hZ2VzID0gW11cbiAgICAgICB9XG5cbiAgICAgIC8vICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgIH1cbiAgICAgYXN5bmMgbG9hZEltYWdlcyAoKSB7XG4gICAgICAgLy8gVE9ETzogaGVyZSB3ZSBnb25uYSBsb2FkIGRhdGFcbiAgICAgIC8vICBjb25zb2xlLmxvZygnc28uLi4uJyk7XG4gICAgICAgdmFyIGxpc3QgPSBbXVxuICAgICAgIHZhciBsaXN0ID0gW1xuICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nLzEuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYxJywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nLzIuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYyJywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nLzMuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYzJywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nLzQuanBnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjMnLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ31cbiAgICAgICBdO1xuICAgICAgIGlmKHRoaXMudmVyeUZpcnN0KSB7XG4gICAgICAgICB2YXIgYmFzZUlkID0gXCJpbWctXCIgKyAoK25ldyBEYXRlKCkpO1xuXG4gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICBsaXN0W2ldLmlkID0gYmFzZUlkICsgXCItXCIgKyBpO1xuICAgICAgICAgfVxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ2xpc3Q6ICcgKyBKU09OLnN0cmluZ2lmeShsaXN0KSlcbiAgICAgICAgIHRoaXMubG9hZGluZ0NvdW50PSBsaXN0Lmxlbmd0aFxuICAgICAgICAgdGhpcy5pbWFnZXM9IGxpc3RcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdpbWFnZXM6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmltYWdlcykpXG4gICAgICAgICB0aGlzLnZlcnlGaXJzdCA9ICF0aGlzLnZlcnlGaXJzdFxuICAgICAgICAgcmV0dXJuXG4gICAgICAgfVxuXG4gICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5wcm9maWxlTGlzdCh7XG4gICAgICAgICBxdWVyeToge1xuICAgICAgICAgICBjdXJyZW50UGFnZTogMCxcbiAgICAgICAgICAgZ2VuZGVyOiAnMSdcbiAgICAgICAgIH1cbiAgICAgICB9KVxuICAgICAgLy8gIHJldHVyblxuICAgICAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICBsaXN0ID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgdmFyIG8xID0ge31cbiAgICAgICAgIHZhciBvMiA9IHt9XG4gICAgICAgICB2YXIgbzMgPSB7fVxuICAgICAgICAgdmFyIGFyciA9IFtdXG4gICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgIG8xID0geyBfaWQgOiBvYmouX2lkIH1cbiAgICAgICAgICAgbzIgPSBvYmouaW50cm9cbiAgICAgICAgICAgbzIucGljID0gbzIuaW1nVXJsc1swXVxuICAgICAgICAgICBvMi5pbWdVcmxzID0gW11cbiAgICAgICAgICAgbzIuaGVpZ2h0ID0gMFxuICAgICAgICAgICBvMyA9IE9iamVjdC5hc3NpZ24obzEsIG8yKVxuICAgICAgICAgICBhcnIucHVzaChvMylcbiAgICAgICAgIH0pXG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnbzM6ICcgKyBKU09OLnN0cmluZ2lmeShhcnIpKTtcbiAgICAgICAgIGxpc3QgPSBhcnJcbiAgICAgICAgIHZhciBiYXNlSWQgPSBcImltZy1cIiArICgrbmV3IERhdGUoKSk7XG5cbiAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgIGxpc3RbaV0uaWQgPSBiYXNlSWQgKyBcIi1cIiArIGk7XG4gICAgICAgICB9XG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnbGlzdDogJyArIEpTT04uc3RyaW5naWZ5KGxpc3QpKVxuXG4gICAgICAgICB0aGlzLmxvYWRpbmdDb3VudD0gbGlzdC5sZW5ndGhcbiAgICAgICAgIHRoaXMuaW1hZ2VzPSBsaXN0XG4gICAgICAgIC8vICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnaW1hZ2VzOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5pbWFnZXMpKVxuICAgICAgIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG5hdmlnYXRlIChfaWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ19pZDogJyArIF9pZCk7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7dXJsOiAnaW5kaXZpZHVhbFBhZ2U/X2lkPScgKyBfaWR9KVxuICAgICAgfSxcbiAgICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIC8vICB2YXIgcmVzID0gYXdhaXQgYXBpLnN1YnNjcmliZSh7XG4gICAgICAgIC8vICAgIHF1ZXJ5OiB7XG4gICAgICAgIC8vICAgICAgcGFnZTogMFxuICAgICAgICAvLyAgICB9XG4gICAgICAgIC8vICB9KVxuICAgICAgICAgLy9cbiAgICAgICAgLy8gIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIC8vICAgIGxpc3QgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgIC8vICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=