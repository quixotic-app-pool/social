'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      myData: {},
      myComments: []
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
                this.myComments = [{
                  avatarUrl: '../assets/img/boy.jpeg',
                  nickName: '扎西德勒',
                  gender: 'male',
                  age: 25,
                  createdAt: '一小时前',
                  msg: '你想我说什么好呢，你好无聊'
                }, {
                  avatarUrl: '../assets/img/boy.jpeg',
                  nickName: '小叮当',
                  gender: 'female',
                  age: 22,
                  createdAt: '一小时前',
                  msg: '你想我说什么好呢，爱聊不聊'
                }, {
                  avatarUrl: '../assets/img/boy.jpeg',
                  nickName: '爱的狂想曲',
                  gender: 'male',
                  age: 30,
                  createdAt: '两小时前',
                  msg: '你想我说什么好呢，无聊呗'
                }];

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

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detailPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbFBhZ2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJteURhdGEiLCJteUNvbW1lbnRzIiwibWV0aG9kcyIsInByZXZpZXdJbWFnZSIsImN1ciIsImltYWdlTGlzdCIsImN1cnJlbnQiLCJ1cmxzIiwibW9yZU9wdGlvbiIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlZGl0U3RhdHVzIiwibmF2aWdhdGVUbyIsInVybCIsImdvIiwicGFnZSIsImxvYWREYXRhIiwibmlja05hbWUiLCJjcmVhdGVkQXQiLCJtc2ciLCJpbWdVcmxzIiwiY29tbWVudHNOdW0iLCJsaWtlc051bSIsImF2YXRhclVybCIsImdlbmRlciIsImFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLEtBRmpCO0FBR1BDLHVCQUFpQjtBQUhWLEssUUFLVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLGtCQUFZO0FBSlAsSyxRQThDUEMsTyxHQUFVO0FBQ1JDLGtCQURRLHdCQUNNQyxHQUROLEVBQ1dDLFNBRFgsRUFDc0I7QUFDNUIsdUJBQUtGLFlBQUwsQ0FBa0I7QUFDaEJHLG1CQUFTRixHQURPO0FBRWhCRyxnQkFBTUY7QUFGVSxTQUFsQjtBQUlELE9BTk87QUFPUkcsZ0JBUFEsd0JBT007QUFDWix1QkFBS0MsZUFBTCxDQUFxQjtBQUNuQkMsb0JBQVUsQ0FBQyxNQUFELEVBQVMsSUFBVDtBQURTLFNBQXJCLEVBRUdDLElBRkgsQ0FFUSxVQUFTQyxHQUFULEVBQWE7QUFDbkJDLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxTQUpEO0FBS0QsT0FiTztBQWNSRyxnQkFkUSx3QkFjTTtBQUNaLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BbEJPO0FBbUJSQyxRQW5CUSxjQW1CTEMsSUFuQkssRUFtQkM7QUFDUCx1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLRTtBQURTLFNBQWhCO0FBR0Q7QUF2Qk8sSzs7Ozs7Ozs7Ozs7O3VCQXZDRixLQUFLQyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdOO0FBQ0EscUJBQUtwQixNQUFMLEdBQWM7QUFDVnFCLDRCQUFVLEtBREE7QUFFVkMsNkJBQVcsVUFGRDtBQUdWQyx1QkFBSyxpREFISztBQUlWQywyQkFBUyxDQUFDLHFCQUFELEVBQXdCLHFCQUF4QixFQUErQyxzQkFBL0MsRUFBdUUsc0JBQXZFLEVBQStGLHNCQUEvRixFQUF1SCxxQkFBdkgsRUFBOEkscUJBQTlJLEVBQXFLLHFCQUFySyxDQUpDO0FBS1ZDLCtCQUFhLEVBTEg7QUFNVkMsNEJBQVU7QUFOQSxpQkFBZDtBQVFBLHFCQUFLekIsVUFBTCxHQUFrQixDQUNoQjtBQUNFMEIsNkJBQVcsd0JBRGI7QUFFRU4sNEJBQVUsTUFGWjtBQUdFTywwQkFBUSxNQUhWO0FBSUVDLHVCQUFLLEVBSlA7QUFLRVAsNkJBQVcsTUFMYjtBQU1FQyx1QkFBSztBQU5QLGlCQURnQixFQVNoQjtBQUNFSSw2QkFBVyx3QkFEYjtBQUVFTiw0QkFBVSxLQUZaO0FBR0VPLDBCQUFRLFFBSFY7QUFJRUMsdUJBQUssRUFKUDtBQUtFUCw2QkFBVyxNQUxiO0FBTUVDLHVCQUFLO0FBTlAsaUJBVGdCLEVBaUJoQjtBQUNFSSw2QkFBVyx3QkFEYjtBQUVFTiw0QkFBVSxPQUZaO0FBR0VPLDBCQUFRLE1BSFY7QUFJRUMsdUJBQUssRUFKUDtBQUtFUCw2QkFBVyxNQUxiO0FBTUVDLHVCQUFLO0FBTlAsaUJBakJnQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpCK0IsZUFBS0osSTs7a0JBQW5COUIsSyIsImZpbGUiOiJkZXRhaWxQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMjBCRUVDJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnjovlsI/omY4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIzMiwyMzIsMjMyKSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBteURhdGE6IHt9LFxuICAgICAgbXlDb21tZW50czogW11cbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkICgpIHtcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIH1cbiAgICBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAgICAvLyBUT0RPOiBsb2FkIGRhdGFcbiAgICAgIHRoaXMubXlEYXRhID0ge1xuICAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgICAgICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZyddLFxuICAgICAgICAgIGNvbW1lbnRzTnVtOiAxMixcbiAgICAgICAgICBsaWtlc051bTogMzJcbiAgICAgICAgfVxuICAgICAgdGhpcy5teUNvbW1lbnRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsXG4gICAgICAgICAgbmlja05hbWU6ICfmiY7opb/lvrfli5InLFxuICAgICAgICAgIGdlbmRlcjogJ21hbGUnLFxuICAgICAgICAgIGFnZTogMjUsXG4gICAgICAgICAgY3JlYXRlZEF0OiAn5LiA5bCP5pe25YmNJyxcbiAgICAgICAgICBtc2c6ICfkvaDmg7PmiJHor7Tku4DkuYjlpb3lkaLvvIzkvaDlpb3ml6DogYonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhdmF0YXJVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJyxcbiAgICAgICAgICBuaWNrTmFtZTogJ+Wwj+WPruW9kycsXG4gICAgICAgICAgZ2VuZGVyOiAnZmVtYWxlJyxcbiAgICAgICAgICBhZ2U6IDIyLFxuICAgICAgICAgIGNyZWF0ZWRBdDogJ+S4gOWwj+aXtuWJjScsXG4gICAgICAgICAgbXNnOiAn5L2g5oOz5oiR6K+05LuA5LmI5aW95ZGi77yM54ix6IGK5LiN6IGKJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXZhdGFyVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsXG4gICAgICAgICAgbmlja05hbWU6ICfniLHnmoTni4Lmg7Pmm7InLFxuICAgICAgICAgIGdlbmRlcjogJ21hbGUnLFxuICAgICAgICAgIGFnZTogMzAsXG4gICAgICAgICAgY3JlYXRlZEF0OiAn5Lik5bCP5pe25YmNJyxcbiAgICAgICAgICBtc2c6ICfkvaDmg7PmiJHor7Tku4DkuYjlpb3lkaLvvIzml6DogYrlkZcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHByZXZpZXdJbWFnZSAoY3VyLCBpbWFnZUxpc3QpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgIGN1cnJlbnQ6IGN1cixcbiAgICAgICAgICB1cmxzOiBpbWFnZUxpc3RcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBtb3JlT3B0aW9uICgpIHtcbiAgICAgICAgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgIGl0ZW1MaXN0OiBbJ+WPlua2iOWFs+azqCcsICfkuL7miqUnXVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGVkaXRTdGF0dXMgKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2VkaXRQYWdlJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvKHBhZ2UpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IHBhZ2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==