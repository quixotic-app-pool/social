'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

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
      myComments: {
        type: Array,
        default: []
      },
      clickable: {
        type: Boolean,
        default: false
      },
      post_id: {
        type: String,
        default: ''
      },
      currentUser_id: {
        type: String,
        default: ''
      }
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      likeDone: false
    }, _this.methods = {
      like: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
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
                        post_id: item._id
                      }
                    },
                    method: 'POST'
                  });

                case 3:
                  res = _context.sent;

                  //  console.log('like: ' + JSON.stringify(res.data))
                  if (res.data && res.data.flag == 'success') {
                    item.likedBy.push(this.currentUser_id);
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

        function like(_x) {
          return _ref2.apply(this, arguments);
        }

        return like;
      }(),
      goComment: function goComment() {
        // console.log('from comment com: ' + this.currentUser_id);
        _wepy2.default.navigateTo({
          url: 'editPage?type=comment&user_id=' + this.currentUser_id + '&post_id=' + this.post_id
        });
      },
      goPost: function goPost(post_id) {
        if (this.clickable) {
          _wepy2.default.navigateTo({
            url: 'detailPage?post_id=' + post_id
          });
        }
      },
      moreOption: function moreOption(_id, commentIndex) {
        var self = this;
        _wepy2.default.showActionSheet({
          itemList: ['删除', '举报']
        }).then(function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(res) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log(JSON.stringify(res));
                    if (res.tapIndex == 0) {
                      _wepy2.default.showModal({
                        title: 'Really？',
                        content: '你确定要删除这条评论吗？'
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
                                        parent_id: self.post_id,
                                        post_id: _id,
                                        type: 'comment'
                                      }
                                    },
                                    method: 'POST'
                                  });

                                case 3:
                                  r = _context2.sent;

                                  if (r.data && r.data.flag == 'success') {
                                    self.myComments.splice(commentIndex, 1);
                                    self.$apply();
                                    console.log('comment deleted');
                                  }

                                case 5:
                                case 'end':
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));

                        return function (_x3) {
                          return _ref4.apply(this, arguments);
                        };
                      }());
                    } else if (res.tapIndex = 1) {
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
                                        to_id: _id,
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

                        return function (_x4) {
                          return _ref5.apply(this, arguments);
                        };
                      }());
                    }

                  case 2:
                  case 'end':
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          return function (_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInByb3BzIiwibXlDb21tZW50cyIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJjbGlja2FibGUiLCJCb29sZWFuIiwicG9zdF9pZCIsIlN0cmluZyIsImN1cnJlbnRVc2VyX2lkIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImxpa2VEb25lIiwibWV0aG9kcyIsImxpa2UiLCJpdGVtIiwic2VsZiIsInF1ZXJ5IiwicGFjayIsInVzZXJfaWQiLCJfaWQiLCJtZXRob2QiLCJyZXMiLCJmbGFnIiwibGlrZWRCeSIsInB1c2giLCIkYXBwbHkiLCJnb0NvbW1lbnQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ29Qb3N0IiwibW9yZU9wdGlvbiIsImNvbW1lbnRJbmRleCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidGFwSW5kZXgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtIiwiZGVsUG9zdCIsInBhcmVudF9pZCIsInIiLCJzcGxpY2UiLCJyZXBvcnQiLCJ0b19pZCIsImZyb21fdXNlcl9pZCIsInJlc3VsdCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCO0FBRHZCLEssUUFHVEMsSyxHQUFRO0FBQ05DLGtCQUFZO0FBQ1ZDLGNBQU1DLEtBREk7QUFFVkMsaUJBQVM7QUFGQyxPQUROO0FB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ZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGRkQzMDAnXG4gICAgfVxuICAgIHByb3BzID0ge1xuICAgICAgbXlDb21tZW50czoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICBjbGlja2FibGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBwb3N0X2lkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH0sXG4gICAgICBjdXJyZW50VXNlcl9pZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbGlrZURvbmU6IGZhbHNlXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyBsaWtlIChpdGVtKSB7XG4gICAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkubGlrZSh7XG4gICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgcGFjazoge1xuICAgICAgICAgICAgICAgdXNlcl9pZDogc2VsZi5jdXJyZW50VXNlcl9pZCxcbiAgICAgICAgICAgICAgIHBvc3RfaWQ6IGl0ZW0uX2lkXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9LFxuICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgfSlcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdsaWtlOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpKVxuICAgICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgaXRlbS5saWtlZEJ5LnB1c2godGhpcy5jdXJyZW50VXNlcl9pZClcbiAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIC8vICBsaXN0ID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdvQ29tbWVudCAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmcm9tIGNvbW1lbnQgY29tOiAnICsgdGhpcy5jdXJyZW50VXNlcl9pZCk7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnZWRpdFBhZ2U/dHlwZT1jb21tZW50JnVzZXJfaWQ9JyArIHRoaXMuY3VycmVudFVzZXJfaWQgKyAnJnBvc3RfaWQ9JyArIHRoaXMucG9zdF9pZFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvUG9zdCAocG9zdF9pZCkge1xuICAgICAgICBpZih0aGlzLmNsaWNrYWJsZSkge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICdkZXRhaWxQYWdlP3Bvc3RfaWQ9JyArIHBvc3RfaWRcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW9yZU9wdGlvbiAoX2lkLCBjb21tZW50SW5kZXgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogWyfliKDpmaQnLCAn5Li+5oqlJ11cbiAgICAgICAgfSkudGhlbihhc3luYyBmdW5jdGlvbihyZXMpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgIGlmKHJlcy50YXBJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnUmVhbGx577yfJyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+S9oOehruWumuimgeWIoOmZpOi/meadoeivhOiuuuWQl++8nydcbiAgICAgICAgICAgIH0pLnRoZW4oYXN5bmMgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGlmKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBhd2FpdCBhcGkuZGVsUG9zdCh7XG4gICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBwYWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50X2lkOiBzZWxmLnBvc3RfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdF9pZDogX2lkLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb21tZW50J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmKHIuZGF0YSAmJiByLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYubXlDb21tZW50cy5zcGxpY2UoY29tbWVudEluZGV4LCAxKVxuICAgICAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQgZGVsZXRlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19KVxuICAgICAgICAgIH0gZWxzZSBpZihyZXMudGFwSW5kZXggPSAxKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnUmVhbGx577yfJyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+S9oOehruWumuimgeS4vuaKpei/meS4quWwj+Wdj+ibi+WQl++8nydcbiAgICAgICAgICAgIH0pLnRoZW4oYXN5bmMgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGlmKHJlcy5jb25maXJtKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcG9ydCh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFjazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9faWQ6IF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fdXNlcl9pZDogc2VsZi5jdXJyZW50VXNlcl9pZFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkuL7miqXmiJDlip/vvIEnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=