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
      navigationBarBackgroundColor: '#FFD300',
      navigationBarTitleText: '相交于活动'
    }, _this.data = {
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myData: [],
      piece: 1
    }, _this.methods = {
      jump: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.piece = index;
                  _context.next = 3;
                  return loadData();

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function jump(_x) {
          return _ref2.apply(this, arguments);
        }

        return jump;
      }(),
      goDetail: function goDetail(url) {
        _wepy2.default.navigateTo({
          url: 'activityWebPage?url=' + url
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
                _context2.next = 2;
                return this.loadData();

              case 2:
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
    key: 'loadData',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // TODO: load activity list
                // var res = await api.activityList({
                //   query: {
                //     page: 0,
                //     type: this.piece
                //   }
                // })
                // if(res.data && res.data.flay = 'success') {
                //   this.postData = res.data.data
                // }
                this.myData = [{ imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9', address: '春熙路14号大街' }, { imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9', address: '春熙路14号大街' }, { imgUrl: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/10-22smart-22-physical-activity-goals-resized.jpg', mainTitle: '活动一', subTitle: '这是副标题额', eventTime: '2/14 17:00 ~ 21:00', num: '9', address: '春熙路14号大街' }];

              case 1:
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

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5UGFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsInBpZWNlIiwibWV0aG9kcyIsImp1bXAiLCJpbmRleCIsImxvYWREYXRhIiwiZ29EZXRhaWwiLCJ1cmwiLCJuYXZpZ2F0ZVRvIiwiaW1nVXJsIiwibWFpblRpdGxlIiwic3ViVGl0bGUiLCJldmVudFRpbWUiLCJudW0iLCJhZGRyZXNzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUE4QixTQUR2QjtBQUVQQyw4QkFBd0I7QUFGakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsbUJBQWEsZUFBS0MsaUJBQUwsR0FBeUJDLFdBRGpDO0FBRUxDLG9CQUFjLGVBQUtGLGlCQUFMLEdBQXlCRyxZQUZsQztBQUdMQyxjQUFRLEVBSEg7QUFJTEMsYUFBTztBQUpGLEssUUEwQlBDLE8sR0FBVTtBQUNGQyxVQURFO0FBQUEsNkZBQ0lDLEtBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVOLHVCQUFLSCxLQUFMLEdBQWFHLEtBQWI7QUFGTTtBQUFBLHlCQUdBQyxVQUhBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBS1JDLGNBTFEsb0JBS0VDLEdBTEYsRUFLTztBQUNiLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RELGVBQUsseUJBQXlCQTtBQURoQixTQUFoQjtBQUdEO0FBVE8sSzs7Ozs7Ozs7Ozs7O3VCQW5CRixLQUFLRixRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQUtMLE1BQUwsR0FBYyxDQUNWLEVBQUNTLFFBQVEsK0hBQVQsRUFBMElDLFdBQVcsS0FBckosRUFBNEpDLFVBQVUsUUFBdEssRUFBZ0xDLFdBQVcsb0JBQTNMLEVBQWlOQyxLQUFLLEdBQXROLEVBQTJOQyxTQUFTLFVBQXBPLEVBRFUsRUFFVixFQUFDTCxRQUFRLCtIQUFULEVBQTBJQyxXQUFXLEtBQXJKLEVBQTRKQyxVQUFVLFFBQXRLLEVBQWdMQyxXQUFXLG9CQUEzTCxFQUFpTkMsS0FBSyxHQUF0TixFQUEyTkMsU0FBUyxVQUFwTyxFQUZVLEVBR1YsRUFBQ0wsUUFBUSwrSEFBVCxFQUEwSUMsV0FBVyxLQUFySixFQUE0SkMsVUFBVSxRQUF0SyxFQUFnTEMsV0FBVyxvQkFBM0wsRUFBaU5DLEtBQUssR0FBdE4sRUFBMk5DLFNBQVMsVUFBcE8sRUFIVSxDQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekIrQixlQUFLQyxJOztrQkFBbkJ6QixLIiwiZmlsZSI6ImFjdGl2aXR5UGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGRkQzMDAnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebuOS6pOS6jua0u+WKqCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICBteURhdGE6IFtdLFxuICAgICAgcGllY2U6IDFcbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkICgpIHtcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIH1cbiAgICBhc3luYyBsb2FkRGF0YSAoKSB7XG4gICAgICAvLyBUT0RPOiBsb2FkIGFjdGl2aXR5IGxpc3RcbiAgICAgIC8vIHZhciByZXMgPSBhd2FpdCBhcGkuYWN0aXZpdHlMaXN0KHtcbiAgICAgIC8vICAgcXVlcnk6IHtcbiAgICAgIC8vICAgICBwYWdlOiAwLFxuICAgICAgLy8gICAgIHR5cGU6IHRoaXMucGllY2VcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgIC8vIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYXkgPSAnc3VjY2VzcycpIHtcbiAgICAgIC8vICAgdGhpcy5wb3N0RGF0YSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMubXlEYXRhID0gW1xuICAgICAgICAgIHtpbWdVcmw6ICdodHRwczovL3d3dy5lYXRyaWdodG9udGFyaW8uY2EvRWF0UmlnaHRPbnRhcmlvL21lZGlhL1dlYnNpdGUtaW1hZ2VzLXJlc2l6ZWQvMTAtMjJzbWFydC0yMi1waHlzaWNhbC1hY3Rpdml0eS1nb2Fscy1yZXNpemVkLmpwZycsIG1haW5UaXRsZTogJ+a0u+WKqOS4gCcsIHN1YlRpdGxlOiAn6L+Z5piv5Ymv5qCH6aKY6aKdJywgZXZlbnRUaW1lOiAnMi8xNCAxNzowMCB+IDIxOjAwJywgbnVtOiAnOScsIGFkZHJlc3M6ICfmmKXnhpnot68xNOWPt+Wkp+ihlyd9LFxuICAgICAgICAgIHtpbWdVcmw6ICdodHRwczovL3d3dy5lYXRyaWdodG9udGFyaW8uY2EvRWF0UmlnaHRPbnRhcmlvL21lZGlhL1dlYnNpdGUtaW1hZ2VzLXJlc2l6ZWQvMTAtMjJzbWFydC0yMi1waHlzaWNhbC1hY3Rpdml0eS1nb2Fscy1yZXNpemVkLmpwZycsIG1haW5UaXRsZTogJ+a0u+WKqOS4gCcsIHN1YlRpdGxlOiAn6L+Z5piv5Ymv5qCH6aKY6aKdJywgZXZlbnRUaW1lOiAnMi8xNCAxNzowMCB+IDIxOjAwJywgbnVtOiAnOScsIGFkZHJlc3M6ICfmmKXnhpnot68xNOWPt+Wkp+ihlyd9LFxuICAgICAgICAgIHtpbWdVcmw6ICdodHRwczovL3d3dy5lYXRyaWdodG9udGFyaW8uY2EvRWF0UmlnaHRPbnRhcmlvL21lZGlhL1dlYnNpdGUtaW1hZ2VzLXJlc2l6ZWQvMTAtMjJzbWFydC0yMi1waHlzaWNhbC1hY3Rpdml0eS1nb2Fscy1yZXNpemVkLmpwZycsIG1haW5UaXRsZTogJ+a0u+WKqOS4gCcsIHN1YlRpdGxlOiAn6L+Z5piv5Ymv5qCH6aKY6aKdJywgZXZlbnRUaW1lOiAnMi8xNCAxNzowMCB+IDIxOjAwJywgbnVtOiAnOScsIGFkZHJlc3M6ICfmmKXnhpnot68xNOWPt+Wkp+ihlyd9XG4gICAgICAgIF1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIGp1bXAgKGluZGV4KSB7XG4gICAgICAgIHRoaXMucGllY2UgPSBpbmRleFxuICAgICAgICBhd2FpdCBsb2FkRGF0YSgpXG4gICAgICB9LFxuICAgICAgZ29EZXRhaWwgKHVybCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2FjdGl2aXR5V2ViUGFnZT91cmw9JyArIHVybFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19