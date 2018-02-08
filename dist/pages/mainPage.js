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
                list = [{ pic: "../assets/img/1.jpeg", height: 0, age: '25', gender: 'female', h: '161', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/2.jpeg", height: 0, age: '25', gender: 'female', h: '162', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/3.jpeg", height: 0, age: '25', gender: 'female', h: '163', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/4.jpg", height: 0, age: '25', gender: 'female', h: '164', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/5.jpg", height: 0, age: '25', gender: 'female', h: '165', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5QYWdlLmpzIl0sIm5hbWVzIjpbImNvbDFIIiwiY29sMkgiLCJNYWluUGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2Nyb2xsSCIsImltZ1dpZHRoIiwibG9hZGluZ0NvdW50IiwiaW1hZ2VzIiwiY29sMSIsImNvbDIiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJtZXRob2RzIiwibmF2aWdhdGUiLCJfaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwibG9hZEltYWdlcyIsImUiLCJpbWFnZUlkIiwiY3VycmVudFRhcmdldCIsImlkIiwib0ltZ1ciLCJkZXRhaWwiLCJ3aWR0aCIsIm9JbWdIIiwiaGVpZ2h0Iiwic2NhbGUiLCJpbWdIZWlnaHQiLCJpbWFnZU9iaiIsImkiLCJsZW5ndGgiLCJpbWciLCJwdXNoIiwic2V0RGF0YSIsImxpc3QiLCJwaWMiLCJhZ2UiLCJnZW5kZXIiLCJoIiwid2VpZ2h0IiwiZGVncmVlIiwidHlwZSIsImNvbXBhbnkiLCJiYXNlSWQiLCJEYXRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRLENBQVo7QUFDQSxJQUFJQyxRQUFRLENBQVo7O0lBQ3FCQyxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxDQURKO0FBRUxDLGdCQUFVLENBRkw7QUFHTEMsb0JBQWMsQ0FIVDtBQUlMQyxjQUFRLEVBSkg7QUFLTEMsWUFBTSxFQUxEO0FBTUxDLFlBQU0sRUFORDtBQU9MQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FQakM7QUFRTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHO0FBUmxDLEssUUE4RlBDLE8sR0FBVTtBQUNS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RixFQUE2RkMsUUFBUSxJQUFyRyxFQUEyR0MsTUFBTSxNQUFqSCxFQUF5SEMsU0FBUyxVQUFsSSxFQUhLLEVBSUwsRUFBQ1AsS0FBSyxxQkFBTixFQUE2QlYsUUFBUSxDQUFyQyxFQUF3Q1csS0FBSSxJQUE1QyxFQUFrREMsUUFBUSxRQUExRCxFQUFvRUMsR0FBRyxLQUF2RSxFQUE4RUMsUUFBUSxJQUF0RixFQUE0RkMsUUFBUSxJQUFwRyxFQUEwR0MsTUFBTSxNQUFoSCxFQUF3SEMsU0FBUyxVQUFqSSxFQUpLLEVBS0wsRUFBQ1AsS0FBSyxxQkFBTixFQUE2QlYsUUFBUSxDQUFyQyxFQUF3Q1csS0FBSSxJQUE1QyxFQUFrREMsUUFBUSxRQUExRCxFQUFvRUMsR0FBRyxLQUF2RSxFQUE4RUMsUUFBUSxJQUF0RixFQUE0RkMsUUFBUSxJQUFwRyxFQUEwR0MsTUFBTSxNQUFoSCxFQUF3SEMsU0FBUyxVQUFqSSxFQUxLLENBQVA7QUFYQTtBQW1CSUMsc0IsR0FBUyxTQUFVLENBQUMsSUFBSUMsSUFBSixFOzs7QUFFeEIscUJBQVNmLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxJQUFJSyxLQUFLSixNQUF6QixFQUFpQ0QsR0FBakMsRUFBc0M7QUFDbENLLHVCQUFLTCxDQUFMLEVBQVFULEVBQVIsR0FBYXVCLFNBQVMsR0FBVCxHQUFlZCxDQUE1QjtBQUNIOztBQUVELHFCQUFLM0IsWUFBTCxHQUFtQmdDLEtBQUtKLE1BQXhCO0FBQ0EscUJBQUszQixNQUFMLEdBQWErQixJQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEdpQyxlQUFLVyxJOztrQkFBdEJqRCxRIiwiZmlsZSI6Im1haW5QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIGxldCBjb2wxSCA9IDA7XG4gIGxldCBjb2wySCA9IDA7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55u46K+G5LqO55y857yYJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2Nyb2xsSDogMCxcbiAgICAgIGltZ1dpZHRoOiAwLFxuICAgICAgbG9hZGluZ0NvdW50OiAwLFxuICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgIGNvbDE6IFtdLFxuICAgICAgY29sMjogW10sXG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0XG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCAoKSB7XG4gICAgICB2YXIgaW1nV2lkdGggPSB0aGlzLnNjcmVlbldpZHRoICogMC40ODtcbiAgICAgIHZhciBzY3JvbGxIID0gdGhpcy5zY3JlZW5IZWlnaHQ7XG5cbiAgICAgIHRoaXMuc2Nyb2xsSD0gc2Nyb2xsSFxuICAgICAgdGhpcy5pbWdXaWR0aD0gaW1nV2lkdGhcblxuICAgICAgYXdhaXQgdGhpcy5sb2FkSW1hZ2VzKClcbiAgICAgfVxuICAgICBvbkltYWdlTG9hZCAoZSkge1xuICAgICAgIGxldCBpbWFnZUlkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgIGxldCBvSW1nVyA9IGUuZGV0YWlsLndpZHRoOyAgICAgICAgIC8v5Zu+54mH5Y6f5aeL5a695bqmXG4gICAgICAgbGV0IG9JbWdIID0gZS5kZXRhaWwuaGVpZ2h0OyAgICAgICAgLy/lm77niYfljp/lp4vpq5jluqZcbiAgICAgICBsZXQgaW1nV2lkdGggPSB0aGlzLmRhdGEuaW1nV2lkdGg7ICAvL+WbvueJh+iuvue9rueahOWuveW6plxuICAgICAgLy8gIGNvbnNvbGUubG9nKCd0aGlzLmRhdGEgOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSlcbiAgICAgICBsZXQgc2NhbGUgPSBpbWdXaWR0aCAvIG9JbWdXOyAgICAgICAgLy/mr5TkvovorqHnrpdcbiAgICAgICBsZXQgaW1nSGVpZ2h0ID0gb0ltZ0ggKiBzY2FsZTsgICAgICAvL+iHqumAguW6lOmrmOW6plxuXG4gICAgICAgbGV0IGltYWdlcyA9IHRoaXMuZGF0YS5pbWFnZXM7XG4gICAgICAgbGV0IGltYWdlT2JqID0gbnVsbDtcblxuICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgIGxldCBpbWcgPSBpbWFnZXNbaV07XG4gICAgICAgICAgIGlmIChpbWcuaWQgPT09IGltYWdlSWQpIHtcbiAgICAgICAgICAgICAgIGltYWdlT2JqID0gaW1nO1xuICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICBpbWFnZU9iai5oZWlnaHQgPSBpbWdIZWlnaHQ7XG5cbiAgICAgICBsZXQgbG9hZGluZ0NvdW50ID0gdGhpcy5kYXRhLmxvYWRpbmdDb3VudCAtIDE7XG4gICAgICAgbGV0IGNvbDEgPSB0aGlzLmRhdGEuY29sMTtcbiAgICAgICBsZXQgY29sMiA9IHRoaXMuZGF0YS5jb2wyO1xuXG4gICAgICAgaWYgKGNvbDFIIDw9IGNvbDJIKSB7XG4gICAgICAgICAgIGNvbDFIICs9IGltZ0hlaWdodDtcbiAgICAgICAgICAgY29sMS5wdXNoKGltYWdlT2JqKTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBjb2wySCArPSBpbWdIZWlnaHQ7XG4gICAgICAgICAgIGNvbDIucHVzaChpbWFnZU9iaik7XG4gICAgICAgfVxuXG4gICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgIGxvYWRpbmdDb3VudDogbG9hZGluZ0NvdW50LFxuICAgICAgICAgICBjb2wxOiBjb2wxLFxuICAgICAgICAgICBjb2wyOiBjb2wyXG4gICAgICAgfTtcblxuICAgICAgIGlmICghbG9hZGluZ0NvdW50KSB7XG4gICAgICAgICAgIGRhdGEuaW1hZ2VzID0gW107XG4gICAgICAgfVxuXG4gICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgICB9XG4gICAgIGFzeW5jIGxvYWRJbWFnZXMgKCkge1xuICAgICAgIC8vIFRPRE86IGhlcmUgd2UgZ29ubmEgbG9hZCBkYXRhXG4gICAgICAgdmFyIGxpc3RcbiAgICAgIC8vICB2YXIgcmVzID0gYXdhaXQgYXBpLnByb2ZpbGVMaXN0KHtcbiAgICAgIC8vICAgIHF1ZXJ5OiB7XG4gICAgICAvLyAgICAgIHBhZ2U6IDBcbiAgICAgIC8vICAgIH1cbiAgICAgIC8vICB9KVxuICAgICAgIC8vXG4gICAgICAvLyAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgIC8vICAgIGxpc3QgPSByZXMuZGF0YS5kYXRhXG4gICAgICAvLyAgfVxuICAgICAgIGxpc3QgPSBbXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvMS5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjEnLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvMi5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjInLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvMy5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjMnLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvNC5qcGdcIiwgaGVpZ2h0OiAwLCBhZ2U6JzI1JywgZ2VuZGVyOiAnZmVtYWxlJywgaDogJzE2NCcsIHdlaWdodDogJzQ1JywgZGVncmVlOiAn56GV5aOrJywgdHlwZTogJ+S6i+S4muWNleS9jScsIGNvbXBhbnk6ICfljZfkuqzluIIqKirljLvpmaInfSxcbiAgICAgICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy81LmpwZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTY1Jywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9XG4gICAgICAgXTtcblxuICAgICAgIGxldCBiYXNlSWQgPSBcImltZy1cIiArICgrbmV3IERhdGUoKSk7XG5cbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgbGlzdFtpXS5pZCA9IGJhc2VJZCArIFwiLVwiICsgaTtcbiAgICAgICB9XG5cbiAgICAgICB0aGlzLmxvYWRpbmdDb3VudD0gbGlzdC5sZW5ndGhcbiAgICAgICB0aGlzLmltYWdlcz0gbGlzdFxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgbmF2aWdhdGUgKF9pZCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogJ2luZGl2aWR1YWxQYWdlP2lkPScgKyBfaWR9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19