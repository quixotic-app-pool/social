'use strict';

var _wxRequest = require('./../utils/wxRequest.js');

var env = "-test"; //-dev 或者 -test
// production
// const host = ?
// development
/**
 * @Author: MichaelChen <mymac>
 * @Date:   2018-01-30T10:03:23+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: api.js
 * @Last modified by:   mymac
 * @Last modified time: 2018-02-13T14:39:09+08:00
 */
var host = 'http://127.0.0.1:8000';
// const host = 'https://www.takeiteasydude.com'


//wechat
var wechatActivity = function wechatActivity(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/wechatactivity");
};

// NOTIFICATION
var fetchNotificationNum = function fetchNotificationNum(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/fetchnotificationnum");
};
var fetchNotificationList = function fetchNotificationList(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/fetchnotificationlist");
};
var updateNotification = function updateNotification(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/updatenotification");
};

var profileList = function profileList(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/profilelist");
};
var profile = function profile(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/profile");
};
var updateProfile = function updateProfile(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/updateprofile");
};

var fetchPostList = function fetchPostList(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/fetchpostlist");
};
var fetchPost = function fetchPost(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/fetchpost");
};
var newPost = function newPost(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/newpost");
};
var delPost = function delPost(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/delpost");
};

var activityList = function activityList(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/activitylist");
};

var commentList = function commentList(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/commentlist");
};
var comment = function comment(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/comment");
};
var like = function like(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/like");
};
var report = function report(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/report");
};

//user
var unsubscribe = function unsubscribe(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/unsubscribe");
};
var userInfo = function userInfo(params) {
  return (0, _wxRequest.wxRequest)(params, host + "/api2/user");
};

