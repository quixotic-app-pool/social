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
                (_myData = this.myData).push.apply(_myData, [{ pic: "../assets/img/1.jpeg", height: 0, age: '25', gender: 'female', h: '161', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/2.jpeg", height: 0, age: '25', gender: 'female', h: '162', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/3.jpeg", height: 0, age: '25', gender: 'female', h: '163', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/4.jpg", height: 0, age: '25', gender: 'female', h: '164', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }, { pic: "../assets/img/5.jpg", height: 0, age: '25', gender: 'female', h: '165', weight: '45', degree: '硕士', type: '事业单位', company: '南京市***医院' }]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RQYWdlLmpzIl0sIm5hbWVzIjpbIk1haW5QYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteURhdGEiLCJtZXRob2RzIiwibmF2aWdhdGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidW5zdWJzY3JpYmUiLCJsb2FkRGF0YSIsInB1c2giLCJwaWMiLCJoZWlnaHQiLCJhZ2UiLCJnZW5kZXIiLCJoIiwid2VpZ2h0IiwiZGVncmVlIiwidHlwZSIsImNvbXBhbnkiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsY0FBUTtBQUhILEssUUE4QlBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNJO0FBQ1YsdUJBQUtDLFVBQUwsQ0FBZ0IsRUFBQ0MsS0FBSyxnQkFBTixFQUFoQjtBQUNELE9BSE87QUFJUkMsaUJBSlEseUJBSU8sQ0FFZDtBQU5PLEs7Ozs7Ozs7Ozs7Ozt1QkF4QkYsS0FBS0MsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdOO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0MsZ0NBQUtOLE1BQUwsRUFBWU8sSUFBWixnQkFDSyxDQUNELEVBQUNDLEtBQUssc0JBQU4sRUFBOEJDLFFBQVEsQ0FBdEMsRUFBeUNDLEtBQUksSUFBN0MsRUFBbURDLFFBQVEsUUFBM0QsRUFBcUVDLEdBQUcsS0FBeEUsRUFBK0VDLFFBQVEsSUFBdkYsRUFBNkZDLFFBQVEsSUFBckcsRUFBMkdDLE1BQU0sTUFBakgsRUFBeUhDLFNBQVMsVUFBbEksRUFEQyxFQUVELEVBQUNSLEtBQUssc0JBQU4sRUFBOEJDLFFBQVEsQ0FBdEMsRUFBeUNDLEtBQUksSUFBN0MsRUFBbURDLFFBQVEsUUFBM0QsRUFBcUVDLEdBQUcsS0FBeEUsRUFBK0VDLFFBQVEsSUFBdkYsRUFBNkZDLFFBQVEsSUFBckcsRUFBMkdDLE1BQU0sTUFBakgsRUFBeUhDLFNBQVMsVUFBbEksRUFGQyxFQUdELEVBQUNSLEtBQUssc0JBQU4sRUFBOEJDLFFBQVEsQ0FBdEMsRUFBeUNDLEtBQUksSUFBN0MsRUFBbURDLFFBQVEsUUFBM0QsRUFBcUVDLEdBQUcsS0FBeEUsRUFBK0VDLFFBQVEsSUFBdkYsRUFBNkZDLFFBQVEsSUFBckcsRUFBMkdDLE1BQU0sTUFBakgsRUFBeUhDLFNBQVMsVUFBbEksRUFIQyxFQUlELEVBQUNSLEtBQUsscUJBQU4sRUFBNkJDLFFBQVEsQ0FBckMsRUFBd0NDLEtBQUksSUFBNUMsRUFBa0RDLFFBQVEsUUFBMUQsRUFBb0VDLEdBQUcsS0FBdkUsRUFBOEVDLFFBQVEsSUFBdEYsRUFBNEZDLFFBQVEsSUFBcEcsRUFBMEdDLE1BQU0sTUFBaEgsRUFBd0hDLFNBQVMsVUFBakksRUFKQyxFQUtELEVBQUNSLEtBQUsscUJBQU4sRUFBNkJDLFFBQVEsQ0FBckMsRUFBd0NDLEtBQUksSUFBNUMsRUFBa0RDLFFBQVEsUUFBMUQsRUFBb0VDLEdBQUcsS0FBdkUsRUFBOEVDLFFBQVEsSUFBdEYsRUFBNEZDLFFBQVEsSUFBcEcsRUFBMEdDLE1BQU0sTUFBaEgsRUFBd0hDLFNBQVMsVUFBakksRUFMQyxDQURMO0FBU0EscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoQ2tDLGVBQUtDLEk7O2tCQUF0QjNCLFEiLCJmaWxlIjoibGlzdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflhbPms6gnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbXlEYXRhOiBbXVxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICAgIC8vIFRPRE86IGhlcmUgd2UgZ29ubmEgbG9hZCBkYXRhXG4gICAgIC8vICB2YXIgcmVzID0gYXdhaXQgYXBpLnByb2ZpbGVMaXN0KHtcbiAgICAgLy8gICAgcXVlcnk6IHtcbiAgICAgLy8gICAgICBwYWdlOiAwXG4gICAgIC8vICAgIH1cbiAgICAgLy8gIH0pXG4gICAgICAvL1xuICAgICAvLyAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgLy8gICAgdGhpcy5teURhdGEgPSByZXMuZGF0YS5kYXRhXG4gICAgIC8vICB9XG4gICAgICB0aGlzLm15RGF0YS5wdXNoKFxuICAgICAgICAuLi5bXG4gICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nLzEuanBlZ1wiLCBoZWlnaHQ6IDAsIGFnZTonMjUnLCBnZW5kZXI6ICdmZW1hbGUnLCBoOiAnMTYxJywgd2VpZ2h0OiAnNDUnLCBkZWdyZWU6ICfnoZXlo6snLCB0eXBlOiAn5LqL5Lia5Y2V5L2NJywgY29tcGFueTogJ+WNl+S6rOW4gioqKuWMu+mZoid9LFxuICAgICAgICAgIHtwaWM6IFwiLi4vYXNzZXRzL2ltZy8yLmpwZWdcIiwgaGVpZ2h0OiAwLCBhZ2U6JzI1JywgZ2VuZGVyOiAnZmVtYWxlJywgaDogJzE2MicsIHdlaWdodDogJzQ1JywgZGVncmVlOiAn56GV5aOrJywgdHlwZTogJ+S6i+S4muWNleS9jScsIGNvbXBhbnk6ICfljZfkuqzluIIqKirljLvpmaInfSxcbiAgICAgICAgICB7cGljOiBcIi4uL2Fzc2V0cy9pbWcvMy5qcGVnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjMnLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nLzQuanBnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjQnLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ30sXG4gICAgICAgICAge3BpYzogXCIuLi9hc3NldHMvaW1nLzUuanBnXCIsIGhlaWdodDogMCwgYWdlOicyNScsIGdlbmRlcjogJ2ZlbWFsZScsIGg6ICcxNjUnLCB3ZWlnaHQ6ICc0NScsIGRlZ3JlZTogJ+ehleWjqycsIHR5cGU6ICfkuovkuJrljZXkvY0nLCBjb21wYW55OiAn5Y2X5Lqs5biCKioq5Yy76ZmiJ31cbiAgICAgICAgXVxuICAgICAgKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgbmF2aWdhdGUgKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogJ2luZGl2aWR1YWxQYWdlJ30pXG4gICAgICB9LFxuICAgICAgdW5zdWJzY3JpYmUgKCkge1xuXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=