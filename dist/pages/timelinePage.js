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
      navigationBarTitleText: '相知于文字',
      backgroundColor: 'rgb(232,232,232)'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      listData: [],
      notifNum: 0
      // imgUrls2: [{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}],
      // data1: [{imgUrl: '../assets/img/school.png', title: '#校园浪漫#'}, {imgUrl: '../assets/img/food.png', title: '#成都美食#'}, {imgUrl: '../assets/img/fire.png', title: '#燃烧青春#'}],
      // data2: [{imgUrl: '../assets/img/school.png', title: '#单身狗的日常#'}, {imgUrl: '../assets/img/food.png', title: '#我这么美为什么单身#'}, {imgUrl: '../assets/img/school.png', title: '#一起来运动#'}, {imgUrl: '../assets/img/school.png', title: '#我是学霸我怕谁#'}, {imgUrl: '../assets/img/fire.png', title: '#条骚市场#'}]
    }, _this.methods = {
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
                this.listData = [{
                  nickName: '谭马儒',
                  createdAt: '昨日 23：27',
                  msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  imgUrls: ['../assets/img/5.jpg', '../assets/img/4.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                  commentsNum: 12,
                  likesNum: 32
                }, {
                  nickName: '谭马儒',
                  createdAt: '昨日 23：27',
                  msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  imgUrls: ['../assets/img/4.jpg', '../assets/img/5.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                  commentsNum: 12,
                  likesNum: 32
                }];

                this.notifNum = 66;

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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/timelinePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lUGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImxpc3REYXRhIiwibm90aWZOdW0iLCJtZXRob2RzIiwibW9yZU9wdGlvbiIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlZGl0U3RhdHVzIiwibmF2aWdhdGVUbyIsInVybCIsImdvIiwicGFnZSIsImxvYWREYXRhIiwibmlja05hbWUiLCJjcmVhdGVkQXQiLCJtc2ciLCJpbWdVcmxzIiwiY29tbWVudHNOdW0iLCJsaWtlc051bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLHVCQUFpQjtBQUhWLEssUUFLVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxnQkFBVTtBQUNWO0FBQ0E7QUFDQTtBQVBLLEssUUFtQ1BDLE8sR0FBVTtBQUNSQyxnQkFEUSx3QkFDTTtBQUNaLHVCQUFLQyxlQUFMLENBQXFCO0FBQ25CQyxvQkFBVSxDQUFDLE1BQUQsRUFBUyxJQUFUO0FBRFMsU0FBckIsRUFFR0MsSUFGSCxDQUVRLFVBQVNDLEdBQVQsRUFBYTtBQUNuQkMsa0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELFNBSkQ7QUFLRCxPQVBPO0FBUVJHLGdCQVJRLHdCQVFNO0FBQ1osdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FaTztBQWFSQyxRQWJRLGNBYUxDLElBYkssRUFhQztBQUNQLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUtFO0FBRFMsU0FBaEI7QUFHRDtBQWpCTyxLOzs7Ozs7Ozs7Ozs7dUJBekJGLEtBQUtDLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR047QUFDQSxxQkFBS2YsUUFBTCxHQUFnQixDQUNkO0FBQ0VnQiw0QkFBVSxLQURaO0FBRUVDLDZCQUFXLFVBRmI7QUFHRUMsdUJBQUssaURBSFA7QUFJRUMsMkJBQVMsQ0FBQyxxQkFBRCxFQUF3QixxQkFBeEIsRUFBK0Msc0JBQS9DLEVBQXVFLHNCQUF2RSxFQUErRixzQkFBL0YsRUFBdUgscUJBQXZILEVBQThJLHFCQUE5SSxFQUFxSyxxQkFBckssQ0FKWDtBQUtFQywrQkFBYSxFQUxmO0FBTUVDLDRCQUFVO0FBTlosaUJBRGMsRUFTZDtBQUNFTCw0QkFBVSxLQURaO0FBRUVDLDZCQUFXLFVBRmI7QUFHRUMsdUJBQUssaURBSFA7QUFJRUMsMkJBQVMsQ0FBQyxxQkFBRCxFQUF3QixxQkFBeEIsRUFBK0Msc0JBQS9DLEVBQXVFLHNCQUF2RSxFQUErRixzQkFBL0YsRUFBdUgscUJBQXZILEVBQThJLHFCQUE5SSxFQUFxSyxxQkFBckssQ0FKWDtBQUtFQywrQkFBYSxFQUxmO0FBTUVDLDRCQUFVO0FBTlosaUJBVGMsQ0FBaEI7O0FBbUJBLHFCQUFLcEIsUUFBTCxHQUFnQixFQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZDK0IsZUFBS2EsSTs7a0JBQW5CekIsSyIsImZpbGUiOiJ0aW1lbGluZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMyMEJFRUMnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebuOefpeS6juaWh+WtlycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjMyLDIzMiwyMzIpJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIGxpc3REYXRhOiBbXSxcbiAgICAgIG5vdGlmTnVtOiAwXG4gICAgICAvLyBpbWdVcmxzMjogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9XSxcbiAgICAgIC8vIGRhdGExOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+agoeWbrea1qua8qyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZm9vZC5wbmcnLCB0aXRsZTogJyPmiJDpg73nvo7po58jJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2ZpcmUucG5nJywgdGl0bGU6ICcj54eD54On6Z2S5pilIyd9XSxcbiAgICAgIC8vIGRhdGEyOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+WNlei6q+eLl+eahOaXpeW4uCMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZm9vZC5wbmcnLCB0aXRsZTogJyPmiJHov5nkuYjnvo7kuLrku4DkuYjljZXouqsjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPkuIDotbfmnaXov5DliqgjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPmiJHmmK/lrabpnLjmiJHmgJXosIEjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2ZpcmUucG5nJywgdGl0bGU6ICcj5p2h6aqa5biC5Zy6Iyd9XVxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgICAgdGhpcy5saXN0RGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgICAgICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZyddLFxuICAgICAgICAgIGNvbW1lbnRzTnVtOiAxMixcbiAgICAgICAgICBsaWtlc051bTogMzJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgICAgICBjcmVhdGVkQXQ6ICfmmKjml6UgMjPvvJoyNycsXG4gICAgICAgICAgbXNnOiAn5oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKd77yM6YO95Zyo6L+Z6YeM55WZ5LiL6Laz6L+55oOz6K+05LuA5LmI6aKdJyxcbiAgICAgICAgICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvNC5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZyddLFxuICAgICAgICAgIGNvbW1lbnRzTnVtOiAxMixcbiAgICAgICAgICBsaWtlc051bTogMzJcbiAgICAgICAgfVxuICAgICAgXVxuXG4gICAgICB0aGlzLm5vdGlmTnVtID0gNjZcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG1vcmVPcHRpb24gKCkge1xuICAgICAgICB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgICAgaXRlbUxpc3Q6IFsn5Y+W5raI5YWz5rOoJywgJ+S4vuaKpSddXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZWRpdFN0YXR1cyAoKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnZWRpdFBhZ2UnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ28ocGFnZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogcGFnZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19