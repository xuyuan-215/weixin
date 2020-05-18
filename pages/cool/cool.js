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
  toBuy:function(){
    wx.navigateTo({
      url: '../buy/buy',
    })
  },
  toCha: function () {
    wx.navigateTo({
      url: '../cha/cha',
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
  
  toSum: function () {
    wx.navigateTo({
      url: '../sum/sum',
    })
  },
  //汽车页面跳转
  toPhone: function () {
    wx.navigateTo({
      url: '../phone/phone',
    })
  }
})
  