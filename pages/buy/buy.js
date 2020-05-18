Page({

  /**
   * 页面的初始数据,定义数值、字符串、数组，相当于int num1=new int;这种样子
   */
  data: {
    num1: 0,
    num2: 0,
    result: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  num1Change: function (e) {
    console.log("从界面获取的第一个数： "+e.detail.value)
    this.setData({
      num1: Number(e.detail.value)
    })
  },
  num2Change: function (e) {
    this.setData({
      num2: Number(e.detail.value)
    })
  },
  compare: function () {
    console.log(this.data.num2)
    var str = '两数相等'
    if (this.data.num1 > this.data.num2) {
      str = '第1个数大'
    } else if (this.data.num2 > this.data.num1) {
      str = '第2个数大'
    }
    this.setData({
      result: str
    })

  }
})