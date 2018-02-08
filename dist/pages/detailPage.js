'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _commentsComponent = require('./../components/commentsComponent.js');

var _commentsComponent2 = _interopRequireDefault(_commentsComponent);

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
      myData: {}
    }, _this.components = {
      commentsComponent: _commentsComponent2.default
    }, _this.methods = {
      previewImage: function previewImage(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },
      moreOption: function moreOption() {
        _wepy2.default.showActionSheet({
          itemList: ['取消关注', '举报']
        }).then(function (res) {
          console.log(res);
        });
      },
      editStatus: function editStatus() {
        _wepy2.default.navigateTo({
          url: 'editPage'
        });
      },
      go: function go(page) {
        _wepy2.default.navigateTo({
          url: page
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
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: load data
                this.myData = {
                  nickName: '谭马儒',
                  createdAt: '昨日 23：27',
                  msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  imgUrls: ['../assets/img/5.jpg', '../assets/img/4.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                  commentsNum: 12,
                  likesNum: 32
                };

              case 1:
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

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detailPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbFBhZ2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteURhdGEiLCJjb21wb25lbnRzIiwiY29tbWVudHNDb21wb25lbnQiLCJtZXRob2RzIiwicHJldmlld0ltYWdlIiwiY3VyIiwiaW1hZ2VMaXN0IiwiY3VycmVudCIsInVybHMiLCJtb3JlT3B0aW9uIiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImVkaXRTdGF0dXMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ28iLCJwYWdlIiwibG9hZERhdGEiLCJuaWNrTmFtZSIsImNyZWF0ZWRBdCIsIm1zZyIsImltZ1VybHMiLCJjb21tZW50c051bSIsImxpa2VzTnVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixLQUZqQjtBQUdQQyx1QkFBaUI7QUFIVixLLFFBS1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGNBQVE7QUFISCxLLFFBS1BDLFUsR0FBYTtBQUNYQztBQURXLEssUUFpQmJDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDTUMsR0FETixFQUNXQyxTQURYLEVBQ3NCO0FBQzVCLHVCQUFLRixZQUFMLENBQWtCO0FBQ2hCRyxtQkFBU0YsR0FETztBQUVoQkcsZ0JBQU1GO0FBRlUsU0FBbEI7QUFJRCxPQU5PO0FBT1JHLGdCQVBRLHdCQU9NO0FBQ1osdUJBQUtDLGVBQUwsQ0FBcUI7QUFDbkJDLG9CQUFVLENBQUMsTUFBRCxFQUFTLElBQVQ7QUFEUyxTQUFyQixFQUVHQyxJQUZILENBRVEsVUFBU0MsR0FBVCxFQUFhO0FBQ25CQyxrQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0QsU0FKRDtBQUtELE9BYk87QUFjUkcsZ0JBZFEsd0JBY007QUFDWix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWxCTztBQW1CUkMsUUFuQlEsY0FtQkxDLElBbkJLLEVBbUJDO0FBQ1AsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsZUFBS0U7QUFEUyxTQUFoQjtBQUdEO0FBdkJPLEs7Ozs7Ozs7Ozs7Ozt1QkFiRixLQUFLQyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdOO0FBQ0EscUJBQUtyQixNQUFMLEdBQWM7QUFDVnNCLDRCQUFVLEtBREE7QUFFVkMsNkJBQVcsVUFGRDtBQUdWQyx1QkFBSyxpREFISztBQUlWQywyQkFBUyxDQUFDLHFCQUFELEVBQXdCLHFCQUF4QixFQUErQyxzQkFBL0MsRUFBdUUsc0JBQXZFLEVBQStGLHNCQUEvRixFQUF1SCxxQkFBdkgsRUFBOEkscUJBQTlJLEVBQXFLLHFCQUFySyxDQUpDO0FBS1ZDLCtCQUFhLEVBTEg7QUFNVkMsNEJBQVU7QUFOQSxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5CK0IsZUFBS1AsSTs7a0JBQW5CL0IsSyIsImZpbGUiOiJkZXRhaWxQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBjb21tZW50c0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1lbnRzQ29tcG9uZW50J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzIwQkVFQycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn546L5bCP6JmOJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMzIsMjMyLDIzMiknXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzY3JlZW5XaWR0aDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoLFxuICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgbXlEYXRhOiB7fVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgY29tbWVudHNDb21wb25lbnQgOiBjb21tZW50c0NvbXBvbmVudFxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgICAgdGhpcy5teURhdGEgPSB7XG4gICAgICAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgICAgIGltZ1VybHM6IFsnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJywgJy4uL2Fzc2V0cy9pbWcvMy5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMi5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMS5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJ10sXG4gICAgICAgICAgY29tbWVudHNOdW06IDEyLFxuICAgICAgICAgIGxpa2VzTnVtOiAzMlxuICAgICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1hZ2VMaXN0KSB7XG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiBjdXIsXG4gICAgICAgICAgdXJsczogaW1hZ2VMaXN0XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgbW9yZU9wdGlvbiAoKSB7XG4gICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogWyflj5bmtojlhbPms6gnLCAn5Li+5oqlJ11cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXMpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlZGl0U3RhdHVzICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdlZGl0UGFnZSdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnbyhwYWdlKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBwYWdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=