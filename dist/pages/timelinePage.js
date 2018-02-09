'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
    }, _this.$repeat = { "listData": { "com": "postComponent", "props": "postData.sync" } }, _this.$props = { "postComponent": { "xmlns:v-bind": { "value": "", "for": "listData", "item": "item", "index": "index", "key": "index" }, "v-bind:postData.sync": { "value": "item", "type": "item", "for": "listData", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      postComponent: _postComponent2.default
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
                //  var res = await api.fetchPostList({
                //    query: {
                //      page: 0,
                //      type: 'all'
                //    }
                //  })
                //
                //  if(res.data && res.data.flag == 'success') {
                //    list = res.data.data
                //  }
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

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lUGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImxpc3REYXRhIiwibm90aWZOdW0iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0Q29tcG9uZW50IiwibWV0aG9kcyIsIm1vcmVPcHRpb24iLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZWRpdFN0YXR1cyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnbyIsInBhZ2UiLCJsb2FkRGF0YSIsIm5pY2tOYW1lIiwiY3JlYXRlZEF0IiwibXNnIiwiaW1nVXJscyIsImNvbW1lbnRzTnVtIiwibGlrZXNOdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLHVCQUFpQjtBQUhWLEssUUFLVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxnQkFBVTtBQUNWO0FBQ0E7QUFDQTtBQVBLLEssUUFTUkMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sZUFBUCxFQUF1QixTQUFRLGVBQS9CLEVBQVosRSxRQUNiQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sVUFBbEIsRUFBNkIsUUFBTyxNQUFwQyxFQUEyQyxTQUFRLE9BQW5ELEVBQTJELE9BQU0sT0FBakUsRUFBaEIsRUFBMEYsd0JBQXVCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxVQUFwQyxFQUErQyxRQUFPLE1BQXRELEVBQTZELFNBQVEsT0FBckUsRUFBNkUsT0FBTSxPQUFuRixFQUFqSCxFQUFqQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUF1Q1ZDLE8sR0FBVTtBQUNSQyxnQkFEUSx3QkFDTTtBQUNaLHVCQUFLQyxlQUFMLENBQXFCO0FBQ25CQyxvQkFBVSxDQUFDLE1BQUQsRUFBUyxJQUFUO0FBRFMsU0FBckIsRUFFR0MsSUFGSCxDQUVRLFVBQVNDLEdBQVQsRUFBYTtBQUNuQkMsa0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELFNBSkQ7QUFLRCxPQVBPO0FBUVJHLGdCQVJRLHdCQVFNO0FBQ1osdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FaTztBQWFSQyxRQWJRLGNBYUxDLElBYkssRUFhQztBQUNQLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUtFO0FBRFMsU0FBaEI7QUFHRDtBQWpCTyxLOzs7Ozs7Ozs7Ozs7dUJBbkNGLEtBQUtDLFFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFCQUFLcEIsUUFBTCxHQUFnQixDQUNkO0FBQ0VxQiw0QkFBVSxLQURaO0FBRUVDLDZCQUFXLFVBRmI7QUFHRUMsdUJBQUssaURBSFA7QUFJRUMsMkJBQVMsQ0FBQyxxQkFBRCxFQUF3QixxQkFBeEIsRUFBK0Msc0JBQS9DLEVBQXVFLHNCQUF2RSxFQUErRixzQkFBL0YsRUFBdUgscUJBQXZILEVBQThJLHFCQUE5SSxFQUFxSyxxQkFBckssQ0FKWDtBQUtFQywrQkFBYSxFQUxmO0FBTUVDLDRCQUFVO0FBTlosaUJBRGMsRUFTZDtBQUNFTCw0QkFBVSxLQURaO0FBRUVDLDZCQUFXLFVBRmI7QUFHRUMsdUJBQUssaURBSFA7QUFJRUMsMkJBQVMsQ0FBQyxxQkFBRCxFQUF3QixxQkFBeEIsRUFBK0Msc0JBQS9DLEVBQXVFLHNCQUF2RSxFQUErRixzQkFBL0YsRUFBdUgscUJBQXZILEVBQThJLHFCQUE5SSxFQUFxSyxxQkFBckssQ0FKWDtBQUtFQywrQkFBYSxFQUxmO0FBTUVDLDRCQUFVO0FBTlosaUJBVGMsQ0FBaEI7O0FBbUJBLHFCQUFLekIsUUFBTCxHQUFnQixFQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZEK0IsZUFBS2tCLEk7O2tCQUFuQjlCLEsiLCJmaWxlIjoidGltZWxpbmVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBwb3N0Q29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdENvbXBvbmVudCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMyMEJFRUMnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebuOefpeS6juaWh+WtlycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjMyLDIzMiwyMzIpJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIGxpc3REYXRhOiBbXSxcbiAgICAgIG5vdGlmTnVtOiAwXG4gICAgICAvLyBpbWdVcmxzMjogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9XSxcbiAgICAgIC8vIGRhdGExOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+agoeWbrea1qua8qyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZm9vZC5wbmcnLCB0aXRsZTogJyPmiJDpg73nvo7po58jJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2ZpcmUucG5nJywgdGl0bGU6ICcj54eD54On6Z2S5pilIyd9XSxcbiAgICAgIC8vIGRhdGEyOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+WNlei6q+eLl+eahOaXpeW4uCMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZm9vZC5wbmcnLCB0aXRsZTogJyPmiJHov5nkuYjnvo7kuLrku4DkuYjljZXouqsjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPkuIDotbfmnaXov5DliqgjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPmiJHmmK/lrabpnLjmiJHmgJXosIEjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2ZpcmUucG5nJywgdGl0bGU6ICcj5p2h6aqa5biC5Zy6Iyd9XVxuICAgIH1cbiAgICRyZXBlYXQgPSB7XCJsaXN0RGF0YVwiOntcImNvbVwiOlwicG9zdENvbXBvbmVudFwiLFwicHJvcHNcIjpcInBvc3REYXRhLnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJwb3N0Q29tcG9uZW50XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnBvc3REYXRhLnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwb3N0Q29tcG9uZW50IDogcG9zdENvbXBvbmVudFxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhICgpIHtcbiAgICAgIC8vIFRPRE86IGxvYWQgZGF0YVxuICAgICAgLy8gIHZhciByZXMgPSBhd2FpdCBhcGkuZmV0Y2hQb3N0TGlzdCh7XG4gICAgICAvLyAgICBxdWVyeToge1xuICAgICAgLy8gICAgICBwYWdlOiAwLFxuICAgICAgLy8gICAgICB0eXBlOiAnYWxsJ1xuICAgICAgLy8gICAgfVxuICAgICAgLy8gIH0pXG4gICAgICAgLy9cbiAgICAgIC8vICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgLy8gICAgbGlzdCA9IHJlcy5kYXRhLmRhdGFcbiAgICAgIC8vICB9XG4gICAgICB0aGlzLmxpc3REYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgICAgIGltZ1VybHM6IFsnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJywgJy4uL2Fzc2V0cy9pbWcvMy5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMi5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMS5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJ10sXG4gICAgICAgICAgY29tbWVudHNOdW06IDEyLFxuICAgICAgICAgIGxpa2VzTnVtOiAzMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgICAgIGltZ1VybHM6IFsnLi4vYXNzZXRzL2ltZy80LmpwZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvMy5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMi5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMS5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJ10sXG4gICAgICAgICAgY29tbWVudHNOdW06IDEyLFxuICAgICAgICAgIGxpa2VzTnVtOiAzMlxuICAgICAgICB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMubm90aWZOdW0gPSA2NlxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgbW9yZU9wdGlvbiAoKSB7XG4gICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogWyflj5bmtojlhbPms6gnLCAn5Li+5oqlJ11cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXMpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlZGl0U3RhdHVzICgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdlZGl0UGFnZSdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnbyhwYWdlKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBwYWdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=