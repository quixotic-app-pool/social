'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _commentsComponent = require('./../components/commentsComponent.js');

var _commentsComponent2 = _interopRequireDefault(_commentsComponent);

var _postComponent = require('./../components/postComponent.js');

var _postComponent2 = _interopRequireDefault(_postComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarBackgroundColor: '#20BEEC',
      navigationBarTitleText: '王小虎',
      backgroundColor: 'rgb(232,232,232)'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      post_id: '',
      currentUser_id: '',
      postData: {}
    }, _this.$repeat = {}, _this.$props = { "commentsComponent": { "v-bind:currentUser_id.sync": "currentUser_id", "v-bind:post_id.sync": "post_id" }, "postComponent": { "xmlns:v-bind": "", "v-bind:postData.sync": "postData" } }, _this.$events = {}, _this.components = {
      commentsComponent: _commentsComponent2.default,
      postComponent: _postComponent2.default
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.post_id = option.post_id;
                this.currentUser_id = _wepy2.default.getStorageSync('UserId');
                // TODO: load post
                //here is a reason that I need to fecth post from here instead from post component which is different from comments
                _context.next = 4;
                return _api2.default.fetchPost({
                  query: {
                    post_id: this.post_id
                  }
                });

              case 4:
                res = _context.sent;

                if (res.data && res.data.flag == 'success') {
                  // console.log('res.data.data: ' + JSON.stringify(res.data.data))
                  this.postData = res.data.data;
                  this.$apply();
                }
                // this.postData = {
                //   nickName: '谭马儒',
                //   createdAt: '昨日 23：27',
                //   msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //   imgUrls: ['../assets/img/5.jpg', '../assets/img/4.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                //   commentsNum: 12,
                //   likesNum: 32
                // }

              case 6:
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
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detailPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbFBhZ2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJwb3N0X2lkIiwiY3VycmVudFVzZXJfaWQiLCJwb3N0RGF0YSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbW1lbnRzQ29tcG9uZW50IiwicG9zdENvbXBvbmVudCIsIm1ldGhvZHMiLCJvcHRpb24iLCJnZXRTdG9yYWdlU3luYyIsImZldGNoUG9zdCIsInF1ZXJ5IiwicmVzIiwiZmxhZyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixLQUZqQjtBQUdQQyx1QkFBaUI7QUFIVixLLFFBS1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxzQkFBZ0IsRUFKWDtBQUtMQyxnQkFBVTtBQUxMLEssUUFPUkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsOEJBQTZCLGdCQUE5QixFQUErQyx1QkFBc0IsU0FBckUsRUFBckIsRUFBcUcsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFVBQTFDLEVBQXJILEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLG9EQURRO0FBRVJDO0FBRlEsSyxRQTRCVkMsTyxHQUFVLEU7Ozs7OzsyRkF4QklDLE07Ozs7OztBQUNaLHFCQUFLVixPQUFMLEdBQWVVLE9BQU9WLE9BQXRCO0FBQ0EscUJBQUtDLGNBQUwsR0FBc0IsZUFBS1UsY0FBTCxDQUFvQixRQUFwQixDQUF0QjtBQUNBO0FBQ0E7O3VCQUNnQixjQUFJQyxTQUFKLENBQWM7QUFDNUJDLHlCQUFPO0FBQ0xiLDZCQUFTLEtBQUtBO0FBRFQ7QUFEcUIsaUJBQWQsQzs7O0FBQVpjLG1COztBQUtKLG9CQUFHQSxJQUFJcEIsSUFBSixJQUFZb0IsSUFBSXBCLElBQUosQ0FBU3FCLElBQVQsSUFBaUIsU0FBaEMsRUFBMkM7QUFDekM7QUFDQSx1QkFBS2IsUUFBTCxHQUFnQlksSUFBSXBCLElBQUosQ0FBU0EsSUFBekI7QUFDQSx1QkFBS3NCLE1BQUw7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExQytCLGVBQUtDLEk7O2tCQUFuQjVCLEsiLCJmaWxlIjoiZGV0YWlsUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbiAgaW1wb3J0IGNvbW1lbnRzQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbWVudHNDb21wb25lbnQnXG4gIGltcG9ydCBwb3N0Q29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdENvbXBvbmVudCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMyMEJFRUMnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eOi+Wwj+iZjicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjMyLDIzMiwyMzIpJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIHBvc3RfaWQ6ICcnLFxuICAgICAgY3VycmVudFVzZXJfaWQ6ICcnLFxuICAgICAgcG9zdERhdGE6IHt9XG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjb21tZW50c0NvbXBvbmVudFwiOntcInYtYmluZDpjdXJyZW50VXNlcl9pZC5zeW5jXCI6XCJjdXJyZW50VXNlcl9pZFwiLFwidi1iaW5kOnBvc3RfaWQuc3luY1wiOlwicG9zdF9pZFwifSxcInBvc3RDb21wb25lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBvc3REYXRhLnN5bmNcIjpcInBvc3REYXRhXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGNvbW1lbnRzQ29tcG9uZW50IDogY29tbWVudHNDb21wb25lbnQsXG4gICAgICBwb3N0Q29tcG9uZW50IDogcG9zdENvbXBvbmVudFxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKG9wdGlvbikge1xuICAgICAgdGhpcy5wb3N0X2lkID0gb3B0aW9uLnBvc3RfaWRcbiAgICAgIHRoaXMuY3VycmVudFVzZXJfaWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VySWQnKVxuICAgICAgLy8gVE9ETzogbG9hZCBwb3N0XG4gICAgICAvL2hlcmUgaXMgYSByZWFzb24gdGhhdCBJIG5lZWQgdG8gZmVjdGggcG9zdCBmcm9tIGhlcmUgaW5zdGVhZCBmcm9tIHBvc3QgY29tcG9uZW50IHdoaWNoIGlzIGRpZmZlcmVudCBmcm9tIGNvbW1lbnRzXG4gICAgICB2YXIgcmVzID0gYXdhaXQgYXBpLmZldGNoUG9zdCh7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgcG9zdF9pZDogdGhpcy5wb3N0X2lkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzLmRhdGEuZGF0YTogJyArIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmRhdGEpKVxuICAgICAgICB0aGlzLnBvc3REYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgICAvLyB0aGlzLnBvc3REYXRhID0ge1xuICAgICAgLy8gICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAvLyAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgIC8vICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgIC8vICAgaW1nVXJsczogWycuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNC5qcGcnLCAnLi4vYXNzZXRzL2ltZy8zLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8yLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8xLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNC5qcGcnXSxcbiAgICAgIC8vICAgY29tbWVudHNOdW06IDEyLFxuICAgICAgLy8gICBsaWtlc051bTogMzJcbiAgICAgIC8vIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gIH1cbiJdfQ==