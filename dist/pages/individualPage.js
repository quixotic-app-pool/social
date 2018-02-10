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
      navigationBarTitleText: '陈泽铭 '
    }, _this.data = {
      editMode: false,
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myData: {
        gender: '1',
        age: '29',
        xingZuo: '双鱼座',
        nickName: '陈泽铭',
        h: '171',
        weight: '70',
        imgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg'],
        timeline_imgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'],
        myInfo: [{ 'title': '星座', value: '待填' }, { title: '行业', value: '待填' }, { title: '工作领域', value: '待填' }, { title: '公司', value: '待填' }, { title: '来自', value: '待填' }, { title: '经常出没', value: '待填' }, { title: '个人签名', value: '待填' }],
        myTags: ['待填'],
        sports: ['待填'],
        music: ['待填'],
        food: ['待填'],
        tv: ['待填'],
        book: ['待填'],
        place: ['待填'],
        myAns: [{ title: '您的问题？', value: '待填' }]
      },
      tempImgUrls: [],
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
      goEdit: function goEdit(index, val, subIndex) {
        if (!this.editMode) {
          return;
        }
        var data = this.myData;
        var obj = {};
        if (index == 'person') {
          obj = { nickName: data.nickName, birthDate: data.birthDate, height: data.h, weight: data.weight };
          this.$parent.globalData.editedPiece = { index: index, data: obj
            // console.log('??: ' + JSON.stringify(this.$parent.globalData.editedPiece.data))
          };
        } else if (index == 'newQuestion') {
          //new question?
        } else {
          this.$parent.globalData.editedPiece = { index: index, data: val, subIndex: subIndex
            // console.log('??: ' + JSON.stringify(this.$parent.globalData.editedPiece.data))
          };
        }
        _wepy2.default.navigateTo({
          url: 'itemEditPage'
        });
      },
      toggle: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // TODO: save edited profile
                  if (this.editMode) {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '确定保存吗？'
                    }).then(function () {
                      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                console.log(JSON.stringify(res));
                                if (res.confirm) {
                                  // var res = await api.updateProfile({
                                  //   pack: {
                                  //     _id: this.profile_id,
                                  //     data: this.myData
                                  //   }
                                  // })
                                  // if(res.data && res.data.flag == 'success') {
                                  //   this.myData = res.data.data
                                  // }
                                }

                              case 2:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));

                      return function (_x) {
                        return _ref5.apply(this, arguments);
                      };
                    }());
                  }
                  this.editMode = !this.editMode;
                  this.$apply();

                case 3:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
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
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(option) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.profile_id = option._id;
                _context4.next = 3;
                return this.loadData(this.profile_id);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onLoad(_x2) {
        return _ref6.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      var editedPiece = this.$parent.globalData.editedPiece;
      // console.log('editedPiece: ' + JSON.stringify(editedPiece));
      // console.log(new Date().toISOString() - editedPiece.birthDate);
      // console.log(editedPiece.birthDate.getMonth());
      if (editedPiece.index == 'person' && editedPiece.data) {
        this.myData.gender = editedPiece.data.gender || this.myData.gender;
        this.myData.nickName = editedPiece.data.nickName || this.myData.nickName;
        this.myData.h = editedPiece.data.height || this.myData.h;
        this.myData.weight = editedPiece.data.weight || this.myData.weight;
        this.myData.birthDate = editedPiece.data.birthDate || this.myData.birthDate;
        if (editedPiece.data.birthDate) {
          var currentTime = new Date().toISOString();
          var customRegExp = /(\d{4})\-(\d{2})\-(\d{2})/;
          var date1 = customRegExp.exec(currentTime);
          var date2 = customRegExp.exec(editedPiece.data.birthDate);
          var age = date1[1] - date2[1] - (date1[2] < date1[2] ? 1 : 0);
          this.myData.age = age || this.myData.age;
        }
        // console.log('age: ' + age);
        // console.log('date1: ' + date1);
        // console.log('date2: ' + date2);
        // console.log(currentTime);
      } else if (editedPiece.index == '行业' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '行业') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == '工作领域' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '工作领域') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == '公司' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '公司') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == '来自' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '来自') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == '经常出没' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '经常出没') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == '个人签名' && editedPiece.data) {
        this.myData.myInfo.find(function (el) {
          if (el.title == '个人签名') {
            el.value = editedPiece.data;
            return true;
          }
        });
      } else if (editedPiece.index == 'tag' && editedPiece.data) {
        self.myData.myTags = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            // console.log('el.value: ' + el.value);
            self.myData.myTags.push(el.value);
            // console.log('  this.myData.myTags: ' +   self.myData.myTags);
          }
        });
      } else if (editedPiece.index == 'sports' && editedPiece.data) {
        self.myData.sports = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.sports.push(el.value);
          }
        });
      } else if (editedPiece.index == 'music' && editedPiece.data) {
        self.myData.music = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.music.push(el.value);
          }
        });
      } else if (editedPiece.index == 'food' && editedPiece.data) {
        self.myData.food = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.food.push(el.value);
          }
        });
      } else if (editedPiece.index == 'tv' && editedPiece.data) {
        self.myData.tv = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.tv.push(el.value);
          }
        });
      } else if (editedPiece.index == 'book' && editedPiece.data) {
        self.myData.book = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.book.push(el.value);
          }
        });
      } else if (editedPiece.index == 'place' && editedPiece.data) {
        self.myData.place = [];
        editedPiece.data.forEach(function (el) {
          if (el.picked) {
            self.myData.place.push(el.value);
          }
        });
      } else if (editedPiece.index == 'question' && editedPiece.data) {
        this.myData.myAns[editedPiece.subIndex].value = editedPiece.data.value;
      }

      this.$parent.globalData.editedPiece = {};
    }
  }, {
    key: 'loadData',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_id) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function loadData(_x3) {
        return _ref7.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/individualPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGl2aWR1YWxQYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlZGl0TW9kZSIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15RGF0YSIsImdlbmRlciIsImFnZSIsInhpbmdadW8iLCJuaWNrTmFtZSIsImgiLCJ3ZWlnaHQiLCJpbWdVcmxzIiwidGltZWxpbmVfaW1nVXJscyIsIm15SW5mbyIsInZhbHVlIiwidGl0bGUiLCJteVRhZ3MiLCJzcG9ydHMiLCJtdXNpYyIsImZvb2QiLCJ0diIsImJvb2siLCJwbGFjZSIsIm15QW5zIiwidGVtcEltZ1VybHMiLCJwcm9maWxlX2lkIiwibWV0aG9kcyIsImNob29zZUltYWdlIiwiY291bnQiLCJsZW5ndGgiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJwdXNoIiwiJGFwcGx5IiwicHJldmlld0ltYWdlIiwiY3VyIiwiaW1hZ2VMaXN0IiwiY3VycmVudCIsInVybHMiLCJnb0VkaXQiLCJpbmRleCIsInZhbCIsInN1YkluZGV4Iiwib2JqIiwiYmlydGhEYXRlIiwiaGVpZ2h0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJlZGl0ZWRQaWVjZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b2dnbGUiLCJzaG93TW9kYWwiLCJjb250ZW50IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiY29uZmlybSIsImdvIiwicGFnZSIsIm9wdGlvbiIsIl9pZCIsImxvYWREYXRhIiwic2VsZiIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY3VzdG9tUmVnRXhwIiwiZGF0ZTEiLCJleGVjIiwiZGF0ZTIiLCJmaW5kIiwiZWwiLCJmb3JFYWNoIiwicGlja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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O0FBQ1pYLGlCQUFLOUQsTUFBTCxDQUFZa0IsS0FBWixDQUFrQlUsSUFBbEIsQ0FBdUIyQyxHQUFHN0QsS0FBMUI7QUFDRDtBQUNGLFNBSkQ7QUFLRCxPQVBNLE1BT0EsSUFBR2tDLFlBQVlSLEtBQVosSUFBcUIsVUFBckIsSUFBbUNRLFlBQVluRCxJQUFsRCxFQUF3RDtBQUM3RCxhQUFLTyxNQUFMLENBQVltQixLQUFaLENBQWtCeUIsWUFBWU4sUUFBOUIsRUFBd0M1QixLQUF4QyxHQUFnRGtDLFlBQVluRCxJQUFaLENBQWlCaUIsS0FBakU7QUFDRDs7QUFFRCxXQUFLZ0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxXQUF4QixHQUFzQyxFQUF0QztBQUNEOzs7OzRGQUNjZ0IsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbktrQixlQUFLRixJOztrQkFBbkJwRSxLIiwiZmlsZSI6ImluZGl2aWR1YWxQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi8uLi9hcGkvYXBpJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZmI5rO96ZOtICdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICAgc2NyZWVuV2lkdGg6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCxcbiAgICAgICBzY3JlZW5IZWlnaHQ6IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQsXG4gICAgICAgbXlEYXRhOiB7XG4gICAgICAgICBnZW5kZXI6ICcxJyxcbiAgICAgICAgIGFnZTogJzI5JyxcbiAgICAgICAgIHhpbmdadW86ICflj4zpsbzluqcnLFxuICAgICAgICAgbmlja05hbWU6ICfpmYjms73pk60nLFxuICAgICAgICAgaDogJzE3MScsXG4gICAgICAgICB3ZWlnaHQ6ICc3MCcsXG4gICAgICAgICBpbWdVcmxzOiBbXG4gICAgICAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTRhLlpsenVoU0tKalNzcGpxNkFpOFZYYVMvTmVlZGxld29yay1kaXktZGlhbW9uZC1wYWludGluZy1jcm9zcy1zdGl0Y2gta2l0cy1mdWxsLXJlc2luLXNxdWFyZS1kaWFtb25kLWVtYnJvaWRlcnktTW9zYWljLUhvbWUtRGVjb3Itc2NlbmljLmpwZ182NDB4NjQwLmpwZydcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRpbWVsaW5lX2ltZ1VybHM6IFtcbiAgICAgICAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTRhLlpsenVoU0tKalNzcGpxNkFpOFZYYVMvTmVlZGxld29yay1kaXktZGlhbW9uZC1wYWludGluZy1jcm9zcy1zdGl0Y2gta2l0cy1mdWxsLXJlc2luLXNxdWFyZS1kaWFtb25kLWVtYnJvaWRlcnktTW9zYWljLUhvbWUtRGVjb3Itc2NlbmljLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICAgICAnaHR0cHM6Ly93d3cuZGhyZXNvdXJjZS5jb20vMHgwcy9mMi1hbGJ1LWc0LU0wMC0xMi00OS1yQlZhRUZtVm90dUFYb3U5QUFMM3JQNWpTdWM1MzEuanBnL2JlYXV0aWZ1bC1zY2VuZXJ5LXNlYXNpZGUtZGl5LWZ1bGwtc3F1YXJlLmpwZydcbiAgICAgICAgICBdLFxuICAgICAgICAgIG15SW5mbzogW3sndGl0bGUnOiAn5pif5bqnJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn6KGM5LiaJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5bel5L2c6aKG5Z+fJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5YWs5Y+4JywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5p2l6IeqJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn57uP5bi45Ye65rKhJywgdmFsdWU6ICflvoXloasnfSwge3RpdGxlOiAn5Liq5Lq6562+5ZCNJywgdmFsdWU6ICflvoXloasnfV0sXG4gICAgICAgICAgbXlUYWdzOiBbJ+W+heWhqyddLFxuICAgICAgICAgIHNwb3J0czogWyflvoXloasnXSxcbiAgICAgICAgICBtdXNpYzogWyflvoXloasnXSxcbiAgICAgICAgICBmb29kOiBbJ+W+heWhqyddLFxuICAgICAgICAgIHR2OiBbJ+W+heWhqyddLFxuICAgICAgICAgIGJvb2s6IFsn5b6F5aGrJ10sXG4gICAgICAgICAgcGxhY2U6IFsn5b6F5aGrJ10sXG4gICAgICAgICAgbXlBbnM6IFt7dGl0bGU6ICfmgqjnmoTpl67popjvvJ8nLCB2YWx1ZTogJ+W+heWhqyd9XVxuICAgICAgIH0sXG4gICAgICAgdGVtcEltZ1VybHM6IFtdLFxuICAgICAgIHByb2ZpbGVfaWQ6ICcnXG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCAob3B0aW9uKSB7XG4gICAgICB0aGlzLnByb2ZpbGVfaWQgPSBvcHRpb24uX2lkXG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKHRoaXMucHJvZmlsZV9pZClcbiAgICB9XG4gICAgb25TaG93KCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICB2YXIgZWRpdGVkUGllY2UgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZVxuICAgICAgLy8gY29uc29sZS5sb2coJ2VkaXRlZFBpZWNlOiAnICsgSlNPTi5zdHJpbmdpZnkoZWRpdGVkUGllY2UpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSAtIGVkaXRlZFBpZWNlLmJpcnRoRGF0ZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlZGl0ZWRQaWVjZS5iaXJ0aERhdGUuZ2V0TW9udGgoKSk7XG4gICAgICBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAncGVyc29uJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLmdlbmRlciA9IGVkaXRlZFBpZWNlLmRhdGEuZ2VuZGVyIHx8IHRoaXMubXlEYXRhLmdlbmRlclxuICAgICAgICB0aGlzLm15RGF0YS5uaWNrTmFtZSA9ICBlZGl0ZWRQaWVjZS5kYXRhLm5pY2tOYW1lIHx8IHRoaXMubXlEYXRhLm5pY2tOYW1lXG4gICAgICAgIHRoaXMubXlEYXRhLmggPSBlZGl0ZWRQaWVjZS5kYXRhLmhlaWdodCB8fCB0aGlzLm15RGF0YS5oXG4gICAgICAgIHRoaXMubXlEYXRhLndlaWdodCA9IGVkaXRlZFBpZWNlLmRhdGEud2VpZ2h0IHx8IHRoaXMubXlEYXRhLndlaWdodFxuICAgICAgICB0aGlzLm15RGF0YS5iaXJ0aERhdGUgPSBlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSB8fCB0aGlzLm15RGF0YS5iaXJ0aERhdGVcbiAgICAgICAgaWYoZWRpdGVkUGllY2UuZGF0YS5iaXJ0aERhdGUpIHtcbiAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICB2YXIgY3VzdG9tUmVnRXhwID0gLyhcXGR7NH0pXFwtKFxcZHsyfSlcXC0oXFxkezJ9KS9cbiAgICAgICAgICB2YXIgZGF0ZTEgPSBjdXN0b21SZWdFeHAuZXhlYyhjdXJyZW50VGltZSlcbiAgICAgICAgICB2YXIgZGF0ZTIgPSBjdXN0b21SZWdFeHAuZXhlYyhlZGl0ZWRQaWVjZS5kYXRhLmJpcnRoRGF0ZSlcbiAgICAgICAgICB2YXIgYWdlID0gKGRhdGUxWzFdIC0gZGF0ZTJbMV0pIC0gKGRhdGUxWzJdIDwgZGF0ZTFbMl0gPyAxIDogMClcbiAgICAgICAgICB0aGlzLm15RGF0YS5hZ2UgPSBhZ2UgfHwgdGhpcy5teURhdGEuYWdlXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FnZTogJyArIGFnZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRlMTogJyArIGRhdGUxKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGUyOiAnICsgZGF0ZTIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VGltZSk7XG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+ihjOS4micgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfooYzkuJonKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICflt6XkvZzpoobln58nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn5bel5L2c6aKG5Z+fJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn5YWs5Y+4JyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+WFrOWPuCcpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ+adpeiHqicgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICB0aGlzLm15RGF0YS5teUluZm8uZmluZChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnRpdGxlID09ICfmnaXoh6onKSB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGVkaXRlZFBpZWNlLmRhdGFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICfnu4/luLjlh7rmsqEnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlJbmZvLmZpbmQoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC50aXRsZSA9PSAn57uP5bi45Ye65rKhJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBlZGl0ZWRQaWVjZS5kYXRhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAn5Liq5Lq6562+5ZCNJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHRoaXMubXlEYXRhLm15SW5mby5maW5kKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwudGl0bGUgPT0gJ+S4quS6uuetvuWQjScpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ3RhZycgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS5teVRhZ3MgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5kYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC5waWNrZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbC52YWx1ZTogJyArIGVsLnZhbHVlKTtcbiAgICAgICAgICAgIHNlbGYubXlEYXRhLm15VGFncy5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJyAgdGhpcy5teURhdGEubXlUYWdzOiAnICsgICBzZWxmLm15RGF0YS5teVRhZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAnc3BvcnRzJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLnNwb3J0cyA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEuc3BvcnRzLnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdtdXNpYycgJiYgZWRpdGVkUGllY2UuZGF0YSkge1xuICAgICAgICBzZWxmLm15RGF0YS5tdXNpYyA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEubXVzaWMucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ2Zvb2QnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEuZm9vZCA9IFtdXG4gICAgICAgIGVkaXRlZFBpZWNlLmRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGlmKGVsLnBpY2tlZCkge1xuICAgICAgICAgICAgc2VsZi5teURhdGEuZm9vZC5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAndHYnICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgc2VsZi5teURhdGEudHYgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5kYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC5waWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGYubXlEYXRhLnR2LnB1c2goZWwudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmKGVkaXRlZFBpZWNlLmluZGV4ID09ICdib29rJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLmJvb2sgPSBbXVxuICAgICAgICBlZGl0ZWRQaWVjZS5kYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZihlbC5waWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGYubXlEYXRhLmJvb2sucHVzaChlbC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYoZWRpdGVkUGllY2UuaW5kZXggPT0gJ3BsYWNlJyAmJiBlZGl0ZWRQaWVjZS5kYXRhKSB7XG4gICAgICAgIHNlbGYubXlEYXRhLnBsYWNlID0gW11cbiAgICAgICAgZWRpdGVkUGllY2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgaWYoZWwucGlja2VkKSB7XG4gICAgICAgICAgICBzZWxmLm15RGF0YS5wbGFjZS5wdXNoKGVsLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZihlZGl0ZWRQaWVjZS5pbmRleCA9PSAncXVlc3Rpb24nICYmIGVkaXRlZFBpZWNlLmRhdGEpIHtcbiAgICAgICAgdGhpcy5teURhdGEubXlBbnNbZWRpdGVkUGllY2Uuc3ViSW5kZXhdLnZhbHVlID0gZWRpdGVkUGllY2UuZGF0YS52YWx1ZVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZSA9IHt9XG4gICAgfVxuICAgIGFzeW5jIGxvYWREYXRhKF9pZCkge1xuICAgICAgLy8gVE9ETzogbG9hZCBkYXRhXG4gICAgICAvLyB2YXIgcmVzID0gYXdhaXQgYXBpLnByb2ZpbGUoe1xuICAgICAgLy8gICBxdWVyeToge1xuICAgICAgLy8gICAgIF9pZDogX2lkXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgICAvLyAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZmxhZyA9PSAnc3VjY2VzcycpIHtcbiAgICAgIC8vICAgIHRoaXMubXlEYXRhID0gcmVzLmRhdGEuZGF0YVxuICAgICAgLy8gIH1cbiAgICAgICAgLy8gdGhpcy5teURhdGExID0ge1xuICAgICAgICAvLyAgIGdlbmRlcjogJzAnLFxuICAgICAgICAvLyAgIGFnZTogJzI1JyxcbiAgICAgICAgLy8gICB4aW5nWnVvOiAn5Y+M6bG85bqnJyxcbiAgICAgICAgLy8gICBuaWNrTmFtZTogJ+eOi+Wwj+iZjicsXG4gICAgICAgIC8vICAgaDogJzE2NScsXG4gICAgICAgIC8vICAgd2VpZ2h0OiAnNDUnLFxuICAgICAgICAvLyAgIGltZ1VybHM6IFtcbiAgICAgICAgLy8gICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTRhLlpsenVoU0tKalNzcGpxNkFpOFZYYVMvTmVlZGxld29yay1kaXktZGlhbW9uZC1wYWludGluZy1jcm9zcy1zdGl0Y2gta2l0cy1mdWxsLXJlc2luLXNxdWFyZS1kaWFtb25kLWVtYnJvaWRlcnktTW9zYWljLUhvbWUtRGVjb3Itc2NlbmljLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgIC8vICAgICAgJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFILlZQSlZYWFhYYmxYRlhYcTZ4WEZYWFhqL0RpeS1EaWFtb25kLVBhaW50aW5nLUtpdHMtMzB4MzBjbS1GdWxsLURpYW1vbmQtU3F1YXJlLVJoaW5lc3RvbmUtUGFzdGVkLVBhaW50aW5nLUhvbWUtRGVjb3JhdGlvbi1OYXR1cmUtU2NlbmVyeS1XYXRlcmZhbGwuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgLy8gICAgICAnaHR0cHM6Ly93d3cuZGhyZXNvdXJjZS5jb20vMHgwcy9mMi1hbGJ1LWc0LU0wMC0xMi00OS1yQlZhRUZtVm90dUFYb3U5QUFMM3JQNWpTdWM1MzEuanBnL2JlYXV0aWZ1bC1zY2VuZXJ5LXNlYXNpZGUtZGl5LWZ1bGwtc3F1YXJlLmpwZydcbiAgICAgICAgLy8gICAgXSxcbiAgICAgICAgLy8gICAgdGltZWxpbmVfaW1nVXJsczogW1xuICAgICAgICAvLyAgICAgICAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTRhLlpsenVoU0tKalNzcGpxNkFpOFZYYVMvTmVlZGxld29yay1kaXktZGlhbW9uZC1wYWludGluZy1jcm9zcy1zdGl0Y2gta2l0cy1mdWxsLXJlc2luLXNxdWFyZS1kaWFtb25kLWVtYnJvaWRlcnktTW9zYWljLUhvbWUtRGVjb3Itc2NlbmljLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgIC8vICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxSC5WUEpWWFhYWGJsWEZYWHE2eFhGWFhYai9EaXktRGlhbW9uZC1QYWludGluZy1LaXRzLTMweDMwY20tRnVsbC1EaWFtb25kLVNxdWFyZS1SaGluZXN0b25lLVBhc3RlZC1QYWludGluZy1Ib21lLURlY29yYXRpb24tTmF0dXJlLVNjZW5lcnktV2F0ZXJmYWxsLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgIC8vICAgICAgICdodHRwczovL3d3dy5kaHJlc291cmNlLmNvbS8weDBzL2YyLWFsYnUtZzQtTTAwLTEyLTQ5LXJCVmFFRm1Wb3R1QVhvdTlBQUwzclA1alN1YzUzMS5qcGcvYmVhdXRpZnVsLXNjZW5lcnktc2Vhc2lkZS1kaXktZnVsbC1zcXVhcmUuanBnJ1xuICAgICAgICAvLyAgICBdLFxuICAgICAgICAvLyAgICBteUluZm86IFt7J3RpdGxlJzogJ+aYn+W6pycsIHZhbHVlOiAn5aSp6J2O5bqnJ30sIHt0aXRsZTogJ+ihjOS4micsIHZhbHVlOiAn6YeR6J6NJ30sIHt0aXRsZTogJ+W3peS9nOmihuWfnycsIHZhbHVlOiAn562W5YiSJ30sIHt0aXRsZTogJ+WFrOWPuCcsIHZhbHVlOiAn54ix6L6J56eR5oqA5pyJ6ZmQ5YWs5Y+4J30sIHt0aXRsZTogJ+adpeiHqicsIHZhbHVlOiAn5rGf6IuPLOWNl+S6rCzpvJPmpbwnfSwge3RpdGxlOiAn57uP5bi45Ye65rKhJywgdmFsdWU6ICfmmKXnhpnot68nfSwge3RpdGxlOiAn5Liq5Lq6562+5ZCNJywgdmFsdWU6ICfogarmmI7mmK/kuIDnp43lpKnotYvvvIzogIzlloToia/mmK/kuIDnp43pgInmi6njgIInfV0sXG4gICAgICAgIC8vICAgIG15VGFnczogWydQYXRpZW50JywgJ0NyZWF0aXZlJywgJ+Wls+axieWtkCcsICfllpzmrKLnroDljZUnLCAn6Z2g6LCxJywgJ+WuiemdmScsICfpgInmi6nmgZDmg6fnl4cnLCAn5paH6Im6JywgJ+WOmumBkycsICforrLkuYnmsJQnLCAn6ZqP5oCnJ10sXG4gICAgICAgIC8vICAgIHNwb3J0czogWydSdW5uaW5nJywgJ+evrueQgycsICflgaXouqvmiL8nLCAn6Iie6LmIJywgJ+WPsOeQgycsICflsITnrq0nLCAn552h6KeJJ10sXG4gICAgICAgIC8vICAgIG11c2ljOiBbJ+WImOW+t+WNjicsICfkupTnmb4nLCAnODDlubTku6Pnu4/lhbgnXSxcbiAgICAgICAgLy8gICAgZm9vZDogWyfniZvmjpInLCAn54Gr6ZSFJywgJ+e+jumjnyddLFxuICAgICAgICAvLyAgICB0djogWyfmiJHnmoTlsJHlpbPml7bku6MnLCAn5Zac5Ymn5LmL546LJywgJ+WAqeWls+W5vemtgicsICfog4zmma/pgYfkuIropb/pm4Xlm74nLCAn5py65qKw5biIJywgJ+WJquWIgOaJi+eIseW+t+WNjicsICflgrLmhaLkuI7lgY/op4EnXSxcbiAgICAgICAgLy8gICAgYm9vazogWyfmrrfmoYPlsI/kuLjlrZAnLCAn55C855G2JywgJ+eBjOevrumrmOaJiyddLFxuICAgICAgICAvLyAgICBwbGFjZTogWyfljJfmtbcnLCAn5rOw5Zu9JywgJ+Wkp+eQhicsICfkuZ3lr6jmsp8nLCAn5oiQ6YO9JywgJ+S4veaxnycsICfpppnmoLzph4zmi4knLCAn5pmu5ZCJ5bKbJywgJ+i2iuWNlyddLFxuICAgICAgICAvLyAgICBteUFuczogW3t0aXRsZTogJ+WmguaenOiDveacieS4gOenjei2heiDveWKm++8jOimgeS7gOS5iO+8nycsIHZhbHVlOiAn5pe25YWJ6IO95YCS5rWBJ30sIHt0aXRsZTogJ+WmguaenOaciemSseacieaXtumXtO+8jOacgOaDs+WOu+WBmuS7gOS5iO+8nycsIHZhbHVlOiAn546v5ri45LiW55WMJ30sIHt0aXRsZTogJ+S7gOS5iOagt+eahOW8guaAp+acgOiuqeS9oOW/g+WKqO+8nycsIHZhbHVlOiAn5biFIOminOWAvOmrmCDnu4Xlo6sg5Lq65ZOB5aW95Liq5a2Q6auYJ30sIHt0aXRsZTogJ+WmguaenOWls+aci+WPiy/nlLfmnIvlj4vnlJ/msJTkuobvvIzmgI7kuYjlk4TvvJ8nLCB2YWx1ZTogJ+S4gOebtOivtOW8gOW/g+eahOS6i+aDhe+8jOWmguaenOi/mOWcqOeUn+awlOWwseS4gOebtOWThCd9LCB7dGl0bGU6ICflj6/ku6XmjqXlj5fnmoTnuqbkvJrmnInlk6rkupvvvJ8nLCB2YWx1ZTogJ+eUteW9sSDlkIPppa0g56+u55CDJ31dXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIGNob29zZUltYWdlICgpIHtcbiAgICAgICAgY29uc3QgeyB0ZW1wRmlsZVBhdGhzIH0gPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBjb3VudDogNiAtIHRoaXMudGVtcEltZ1VybHMubGVuZ3RoLFxuICAgICAgICAgIHNpemVUeXBlOiAnY29tcHJlc3NlZCdcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy50ZW1wSW1nVXJscy5wdXNoKC4uLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBwcmV2aWV3SW1hZ2UgKGN1ciwgaW1hZ2VMaXN0KSB7XG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiBjdXIsXG4gICAgICAgICAgdXJsczogaW1hZ2VMaXN0XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ29FZGl0IChpbmRleCwgdmFsLCBzdWJJbmRleCkge1xuICAgICAgICBpZighdGhpcy5lZGl0TW9kZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5teURhdGFcbiAgICAgICAgdmFyIG9iaiA9IHt9XG4gICAgICAgIGlmKGluZGV4ID09ICdwZXJzb24nKSB7XG4gICAgICAgICAgb2JqID0ge25pY2tOYW1lOiBkYXRhLm5pY2tOYW1lLCBiaXJ0aERhdGU6IGRhdGEuYmlydGhEYXRlLCBoZWlnaHQ6IGRhdGEuaCwgd2VpZ2h0OiBkYXRhLndlaWdodH1cbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZSA9IHtpbmRleDogaW5kZXgsIGRhdGE6IG9ian1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPz86ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lZGl0ZWRQaWVjZS5kYXRhKSlcbiAgICAgICAgfSBlbHNlIGlmKGluZGV4ID09ICduZXdRdWVzdGlvbicpIHtcbiAgICAgICAgICAgIC8vbmV3IHF1ZXN0aW9uP1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmVkaXRlZFBpZWNlID0ge2luZGV4OiBpbmRleCwgZGF0YTogdmFsLCBzdWJJbmRleDogc3ViSW5kZXh9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJz8/OiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZWRpdGVkUGllY2UuZGF0YSkpXG4gICAgICAgIH1cbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdpdGVtRWRpdFBhZ2UnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXN5bmMgdG9nZ2xlICgpIHtcbiAgICAgICAgLy8gVE9ETzogc2F2ZSBlZGl0ZWQgcHJvZmlsZVxuICAgICAgICBpZih0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ehruWumuS/neWtmOWQl++8nydcbiAgICAgICAgICB9KS50aGVuKGFzeW5jIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBpZihyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAvLyB2YXIgcmVzID0gYXdhaXQgYXBpLnVwZGF0ZVByb2ZpbGUoe1xuICAgICAgICAgICAgICAvLyAgIHBhY2s6IHtcbiAgICAgICAgICAgICAgLy8gICAgIF9pZDogdGhpcy5wcm9maWxlX2lkLFxuICAgICAgICAgICAgICAvLyAgICAgZGF0YTogdGhpcy5teURhdGFcbiAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgIC8vIGlmKHJlcy5kYXRhICYmIHJlcy5kYXRhLmZsYWcgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgIC8vICAgdGhpcy5teURhdGEgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGl0TW9kZSA9ICF0aGlzLmVkaXRNb2RlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBnbyAocGFnZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogcGFnZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19