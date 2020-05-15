// pages/demo1/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    angle: '--',
    directions: [0, 0, 0, 0, 0],
    image: '/images/1.png'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //指南针描画
  drawCompass: function (direction) {
    console.log("开始绘画")
    var center_x = 150
    var center_y = 150
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('compassCanvas')
    //根据角度旋转坐标系
    context.translate(center_x, center_y);
    context.rotate(-direction / 180 * Math.PI);
    context.translate(-center_x, -center_y);
    //描画方向转盘
    context.drawImage('/images/1.png', 0, 0, center_x * 2, center_y * 2)
    //恢复坐标系
    context.translate(center_x, center_y);
    context.rotate(direction / 180 * Math.PI);
    context.translate(-center_x, -center_y);
    //描画指针
    context.beginPath()
    context.setLineWidth(5)
    context.setStrokeStyle('red')
    context.moveTo(140, 112)
    context.lineTo(150, 60)
    context.lineTo(160, 112)
    context.closePath()
    context.stroke()
    context.draw()
    console.log("绘画结束")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听加载")
    var that = this;
    wx.onCompassChange(function (res) {
      console.log("函数开始")
      //在数组尾部添加新数据
      that.data.directions.push(res.direction);
      if (that.data.directions.length > 5) {
        //从数组头部删除一个数据
        that.data.directions.shift();
      }
      //数组元素求和
      var total = that.data.directions.reduce(function (prev, v) { return prev + v })
      console.log("求和数组的值" + total)
      //求平均值
      var average = total / that.data.directions.length
      that.drawCompass(average);
      //保留 1 位小数
      var direction = average.toFixed(1) + '°';
      that.setData({ angle: direction })
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})