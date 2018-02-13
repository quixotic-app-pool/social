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
      navigationBarTitleText: '关注'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myData: [],
      type: '',
      currentPage: -1,
      currentUser_id: ''
    }, _this.methods = {
      navigate: function navigate() {
        _wepy2.default.navigateTo({ url: 'individualPage' });
      },
      unsubscribe: function unsubscribe(user_id) {
        var self = this;
        _wepy2.default.showModal({
          title: 'Really？',
          content: '你真的不想再关注TA了吗？'
        }).then(function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
            var r;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!res.confirm) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 3;
                    return _api2.default.unsubscribe({
                      pack: {
                        from_id: self.currentUser_id,
                        to_id: user_id
                      }
                    });

                  case 3:
                    r = _context2.sent;

                    if (!true) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 7;
                    return _wepy2.default.showToast({
                      title: '取消关注成功！',
                      icon: 'success',
                      duration: 1500,
                      mask: true
                    }).then(function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                self.myData = [];
                                self.currentPage = -1;
                                // console.log('pull down')
                                _context.next = 4;
                                return self.loadData();

                              case 4:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));

                      return function (_x2) {
                        return _ref3.apply(this, arguments);
                      };
                    }());

                  case 7:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MainPage, [{
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(option) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.type = option.type;
                this.currentUser_id = _wepy2.default.getStorageSync('UserId');
                _context3.next = 4;
                return this.loadData();

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad(_x3) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadData',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var res, _myData;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // TODO: here we gonna load data
                this.currentPage++;
                _context4.next = 3;
                return _api2.default.profileList({
                  query: {
                    type: this.type,
                    currentPage: this.currentPage,
                    user_id: this.currentUser_id
                  }
                });

              case 3:
                res = _context4.sent;


                if (res.data && res.data.flag == 'success') {
                  console.log('no change needede: ' + JSON.stringify(res.data.data));
                  if (res.data.data.length > 1) {
                    (_myData = this.myData).push.apply(_myData, _toConsumableArray(res.data.data));
                  } else {
                    this.myData.push(res.data.data);
                  }
                  this.$apply();
                } else {
                  this.currentPage--;
                }
                // this.myData.push(
                //   ...[
                //     {pic: "../assets/img/1.jpeg", height: 0, age:'25', gender: 'female', h: '161', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                //     {pic: "../assets/img/2.jpeg", height: 0, age:'25', gender: 'female', h: '162', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                //     {pic: "../assets/img/3.jpeg", height: 0, age:'25', gender: 'female', h: '163', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                //     {pic: "../assets/img/4.jpg", height: 0, age:'25', gender: 'female', h: '164', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                //     {pic: "../assets/img/5.jpg", height: 0, age:'25', gender: 'female', h: '165', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'}
                //   ]
                // )
                _wepy2.default.stopPullDownRefresh();
                this.$apply();

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadData() {
        return _ref5.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: 'onReachBottom',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.loadData();

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onReachBottom() {
        return _ref6.apply(this, arguments);
      }

      return onReachBottom;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.myData = [];
                this.currentPage = -1;
                // console.log('pull down')
                _context6.next = 4;
                return this.loadData();

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onPullDownRefresh() {
        return _ref7.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()
  }]);

  return MainPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MainPage , 'pages/listPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RQYWdlLmpzIl0sIm5hbWVzIjpbIk1haW5QYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteURhdGEiLCJ0eXBlIiwiY3VycmVudFBhZ2UiLCJjdXJyZW50VXNlcl9pZCIsIm1ldGhvZHMiLCJuYXZpZ2F0ZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ1bnN1YnNjcmliZSIsInVzZXJfaWQiLCJzZWxmIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwidGhlbiIsInJlcyIsImNvbmZpcm0iLCJwYWNrIiwiZnJvbV9pZCIsInRvX2lkIiwiciIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJsb2FkRGF0YSIsIm9wdGlvbiIsImdldFN0b3JhZ2VTeW5jIiwicHJvZmlsZUxpc3QiLCJxdWVyeSIsImZsYWciLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImxlbmd0aCIsInB1c2giLCIkYXBwbHkiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxtQkFBYSxDQUFDLENBTFQ7QUFNTEMsc0JBQWdCO0FBTlgsSyxRQXlEUEMsTyxHQUFVO0FBQ1JDLGNBRFEsc0JBQ0k7QUFDVix1QkFBS0MsVUFBTCxDQUFnQixFQUFDQyxL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LGVBQUtjLEk7O2tCQUF0QmhELFEiLCJmaWxlIjoibGlzdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflhbPms6gnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbXlEYXRhOiBbXSxcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgY3VycmVudFBhZ2U6IC0xLFxuICAgICAgY3VycmVudFVzZXJfaWQ6ICcnXG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgICB0aGlzLnR5cGUgPSBvcHRpb24udHlwZVxuICAgICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICB9XG4gICAgYXN5bmMgbG9hZERhdGEgKCkge1xuICAgICAgLy8gVE9ETzogaGVyZSB3ZSBnb25uYSBsb2FkIGRhdGFcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UrK1xuICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5wcm9maWxlTGlzdCh7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHVzZXJfaWQ6IHRoaXMuY3VycmVudFVzZXJfaWRcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIGNoYW5nZSBuZWVkZWRlOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEuZGF0YSkpO1xuICAgICAgICBpZihyZXMuZGF0YS5kYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLm15RGF0YS5wdXNoKC4uLnJlcy5kYXRhLmRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5teURhdGEucHVzaChyZXMuZGF0YS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UtLVxuICAgICAgfVxuICAgICAgLy8gdGhpcy5teURhdGEucHVzaChcbiAgICAgIC8vICAgLi4uW1xuICAgICAgLy8gICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy8xLmpwZWdcIiwgaGVpZ2h0OiAwLCBhZ2U6JzI1JywgZ2VuZGVyOiAnZmVtYWxlJywgaDogJzE2MScsIHdlaWdodDogJzQ1JywgZGVncmVlOiAn56GV5aOrJywgdHlwZTogJ+S6i+S4muWNleS9jScsIGNvbXBhbnk6ICfljZfkuqzluIIqKirljLvpmaInfSxcbiAgICAgIC8vICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvMi5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjInLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAvLyAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nLzMuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYzJywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgLy8gICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy80LmpwZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTY0Jywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgLy8gICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy81LmpwZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTY1Jywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9XG4gICAgICAvLyAgIF1cbiAgICAgIC8vIClcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICAgIGFzeW5jIG9uUmVhY2hCb3R0b20gKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhdCBib3R0b20nKVxuICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICB9XG4gICAgYXN5bmMgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgICAgdGhpcy5teURhdGEgPSBbXVxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IC0xXG4gICAgICAvLyBjb25zb2xlLmxvZygncHVsbCBkb3duJylcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgbmF2aWdhdGUgKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogJ2luZGl2aWR1YWxQYWdlJ30pXG4gICAgICB9LFxuICAgICAgdW5zdWJzY3JpYmUgKHVzZXJfaWQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ1JlYWxsee+8nycsXG4gICAgICAgICAgY29udGVudDogJ+S9oOecn+eahOS4jeaDs+WGjeWFs+azqFRB5LqG5ZCX77yfJ1xuICAgICAgICB9KS50aGVuKCBhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBpZihyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgdmFyIHIgPSBhd2FpdCBhcGkudW5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICBwYWNrOiB7XG4gICAgICAgICAgICAgICAgZnJvbV9pZDogc2VsZi5jdXJyZW50VXNlcl9pZCxcbiAgICAgICAgICAgICAgICB0b19pZDogdXNlcl9pZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYodHJ1ZSkge1xuICAgICAgICAgICAgICBhd2FpdCB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflj5bmtojlhbPms6jmiJDlip/vvIEnLFxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgICAgICAgIH0pLnRoZW4oIGFzeW5jIGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgc2VsZi5teURhdGEgPSBbXVxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFBhZ2UgPSAtMVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwdWxsIGRvd24nKVxuICAgICAgICAgICAgICAgIGF3YWl0IHNlbGYubG9hZERhdGEoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==