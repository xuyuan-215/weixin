// pages/cool/cool.js
var app=getApp()
Page({
data:{
  motto:'Hello World',
  userInfo: {}
},
// 主页跳转
changeToTest:function(){
  wx.navigateTo({
    url: '../index/index',
  })
},
// 水果界面跳转
  toFood:function(){
    wx.navigateTo({
      url: '../food/food',
    })
  },
  //汽车页面跳转
  toCar: function () {
    wx.navigateTo({
      url: '../car/car',
    })
  },
  toPlease: function () {
    wx.navigateTo({
      url: '../please/please',
    })
  },
  //汽车页面跳转
  toPhone: function () {
    wx.navigateTo({
      url: '../phone/phone',
    })
  }
})
  