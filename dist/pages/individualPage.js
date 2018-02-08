'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      navigationBarTitleText: '王小虎'
    }, _this.data = {
      editMode: false,
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myData: {},
      tempImgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg', 'https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg']
    }, _this.methods = {
      chooseImage: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _tempImgUrls;

          var _ref3, tempFilePaths;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log('?');
                  _context.next = 3;
                  return _wepy2.default.chooseImage({
                    count: 6 - this.tempImgUrls.length,
                    sizeType: 'compressed'
                  });

                case 3:
                  _ref3 = _context.sent;
                  tempFilePaths = _ref3.tempFilePaths;

                  (_tempImgUrls = this.tempImgUrls).push.apply(_tempImgUrls, _toConsumableArray(tempFilePaths));
                  this.$apply();

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function chooseImage() {
          return _ref2.apply(this, arguments);
        }

        return chooseImage;
      }(),
      previewImage: function previewImage(cur, imageList) {
        _wepy2.default.previewImage({
          current: cur,
          urls: imageList
        });
      },
      goEdit: function goEdit(index) {
        if (!this.editMode) {
          return;
        }
        _wepy2.default.navigateTo({
          url: 'itemEditPage?index=' + index
        });
      },
      toggle: function toggle() {
        // console.log('？？');
        this.editMode = !this.editMode;
        this.$apply();
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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadData',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.myData = {
                  gender: 'female',
                  age: '25',
                  xingZuo: '双鱼座',
                  nichName: '王小虎',
                  h: '165',
                  weight: '45',
                  imgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'],
                  timeline_imgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'],
                  myInfo: [{ 'title': '星座', value: '天蝎座' }, { title: '行业', value: '旅游' }, { title: '工作领域', value: '策划' }, { title: '公司', value: '爱辉科技有限公司' }, { title: '来自', value: '江苏' }, { title: '经常出没', value: '春熙路' }, { title: '个人签名', value: '聪明是一种天赋，而善良是一种选择。' }],
                  myTags: ['女汉子', '喜欢简单', '靠谱', '安静', '选择恐惧症', '文艺', '厚道', '讲义气', '随性'],
                  sports: ['篮球', '健身房', '舞蹈', '台球', '射箭', '睡觉'],
                  music: ['刘德华', '五百', '80年代经典'],
                  food: ['牛排', '火锅', '美食'],
                  tv: ['我的少女时代', '喜剧之王', '倩女幽魂', '背景遇上西雅图', '机械师', '剪刀手爱德华', '傲慢与偏见'],
                  book: ['殷桃小丸子', '琼瑶', '灌篮高手'],
                  place: ['北海', '泰国', '大理', '九寨沟', '成都', '丽江', '香格里拉', '普吉岛', '越南'],
                  myAns: [{ title: '如果能有一种超能力，要什么？', value: '时光能倒流' }, { title: '如果有钱有时间，最想去做什么？', value: '环游世界' }, { title: '什么样的异性最让你心动？', value: '帅 颜值高 绅士 人品好个子高' }, { title: '如果女朋友/男朋友生气了，怎么哄？', value: '一直说开心的事情，如果还在生气就一直哄' }, { title: '可以接受的约会有哪些？', value: '电影 吃饭 篮球' }]
                };

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadData() {
        return _ref5.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/individualPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGl2aWR1YWxQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlZGl0TW9kZSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsInRlbXBJbWdVcmxzIiwibWV0aG9kcyIsImNob29zZUltYWdlIiwiY29uc29sZSIsImxvZyIsImNvdW50IiwibGVuZ3RoIiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicHVzaCIsIiRhcHBseSIsInByZXZpZXdJbWFnZSIsImN1ciIsImltYWdlTGlzdCIsImN1cnJlbnQiLCJ1cmxzIiwiZ29FZGl0IiwiaW5kZXgiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9nZ2xlIiwiZ28iLCJwYWdlIiwibG9hZERhdGEiLCJnZW5kZXIiLCJhZ2UiLCJ4aW5nWnVvIiwibmljaE5hbWUiLCJoIiwid2VpZ2h0IiwiaW1nVXJscyIsInRpbWVsaW5lX2ltZ1VybHMiLCJteUluZm8iLCJ2YWx1ZSIsInRpdGxlIiwibXlUYWdzIiwic3BvcnRzIiwibXVzaWMiLCJmb29kIiwidHYiLCJib29rIiwicGxhY2UiLCJteUFucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNKQyxnQkFBVSxLQUROO0FBRUpDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUZsQztBQUdKQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFIbkM7QUFJSkMsY0FBUSxFQUpKO0FBS0pDLG1CQUFhLENBQ1gsMExBRFcsRUFFWCxvTUFGVyxFQUdYLHVJQUhXLEVBSVgsMExBSlc7QUFMVCxLLFFBNkNQQyxPLEdBQVU7QUFDRkMs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QXRCTztBQXVCWEMsd0JBQU0sQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixNQUFoQixDQXZCSztBQXdCWEMseUJBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsS0FBbkIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0MsTUFBdEMsRUFBOEMsS0FBOUMsRUFBcUQsSUFBckQsQ0F4Qkk7QUF5QlhDLHlCQUFPLENBQUMsRUFBQ1IsT0FBTyxnQkFBUixFQUEwQkQsT0FBTyxPQUFqQyxFQUFELEVBQTRDLEVBQUNDLE9BQU8saUJBQVIsRUFBMkJELE9BQU8sTUFBbEMsRUFBNUMsRUFBdUYsRUFBQ0MsT0FBTyxjQUFSLEVBQXdCRCxPQUFPLGlCQUEvQixFQUF2RixFQUEwSSxFQUFDQyxPQUFPLG1CQUFSLEVBQTZCRCxPQUFPLHFCQUFwQyxFQUExSSxFQUFzTSxFQUFDQyxPQUFPLGFBQVIsRUFBdUJELE9BQU8sVUFBOUIsRUFBdE07QUF6QkksaUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyQjZCLGVBQUtYLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoiaW5kaXZpZHVhbFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eOi+Wwj+iZjidcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICAgbXlEYXRhOiB7fSxcbiAgICAgICB0ZW1wSW1nVXJsczogW1xuICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJyxcbiAgICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJ1xuICAgICAgIF1cbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkICgpIHtcbiAgICAgIC8vIFRPRE86IGxvYWRpbmcgZGF0YVxuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhKCkge1xuICAgICAgICB0aGlzLm15RGF0YSA9IHtcbiAgICAgICAgICBnZW5kZXI6ICdmZW1hbGUnLFxuICAgICAgICAgIGFnZTogJzI1JyxcbiAgICAgICAgICB4aW5nWnVvOiAn5Y+M6bG85bqnJyxcbiAgICAgICAgICBuaWNoTmFtZTogJ+eOi+Wwj+iZjicsXG4gICAgICAgICAgaDogJzE2NScsXG4gICAgICAgICAgd2VpZ2h0OiAnNDUnLFxuICAgICAgICAgIGltZ1VybHM6IFtcbiAgICAgICAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTRhLlpsenVoU0tKalNzcGpxNkFpOFZYYVMvTmVlZGxld29yay1kaXktZGlhbW9uZC1wYWludGluZy1jcm9zcy1zdGl0Y2gta2l0cy1mdWxsLXJlc2luLXNxdWFyZS1kaWFtb25kLWVtYnJvaWRlcnktTW9zYWljLUhvbWUtRGVjb3Itc2NlbmljLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICAgICAnaHR0cHM6Ly93d3cuZGhyZXNvdXJjZS5jb20vMHgwcy9mMi1hbGJ1LWc0LU0wMC0xMi00OS1yQlZhRUZtVm90dUFYb3U5QUFMM3JQNWpTdWM1MzEuanBnL2JlYXV0aWZ1bC1zY2VuZXJ5LXNlYXNpZGUtZGl5LWZ1bGwtc3F1YXJlLmpwZydcbiAgICAgICAgICAgXSxcbiAgICAgICAgICAgdGltZWxpbmVfaW1nVXJsczogW1xuICAgICAgICAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTRhLlpsenVoU0tKalNzcGpxNkFpOFZYYVMvTmVlZGxld29yay1kaXktZGlhbW9uZC1wYWludGluZy1jcm9zcy1zdGl0Y2gta2l0cy1mdWxsLXJlc2luLXNxdWFyZS1kaWFtb25kLWVtYnJvaWRlcnktTW9zYWljLUhvbWUtRGVjb3Itc2NlbmljLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxSC5WUEpWWFhYWGJsWEZYWHE2eFhGWFhYai9EaXktRGlhbW9uZC1QYWludGluZy1LaXRzLTMweDMwY20tRnVsbC1EaWFtb25kLVNxdWFyZS1SaGluZXN0b25lLVBhc3RlZC1QYWludGluZy1Ib21lLURlY29yYXRpb24tTmF0dXJlLVNjZW5lcnktV2F0ZXJmYWxsLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgICAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJ1xuICAgICAgICAgICBdLFxuICAgICAgICAgICBteUluZm86IFt7J3RpdGxlJzogJ+aYn+W6pycsIHZhbHVlOiAn5aSp6J2O5bqnJ30sIHt0aXRsZTogJ+ihjOS4micsIHZhbHVlOiAn5peF5ri4J30sIHt0aXRsZTogJ+W3peS9nOmihuWfnycsIHZhbHVlOiAn562W5YiSJ30sIHt0aXRsZTogJ+WFrOWPuCcsIHZhbHVlOiAn54ix6L6J56eR5oqA5pyJ6ZmQ5YWs5Y+4J30sIHt0aXRsZTogJ+adpeiHqicsIHZhbHVlOiAn5rGf6IuPJ30sIHt0aXRsZTogJ+e7j+W4uOWHuuayoScsIHZhbHVlOiAn5pil54aZ6LevJ30sIHt0aXRsZTogJ+S4quS6uuetvuWQjScsIHZhbHVlOiAn6IGq5piO5piv5LiA56eN5aSp6LWL77yM6ICM5ZaE6Imv5piv5LiA56eN6YCJ5oup44CCJ31dLFxuICAgICAgICAgICBteVRhZ3M6IFsn5aWz5rGJ5a2QJywgJ+WWnOasoueugOWNlScsICfpnaDosLEnLCAn5a6J6Z2ZJywgJ+mAieaLqeaBkOaDp+eXhycsICfmlofoibonLCAn5Y6a6YGTJywgJ+iusuS5ieawlCcsICfpmo/mgKcnXSxcbiAgICAgICAgICAgc3BvcnRzOiBbJ+evrueQgycsICflgaXouqvmiL8nLCAn6Iie6LmIJywgJ+WPsOeQgycsICflsITnrq0nLCAn552h6KeJJ10sXG4gICAgICAgICAgIG11c2ljOiBbJ+WImOW+t+WNjicsICfkupTnmb4nLCAnODDlubTku6Pnu4/lhbgnXSxcbiAgICAgICAgICAgZm9vZDogWyfniZvmjpInLCAn54Gr6ZSFJywgJ+e+jumjnyddLFxuICAgICAgICAgICB0djogWyfmiJHnmoTlsJHlpbPml7bku6MnLCAn5Zac5Ymn5LmL546LJywgJ+WAqeWls+W5vemtgicsICfog4zmma/pgYfkuIropb/pm4Xlm74nLCAn5py65qKw5biIJywgJ+WJquWIgOaJi+eIseW+t+WNjicsICflgrLmhaLkuI7lgY/op4EnXSxcbiAgICAgICAgICAgYm9vazogWyfmrrfmoYPlsI/kuLjlrZAnLCAn55C855G2JywgJ+eBjOevrumrmOaJiyddLFxuICAgICAgICAgICBwbGFjZTogWyfljJfmtbcnLCAn5rOw5Zu9JywgJ+Wkp+eQhicsICfkuZ3lr6jmsp8nLCAn5oiQ6YO9JywgJ+S4veaxnycsICfpppnmoLzph4zmi4knLCAn5pmu5ZCJ5bKbJywgJ+i2iuWNlyddLFxuICAgICAgICAgICBteUFuczogW3t0aXRsZTogJ+WmguaenOiDveacieS4gOenjei2heiDveWKm++8jOimgeS7gOS5iO+8nycsIHZhbHVlOiAn5pe25YWJ6IO95YCS5rWBJ30sIHt0aXRsZTogJ+WmguaenOaciemSseacieaXtumXtO+8jOacgOaDs+WOu+WBmuS7gOS5iO+8nycsIHZhbHVlOiAn546v5ri45LiW55WMJ30sIHt0aXRsZTogJ+S7gOS5iOagt+eahOW8guaAp+acgOiuqeS9oOW/g+WKqO+8nycsIHZhbHVlOiAn5biFIOminOWAvOmrmCDnu4Xlo6sg5Lq65ZOB5aW95Liq5a2Q6auYJ30sIHt0aXRsZTogJ+WmguaenOWls+aci+WPiy/nlLfmnIvlj4vnlJ/msJTkuobvvIzmgI7kuYjlk4TvvJ8nLCB2YWx1ZTogJ+S4gOebtOivtOW8gOW/g+eahOS6i+aDhe+8jOWmguaenOi/mOWcqOeUn+awlOWwseS4gOebtOWThCd9LCB7dGl0bGU6ICflj6/ku6XmjqXlj5fnmoTnuqbkvJrmnInlk6rkupvvvJ8nLCB2YWx1ZTogJ+eUteW9sSDlkIPppa0g56+u55CDJ31dXG4gICAgICAgIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIGNob29zZUltYWdlICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJz8nKTtcbiAgICAgICAgY29uc3QgeyB0ZW1wRmlsZVBhdGhzIH0gPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBjb3VudDogNiAtIHRoaXMudGVtcEltZ1VybHMubGVuZ3RoLFxuICAgICAgICAgIHNpemVUeXBlOiAnY29tcHJlc3NlZCdcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy50ZW1wSW1nVXJscy5wdXNoKC4uLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1hZ2VMaXN0KSB7XG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiBjdXIsXG4gICAgICAgICAgdXJsczogaW1hZ2VMaXN0XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ29FZGl0IChpbmRleCkge1xuICAgICAgICBpZighdGhpcy5lZGl0TW9kZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnaXRlbUVkaXRQYWdlP2luZGV4PScgKyBpbmRleFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvZ2dsZSAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfvvJ/vvJ8nKTtcbiAgICAgICAgdGhpcy5lZGl0TW9kZSA9ICF0aGlzLmVkaXRNb2RlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBnbyAocGFnZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogcGFnZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19