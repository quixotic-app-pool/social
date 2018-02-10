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
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight
    }, _this.methods = {
      navigate: function navigate(_id) {
        _wepy2.default.navigateTo({ url: 'individualPage?id=' + _id });
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
                imgWidth = this.screenWidth * 0.48;
                scrollH = this.screenHeight;


                this.scrollH = scrollH;
                this.imgWidth = imgWidth;

                _context.next = 6;
                return this.loadImages();

              case 6:
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

      this.setData(data);
    }
  }, {
    key: 'loadImages',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var list, baseId, i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //  var res = await api.profileList({
                //    query: {
                //      page: 0
                //    }
                //  })
                //
                //  if(res.data && res.data.flag == 'success') {
                //    list = res.data.data
                //  }
                list = [
                  //  {pic: "../assets/img/1.jpeg", height: 0, age:'25', gender: 'female', h: '161', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                  //  {pic: "../assets/img/2.jpeg", height: 0, age:'25', gender: 'female', h: '162', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                  //  {pic: "../assets/img/3.jpeg", height: 0, age:'25', gender: 'female', h: '163', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                  //  {pic: "../assets/img/4.jpg", height: 0, age:'25', gender: 'female', h: '164', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                  //  {pic: "../assets/img/5.jpg", height: 0, age:'25', gender: 'female', h: '165', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'}
                ];
                // TODO: here we gonna load data
                baseId = "img-" + +new Date();


                for (i = 0; i < list.length; i++) {
                  list[i].id = baseId + "-" + i;
                }

                this.loadingCount = list.length;
                this.images = list;

              case 5:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5QYWdlLmpzIl0sIm5hbWVzIjpbImNvbDFIIiwiY29sMkgiLCJNYWluUGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2Nyb2xsSCIsImltZ1dpZHRoIiwibG9hZGluZ0NvdW50IiwiaW1hZ2VzIiwiY29sMSIsImNvbDIiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJtZXRob2RzIiwibmF2aWdhdGUiLCJfaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic3Vic2NyaWJlIiwibG9hZEltYWdlcyIsImUiLCJpbWFnZUlkIiwiY3VycmVudFRhcmdldCIsImlkIiwib0ltZ1ciLCJkZXRhaWwiLCJ3aWR0aCIsIm9JbWdIIiwiaGVpZ2h0Iiwic2NhbGUiLCJpbWdIZWlnaHQiLCJpbWFnZU9iaiIsImkiLCJsZW5ndGgiLCJpbWciLCJwdXNoIiwic2V0RGF0YSIsImxpc3QiLCJiYXNlSWQiLCJEYXRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRLENBQVo7QUFDQSxJQUFJQyxRQUFRLENBQVo7O0lBQ3FCQyxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxDQURKO0FBRUxDLGdCQUFVLENBRkw7QUFHTEMsb0JBQWMsQ0FIVDtBQUlMQyxjQUFRLEVBSkg7QUFLTEMsWUFBTSxFQUxEO0FBTUxDLFlBQU0sRUFORDtBQU9MQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FQakM7QUFRTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHO0FBUmxDLEssUUE4RlBDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNFQyxHQURGLEVBQ087QUFDYix1QkFBS0MsVUFBTCxDQUFnQixFQUFDQyxLQUFLLHVCQUF1QkYsR0FBN0IsRUFBaEI7QUFDRCxPQUhPO0FBSVJHLGVBSlEsdUJBSUs7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7QUFDRDtBQWRPLEs7Ozs7Ozs7Ozs7OztBQW5GSmYsd0IsR0FBVyxLQUFLSyxXQUFMLEdBQW1CLEk7QUFDOUJOLHVCLEdBQVUsS0FBS1MsWTs7O0FBRW5CLHFCQUFLVCxPQUFMLEdBQWNBLE9BQWQ7QUFDQSxxQkFBS0MsUUFBTCxHQUFlQSxRQUFmOzs7dUJBRU0sS0FBS2dCLFVBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUVNQyxDLEVBQUc7QUFDZCxVQUFJQyxVQUFVRCxFQUFFRSxhQUFGLENBQWdCQyxFQUE5QjtBQUNBLFVBQUlDLFFBQVFKLEVBQUVLLE1BQUYsQ0FBU0MsS0FBckIsQ0FGYyxDQUVzQjtBQUNwQyxVQUFJQyxRQUFRUCxFQUFFSyxNQUFGLENBQVNHLE1BQXJCLENBSGMsQ0FHc0I7QUFDcEMsVUFBSXpCLFdBQVcsS0FBS0YsSUFBTCxDQUFVRSxRQUF6QixDQUpjLENBSXNCO0FBQ3JDO0FBQ0MsVUFBSTBCLFFBQVExQixXQUFXcUIsS0FBdkIsQ0FOYyxDQU11QjtBQUNyQyxVQUFJTSxZQUFZSCxRQUFRRSxLQUF4QixDQVBjLENBT3NCOztBQUVwQyxVQUFJeEIsU0FBUyxLQUFLSixJQUFMLENBQVVJLE1BQXZCO0FBQ0EsVUFBSTBCLFdBQVcsSUFBZjs7QUFFQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSTNCLE9BQU80QixNQUEzQixFQUFtQ0QsR0FBbkMsRUFBd0M7QUFDcEMsWUFBSUUsTUFBTTdCLE9BQU8yQixDQUFQLENBQVY7QUFDQSxZQUFJRSxJQUFJWCxFQUFKLEtBQVdGLE9BQWYsRUFBd0I7QUFDcEJVLHFCQUFXRyxHQUFYO0FBQ0E7QUFDSDtBQUNKOztBQUVESCxlQUFTSCxNQUFULEdBQWtCRSxTQUFsQjs7QUFFQSxVQUFJMUIsZUFBZSxLQUFLSCxJQUFMLENBQVVHLFlBQVYsR0FBeUIsQ0FBNUM7QUFDQSxVQUFJRSxPQUFPLEtBQUtMLElBQUwsQ0FBVUssSUFBckI7QUFDQSxVQUFJQyxPQUFPLEtBQUtOLElBQUwsQ0FBVU0sSUFBckI7O0FBRUEsVUFBSVgsU0FBU0MsS0FBYixFQUFvQjtBQUNoQkQsaUJBQVNrQyxTQUFUO0FBQ0F4QixhQUFLNkIsSUFBTCxDQUFVSixRQUFWO0FBQ0gsT0FIRCxNQUdPO0FBQ0hsQyxpQkFBU2lDLFNBQVQ7QUFDQXZCLGFBQUs0QixJQUFMLENBQVVKLFFBQVY7QUFDSDs7QUFFRCxVQUFJOUIsT0FBTztBQUNQRyxzQkFBY0EsWUFEUDtBQUVQRSxjQUFNQSxJQUZDO0FBR1BDLGNBQU1BO0FBSEMsT0FBWDs7QUFNQSxVQUFJLENBQUNILFlBQUwsRUFBbUI7QUFDZkgsYUFBS0ksTUFBTCxHQUFjLEVBQWQ7QUFDSDs7QUFFRCxXQUFLK0IsT0FBTCxDQUFhbkMsSUFBYjtBQUNEOzs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0NvQyx1QkFBTztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMTSxpQkFBUDtBQVhBO0FBbUJJQyxzQixHQUFTLFNBQVUsQ0FBQyxJQUFJQyxJQUFKLEU7OztBQUV4QixxQkFBU1AsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLElBQUlLLEtBQUtKLE1BQXpCLEVBQWlDRCxHQUFqQyxFQUFzQztBQUNsQ0ssdUJBQUtMLENBQUwsRUFBUVQsRUFBUixHQUFhZSxTQUFTLEdBQVQsR0FBZU4sQ0FBNUI7QUFDSDs7QUFFRCxxQkFBSzVCLFlBQUwsR0FBbUJpQyxLQUFLSixNQUF4QjtBQUNBLHFCQUFLNUIsTUFBTCxHQUFhZ0MsSUFBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhHaUMsZUFBS0csSTs7a0JBQXRCMUMsUSIsImZpbGUiOiJtYWluUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcblxuICBsZXQgY29sMUggPSAwO1xuICBsZXQgY29sMkggPSAwO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebuOivhuS6juecvOe8mCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcm9sbEg6IDAsXG4gICAgICBpbWdXaWR0aDogMCxcbiAgICAgIGxvYWRpbmdDb3VudDogMCxcbiAgICAgIGltYWdlczogW10sXG4gICAgICBjb2wxOiBbXSxcbiAgICAgIGNvbDI6IFtdLFxuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgdmFyIGltZ1dpZHRoID0gdGhpcy5zY3JlZW5XaWR0aCAqIDAuNDg7XG4gICAgICB2YXIgc2Nyb2xsSCA9IHRoaXMuc2NyZWVuSGVpZ2h0O1xuXG4gICAgICB0aGlzLnNjcm9sbEg9IHNjcm9sbEhcbiAgICAgIHRoaXMuaW1nV2lkdGg9IGltZ1dpZHRoXG5cbiAgICAgIGF3YWl0IHRoaXMubG9hZEltYWdlcygpXG4gICAgIH1cbiAgICAgb25JbWFnZUxvYWQgKGUpIHtcbiAgICAgICBsZXQgaW1hZ2VJZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICBsZXQgb0ltZ1cgPSBlLmRldGFpbC53aWR0aDsgICAgICAgICAvL+WbvueJh+WOn+Wni+WuveW6plxuICAgICAgIGxldCBvSW1nSCA9IGUuZGV0YWlsLmhlaWdodDsgICAgICAgIC8v5Zu+54mH5Y6f5aeL6auY5bqmXG4gICAgICAgbGV0IGltZ1dpZHRoID0gdGhpcy5kYXRhLmltZ1dpZHRoOyAgLy/lm77niYforr7nva7nmoTlrr3luqZcbiAgICAgIC8vICBjb25zb2xlLmxvZygndGhpcy5kYXRhIDogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpXG4gICAgICAgbGV0IHNjYWxlID0gaW1nV2lkdGggLyBvSW1nVzsgICAgICAgIC8v5q+U5L6L6K6h566XXG4gICAgICAgbGV0IGltZ0hlaWdodCA9IG9JbWdIICogc2NhbGU7ICAgICAgLy/oh6rpgILlupTpq5jluqZcblxuICAgICAgIGxldCBpbWFnZXMgPSB0aGlzLmRhdGEuaW1hZ2VzO1xuICAgICAgIGxldCBpbWFnZU9iaiA9IG51bGw7XG5cbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICBsZXQgaW1nID0gaW1hZ2VzW2ldO1xuICAgICAgICAgICBpZiAoaW1nLmlkID09PSBpbWFnZUlkKSB7XG4gICAgICAgICAgICAgICBpbWFnZU9iaiA9IGltZztcbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgaW1hZ2VPYmouaGVpZ2h0ID0gaW1nSGVpZ2h0O1xuXG4gICAgICAgbGV0IGxvYWRpbmdDb3VudCA9IHRoaXMuZGF0YS5sb2FkaW5nQ291bnQgLSAxO1xuICAgICAgIGxldCBjb2wxID0gdGhpcy5kYXRhLmNvbDE7XG4gICAgICAgbGV0IGNvbDIgPSB0aGlzLmRhdGEuY29sMjtcblxuICAgICAgIGlmIChjb2wxSCA8PSBjb2wySCkge1xuICAgICAgICAgICBjb2wxSCArPSBpbWdIZWlnaHQ7XG4gICAgICAgICAgIGNvbDEucHVzaChpbWFnZU9iaik7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgY29sMkggKz0gaW1nSGVpZ2h0O1xuICAgICAgICAgICBjb2wyLnB1c2goaW1hZ2VPYmopO1xuICAgICAgIH1cblxuICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICBsb2FkaW5nQ291bnQ6IGxvYWRpbmdDb3VudCxcbiAgICAgICAgICAgY29sMTogY29sMSxcbiAgICAgICAgICAgY29sMjogY29sMlxuICAgICAgIH07XG5cbiAgICAgICBpZiAoIWxvYWRpbmdDb3VudCkge1xuICAgICAgICAgICBkYXRhLmltYWdlcyA9IFtdO1xuICAgICAgIH1cblxuICAgICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcbiAgICAgfVxuICAgICBhc3luYyBsb2FkSW1hZ2VzICgpIHtcbiAgICAgICAvLyBUT0RPOiBoZXJlIHdlIGdvbm5hIGxvYWQgZGF0YVxuICAgICAgIHZhciBsaXN0XG4gICAgICAvLyAgdmFyIHJlcyA9IGF3YWl0IGFwaS5wcm9maWxlTGlzdCh7XG4gICAgICAvLyAgICBxdWVyeToge1xuICAgICAgLy8gICAgICBwYWdlOiAwXG4gICAgICAvLyAgICB9XG4gICAgICAvLyAgfSlcbiAgICAgICAvL1xuICAgICAgLy8gIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAvLyAgICBsaXN0ID0gcmVzLmRhdGEuZGF0YVxuICAgICAgLy8gIH1cbiAgICAgICBsaXN0ID0gW1xuICAgICAgICAvLyAge3BpYzogXCIuLi9hc3NldHMvaW1nLzEuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYxJywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgICAvLyAge3BpYzogXCIuLi9hc3NldHMvaW1nLzIuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYyJywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgICAvLyAge3BpYzogXCIuLi9hc3NldHMvaW1nLzMuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYzJywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgICAvLyAge3BpYzogXCIuLi9hc3NldHMvaW1nLzQuanBnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjQnLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAgIC8vICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvNS5qcGdcIiwgaGVpZ2h0OiAwLCBhZ2U6JzI1JywgZ2VuZGVyOiAnZmVtYWxlJywgaDogJzE2NScsIHdlaWdodDogJzQ1JywgZGVncmVlOiAn56GV5aOrJywgdHlwZTogJ+S6i+S4muWNleS9jScsIGNvbXBhbnk6ICfljZfkuqzluIIqKirljLvpmaInfVxuICAgICAgIF07XG5cbiAgICAgICBsZXQgYmFzZUlkID0gXCJpbWctXCIgKyAoK25ldyBEYXRlKCkpO1xuXG4gICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgIGxpc3RbaV0uaWQgPSBiYXNlSWQgKyBcIi1cIiArIGk7XG4gICAgICAgfVxuXG4gICAgICAgdGhpcy5sb2FkaW5nQ291bnQ9IGxpc3QubGVuZ3RoXG4gICAgICAgdGhpcy5pbWFnZXM9IGxpc3RcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG5hdmlnYXRlIChfaWQpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6ICdpbmRpdmlkdWFsUGFnZT9pZD0nICsgX2lkfSlcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmUgKCkge1xuICAgICAgICAvLyAgdmFyIHJlcyA9IGF3YWl0IGFwaS5zdWJzY3JpYmUoe1xuICAgICAgICAvLyAgICBxdWVyeToge1xuICAgICAgICAvLyAgICAgIHBhZ2U6IDBcbiAgICAgICAgLy8gICAgfVxuICAgICAgICAvLyAgfSlcbiAgICAgICAgIC8vXG4gICAgICAgIC8vICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAvLyAgICBsaXN0ID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAvLyAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19