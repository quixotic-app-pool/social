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

var _util = require('./../utils/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarBackgroundColor: '#FFD300'
    }, _this.props = {
      postData: {
        type: Object,
        default: {}
      },
      hideLine: {
        type: Boolean,
        default: false
      }
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      currentUser_id: '',
      likeDone: false
    }, _this.methods = {
      previewImage: function previewImage(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },
      like: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var self, res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  self = this;
                  _context.next = 3;
                  return _api2.default.like({
                    query: {
                      pack: {
                        user_id: self.currentUser_id,
                        post_id: self.postData._id
                      }
                    },
                    method: 'POST'
                  });

                case 3:
                  res = _context.sent;

                  //  console.log('like: ' + JSON.stringify(res.data))
                  if (res.data && res.data.flag == 'success') {
                    this.postData.likedBy.push(this.currentUser_id);
                    this.$apply();
                    //  list = res.data.data
                  }

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function like() {
          return _ref2.apply(this, arguments);
        }

        return like;
      }(),
      go: function go() {
        _wepy2.default.navigateTo({
          url: 'detailPage?post_id=' + this.postData._id
        });
      },
      moreOption: function moreOption() {
        var self = this;
        _wepy2.default.showActionSheet({
          itemList: ['删除', '举报', '取消关注']
        }).then(function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(res) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    // console.log(JSON.stringify(res));
                    if (res.tapIndex == 0) {
                      _wepy2.default.showModal({
                        title: 'Really？',
                        content: '你确定要删除这条状态吗？'
                      }).then(function () {
                        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
                          var r;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (!res.confirm) {
                                    _context2.next = 5;
                                    break;
                                  }

                                  _context2.next = 3;
                                  return _api2.default.delPost({
                                    query: {
                                      pack: {
                                        post_id: self.postData._id,
                                        type: 'post'
                                      }
                                    },
                                    method: 'POST'
                                  });

                                case 3:
                                  r = _context2.sent;

                                  // console.log('res.data: ' + JSON.stringify(r.data));
                                  if (r.data && r.data.flag == 'success') {
                                    _wepy2.default.reLaunch({
                                      url: 'timelinePage'
                                    });
                                  }

                                case 5:
                                case 'end':
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));

                        return function (_x2) {
                          return _ref4.apply(this, arguments);
                        };
                      }());
                    } else if (res.tapIndex == 1) {
                      _wepy2.default.showModal({
                        title: 'Really？',
                        content: '你确定要举报这个小坏蛋吗？'
                      }).then(function () {
                        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(res) {
                          var result;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (!res.confirm) {
                                    _context3.next = 7;
                                    break;
                                  }

                                  _context3.next = 3;
                                  return _api2.default.report({
                                    query: {
                                      pack: {
                                        to_id: self.postData._id,
                                        from_user_id: self.currentUser_id
                                      }
                                    },
                                    method: 'POST'
                                  });

                                case 3:
                                  result = _context3.sent;

                                  if (!(result.data && result.data.flag == 'success')) {
                                    _context3.next = 7;
                                    break;
                                  }

                                  _context3.next = 7;
                                  return _wepy2.default.showToast({
                                    title: '举报成功！',
                                    icon: 'success',
                                    duration: 1500,
                                    mask: true
                                  });

                                case 7:
                                case 'end':
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));

                        return function (_x3) {
                          return _ref5.apply(this, arguments);
                        };
                      }());
                    } else if (res.tapIndex == 2) {
                      _wepy2.default.showModal({
                        title: 'Really？',
                        content: '你真的不想再关注TA了吗？'
                      }).then(function () {
                        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(res) {
                          var r;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  if (!res.confirm) {
                                    _context4.next = 8;
                                    break;
                                  }

                                  _context4.next = 3;
                                  return _api2.default.unsubscribe({
                                    pack: {
                                      from_id: self.currentUser_id,
                                      to_id: self.postData.from_user._id
                                    }
                                  });

                                case 3:
                                  r = _context4.sent;

                                  if (!true) {
                                    _context4.next = 8;
                                    break;
                                  }

                                  _context4.next = 7;
                                  return _wepy2.default.showToast({
                                    title: '取消关注成功！',
                                    icon: 'success',
                                    duration: 1500,
                                    mask: true
                                  });

                                case 7:
                                  _wepy2.default.reLaunch({
                                    url: 'timelinePage'
                                  });

                                case 8:
                                case 'end':
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));

                        return function (_x4) {
                          return _ref6.apply(this, arguments);
                        };
                      }());
                    }

                  case 1:
                  case 'end':
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.currentUser_id = _wepy2.default.getStorageSync('UserId');
    }
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RDb21wb25lbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJwb3N0RGF0YSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiaGlkZUxpbmUiLCJCb29sZWFuIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImN1cnJlbnRVc2VyX2lkIiwibGlrZURvbmUiLCJtZXRob2RzIiwicHJldmlld0ltYWdlIiwiY3VyIiwiaW1hZ2VMaXN0IiwiY3VycmVudCIsInVybHMiLCJsaWtlIiwic2VsZiIsInF1ZXJ5IiwicGFjayIsInVzZXJfaWQiLCJwb3N0X2lkIiwiX2lkIiwibWV0aG9kIiwicmVzIiwiZmxhZyIsImxpa2VkQnkiLCJwdXNoIiwiJGFwcGx5IiwiZ28iLCJuYXZpZ2F0ZVRvIiwidXJsIiwibW9yZU9wdGlvbiIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwidGhlbiIsInRhcEluZGV4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY29uZmlybSIsImRlbFBvc3QiLCJyIiwicmVMYXVuY2giLCJyZXBvcnQiLCJ0b19pZCIsImZyb21fdXNlcl9pZCIsInJlc3VsdCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJ1bnN1YnNjcmliZSIsImZyb21faWQiLCJmcm9tX3VzZXIiLCJnZXRTdG9yYWdlU3luYyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCO0FBRHZCLEssUUFHVEMsSyxHQUFRO0FBQ05DLGdCQUFVO0FBQ1JDLGNBQU1DLE1BREU7QUFFUkMsaUJB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QUEsdUNBUUYsSUFSRTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlDQVNHLGVBQUtNLFNBQUwsQ0FBZTtBQUNuQlYsMkNBQU8sU0FEWTtBQUVuQlcsMENBQU0sU0FGYTtBQUduQkMsOENBQVUsSUFIUztBQUluQkMsMENBQU07QUFKYSxtQ0FBZixDQVRIOztBQUFBO0FBZUgsaURBQUtSLFFBQUwsQ0FBYztBQUNaWix5Q0FBSztBQURPLG1DQUFkOztBQWZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0JEOztBQTFFSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEVEO0FBOUdPLEs7Ozs7OzZCQUhBO0FBQ1IsV0FBS3ZCLGNBQUwsR0FBc0IsZUFBSytDLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBdEI7QUFDRDs7OztFQXRCZ0MsZUFBS0MsUzs7a0JBQW5CaEUsSyIsImZpbGUiOiJwb3N0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuICBpbXBvcnQgdXRpbCBmcm9tICcuLi91dGlscy91dGlsJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkZEMzAwJ1xuICAgIH1cbiAgICBwcm9wcyA9IHtcbiAgICAgIHBvc3REYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBoaWRlTGluZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIGN1cnJlbnRVc2VyX2lkOiAnJyxcbiAgICAgIGxpa2VEb25lOiBmYWxzZVxuICAgIH1cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1hZ2VMaXN0KSB7XG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiBjdXIsXG4gICAgICAgICAgdXJsczogaW1hZ2VMaXN0XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXN5bmMgbGlrZSAoKSB7XG4gICAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkubGlrZSh7XG4gICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgcGFjazoge1xuICAgICAgICAgICAgICAgdXNlcl9pZDogc2VsZi5jdXJyZW50VXNlcl9pZCxcbiAgICAgICAgICAgICAgIHBvc3RfaWQ6IHNlbGYucG9zdERhdGEuX2lkXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9LFxuICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgfSlcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdsaWtlOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpKVxuICAgICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgdGhpcy5wb3N0RGF0YS5saWtlZEJ5LnB1c2godGhpcy5jdXJyZW50VXNlcl9pZClcbiAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIC8vICBsaXN0ID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdvICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdkZXRhaWxQYWdlP3Bvc3RfaWQ9JyArIHRoaXMucG9zdERhdGEuX2lkXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgbW9yZU9wdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgICB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgICAgaXRlbUxpc3Q6IFsn5Yig6ZmkJywgJ+S4vuaKpScsICflj5bmtojlhbPms6gnXVxuICAgICAgICB9KS50aGVuKGFzeW5jIGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgaWYocmVzLnRhcEluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdSZWFsbHnvvJ8nLFxuICAgICAgICAgICAgICBjb250ZW50OiAn5L2g56Gu5a6a6KaB5Yig6Zmk6L+Z5p2h54q25oCB5ZCX77yfJ1xuICAgICAgICAgICAgfSkudGhlbiggYXN5bmMgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGlmKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgciA9IGF3YWl0IGFwaS5kZWxQb3N0KHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0X2lkOiBzZWxmLnBvc3REYXRhLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwb3N0J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzLmRhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShyLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgIGlmKHIuZGF0YSAmJiByLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xuICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICd0aW1lbGluZVBhZ2UnXG4gICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0pXG4gICAgICAgICAgfSBlbHNlIGlmKHJlcy50YXBJbmRleCA9PSAxKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnUmVhbGx577yfJyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+S9oOehruWumuimgeS4vuaKpei/meS4quWwj+Wdj+ibi+WQl++8nydcbiAgICAgICAgICAgIH0pLnRoZW4oYXN5bmMgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGlmKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGFwaS5yZXBvcnQoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgIHBhY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvX2lkOiBzZWxmLnBvc3REYXRhLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fdXNlcl9pZDogc2VsZi5jdXJyZW50VXNlcl9pZFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkuL7miqXmiJDlip/vvIEnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2UgaWYocmVzLnRhcEluZGV4ID09IDIpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdSZWFsbHnvvJ8nLFxuICAgICAgICAgICAgICBjb250ZW50OiAn5L2g55yf55qE5LiN5oOz5YaN5YWz5rOoVEHkuoblkJfvvJ8nXG4gICAgICAgICAgICB9KS50aGVuKCBhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgaWYocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGF3YWl0IGFwaS51bnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICBwYWNrOiB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21faWQ6IHNlbGYuY3VycmVudFVzZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgIHRvX2lkOiBzZWxmLnBvc3REYXRhLmZyb21fdXNlci5faWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5bmtojlhbPms6jmiJDlip/vvIEnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgd2VweS5yZUxhdW5jaCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ3RpbWVsaW5lUGFnZSdcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==