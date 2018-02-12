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
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight
    }, _this.methods = {
      like: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
          var self, res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // TODO: update like
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInByb3BzIiwibXlDb21tZW50cyIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJjbGlja2FibGUiLCJCb29sZWFuIiwicG9zdF9pZCIsIlN0cmluZyIsImN1cnJlbnRVc2VyX2lkIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm1ldGhvZHMiLCJsaWtlIiwiaXRlbSIsInNlbGYiLCJxdWVyeSIsInBhY2siLCJ1c2VyX2lkIiwiX2lkIiwibWV0aG9kIiwicmVzIiwiZmxhZyIsImxpa2VkQnkiLCJwdXNoIiwiJGFwcGx5IiwiZ29Db21tZW50IiwibmF2aWdhdGVUbyIsInVybCIsImdvUG9zdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEI7QUFEdkIsSyxRQUdUQyxLLEdBQVE7QUFDTkMsa0JBQVk7QUFDVkMsY0FBTUMsS0FESTtBQUVWQyxpQkFBUztBQUZDLE9BRE47QUFLTkMsaUJBQVc7QUFDVEgsY0FBTUksT0FERztBQUVURixpQkFBUztBQUZBLE9BTEw7QUFTTkcsZUFBUztBQUNQTCxjQUFNTSxNQURDO0FBRVBKLGlCQUFTO0FBRkYsT0FUSDtBQWFOSyxzQkFBZ0I7QUFDZFAsY0FBTU0sTUFEUTtBQUVkSixpQkFBUztBQUZLO0FBYlYsSyxRQWtCUk0sSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5Qkc7QUFGbEMsSyxRQUlQQyxPLEdBQVU7QUFDRkMsVUFERTtBQUFBLDZGQUNJQyxJQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVOO0FBQ0tDLHNCQUhDLEdBR00sSUFITjtBQUFBO0FBQUEseUJBSVcsY0FBSUYsSUFBSixDQUFTO0FBQ3ZCRywyQkFBTztBQUNMQyw0QkFBTTtBQUNKQyxpQ0FBU0gsS0FBS1YsY0FEVjtBQUVKRixpQ0FBU1csS0FBS0s7QUFGVjtBQURELHFCQURnQjtBQU92QkMsNEJBQVE7QUFQZSxtQkFBVCxDQUpYOztBQUFBO0FBSURDLHFCQUpDOztBQWFOO0FBQ0Msc0JBQUdBLElBQUlmLElBQUosSUFBWWUsSUFBSWYsSUFBSixDQUFTZ0IsSUFBVCxJQUFpQixTQUFoQyxFQUEyQztBQUN6Q1IseUJBQUtTLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixLQUFLbkIsY0FBdkI7QUFDQSx5QkFBS29CLE1BQUw7QUFDRDtBQUNBOztBQWxCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQW9CUkMsZUFwQlEsdUJBb0JLO0FBQ1g7QUFDQSx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLG1DQUFtQyxLQUFLdkIsY0FBeEMsR0FBeUQsV0FBekQsR0FBdUUsS0FBS0Y7QUFEbkUsU0FBaEI7QUFHRCxPQXpCTztBQTBCUjBCLFlBMUJRLGtCQTBCQTFCLE9BMUJBLEVBMEJTO0FBQ2YsWUFBRyxLQUFLRixTQUFSLEVBQW1CO0FBQ2pCLHlCQUFLMEIsVUFBTCxDQUFnQjtBQUNkQyxpQkFBSyx3QkFBd0J6QjtBQURmLFdBQWhCO0FBR0Q7QUFDRjtBQWhDTyxLOzs7O0VBMUJ1QixlQUFLMkIsUzs7a0JBQW5CckMsSyIsImZpbGUiOiJjb21tZW50c0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZGRDMwMCdcbiAgICB9XG4gICAgcHJvcHMgPSB7XG4gICAgICBteUNvbW1lbnRzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgfSxcbiAgICAgIGNsaWNrYWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHBvc3RfaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIGN1cnJlbnRVc2VyX2lkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHRcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIGxpa2UgKGl0ZW0pIHtcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIGxpa2VcbiAgICAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5saWtlKHtcbiAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICBwYWNrOiB7XG4gICAgICAgICAgICAgICB1c2VyX2lkOiBzZWxmLmN1cnJlbnRVc2VyX2lkLFxuICAgICAgICAgICAgICAgcG9zdF9pZDogaXRlbS5faWRcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICB9KVxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ2xpa2U6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpXG4gICAgICAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICBpdGVtLmxpa2VkQnkucHVzaCh0aGlzLmN1cnJlbnRVc2VyX2lkKVxuICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgLy8gIGxpc3QgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ29Db21tZW50ICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Zyb20gY29tbWVudCBjb206ICcgKyB0aGlzLmN1cnJlbnRVc2VyX2lkKTtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdlZGl0UGFnZT90eXBlPWNvbW1lbnQmdXNlcl9pZD0nICsgdGhpcy5jdXJyZW50VXNlcl9pZCArICcmcG9zdF9pZD0nICsgdGhpcy5wb3N0X2lkXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ29Qb3N0IChwb3N0X2lkKSB7XG4gICAgICAgIGlmKHRoaXMuY2xpY2thYmxlKSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJ2RldGFpbFBhZ2U/cG9zdF9pZD0nICsgcG9zdF9pZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==