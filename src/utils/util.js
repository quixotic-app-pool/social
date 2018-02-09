/**
 * @Author: MichaelChen <mymac>
 * @Date:   2018-01-30T10:02:42+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: util.js
 * @Last modified by:   mymac
 * @Last modified time: 2018-02-09T14:05:15+08:00
 */
 function getCurrentTime() {
   var keep = '';
   var date = new Date();
   var y = date.getFullYear();
   var m = date.getMonth() + 1;
   m = m < 10 ? '0' + m : m;
   var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
   var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
   var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
   var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
   var rand = Math.round(Math.random() * 899 + 100);
   keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
   return keep; //20160614134947
 }

 function calLevel(p) {
   //points -> level mechanism
   if(p <= 2) {
     return 1
   } else if(p <= 10) {
     return 2
   } else if(p <= 20) {
     return 3
   } else if(p <= 40) {
     return 4
   } else if(p <= 80) {
     return 5
   } else if(p <= 160) {
     return 6
   } else if(p <= 320) {
     return 7
   } else if(p <= 640) {
     return 8
   } else if(p <= 1280) {
     return 9
   } else {
     return 1
   }
 }

 function calcTime(t, l) {
   var lang = l == 'EN'
   var str = '';
   if (t) {
     var createdAt = new Date(t)
     var now = new Date()
     var s = now - createdAt
     if (s < (86400000 * 7)) {
       var day = Math.floor(s / 86400000);
       var hour = Math.floor((s % 86400000) / 3600000);
       var minute = Math.floor((s % 86400000 % 3600000) / 60000);
       var seconds = Math.floor(s % 86400000 % 3600000 % 60000) / 1000;
       if (day > 0) {
         if(lang) {
           if(day > 1) {
             str = day + ' days ago'
           } else {
             str = day + ' day ago'
           }
         } else {
            str = day + "天前";
         }
           return str;
       }
       if (hour > 0) {
         if(lang) {
           if(hour > 1) {
             str = hour + ' hours ago'
           } else {
             str = hour + ' hour ago'
           }
         } else {
           str = hour + "小时前";
         }
           return str;
       }
       if (minute > 0) {
         if(lang) {
           if(minute > 1) {
             str = minute + ' minutes ago'
           } else {
             str = minute + ' minute ago'
           }
         } else {
            str = minute + "分钟前";
         }
           return str;
       }
       if (seconds < 60) {
         if(lang) {
           str = "just now";
         } else {
            str = "刚刚";
         }

           return str;
       }
      } else {
           return t.substring(0, 16);
     }
   } else {
      return str;
   }
 }
 module.exports = {
   getCurrentTime: getCurrentTime,
   calLevel: calLevel,
   calcTime: calcTime
 }
