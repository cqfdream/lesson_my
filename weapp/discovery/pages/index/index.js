// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    title:'GTR',
    car:'https://p3.dcarimg.com/img/motor-img/301cc32b1c55076011ec317e5b1818da~2508x0.jpg',
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
   setTimeout(()=>{
     this.setData({
       title:'奔驰C300',
       car:'https://p3.dcarimg.com/img/motor-mis-img/a2f2d1449c5700866b29f8733e608d03~2508x0.jpg',
     })
    },3000)
   },
  
      
    
  
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
