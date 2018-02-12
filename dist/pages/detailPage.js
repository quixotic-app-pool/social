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
      postData: {},
      myComments: []
    }, _this.$repeat = {}, _this.$props = { "commentsComponent": { "v-bind:post_id.sync": "post_id", "v-bind:currentUser_id.sync": "currentUser_id", "v-bind:myComments.sync": "myComments" }, "postComponent": { "xmlns:v-bind": "", "v-bind:postData.sync": "postData" } }, _this.$events = {}, _this.components = {
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
                  res.data.data.timeDiff = _util2.default.calcTime(res.data.data.createdAt);
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
                _context.next = 8;
                return this.loadComments();

              case 8:
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
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.loadComments();

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'loadComments',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api2.default.commentList({
                  query: {
                    type: 'comment',
                    post_id: this.post_id
                  }
                });

              case 2:
                res = _context3.sent;

                // console.log('comments: ' + JSON.stringify(res.data.data));
                if (res.data && res.data.flag == 'success') {
                  res.data.data.forEach(function (item) {
                    item.timeDiff = _util2.default.calcTime(item.createdAt);
                  });
                  this.myComments = res.data.data;
                  this.$apply();
                }
                // this.myComments1 = [
                //   {
                //       avatarUrl: '../assets/img/boy.jpeg',
                //       nickName: '谭马儒',
                //       gender: 'male',
                //       age: 25,
                //       createdAt: '昨日 23：27',
                //       msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //       likesNum: 32
                //     },
                //     {
                //         avatarUrl: '../assets/img/boy.jpeg',
                //         nickName: '谭马儒',
                //         gender: 'male',
                //         age: 25,
                //         createdAt: '昨日 23：27',
                //         msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //         likesNum: 32
                //       },{
                //           avatarUrl: '../assets/img/boy.jpeg',
                //           nickName: '谭马儒',
                //           gender: 'male',
                //           age: 25,
                //           createdAt: '昨日 23：27',
                //           msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //           likesNum: 32
                //         }
                // ]

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadComments() {
        return _ref4.apply(this, arguments);
      }

      return loadComments;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detailPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbFBhZ2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJwb3N0X2lkIiwiY3VycmVudFVzZXJfaWQiLCJwb3N0RGF0YSIsIm15Q29tbWVudHMiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21tZW50c0NvbXBvbmVudCIsInBvc3RDb21wb25lbnQiLCJtZXRob2RzIiwib3B0aW9uIiwiZ2V0U3RvcmFnZVN5bmMiLCJmZXRjaFBvc3QiLCJxdWVyeSIsInJlcyIsImZsYWciLCJ0aW1lRGlmZiIsImNhbGNUaW1lIiwiY3JlYXRlZEF0IiwiJGFwcGx5IiwibG9hZENvbW1lbnRzIiwiY29tbWVudExpc3QiLCJ0eXBlIiwiZm9yRWFjaCIsIml0ZW0iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixLQUZqQjtBQUdQQyx1QkFBaUI7QUFIVixLLFFBS1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxzQkFBZ0IsRUFKWDtBQUtMQyxnQkFBVSxFQUxMO0FBTUxDLGtCQUFZO0FBTlAsSyxRQVFSQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxxQkFBb0IsRUFBQyx1QkFBc0IsU0FBdkIsRUFBaUMsOEJBQTZCLGdCQUE5RCxFQUErRSwwQkFBeUIsWUFBeEcsRUFBckIsRUFBMkksaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFVBQTFDLEVBQTNKLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLG9EQURRO0FBRVJDO0FBRlEsSyxRQThFVkMsTyxHQUFVLEU7Ozs7OzsyRkExRUlDLE07Ozs7OztBQUNaLHFCQUFLWCxPQUFMLEdBQWVXLE9BQU9YLE9BQXRCO0FBQ0EscUJBQUtDLGNBQUwsR0FBc0IsZUFBS1csY0FBTCxDQUFvQixRQUFwQixDQUF0QjtBQUNBO0FBQ0E7O3VCQUNnQixjQUFJQyxTQUFKLENBQWM7QUFDNUJDLHlCQUFPO0FBQ0xkLDZCQUFTLEtBQUtBO0FBRFQ7QUFEcUIsaUJBQWQsQzs7O0FBQVplLG1COztBQUtKLG9CQUFHQSxJQUFJckIsSUFBSixJQUFZcUIsSUFBSXJCLElBQUosQ0FBU3NCLElBQVQsSUFBaUIsU0FBaEMsRUFBMkM7QUFDekM7QUFDQUQsc0JBQUlyQixJQUFKLENBQVNBLElBQVQsQ0FBY3VCLFFBQWQsR0FBeUIsZUFBS0MsUUFBTCxDQUFjSCxJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWN5QixTQUE1QixDQUF6QjtBQUNBLHVCQUFLakIsUUFBTCxHQUFnQmEsSUFBSXJCLElBQUosQ0FBU0EsSUFBekI7QUFDQSx1QkFBSzBCLE1BQUw7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O3VCQUNNLEtBQUtDLFlBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHQSxLQUFLQSxZQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUlVLGNBQUlDLFdBQUosQ0FBZ0I7QUFDOUJSLHlCQUFPO0FBQ0xTLDBCQUFNLFNBREQ7QUFFTHZCLDZCQUFTLEtBQUtBO0FBRlQ7QUFEdUIsaUJBQWhCLEM7OztBQUFaZSxtQjs7QUFNSjtBQUNBLG9CQUFHQSxJQUFJckIsSUFBSixJQUFZcUIsSUFBSXJCLElBQUosQ0FBU3NCLElBQVQsSUFBaUIsU0FBaEMsRUFBMkM7QUFDekNELHNCQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWM4QixPQUFkLENBQXNCLFVBQVNDLElBQVQsRUFBZTtBQUNuQ0EseUJBQUtSLFFBQUwsR0FBZ0IsZUFBS0MsUUFBTCxDQUFjTyxLQUFLTixTQUFuQixDQUFoQjtBQUNELG1CQUZEO0FBR0EsdUJBQUtoQixVQUFMLEdBQWtCWSxJQUFJckIsSUFBSixDQUFTQSxJQUEzQjtBQUNBLHVCQUFLMEIsTUFBTDtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3RitCLGVBQUtNLEk7O2tCQUFuQnJDLEsiLCJmaWxlIjoiZGV0YWlsUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcbiAgaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbHMvdXRpbCdcbiAgaW1wb3J0IGNvbW1lbnRzQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbWVudHNDb21wb25lbnQnXG4gIGltcG9ydCBwb3N0Q29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdENvbXBvbmVudCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMyMEJFRUMnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eOi+Wwj+iZjicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjMyLDIzMiwyMzIpJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIHBvc3RfaWQ6ICcnLFxuICAgICAgY3VycmVudFVzZXJfaWQ6ICcnLFxuICAgICAgcG9zdERhdGE6IHt9LFxuICAgICAgbXlDb21tZW50czogW11cbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImNvbW1lbnRzQ29tcG9uZW50XCI6e1widi1iaW5kOnBvc3RfaWQuc3luY1wiOlwicG9zdF9pZFwiLFwidi1iaW5kOmN1cnJlbnRVc2VyX2lkLnN5bmNcIjpcImN1cnJlbnRVc2VyX2lkXCIsXCJ2LWJpbmQ6bXlDb21tZW50cy5zeW5jXCI6XCJteUNvbW1lbnRzXCJ9LFwicG9zdENvbXBvbmVudFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cG9zdERhdGEuc3luY1wiOlwicG9zdERhdGFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgY29tbWVudHNDb21wb25lbnQgOiBjb21tZW50c0NvbXBvbmVudCxcbiAgICAgIHBvc3RDb21wb25lbnQgOiBwb3N0Q29tcG9uZW50XG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgICB0aGlzLnBvc3RfaWQgPSBvcHRpb24ucG9zdF9pZFxuICAgICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgICAvLyBUT0RPOiBsb2FkIHBvc3RcbiAgICAgIC8vaGVyZSBpcyBhIHJlYXNvbiB0aGF0IEkgbmVlZCB0byBmZWN0aCBwb3N0IGZyb20gaGVyZSBpbnN0ZWFkIGZyb20gcG9zdCBjb21wb25lbnQgd2hpY2ggaXMgZGlmZmVyZW50IGZyb20gY29tbWVudHNcbiAgICAgIHZhciByZXMgPSBhd2FpdCBhcGkuZmV0Y2hQb3N0KHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBwb3N0X2lkOiB0aGlzLnBvc3RfaWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXMuZGF0YS5kYXRhOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEuZGF0YSkpXG4gICAgICAgIHJlcy5kYXRhLmRhdGEudGltZURpZmYgPSB1dGlsLmNhbGNUaW1lKHJlcy5kYXRhLmRhdGEuY3JlYXRlZEF0KVxuICAgICAgICB0aGlzLnBvc3REYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgICAvLyB0aGlzLnBvc3REYXRhID0ge1xuICAgICAgLy8gICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAvLyAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgIC8vICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgIC8vICAgaW1nVXJsczogWycuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNC5qcGcnLCAnLi4vYXNzZXRzL2ltZy8zLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8yLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy8xLmpwZWcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNC5qcGcnXSxcbiAgICAgIC8vICAgY29tbWVudHNOdW06IDEyLFxuICAgICAgLy8gICBsaWtlc051bTogMzJcbiAgICAgIC8vIH1cbiAgICAgIGF3YWl0IHRoaXMubG9hZENvbW1lbnRzKClcbiAgICB9XG4gICAgYXN5bmMgb25TaG93ICgpIHtcbiAgICAgIGF3YWl0IHRoaXMubG9hZENvbW1lbnRzKClcbiAgICB9XG4gICAgYXN5bmMgbG9hZENvbW1lbnRzICgpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgY29tbWVudFxuICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5jb21tZW50TGlzdCh7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgdHlwZTogJ2NvbW1lbnQnLFxuICAgICAgICAgIHBvc3RfaWQ6IHRoaXMucG9zdF9pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2coJ2NvbW1lbnRzOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEuZGF0YSkpO1xuICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgcmVzLmRhdGEuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpdGVtLnRpbWVEaWZmID0gdXRpbC5jYWxjVGltZShpdGVtLmNyZWF0ZWRBdClcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5teUNvbW1lbnRzID0gcmVzLmRhdGEuZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgICAvLyB0aGlzLm15Q29tbWVudHMxID0gW1xuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJyxcbiAgICAgIC8vICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgIC8vICAgICAgIGdlbmRlcjogJ21hbGUnLFxuICAgICAgLy8gICAgICAgYWdlOiAyNSxcbiAgICAgIC8vICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgIC8vICAgICAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgICAvLyAgICAgICBsaWtlc051bTogMzJcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICAgIHtcbiAgICAgIC8vICAgICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsXG4gICAgICAvLyAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgIC8vICAgICAgICAgZ2VuZGVyOiAnbWFsZScsXG4gICAgICAvLyAgICAgICAgIGFnZTogMjUsXG4gICAgICAvLyAgICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgIC8vICAgICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgIC8vICAgICAgICAgbGlrZXNOdW06IDMyXG4gICAgICAvLyAgICAgICB9LHtcbiAgICAgIC8vICAgICAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJyxcbiAgICAgIC8vICAgICAgICAgICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAvLyAgICAgICAgICAgZ2VuZGVyOiAnbWFsZScsXG4gICAgICAvLyAgICAgICAgICAgYWdlOiAyNSxcbiAgICAgIC8vICAgICAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAvLyAgICAgICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgIC8vICAgICAgICAgICBsaWtlc051bTogMzJcbiAgICAgIC8vICAgICAgICAgfVxuICAgICAgLy8gXVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgfVxuIl19