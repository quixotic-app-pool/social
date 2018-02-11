/**
 * @Author: MichaelChen <mymac>
 * @Date:   2018-01-30T10:02:42+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: util.js
 * @Last modified by:   mymac
 * @Last modified time: 2018-02-11T20:40:42+08:00
 */
  function age (birthDate) {
    var currentTime = new Date().toISOString()
    var customRegExp = /(\d{4})\-(\d{2})\-(\d{2})/
    var date1 = customRegExp.exec(currentTime)
    var date2 = customRegExp.exec(birthDate)
    return (date1[1] - date2[1]) - (date1[2] < date1[2] ? 1 : 0)
  }
  function constellation(birthDate) {
    var month, date, value
    var customRegExp = /(\d{4})\-(\d{2})\-(\d{2})/
    var res = customRegExp.exec(birthDate)
    month = res[2]
    date = res[3]
    if (month == 1 && date >=20 || month == 2 && date <=18) {value = "水瓶座";}
    if (month == 1 && date > 31) {value = "huh?";}
    if (month == 2 && date >=19 || month == 3 && date <=20) {value = "双鱼座";}
    if (month == 2 && date > 29) {value = "say what?";}
    if (month == 3 && date >=21 || month == 4 && date <=19) {value = "白羊座";}
    if (month == 3 && date > 31) {value = "ok. whatever.";}
    if (month == 4 && date >=20 || month == 5 && date <=20) {value = "金牛座";}
    if (month == 4 && date > 30) {value = "i'm soooo sorry!";}
    if (month == 5 && date >=21 || month == 6 && date <=21) {value = "双子座";}
    if (month == 5 && date > 31) {value = "umm ... no.";}
    if (month == 6 && date >=22 || month == 7 && date <=22) {value = "巨蟹座";}
    if (month == 6 && date > 30) {value = "sorry.";}
    if (month == 7 && date >=23 || month == 8 && date <=22) {value = "狮子座";}
    if (month == 7 && date > 31) {value = "excuse me?";}
    if (month == 8 && date >=23 || month == 9 && date <=22) {value = "室女座";}
    if (month == 8 && date > 31) {value = "yeah. right.";}
    if (month == 9 && date >=23 || month == 10 && date <=22) {value = "天秤座";}
    if (month == 9 && date > 30) {value = "try again.";}
    if (month == 10 && date >=23 || month == 11 && date <=21) {value = "天蝎座";}
    if (month == 10 && date > 31) {value = "forget it!";}
    if (month == 11 && date >=22 || month == 12 && date <=21) {value = "人马座";}
    if (month == 11 && date > 30) {value = "invalid date";}
    if (month == 12 && date >=22 || month == 1 && date <=19) {value = "摩羯座";}
    if (month == 12 && date > 31) {value = "no way!";}
    // console.log('星座 value: ' + value);
    return value
  }
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
   calcTime: calcTime,
   age: age,
   constellation: constellation
 }
