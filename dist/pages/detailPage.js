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
      myComments: [],
      hideLine: true
    }, _this.$repeat = {}, _this.$props = { "commentsComponent": { "v-bind:post_id.sync": "post_id", "v-bind:currentUser_id.sync": "currentUser_id", "v-bind:myComments.sync": "myComments" }, "postComponent": { "xmlns:v-bind": "", "v-bind:hideLine.sync": "hideLine", "v-bind:postData.sync": "postData" } }, _this.$events = {}, _this.components = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbFBhZ2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJwb3N0X2lkIiwiY3VycmVudFVzZXJfaWQiLCJwb3N0RGF0YSIsIm15Q29tbWVudHMiLCJoaWRlTGluZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbW1lbnRzQ29tcG9uZW50IiwicG9zdENvbXBvbmVudCIsIm1ldGhvZHMiLCJvcHRpb24iLCJnZXRTdG9yYWdlU3luYyIsImZldGNoUG9zdCIsInF1ZXJ5IiwicmVzIiwiZmxhZyIsInRpbWVEaWZmIiwiY2FsY1RpbWUiLCJjcmVhdGVkQXQiLCIkYXBwbHkiLCJsb2FkQ29tbWVudHMiLCJjb21tZW50TGlzdCIsInR5cGUiLCJmb3JFYWNoIiwiaXRlbSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLEtBRmpCO0FBR1BDLHVCQUFpQjtBQUhWLEssUUFLVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsZUFBUyxFQUhKO0FBSUxDLHNCQUFnQixFQUpYO0FBS0xDLGdCQUFVLEVBTEw7QUFNTEMsa0JBQVksRUFOUDtBQU9MQyxnQkFBVTtBQVBMLEssUUFTUkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsdUJBQXNCLFNBQXZCLEVBQWlDLDhCQUE2QixnQkFBOUQsRUFBK0UsMEJBQXlCLFlBQXhHLEVBQXJCLEVBQTJJLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHdCQUF1QixVQUExQyxFQUFxRCx3QkFBdUIsVUFBNUUsRUFBM0osRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsb0RBRFE7QUFFUkM7QUFGUSxLLFFBOEVWQyxPLEdBQVUsRTs7Ozs7OzJGQTFFSUMsTTs7Ozs7O0FBQ1oscUJBQUtaLE9BQUwsR0FBZVksT0FBT1osT0FBdEI7QUFDQSxxQkFBS0MsY0FBTCxHQUFzQixlQUFLWSxjQUFMLENBQW9CLFFBQXBCLENBQXRCO0FBQ0E7QUFDQTs7dUJBQ2dCLGNBQUlDLFNBQUosQ0FBYztBQUM1QkMseUJBQU87QUFDTGYsNkJBQVMsS0FBS0E7QUFEVDtBQURxQixpQkFBZCxDOzs7QUFBWmdCLG1COztBQUtKLG9CQUFHQSxJQUFJdEIsSUFBSixJQUFZc0IsSUFBSXRCLElBQUosQ0FBU3VCLElBQVQsSUFBaUIsU0FBaEMsRUFBMkM7QUFDekM7QUFDQUQsc0JBQUl0QixJQUFKLENBQVNBLElBQVQsQ0FBY3dCLFFBQWQsR0FBeUIsZUFBS0MsUUFBTCxDQUFjSCxJQUFJdEIsSUFBSixDQUFTQSxJQUFULENBQWMwQixTQUE1QixDQUF6QjtBQUNBLHVCQUFLbEIsUUFBTCxHQUFnQmMsSUFBSXRCLElBQUosQ0FBU0EsSUFBekI7QUFDQSx1QkFBSzJCLE1BQUw7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O3VCQUNNLEtBQUtDLFlBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHQSxLQUFLQSxZQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUlVLGNBQUlDLFdBQUosQ0FBZ0I7QUFDOUJSLHlCQUFPO0FBQ0xTLDBCQUFNLFNBREQ7QUFFTHhCLDZCQUFTLEtBQUtBO0FBRlQ7QUFEdUIsaUJBQWhCLEM7OztBQUFaZ0IsbUI7O0FBTUo7QUFDQSxvQkFBR0EsSUFBSXRCLElBQUosSUFBWXNCLElBQUl0QixJQUFKLENBQVN1QixJQUFULElBQWlCLFNBQWhDLEVBQTJDO0FBQ3pDRCxzQkFBSXRCLElBQUosQ0FBU0EsSUFBVCxDQUFjK0IsT0FBZCxDQUFzQixVQUFTQyxJQUFULEVBQWU7QUFDbkNBLHlCQUFLUixRQUFMLEdBQWdCLGVBQUtDLFFBQUwsQ0FBY08sS0FBS04sU0FBbkIsQ0FBaEI7QUFDRCxtQkFGRDtBQUdBLHVCQUFLakIsVUFBTCxHQUFrQmEsSUFBSXRCLElBQUosQ0FBU0EsSUFBM0I7QUFDQSx1QkFBSzJCLE1BQUw7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUYrQixlQUFLTSxJOztrQkFBbkJ0QyxLIiwiZmlsZSI6ImRldGFpbFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG4gIGltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWxzL3V0aWwnXG4gIGltcG9ydCBjb21tZW50c0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1lbnRzQ29tcG9uZW50J1xuICBpbXBvcnQgcG9zdENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RDb21wb25lbnQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMjBCRUVDJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnjovlsI/omY4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIzMiwyMzIsMjMyKSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBwb3N0X2lkOiAnJyxcbiAgICAgIGN1cnJlbnRVc2VyX2lkOiAnJyxcbiAgICAgIHBvc3REYXRhOiB7fSxcbiAgICAgIG15Q29tbWVudHM6IFtdLFxuICAgICAgaGlkZUxpbmU6IHRydWVcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImNvbW1lbnRzQ29tcG9uZW50XCI6e1widi1iaW5kOnBvc3RfaWQuc3luY1wiOlwicG9zdF9pZFwiLFwidi1iaW5kOmN1cnJlbnRVc2VyX2lkLnN5bmNcIjpcImN1cnJlbnRVc2VyX2lkXCIsXCJ2LWJpbmQ6bXlDb21tZW50cy5zeW5jXCI6XCJteUNvbW1lbnRzXCJ9LFwicG9zdENvbXBvbmVudFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aGlkZUxpbmUuc3luY1wiOlwiaGlkZUxpbmVcIixcInYtYmluZDpwb3N0RGF0YS5zeW5jXCI6XCJwb3N0RGF0YVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBjb21tZW50c0NvbXBvbmVudCA6IGNvbW1lbnRzQ29tcG9uZW50LFxuICAgICAgcG9zdENvbXBvbmVudCA6IHBvc3RDb21wb25lbnRcbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkIChvcHRpb24pIHtcbiAgICAgIHRoaXMucG9zdF9pZCA9IG9wdGlvbi5wb3N0X2lkXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyX2lkID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcklkJylcbiAgICAgIC8vIFRPRE86IGxvYWQgcG9zdFxuICAgICAgLy9oZXJlIGlzIGEgcmVhc29uIHRoYXQgSSBuZWVkIHRvIGZlY3RoIHBvc3QgZnJvbSBoZXJlIGluc3RlYWQgZnJvbSBwb3N0IGNvbXBvbmVudCB3aGljaCBpcyBkaWZmZXJlbnQgZnJvbSBjb21tZW50c1xuICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5mZXRjaFBvc3Qoe1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIHBvc3RfaWQ6IHRoaXMucG9zdF9pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlcy5kYXRhLmRhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS5kYXRhKSlcbiAgICAgICAgcmVzLmRhdGEuZGF0YS50aW1lRGlmZiA9IHV0aWwuY2FsY1RpbWUocmVzLmRhdGEuZGF0YS5jcmVhdGVkQXQpXG4gICAgICAgIHRoaXMucG9zdERhdGEgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMucG9zdERhdGEgPSB7XG4gICAgICAvLyAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgIC8vICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgLy8gICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgLy8gICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZyddLFxuICAgICAgLy8gICBjb21tZW50c051bTogMTIsXG4gICAgICAvLyAgIGxpa2VzTnVtOiAzMlxuICAgICAgLy8gfVxuICAgICAgYXdhaXQgdGhpcy5sb2FkQ29tbWVudHMoKVxuICAgIH1cbiAgICBhc3luYyBvblNob3cgKCkge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkQ29tbWVudHMoKVxuICAgIH1cbiAgICBhc3luYyBsb2FkQ29tbWVudHMgKCkge1xuICAgICAgLy8gVE9ETzogbG9hZCBjb21tZW50XG4gICAgICB2YXIgcmVzID0gYXdhaXQgYXBpLmNvbW1lbnRMaXN0KHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICB0eXBlOiAnY29tbWVudCcsXG4gICAgICAgICAgcG9zdF9pZDogdGhpcy5wb3N0X2lkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZygnY29tbWVudHM6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS5kYXRhKSk7XG4gICAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICByZXMuZGF0YS5kYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIGl0ZW0udGltZURpZmYgPSB1dGlsLmNhbGNUaW1lKGl0ZW0uY3JlYXRlZEF0KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLm15Q29tbWVudHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMubXlDb21tZW50czEgPSBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgICAgLy8gICAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgLy8gICAgICAgZ2VuZGVyOiAnbWFsZScsXG4gICAgICAvLyAgICAgICBhZ2U6IDI1LFxuICAgICAgLy8gICAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgLy8gICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgIC8vICAgICAgIGxpa2VzTnVtOiAzMlxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJyxcbiAgICAgIC8vICAgICAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgLy8gICAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgIC8vICAgICAgICAgYWdlOiAyNSxcbiAgICAgIC8vICAgICAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgLy8gICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgLy8gICAgICAgICBsaWtlc051bTogMzJcbiAgICAgIC8vICAgICAgIH0se1xuICAgICAgLy8gICAgICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgICAgLy8gICAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgIC8vICAgICAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgIC8vICAgICAgICAgICBhZ2U6IDI1LFxuICAgICAgLy8gICAgICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgIC8vICAgICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgLy8gICAgICAgICAgIGxpa2VzTnVtOiAzMlxuICAgICAgLy8gICAgICAgICB9XG4gICAgICAvLyBdXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuICB9XG4iXX0=