import { $attr } from '../../utils/updow';//引入utils/updow.js 封装的方法
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    implelist: [
      {
        name: '',
        img: '',
        sun: ''
      },
      {
        name: '',
        img: '',
        sun: ''
      }
    ],
    reminderData: [
      {
        img: "../../images/reminder2.png",
        name: '白胎仓库:',
        ico: [
          { topname: '已有白胎', input: '99999' }
        ],
        out: 0
      }, {
        img: "../../images/reminder3.png",
        name: '采购:',
        ico: [
          { topname: '已有白胎', input: '99999' },
          { topname: '采购周期', input: '99999' },
          { topname: '采购价', input: '99999' }
        ],
        out: 1
      }, {
        img: "../../images/reminder4.png",
        name: '画:',
        ico: ['所需工期', '协议价'],
        ico: [
          { topname: '所需工期', input: '99999' },
          { topname: '协议价', input: '99999' }
        ],
        out: 1
      }, {
        img: "../../images/reminder1.png",
        name: '填:',
        ico: [
          { topname: '', input: '99999' },
          { topname: '', input: '99999' }
        ],
        out: 1
      }, {
        img: "../../images/reminder5.png",
        name: '半成品:',
        ico: [
          { topname: '', input: '99999' }
        ],
        out: 0
      }, {
        img: "../../images/reminder6.png",
        name: '落款:',
        ico: [
          { topname: '', input: '99999' },
          { topname: '', input: '99999' }
        ],
        out: 1
      }, {
        img: "../../images/reminder7.png",
        name: '烧制:',
        ico: [
          { topname: '', input: '99999' },
          { topname: '', input: '99999' }
        ],
        out: 1
      }
    ]

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
  // 回到首页
  goindex() {
    wx.navigateBack({
      url: '../index/index'
    })
  },
  // 点击上传图片
  goimg() {
    wx.chooseImage({
      success: function (res) {

      },
    })
  },
  // 点击加减
  addplus(e) {
    console.log(e)
    let implelist = this.data.implelist
    let muid = Number(e.currentTarget.dataset.index)
    let item = {
      name: '',
      img: '',
      sun: ''
    }
    if (e.currentTarget.dataset.inf == '1') {
      implelist.push(item)
    } else {
      if (implelist.length > 2) {
        console.log(muid)
        let listoue = implelist.splice(muid, 1)
        this.setData({
          implelist: listoue
        })
      } else {
        wx.showToast({
          title: '只有最后一个了！！',
          icon: 'none',
          duration: 1000
        })
      }
    }
    this.setData({
      implelist
    })
  },
  // inptu双绑定名称
  adInputChange(e) {
    let i = e.currentTarget.dataset.index;
    let text = e.detail.value;
    let onsit = this.data.implelist;
    onsit[i].name = text
    this.setData({
      implelist: onsit
    })
  }
})