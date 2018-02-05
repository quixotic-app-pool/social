'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Author: MichaelChen <mymac>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Date:   2018-01-30T10:04:01+08:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Email:  teacherincafe@163.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Project: one_server
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Filename: wxRequest.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last modified by:   mymac
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last modified time: 2018-01-30T10:04:27+08:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

// import md5 from './md5';


// const API_SECRET_KEY = 'www.mall.cycle.com'
// const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

var wxRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:

                        _wepy2.default.showToast({
                            title: '加载中',
                            icon: 'loading'
                        });
                        // console.log('kong de?: ' + JSON.stringify(params.query))
                        data = params.query || {};
                        // data.sign = SIGN;
                        // data.time = TIMESTAMP;

                        _context.next = 4;
                        return _wepy2.default.request({
                            url: url,
                            method: params.method || 'GET',
                            data: data,
                            header: { 'Content-Type': 'application/json' }
                        }).then(function (err, respond) {
                            if (err) {
                                return err;
                            }
                            return respond;
                        });

                    case 4:
                        res = _context.sent;

                        _wepy2.default.hideToast();
                        return _context.abrupt('return', res);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function wxRequest() {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    wxRequest: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkYXRhIiwicXVlcnkiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVyIiwidGhlbiIsImVyciIsInJlc3BvbmQiLCJyZXMiLCJoaWRlVG9hc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQVVDOzs7O0FBQ0E7Ozs7OzsyY0FYRDs7Ozs7Ozs7OztBQVlDOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUE7QUFBQSx1RUFBWTtBQUFBLFlBQU9DLE1BQVAsdUVBQWdCLEVBQWhCO0FBQUEsWUFBb0JDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFZCx1Q0FBS0MsU0FBTCxDQUFlO0FBQ1hDLG1DQUFPLEtBREk7QUFFWEMsa0NBQU07QUFGSyx5QkFBZjtBQUlBO0FBQ0lDLDRCQVBVLEdBT0hMLE9BQU9NLEtBQVAsSUFBZ0IsRUFQYjtBQVFkO0FBQ0E7O0FBVGM7QUFBQSwrQkFVSSxlQUFLQyxPQUFMLENBQWE7QUFDM0JOLGlDQUFLQSxHQURzQjtBQUUzQk8sb0NBQVFSLE9BQU9RLE1BQVAsSUFBaUIsS0FGRTtBQUczQkgsa0NBQU1BLElBSHFCO0FBSTNCSSxvQ0FBUSxFQUFFLGdCQUFnQixrQkFBbEI7QUFKbUIseUJBQWIsRUFLZkMsSUFMZSxDQUtWLFVBQVNDLEdBQVQsRUFBY0MsT0FBZCxFQUFzQjtBQUM1QixnQ0FBR0QsR0FBSCxFQUFRO0FBQ04sdUNBQU9BLEdBQVA7QUFDRDtBQUNELG1DQUFPQyxPQUFQO0FBQ0QseUJBVmlCLENBVko7O0FBQUE7QUFVUkMsMkJBVlE7O0FBcUJkLHVDQUFLQyxTQUFMO0FBckJjLHlEQXNCUEQsR0F0Qk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQTBCQUUsT0FBT0MsT0FBUCxHQUFpQjtBQUNiakI7QUFEYSxDQUFqQiIsImZpbGUiOiJ3eFJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBBdXRob3I6IE1pY2hhZWxDaGVuIDxteW1hYz5cbiAqIEBEYXRlOiAgIDIwMTgtMDEtMzBUMTA6MDQ6MDErMDg6MDBcbiAqIEBFbWFpbDogIHRlYWNoZXJpbmNhZmVAMTYzLmNvbVxuICogQFByb2plY3Q6IG9uZV9zZXJ2ZXJcbiAqIEBGaWxlbmFtZTogd3hSZXF1ZXN0LmpzXG4gKiBATGFzdCBtb2RpZmllZCBieTogICBteW1hY1xuICogQExhc3QgbW9kaWZpZWQgdGltZTogMjAxOC0wMS0zMFQxMDowNDoyNyswODowMFxuICovXG5cbiBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiBpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnO1xuIC8vIGltcG9ydCBtZDUgZnJvbSAnLi9tZDUnO1xuXG5cbiAvLyBjb25zdCBBUElfU0VDUkVUX0tFWSA9ICd3d3cubWFsbC5jeWNsZS5jb20nXG4gLy8gY29uc3QgVElNRVNUQU1QID0gdXRpbC5nZXRDdXJyZW50VGltZSgpXG4gLy8gY29uc3QgU0lHTiA9IG1kNS5oZXhfbWQ1KChUSU1FU1RBTVAgKyBBUElfU0VDUkVUX0tFWSkudG9Mb3dlckNhc2UoKSlcblxuIGNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jIChwYXJhbXMgPSB7fSwgdXJsKSA9PiB7XG5cbiAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgICAgaWNvbjogJ2xvYWRpbmcnXG4gICAgIH0pO1xuICAgICAvLyBjb25zb2xlLmxvZygna29uZyBkZT86ICcgKyBKU09OLnN0cmluZ2lmeShwYXJhbXMucXVlcnkpKVxuICAgICB2YXIgZGF0YSA9IHBhcmFtcy5xdWVyeSB8fCB7fTtcbiAgICAgLy8gZGF0YS5zaWduID0gU0lHTjtcbiAgICAgLy8gZGF0YS50aW1lID0gVElNRVNUQU1QO1xuICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICB9KS50aGVuKGZ1bmN0aW9uKGVyciwgcmVzcG9uZCl7XG4gICAgICAgaWYoZXJyKSB7XG4gICAgICAgICByZXR1cm4gZXJyXG4gICAgICAgfVxuICAgICAgIHJldHVybiByZXNwb25kO1xuICAgICB9KTtcbiAgICAgd2VweS5oaWRlVG9hc3QoKTtcbiAgICAgcmV0dXJuIHJlcztcbiB9O1xuXG5cbiBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgd3hSZXF1ZXN0XG4gfVxuIl19