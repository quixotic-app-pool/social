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
            navigationBarTitleText: 'AllList'
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
                _wepy2.default.navigateTo({ url: 'intro' });
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MainPage , 'pages/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiY29sMUgiLCJjb2wySCIsIk1haW5QYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzY3JvbGxIIiwiaW1nV2lkdGgiLCJsb2FkaW5nQ291bnQiLCJpbWFnZXMiLCJjb2wxIiwiY29sMiIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm1ldGhvZHMiLCJuYXZpZ2F0ZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJsb2FkSW1hZ2VzIiwiZSIsImltYWdlSWQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJvSW1nVyIsImRldGFpbCIsIndpZHRoIiwib0ltZ0giLCJoZWlnaHQiLCJzY2FsZSIsImltZ0hlaWdodCIsImltYWdlT2JqIiwiaSIsImxlbmd0aCIsImltZyIsInB1c2giLCJzZXREYXRhIiwicGljIiwiYmFzZUlkIiwiRGF0ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxRQUFRLENBQVo7QUFDQSxJQUFJQyxRQUFRLENBQVo7O0lBQ3FCQyxROzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBd0I7QUFEakIsUyxRQUdUQyxJLEdBQU87QUFDTEMscUJBQVMsQ0FESjtBQUVMQyxzQkFBVSxDQUZMO0FBR0xDLDBCQUFjLENBSFQ7QUFJTEMsb0JBQVEsRUFKSDtBQUtMQyxrQkFBTSxFQUxEO0FBTUxDLGtCQUFNLEVBTkQ7QUFPTEMseUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBUGpDO0FBUUxDLDBCQUFjLGVBQUtGLGlCQUFMLEdBQXlCRztBQVJsQyxTLFFBbUZQQyxPLEdBQVU7QUFDUkMsb0JBRFEsc0JBQ0k7QUFDViwrQkFBS0MsVUFBTCxDQUFnQixFQUFDQyxLQUFLLE9BQU4sRUFBaEI7QUFDRDtBQUhPLFM7Ozs7O2lD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b20gJ3dlcHknXG4gIGxldCBjb2wxSCA9IDA7XG4gIGxldCBjb2wySCA9IDA7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQWxsTGlzdCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcm9sbEg6IDAsXG4gICAgICBpbWdXaWR0aDogMCxcbiAgICAgIGxvYWRpbmdDb3VudDogMCxcbiAgICAgIGltYWdlczogW10sXG4gICAgICBjb2wxOiBbXSxcbiAgICAgIGNvbDI6IFtdLFxuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxuICAgIH1cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdmFyIGltZ1dpZHRoID0gdGhpcy5zY3JlZW5XaWR0aCAqIDAuNDg7XG4gICAgICB2YXIgc2Nyb2xsSCA9IHRoaXMuc2NyZWVuSGVpZ2h0O1xuXG4gICAgICB0aGlzLnNjcm9sbEg9IHNjcm9sbEhcbiAgICAgIHRoaXMuaW1nV2lkdGg9IGltZ1dpZHRoXG5cbiAgICAgIHRoaXMubG9hZEltYWdlcygpXG4gICAgIH1cbiAgICAgb25JbWFnZUxvYWQgKGUpIHtcbiAgICAgICAgIGxldCBpbWFnZUlkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICAgbGV0IG9JbWdXID0gZS5kZXRhaWwud2lkdGg7ICAgICAgICAgLy/lm77niYfljp/lp4vlrr3luqZcbiAgICAgICAgIGxldCBvSW1nSCA9IGUuZGV0YWlsLmhlaWdodDsgICAgICAgIC8v5Zu+54mH5Y6f5aeL6auY5bqmXG4gICAgICAgICBsZXQgaW1nV2lkdGggPSB0aGlzLmRhdGEuaW1nV2lkdGg7ICAvL+WbvueJh+iuvue9rueahOWuveW6plxuICAgICAgICAgbGV0IHNjYWxlID0gaW1nV2lkdGggLyBvSW1nVzsgICAgICAgIC8v5q+U5L6L6K6h566XXG4gICAgICAgICBsZXQgaW1nSGVpZ2h0ID0gb0ltZ0ggKiBzY2FsZTsgICAgICAvL+iHqumAguW6lOmrmOW6plxuXG4gICAgICAgICBsZXQgaW1hZ2VzID0gdGhpcy5kYXRhLmltYWdlcztcbiAgICAgICAgIGxldCBpbWFnZU9iaiA9IG51bGw7XG5cbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgbGV0IGltZyA9IGltYWdlc1tpXTtcbiAgICAgICAgICAgICBpZiAoaW1nLmlkID09PSBpbWFnZUlkKSB7XG4gICAgICAgICAgICAgICAgIGltYWdlT2JqID0gaW1nO1xuICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgICAgIGltYWdlT2JqLmhlaWdodCA9IGltZ0hlaWdodDtcblxuICAgICAgICAgbGV0IGxvYWRpbmdDb3VudCA9IHRoaXMuZGF0YS5sb2FkaW5nQ291bnQgLSAxO1xuICAgICAgICAgbGV0IGNvbDEgPSB0aGlzLmRhdGEuY29sMTtcbiAgICAgICAgIGxldCBjb2wyID0gdGhpcy5kYXRhLmNvbDI7XG5cbiAgICAgICAgIGlmIChjb2wxSCA8PSBjb2wySCkge1xuICAgICAgICAgICAgIGNvbDFIICs9IGltZ0hlaWdodDtcbiAgICAgICAgICAgICBjb2wxLnB1c2goaW1hZ2VPYmopO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICBjb2wySCArPSBpbWdIZWlnaHQ7XG4gICAgICAgICAgICAgY29sMi5wdXNoKGltYWdlT2JqKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgbG9hZGluZ0NvdW50OiBsb2FkaW5nQ291bnQsXG4gICAgICAgICAgICAgY29sMTogY29sMSxcbiAgICAgICAgICAgICBjb2wyOiBjb2wyXG4gICAgICAgICB9O1xuXG4gICAgICAgICBpZiAoIWxvYWRpbmdDb3VudCkge1xuICAgICAgICAgICAgIGRhdGEuaW1hZ2VzID0gW107XG4gICAgICAgICB9XG5cbiAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcbiAgICAgfVxuICAgICBsb2FkSW1hZ2VzICgpIHtcbiAgICAgICBsZXQgaW1hZ2VzID0gW1xuICAgICAgICAgICB7IHBpYzogXCIuLi9hc3NldHMvaW1nLzEuanBlZ1wiLCBoZWlnaHQ6IDAgfSxcbiAgICAgICAgICAgeyBwaWM6IFwiLi4vYXNzZXRzL2ltZy8yLmpwZWdcIiwgaGVpZ2h0OiAwIH0sXG4gICAgICAgICAgIHsgcGljOiBcIi4uL2Fzc2V0cy9pbWcvMy5qcGVnXCIsIGhlaWdodDogMCB9LFxuICAgICAgICAgICB7IHBpYzogXCIuLi9hc3NldHMvaW1nLzQuanBnXCIsIGhlaWdodDogMCB9LFxuICAgICAgICAgICB7IHBpYzogXCIuLi9hc3NldHMvaW1nLzUuanBnXCIsIGhlaWdodDogMCB9XG4gICAgICAgXTtcblxuICAgICAgIGxldCBiYXNlSWQgPSBcImltZy1cIiArICgrbmV3IERhdGUoKSk7XG5cbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICBpbWFnZXNbaV0uaWQgPSBiYXNlSWQgKyBcIi1cIiArIGk7XG4gICAgICAgfVxuXG5cbiAgICAgICB0aGlzLmxvYWRpbmdDb3VudD0gaW1hZ2VzLmxlbmd0aFxuICAgICAgIHRoaXMuaW1hZ2VzPSBpbWFnZXNcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG5hdmlnYXRlICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6ICdpbnRybyd9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19