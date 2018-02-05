'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      navigationBarTitleText: 'Intro'
    }, _this.data = {
      editMode: false,
      imgUrls: ['https://ae01.alicdn.com/kf/HTB14a.ZlzuhSKJjSspjq6Ai8VXaS/Needlework-diy-diamond-painting-cross-stitch-kits-full-resin-square-diamond-embroidery-Mosaic-Home-Decor-scenic.jpg_640x640.jpg', 'https://ae01.alicdn.com/kf/HTB1H.VPJVXXXXblXFXXq6xXFXXXj/Diy-Diamond-Painting-Kits-30x30cm-Full-Diamond-Square-Rhinestone-Pasted-Painting-Home-Decoration-Nature-Scenery-Waterfall.jpg_640x640.jpg', 'https://www.dhresource.com/0x0s/f2-albu-g4-M00-12-49-rBVaEFmVotuAXou9AAL3rP5jSuc531.jpg/beautiful-scenery-seaside-diy-full-square.jpg'],
      screenWidth: _wepy2.default.getSystemInfoSync().windowWidth,
      screenHeight: _wepy2.default.getSystemInfoSync().windowHeight,
      myInfo: [{ 'title': '星座', value: '天蝎座' }, { title: '行业', value: '旅游' }, { title: '工作领域', value: '策划' }, { title: '公司', value: '堂吉诃德' }, { title: '来自', value: '江苏' }, { title: '经常出没', value: '春熙路' }, { title: '个人签名', value: '聪明是一种天赋，而善良是一种选择。' }],
      myTags: ['女汉子', '喜欢简单', '靠谱', '安静', '选择恐惧症', '文艺', '厚道', '讲义气', '随性'],
      myInterest1: ['篮球', '健身房', '舞蹈', '台球', '射箭', '睡觉'],
      myInterest2: ['刘德华', '五百', '80年代经典'],
      myInterest3: ['牛排', '火锅', '美食'],
      myInterest4: ['我的少女时代', '喜剧之王', '倩女幽魂', '背景遇上西雅图', '机械师', '剪刀手爱德华', '傲慢与偏见'],
      myInterest5: ['殷桃小丸子', '琼瑶', '灌篮高手'],
      myInterest6: ['北海', '泰国', '大理', '九寨沟', '成都', '丽江', '香格里拉', '普吉岛', '越南'],
      myAns: [{ title: '如果能有一种超能力，要什么？', value: '时光能倒流' }, { title: '如果有钱有时间，最想去做什么？', value: '环游世界' }, { title: '什么样的异性最让你心动？', value: '帅 颜值高 绅士 人品好个子高' }, { title: '如果女朋友/男朋友生气了，怎么哄？', value: '一直说开心的事情，如果还在生气就一直哄' }, { title: '可以接受的约会有哪些？', value: '电影 吃饭 篮球' }]
    }, _this.methods = {
      goEdit: function goEdit(index) {
        if (!this.editMode) {
          return;
        }
        _wepy2.default.navigateTo({
          url: 'input?index=' + index
        });
      },
      toggle: function toggle() {
        // console.log('？？');
        this.editMode = !this.editMode;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/selfIntroPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGZJbnRyb1BhZ2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImVkaXRNb2RlIiwiaW1nVXJscyIsInNjcmVlbldpZHRoIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInNjcmVlbkhlaWdodCIsIndpbmRvd0hlaWdodCIsIm15SW5mbyIsInZhbHVlIiwidGl0bGUiLCJteVRhZ3MiLCJteUludGVyZXN0MSIsIm15SW50ZXJlc3QyIiwibXlJbnRlcmVzdDMiLCJteUludGVyZXN0NCIsIm15SW50ZXJlc3Q1IiwibXlJbnRlcmVzdDYiLCJteUFucyIsIm1ldGhvZHMiLCJnb0VkaXQiLCJpbmRleCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b2dnbGUiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLEtBREw7QUFFTEMsZUFBUyxDQUNOLDBMQURNLEVBRU4sb01BRk0sRUFHTix1SUFITSxDQUZKO0FBT0pDLG1CQUFhLGVBQUtDLGlCQUFMLEdBQXlCQyxXQVBsQztBQVFKQyxvQkFBYyxlQUFLRixpQkFBTCxHQUF5QkcsWUFSbkM7QUFTSkMsY0FBUSxDQUFDLEVBQUMsU0FBUyxJQUFWLEVBQWdCQyxPQUFPLEtBQXZCLEVBQUQsRUFBZ0MsRUFBQ0MsT0FBTyxJQUFSLEVBQWNELE9BQU8sSUFBckIsRUFBaEMsRUFBNEQsRUFBQ0MsT0FBTyxNQUFSLEVBQWdCRCxPQUFPLElBQXZCLEVBQTVELEVBQTBGLEVBQUNDLE9BQU8sSUFBUixFQUFjRCxPQUFPLE1BQXJCLEVBQTFGLEVBQXdILEVBQUNDLE9BQU8sSUFBUixFQUFjRCxPQUFPLElBQXJCLEVBQXhILEVBQW9KLEVBQUNDLE9BQU8sTUFBUixFQUFnQkQsT0FBTyxLQUF2QixFQUFwSixFQUFtTCxFQUFDQyxPQUFPLE1BQVIsRUFBZ0JELE9BQU8sbUJBQXZCLEVBQW5MLENBVEo7QUFVSkUsY0FBUSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLE9BQTVCLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELEtBQWpELEVBQXdELElBQXhELENBVko7QUFXSkMsbUJBQWEsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FYVDtBQVlKQyxtQkFBYSxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsUUFBZCxDQVpUO0FBYUpDLG1CQUFhLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBYlQ7QUFjSkMsbUJBQWEsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixNQUFuQixFQUEyQixTQUEzQixFQUFzQyxLQUF0QyxFQUE2QyxRQUE3QyxFQUF1RCxPQUF2RCxDQWRUO0FBZUpDLG1CQUFhLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FmVDtBQWdCSkMsbUJBQWEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsS0FBbkIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0MsTUFBdEMsRUFBOEMsS0FBOUMsRUFBcUQsSUFBckQsQ0FoQlQ7QUFpQkpDLGFBQU8sQ0FBQyxFQUFDUixPQUFPLGdCQUFSLEVBQTBCRCxPQUFPLE9BQWpDLEVBQUQsRUFBNEMsRUFBQ0MsT0FBTyxpQkFBUixFQUEyQkQsT0FBTyxNQUFsQyxFQUE1QyxFQUF1RixFQUFDQyxPQUFPLGNBQVIsRUFBd0JELE9BQU8saUJBQS9CLEVBQXZGLEVBQTBJLEVBQUNDLE9BQU8sbUJBQVIsRUFBNkJELE9BQU8scUJBQXBDLEVBQTFJLEVBQXNNLEVBQUNDLE9BQU8sYUFBUixFQUF1QkQsT0FBTyxVQUE5QixFQUF0TTtBQWpCSCxLLFFBb0JQVSxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDQUMsS0FEQSxFQUNPO0FBQ2IsWUFBRyxDQUFDLEtBQUtwQixRQUFULEVBQW1CO0FBQ2pCO0FBQ0Q7QUFDRCx1QkFBS3FCLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxpQkFBaUJGO0FBRFIsU0FBaEI7QUFHRCxPQVJPO0FBU1JHLFlBVFEsb0JBU0U7QUFDUjtBQUNBLGFBQUt2QixRQUFMLEdBQWdCLENBQUMsS0FBS0EsUUFBdEI7QUFDQSxhQUFLd0IsTUFBTDtBQUNEO0FBYk8sSzs7OztFQXhCdUIsZUFBS0MsSTs7a0JBQW5CN0IsSyIsImZpbGUiOiJzZWxmSW50cm9QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdJbnRybydcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgIGltZ1VybHM6IFtcbiAgICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNGEuWmx6dWhTS0pqU3NwanE2QWk4VlhhUy9OZWVkbGV3b3JrLWRpeS1kaWFtb25kLXBhaW50aW5nLWNyb3NzLXN0aXRjaC1raXRzLWZ1bGwtcmVzaW4tc3F1YXJlLWRpYW1vbmQtZW1icm9pZGVyeS1Nb3NhaWMtSG9tZS1EZWNvci1zY2VuaWMuanBnXzY0MHg2NDAuanBnJyxcbiAgICAgICAgICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxSC5WUEpWWFhYWGJsWEZYWHE2eFhGWFhYai9EaXktRGlhbW9uZC1QYWludGluZy1LaXRzLTMweDMwY20tRnVsbC1EaWFtb25kLVNxdWFyZS1SaGluZXN0b25lLVBhc3RlZC1QYWludGluZy1Ib21lLURlY29yYXRpb24tTmF0dXJlLVNjZW5lcnktV2F0ZXJmYWxsLmpwZ182NDB4NjQwLmpwZycsXG4gICAgICAgICAnaHR0cHM6Ly93d3cuZGhyZXNvdXJjZS5jb20vMHgwcy9mMi1hbGJ1LWc0LU0wMC0xMi00OS1yQlZhRUZtVm90dUFYb3U5QUFMM3JQNWpTdWM1MzEuanBnL2JlYXV0aWZ1bC1zY2VuZXJ5LXNlYXNpZGUtZGl5LWZ1bGwtc3F1YXJlLmpwZydcbiAgICAgICBdLFxuICAgICAgIHNjcmVlbldpZHRoOiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICAgc2NyZWVuSGVpZ2h0OiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0LFxuICAgICAgIG15SW5mbzogW3sndGl0bGUnOiAn5pif5bqnJywgdmFsdWU6ICflpKnonY7luqcnfSwge3RpdGxlOiAn6KGM5LiaJywgdmFsdWU6ICfml4XmuLgnfSwge3RpdGxlOiAn5bel5L2c6aKG5Z+fJywgdmFsdWU6ICfnrZbliJInfSwge3RpdGxlOiAn5YWs5Y+4JywgdmFsdWU6ICfloILlkInor4PlvrcnfSwge3RpdGxlOiAn5p2l6IeqJywgdmFsdWU6ICfmsZ/oi48nfSwge3RpdGxlOiAn57uP5bi45Ye65rKhJywgdmFsdWU6ICfmmKXnhpnot68nfSwge3RpdGxlOiAn5Liq5Lq6562+5ZCNJywgdmFsdWU6ICfogarmmI7mmK/kuIDnp43lpKnotYvvvIzogIzlloToia/mmK/kuIDnp43pgInmi6njgIInfV0sXG4gICAgICAgbXlUYWdzOiBbJ+Wls+axieWtkCcsICfllpzmrKLnroDljZUnLCAn6Z2g6LCxJywgJ+WuiemdmScsICfpgInmi6nmgZDmg6fnl4cnLCAn5paH6Im6JywgJ+WOmumBkycsICforrLkuYnmsJQnLCAn6ZqP5oCnJ10sXG4gICAgICAgbXlJbnRlcmVzdDE6IFsn56+u55CDJywgJ+WBpei6q+aIvycsICfoiJ7ouYgnLCAn5Y+w55CDJywgJ+WwhOeurScsICfnnaHop4knXSxcbiAgICAgICBteUludGVyZXN0MjogWyfliJjlvrfljY4nLCAn5LqU55m+JywgJzgw5bm05Luj57uP5YW4J10sXG4gICAgICAgbXlJbnRlcmVzdDM6IFsn54mb5o6SJywgJ+eBq+mUhScsICfnvo7po58nXSxcbiAgICAgICBteUludGVyZXN0NDogWyfmiJHnmoTlsJHlpbPml7bku6MnLCAn5Zac5Ymn5LmL546LJywgJ+WAqeWls+W5vemtgicsICfog4zmma/pgYfkuIropb/pm4Xlm74nLCAn5py65qKw5biIJywgJ+WJquWIgOaJi+eIseW+t+WNjicsICflgrLmhaLkuI7lgY/op4EnXSxcbiAgICAgICBteUludGVyZXN0NTogWyfmrrfmoYPlsI/kuLjlrZAnLCAn55C855G2JywgJ+eBjOevrumrmOaJiyddLFxuICAgICAgIG15SW50ZXJlc3Q2OiBbJ+WMl+a1tycsICfms7Dlm70nLCAn5aSn55CGJywgJ+S5neWvqOaynycsICfmiJDpg70nLCAn5Li95rGfJywgJ+mmmeagvOmHjOaLiScsICfmma7lkInlspsnLCAn6LaK5Y2XJ10sXG4gICAgICAgbXlBbnM6IFt7dGl0bGU6ICflpoLmnpzog73mnInkuIDnp43otoXog73lipvvvIzopoHku4DkuYjvvJ8nLCB2YWx1ZTogJ+aXtuWFieiDveWAkua1gSd9LCB7dGl0bGU6ICflpoLmnpzmnInpkrHmnInml7bpl7TvvIzmnIDmg7PljrvlgZrku4DkuYjvvJ8nLCB2YWx1ZTogJ+eOr+a4uOS4lueVjCd9LCB7dGl0bGU6ICfku4DkuYjmoLfnmoTlvILmgKfmnIDorqnkvaDlv4PliqjvvJ8nLCB2YWx1ZTogJ+W4hSDpopzlgLzpq5gg57uF5aOrIOS6uuWTgeWlveS4quWtkOmrmCd9LCB7dGl0bGU6ICflpoLmnpzlpbPmnIvlj4sv55S35pyL5Y+L55Sf5rCU5LqG77yM5oCO5LmI5ZOE77yfJywgdmFsdWU6ICfkuIDnm7Tor7TlvIDlv4PnmoTkuovmg4XvvIzlpoLmnpzov5jlnKjnlJ/msJTlsLHkuIDnm7Tlk4QnfSwge3RpdGxlOiAn5Y+v5Lul5o6l5Y+X55qE57qm5Lya5pyJ5ZOq5Lqb77yfJywgdmFsdWU6ICfnlLXlvbEg5ZCD6aWtIOevrueQgyd9XVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBnb0VkaXQgKGluZGV4KSB7XG4gICAgICAgIGlmKCF0aGlzLmVkaXRNb2RlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdpbnB1dD9pbmRleD0nICsgaW5kZXhcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0b2dnbGUgKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygn77yf77yfJyk7XG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSAhdGhpcy5lZGl0TW9kZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=