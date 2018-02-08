'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

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
      tempImgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg', 'https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg'],
      profile_id: ''
    }, _this.methods = {
      chooseImage: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _tempImgUrls;

          var _ref3, tempFilePaths;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 6 - this.tempImgUrls.length,
                    sizeType: 'compressed'
                  });

                case 2:
                  _ref3 = _context.sent;
                  tempFilePaths = _ref3.tempFilePaths;

                  (_tempImgUrls = this.tempImgUrls).push.apply(_tempImgUrls, _toConsumableArray(tempFilePaths));
                  this.$apply();

                case 6:
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
      toggle: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // TODO: save edited profile
                  // if(this.editMode) {
                  //   var res = await api.updateProfile({
                  //     pack: {
                  //       _id: this.profile_id,
                  //       data: this.myData
                  //     }
                  //   })
                  //   if(res.data && res.data.flag == 'success') {
                  //     this.myData = res.data.data
                  //   }
                  // }
                  this.editMode = !this.editMode;
                  this.$apply();

                case 2:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function toggle() {
          return _ref4.apply(this, arguments);
        }

        return toggle;
      }(),
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
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(option) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.profile_id = option._id;
                _context3.next = 3;
                return this.loadData(this.profile_id);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad(_x) {
        return _ref5.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      // TODO: here we need to update specific item through global Object
      var editedPiece = _wepy2.default.getStorageSync('editedPiece');
      //everytime we have editedPiece = {index: '', value:''}
    }
  }, {
    key: 'loadData',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_id) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // TODO: load data
                // var res = await api.profile({
                //   query: {
                //     _id: _id
                //   }
                // })
                //  if(res.data && res.data.flag == 'success') {
                //    this.myData = res.data.data
                //  }
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
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadData(_x2) {
        return _ref6.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/individualPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGl2aWR1YWxQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlZGl0TW9kZSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsInRlbXBJbWdVcmxzIiwicHJvZmlsZV9pZCIsIm1ldGhvZHMiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwibGVuZ3RoIiwic2l6ZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicHVzaCIsIiRhcHBseSIsInByZXZpZXdJbWFnZSIsImN1ciIsImltYWdlTGlzdCIsImN1cnJlbnQiLCJ1cmxzIiwiZ29FZGl0IiwiaW5kZXgiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9nZ2xlIiwiZ28iLCJwYWdlIiwib3B0aW9uIiwiX2lkIiwibG9hZERhdGEiLCJlZGl0ZWRQaWVjZSIsImdldFN0b3JhZ2VTeW5jIiwiZ2VuZGVyIiwiYWdlIiwieGluZ1p1byIsIm5pY2hOYW1lIiwiaCIsIndlaWdodCIsImltZ1VybHMiLCJ0aW1lbGluZV9pbWdVcmxzIiwibXlJbmZvIiwidmFsdWUiLCJ0aXRsZSIsIm15VGFncyIsInNwb3J0cyIsIm11c2ljIiwiZm9vZCIsInR2IiwiYm9vayIsInBsYWNlIiwibXlBbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNKQyxnQkFBVSxLQUROO0FBRUpDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUZsQztBQUdKQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFIbkM7QUFJSkMsY0FBUSxFQUpKO0FBS0pDLG1CQUFhLENBQ1gsMExBRFcsRUFFWCxvTUFGVyxFQUdYLHVJQUhXLEVBSVgsMExBSlcsQ0FMVDtBQVdKQyxrQkFBWTtBQVhSLEssUUE0RFBDLE8sR0FBVTtBQUNGQyxpQkFERTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUUwQixlQUFLQSxXQUFMLENBQWlCO0FBQy9DQywyQkFBTyxJQUFJLEtBQUtKLFdBQUwsQ0FBaUJLLE1BRG1CO0FBRS9DQyw4QkFBVTtBQUZxQyxtQkFBakIsQ0FGMUI7O0FBQUE7QUFBQTtBQUVFQywrQkFGRixTQUVFQSxhQUZGOztBQU1OLHVDQUFLUCxXQUFMLEVBQWlCUSxJQUFqQix3Q0FBeUJELGFBQXpCO0FBQ0EsdUJBQUtFLE1BQUw7O0FBUE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFTUkMsa0JBVFEsd0JBU01DLEdBVE4sRUFTV0MsU0FUWCxFQVNzQjtBQUM1Qix1QkFBS0YsWUFBTCxDQUFrQjtBQUNoQkcsbUJBQVNGLEdBRE87QUFFaEJHLGdCQUFNRjtBQUZVLFNBQWxCO0FBSUQsT0FkTztBQWVSRyxZQWZRLGtCQWVBQyxLQWZBLEVBZU87QUFDYixZQUFHLENBQUMsS0FBS3ZCLFFBQVQsRUFBbUI7QUFDakI7QUFDRDtBQUNELHVCQUFLd0IsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLHdCQUF3QkY7QUFEZixTQUFoQjtBQUdELE9BdEJPO0FBdUJGRyxZQXZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3Qk47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQUsxQixRQUFMLEdBQWdCLENBQUMsS0FBS0EsUUFBdEI7QUFDQSx1QkFBS2dCLE1BQUw7O0FBckNNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBdUNSVyxRQXZDUSxjQXVDSkMsSUF2Q0ksRUF1Q0U7QUFDUix1QkFBS0osVUFBTCxDQUFnQjtBQUNkQyxlQUFLRztBQURTLFNBQWhCO0FBR0Q7QUEzQ08sSzs7Ozs7OzRGQS9DSUMsTTs7Ozs7QUFDWixxQkFBS3JCLFVBQUwsR0FBa0JxQixPQUFPQyxHQUF6Qjs7dUJBQ00sS0FBS0MsUUFBTCxDQUFjLEtBQUt2QixVQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRUM7QUFDUDtBQUNBLFVBQUl3QixjQUFjLGVBQUtDLGNBQUwsQ0FBb0IsYUFBcEIsQ0FBbEI7QUFDQTtBQUNEOzs7OzRGQUNjSCxHOzs7OztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLHFCQUFLeEIsTUFBTCxHQUFjO0FBQ1o0QiwwQkFBUSxRQURJO0FBRVpDLHVCQUFLLElBRk87QUFHWkMsMkJBQVMsS0FIRztBQUlaQyw0QkFBVSxLQUpFO0FBS1pDLHFCQUFHLEtBTFM7QUFNWkMsMEJBQVEsSUFOSTtBQU9aQywyQkFBUyxDQUNOLDBMQURNLEVBRU4sb01BRk0sRUFHTix1SUFITSxDQVBHO0FBWVhDLG9DQUFrQixDQUNmLDBMQURlLEVBRWYsb01BRmUsRUFHZix1SUFIZSxDQVpQO0FBaUJYQywwQkFBUSxDQUFDLEVBQUMsU0FBUyxJQUFWLEVBQWdCQyxPQUFPLEtBQXZCLEVBQUQsRUFBZ0MsRUFBQ0MsT0FBTyxJQUFSLEVBQWNELE9BQU8sSUFBckIsRUFBaEMsRUFBNEQsRUFBQ0MsT0FBTyxNQUFSLEVBQWdCRCxPQUFPLElBQXZCLEVBQTVELEVBQTBGLEVBQUNDLE9BQU8sSUFBUixFQUFjRCxPQUFPLFVBQXJCLEVBQTFGLEVBQTRILEVBQUNDLE9BQU8sSUFBUixFQUFjRCxPQUFPLElBQXJCLEVBQTVILEVBQXdKLEVBQUNDLE9BQU8sTUFBUixFQUFnQkQsT0FBTyxLQUF2QixFQUF4SixFQUF1TCxFQUFDQyxPQUFPLE1BQVIsRUFBZ0JELE9BQU8sbUJBQXZCLEVBQXZMLENBakJHO0FBa0JYRSwwQkFBUSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLE9BQTVCLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELEtBQWpELEVBQXdELElBQXhELENBbEJHO0FBbUJYQywwQkFBUSxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxDQW5CRztBQW9CWEMseUJBQU8sQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLFFBQWQsQ0FwQkk7QUFxQlhDLHdCQUFNLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBckJLO0FBc0JYQyxzQkFBSSxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLE1BQW5CLEVBQTJCLFNBQTNCLEVBQXNDLEtBQXRDLEVBQTZDLFFBQTdDLEVBQXVELE9BQXZELENBdEJPO0FBdUJYQyx3QkFBTSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLE1BQWhCLENBdkJLO0FBd0JYQyx5QkFBTyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixLQUFuQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQyxNQUF0QyxFQUE4QyxLQUE5QyxFQUFxRCxJQUFyRCxDQXhCSTtBQXlCWEMseUJBQU8sQ0FBQyxFQUFDUixPQUFPLGdCQUFSLEVBQTBCRCxPQUFPLE9BQWpDLEVBQUQsRUFBNEMsRUFBQ0MsT0FBTyxpQkFBUixFQUEyQkQsT0FBTyxNQUFsQyxFQUE1QyxFQUF1RixFQUFDQyxPQUFPLGNBQVIsRUFBd0JELE9BQU8saUJBQS9CLEVBQXZGLEVBQTBJLEVBQUNDLE9BQU8sbUJBQVIsRUFBNkJELE9BQU8scUJBQXBDLEVBQTFJLEVBQXNNLEVBQUNDLE9BQU8sYUFBUixFQUF1QkQsT0FBTyxVQUE5QixFQUF0TTtBQXpCSSxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBDNkIsZUFBS2YsSTs7a0JBQW5CaEMsSyIsImZpbGUiOiJpbmRpdmlkdWFsUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYXBpIGZyb20gJy4vLi4vYXBpL2FwaSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eOi+Wwj+iZjidcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICAgbXlEYXRhOiB7fSxcbiAgICAgICB0ZW1wSW1nVXJsczogW1xuICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJyxcbiAgICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJ1xuICAgICAgIF0sXG4gICAgICAgcHJvZmlsZV9pZDogJydcbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkIChvcHRpb24pIHtcbiAgICAgIHRoaXMucHJvZmlsZV9pZCA9IG9wdGlvbi5faWRcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEodGhpcy5wcm9maWxlX2lkKVxuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICAvLyBUT0RPOiBoZXJlIHdlIG5lZWQgdG8gdXBkYXRlIHNwZWNpZmljIGl0ZW0gdGhyb3VnaCBnbG9iYWwgT2JqZWN0XG4gICAgICB2YXIgZWRpdGVkUGllY2UgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdlZGl0ZWRQaWVjZScpXG4gICAgICAvL2V2ZXJ5dGltZSB3ZSBoYXZlIGVkaXRlZFBpZWNlID0ge2luZGV4OiAnJywgdmFsdWU6Jyd9XG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhKF9pZCkge1xuICAgICAgLy8gVE9ETzogbG9hZCBkYXRhXG4gICAgICAvLyB2YXIgcmVzID0gYXdhaXQgYXBpLnByb2ZpbGUoe1xuICAgICAgLy8gICBxdWVyeToge1xuICAgICAgLy8gICAgIF9pZDogX2lkXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgICAvLyAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgIC8vICAgIHRoaXMubXlEYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgICAgLy8gIH1cbiAgICAgICAgdGhpcy5teURhdGEgPSB7XG4gICAgICAgICAgZ2VuZGVyOiAnZmVtYWxlJyxcbiAgICAgICAgICBhZ2U6ICcyNScsXG4gICAgICAgICAgeGluZ1p1bzogJ+WPjOmxvOW6pycsXG4gICAgICAgICAgbmljaE5hbWU6ICfnjovlsI/omY4nLFxuICAgICAgICAgIGg6ICcxNjUnLFxuICAgICAgICAgIHdlaWdodDogJzQ1JyxcbiAgICAgICAgICBpbWdVcmxzOiBbXG4gICAgICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxSC5WUEpWWFhYWGJsWEZYWHE2eFhGWFhYai9EaXktRGlhbW9uZC1QYWludGluZy1LaXRzLTMweDMwY20tRnVsbC1EaWFtb25kLVNxdWFyZS1SaGluZXN0b25lLVBhc3RlZC1QYWludGluZy1Ib21lLURlY29yYXRpb24tTmF0dXJlLVNjZW5lcnktV2F0ZXJmYWxsLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmRocmVzb3VyY2UuY29tLzB4MHMvZjItYWxidS1nNC1NMDAtMTItNDktckJWYUVGbVZvdHVBWG91OUFBTDNyUDVqU3VjNTMxLmpwZy9iZWF1dGlmdWwtc2NlbmVyeS1zZWFzaWRlLWRpeS1mdWxsLXNxdWFyZS5qcGcnXG4gICAgICAgICAgIF0sXG4gICAgICAgICAgIHRpbWVsaW5lX2ltZ1VybHM6IFtcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE0YS5abHp1aFNLSmpTc3BqcTZBaThWWGFTL05lZWRsZXdvcmstZGl5LWRpYW1vbmQtcGFpbnRpbmctY3Jvc3Mtc3RpdGNoLWtpdHMtZnVsbC1yZXNpbi1zcXVhcmUtZGlhbW9uZC1lbWJyb2lkZXJ5LU1vc2FpYy1Ib21lLURlY29yLXNjZW5pYy5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUguVlBKVlhYWFhibFhGWFhxNnhYRlhYWGovRGl5LURpYW1vbmQtUGFpbnRpbmctS2l0cy0zMHgzMGNtLUZ1bGwtRGlhbW9uZC1TcXVhcmUtUmhpbmVzdG9uZS1QYXN0ZWQtUGFpbnRpbmctSG9tZS1EZWNvcmF0aW9uLU5hdHVyZS1TY2VuZXJ5LVdhdGVyZmFsbC5qcGdfNjQweDY0MC5qcGcnLFxuICAgICAgICAgICAgICAnaHR0cHM6Ly93d3cuZGhyZXNvdXJjZS5jb20vMHgwcy9mMi1hbGJ1LWc0LU0wMC0xMi00OS1yQlZhRUZtVm90dUFYb3U5QUFMM3JQNWpTdWM1MzEuanBnL2JlYXV0aWZ1bC1zY2VuZXJ5LXNlYXNpZGUtZGl5LWZ1bGwtc3F1YXJlLmpwZydcbiAgICAgICAgICAgXSxcbiAgICAgICAgICAgbXlJbmZvOiBbeyd0aXRsZSc6ICfmmJ/luqcnLCB2YWx1ZTogJ+WkqeidjuW6pyd9LCB7dGl0bGU6ICfooYzkuJonLCB2YWx1ZTogJ+aXhea4uCd9LCB7dGl0bGU6ICflt6XkvZzpoobln58nLCB2YWx1ZTogJ+etluWIkid9LCB7dGl0bGU6ICflhazlj7gnLCB2YWx1ZTogJ+eIsei+ieenkeaKgOaciemZkOWFrOWPuCd9LCB7dGl0bGU6ICfmnaXoh6onLCB2YWx1ZTogJ+axn+iLjyd9LCB7dGl0bGU6ICfnu4/luLjlh7rmsqEnLCB2YWx1ZTogJ+aYpeeGmei3ryd9LCB7dGl0bGU6ICfkuKrkurrnrb7lkI0nLCB2YWx1ZTogJ+iBquaYjuaYr+S4gOenjeWkqei1i++8jOiAjOWWhOiJr+aYr+S4gOenjemAieaLqeOAgid9XSxcbiAgICAgICAgICAgbXlUYWdzOiBbJ+Wls+axieWtkCcsICfllpzmrKLnroDljZUnLCAn6Z2g6LCxJywgJ+WuiemdmScsICfpgInmi6nmgZDmg6fnl4cnLCAn5paH6Im6JywgJ+WOmumBkycsICforrLkuYnmsJQnLCAn6ZqP5oCnJ10sXG4gICAgICAgICAgIHNwb3J0czogWyfnr67nkIMnLCAn5YGl6Lqr5oi/JywgJ+iInui5iCcsICflj7DnkIMnLCAn5bCE566tJywgJ+edoeiniSddLFxuICAgICAgICAgICBtdXNpYzogWyfliJjlvrfljY4nLCAn5LqU55m+JywgJzgw5bm05Luj57uP5YW4J10sXG4gICAgICAgICAgIGZvb2Q6IFsn54mb5o6SJywgJ+eBq+mUhScsICfnvo7po58nXSxcbiAgICAgICAgICAgdHY6IFsn5oiR55qE5bCR5aWz5pe25LujJywgJ+WWnOWJp+S5i+eOiycsICflgKnlpbPlub3prYInLCAn6IOM5pmv6YGH5LiK6KW/6ZuF5Zu+JywgJ+acuuaisOW4iCcsICfliarliIDmiYvniLHlvrfljY4nLCAn5YKy5oWi5LiO5YGP6KeBJ10sXG4gICAgICAgICAgIGJvb2s6IFsn5q635qGD5bCP5Li45a2QJywgJ+eQvOeRticsICfngYznr67pq5jmiYsnXSxcbiAgICAgICAgICAgcGxhY2U6IFsn5YyX5rW3JywgJ+azsOWbvScsICflpKfnkIYnLCAn5Lmd5a+o5rKfJywgJ+aIkOmDvScsICfkuL3msZ8nLCAn6aaZ5qC86YeM5ouJJywgJ+aZruWQieWymycsICfotorljZcnXSxcbiAgICAgICAgICAgbXlBbnM6IFt7dGl0bGU6ICflpoLmnpzog73mnInkuIDnp43otoXog73lipvvvIzopoHku4DkuYjvvJ8nLCB2YWx1ZTogJ+aXtuWFieiDveWAkua1gSd9LCB7dGl0bGU6ICflpoLmnpzmnInpkrHmnInml7bpl7TvvIzmnIDmg7PljrvlgZrku4DkuYjvvJ8nLCB2YWx1ZTogJ+eOr+a4uOS4lueVjCd9LCB7dGl0bGU6ICfku4DkuYjmoLfnmoTlvILmgKfmnIDorqnkvaDlv4PliqjvvJ8nLCB2YWx1ZTogJ+W4hSDpopzlgLzpq5gg57uF5aOrIOS6uuWTgeWlveS4quWtkOmrmCd9LCB7dGl0bGU6ICflpoLmnpzlpbPmnIvlj4sv55S35pyL5Y+L55Sf5rCU5LqG77yM5oCO5LmI5ZOE77yfJywgdmFsdWU6ICfkuIDnm7Tor7TlvIDlv4PnmoTkuovmg4XvvIzlpoLmnpzov5jlnKjnlJ/msJTlsLHkuIDnm7Tlk4QnfSwge3RpdGxlOiAn5Y+v5Lul5o6l5Y+X55qE57qm5Lya5pyJ5ZOq5Lqb77yfJywgdmFsdWU6ICfnlLXlvbEg5ZCD6aWtIOevrueQgyd9XVxuICAgICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyBjaG9vc2VJbWFnZSAoKSB7XG4gICAgICAgIGNvbnN0IHsgdGVtcEZpbGVQYXRocyB9ID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgY291bnQ6IDYgLSB0aGlzLnRlbXBJbWdVcmxzLmxlbmd0aCxcbiAgICAgICAgICBzaXplVHlwZTogJ2NvbXByZXNzZWQnXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudGVtcEltZ1VybHMucHVzaCguLi50ZW1wRmlsZVBhdGhzKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgcHJldmlld0ltYWdlIChjdXIsIGltYWdlTGlzdCkge1xuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgY3VycmVudDogY3VyLFxuICAgICAgICAgIHVybHM6IGltYWdlTGlzdFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvRWRpdCAoaW5kZXgpIHtcbiAgICAgICAgaWYoIXRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2l0ZW1FZGl0UGFnZT9pbmRleD0nICsgaW5kZXhcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhc3luYyB0b2dnbGUgKCkge1xuICAgICAgICAvLyBUT0RPOiBzYXZlIGVkaXRlZCBwcm9maWxlXG4gICAgICAgIC8vIGlmKHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgLy8gICB2YXIgcmVzID0gYXdhaXQgYXBpLnVwZGF0ZVByb2ZpbGUoe1xuICAgICAgICAvLyAgICAgcGFjazoge1xuICAgICAgICAvLyAgICAgICBfaWQ6IHRoaXMucHJvZmlsZV9pZCxcbiAgICAgICAgLy8gICAgICAgZGF0YTogdGhpcy5teURhdGFcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyAgIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm15RGF0YSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5lZGl0TW9kZSA9ICF0aGlzLmVkaXRNb2RlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBnbyAocGFnZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogcGFnZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19