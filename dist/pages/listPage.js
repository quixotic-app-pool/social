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
      myData: []
    }, _this.methods = {
      navigate: function navigate() {
        _wepy2.default.navigateTo({ url: 'individualPage' });
      },
      unsubscribe: function unsubscribe() {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MainPage, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loadData();

              case 2:
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
    key: 'loadData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _myData;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: here we gonna load data
                //  var res = await api.profileList({
                //    query: {
                //      page: 0
                //    }
                //  })
                //
                //  if(res.data && res.data.flag == 'success') {
                //    this.myData = res.data.data
                //  }
                (_myData = this.myData).push.apply(_myData, [
                  // {pic: "../assets/img/1.jpeg", height: 0, age:'25', gender: 'female', h: '161', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                  // {pic: "../assets/img/2.jpeg", height: 0, age:'25', gender: 'female', h: '162', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                  // {pic: "../assets/img/3.jpeg", height: 0, age:'25', gender: 'female', h: '163', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                  // {pic: "../assets/img/4.jpg", height: 0, age:'25', gender: 'female', h: '164', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'},
                  // {pic: "../assets/img/5.jpg", height: 0, age:'25', gender: 'female', h: '165', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院'}
                ]);
                this.$apply();

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _ref3.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return MainPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MainPage , 'pages/listPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RQYWdlLmpzIl0sIm5hbWVzIjpbIk1haW5QYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteURhdGEiLCJtZXRob2RzIiwibmF2aWdhdGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidW5zdWJzY3JpYmUiLCJsb2FkRGF0YSIsInB1c2giLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsY0FBUTtBQUhILEssUUE4QlBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNJO0FBQ1YsdUJBQUtDLFVBQUwsQ0FBZ0IsRUFBQ0MsS0FBSyxnQkFBTixFQUFoQjtBQUNELE9BSE87QUFJUkMsaUJBSlEseUJBSU8sQ0FFZDtBQU5PLEs7Ozs7Ozs7Ozs7Ozt1QkF4QkYsS0FBS0MsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdOO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0MsZ0NBQUtOLE1BQUwsRUFBWU8sSUFBWixnQkFDSztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQyxpQkFETDtBQVNBLHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaENrQyxlQUFLQyxJOztrQkFBdEJsQixRIiwiZmlsZSI6Imxpc3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWz5rOoJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIG15RGF0YTogW11cbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkICgpIHtcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIH1cbiAgICBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAgICAvLyBUT0RPOiBoZXJlIHdlIGdvbm5hIGxvYWQgZGF0YVxuICAgICAvLyAgdmFyIHJlcyA9IGF3YWl0IGFwaS5wcm9maWxlTGlzdCh7XG4gICAgIC8vICAgIHF1ZXJ5OiB7XG4gICAgIC8vICAgICAgcGFnZTogMFxuICAgICAvLyAgICB9XG4gICAgIC8vICB9KVxuICAgICAgLy9cbiAgICAgLy8gIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgIC8vICAgIHRoaXMubXlEYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgICAvLyAgfVxuICAgICAgdGhpcy5teURhdGEucHVzaChcbiAgICAgICAgLi4uW1xuICAgICAgICAgIC8vIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy8xLmpwZWdcIiwgaGVpZ2h0OiAwLCBhZ2U6JzI1JywgZ2VuZGVyOiAnZmVtYWxlJywgaDogJzE2MScsIHdlaWdodDogJzQ1JywgZGVncmVlOiAn56GV5aOrJywgdHlwZTogJ+S6i+S4muWNleS9jScsIGNvbXBhbnk6ICfljZfkuqzluIIqKirljLvpmaInfSxcbiAgICAgICAgICAvLyB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvMi5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjInLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAgICAgLy8ge3BpYzogXCIuLi9hc3NldHMvaW1nLzMuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYzJywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgICAgIC8vIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy80LmpwZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTY0Jywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgICAgIC8vIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy81LmpwZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTY1Jywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9XG4gICAgICAgIF1cbiAgICAgIClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG5hdmlnYXRlICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6ICdpbmRpdmlkdWFsUGFnZSd9KVxuICAgICAgfSxcbiAgICAgIHVuc3Vic2NyaWJlICgpIHtcblxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19