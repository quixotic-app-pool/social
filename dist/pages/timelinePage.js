'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

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
      backgroundColor: '#20BEEC'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      listData: [],
      notifNum: 0,
      currentUser_id: ''
      // imgUrls2: [{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}, {imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'},{imgUrl: '../assets/img/boy.jpeg', name: '小李子', from: '哈佛大学'}],
      // data1: [{imgUrl: '../assets/img/school.png', title: '#校园浪漫#'}, {imgUrl: '../assets/img/food.png', title: '#成都美食#'}, {imgUrl: '../assets/img/fire.png', title: '#燃烧青春#'}],
      // data2: [{imgUrl: '../assets/img/school.png', title: '#单身狗的日常#'}, {imgUrl: '../assets/img/food.png', title: '#我这么美为什么单身#'}, {imgUrl: '../assets/img/school.png', title: '#一起来运动#'}, {imgUrl: '../assets/img/school.png', title: '#我是学霸我怕谁#'}, {imgUrl: '../assets/img/fire.png', title: '#条骚市场#'}]
    }, _this.$repeat = { "listData": { "com": "postComponent", "props": "postData.sync" } }, _this.$props = { "postComponent": { "xmlns:v-bind": { "value": "", "for": "listData", "item": "item", "index": "index", "key": "index" }, "v-bind:postData.sync": { "value": "item", "type": "item", "for": "listData", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      postComponent: _postComponent2.default
    }, _this.methods = {
      editStatus: function editStatus() {
        // console.log('this.currrentUser_id: ' + this.currentUser_id);
        _wepy2.default.navigateTo({
          url: 'editPage?type=post&user_id=' + this.currentUser_id
        });
      },
      go: function go(_id) {
        _wepy2.default.navigateTo({
          url: 'detailPage?post_id=' + _id
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
                this.currentUser_id = _wepy2.default.getStorageSync('UserId');
                _context.next = 3;
                return this.loadData();

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
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.loadData();

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
    key: 'loadData',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api2.default.fetchPostList({
                  query: {
                    user_id: this.currentUser_id,
                    page: 0,
                    type: 'post'
                  }
                });

              case 2:
                res = _context3.sent;


                //  console.log('timeline res.data.data: ' +  JSON.stringify(res.data.data))
                if (res.data && res.data.flag == 'success') {
                  this.listData = res.data.data;
                }
                //  console.log('this.listData: ' + JSON.stringify(this.listData))
                this.$apply();
                // this.listData = [
                //   {
                //     nickName: '谭马儒',
                //     createdAt: '昨日 23：27',
                //     msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //     imgUrls: ['../assets/img/5.jpg', '../assets/img/4.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                //     commentsNum: 12,
                //     likesNum: 32
                //   },
                //   {
                //     nickName: '谭马儒',
                //     createdAt: '昨日 23：27',
                //     msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                //     imgUrls: ['../assets/img/4.jpg', '../assets/img/5.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                //     commentsNum: 12,
                //     likesNum: 32
                //   }
                // ]

                this.notifNum = 66;

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadData() {
        return _ref4.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/timelinePage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lUGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsImxpc3REYXRhIiwibm90aWZOdW0iLCJjdXJyZW50VXNlcl9pZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBvc3RDb21wb25lbnQiLCJtZXRob2RzIiwiZWRpdFN0YXR1cyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnbyIsIl9pZCIsImdldFN0b3JhZ2VTeW5jIiwibG9hZERhdGEiLCJmZXRjaFBvc3RMaXN0IiwicXVlcnkiLCJ1c2VyX2lkIiwicGFnZSIsInR5cGUiLCJyZXMiLCJmbGFnIiwiJGFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLHVCQUFpQjtBQUhWLEssUUFLVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQURqQztBQUVMQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFGbEM7QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxnQkFBVSxDQUpMO0FBS0xDLHNCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFSSyxLLFFBVVJDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxPQUFNLGVBQVAsRUFBdUIsU0FBUSxlQUEvQixFQUFaLEUsUUFDYkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFVBQWxCLEVBQTZCLFFBQU8sTUFBcEMsRUFBMkMsU0FBUSxPQUFuRCxFQUEyRCxPQUFNLE9BQWpFLEVBQWhCLEVBQTBGLHdCQUF1QixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sVUFBcEMsRUFBK0MsUUFBTyxNQUF0RCxFQUE2RCxTQUFRLE9BQXJFLEVBQTZFLE9BQU0sT0FBbkYsRUFBakgsRUFBakIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBZ0RWQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ007QUFDWjtBQUNBLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssZ0NBQWdDLEtBQUtUO0FBRDVCLFNBQWhCO0FBR0QsT0FOTztBQU9SVSxRQVBRLGNBT0xDLEdBUEssRUFPQTtBQUNOLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUssd0JBQXdCRTtBQURmLFNBQWhCO0FBR0Q7QUFYTyxLOzs7Ozs7Ozs7OztBQTVDUixxQkFBS1gsY0FBTCxHQUFzQixlQUFLWSxjQUFMLENBQW9CLFFBQXBCLENBQXRCOzt1QkFDTSxLQUFLQyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSUEsS0FBS0EsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJVyxjQUFJQyxhQUFKLENBQWtCO0FBQ2hDQyx5QkFBTztBQUNMQyw2QkFBUyxLQUFLaEIsY0FEVDtBQUVMaUIsMEJBQU0sQ0FGRDtBQUdMQywwQkFBTTtBQUhEO0FBRHlCLGlCQUFsQixDOzs7QUFBWkMsbUI7OztBQVFMO0FBQ0Msb0JBQUdBLElBQUkzQixJQUFKLElBQVkyQixJQUFJM0IsSUFBSixDQUFTNEIsSUFBVCxJQUFpQixTQUFoQyxFQUEyQztBQUN6Qyx1QkFBS3RCLFFBQUwsR0FBZ0JxQixJQUFJM0IsSUFBSixDQUFTQSxJQUF6QjtBQUNEO0FBQ0Y7QUFDQyxxQkFBSzZCLE1BQUw7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQUt0QixRQUFMLEdBQWdCLEVBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakUrQixlQUFLa0IsSTs7a0JBQW5COUIsSyIsImZpbGUiOiJ0aW1lbGluZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG4gIGltcG9ydCBwb3N0Q29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdENvbXBvbmVudCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMyMEJFRUMnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebuOefpeS6juaWh+WtlycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjBCRUVDJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgIHNjcmVlbkhlaWdodDogd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCxcbiAgICAgIGxpc3REYXRhOiBbXSxcbiAgICAgIG5vdGlmTnVtOiAwLFxuICAgICAgY3VycmVudFVzZXJfaWQ6ICcnXG4gICAgICAvLyBpbWdVcmxzMjogW3tpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9LCB7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2JveS5qcGVnJywgbmFtZTogJ+Wwj+adjuWtkCcsIGZyb206ICflk4jkvZvlpKflraYnfSx7aW1nVXJsOiAnLi4vYXNzZXRzL2ltZy9ib3kuanBlZycsIG5hbWU6ICflsI/mnY7lrZAnLCBmcm9tOiAn5ZOI5L2b5aSn5a2mJ30se2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvYm95LmpwZWcnLCBuYW1lOiAn5bCP5p2O5a2QJywgZnJvbTogJ+WTiOS9m+Wkp+Wtpid9XSxcbiAgICAgIC8vIGRhdGExOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+agoeWbrea1qua8qyMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZm9vZC5wbmcnLCB0aXRsZTogJyPmiJDpg73nvo7po58jJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2ZpcmUucG5nJywgdGl0bGU6ICcj54eD54On6Z2S5pilIyd9XSxcbiAgICAgIC8vIGRhdGEyOiBbe2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvc2Nob29sLnBuZycsIHRpdGxlOiAnI+WNlei6q+eLl+eahOaXpeW4uCMnfSwge2ltZ1VybDogJy4uL2Fzc2V0cy9pbWcvZm9vZC5wbmcnLCB0aXRsZTogJyPmiJHov5nkuYjnvo7kuLrku4DkuYjljZXouqsjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPkuIDotbfmnaXov5DliqgjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL3NjaG9vbC5wbmcnLCB0aXRsZTogJyPmiJHmmK/lrabpnLjmiJHmgJXosIEjJ30sIHtpbWdVcmw6ICcuLi9hc3NldHMvaW1nL2ZpcmUucG5nJywgdGl0bGU6ICcj5p2h6aqa5biC5Zy6Iyd9XVxuICAgIH1cbiAgICRyZXBlYXQgPSB7XCJsaXN0RGF0YVwiOntcImNvbVwiOlwicG9zdENvbXBvbmVudFwiLFwicHJvcHNcIjpcInBvc3REYXRhLnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJwb3N0Q29tcG9uZW50XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnBvc3REYXRhLnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwb3N0Q29tcG9uZW50IDogcG9zdENvbXBvbmVudFxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgdGhpcy5jdXJyZW50VXNlcl9pZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXJJZCcpXG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICB9XG4gICAgYXN5bmMgb25TaG93ICgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzaG93aW5nJyk7XG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICB9XG4gICAgYXN5bmMgbG9hZERhdGEgKCkge1xuICAgICAgLy8gVE9ETzogbG9hZCBkYXRhXG4gICAgICAgdmFyIHJlcyA9IGF3YWl0IGFwaS5mZXRjaFBvc3RMaXN0KHtcbiAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgIHVzZXJfaWQ6IHRoaXMuY3VycmVudFVzZXJfaWQsXG4gICAgICAgICAgIHBhZ2U6IDAsXG4gICAgICAgICAgIHR5cGU6ICdwb3N0J1xuICAgICAgICAgfVxuICAgICAgIH0pXG5cbiAgICAgIC8vICBjb25zb2xlLmxvZygndGltZWxpbmUgcmVzLmRhdGEuZGF0YTogJyArICBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS5kYXRhKSlcbiAgICAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5mbGFnID09ICdzdWNjZXNzJykge1xuICAgICAgICAgdGhpcy5saXN0RGF0YSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICB9XG4gICAgICAvLyAgY29uc29sZS5sb2coJ3RoaXMubGlzdERhdGE6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3REYXRhKSlcbiAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyB0aGlzLmxpc3REYXRhID0gW1xuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgLy8gICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgIC8vICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgLy8gICAgIGltZ1VybHM6IFsnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJywgJy4uL2Fzc2V0cy9pbWcvMy5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMi5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMS5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJ10sXG4gICAgICAvLyAgICAgY29tbWVudHNOdW06IDEyLFxuICAgICAgLy8gICAgIGxpa2VzTnVtOiAzMlxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbmlja05hbWU6ICfosK3pqazlhJInLFxuICAgICAgLy8gICAgIGNyZWF0ZWRBdDogJ+aYqOaXpSAyM++8mjI3JyxcbiAgICAgIC8vICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgLy8gICAgIGltZ1VybHM6IFsnLi4vYXNzZXRzL2ltZy80LmpwZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvMy5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMi5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvMS5qcGVnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy81LmpwZycsICcuLi9hc3NldHMvaW1nLzQuanBnJ10sXG4gICAgICAvLyAgICAgY29tbWVudHNOdW06IDEyLFxuICAgICAgLy8gICAgIGxpa2VzTnVtOiAzMlxuICAgICAgLy8gICB9XG4gICAgICAvLyBdXG5cbiAgICAgIHRoaXMubm90aWZOdW0gPSA2NlxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgZWRpdFN0YXR1cyAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmN1cnJyZW50VXNlcl9pZDogJyArIHRoaXMuY3VycmVudFVzZXJfaWQpO1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2VkaXRQYWdlP3R5cGU9cG9zdCZ1c2VyX2lkPScgKyB0aGlzLmN1cnJlbnRVc2VyX2lkXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ28oX2lkKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnZGV0YWlsUGFnZT9wb3N0X2lkPScgKyBfaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==