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
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
                this.myComments = [{
                  avatarUrl: '../assets/img/boy.jpeg',
                  nickName: '谭马儒',
                  gender: 'male',
                  age: 25,
                  createdAt: '昨日 23：27',
                  msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  likesNum: 32
                }, {
                  avatarUrl: '../assets/img/boy.jpeg',
                  nickName: '谭马儒',
                  gender: 'male',
                  age: 25,
                  createdAt: '昨日 23：27',
                  msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  likesNum: 32
                }, {
                  avatarUrl: '../assets/img/boy.jpeg',
                  nickName: '谭马儒',
                  gender: 'male',
                  age: 25,
                  createdAt: '昨日 23：27',
                  msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  likesNum: 32
                }];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInByb3BzIiwicG9zdF9pZCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidXNlcl9pZCIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteUNvbW1lbnRzIiwibWV0aG9kcyIsImxvYWRDb21tZW50IiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJnZW5kZXIiLCJhZ2UiLCJjcmVhdGVkQXQiLCJtc2ciLCJsaWtlc051bSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUE4QjtBQUR2QixLLFFBR1RDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE1BREM7QUFFUEMsaUJBQVM7QUFGRixPQURIO0FBS05DLGVBQVM7QUFDUEgsY0FBTUMsTUFEQztBQUVQQyxpQkFBUztBQUZGO0FBTEgsSyxRQVVSRSxJLEdBQU87QUFDTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRGpDO0FBRUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUZsQztBQUdMQyxrQkFBWTtBQUhQLEssUUFpRFBDLE8sR0FBVSxFOzs7Ozs7Ozs7OztxQkEzQ0wsS0FBS1osTzs7Ozs7O3VCQUNBLEtBQUthLFdBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQUtGLFVBQUwsR0FBa0IsQ0FDaEI7QUFDSUcsNkJBQVcsd0JBRGY7QUFFSUMsNEJBQVUsS0FGZDtBQUdJQywwQkFBUSxNQUhaO0FBSUlDLHVCQUFLLEVBSlQ7QUFLSUMsNkJBQVcsVUFMZjtBQU1JQyx1QkFBSyxpREFOVDtBQU9JQyw0QkFBVTtBQVBkLGlCQURnQixFQVVkO0FBQ0lOLDZCQUFXLHdCQURmO0FBRUlDLDRCQUFVLEtBRmQ7QUFHSUMsMEJBQVEsTUFIWjtBQUlJQyx1QkFBSyxFQUpUO0FBS0lDLDZCQUFXLFVBTGY7QUFNSUMsdUJBQUssaURBTlQ7QUFPSUMsNEJBQVU7QUFQZCxpQkFWYyxFQWtCVjtBQUNFTiw2QkFBVyx3QkFEYjtBQUVFQyw0QkFBVSxLQUZaO0FBR0VDLDBCQUFRLE1BSFY7QUFJRUMsdUJBQUssRUFKUDtBQUtFQyw2QkFBVyxVQUxiO0FBTUVDLHVCQUFLLGlEQU5QO0FBT0VDLDRCQUFVO0FBUFosaUJBbEJVLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEMrQixlQUFLQyxTOztrQkFBbkJ6QixLIiwiZmlsZSI6ImNvbW1lbnRzQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkZEMzAwJ1xuICAgIH1cbiAgICBwcm9wcyA9IHtcbiAgICAgIHBvc3RfaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgfSxcbiAgICAgIHVzZXJfaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgfSxcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBteUNvbW1lbnRzOiBbXVxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgaWYodGhpcy5wb3N0X2lkKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZENvbW1lbnQoKVxuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBsb2FkQ29tbWVudCAoKSB7XG4gICAgICAvLyBUT0RPOiBsb2FkIGRhdGFcbiAgICAgIC8vIHZhciByZXMgPSBhd2FpdCBhcGkuY29tbWVudExpc3Qoe1xuICAgICAgLy8gICBxdWVyeToge1xuICAgICAgLy9cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgIC8vIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYXkgPSAnc3VjY2VzcycpIHtcbiAgICAgIC8vICAgdGhpcy5wb3N0RGF0YSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMubXlDb21tZW50cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsXG4gICAgICAgICAgICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgICAgICAgIGFnZTogMjUsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgICAgICAgbGlrZXNOdW06IDMyXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF2YXRhclVybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLFxuICAgICAgICAgICAgICBuaWNrTmFtZTogJ+iwremprOWEkicsXG4gICAgICAgICAgICAgIGdlbmRlcjogJ21hbGUnLFxuICAgICAgICAgICAgICBhZ2U6IDI1LFxuICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAgICAgICAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgICAgICAgICAgIGxpa2VzTnVtOiAzMlxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsXG4gICAgICAgICAgICAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgICAgICAgICAgIGdlbmRlcjogJ21hbGUnLFxuICAgICAgICAgICAgICAgIGFnZTogMjUsXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgICAgICAgICAgIG1zZzogJ+aDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOmine+8jOmDveWcqOi/memHjOeVmeS4i+i2s+i/ueaDs+ivtOS7gOS5iOminScsXG4gICAgICAgICAgICAgICAgbGlrZXNOdW06IDMyXG4gICAgICAgICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG4gIH1cbiJdfQ==