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
      post_id: {
        type: String,
        default: {}
      },
      user_id: {
        type: String,
        default: {}
      }
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myComments: []
    }, _this.methods = {
      goComment: function goComment() {
        _wepy2.default.navigateTo({
          url: 'editPage?type=comment'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.post_id) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return this.loadComment();

              case 3:
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
    key: 'loadComment',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: load data
                // var res = await api.commentList({
                //   query: {
                //
                //   }
                // })
                // if(res.data && res.data.flay = 'success') {
                //   this.postData = res.data.data
                // }
                this.myComments1 = [
                  // {
                  //     avatarUrl: '../assets/img/boy.jpeg',
                  //     nickName: '谭马儒',
                  //     gender: 'male',
                  //     age: 25,
                  //     createdAt: '昨日 23：27',
                  //     msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  //     likesNum: 32
                  //   },
                  //   {
                  //       avatarUrl: '../assets/img/boy.jpeg',
                  //       nickName: '谭马儒',
                  //       gender: 'male',
                  //       age: 25,
                  //       createdAt: '昨日 23：27',
                  //       msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  //       likesNum: 32
                  //     },{
                  //         avatarUrl: '../assets/img/boy.jpeg',
                  //         nickName: '谭马儒',
                  //         gender: 'male',
                  //         age: 25,
                  //         createdAt: '昨日 23：27',
                  //         msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  //         likesNum: 32
                  //       }
                ];

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadComment() {
        return _ref3.apply(this, arguments);
      }

      return loadComment;
    }()
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInByb3BzIiwicG9zdF9pZCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidXNlcl9pZCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteUNvbW1lbnRzIiwibWV0aG9kcyIsImdvQ29tbWVudCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJsb2FkQ29tbWVudCIsIm15Q29tbWVudHMxIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCO0FBRHZCLEssUUFHVEMsSyxHQUFRO0FBQ05DLGVBQVM7QUFDUEMsY0FBTUMsTUFEQztBQUVQQyxpQkFBUztBQUZGLE9BREg7QUFLTkMsZUFBUztBQUNQSCxjQUFNQyxNQURDO0FBRVBDLGlCQUFTO0FBRkY7QUFMSCxLLFFBVVJFLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGtCQUFZO0FBSFAsSyxRQWlEUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0s7QUFDWCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7Ozs7Ozs7O3FCQTNDTCxLQUFLZixPOzs7Ozs7dUJBQ0EsS0FBS2dCLFdBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQUtDLFdBQUwsR0FBbUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCaUIsaUJBQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEMrQixlQUFLQyxTOztrQkFBbkJ0QixLIiwiZmlsZSI6ImNvbW1lbnRzQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkZEMzAwJ1xuICAgIH1cbiAgICBwcm9wcyA9IHtcbiAgICAgIHBvc3RfaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgfSxcbiAgICAgIHVzZXJfaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgfSxcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBteUNvbW1lbnRzOiBbXVxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgaWYodGhpcy5wb3N0X2lkKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZENvbW1lbnQoKVxuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBsb2FkQ29tbWVudCAoKSB7XG4gICAgICAvLyBUT0RPOiBsb2FkIGRhdGFcbiAgICAgIC8vIHZhciByZXMgPSBhd2FpdCBhcGkuY29tbWVudExpc3Qoe1xuICAgICAgLy8gICBxdWVyeToge1xuICAgICAgLy9cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgIC8vIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYXkgPSAnc3VjY2VzcycpIHtcbiAgICAgIC8vICAgdGhpcy5wb3N0RGF0YSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMubXlDb21tZW50czEgPSBbXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgICAgICAvLyAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgICAvLyAgICAgZ2VuZGVyOiAnbWFsZScsXG4gICAgICAgIC8vICAgICBhZ2U6IDI1LFxuICAgICAgICAvLyAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgICAvLyAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgICAgLy8gICAgIGxpa2VzTnVtOiAzMlxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vICAge1xuICAgICAgICAvLyAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJyxcbiAgICAgICAgLy8gICAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgICAvLyAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgICAgLy8gICAgICAgYWdlOiAyNSxcbiAgICAgICAgLy8gICAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgICAvLyAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgICAvLyAgICAgICBsaWtlc051bTogMzJcbiAgICAgICAgLy8gICAgIH0se1xuICAgICAgICAvLyAgICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgICAgICAvLyAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgICAgLy8gICAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgICAgLy8gICAgICAgICBhZ2U6IDI1LFxuICAgICAgICAvLyAgICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgICAgLy8gICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgICAvLyAgICAgICAgIGxpa2VzTnVtOiAzMlxuICAgICAgICAvLyAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBnb0NvbW1lbnQgKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2VkaXRQYWdlP3R5cGU9Y29tbWVudCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==