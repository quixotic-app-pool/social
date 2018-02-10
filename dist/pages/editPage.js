'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      navigationBarTitleText: '编辑心情'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      content: '',
      images: [],
      location: '',
      latitude: '',
      longitude: '',
      disabled: true
    }, _this.methods = {
      /**
       * 输入监听器
       * 自动映射到 content
       * @param {Event} e 输入事件
       */
      inputChange: function inputChange(e) {
        this.content = e.detail.value;
        this.disabled = e.detail.value === '';
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

  return NewBlog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NewBlog , 'pages/editPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRQYWdlLmpzIl0sIm5hbWVzIjpbIk5ld0Jsb2ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJjb250ZW50IiwiaW1hZ2VzIiwibG9jYXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImRpc2FibGVkIiwibWV0aG9kcyIsImlucHV0Q2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsImxlbmd0aCIsInNpemVUeXBlIiwidGVtcEZpbGVQYXRocyIsInB1c2giLCIkYXBwbHkiLCJwcmV2aWV3SW1hZ2UiLCJjdXIiLCJpbWFnZUxpc3QiLCJjdXJyZW50IiwidXJscyIsImRlbGV0ZUltYWdlIiwiaWR4Iiwic3BsaWNlIiwiY2hvb3NlTG9jYXRpb24iLCJuYW1lIiwicmVtb3ZlTG9jYXRpb24iLCJzZW5kIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwicGFjayIsInYiLCJ1cGxvYWRGaWxlIiwidXJsIiwiYmxvZyIsImltYWdlVXBsb2FkIiwiZmlsZVBhdGgiLCJmb3JtRGF0YSIsIl9zZXNzaW9uIiwiZ2V0U3RvcmFnZVN5bmMiLCJyIiwiSlNPTiIsInBhcnNlIiwiZXJyY29kZSIsImhpZGVUb2FzdCIsInNob3dNb2RhbCIsImVycm1zZyIsInNob3dDYW5jZWwiLCJtZXNzYWdlIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QjtBQUZq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QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWlIRixpQ0FBS0gsU0FBTDtBQUNBLGlDQUFLQyxTQUFMLENBQWU7QUFDYm5CLDJCQUFPLElBRE07QUFFYi9CLDZCQUFTLGlDQUFpQyxhQUFFcUQsT0FGL0I7QUFHYkQsZ0NBQVk7QUFIQyxtQkFBZjtBQWxIRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBb0lKLGlDQUFLSCxTQUFMO0FBQ0EsaUNBQUtDLFNBQUwsQ0FBZTtBQUNibkIsMkJBQU8sSUFETTtBQUViL0IsNkJBQVMseUJBQXlCLGFBQUVxRCxPQUZ2QjtBQUdiRCxnQ0FBWTtBQUhDLG1CQUFmO0FBcklJOztBQUFBOztBQTZJTixpQ0FBS0gsU0FBTDtBQTdJTTtBQUFBLHlCQThJQSxlQUFLbkIsU0FBTCxDQUFlO0FBQ25CQywyQkFBTyxPQURZO0FBRW5CQywwQkFBTSxTQUZhO0FBR25CQyw4QkFBVSxJQUhTO0FBSW5CQywwQkFBTTtBQUphLG1CQUFmLENBOUlBOztBQUFBO0FBQUE7QUFBQSx5QkFvSkEsZUFBS29CLFlBQUwsQ0FBa0I7QUFDdEJDLDJCQUFPO0FBRGUsbUJBQWxCLENBcEpBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7OztFQWpCeUIsZUFBS0MsSTs7a0JBQXJCbEUsTyIsImZpbGUiOiJlZGl0UGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdCbG9nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMjBCRUVDJyxcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6R5b+D5oOFJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICBjb250ZW50OiAnJyxcbiAgICBpbWFnZXM6IFtdLFxuICAgIGxvY2F0aW9uOiAnJyxcbiAgICBsYXRpdHVkZTogJycsXG4gICAgbG9uZ2l0dWRlOiAnJyxcbiAgICBkaXNhYmxlZDogdHJ1ZVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKipcbiAgICAgKiDovpPlhaXnm5HlkKzlmahcbiAgICAgKiDoh6rliqjmmKDlsITliLAgY29udGVudFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUg6L6T5YWl5LqL5Lu2XG4gICAgICovXG4gICAgaW5wdXRDaGFuZ2UgKGUpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLmRpc2FibGVkID0gZS5kZXRhaWwudmFsdWUgPT09ICcnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmAieaLqeWbvueJh1xuICAgICAqL1xuICAgIGFzeW5jIGNob29zZUltYWdlICgpIHtcbiAgICAgIGNvbnN0IHsgdGVtcEZpbGVQYXRocyB9ID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA5IC0gdGhpcy5pbWFnZXMubGVuZ3RoLFxuICAgICAgICBzaXplVHlwZTogJ2NvbXByZXNzZWQnXG4gICAgICB9KVxuICAgICAgdGhpcy5pbWFnZXMucHVzaCguLi50ZW1wRmlsZVBhdGhzKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmn6XnnIvlpKflm75cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3VyIOW9k+WJjeWxleekuuWbvueJh1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBpbWFnZUxpc3Qg5bGV56S655qE5Zu+54mH5YiX6KGoXG4gICAgICovXG4gICAgcHJldmlld0ltYWdlIChjdXIsIGltYWdlTGlzdCkge1xuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICBjdXJyZW50OiBjdXIsXG4gICAgICAgIHVybHM6IGltYWdlTGlzdFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk6YCJ5Lit5Zu+54mHXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkeCDopoHliKDpmaTnmoTlm77niYfntKLlvJVcbiAgICAgKi9cbiAgICBkZWxldGVJbWFnZSAoaWR4KSB7XG4gICAgICB0aGlzLmltYWdlcy5zcGxpY2UoaWR4LCAxKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDkvY3nva5cbiAgICAgKi9cbiAgICBhc3luYyBjaG9vc2VMb2NhdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IG5hbWUsIGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IGF3YWl0IHdlcHkuY2hvb3NlTG9jYXRpb24oKVxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbmFtZVxuICAgICAgICB0aGlzLmxhdGl0dWRlID0gbGF0aXR1ZGVcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBsb25naXR1ZGVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk5Zyw55CG5L2N572uXG4gICAgICovXG4gICAgcmVtb3ZlTG9jYXRpb24gKCkge1xuICAgICAgdGhpcy5sb2NhdGlvbiA9ICcnXG4gICAgICB0aGlzLmxhdGl0dWRlID0gJydcbiAgICAgIHRoaXMubG9uZ2l0dWRlID0gJydcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWPkemAgeagkea0nlxuICAgICAqL1xuICAgIGFzeW5jIHNlbmQgKCkge1xuICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WPkemAgeS4rS4uLicsXG4gICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgZHVyYXRpb246IDEwMDAwLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBwYWNrID0ge1xuICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgIGltYWdlczogW10sXG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxuICAgICAgICBsYXRpdHVkZTogdGhpcy5sYXRpdHVkZSxcbiAgICAgICAgbG9uZ2l0dWRlOiB0aGlzLmxvbmdpdHVkZVxuICAgICAgfVxuXG4gICAgICAvLyB1cGxvYWQgaW1hZ2VzXG4gICAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAobGV0IHYgb2YgdGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBhd2FpdCB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgICB1cmw6IGFwaS5ibG9nLmltYWdlVXBsb2FkLnVybCxcbiAgICAgICAgICAgICAgZmlsZVBhdGg6IHYsXG4gICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICAgICAgICBfc2Vzc2lvbjogd2VweS5nZXRTdG9yYWdlU3luYygnX3Nlc3Npb24nKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByLmRhdGEgPSBKU09OLnBhcnNlKHIuZGF0YSlcblxuICAgICAgICAgICAgaWYgKHIuZGF0YS5lcnJjb2RlID09PSAwICYmIHIuZGF0YS5kYXRhLnVybCkge1xuICAgICAgICAgICAgICBwYWNrLmltYWdlcy5wdXNoKHIuZGF0YS5kYXRhLnVybClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM5LiK5Lyg5Zu+54mH5aSx6LSl44CC6K+36YeN6K+Vfu+8mu+8iScgKyByLmRhdGEuZXJybXNnLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM5LiK5Lyg5Zu+54mH5aSx6LSl44CC6K+36YeN6K+V5oiW5oiq5Zu+5pys5o+Q56S66IGU57O75rO96ZOt5ZOl44CCJyArIGUubWVzc2FnZSxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB1cGxvYWQgYmxvZ1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdmFyIHJlcyA9IGF3YWl0IGFwaS5uZXdQb3N0KHtcbiAgICAgICAgLy8gICBwYWNrOiBwYWNrXG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYXkgPSAnc3VjY2VzcycpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+WPkemAgeagkea0nuWksei0peOAguivt+aIquWbvuacrOaPkOekuu+8jOiBlOezu+azvemTreWTpeOAgicgKyBlLm1lc3NhZ2UsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgIGF3YWl0IHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip/vvIEnLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KVxuICAgICAgYXdhaXQgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICBkZWx0YTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==