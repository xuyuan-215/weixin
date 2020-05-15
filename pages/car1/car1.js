
Page({
  data: {
    showTitle: '', //详情页显示标题；
    showImg: '', //详情页显示图片；
    showDesc: '', //详情页显示描述；
    productsList: [
      { title: '我是兰博基尼', img: '/images/tabbar/l.png', desc: '产品1非常好' },
      { title: '我是迈凯伦', img: '/images/tabbar/m.png', desc: '产品2非常好' },
      { title: '我是保时捷', img: '/images/tabbar/b.png', desc: '产品3非常好' },
      { title: '我是法拉利', img: '/images/tabbar/f.png', desc: '产品4非常好' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goodsId = options.goodsId;
    this.setData({
      showTitle: this.data.productsList[goodsId].title,
      showImg: this.data.productsList[goodsId].img,
      showDesc: this.data.productsList[goodsId].desc,
    });
  }
})
