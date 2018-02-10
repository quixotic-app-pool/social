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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewBlog = function (_wepy$page) {
  _inherits(NewBlog, _wepy$page);

  function NewBlog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewBlog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewBlog.__proto__ || Object.getPrototypeOf(NewBlog)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarBackgroundColor: '#20BEEC',
      navigationBarTitleText: ''
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      content: '',
      images: [],
      location: '',
      latitude: '',
      longitude: '',
      type: ''
    }, _this.methods = {
      /**
       * 输入监听器
       * 自动映射到 content
       * @param {Event} e 输入事件
       */
      inputChange: function inputChange(e) {
        this.content = e.detail.value;
      },


      /**
       * 选择图片
       */
      chooseImage: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _images;

          var _ref3, tempFilePaths;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 9 - this.images.length,
                    sizeType: 'compressed'
                  });

                case 2:
                  _ref3 = _context.sent;
                  tempFilePaths = _ref3.tempFilePaths;

                  (_images = this.images).push.apply(_images, _toConsumableArray(tempFilePaths));
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


      /**
       * 查看大图
       * @param {String} cur 当前展示图片
       * @param {Array}  imageList 展示的图片列表
       */
      previewImage: function previewImage(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },


      /**
       * 删除选中图片
       * @param {Number} idx 要删除的图片索引
       */
      deleteImage: function deleteImage(idx) {
        this.images.splice(idx, 1);
        this.$apply();
      },


      /**
       * 添加位置
       */
      chooseLocation: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _ref5, name, latitude, longitude;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _wepy2.default.chooseLocation();

                case 3:
                  _ref5 = _context2.sent;
                  name = _ref5.name;
                  latitude = _ref5.latitude;
                  longitude = _ref5.longitude;

                  this.location = name;
                  this.latitude = latitude;
                  this.longitude = longitude;
                  this.$apply();
                  _context2.next = 15;
                  break;

                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2['catch'](0);

                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[0, 13]]);
        }));

        function chooseLocation() {
          return _ref4.apply(this, arguments);
        }

        return chooseLocation;
      }(),


      /**
       * 删除地理位置
       */
      removeLocation: function removeLocation() {
        this.location = '';
        this.latitude = '';
        this.longitude = '';
        this.$apply();
      },

      /**
       * 发送树洞
       */
      send: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var pack, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, r;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _wepy2.default.showToast({
                    title: '发送中...',
                    icon: 'loading',
                    duration: 10000,
                    mask: true
                  });

                  pack = {
                    content: this.content,
                    images: [],
                    location: this.location,
                    latitude: this.latitude,
                    longitude: this.longitude

                    // upload images
                  };

                  if (!(this.images.length > 0)) {
                    _context3.next = 46;
                    break;
                  }

                  _context3.prev = 3;
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context3.prev = 7;
                  _iterator = this.images[Symbol.iterator]();

                case 9:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context3.next = 25;
                    break;
                  }

                  v = _step.value;
                  _context3.next = 13;
                  return _wepy2.default.uploadFile({
                    url: _api2.default.blog.imageUpload.url,
                    filePath: v,
                    name: 'file',
                    formData: {
                      _session: _wepy2.default.getStorageSync('_session')
                    }
                  });

                case 13:
                  r = _context3.sent;


                  r.data = JSON.parse(r.data);

                  if (!(r.data.errcode === 0 && r.data.data.url)) {
                    _context3.next = 19;
                    break;
                  }

                  pack.images.push(r.data.data.url);
                  _context3.next = 22;
                  break;

                case 19:
                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '服务器错误，上传图片失败。请重试~：）' + r.data.errmsg,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 22:
                  _iteratorNormalCompletion = true;
                  _context3.next = 9;
                  break;

                case 25:
                  _context3.next = 31;
                  break;

                case 27:
                  _context3.prev = 27;
                  _context3.t0 = _context3['catch'](7);
                  _didIteratorError = true;
                  _iteratorError = _context3.t0;

                case 31:
                  _context3.prev = 31;
                  _context3.prev = 32;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 34:
                  _context3.prev = 34;

                  if (!_didIteratorError) {
                    _context3.next = 37;
                    break;
                  }

                  throw _iteratorError;

                case 37:
                  return _context3.finish(34);

                case 38:
                  return _context3.finish(31);

                case 39:
                  _context3.next = 46;
                  break;

                case 41:
                  _context3.prev = 41;
                  _context3.t1 = _context3['catch'](3);

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '服务器错误，上传图片失败。请重试或截图本提示联系泽铭哥。' + _context3.t1.message,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 46:
                  _context3.prev = 46;
                  _context3.next = 54;
                  break;

                case 49:
                  _context3.prev = 49;
                  _context3.t2 = _context3['catch'](46);

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '发送树洞失败。请截图本提示，联系泽铭哥。' + _context3.t2.message,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 54:

                  _wepy2.default.hideToast();
                  _context3.next = 57;
                  return _wepy2.default.showToast({
                    title: '发送成功！',
                    icon: 'success',
                    duration: 1500,
                    mask: true
                  });

                case 57:
                  _context3.next = 59;
                  return _wepy2.default.navigateBack({
                    delta: 1
                  });

                case 59:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[3, 41], [7, 27, 31, 39], [32,, 34, 38], [46, 49]]);
        }));

        function send() {
          return _ref6.apply(this, arguments);
        }

        return send;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewBlog, [{
    key: 'onLoad',
    value: function onLoad(option) {
      this.type = option.type;
      if (this.type == 'comment') {
        _wepy2.default.setNavigationBarTitle({ title: '编辑评论' });
      } else {
        _wepy2.default.setNavigationBarTitle({ title: '编辑心情' });
      }
    }
  }]);

  return NewBlog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NewBlog , 'pages/editPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRQYWdlLmpzIl0sIm5hbWVzIjpbIk5ld0Jsb2ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJjb250ZW50IiwiaW1hZ2VzIiwibG9jYXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInR5cGUiLCJtZXRob2RzIiwiaW5wdXRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwibGVuZ3RoIiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicHVzaCIsIiRhcHBseSIsInByZXZpZXdJbWFnZSIsImN1ciIsImltYWdlTGlzdCIsImN1cnJlbnQiLCJ1cmxzIiwiZGVsZXRlSW1hZ2UiLCJpZHgiLCJzcGxpY2UiLCJjaG9vc2VMb2NhdGlvbiIsIm5hbWUiLCJyZW1vdmVMb2NhdGlvbiIsInNlbmQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJwYWNrIiwidiIsInVwbG9hZEZpbGUiLCJ1cmwiLCJibG9nIiwiaW1hZ2VVcGxvYWQiLCJmaWxlUGF0aCIsImZvcm1EYXRhIiwiX3Nlc3Npb24iLCJnZXRTdG9yYWdlU3luYyIsInIiLCJKU09OIiwicGFyc2UiLCJlcnJjb2RlIiwiaGlkZVRvYXN0Iiwic2hvd01vZGFsIiwiZXJybXNnIiwic2hvd0NhbmNlbCIsIm1lc3NhZ2UiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm9wdGlvbiIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BD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QUFBQTs7QUFnSEYsaUNBQUtILFNBQUw7QUFDQSxpQ0FBS0MsU0FBTCxDQUFlO0FBQ2JuQiwyQkFBTyxJQURNO0FBRWIvQiw2QkFBUyxpQ0FBaUMsYUFBRXFELE9BRi9CO0FBR2JELGdDQUFZO0FBSEMsbUJBQWY7QUFqSEU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQW1JSixpQ0FBS0gsU0FBTDtBQUNBLGlDQUFLQyxTQUFMLENBQWU7QUFDYm5CLDJCQUFPLElBRE07QUFFYi9CLDZCQUFTLHlCQUF5QixhQUFFcUQsT0FGdkI7QUFHYkQsZ0NBQVk7QUFIQyxtQkFBZjtBQXBJSTs7QUFBQTs7QUE0SU4saUNBQUtILFNBQUw7QUE1SU07QUFBQSx5QkE2SUEsZUFBS25CLFNBQUwsQ0FBZTtBQUNuQkMsMkJBQU8sT0FEWTtBQUVuQkMsMEJBQU0sU0FGYTtBQUduQkMsOEJBQVUsSUFIUztBQUluQkMsMEJBQU07QUFKYSxtQkFBZixDQTdJQTs7QUFBQTtBQUFBO0FBQUEseUJBbUpBLGVBQUtvQixZQUFMLENBQWtCO0FBQ3RCQywyQkFBTztBQURlLG1CQUFsQixDQW5KQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7OzJCQVJGQyxNLEVBQVE7QUFDZCxXQUFLbkQsSUFBTCxHQUFZbUQsT0FBT25ELElBQW5CO0FBQ0EsVUFBRyxLQUFLQSxJQUFMLElBQWEsU0FBaEIsRUFBMkI7QUFDekIsdUJBQUtvRCxxQkFBTCxDQUEyQixFQUFDMUIsT0FBTyxNQUFSLEVBQTNCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsdUJBQUswQixxQkFBTCxDQUEyQixFQUFDMUIsT0FBTyxNQUFSLEVBQTNCO0FBQ0Q7QUFDRjs7OztFQXZCa0MsZUFBSzJCLEk7O2tCQUFyQnBFLE8iLCJmaWxlIjoiZWRpdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3QmxvZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzIwQkVFQycsXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgY29udGVudDogJycsXG4gICAgaW1hZ2VzOiBbXSxcbiAgICBsb2NhdGlvbjogJycsXG4gICAgbGF0aXR1ZGU6ICcnLFxuICAgIGxvbmdpdHVkZTogJycsXG4gICAgdHlwZTogJydcbiAgfVxuICBvbkxvYWQgKG9wdGlvbikge1xuICAgIHRoaXMudHlwZSA9IG9wdGlvbi50eXBlXG4gICAgaWYodGhpcy50eXBlID09ICdjb21tZW50Jykge1xuICAgICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiAn57yW6L6R6K+E6K66J30pXG4gICAgfSBlbHNlIHtcbiAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogJ+e8lui+keW/g+aDhSd9KVxuICAgIH1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIC8qKlxuICAgICAqIOi+k+WFpeebkeWQrOWZqFxuICAgICAqIOiHquWKqOaYoOWwhOWIsCBjb250ZW50XG4gICAgICogQHBhcmFtIHtFdmVudH0gZSDovpPlhaXkuovku7ZcbiAgICAgKi9cbiAgICBpbnB1dENoYW5nZSAoZSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YCJ5oup5Zu+54mHXG4gICAgICovXG4gICAgYXN5bmMgY2hvb3NlSW1hZ2UgKCkge1xuICAgICAgY29uc3QgeyB0ZW1wRmlsZVBhdGhzIH0gPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDkgLSB0aGlzLmltYWdlcy5sZW5ndGgsXG4gICAgICAgIHNpemVUeXBlOiAnY29tcHJlc3NlZCdcbiAgICAgIH0pXG4gICAgICB0aGlzLmltYWdlcy5wdXNoKC4uLnRlbXBGaWxlUGF0aHMpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOafpeeci+Wkp+WbvlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjdXIg5b2T5YmN5bGV56S65Zu+54mHXG4gICAgICogQHBhcmFtIHtBcnJheX0gIGltYWdlTGlzdCDlsZXnpLrnmoTlm77niYfliJfooahcbiAgICAgKi9cbiAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1hZ2VMaXN0KSB7XG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6IGN1cixcbiAgICAgICAgdXJsczogaW1hZ2VMaXN0XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliKDpmaTpgInkuK3lm77niYdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWR4IOimgeWIoOmZpOeahOWbvueJh+e0ouW8lVxuICAgICAqL1xuICAgIGRlbGV0ZUltYWdlIChpZHgpIHtcbiAgICAgIHRoaXMuaW1hZ2VzLnNwbGljZShpZHgsIDEpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS9jee9rlxuICAgICAqL1xuICAgIGFzeW5jIGNob29zZUxvY2F0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gYXdhaXQgd2VweS5jaG9vc2VMb2NhdGlvbigpXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBuYW1lXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSBsYXRpdHVkZVxuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IGxvbmdpdHVkZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliKDpmaTlnLDnkIbkvY3nva5cbiAgICAgKi9cbiAgICByZW1vdmVMb2NhdGlvbiAoKSB7XG4gICAgICB0aGlzLmxvY2F0aW9uID0gJydcbiAgICAgIHRoaXMubGF0aXR1ZGUgPSAnJ1xuICAgICAgdGhpcy5sb25naXR1ZGUgPSAnJ1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5Y+R6YCB5qCR5rSeXG4gICAgICovXG4gICAgYXN5bmMgc2VuZCAoKSB7XG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5Y+R6YCB5LitLi4uJyxcbiAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMDAsXG4gICAgICAgIG1hc2s6IHRydWVcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHBhY2sgPSB7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24sXG4gICAgICAgIGxhdGl0dWRlOiB0aGlzLmxhdGl0dWRlLFxuICAgICAgICBsb25naXR1ZGU6IHRoaXMubG9uZ2l0dWRlXG4gICAgICB9XG5cbiAgICAgIC8vIHVwbG9hZCBpbWFnZXNcbiAgICAgIGlmICh0aGlzLmltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChsZXQgdiBvZiB0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgY29uc3QgciA9IGF3YWl0IHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICAgIHVybDogYXBpLmJsb2cuaW1hZ2VVcGxvYWQudXJsLFxuICAgICAgICAgICAgICBmaWxlUGF0aDogdixcbiAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgICAgIF9zZXNzaW9uOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdfc2Vzc2lvbicpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHIuZGF0YSA9IEpTT04ucGFyc2Uoci5kYXRhKVxuXG4gICAgICAgICAgICBpZiAoci5kYXRhLmVycmNvZGUgPT09IDAgJiYgci5kYXRhLmRhdGEudXJsKSB7XG4gICAgICAgICAgICAgIHBhY2suaW1hZ2VzLnB1c2goci5kYXRhLmRhdGEudXJsKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmnI3liqHlmajplJnor6/vvIzkuIrkvKDlm77niYflpLHotKXjgILor7fph43or5V+77ya77yJJyArIHIuZGF0YS5lcnJtc2csXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmnI3liqHlmajplJnor6/vvIzkuIrkvKDlm77niYflpLHotKXjgILor7fph43or5XmiJbmiKrlm77mnKzmj5DnpLrogZTns7vms73pk63lk6XjgIInICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHVwbG9hZCBibG9nXG4gICAgICB0cnkge1xuICAgICAgICAvLyB2YXIgcmVzID0gYXdhaXQgYXBpLm5ld1Bvc3Qoe1xuICAgICAgICAvLyAgIHBhY2s6IHBhY2tcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxheSA9ICdzdWNjZXNzJykge1xuICAgICAgICAvL1xuICAgICAgICAvLyB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICBjb250ZW50OiAn5Y+R6YCB5qCR5rSe5aSx6LSl44CC6K+35oiq5Zu+5pys5o+Q56S677yM6IGU57O75rO96ZOt5ZOl44CCJyArIGUubWVzc2FnZSxcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgYXdhaXQgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKn++8gScsXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIG1hc2s6IHRydWVcbiAgICAgIH0pXG4gICAgICBhd2FpdCB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgIGRlbHRhOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19