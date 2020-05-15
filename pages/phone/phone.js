// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

     name:'许源',
     age:'20'
         
  },
  
buttonListener: function(){
  var that= this
  wx.navigateTo({
    url: '/pages/phone1/phone1?nameData='+that.data.name +'&ageData='+that.data.age
  })
}
})
 