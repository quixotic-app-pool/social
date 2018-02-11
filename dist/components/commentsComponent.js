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
      currentUser_id: {
        type: String,
        default: {}
      }
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myComments: []
    }, _this.watch = {
      post_id: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(newVal, oldVal) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log('change');
                  _context.next = 3;
                  return this.loadComment();

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function post_id(_x, _x2) {
          return _ref2.apply(this, arguments);
        }

        return post_id;
      }()
    }, _this.methods = {
      goComment: function goComment() {
        console.log('from comment com: ' + this.currentUser_id);
        _wepy2.default.navigateTo({
          url: 'editPage?type=comment&user_id=' + this.currentUser_id + '&post_id=' + this.post_id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad() {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadComment',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // TODO: load data
                console.log('??');
                _context3.next = 3;
                return _api2.default.commentList({
                  query: {
                    type: 'comment',
                    post_id: this.post_id
                  }
                });

              case 3:
                res = _context3.sent;

                console.log('comments: ' + JSON.stringify(res.data.data));
                if (res.data && res.data.flag == 'success') {
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

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadComment() {
        return _ref4.apply(this, arguments);
      }

      return loadComment;
    }()
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInByb3BzIiwicG9zdF9pZCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiY3VycmVudFVzZXJfaWQiLCJkYXRhIiwic2NyZWVuV2lkdGgiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwic2NyZWVuSGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwibXlDb21tZW50cyIsIndhdGNoIiwibmV3VmFsIiwib2xkVmFsIiwiY29uc29sZSIsImxvZyIsImxvYWRDb21tZW50IiwibWV0aG9kcyIsImdvQ29tbWVudCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb21tZW50TGlzdCIsInF1ZXJ5IiwicmVzIiwiSlNPTiIsInN0cmluZ2lmeSIsImZsYWciLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEI7QUFEdkIsSyxRQUdUQyxLLEdBQVE7QUFDTkMsZUFBUztBQUNQQyxjQUFNQyxNQURDO0FBRVBDLGlCQUFTO0FBRkYsT0FESDtBQUtOQyxzQkFBZ0I7QUFDZEgsY0FBTUMsTUFEUTtBQUVkQyxpQkFBUztBQUZLO0FBTFYsSyxRQVVSRSxJLEdBQU87QUFDTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRGpDO0FBRUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUZsQztBQUdMQyxrQkFBWTtBQUhQLEssUUFPUEMsSyxHQUFRO0FBQ0FaLGFBREE7QUFBQSw2RkFDU2EsTUFEVCxFQUNpQkMsTUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVKQywwQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFGSTtBQUFBLHlCQUdFLEtBQUtDLFdBQUwsRUFIRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEssUUFpRFJDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNLO0FBQ1hKLGdCQUFRQyxHQUFSLENBQVksdUJBQXVCLEtBQUtaLGNBQXhDO0FBQ0EsdUJBQUtnQixVQUFMLENBQWdCO0FBQ2RDLGVBQUssbUNBQW1DLEtBQUtqQixjQUF4QyxHQUF5RCxXQUF6RCxHQUF1RSxLQUFLSjtBQURuRSxTQUFoQjtBQUdEO0FBTk8sSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUNSO0FBQ0FlLHdCQUFRQyxHQUFSLENBQVksSUFBWjs7dUJBQ2dCLGNBQUlNLFdBQUosQ0FBZ0I7QUFDOUJDLHlCQUFPO0FBQ0x0QiwwQkFBTSxTQUREO0FBRUxELDZCQUFTLEtBQUtBO0FBRlQ7QUFEdUIsaUJBQWhCLEM7OztBQUFad0IsbUI7O0FBTUpULHdCQUFRQyxHQUFSLENBQVksZUFBZVMsS0FBS0MsU0FBTCxDQUFlRixJQUFJbkIsSUFBSixDQUFTQSxJQUF4QixDQUEzQjtBQUNBLG9CQUFHbUIsSUFBSW5CLElBQUosSUFBWW1CLElBQUluQixJQUFKLENBQVNzQixJQUFULElBQWlCLFNBQWhDLEVBQTJDO0FBQ3pDLHVCQUFLaEIsVUFBTCxHQUFrQmEsSUFBSW5CLElBQUosQ0FBU0EsSUFBM0I7QUFDQSx1QkFBS3VCLE1BQUw7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcEUrQixlQUFLQyxTOztrQkFBbkJqQyxLIiwiZmlsZSI6ImNvbW1lbnRzQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkZEMzAwJ1xuICAgIH1cbiAgICBwcm9wcyA9IHtcbiAgICAgIHBvc3RfaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgfSxcbiAgICAgIGN1cnJlbnRVc2VyX2lkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBteUNvbW1lbnRzOiBbXVxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgIH1cbiAgICB3YXRjaCA9IHtcbiAgICAgIGFzeW5jIHBvc3RfaWQgKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UnKTtcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkQ29tbWVudCgpXG4gICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGxvYWRDb21tZW50ICgpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgICAgY29uc29sZS5sb2coJz8/Jyk7XG4gICAgICB2YXIgcmVzID0gYXdhaXQgYXBpLmNvbW1lbnRMaXN0KHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICB0eXBlOiAnY29tbWVudCcsXG4gICAgICAgICAgcG9zdF9pZDogdGhpcy5wb3N0X2lkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnY29tbWVudHM6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS5kYXRhKSk7XG4gICAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICB0aGlzLm15Q29tbWVudHMgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMubXlDb21tZW50czEgPSBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgICAgLy8gICAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgLy8gICAgICAgZ2VuZGVyOiAnbWFsZScsXG4gICAgICAvLyAgICAgICBhZ2U6IDI1LFxuICAgICAgLy8gICAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgLy8gICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgIC8vICAgICAgIGxpa2VzTnVtOiAzMlxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJyxcbiAgICAgIC8vICAgICAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgLy8gICAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgIC8vICAgICAgICAgYWdlOiAyNSxcbiAgICAgIC8vICAgICAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgLy8gICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgLy8gICAgICAgICBsaWtlc051bTogMzJcbiAgICAgIC8vICAgICAgIH0se1xuICAgICAgLy8gICAgICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgICAgLy8gICAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgIC8vICAgICAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgIC8vICAgICAgICAgICBhZ2U6IDI1LFxuICAgICAgLy8gICAgICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgIC8vICAgICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgLy8gICAgICAgICAgIGxpa2VzTnVtOiAzMlxuICAgICAgLy8gICAgICAgICB9XG4gICAgICAvLyBdXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBnb0NvbW1lbnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZnJvbSBjb21tZW50IGNvbTogJyArIHRoaXMuY3VycmVudFVzZXJfaWQpO1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2VkaXRQYWdlP3R5cGU9Y29tbWVudCZ1c2VyX2lkPScgKyB0aGlzLmN1cnJlbnRVc2VyX2lkICsgJyZwb3N0X2lkPScgKyB0aGlzLnBvc3RfaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==