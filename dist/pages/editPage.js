'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

// import { api } from '../config'
// import http from '../utils/request'
// import sensitiveWordChecker from '../utils/sensitiveWordChecker'

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
      // isAnonymous: false,
      device: '',
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
       * 切换实名、匿名
       */
      // anonymousChange () {
      //   this.isAnonymous = !this.isAnonymous
      //   this.$apply()
      // },

      /**
       * 发送树洞
       */
      send: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var status, pack, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, r;

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

                  if (!sensitiveWordChecker(this.content)) {
                    _context3.next = 5;
                    break;
                  }

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '包含敏感词汇，发送失败：）',
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 5:
                  if (!/自杀|不想活了/.test(this.content)) {
                    _context3.next = 17;
                    break;
                  }

                  _wepy2.default.hideToast();
                  _context3.next = 9;
                  return _wepy2.default.showModal({
                    title: '温馨提示',
                    content: '需要帮助？深圳 24 小时免费心理咨询热线：0755-28793123',
                    cancelText: '拨打热线',
                    cancelColor: '#3CC51F',
                    confirmText: '继续发送',
                    confirmColor: '#666666'
                  });

                case 9:
                  status = _context3.sent;

                  if (status.confirm) {
                    _context3.next = 16;
                    break;
                  }

                  _context3.next = 13;
                  return _wepy2.default.makePhoneCall({
                    phoneNumber: '0755-28793123'
                  });

                case 13:
                  return _context3.abrupt('return');

                case 16:
                  _wepy2.default.showToast({
                    title: '发送中...',
                    icon: 'loading',
                    duration: 10000,
                    mask: true
                  });

                case 17:
                  pack = {
                    content: this.content,
                    images: [],
                    device: this.device,
                    location: this.location,
                    latitude: this.latitude,
                    longitude: this.longitude

                    // upload images
                  };

                  if (!(this.images.length > 0)) {
                    _context3.next = 62;
                    break;
                  }

                  _context3.prev = 19;
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context3.prev = 23;
                  _iterator = this.images[Symbol.iterator]();

                case 25:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context3.next = 41;
                    break;
                  }

                  v = _step.value;
                  _context3.next = 29;
                  return _wepy2.default.uploadFile({
                    url: _api2.default.blog.imageUpload.url,
                    filePath: v,
                    name: 'file',
                    formData: {
                      _session: _wepy2.default.getStorageSync('_session')
                    }
                  });

                case 29:
                  r = _context3.sent;


                  r.data = JSON.parse(r.data);

                  if (!(r.data.errcode === 0 && r.data.data.url)) {
                    _context3.next = 35;
                    break;
                  }

                  pack.images.push(r.data.data.url);
                  _context3.next = 38;
                  break;

                case 35:
                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '服务器错误，上传图片失败。请重试~：）' + r.data.errmsg,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 38:
                  _iteratorNormalCompletion = true;
                  _context3.next = 25;
                  break;

                case 41:
                  _context3.next = 47;
                  break;

                case 43:
                  _context3.prev = 43;
                  _context3.t0 = _context3['catch'](23);
                  _didIteratorError = true;
                  _iteratorError = _context3.t0;

                case 47:
                  _context3.prev = 47;
                  _context3.prev = 48;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 50:
                  _context3.prev = 50;

                  if (!_didIteratorError) {
                    _context3.next = 53;
                    break;
                  }

                  throw _iteratorError;

                case 53:
                  return _context3.finish(50);

                case 54:
                  return _context3.finish(47);

                case 55:
                  _context3.next = 62;
                  break;

                case 57:
                  _context3.prev = 57;
                  _context3.t1 = _context3['catch'](19);

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '服务器错误，上传图片失败。请重试或截图本提示联系深大汪峰。' + _context3.t1.message,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 62:
                  _context3.prev = 62;
                  _context3.next = 70;
                  break;

                case 65:
                  _context3.prev = 65;
                  _context3.t2 = _context3['catch'](62);

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '发送树洞失败。请截图本提示，联系深大汪峰。' + _context3.t2.message,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 70:

                  _wepy2.default.hideToast();
                  _context3.next = 73;
                  return _wepy2.default.showToast({
                    title: '发送成功！',
                    icon: 'success',
                    duration: 1500,
                    mask: true
                  });

                case 73:

                  // save status
                  _wepy2.default.setStorageSync('isNeedReloadList', 'true');

                  _context3.next = 76;
                  return _wepy2.default.navigateBack({
                    delta: 1
                  });

                case 76:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[19, 57], [23, 43, 47, 55], [48,, 50, 54], [62, 65]]);
        }));

        function send() {
          return _ref6.apply(this, arguments);
        }

        return send;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewBlog, [{
    key: 'onShow',


    // load device info
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _ref8, model;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wepy2.default.getSystemInfo();

              case 2:
                _ref8 = _context4.sent;
                model = _ref8.model;

                this.device = model.replace(/<.*>/, '');

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onShow() {
        return _ref7.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return NewBlog;
}(_wepy2.default.page);

exports.default = NewBlog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRQYWdlLmpzIl0sIm5hbWVzIjpbIk5ld0Jsb2ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJjb250ZW50IiwiaW1hZ2VzIiwiZGV2aWNlIiwibG9jYXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImRpc2FibGVkIiwibWV0aG9kcyIsImlucHV0Q2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsImxlbmd0aCIsInNpemVUeXBlIiwidGVtcEZpbGVQYXRocyIsInB1c2giLCIkYXBwbHkiLCJwcmV2aWV3SW1hZ2UiLCJjdXIiLCJpbWFnZUxpc3QiLCJjdXJyZW50IiwidXJscyIsImRlbGV0ZUltYWdlIiwiaWR4Iiwic3BsaWNlIiwiY2hvb3NlTG9jYXRpb24iLCJuYW1lIiwicmVtb3ZlTG9jYXRpb24iLCJzZW5kIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic2Vuc2l0aXZlV29yZENoZWNrZXIiLCJoaWRlVG9hc3QiLCJzaG93TW9kYWwiLCJzaG93Q2FuY2VsIiwidGVzdCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwic3RhdHVzIiwiY29uZmlybSIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsInBhY2siLCJ2IiwidXBsb2FkRmlsZSIsInVybCIsImJsb2ciLCJpbWFnZVVwbG9hZCIsImZpbGVQYXRoIiwiZm9ybURhdGEiLCJfc2Vzc2lvbiIsImdldFN0b3JhZ2VTeW5jIiwiciIsIkpTT04iLCJwYXJzZSIsImVycmNvZGUiLCJlcnJtc2ciLCJtZXNzYWdlIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFN5c3RlbUluZm8iLCJtb2RlbCIsInJlcGxhY2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QjtBQUZqQixLLFFBS1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxjQUFRLEVBSkg7QUFLTDtBQUNBQyxjQUFRLEVBTkg7QUFPTEMsZ0JBQVUsRUFQTDtBQVFMQyxnQkFBVSxFQVJMO0FBU0xDLGlCQUFXLEVBVE47QUFVTEMsZ0JBQVU7QUFWTCxLLFFBYVBDLE8sR0FBVTtBQUNSOzs7OztBQUtBQyxpQkFOUSx1QkFNS0MsQ0FOTCxFQU1RO0FBQ2QsYUFBS1QsT0FBTCxHQUFlUyxFQUFFQyxNQUFGLENBQVNDLEtBQXhCO0FBQ0EsYUFBS0wsUUFBTCxHQUFnQkcsRUFBRUMsTUFBRixDQUFTQyxLQUFULEtBQW1CLEVBQW5DO0FBQ0QsT0FUTzs7O0FBV1I7OztBQUdNQyxpQkFkRTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWUwQixlQUFLQSxXQUFMLENBQWlCO0FBQy9DQywyQkFBTyxJQUFJLEtBQUtaLE1BQUwsQ0FBWWEsTUFEd0I7QUFFL0NDLDhCQUFVO0FBRnFDLG1CQUFqQixDQWYxQjs7QUFBQTtBQUFBO0FBZUVDLCtCQWZGLFNBZUVBLGFBZkY7O0FBbUJOLGtDQUFLZixNQUFMLEVBQVlnQixJQUFaLG1DQUFvQkQsYUFBcEI7QUFDQSx1QkFBS0UsTUFBTDs7QUFwQk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtB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ZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuLy8gaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xuLy8gaW1wb3J0IGh0dHAgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCdcbi8vIGltcG9ydCBzZW5zaXRpdmVXb3JkQ2hlY2tlciBmcm9tICcuLi91dGlscy9zZW5zaXRpdmVXb3JkQ2hlY2tlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3QmxvZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzIwQkVFQycsXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e8lui+keW/g+aDhSdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgY29udGVudDogJycsXG4gICAgaW1hZ2VzOiBbXSxcbiAgICAvLyBpc0Fub255bW91czogZmFsc2UsXG4gICAgZGV2aWNlOiAnJyxcbiAgICBsb2NhdGlvbjogJycsXG4gICAgbGF0aXR1ZGU6ICcnLFxuICAgIGxvbmdpdHVkZTogJycsXG4gICAgZGlzYWJsZWQ6IHRydWVcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLyoqXG4gICAgICog6L6T5YWl55uR5ZCs5ZmoXG4gICAgICog6Ieq5Yqo5pig5bCE5YiwIGNvbnRlbnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIOi+k+WFpeS6i+S7tlxuICAgICAqL1xuICAgIGlucHV0Q2hhbmdlIChlKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy5kaXNhYmxlZCA9IGUuZGV0YWlsLnZhbHVlID09PSAnJ1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpgInmi6nlm77niYdcbiAgICAgKi9cbiAgICBhc3luYyBjaG9vc2VJbWFnZSAoKSB7XG4gICAgICBjb25zdCB7IHRlbXBGaWxlUGF0aHMgfSA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogOSAtIHRoaXMuaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgc2l6ZVR5cGU6ICdjb21wcmVzc2VkJ1xuICAgICAgfSlcbiAgICAgIHRoaXMuaW1hZ2VzLnB1c2goLi4udGVtcEZpbGVQYXRocylcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5p+l55yL5aSn5Zu+XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGN1ciDlvZPliY3lsZXnpLrlm77niYdcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgaW1hZ2VMaXN0IOWxleekuueahOWbvueJh+WIl+ihqFxuICAgICAqL1xuICAgIHByZXZpZXdJbWFnZSAoY3VyLCBpbWFnZUxpc3QpIHtcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgY3VycmVudDogY3VyLFxuICAgICAgICB1cmxzOiBpbWFnZUxpc3RcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIoOmZpOmAieS4reWbvueJh1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZHgg6KaB5Yig6Zmk55qE5Zu+54mH57Si5byVXG4gICAgICovXG4gICAgZGVsZXRlSW1hZ2UgKGlkeCkge1xuICAgICAgdGhpcy5pbWFnZXMuc3BsaWNlKGlkeCwgMSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5re75Yqg5L2N572uXG4gICAgICovXG4gICAgYXN5bmMgY2hvb3NlTG9jYXRpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBhd2FpdCB3ZXB5LmNob29zZUxvY2F0aW9uKClcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5hbWVcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGxhdGl0dWRlXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9uZ2l0dWRlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIoOmZpOWcsOeQhuS9jee9rlxuICAgICAqL1xuICAgIHJlbW92ZUxvY2F0aW9uICgpIHtcbiAgICAgIHRoaXMubG9jYXRpb24gPSAnJ1xuICAgICAgdGhpcy5sYXRpdHVkZSA9ICcnXG4gICAgICB0aGlzLmxvbmdpdHVkZSA9ICcnXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIh+aNouWunuWQjeOAgeWMv+WQjVxuICAgICAqL1xuICAgIC8vIGFub255bW91c0NoYW5nZSAoKSB7XG4gICAgLy8gICB0aGlzLmlzQW5vbnltb3VzID0gIXRoaXMuaXNBbm9ueW1vdXNcbiAgICAvLyAgIHRoaXMuJGFwcGx5KClcbiAgICAvLyB9LFxuXG4gICAgLyoqXG4gICAgICog5Y+R6YCB5qCR5rSeXG4gICAgICovXG4gICAgYXN5bmMgc2VuZCAoKSB7XG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5Y+R6YCB5LitLi4uJyxcbiAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMDAsXG4gICAgICAgIG1hc2s6IHRydWVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChzZW5zaXRpdmVXb3JkQ2hlY2tlcih0aGlzLmNvbnRlbnQpKSB7XG4gICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICBjb250ZW50OiAn5YyF5ZCr5pWP5oSf6K+N5rGH77yM5Y+R6YCB5aSx6LSl77ya77yJJyxcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKC/oh6rmnYB85LiN5oOz5rS75LqGLy50ZXN0KHRoaXMuY29udGVudCkpIHtcbiAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLFxuICAgICAgICAgIGNvbnRlbnQ6ICfpnIDopoHluK7liqnvvJ/mt7HlnLMgMjQg5bCP5pe25YWN6LS55b+D55CG5ZKo6K+i54Ot57q/77yaMDc1NS0yODc5MzEyMycsXG4gICAgICAgICAgY2FuY2VsVGV4dDogJ+aLqOaJk+eDree6vycsXG4gICAgICAgICAgY2FuY2VsQ29sb3I6ICcjM0NDNTFGJyxcbiAgICAgICAgICBjb25maXJtVGV4dDogJ+e7p+e7reWPkemAgScsXG4gICAgICAgICAgY29uZmlybUNvbG9yOiAnIzY2NjY2NidcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXN0YXR1cy5jb25maXJtKSB7XG4gICAgICAgICAgYXdhaXQgd2VweS5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiAnMDc1NS0yODc5MzEyMydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Y+R6YCB5LitLi4uJyxcbiAgICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMCxcbiAgICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhY2sgPSB7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgZGV2aWNlOiB0aGlzLmRldmljZSxcbiAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24sXG4gICAgICAgIGxhdGl0dWRlOiB0aGlzLmxhdGl0dWRlLFxuICAgICAgICBsb25naXR1ZGU6IHRoaXMubG9uZ2l0dWRlXG4gICAgICB9XG5cbiAgICAgIC8vIHVwbG9hZCBpbWFnZXNcbiAgICAgIGlmICh0aGlzLmltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChsZXQgdiBvZiB0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgY29uc3QgciA9IGF3YWl0IHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICAgIHVybDogYXBpLmJsb2cuaW1hZ2VVcGxvYWQudXJsLFxuICAgICAgICAgICAgICBmaWxlUGF0aDogdixcbiAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgICAgIF9zZXNzaW9uOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdfc2Vzc2lvbicpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHIuZGF0YSA9IEpTT04ucGFyc2Uoci5kYXRhKVxuXG4gICAgICAgICAgICBpZiAoci5kYXRhLmVycmNvZGUgPT09IDAgJiYgci5kYXRhLmRhdGEudXJsKSB7XG4gICAgICAgICAgICAgIHBhY2suaW1hZ2VzLnB1c2goci5kYXRhLmRhdGEudXJsKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmnI3liqHlmajplJnor6/vvIzkuIrkvKDlm77niYflpLHotKXjgILor7fph43or5V+77ya77yJJyArIHIuZGF0YS5lcnJtc2csXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmnI3liqHlmajplJnor6/vvIzkuIrkvKDlm77niYflpLHotKXjgILor7fph43or5XmiJbmiKrlm77mnKzmj5DnpLrogZTns7vmt7HlpKfmsarls7DjgIInICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHVwbG9hZCBibG9nXG4gICAgICB0cnkge1xuICAgICAgICAvLyB2YXIgcmVzID0gYXdhaXQgYXBpLm5ld1Bvc3Qoe1xuICAgICAgICAvLyAgIHBhY2s6IHBhY2tcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxheSA9ICdzdWNjZXNzJykge1xuICAgICAgICAvL1xuICAgICAgICAvLyB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICBjb250ZW50OiAn5Y+R6YCB5qCR5rSe5aSx6LSl44CC6K+35oiq5Zu+5pys5o+Q56S677yM6IGU57O75rex5aSn5rGq5bOw44CCJyArIGUubWVzc2FnZSxcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgYXdhaXQgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKn++8gScsXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIG1hc2s6IHRydWVcbiAgICAgIH0pXG5cbiAgICAgIC8vIHNhdmUgc3RhdHVzXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdpc05lZWRSZWxvYWRMaXN0JywgJ3RydWUnKVxuXG4gICAgICBhd2FpdCB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgIGRlbHRhOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIGxvYWQgZGV2aWNlIGluZm9cbiAgYXN5bmMgb25TaG93ICgpIHtcbiAgICBjb25zdCB7IG1vZGVsIH0gPSBhd2FpdCB3ZXB5LmdldFN5c3RlbUluZm8oKVxuICAgIHRoaXMuZGV2aWNlID0gbW9kZWwucmVwbGFjZSgvPC4qPi8sICcnKVxuICB9XG59XG4iXX0=