'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      navigate: function navigate() {
        _wepy2.default.navigateTo({ url: 'individualPage' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MainPage, [{
    key: 'onLoad',
    value: function onLoad() {
      var imgWidth = this.screenWidth * 0.48;
      var scrollH = this.screenHeight;

      this.scrollH = scrollH;
      this.imgWidth = imgWidth;

      this.loadImages();
    }
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
    value: function loadImages() {
      // TODO: here we gonna load data
      //  {pic: "../assets/img/1.jpeg", height: 0, gender: 'female', height: '165', weight: '45', degree: '硕士', type: '事业单位', company: '南京市鼓楼医院'}
      var images = [{ pic: "../assets/img/1.jpeg", height: 0, age: '25', gender: 'female', h: '161', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/2.jpeg", height: 0, age: '25', gender: 'female', h: '162', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/3.jpeg", height: 0, age: '25', gender: 'female', h: '163', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/4.jpg", height: 0, age: '25', gender: 'female', h: '164', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/5.jpg", height: 0, age: '25', gender: 'female', h: '165', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }];

      var baseId = "img-" + +new Date();

      for (var i = 0; i < images.length; i++) {
        images[i].id = baseId + "-" + i;
      }

      this.loadingCount = images.length;
      this.images = images;
    }
  }]);

  return MainPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MainPage , 'pages/mainPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5QYWdlLmpzIl0sIm5hbWVzIjpbImNvbDFIIiwiY29sMkgiLCJNYWluUGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2Nyb2xsSCIsImltZ1dpZHRoIiwibG9hZGluZ0NvdW50IiwiaW1hZ2VzIiwiY29sMSIsImNvbDIiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJtZXRob2RzIiwibmF2aWdhdGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwibG9hZEltYWdlcyIsImUiLCJpbWFnZUlkIiwiY3VycmVudFRhcmdldCIsImlkIiwib0ltZ1ciLCJkZXRhaWwiLCJ3aWR0aCIsIm9JbWdIIiwiaGVpZ2h0Iiwic2NhbGUiLCJpbWdIZWlnaHQiLCJpbWFnZU9iaiIsImkiLCJsZW5ndGgiLCJpbWciLCJwdXNoIiwic2V0RGF0YSIsInBpYyIsImFnZSIsImdlbmRlciIsImgiLCJ3ZWlnaHQiLCJkZWdyZWUiLCJ0eXBlIiwiY29tcGFueSIsImJhc2VJZCIsIkRhdGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsUUFBUSxDQUFaO0FBQ0EsSUFBSUMsUUFBUSxDQUFaOztJQUNxQkMsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FESjtBQUVMQyxnQkFBVSxDQUZMO0FBR0xDLG9CQUFjLENBSFQ7QUFJTEMsY0FBUSxFQUpIO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxZQUFNLEVBTkQ7QUFPTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBUGpDO0FBUUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRztBQVJsQyxLLFFBc0ZQQyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDSTtBQUNWLHVCQUFLQyxVQUFMLENBQWdCLEVBQUNDLEtBQUssZ0JBQU4sRUFBaEI7QUFDRDtBQUhPLEs7Ozs7OzZCQTVFQTtBQUNSLFVBQUliLFdBQVcsS0FBS0ssV0FBTCxHQUFtQixJQUFsQztBQUNBLFVBQUlOLFVBQVUsS0FBS1MsWUFBbkI7O0FBRUEsV0FBS1QsT0FBTCxHQUFjQSxPQUFkO0FBQ0EsV0FBS0MsUUFBTCxHQUFlQSxRQUFmOztBQUVBLFdBQUtjLFVBQUw7QUFDQTs7O2dDQUNZQyxDLEVBQUc7QUFDZCxVQUFJQyxVQUFVRCxFQUFFRSxhQUFGLENBQWdCQyxFQUE5QjtBQUNBLFVBQUlDLFFBQVFKLEVBQUVLLE1BQUYsQ0FBU0MsS0FBckIsQ0FGYyxDQUVzQjtBQUNwQyxVQUFJQyxRQUFRUCxFQUFFSyxNQUFGLENBQVNHLE1BQXJCLENBSGMsQ0FHc0I7QUFDcEMsVUFBSXZCLFdBQVcsS0FBS0YsSUFBTCxDQUFVRSxRQUF6QixDQUpjLENBSXNCO0FBQ3JDO0FBQ0MsVUFBSXdCLFFBQVF4QixXQUFXbUIsS0FBdkIsQ0FOYyxDQU11QjtBQUNyQyxVQUFJTSxZQUFZSCxRQUFRRSxLQUF4QixDQVBjLENBT3NCOztBQUVwQyxVQUFJdEIsU0FBUyxLQUFLSixJQUFMLENBQVVJLE1BQXZCO0FBQ0EsVUFBSXdCLFdBQVcsSUFBZjs7QUFFQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSXpCLE9BQU8wQixNQUEzQixFQUFtQ0QsR0FBbkMsRUFBd0M7QUFDcEMsWUFBSUUsTUFBTTNCLE9BQU95QixDQUFQLENBQVY7QUFDQSxZQUFJRSxJQUFJWCxFQUFKLEtBQVdGLE9BQWYsRUFBd0I7QUFDcEJVLHFCQUFXRyxHQUFYO0FBQ0E7QUFDSDtBQUNKOztBQUVESCxlQUFTSCxNQUFULEdBQWtCRSxTQUFsQjs7QUFFQSxVQUFJeEIsZUFBZSxLQUFLSCxJQUFMLENBQVVHLFlBQVYsR0FBeUIsQ0FBNUM7QUFDQSxVQUFJRSxPQUFPLEtBQUtMLElBQUwsQ0FBVUssSUFBckI7QUFDQSxVQUFJQyxPQUFPLEtBQUtOLElBQUwsQ0FBVU0sSUFBckI7O0FBRUEsVUFBSVgsU0FBU0MsS0FBYixFQUFvQjtBQUNoQkQsaUJBQVNnQyxTQUFUO0FBQ0F0QixhQUFLMkIsSUFBTCxDQUFVSixRQUFWO0FBQ0gsT0FIRCxNQUdPO0FBQ0hoQyxpQkFBUytCLFNBQVQ7QUFDQXJCLGFBQUswQixJQUFMLENBQVVKLFFBQVY7QUFDSDs7QUFFRCxVQUFJNUIsT0FBTztBQUNQRyxzQkFBY0EsWUFEUDtBQUVQRSxjQUFNQSxJQUZDO0FBR1BDLGNBQU1BO0FBSEMsT0FBWDs7QUFNQSxVQUFJLENBQUNILFlBQUwsRUFBbUI7QUFDZkgsYUFBS0ksTUFBTCxHQUFjLEVBQWQ7QUFDSDs7QUFFRCxXQUFLNkIsT0FBTCxDQUFhakMsSUFBYjtBQUNEOzs7aUNBQ2E7QUFDWjtBQUNEO0FBQ0MsVUFBSUksU0FBUyxDQUNYLEVBQUM4QixLQUFLLHNCQUFOLEVBQThCVCxRQUFRLENBQXRDLEVBQXlDVSxLQUFJLElBQTdDLEVBQW1EQyxRQUFRLFFBQTNELEVBQXFFQyxHQUFHLEtBQXhFLEVBQStFQyxRQUFRLElBQXZGLEVBQTZGQyxRQUFRLElBQXJHLEVBQTJHQyxNQUFNLE1BQWpILEVBQXlIQyxTQUFTLFVBQWxJLEVBRFcsRUFFWCxFQUFDUCxLQUFLLHNCQUFOLEVBQThCVCxRQUFRLENBQXRDLEVBQXlDVSxLQUFJLElBQTdDLEVBQW1EQyxRQUFRLFFBQTNELEVBQXFFQyxHQUFHLEtBQXhFLEVBQStFQyxRQUFRLElBQXZGLEVBQTZGQyxRQUFRLElBQXJHLEVBQTJHQyxNQUFNLE1BQWpILEVBQXlIQyxTQUFTLFVBQWxJLEVBRlcsRUFHWCxFQUFDUCxLQUFLLHNCQUFOLEVBQThCVCxRQUFRLENBQXRDLEVBQXlDVSxLQUFJLElBQTdDLEVBQW1EQyxRQUFRLFFBQTNELEVBQXFFQyxHQUFHLEtBQXhFLEVBQStFQyxRQUFRLElBQXZGLEVBQTZGQyxRQUFRLElBQXJHLEVBQTJHQyxNQUFNLE1BQWpILEVBQXlIQyxTQUFTLFVBQWxJLEVBSFcsRUFJWCxFQUFDUCxLQUFLLHFCQUFOLEVBQTZCVCxRQUFRLENBQXJDLEVBQXdDVSxLQUFJLElBQTVDLEVBQWtEQyxRQUFRLFFBQTFELEVBQW9FQyxHQUFHLEtBQXZFLEVBQThFQyxRQUFRLElBQXRGLEVBQTRGQyxRQUFRLElBQXBHLEVBQTBHQyxNQUFNLE1BQWhILEVBQXdIQyxTQUFTLFVBQWpJLEVBSlcsRUFLWCxFQUFDUCxLQUFLLHFCQUFOLEVBQTZCVCxRQUFRLENBQXJDLEVBQXdDVSxLQUFJLElBQTVDLEVBQWtEQyxRQUFRLFFBQTFELEVBQW9FQyxHQUFHLEtBQXZFLEVBQThFQyxRQUFRLElBQXRGLEVBQTRGQyxRQUFRLElBQXBHLEVBQTBHQyxNQUFNLE1BQWhILEVBQXdIQyxTQUFTLFVBQWpJLEVBTFcsQ0FBYjs7QUFRQSxVQUFJQyxTQUFTLFNBQVUsQ0FBQyxJQUFJQyxJQUFKLEVBQXhCOztBQUVBLFdBQUssSUFBSWQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJekIsT0FBTzBCLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUNwQ3pCLGVBQU95QixDQUFQLEVBQVVULEVBQVYsR0FBZXNCLFNBQVMsR0FBVCxHQUFlYixDQUE5QjtBQUNIOztBQUdELFdBQUsxQixZQUFMLEdBQW1CQyxPQUFPMEIsTUFBMUI7QUFDQSxXQUFLMUIsTUFBTCxHQUFhQSxNQUFiO0FBQ0Y7Ozs7RUF6Rm1DLGVBQUt3QyxJOztrQkFBdEIvQyxRIiwiZmlsZSI6Im1haW5QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGxldCBjb2wxSCA9IDA7XG4gIGxldCBjb2wySCA9IDA7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55u46K+G5LqO55y857yYJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2Nyb2xsSDogMCxcbiAgICAgIGltZ1dpZHRoOiAwLFxuICAgICAgbG9hZGluZ0NvdW50OiAwLFxuICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgIGNvbDE6IFtdLFxuICAgICAgY29sMjogW10sXG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0XG4gICAgfVxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB2YXIgaW1nV2lkdGggPSB0aGlzLnNjcmVlbldpZHRoICogMC40ODtcbiAgICAgIHZhciBzY3JvbGxIID0gdGhpcy5zY3JlZW5IZWlnaHQ7XG5cbiAgICAgIHRoaXMuc2Nyb2xsSD0gc2Nyb2xsSFxuICAgICAgdGhpcy5pbWdXaWR0aD0gaW1nV2lkdGhcblxuICAgICAgdGhpcy5sb2FkSW1hZ2VzKClcbiAgICAgfVxuICAgICBvbkltYWdlTG9hZCAoZSkge1xuICAgICAgIGxldCBpbWFnZUlkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgIGxldCBvSW1nVyA9IGUuZGV0YWlsLndpZHRoOyAgICAgICAgIC8v5Zu+54mH5Y6f5aeL5a695bqmXG4gICAgICAgbGV0IG9JbWdIID0gZS5kZXRhaWwuaGVpZ2h0OyAgICAgICAgLy/lm77niYfljp/lp4vpq5jluqZcbiAgICAgICBsZXQgaW1nV2lkdGggPSB0aGlzLmRhdGEuaW1nV2lkdGg7ICAvL+WbvueJh+iuvue9rueahOWuveW6plxuICAgICAgLy8gIGNvbnNvbGUubG9nKCd0aGlzLmRhdGEgOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSlcbiAgICAgICBsZXQgc2NhbGUgPSBpbWdXaWR0aCAvIG9JbWdXOyAgICAgICAgLy/mr5TkvovorqHnrpdcbiAgICAgICBsZXQgaW1nSGVpZ2h0ID0gb0ltZ0ggKiBzY2FsZTsgICAgICAvL+iHqumAguW6lOmrmOW6plxuXG4gICAgICAgbGV0IGltYWdlcyA9IHRoaXMuZGF0YS5pbWFnZXM7XG4gICAgICAgbGV0IGltYWdlT2JqID0gbnVsbDtcblxuICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgIGxldCBpbWcgPSBpbWFnZXNbaV07XG4gICAgICAgICAgIGlmIChpbWcuaWQgPT09IGltYWdlSWQpIHtcbiAgICAgICAgICAgICAgIGltYWdlT2JqID0gaW1nO1xuICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICBpbWFnZU9iai5oZWlnaHQgPSBpbWdIZWlnaHQ7XG5cbiAgICAgICBsZXQgbG9hZGluZ0NvdW50ID0gdGhpcy5kYXRhLmxvYWRpbmdDb3VudCAtIDE7XG4gICAgICAgbGV0IGNvbDEgPSB0aGlzLmRhdGEuY29sMTtcbiAgICAgICBsZXQgY29sMiA9IHRoaXMuZGF0YS5jb2wyO1xuXG4gICAgICAgaWYgKGNvbDFIIDw9IGNvbDJIKSB7XG4gICAgICAgICAgIGNvbDFIICs9IGltZ0hlaWdodDtcbiAgICAgICAgICAgY29sMS5wdXNoKGltYWdlT2JqKTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBjb2wySCArPSBpbWdIZWlnaHQ7XG4gICAgICAgICAgIGNvbDIucHVzaChpbWFnZU9iaik7XG4gICAgICAgfVxuXG4gICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgIGxvYWRpbmdDb3VudDogbG9hZGluZ0NvdW50LFxuICAgICAgICAgICBjb2wxOiBjb2wxLFxuICAgICAgICAgICBjb2wyOiBjb2wyXG4gICAgICAgfTtcblxuICAgICAgIGlmICghbG9hZGluZ0NvdW50KSB7XG4gICAgICAgICAgIGRhdGEuaW1hZ2VzID0gW107XG4gICAgICAgfVxuXG4gICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgICB9XG4gICAgIGxvYWRJbWFnZXMgKCkge1xuICAgICAgIC8vIFRPRE86IGhlcmUgd2UgZ29ubmEgbG9hZCBkYXRhXG4gICAgICAvLyAge3BpYzogXCIuLi9hc3NldHMvaW1nLzEuanBlZ1wiLCBoZWlnaHQ6IDAsIGdlbmRlcjogJ2ZlbWFsZScsIGhlaWdodDogJzE2NScsIHdlaWdodDogJzQ1JywgZGVncmVlOiAn56GV5aOrJywgdHlwZTogJ+S6i+S4muWNleS9jScsIGNvbXBhbnk6ICfljZfkuqzluILpvJPmpbzljLvpmaInfVxuICAgICAgIGxldCBpbWFnZXMgPSBbXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvMS5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjEnLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvMi5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjInLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvMy5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjMnLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvNC5qcGdcIiwgaGVpZ2h0OiAwLCBhZ2U6JzI1JywgZ2VuZGVyOiAnZmVtYWxlJywgaDogJzE2NCcsIHdlaWdodDogJzQ1JywgZGVncmVlOiAn56GV5aOrJywgdHlwZTogJ+S6i+S4muWNleS9jScsIGNvbXBhbnk6ICfljZfkuqzluIIqKirljLvpmaInfSxcbiAgICAgICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy81LmpwZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTY1Jywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9XG4gICAgICAgXTtcblxuICAgICAgIGxldCBiYXNlSWQgPSBcImltZy1cIiArICgrbmV3IERhdGUoKSk7XG5cbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICBpbWFnZXNbaV0uaWQgPSBiYXNlSWQgKyBcIi1cIiArIGk7XG4gICAgICAgfVxuXG5cbiAgICAgICB0aGlzLmxvYWRpbmdDb3VudD0gaW1hZ2VzLmxlbmd0aFxuICAgICAgIHRoaXMuaW1hZ2VzPSBpbWFnZXNcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG5hdmlnYXRlICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6ICdpbmRpdmlkdWFsUGFnZSd9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19