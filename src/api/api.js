/**
 * @Author: MichaelChen <mymac>
 * @Date:   2018-01-30T10:03:23+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: api.js
 * @Last modified by:   mymac
 * @Last modified time: 2018-02-11T11:04:53+08:00
 */
 import {
   wxRequest
 } from '../utils/wxRequest';

 let env = "-test" //-dev 或者 -test
 // production
 // const host = ?
 // development
 const host = 'http://127.0.0.1:8000'
 // const host = 'https://www.takeiteasydude.com'


 //wechat
 const wechatActivity = (params) => wxRequest(params, host + "/api/wechatactivity");

 // NOTIFICATION
 const fetchNotificationNum = (params) => wxRequest(params, host + "/api/fetchnotificationnum");
 const fetchNotificationList = (params) => wxRequest(params, host + "/api/fetchnotificationlist");
 const updateNotification = (params) => wxRequest(params, host + "/api/updatenotification");

 const profileList = (params) => wxRequest(params, host + "/api/profilelist");
 const profile = (params) => wxRequest(params, host + "/api/profile");
 const updateProfile = (params) => wxRequest(params, host + "/api/updateprofile");

 const fetchPostList = (params) => wxRequest(params, host + "/api/fetchpostlist");
 const fetchPost = (params) => wxRequest(params, host + "/api/fetchpost");
 const newPost = (params) => wxRequest(params, host + "/api/newpost");
 const delPost = (params) => wxRequest(params, host + "/api/delpost");

 const activityList = (params) => wxRequest(params, host + "/api/activitylist");

 const commentList = (params) => wxRequest(params, host + "/api/commentlist");
 const comment = (params) => wxRequest(params, host + "/api/comment");
 const like = (params) => wxRequest(params, host + "/api/like");
 const report = (params) => wxRequest(params, host + "/api/report");

 //user
 const subscribe = (params) => wxRequest(params, host + "/api/subscribe");
 const userInfo = (params) => wxRequest(params, host + "/api/user");


 module.exports = {
   //wechatActivity
   wechatActivity,
   //NOTIFICATION
   fetchNotificationNum,
   fetchNotificationList,
   updateNotification,
   //memberlist
   profileList,
   updateProfile,
   profile,
   //post
   fetchPostList,
   fetchPost,
   newPost,
   delPost,
   //activity
   activityList,
   //comment
   commentList,
   comment,
   like,
   report,
   //user
   userInfo,
   subscribe
 }
