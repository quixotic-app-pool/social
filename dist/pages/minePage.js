'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

var MinePage = function (_wepy$page) {
  _inherits(MinePage, _wepy$page);

  function MinePage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MinePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MinePage.__proto__ || Object.getPrototypeOf(MinePage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '自个儿',
      navigationBarTextStyle: 'black',
      navigationBarBackgroundColor: '#ffffff',
      enablePullDownRefresh: false
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      user_id: '',
      myData: {},
      currentUser_id: ''
    }, _this.methods = {
      go: function go(page, type) {
        if (page == 'individualPage') {
          _wepy2.default.navigateTo({
            url: 'individualPage?_id=' + this.currentUser_id + '&self=true'
          });
        } else if (page == 'listPage') {
          _wepy2.default.navigateTo({
            url: 'listPage?type=' + type
          });
        } else if (page == 'myTM') {
          _wepy2.default.navigateTo({
            url: 'myTM?type=' + type
          });
        } else if (page == 'commentsPage') {
          _wepy2.default.navigateTo({
            url: 'commentsPage?type=' + type
          });
        } else {
          _wepy2.default.navigateTo({
            url: page
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MinePage, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.currentUser_id = _wepy2.default.getStorageSync('UserId');
                _context.next = 3;
                return this.loadData();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.userInfo({
                  query: {
                    user_id: this.currentUser_id
                  }
                });

              case 2:
                res = _context2.sent;

                console.log('res.data.data: ' + JSON.stringify(res.data.data));
                if (res.data && res.data.flag == 'success') {
                  this.myData = res.data.data;
                  this.$apply();
                }

                // this.myData = {
                //   avatarUrl: '',
                //   nickName: '扎西德勒',
                //   subscribedNum: '233',
                //   subscribeNum: '122',
                //   postsNum: '12',
                //   commentsNum: '32'
                // }

              case 5:
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
  }, {
    key: 'onReady',
    value: function onReady() {}
  }]);

  return MinePage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MinePage , 'pages/minePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmVQYWdlLmpzIl0sIm5hbWVzIjpbIk1pbmVQYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsInVzZXJfaWQiLCJteURhdGEiLCJjdXJyZW50VXNlcl9pZCIsIm1ldGhvZHMiLCJnbyIsInBhZ2UiLCJ0eXBlIiwibmF2aWdhdGVUbyIsInVybCIsIm9wdGlvbiIsImdldFN0b3JhZ2VTeW5jIiwibG9hZERhdGEiLCJ1c2VySW5mbyIsInF1ZXJ5IiwicmVzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJmbGFnIiwiJGFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsS0FEakI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLG9DQUE4QixTQUh2QjtBQUlQQyw2QkFBdUI7QUFKaEIsSyxRQU1UQyxJLEdBQU87QUFDTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRGpDO0FBRUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUZsQztBQUdMQyxlQUFTLEVBSEo7QUFJTEMsY0FBUSxFQUpIO0FBS0xDLHNCQUFnQjtBQUxYLEssUUFtQ1BDLE8sR0FBVTtBQUNSQyxRQURRLGNBQ0pDLElBREksRUFDRUMsSUFERixFQUNRO0FBQ2QsWUFBR0QsUUFBUSxnQkFBWCxFQUE2QjtBQUMzQix5QkFBS0UsVUFBTCxDQUFnQjtBQUNkQyxpQkFBSyx3QkFBd0IsS0FBS04sY0FBN0IsR0FBOEM7QUFEckMsV0FBaEI7QUFHRCxTQUpELE1BSU8sSUFBR0csUUFBUSxVQUFYLEVBQXVCO0FBQzVCLHlCQUFLRSxVQUFMLENBQWdCO0FBQ2RDLGlCQUFLLG1CQUFtQkY7QUFEVixXQUFoQjtBQUdELFNBSk0sTUFJQSxJQUFHRCxRQUFRLE1BQVgsRUFBbUI7QUFDeEIseUJBQUtFLFVBQUwsQ0FBZ0I7QUFDZEMsaUJBQUssZUFBZUY7QUFETixXQUFoQjtBQUdELFNBSk0sTUFJQSxJQUFHRCxRQUFRLGNBQVgsRUFBMkI7QUFDaEMseUJBQUtFLFVBQUwsQ0FBZ0I7QUFDZEMsaUJBQUssdUJBQXVCRjtBQURkLFdBQWhCO0FBR0QsU0FKTSxNQUlBO0FBQ0wseUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsaUJBQUtIO0FBRFMsV0FBaEI7QUFHRDtBQUNGO0FBdkJPLEs7Ozs7OzsyRkE1QklJLE07Ozs7O0FBQ1oscUJBQUtQLGNBQUwsR0FBc0IsZUFBS1EsY0FBTCxDQUFvQixRQUFwQixDQUF0Qjs7dUJBQ00sS0FBS0MsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJVSxjQUFJQyxRQUFKLENBQWE7QUFDM0JDLHlCQUFPO0FBQ0xiLDZCQUFTLEtBQUtFO0FBRFQ7QUFEb0IsaUJBQWIsQzs7O0FBQVpZLG1COztBQUtKQyx3QkFBUUMsR0FBUixDQUFZLG9CQUFvQkMsS0FBS0MsU0FBTCxDQUFlSixJQUFJcEIsSUFBSixDQUFTQSxJQUF4QixDQUFoQztBQUNBLG9CQUFHb0IsSUFBSXBCLElBQUosSUFBWW9CLElBQUlwQixJQUFKLENBQVN5QixJQUFULElBQWlCLFNBQWhDLEVBQTJDO0FBQ3pDLHVCQUFLbEIsTUFBTCxHQUFjYSxJQUFJcEIsSUFBSixDQUFTQSxJQUF2QjtBQUNBLHVCQUFLMEIsTUFBTDtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFFUSxDQUNUOzs7O0VBekNtQyxlQUFLZixJOztrQkFBdEJqQixRIiwiZmlsZSI6Im1pbmVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG5pbXBvcnQgdXRpbCBmcm9tICcuLi91dGlscy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lUGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Ieq5Liq5YS/JyxcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGZhbHNlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICB1c2VyX2lkOiAnJyxcbiAgICBteURhdGE6IHt9LFxuICAgIGN1cnJlbnRVc2VyX2lkOiAnJ1xuICB9XG4gIGFzeW5jIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gIH1cbiAgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgLy8gVE9ETzogbG9hZCBkYXRhXG4gICAgdmFyIHJlcyA9IGF3YWl0IGFwaS51c2VySW5mbyh7XG4gICAgICBxdWVyeToge1xuICAgICAgICB1c2VyX2lkOiB0aGlzLmN1cnJlbnRVc2VyX2lkXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygncmVzLmRhdGEuZGF0YTogJyArIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKTtcbiAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgdGhpcy5teURhdGEgPSByZXMuZGF0YS5kYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgLy8gdGhpcy5teURhdGEgPSB7XG4gICAgLy8gICBhdmF0YXJVcmw6ICcnLFxuICAgIC8vICAgbmlja05hbWU6ICfmiY7opb/lvrfli5InLFxuICAgIC8vICAgc3Vic2NyaWJlZE51bTogJzIzMycsXG4gICAgLy8gICBzdWJzY3JpYmVOdW06ICcxMjInLFxuICAgIC8vICAgcG9zdHNOdW06ICcxMicsXG4gICAgLy8gICBjb21tZW50c051bTogJzMyJ1xuICAgIC8vIH1cbiAgfVxuICBvblJlYWR5KCkge1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ28gKHBhZ2UsIHR5cGUpIHtcbiAgICAgIGlmKHBhZ2UgPT0gJ2luZGl2aWR1YWxQYWdlJykge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2luZGl2aWR1YWxQYWdlP19pZD0nICsgdGhpcy5jdXJyZW50VXNlcl9pZCArICcmc2VsZj10cnVlJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKHBhZ2UgPT0gJ2xpc3RQYWdlJykge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2xpc3RQYWdlP3R5cGU9JyArIHR5cGVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihwYWdlID09ICdteVRNJykge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ215VE0/dHlwZT0nICsgdHlwZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKHBhZ2UgPT0gJ2NvbW1lbnRzUGFnZScpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdjb21tZW50c1BhZ2U/dHlwZT0nICsgdHlwZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IHBhZ2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==