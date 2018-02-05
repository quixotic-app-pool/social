/**
 * @Author: MichaelChen <mymac>
 * @Date:   2018-01-30T10:03:23+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: api.js
 * @Last modified by:   mymac
 * @Last modified time: 2018-01-30T10:17:50+08:00
 */
 import {
   wxRequest
 } from '../utils/wxRequest';

 let env = "-test" //-dev 或者 -test
 // production
 // const host = ?
 // development
 const host = 'http://127.0.0.1:9000'
 // const host = 'https://www.takeiteasydude.com'


 //wechat
 const wechatActivity = (params) => wxRequest(params, host + "/api/wechatactivity");

 // NOTIFICATION
 const fetchNotificationNum = (params) => wxRequest(params, host + "/api/fetchnotificationnum");
 const fetchNotificationList = (params) => wxRequest(params, host + "/api/fetchnotificationlist");
 const updateNotification = (params) => wxRequest(params, host + "/api/updatenotification");
 const enOrDisableNotification = (params) => wxRequest(params, host + "/api/enordisablenotification");

 // Question
 // fetch, update by filter or not; like/featured/bookmark categorized ones
 const fetchQuestionList = (params) => wxRequest(params, host + "/api/fetchquestionlist");
 const fetchQuestion = (params) => wxRequest(params, host + "/api/fetchquestion");
 const postQuestion = (params) => wxRequest(params, host + "/api/postquestion");
 const editQuestion = (params) => wxRequest(params, host + "/api/editquestion");
 const featurecloseQuestion = (params) => wxRequest(params, host + "/api/featureclose");
 const delQuestion = (params) => wxRequest(params, host + "/api/delquestion");

 const answer = (params) => wxRequest(params, host + "/api/answer");
 const like = (params) => wxRequest(params, host + "/api/like");
 const bookmark = (params) => wxRequest(params, host + "/api/bookmark");
 const report = (params) => wxRequest(params, host + "/api/report");

 //user
 const userInfo = (params) => wxRequest(params, host + "/api/user");

 module.exports = {
   //wechatActivity
   wechatActivity,
   //NOTIFICATION
   fetchNotificationNum,
   fetchNotificationList,
   updateNotification,
   enOrDisableNotification,
   //question
   fetchQuestionList,
   fetchQuestion,
   postQuestion,
   editQuestion,
   featurecloseQuestion,
   delQuestion,
   answer,
   like,
   bookmark,
   report,
   //USER
   userInfo
 }
