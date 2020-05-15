
Page({
  data: {
  },
  //请求数据
  send: function () {
    var that = this
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/1764796',
      header: {
        'Content-Type': 'application/xml',  //这种方式可以
      },
      success: function (res) {
        // console.log(res.data)
        console.log(res.data)
        that.setData({
          list: res.data.photos,
          //res代表success函数的事件对，data是固定的，list是数组
        })
      }
    })
  },
})