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
      type: '',
      currentUser_id: '',
      post_id: ''
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
          var pack, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v, r, res;

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
                  // console.log('this.currentUser_id: ' + this.currentUser_id);
                  pack = {
                    user_id: this.currentUser_id,
                    type: this.type,
                    content: this.content,
                    images: [],
                    location: this.location,
                    latitude: this.latitude,
                    longitude: this.longitude
                  };

                  if (this.type = 'comment') {
                    pack.to_post = this.post_id;
                  }
                  // upload images
                  // upload images

                  if (!(this.images.length > 0)) {
                    _context3.next = 41;
                    break;
                  }

                  _context3.prev = 4;
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context3.prev = 8;
                  _iterator = this.images[Symbol.iterator]();

                case 10:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context3.next = 20;
                    break;
                  }

                  v = _step.value;
                  _context3.next = 14;
                  return _wepy2.default.uploadFile({
                    url: 'http://127.0.0.1:8000/api/upload/image',
                    filePath: v,
                    name: 'file',
                    success: function success(res) {
                      console.log('image has been successfully saved in server. Congrats!');
                    }
                  });

                case 14:
                  r = _context3.sent;


                  r.data = JSON.parse(r.data);
                  if (r.data.img) {
                    pack.images.push(r.data.img);
                  } else {
                    _wepy2.default.hideToast();
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '服务器错误，上传图片失败。请重试~：）' + r.data.errmsg,
                      showCancel: false
                    });
                  }

                case 17:
                  _iteratorNormalCompletion = true;
                  _context3.next = 10;
                  break;

                case 20:
                  _context3.next = 26;
                  break;

                case 22:
                  _context3.prev = 22;
                  _context3.t0 = _context3['catch'](8);
                  _didIteratorError = true;
                  _iteratorError = _context3.t0;

                case 26:
                  _context3.prev = 26;
                  _context3.prev = 27;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 29:
                  _context3.prev = 29;

                  if (!_didIteratorError) {
                    _context3.next = 32;
                    break;
                  }

                  throw _iteratorError;

                case 32:
                  return _context3.finish(29);

                case 33:
                  return _context3.finish(26);

                case 34:
                  _context3.next = 41;
                  break;

                case 36:
                  _context3.prev = 36;
                  _context3.t1 = _context3['catch'](4);

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '服务器错误，上传图片失败。' + _context3.t1.message,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 41:
                  _context3.prev = 41;

                  console.log('pack; ' + JSON.stringify(pack));
                  _context3.next = 45;
                  return _api2.default.newPost({
                    query: {
                      pack: pack
                    },
                    method: "POST"
                  });

                case 45:
                  res = _context3.sent;

                  if (!(res.data && res.data.flag == 'success')) {
                    _context3.next = 51;
                    break;
                  }

                  // console.log('data from post: res.data:  ' + JSON.stringify(res.data));
                  _wepy2.default.hideToast();
                  _context3.next = 50;
                  return _wepy2.default.showToast({
                    title: '发送成功！',
                    icon: 'success',
                    duration: 1500,
                    mask: true
                  });

                case 50:
                  _wepy2.default.navigateBack({
                    delta: 1
                  });

                case 51:
                  _context3.next = 58;
                  break;

                case 53:
                  _context3.prev = 53;
                  _context3.t2 = _context3['catch'](41);

                  _wepy2.default.hideToast();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请截图本提示，联系泽铭。' + _context3.t2.message,
                    showCancel: false
                  });
                  return _context3.abrupt('return');

                case 58:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[4, 36], [8, 22, 26, 34], [27,, 29, 33], [41, 53]]);
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
      this.currentUser_id = option.user_id;
      this.post_id = option.post_id;
      // console.log(this.currentUser_id);
      if (this.type == 'comment') {
        _wepy2.default.setNavigationBarTitle({ title: '编辑评论' });
      } else if (this.type == 'post') {
        _wepy2.default.setNavigationBarTitle({ title: '编辑心情' });
      }
    }
  }]);

  return NewBlog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NewBlog , 'pages/editPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRQYWdlLmpzIl0sIm5hbWVzIjpbIk5ld0Jsb2ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJjb250ZW50IiwiaW1hZ2VzIiwibG9jYXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInR5cGUiLCJjdXJyZW50VXNlcl9pZCIsInBvc3RfaWQiLCJtZXRob2RzIiwiaW5wdXRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwibGVuZ3RoIiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicHVzaCIsIiRhcHBseSIsInByZXZpZXdJbWFnZSIsImN1ciIsImltYWdlTGlzdCIsImN1cnJlbnQiLCJ1cmxzIiwiZGVsZXRlSW1hZ2UiLCJpZHgiLCJzcGxpY2UiLCJjaG9vc2VMb2NhdGlvbiIsIm5hbWUiLCJyZW1vdmVMb2NhdGlvbiIsInNlbmQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJwYWNrIiwidXNlcl9pZCIsInRvX3Bvc3QiLCJ2IiwidXBsb2FkRmlsZSIsInVybCIsImZpbGVQYXRoIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyIiwiSlNPTiIsInBhcnNlIiwiaW1nIiwiaGlkZVRvYXN0Iiwic2hvd01vZGFsIiwiZXJybXNnIiwic2hvd0NhbmNlbCIsIm1lc3NhZ2UiLCJzdHJpbmdpZnkiLCJuZXdQb3N0IiwicXVlcnkiLCJtZXRob2QiLCJmbGFnIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJvcHRpb24iLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7OzsyQkFYRlMsTSxFQUFRO0FBQ2QsV0FBSzNELElBQUwsR0FBWTJELE9BQU8zRCxJQUFuQjtBQUNBLFdBQUtDLGNBQUwsR0FBc0IwRCxPQUFPMUIsT0FBN0I7QUFDQSxXQUFLL0IsT0FBTCxHQUFleUQsT0FBT3pELE9BQXRCO0FBQ0E7QUFDQSxVQUFHLEtBQUtGLElBQUwsSUFBYSxTQUFoQixFQUEyQjtBQUN6Qix1QkFBSzRELHFCQUFMLENBQTJCLEVBQUNoQyxPQUFPLE1BQVIsRUFBM0I7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLNUIsSUFBTCxJQUFhLE1BQWpCLEVBQXlCO0FBQzlCLHVCQUFLNEQscUJBQUwsQ0FBMkIsRUFBQ2hDLE9BQU8sTUFBUixFQUEzQjtBQUNEO0FBQ0Y7Ozs7RUE1QmtDLGVBQUtpQyxJOztrQkFBckI1RSxPIiwiZmlsZSI6ImVkaXRQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0Jsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMyMEJFRUMnLFxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIGltYWdlczogW10sXG4gICAgbG9jYXRpb246ICcnLFxuICAgIGxhdGl0dWRlOiAnJyxcbiAgICBsb25naXR1ZGU6ICcnLFxuICAgIHR5cGU6ICcnLFxuICAgIGN1cnJlbnRVc2VyX2lkOiAnJyxcbiAgICBwb3N0X2lkOiAnJ1xuICB9XG4gIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgdGhpcy50eXBlID0gb3B0aW9uLnR5cGVcbiAgICB0aGlzLmN1cnJlbnRVc2VyX2lkID0gb3B0aW9uLnVzZXJfaWRcbiAgICB0aGlzLnBvc3RfaWQgPSBvcHRpb24ucG9zdF9pZFxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFVzZXJfaWQpO1xuICAgIGlmKHRoaXMudHlwZSA9PSAnY29tbWVudCcpIHtcbiAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogJ+e8lui+keivhOiuuid9KVxuICAgIH0gZWxzZSBpZiggdGhpcy50eXBlID09ICdwb3N0JyApe1xuICAgICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiAn57yW6L6R5b+D5oOFJ30pXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgLyoqXG4gICAgICog6L6T5YWl55uR5ZCs5ZmoXG4gICAgICog6Ieq5Yqo5pig5bCE5YiwIGNvbnRlbnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIOi+k+WFpeS6i+S7tlxuICAgICAqL1xuICAgIGlucHV0Q2hhbmdlIChlKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpgInmi6nlm77niYdcbiAgICAgKi9cbiAgICBhc3luYyBjaG9vc2VJbWFnZSAoKSB7XG4gICAgICBjb25zdCB7IHRlbXBGaWxlUGF0aHMgfSA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogOSAtIHRoaXMuaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgc2l6ZVR5cGU6ICdjb21wcmVzc2VkJ1xuICAgICAgfSlcbiAgICAgIHRoaXMuaW1hZ2VzLnB1c2goLi4udGVtcEZpbGVQYXRocylcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5p+l55yL5aSn5Zu+XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGN1ciDlvZPliY3lsZXnpLrlm77niYdcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgaW1hZ2VMaXN0IOWxleekuueahOWbvueJh+WIl+ihqFxuICAgICAqL1xuICAgIHByZXZpZXdJbWFnZSAoY3VyLCBpbWFnZUxpc3QpIHtcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgY3VycmVudDogY3VyLFxuICAgICAgICB1cmxzOiBpbWFnZUxpc3RcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIoOmZpOmAieS4reWbvueJh1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZHgg6KaB5Yig6Zmk55qE5Zu+54mH57Si5byVXG4gICAgICovXG4gICAgZGVsZXRlSW1hZ2UgKGlkeCkge1xuICAgICAgdGhpcy5pbWFnZXMuc3BsaWNlKGlkeCwgMSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5re75Yqg5L2N572uXG4gICAgICovXG4gICAgYXN5bmMgY2hvb3NlTG9jYXRpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBhd2FpdCB3ZXB5LmNob29zZUxvY2F0aW9uKClcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG5hbWVcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGxhdGl0dWRlXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9uZ2l0dWRlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIoOmZpOWcsOeQhuS9jee9rlxuICAgICAqL1xuICAgIHJlbW92ZUxvY2F0aW9uICgpIHtcbiAgICAgIHRoaXMubG9jYXRpb24gPSAnJ1xuICAgICAgdGhpcy5sYXRpdHVkZSA9ICcnXG4gICAgICB0aGlzLmxvbmdpdHVkZSA9ICcnXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlj5HpgIHmoJHmtJ5cbiAgICAgKi9cbiAgICBhc3luYyBzZW5kICgpIHtcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICflj5HpgIHkuK0uLi4nLFxuICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwMCxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmN1cnJlbnRVc2VyX2lkOiAnICsgdGhpcy5jdXJyZW50VXNlcl9pZCk7XG4gICAgICBjb25zdCBwYWNrID0ge1xuICAgICAgICB1c2VyX2lkOiB0aGlzLmN1cnJlbnRVc2VyX2lkLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24sXG4gICAgICAgIGxhdGl0dWRlOiB0aGlzLmxhdGl0dWRlLFxuICAgICAgICBsb25naXR1ZGU6IHRoaXMubG9uZ2l0dWRlXG4gICAgICB9XG4gICAgICBpZih0aGlzLnR5cGUgPSAnY29tbWVudCcpIHtcbiAgICAgICAgcGFjay50b19wb3N0ID0gdGhpcy5wb3N0X2lkXG4gICAgICB9XG4gICAgICAvLyB1cGxvYWQgaW1hZ2VzXG4gICAgICAvLyB1cGxvYWQgaW1hZ2VzXG4gICAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAobGV0IHYgb2YgdGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBhd2FpdCB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VwbG9hZC9pbWFnZScsXG4gICAgICAgICAgICAgIGZpbGVQYXRoOiB2LFxuICAgICAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc2F2ZWQgaW4gc2VydmVyLiBDb25ncmF0cyEnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByLmRhdGEgPSBKU09OLnBhcnNlKHIuZGF0YSlcbiAgICAgICAgICAgIGlmIChyLmRhdGEuaW1nKSB7XG4gICAgICAgICAgICAgIHBhY2suaW1hZ2VzLnB1c2goci5kYXRhLmltZylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM5LiK5Lyg5Zu+54mH5aSx6LSl44CC6K+36YeN6K+Vfu+8mu+8iScgKyByLmRhdGEuZXJybXNnLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgd2VweS5oaWRlVG9hc3QoKVxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmnI3liqHlmajplJnor6/vvIzkuIrkvKDlm77niYflpLHotKXjgIInICsgZS5tZXNzYWdlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHVwbG9hZCBibG9nXG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZygncGFjazsgJyArIEpTT04uc3RyaW5naWZ5KHBhY2spKVxuICAgICAgICB2YXIgcmVzID0gYXdhaXQgYXBpLm5ld1Bvc3Qoe1xuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBwYWNrOiBwYWNrXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgICAgIH0pXG4gICAgICAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGEgZnJvbSBwb3N0OiByZXMuZGF0YTogICcgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xuICAgICAgICAgIHdlcHkuaGlkZVRvYXN0KClcbiAgICAgICAgICBhd2FpdCB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKn++8gScsXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB3ZXB5LmhpZGVUb2FzdCgpXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+ivt+aIquWbvuacrOaPkOekuu+8jOiBlOezu+azvemTreOAgicgKyBlLm1lc3NhZ2UsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=