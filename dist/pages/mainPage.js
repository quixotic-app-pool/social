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
            var images = [{ pic: "../assets/img/1.jpeg", height: 0 }, { pic: "../assets/img/2.jpeg", height: 0 }, { pic: "../assets/img/3.jpeg", height: 0 }, { pic: "../assets/img/4.jpg", height: 0 }, { pic: "../assets/img/5.jpg", height: 0 }];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5QYWdlLmpzIl0sIm5hbWVzIjpbImNvbDFIIiwiY29sMkgiLCJNYWluUGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2Nyb2xsSCIsImltZ1dpZHRoIiwibG9hZGluZ0NvdW50IiwiaW1hZ2VzIiwiY29sMSIsImNvbDIiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJtZXRob2RzIiwibmF2aWdhdGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwibG9hZEltYWdlcyIsImUiLCJpbWFnZUlkIiwiY3VycmVudFRhcmdldCIsImlkIiwib0ltZ1ciLCJkZXRhaWwiLCJ3aWR0aCIsIm9JbWdIIiwiaGVpZ2h0Iiwic2NhbGUiLCJpbWdIZWlnaHQiLCJpbWFnZU9iaiIsImkiLCJsZW5ndGgiLCJpbWciLCJwdXNoIiwic2V0RGF0YSIsInBpYyIsImJhc2VJZCIsIkRhdGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsUUFBUSxDQUFaO0FBQ0EsSUFBSUMsUUFBUSxDQUFaOztJQUNxQkMsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFHVEMsSSxHQUFPO0FBQ0xDLHFCQUFTLENBREo7QUFFTEMsc0JBQVUsQ0FGTDtBQUdMQywwQkFBYyxDQUhUO0FBSUxDLG9CQUFRLEVBSkg7QUFLTEMsa0JBQU0sRUFMRDtBQU1MQyxrQkFBTSxFQU5EO0FBT0xDLHlCQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQVBqQztBQVFMQywwQkFBYyxlQUFLRixpQkFBTCxHQUF5Qkc7QUFSbEMsUyxRQW1GUEMsTyxHQUFVO0FBQ1JDLG9CQURRLHNCQUNJO0FBQ1YsK0JBQUtDLFVBQUwsQ0FBZ0IsRUFBQ0MsS0FBSyxnQkFBTixFQUFoQjtBQUNEO0FBSE8sUzs7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dCB3ZXB5IGZyb20gJ3dlcHknXG4gIGxldCBjb2wxSCA9IDA7XG4gIGxldCBjb2wySCA9IDA7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55u46K+G5LqO55y857yYJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2Nyb2xsSDogMCxcbiAgICAgIGltZ1dpZHRoOiAwLFxuICAgICAgbG9hZGluZ0NvdW50OiAwLFxuICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgIGNvbDE6IFtdLFxuICAgICAgY29sMjogW10sXG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0XG4gICAgfVxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB2YXIgaW1nV2lkdGggPSB0aGlzLnNjcmVlbldpZHRoICogMC40ODtcbiAgICAgIHZhciBzY3JvbGxIID0gdGhpcy5zY3JlZW5IZWlnaHQ7XG5cbiAgICAgIHRoaXMuc2Nyb2xsSD0gc2Nyb2xsSFxuICAgICAgdGhpcy5pbWdXaWR0aD0gaW1nV2lkdGhcblxuICAgICAgdGhpcy5sb2FkSW1hZ2VzKClcbiAgICAgfVxuICAgICBvbkltYWdlTG9hZCAoZSkge1xuICAgICAgICAgbGV0IGltYWdlSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAgICBsZXQgb0ltZ1cgPSBlLmRldGFpbC53aWR0aDsgICAgICAgICAvL+WbvueJh+WOn+Wni+WuveW6plxuICAgICAgICAgbGV0IG9JbWdIID0gZS5kZXRhaWwuaGVpZ2h0OyAgICAgICAgLy/lm77niYfljp/lp4vpq5jluqZcbiAgICAgICAgIGxldCBpbWdXaWR0aCA9IHRoaXMuZGF0YS5pbWdXaWR0aDsgIC8v5Zu+54mH6K6+572u55qE5a695bqmXG4gICAgICAgICBsZXQgc2NhbGUgPSBpbWdXaWR0aCAvIG9JbWdXOyAgICAgICAgLy/mr5TkvovorqHnrpdcbiAgICAgICAgIGxldCBpbWdIZWlnaHQgPSBvSW1nSCAqIHNjYWxlOyAgICAgIC8v6Ieq6YCC5bqU6auY5bqmXG5cbiAgICAgICAgIGxldCBpbWFnZXMgPSB0aGlzLmRhdGEuaW1hZ2VzO1xuICAgICAgICAgbGV0IGltYWdlT2JqID0gbnVsbDtcblxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICBsZXQgaW1nID0gaW1hZ2VzW2ldO1xuICAgICAgICAgICAgIGlmIChpbWcuaWQgPT09IGltYWdlSWQpIHtcbiAgICAgICAgICAgICAgICAgaW1hZ2VPYmogPSBpbWc7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH1cblxuICAgICAgICAgaW1hZ2VPYmouaGVpZ2h0ID0gaW1nSGVpZ2h0O1xuXG4gICAgICAgICBsZXQgbG9hZGluZ0NvdW50ID0gdGhpcy5kYXRhLmxvYWRpbmdDb3VudCAtIDE7XG4gICAgICAgICBsZXQgY29sMSA9IHRoaXMuZGF0YS5jb2wxO1xuICAgICAgICAgbGV0IGNvbDIgPSB0aGlzLmRhdGEuY29sMjtcblxuICAgICAgICAgaWYgKGNvbDFIIDw9IGNvbDJIKSB7XG4gICAgICAgICAgICAgY29sMUggKz0gaW1nSGVpZ2h0O1xuICAgICAgICAgICAgIGNvbDEucHVzaChpbWFnZU9iaik7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIGNvbDJIICs9IGltZ0hlaWdodDtcbiAgICAgICAgICAgICBjb2wyLnB1c2goaW1hZ2VPYmopO1xuICAgICAgICAgfVxuXG4gICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICBsb2FkaW5nQ291bnQ6IGxvYWRpbmdDb3VudCxcbiAgICAgICAgICAgICBjb2wxOiBjb2wxLFxuICAgICAgICAgICAgIGNvbDI6IGNvbDJcbiAgICAgICAgIH07XG5cbiAgICAgICAgIGlmICghbG9hZGluZ0NvdW50KSB7XG4gICAgICAgICAgICAgZGF0YS5pbWFnZXMgPSBbXTtcbiAgICAgICAgIH1cblxuICAgICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgICB9XG4gICAgIGxvYWRJbWFnZXMgKCkge1xuICAgICAgIGxldCBpbWFnZXMgPSBbXG4gICAgICAgICAgIHsgcGljOiBcIi4uL2Fzc2V0cy9pbWcvMS5qcGVnXCIsIGhlaWdodDogMCB9LFxuICAgICAgICAgICB7IHBpYzogXCIuLi9hc3NldHMvaW1nLzIuanBlZ1wiLCBoZWlnaHQ6IDAgfSxcbiAgICAgICAgICAgeyBwaWM6IFwiLi4vYXNzZXRzL2ltZy8zLmpwZWdcIiwgaGVpZ2h0OiAwIH0sXG4gICAgICAgICAgIHsgcGljOiBcIi4uL2Fzc2V0cy9pbWcvNC5qcGdcIiwgaGVpZ2h0OiAwIH0sXG4gICAgICAgICAgIHsgcGljOiBcIi4uL2Fzc2V0cy9pbWcvNS5qcGdcIiwgaGVpZ2h0OiAwIH1cbiAgICAgICBdO1xuXG4gICAgICAgbGV0IGJhc2VJZCA9IFwiaW1nLVwiICsgKCtuZXcgRGF0ZSgpKTtcblxuICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgIGltYWdlc1tpXS5pZCA9IGJhc2VJZCArIFwiLVwiICsgaTtcbiAgICAgICB9XG5cblxuICAgICAgIHRoaXMubG9hZGluZ0NvdW50PSBpbWFnZXMubGVuZ3RoXG4gICAgICAgdGhpcy5pbWFnZXM9IGltYWdlc1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgbmF2aWdhdGUgKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogJ2luZGl2aWR1YWxQYWdlJ30pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=