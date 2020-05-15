// pages/todoList/toduList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 1,
      name: '任务1',
      status: 1
    }, {
      id: 2,
      name: '任务2',
      status: 1
    }, {
      id: 3,
      name: '任务3',
      status: 1
    }, {
      id: 4,
      name: '任务4',
      status: 0
    }],
    addText: '',

  },


  setInput: function (e) {
    this.setData({
      addText: e.detail.value
    })
  },
  addTodoHide: function () {
    this.setData({
      addShow: false, // 控制添加输入面板隐藏
      focus: false, // 失去焦点
      addText: '' // 清空值
    })
  },
  addTodo: function () {
    // 检查有没有输入
    if (!this.data.addText.trim()) {
      return
    }
    var temp = this.data.list // 取出list
    var addT = {
      id: new Date().getTime(), // 取当前时间
      name: this.data.addText,
      status: 1
    }
    temp.push(addT) // 添加新的todo
    this.showCur(temp)//更新list
    this.addTodoHide()
    wx.setStorage({
      key: "list",
      data: temp
    })
    wx.showToast({ // weui toast组件
      title: '添加成功!',
      icon: 'success',
      duration: 1000
    });
  },
  changeStatus: function (e) {
    var _this = this
    var item = e.currentTarget.dataset.id
    console.log(e.currentTarget.dataset.xu)
    var temp = this.data.list
    temp.forEach(el => {
      if (el.id === item) {
        if (el.status === 1) {
          el.status = 0
          _this.showCur(temp)
          wx.setStorage({
            key: "list",
            data: temp
          })
          wx.showToast({
            title: '已完成',
            icon: 'success',
            duration: 2000
          });
        } else {
          wx.showModal({
            title: '警告',
            content: '该任务已完成，确定重新开始任务？',
            confirmText: "确定",
            cancelText: "取消",
            success: function (res) {
              if (res.confirm) {
                el.status = 1
                _this.showCur(temp)
                wx.setStorage({
                  key: "list",
                  data: temp
                })
              }
            }
          })
        }
      }
    })
  },
  showCur: function (data) {
    this.setData({
      list: data,
    })
  },

})