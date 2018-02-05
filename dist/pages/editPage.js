'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      isAnonymous: false,
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
      anonymousChange: function anonymousChange() {
        this.isAnonymous = !this.isAnonymous;
        this.$apply();
      },


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
                    isAnonymous: this.isAnonymous,
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
                    url: api.blog.imageUpload.url,
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
                  _context3.next = 65;
                  return http({
                    url: api.blog.new.url,
                    method: api.blog.new.method,
                    data: pack
                  });

                case 65:
                  _context3.next = 72;
                  break;

                case 67:
                  _context3.prev = 67;
                  _context3.t2 = _context3['catch'](62);

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '发送树洞失败。请截图本提示，联系深大汪峰。' + _context3.t2.message,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 72:

                  _wepy2.default.hideToast();
                  _context3.next = 75;
                  return _wepy2.default.showToast({
                    title: '发送成功！',
                    icon: 'success',
                    duration: 1500,
                    mask: true
                  });

                case 75:

                  // save status
                  _wepy2.default.setStorageSync('isNeedReloadList', 'true');

                  _context3.next = 78;
                  return _wepy2.default.navigateBack({
                    delta: 1
                  });

                case 78:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[19, 57], [23, 43, 47, 55], [48,, 50, 54], [62, 67]]);
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NewBlog , 'pages/editPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRQYWdlLmpzIl0sIm5hbWVzIjpbIk5ld0Jsb2ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJjb250ZW50IiwiaW1hZ2VzIiwiaXNBbm9ueW1vdXMiLCJkZXZpY2UiLCJsb2NhdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZGlzYWJsZWQiLCJtZXRob2RzIiwiaW5wdXRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwibGVuZ3RoIiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicHVzaCIsIiRhcHBseSIsInByZXZpZXdJbWFnZSIsImN1ciIsImltYWdlTGlzdCIsImN1cnJlbnQiLCJ1cmxzIiwiZGVsZXRlSW1hZ2UiLCJpZHgiLCJzcGxpY2UiLCJjaG9vc2VMb2NhdGlvbiIsIm5hbWUiLCJyZW1vdmVMb2NhdGlvbiIsImFub255bW91c0NoYW5nZSIsInNlbmQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzZW5zaXRpdmVXb3JkQ2hlY2tlciIsImhpZGVUb2FzdCIsInNob3dNb2RhbCIsInNob3dDYW5jZWwiLCJ0ZXN0IiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJzdGF0dXMiLCJjb25maXJtIiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwicGFjayIsInYiLCJ1cGxvYWRGaWxlIiwidXJsIiwiYXBpIiwiYmxvZyIsImltYWdlVXBsb2FkIiwiZmlsZVBhdGgiLCJmb3JtRGF0YSIsIl9zZXNzaW9uIiwiZ2V0U3RvcmFnZVN5bmMiLCJyIiwiSlNPTiIsInBhcnNlIiwiZXJyY29kZSIsImVycm1zZyIsIm1lc3NhZ2UiLCJodHRwIiwibmV3IiwibWV0aG9kIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFN5c3RlbUluZm8iLCJtb2RlbCIsInJlcGxhY2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUE4QixTQUR2QjtBQUVQQyw4QkFBd0I7QUFGakIsSyxRQUtUQyxJLEdBQU87QUFDTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRGpDO0FBRUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUZsQztBQUdMQyxlQUFTLEVBSEo7QUFJTEMsY0FBUSxFQUpIO0FBS0xDLG1CQUFhLEtBTFI7QUFNTEMsY0FBUSxFQU5IO0FBT0xDLGdCQUFVLEVBUEw7QUFRTEMsZ0JBQVUsRUFSTDtBQVNMQyxpQkFBVyxFQVROO0FBVUxDLGdCQUFVO0FBVkwsSyxRQWFQQyxPLEdBQVU7QUFDUjs7Ozs7QUFLQUMsaUJBTlEsdUJBTUtDLENBTkwsRUFNUTtBQUNkLGFBQUtWLE9BQUwsR0FBZVUsRUFBRUMsTUFBRixDQUFTQyxLQUF4QjtBQUNBLGFBQUtMLFFBQUwsR0FBZ0JHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQixFQUFuQztBQUNELE9BVE87OztBQVdSOzs7QUFHTUMsaUJBZEU7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFlMEIsZUFBS0EsV0FBTCxDQUFpQjtBQUMvQ0MsMkJBQU8sSUFBSSxLQUFLYixNQUFMLENBQVljLE1BRHdCO0FBRS9DQyw4QkFBVTtBQUZxQyxtQkFBakIsQ0FmMUI7O0FBQUE7QUFBQTtBQWVFQywrQkFmRixTQWVFQSxhQWZGOztBQW1CTixrQ0FBS2hCLE1BQUwsRUFBWWlCLElBQVosbUNBQW9CRCxhQUFwQjtB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QUtDLFlBQUwsQ0FBa0I7QUFDdEJDLDJCQUFPO0FBRGUsbUJBQWxCLENBdE1BOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7OztBQTRNVjs7Ozs7Ozs7Ozt1QkFFMEIsZUFBS0MsYUFBTCxFOzs7O0FBQWhCQyxxQixTQUFBQSxLOztBQUNSLHFCQUFLeEUsTUFBTCxHQUFjd0UsTUFBTUMsT0FBTixDQUFjLE1BQWQsRUFBc0IsRUFBdEIsQ0FBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWxPaUMsZUFBS0MsSTs7a0JBQXJCdkYsTyIsImZpbGUiOiJlZGl0UGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbi8vIGltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcbi8vIGltcG9ydCBodHRwIGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXG4vLyBpbXBvcnQgc2Vuc2l0aXZlV29yZENoZWNrZXIgZnJvbSAnLi4vdXRpbHMvc2Vuc2l0aXZlV29yZENoZWNrZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0Jsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMyMEJFRUMnLFxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnvJbovpHlv4Pmg4UnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIGltYWdlczogW10sXG4gICAgaXNBbm9ueW1vdXM6IGZhbHNlLFxuICAgIGRldmljZTogJycsXG4gICAgbG9jYXRpb246ICcnLFxuICAgIGxhdGl0dWRlOiAnJyxcbiAgICBsb25naXR1ZGU6ICcnLFxuICAgIGRpc2FibGVkOiB0cnVlXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKlxuICAgICAqIOi+k+WFpeebkeWQrOWZqFxuICAgICAqIOiHquWKqOaYoOWwhOWIsCBjb250ZW50XG4gICAgICogQHBhcmFtIHtFdmVudH0gZSDovpPlhaXkuovku7ZcbiAgICAgKi9cbiAgICBpbnB1dENoYW5nZSAoZSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBlLmRldGFpbC52YWx1ZSA9PT0gJydcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YCJ5oup5Zu+54mHXG4gICAgICovXG4gICAgYXN5bmMgY2hvb3NlSW1hZ2UgKCkge1xuICAgICAgY29uc3QgeyB0ZW1wRmlsZVBhdGhzIH0gPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDkgLSB0aGlzLmltYWdlcy5sZW5ndGgsXG4gICAgICAgIHNpemVUeXBlOiAnY29tcHJlc3NlZCdcbiAgICAgIH0pXG4gICAgICB0aGlzLmltYWdlcy5wdXNoKC4uLnRlbXBGaWxlUGF0aHMpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOafpeeci+Wkp+WbvlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjdXIg5b2T5YmN5bGV56S65Zu+54mHXG4gICAgICogQHBhcmFtIHtBcnJheX0gIGltYWdlTGlzdCDlsZXnpLrnmoTlm77niYfliJfooahcbiAgICAgKi9cbiAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1hZ2VMaXN0KSB7XG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6IGN1cixcbiAgICAgICAgdXJsczogaW1hZ2VMaXN0XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliKDpmaTpgInkuK3lm77niYdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWR4IOimgeWIoOmZpOeahOWbvueJh+e0ouW8lVxuICAgICAqL1xuICAgIGRlbGV0ZUltYWdlIChpZHgpIHtcbiAgICAgIHRoaXMuaW1hZ2VzLnNwbGljZShpZHgsIDEpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS9jee9rlxuICAgICAqL1xuICAgIGFzeW5jIGNob29zZUxvY2F0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gYXdhaXQgd2VweS5jaG9vc2VMb2NhdGlvbigpXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBuYW1lXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSBsYXRpdHVkZVxuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IGxvbmdpdHVkZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliKDpmaTlnLDnkIbkvY3nva5cbiAgICAgKi9cbiAgICByZW1vdmVMb2NhdGlvbiAoKSB7XG4gICAgICB0aGlzLmxvY2F0aW9uID0gJydcbiAgICAgIHRoaXMubGF0aXR1ZGUgPSAnJ1xuICAgICAgdGhpcy5sb25naXR1ZGUgPSAnJ1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliIfmjaLlrp7lkI3jgIHljL/lkI1cbiAgICAgKi9cbiAgICBhbm9ueW1vdXNDaGFuZ2UgKCkge1xuICAgICAgdGhpcy5pc0Fub255bW91cyA9ICF0aGlzLmlzQW5vbnltb3VzXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWPkemAgeagkea0nlxuICAgICAqL1xuICAgIGFzeW5jIHNlbmQgKCkge1xuICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WPkemAgeS4rS4uLicsXG4gICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgZHVyYXRpb246IDEwMDAwLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoc2Vuc2l0aXZlV29yZENoZWNrZXIodGhpcy5jb250ZW50KSkge1xuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+WMheWQq+aVj+aEn+ivjeaxh++8jOWPkemAgeWksei0pe+8mu+8iScsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICgv6Ieq5p2AfOS4jeaDs+a0u+S6hi8udGVzdCh0aGlzLmNvbnRlbnQpKSB7XG4gICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5rip6aao5o+Q56S6JyxcbiAgICAgICAgICBjb250ZW50OiAn6ZyA6KaB5biu5Yqp77yf5rex5ZyzIDI0IOWwj+aXtuWFjei0ueW/g+eQhuWSqOivoueDree6v++8mjA3NTUtMjg3OTMxMjMnLFxuICAgICAgICAgIGNhbmNlbFRleHQ6ICfmi6jmiZPng63nur8nLFxuICAgICAgICAgIGNhbmNlbENvbG9yOiAnIzNDQzUxRicsXG4gICAgICAgICAgY29uZmlybVRleHQ6ICfnu6fnu63lj5HpgIEnLFxuICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyM2NjY2NjYnXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCFzdGF0dXMuY29uZmlybSkge1xuICAgICAgICAgIGF3YWl0IHdlcHkubWFrZVBob25lQ2FsbCh7XG4gICAgICAgICAgICBwaG9uZU51bWJlcjogJzA3NTUtMjg3OTMxMjMnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WPkemAgeS4rS4uLicsXG4gICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMDAsXG4gICAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYWNrID0ge1xuICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgIGlzQW5vbnltb3VzOiB0aGlzLmlzQW5vbnltb3VzLFxuICAgICAgICBpbWFnZXM6IFtdLFxuICAgICAgICBkZXZpY2U6IHRoaXMuZGV2aWNlLFxuICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcbiAgICAgICAgbGF0aXR1ZGU6IHRoaXMubGF0aXR1ZGUsXG4gICAgICAgIGxvbmdpdHVkZTogdGhpcy5sb25naXR1ZGVcbiAgICAgIH1cblxuICAgICAgLy8gdXBsb2FkIGltYWdlc1xuICAgICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKGxldCB2IG9mIHRoaXMuaW1hZ2VzKSB7XG4gICAgICAgICAgICBjb25zdCByID0gYXdhaXQgd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgdXJsOiBhcGkuYmxvZy5pbWFnZVVwbG9hZC51cmwsXG4gICAgICAgICAgICAgIGZpbGVQYXRoOiB2LFxuICAgICAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgICAgICAgICAgX3Nlc3Npb246IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ19zZXNzaW9uJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgci5kYXRhID0gSlNPTi5wYXJzZShyLmRhdGEpXG5cbiAgICAgICAgICAgIGlmIChyLmRhdGEuZXJyY29kZSA9PT0gMCAmJiByLmRhdGEuZGF0YS51cmwpIHtcbiAgICAgICAgICAgICAgcGFjay5pbWFnZXMucHVzaChyLmRhdGEuZGF0YS51cmwpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+acjeWKoeWZqOmUmeivr++8jOS4iuS8oOWbvueJh+Wksei0peOAguivt+mHjeivlX7vvJrvvIknICsgci5kYXRhLmVycm1zZyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+acjeWKoeWZqOmUmeivr++8jOS4iuS8oOWbvueJh+Wksei0peOAguivt+mHjeivleaIluaIquWbvuacrOaPkOekuuiBlOezu+a3seWkp+axquWzsOOAgicgKyBlLm1lc3NhZ2UsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdXBsb2FkIGJsb2dcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGh0dHAoe1xuICAgICAgICAgIHVybDogYXBpLmJsb2cubmV3LnVybCxcbiAgICAgICAgICBtZXRob2Q6IGFwaS5ibG9nLm5ldy5tZXRob2QsXG4gICAgICAgICAgZGF0YTogcGFja1xuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+WPkemAgeagkea0nuWksei0peOAguivt+aIquWbvuacrOaPkOekuu+8jOiBlOezu+a3seWkp+axquWzsOOAgicgKyBlLm1lc3NhZ2UsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgIGF3YWl0IHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip/vvIEnLFxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KVxuXG4gICAgICAvLyBzYXZlIHN0YXR1c1xuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnaXNOZWVkUmVsb2FkTGlzdCcsICd0cnVlJylcblxuICAgICAgYXdhaXQgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICBkZWx0YTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBsb2FkIGRldmljZSBpbmZvXG4gIGFzeW5jIG9uU2hvdyAoKSB7XG4gICAgY29uc3QgeyBtb2RlbCB9ID0gYXdhaXQgd2VweS5nZXRTeXN0ZW1JbmZvKClcbiAgICB0aGlzLmRldmljZSA9IG1vZGVsLnJlcGxhY2UoLzwuKj4vLCAnJylcbiAgfVxufVxuIl19