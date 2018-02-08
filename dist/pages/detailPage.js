'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

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
      postData: {}
    }, _this.$repeat = {}, _this.$props = { "commentsComponent": { "v-bind:post_id.once": "{post_id: ''}" }, "postComponent": { "xmlns:v-bind": "", "v-bind:postData.sync": "postData" } }, _this.$events = {}, _this.components = {
      commentsComponent: _commentsComponent2.default,
      postComponent: _postComponent2.default
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.post_id = option._id;
                // TODO: load post
                //here is a reason that I need to fecth post from here instead from post component which is different from comments
                // var res = await api.fetchPost({
                //   query: {
                //     post_id: this.post_id
                //   }
                // })
                // if(res.data && res.data.flay = 'success') {
                //   this.postData = res.data.data
                // }
                this.postData = {
                  nickName: '谭马儒',
                  createdAt: '昨日 23：27',
                  msg: '想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额，都在这里留下足迹想说什么额',
                  imgUrls: ['../assets/img/5.jpg', '../assets/img/4.jpg', '../assets/img/3.jpeg', '../assets/img/2.jpeg', '../assets/img/1.jpeg', '../assets/img/5.jpg', '../assets/img/5.jpg', '../assets/img/4.jpg'],
                  commentsNum: 12,
                  likesNum: 32
                };

              case 2:
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
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detailPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbFBhZ2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzY3JlZW5XaWR0aCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJwb3N0X2lkIiwicG9zdERhdGEiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21tZW50c0NvbXBvbmVudCIsInBvc3RDb21wb25lbnQiLCJtZXRob2RzIiwib3B0aW9uIiwiX2lkIiwibmlja05hbWUiLCJjcmVhdGVkQXQiLCJtc2ciLCJpbWdVcmxzIiwiY29tbWVudHNOdW0iLCJsaWtlc051bSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixLQUZqQjtBQUdQQyx1QkFBaUI7QUFIVixLLFFBS1RDLEksR0FBTztBQUNMQyxtQkFBYSxlQUFLQyxpQkFBTCxHQUF5QkMsV0FEakM7QUFFTEMsb0JBQWMsZUFBS0YsaUJBQUwsR0FBeUJHLFlBRmxDO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxnQkFBVTtBQUpMLEssUUFNUkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsdUJBQXNCLGVBQXZCLEVBQXJCLEVBQTZELGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHdCQUF1QixVQUExQyxFQUE3RSxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxvREFEUTtBQUVSQztBQUZRLEssUUF5QlZDLE8sR0FBVSxFOzs7Ozs7MkZBckJJQyxNOzs7OztBQUNaLHFCQUFLVCxPQUFMLEdBQWVTLE9BQU9DLEdBQXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBS1QsUUFBTCxHQUFnQjtBQUNkVSw0QkFBVSxLQURJO0FBRWRDLDZCQUFXLFVBRkc7QUFHZEMsdUJBQUssaURBSFM7QUFJZEMsMkJBQVMsQ0FBQyxxQkFBRCxFQUF3QixxQkFBeEIsRUFBK0Msc0JBQS9DLEVBQXVFLHNCQUF2RSxFQUErRixzQkFBL0YsRUFBdUgscUJBQXZILEVBQThJLHFCQUE5SSxFQUFxSyxxQkFBckssQ0FKSztBQUtkQywrQkFBYSxFQUxDO0FBTWRDLDRCQUFVO0FBTkksaUJBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL0IrQixlQUFLQyxJOztrQkFBbkI1QixLIiwiZmlsZSI6ImRldGFpbFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tICcuLy4uL2FwaS9hcGknXG4gIGltcG9ydCBjb21tZW50c0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1lbnRzQ29tcG9uZW50J1xuICBpbXBvcnQgcG9zdENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RDb21wb25lbnQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMjBCRUVDJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnjovlsI/omY4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIzMiwyMzIsMjMyKSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBwb3N0X2lkOiAnJyxcbiAgICAgIHBvc3REYXRhOiB7fVxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY29tbWVudHNDb21wb25lbnRcIjp7XCJ2LWJpbmQ6cG9zdF9pZC5vbmNlXCI6XCJ7cG9zdF9pZDogJyd9XCJ9LFwicG9zdENvbXBvbmVudFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cG9zdERhdGEuc3luY1wiOlwicG9zdERhdGFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgY29tbWVudHNDb21wb25lbnQgOiBjb21tZW50c0NvbXBvbmVudCxcbiAgICAgIHBvc3RDb21wb25lbnQgOiBwb3N0Q29tcG9uZW50XG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgICB0aGlzLnBvc3RfaWQgPSBvcHRpb24uX2lkXG4gICAgICAvLyBUT0RPOiBsb2FkIHBvc3RcbiAgICAgIC8vaGVyZSBpcyBhIHJlYXNvbiB0aGF0IEkgbmVlZCB0byBmZWN0aCBwb3N0IGZyb20gaGVyZSBpbnN0ZWFkIGZyb20gcG9zdCBjb21wb25lbnQgd2hpY2ggaXMgZGlmZmVyZW50IGZyb20gY29tbWVudHNcbiAgICAgIC8vIHZhciByZXMgPSBhd2FpdCBhcGkuZmV0Y2hQb3N0KHtcbiAgICAgIC8vICAgcXVlcnk6IHtcbiAgICAgIC8vICAgICBwb3N0X2lkOiB0aGlzLnBvc3RfaWRcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgIC8vIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYXkgPSAnc3VjY2VzcycpIHtcbiAgICAgIC8vICAgdGhpcy5wb3N0RGF0YSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMucG9zdERhdGEgPSB7XG4gICAgICAgIG5pY2tOYW1lOiAn6LCt6ams5YSSJyxcbiAgICAgICAgY3JlYXRlZEF0OiAn5pio5pelIDIz77yaMjcnLFxuICAgICAgICBtc2c6ICfmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop3vvIzpg73lnKjov5nph4znlZnkuIvotrPov7nmg7Por7Tku4DkuYjpop0nLFxuICAgICAgICBpbWdVcmxzOiBbJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZycsICcuLi9hc3NldHMvaW1nLzMuanBlZycsICcuLi9hc3NldHMvaW1nLzIuanBlZycsICcuLi9hc3NldHMvaW1nLzEuanBlZycsICcuLi9hc3NldHMvaW1nLzUuanBnJywgJy4uL2Fzc2V0cy9pbWcvNS5qcGcnLCAnLi4vYXNzZXRzL2ltZy80LmpwZyddLFxuICAgICAgICBjb21tZW50c051bTogMTIsXG4gICAgICAgIGxpa2VzTnVtOiAzMlxuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgIH1cbiAgfVxuIl19