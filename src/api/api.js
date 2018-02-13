/**
 * @Author: MichaelChen <mymac>
 * @Date:   2018-01-30T10:03:23+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: api.js
 * @Last modified by:   mymac
 * @Last modified time: 2018-02-13T14:39:09+08:00
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
 const wechatActivity = (params) => wxRequest(params, host + "/api2/wechatactivity");

 // NOTIFICATION
 const fetchNotificationNum = (params) => wxRequest(params, host + "/api2/fetchnotificationnum");
 const fetchNotificationList = (params) => wxRequest(params, host + "/api2/fetchnotificationlist");
 const updateNotification = (params) => wxRequest(params, host + "/api2/updatenotification");

 const profileList = (params) => wxRequest(params, host + "/api2/profilelist");
 const profile = (params) => wxRequest(params, host + "/api2/profile");
 const updateProfile = (params) => wxRequest(params, host + "/api2/updateprofile");

 const fetchPostList = (params) => wxRequest(params, host + "/api2/fetchpostlist");
 const fetchPost = (params) => wxRequest(params, host + "/api2/fetchpost");
 const newPost = (params) => wxRequest(params, host + "/api2/newpost");
 const delPost = (params) => wxRequest(params, host + "/api2/delpost");

 const activityList = (params) => wxRequest(params, host + "/api2/activitylist");

 const commentList = (params) => wxRequest(params, host + "/api2/commentlist");
 const comment = (params) => wxRequest(params, host + "/api2/comment");
 const like = (params) => wxRequest(params, host + "/api2/like");
 const report = (params) => wxRequest(params, host + "/api2/report");

 //user
 const unsubscribe = (params) => wxRequest(params, host + "/api2/unsubscribe");
 const userInfo = (params) => wxRequest(params, host + "/api2/user");


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
   unsubscribe
 }