module.exports = {
  //wechatActivity
  wechatActivity: wechatActivity,
  //NOTIFICATION
  fetchNotificationNum: fetchNotificationNum,
  fetchNotificationList: fetchNotificationList,
  updateNotification: updateNotification,
  //memberlist
  profileList: profileList,
  updateProfile: updateProfile,
  profile: profile,
  //post
  fetchPostList: fetchPostList,
  fetchPost: fetchPost,
  newPost: newPost,
  delPost: delPost,
  //activity
  activityList: activityList,
  //comment
  commentList: commentList,
  comment: comment,
  like: like,
  report: report,
  //user
  userInfo: userInfo,
  unsubscribe: unsubscribe
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0Iiwid2VjaGF0QWN0aXZpdHkiLCJwYXJhbXMiLCJmZXRjaE5vdGlmaWNhdGlvbk51bSIsImZldGNoTm90aWZpY2F0aW9uTGlzdCIsInVwZGF0ZU5vdGlmaWNhdGlvbiIsInByb2ZpbGVMaXN0IiwicHJvZmlsZSIsInVwZGF0ZVByb2ZpbGUiLCJmZXRjaFBvc3RMaXN0IiwiZmV0Y2hQb3N0IiwibmV3UG9zdCIsImRlbFBvc3QiLCJhY3Rpdml0eUxpc3QiLCJjb21tZW50TGlzdCIsImNvbW1lbnQiLCJsaWtlIiwicmVwb3J0IiwidW5zdWJzY3JpYmUiLCJ1c2VySW5mbyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBU0M7O0FBSUEsSUFBSUEsTUFBTSxPQUFWLEMsQ0FBa0I7QUFDbEI7QUFDQTtBQUNBO0FBaEJEOzs7Ozs7Ozs7QUFpQkMsSUFBTUMsT0FBTyx1QkFBYjtBQUNBOzs7QUFHQTtBQUNBLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRDtBQUFBLFNBQVksMEJBQVVBLE1BQVYsRUFBa0JGLE9BQU8sc0JBQXpCLENBQVo7QUFBQSxDQUF2Qjs7QUFFQTtBQUNBLElBQU1HLHVCQUF1QixTQUF2QkEsb0JBQXVCLENBQUNELE1BQUQ7QUFBQSxTQUFZLDBCQUFVQSxNQUFWLEVBQWtCRixPQUFPLDRCQUF6QixDQUFaO0FBQUEsQ0FBN0I7QUFDQSxJQUFNSSx3QkFBd0IsU0FBeEJBLHFCQUF3QixDQUFDRixNQUFEO0FBQUEsU0FBWSwwQkFBVUEsTUFBVixFQUFrQkYsT0FBTyw2QkFBekIsQ0FBWjtBQUFBLENBQTlCO0FBQ0EsSUFBTUsscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0gsTUFBRDtBQUFBLFNBQVksMEJBQVVBLE1BQVYsRUFBa0JGLE9BQU8sMEJBQXpCLENBQVo7QUFBQSxDQUEzQjs7QUFFQSxJQUFNTSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0osTUFBRDtBQUFBLFNBQVksMEJBQVVBLE1BQVYsRUFBa0JGLE9BQU8sbUJBQXpCLENBQVo7QUFBQSxDQUFwQjtBQUNBLElBQU1PLFVBQVUsU0FBVkEsT0FBVSxDQUFDTCxNQUFEO0FBQUEsU0FBWSwwQkFBVUEsTUFBVixFQUFrQkYsT0FBTyxlQUF6QixDQUFaO0FBQUEsQ0FBaEI7QUFDQSxJQUFNUSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNOLE1BQUQ7QUFBQSxTQUFZLDBCQUFVQSxNQUFWLEVBQWtCRixPQUFPLHFCQUF6QixDQUFaO0FBQUEsQ0FBdEI7O0FBRUEsSUFBTVMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDUCxNQUFEO0FBQUEsU0FBWSwwQkFBVUEsTUFBVixFQUFrQkYsT0FBTyxxQkFBekIsQ0FBWjtBQUFBLENBQXRCO0FBQ0EsSUFBTVUsWUFBWSxTQUFaQSxTQUFZLENBQUNSLE1BQUQ7QUFBQSxTQUFZLDBCQUFVQSxNQUFWLEVBQWtCRixPQUFPLGlCQUF6QixDQUFaO0FBQUEsQ0FBbEI7QUFDQSxJQUFNVyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ1QsTUFBRDtBQUFBLFNBQVksMEJBQVVBLE1BQVYsRUFBa0JGLE9BQU8sZUFBekIsQ0FBWjtBQUFBLENBQWhCO0FBQ0EsSUFBTVksVUFBVSxTQUFWQSxPQUFVLENBQUNWLE1BQUQ7QUFBQSxTQUFZLDBCQUFVQSxNQUFWLEVBQWtCRixPQUFPLGVBQXpCLENBQVo7QUFBQSxDQUFoQjs7QUFFQSxJQUFNYSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ1gsTUFBRDtBQUFBLFNBQVksMEJBQVVBLE1BQVYsRUFBa0JGLE9BQU8sb0JBQXpCLENBQVo7QUFBQSxDQUFyQjs7QUFFQSxJQUFNYyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ1osTUFBRDtBQUFBLFNBQVksMEJBQVVBLE1BQVYsRUFBa0JGLE9BQU8sbUJBQXpCLENBQVo7QUFBQSxDQUFwQjtBQUNBLElBQU1lLFVBQVUsU0FBVkEsT0FBVSxDQUFDYixNQUFEO0FBQUEsU0FBWSwwQkFBVUEsTUFBVixFQUFrQkYsT0FBTyxlQUF6QixDQUFaO0FBQUEsQ0FBaEI7QUFDQSxJQUFNZ0IsT0FBTyxTQUFQQSxJQUFPLENBQUNkLE1BQUQ7QUFBQSxTQUFZLDBCQUFVQSxNQUFWLEVBQWtCRixPQUFPLFlBQXpCLENBQVo7QUFBQSxDQUFiO0FBQ0EsSUFBTWlCLFNBQVMsU0FBVEEsTUFBUyxDQUFDZixNQUFEO0FBQUEsU0FBWSwwQkFBVUEsTUFBVixFQUFrQkYsT0FBTyxjQUF6QixDQUFaO0FBQUEsQ0FBZjs7QUFFQTtBQUNBLElBQU1rQixjQUFjLFNBQWRBLFdBQWMsQ0FBQ2hCLE1BQUQ7QUFBQSxTQUFZLDBCQUFVQSxNQUFWLEVBQWtCRixPQUFPLG1CQUF6QixDQUFaO0FBQUEsQ0FBcEI7QUFDQSxJQUFNbUIsV0FBVyxTQUFYQSxRQUFXLENBQUNqQixNQUFEO0FBQUEsU0FBWSwwQkFBVUEsTUFBVixFQUFrQkYsT0FBTyxZQUF6QixDQUFaO0FBQUEsQ0FBakI7O0FBR0FvQixPQUFPQyxPQUFQLEdBQWlCO0FBQ2Y7QUFDQXBCLGdDQUZlO0FBR2Y7QUFDQUUsNENBSmU7QUFLZkMsOENBTGU7QUFNZkMsd0NBTmU7QUFPZjtBQUNBQywwQkFSZTtBQVNmRSw4QkFUZTtBQVVmRCxrQkFWZTtBQVdmO0FBQ0FFLDhCQVplO0FBYWZDLHNCQWJlO0FBY2ZDLGtCQWRlO0FBZWZDLGtCQWZlO0FBZ0JmO0FBQ0FDLDRCQWpCZTtBQWtCZjtBQUNBQywwQkFuQmU7QUFvQmZDLGtCQXBCZTtBQXFCZkMsWUFyQmU7QUFzQmZDLGdCQXRCZTtBQXVCZjtBQUNBRSxvQkF4QmU7QUF5QmZEO0FBekJlLENBQWpCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQEF1dGhvcjogTWljaGFlbENoZW4gPG15bWFjPlxuICogQERhdGU6ICAgMjAxOC0wMS0zMFQxMDowMzoyMyswODowMFxuICogQEVtYWlsOiAgdGVhY2hlcmluY2FmZUAxNjMuY29tXG4gKiBAUHJvamVjdDogb25lX3NlcnZlclxuICogQEZpbGVuYW1lOiBhcGkuanNcbiAqIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIG15bWFjXG4gKiBATGFzdCBtb2RpZmllZCB0aW1lOiAyMDE4LTAyLTEzVDE0OjM5OjA5KzA4OjAwXG4gKi9cbiBpbXBvcnQge1xuICAgd3hSZXF1ZXN0XG4gfSBmcm9tICcuLi91dGlscy93eFJlcXVlc3QnO1xuXG4gbGV0IGVudiA9IFwiLXRlc3RcIiAvLy1kZXYg5oiW6ICFIC10ZXN0XG4gLy8gcHJvZHVjdGlvblxuIC8vIGNvbnN0IGhvc3QgPSA/XG4gLy8gZGV2ZWxvcG1lbnRcbiBjb25zdCBob3N0ID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMCdcbiAvLyBjb25zdCBob3N0ID0gJ2h0dHBzOi8vd3d3LnRha2VpdGVhc3lkdWRlLmNvbSdcblxuXG4gLy93ZWNoYXRcbiBjb25zdCB3ZWNoYXRBY3Rpdml0eSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyBcIi9hcGkyL3dlY2hhdGFjdGl2aXR5XCIpO1xuXG4gLy8gTk9USUZJQ0FUSU9OXG4gY29uc3QgZmV0Y2hOb3RpZmljYXRpb25OdW0gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgXCIvYXBpMi9mZXRjaG5vdGlmaWNhdGlvbm51bVwiKTtcbiBjb25zdCBmZXRjaE5vdGlmaWNhdGlvbkxpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgXCIvYXBpMi9mZXRjaG5vdGlmaWNhdGlvbmxpc3RcIik7XG4gY29uc3QgdXBkYXRlTm90aWZpY2F0aW9uID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArIFwiL2FwaTIvdXBkYXRlbm90aWZpY2F0aW9uXCIpO1xuXG4gY29uc3QgcHJvZmlsZUxpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgXCIvYXBpMi9wcm9maWxlbGlzdFwiKTtcbiBjb25zdCBwcm9maWxlID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArIFwiL2FwaTIvcHJvZmlsZVwiKTtcbiBjb25zdCB1cGRhdGVQcm9maWxlID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArIFwiL2FwaTIvdXBkYXRlcHJvZmlsZVwiKTtcblxuIGNvbnN0IGZldGNoUG9zdExpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgXCIvYXBpMi9mZXRjaHBvc3RsaXN0XCIpO1xuIGNvbnN0IGZldGNoUG9zdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyBcIi9hcGkyL2ZldGNocG9zdFwiKTtcbiBjb25zdCBuZXdQb3N0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArIFwiL2FwaTIvbmV3cG9zdFwiKTtcbiBjb25zdCBkZWxQb3N0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArIFwiL2FwaTIvZGVscG9zdFwiKTtcblxuIGNvbnN0IGFjdGl2aXR5TGlzdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyBcIi9hcGkyL2FjdGl2aXR5bGlzdFwiKTtcblxuIGNvbnN0IGNvbW1lbnRMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArIFwiL2FwaTIvY29tbWVudGxpc3RcIik7XG4gY29uc3QgY29tbWVudCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyBcIi9hcGkyL2NvbW1lbnRcIik7XG4gY29uc3QgbGlrZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyBcIi9hcGkyL2xpa2VcIik7XG4gY29uc3QgcmVwb3J0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArIFwiL2FwaTIvcmVwb3J0XCIpO1xuXG4gLy91c2VyXG4gY29uc3QgdW5zdWJzY3JpYmUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBob3N0ICsgXCIvYXBpMi91bnN1YnNjcmliZVwiKTtcbiBjb25zdCB1c2VySW5mbyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGhvc3QgKyBcIi9hcGkyL3VzZXJcIik7XG5cblxuIG1vZHVsZS5leHBvcnRzID0ge1xuICAgLy93ZWNoYXRBY3Rpdml0eVxuICAgd2VjaGF0QWN0aXZpdHksXG4gICAvL05PVElGSUNBVElPTlxuICAgZmV0Y2hOb3RpZmljYXRpb25OdW0sXG4gICBmZXRjaE5vdGlmaWNhdGlvbkxpc3QsXG4gICB1cGRhdGVOb3RpZmljYXRpb24sXG4gICAvL21lbWJlcmxpc3RcbiAgIHByb2ZpbGVMaXN0LFxuICAgdXBkYXRlUHJvZmlsZSxcbiAgIHByb2ZpbGUsXG4gICAvL3Bvc3RcbiAgIGZldGNoUG9zdExpc3QsXG4gICBmZXRjaFBvc3QsXG4gICBuZXdQb3N0LFxuICAgZGVsUG9zdCxcbiAgIC8vYWN0aXZpdHlcbiAgIGFjdGl2aXR5TGlzdCxcbiAgIC8vY29tbWVudFxuICAgY29tbWVudExpc3QsXG4gICBjb21tZW50LFxuICAgbGlrZSxcbiAgIHJlcG9ydCxcbiAgIC8vdXNlclxuICAgdXNlckluZm8sXG4gICB1bnN1YnNjcmliZVxuIH1cbiJdfQ==