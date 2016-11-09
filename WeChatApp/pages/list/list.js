//获取应用实例

/*
Page({
    data: {
        text:'init data',
        array:[113515125,2,3,4,5],
        object:{
            key: 'hello',
            text: 'int data'
        },
        count: 10000000,
        flag: false,
        a:1,
        b:2,
        c:3,
        d:4,
        name: '秋儿',
        zero: 0,
        obj1:{
            a:1,
            b:2
        },
        obj2:{
            c:3,
            d:4
        },
        item:[{
            index:0,
            msg:'this is a template',
            time:'2016-09-10'
        },
        {
            index:1,
            msg:'this is a template',
            time:'2016-09-11'
        },
        {
            index:2,
            msg:'this is a template',
            time:'2016-09-12'
        },
        {
            index:3,
            msg:'this is a template',
            time:'2016-09-13'
        },
        {
            index:4,
            msg:'this is a template',
            time:'2016-09-14'
        }],
        objectArray: [
        {id: 5, unique: 'unique_5'},
        {id: 4, unique: 'unique_4'},
        {id: 3, unique: 'unique_3'},
        {id: 2, unique: 'unique_2'},
        {id: 1, unique: 'unique_1'},
        {id: 0, unique: 'unique_0'},
        ],
         numberArray: [1, 2, 3, 4]
    },


     switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e){
    this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  }
    onLoad: function() {
        var app = getApp()
        var localValue = 'a'
        app.globalData++
        console.log(getApp.globalData)
    },
    onReady: function() {
    },
    onShow: function() {
    },
    onHide: function() {
    },
    onUnload: function() {
    },
    onPullDownRefresh: function() {
    },
    onReachBottom: function() {
    },
    // viewTap: function() {
    //     console.log('view tap')
    // }
    changeText: function() {
        this.setData({
            text: 'change data'
        })
    },
    add:function(e) {
        this.data.count+1
    }



})*/
/*
Page({
  data: {
    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ],
    numberArray: [1, 2, 3, 4]
  },
  switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = this.data.objectArray.concat([{id: length, unique: 'unique_' + length}])
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e){
    this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  }
})
*/




"use strict"

// const Constant = require('../../constant.js');

function allPrpos(obj) {
    var props = [];
    for (var p in obj) {
        if (typeof(obj[p]) == "function") { //obj[p]();
        } else {
            props.push({ key: p, value: obj[p] });

        }
    }
    return props;
}

Page({
    data: {
        list: [
            {
            index: 0,
            image: "https://rpic.douyucdn.cn/a1611/08/19/16101_161108195205.jpg",
            title: "标题1",
            content: "如果你无法简洁的表达你的想法，那只能说明你还不够了解它。"
            },
             {
            index: 0,
            image: "https://rpic.douyucdn.cn/a1611/08/19/16101_161108195205.jpg",
            title: "标题1",
            content: "如果你无法简洁的表达你的想法，那只能说明你还不够了解它。"
            },
             {
            index: 0,
            image: "https://rpic.douyucdn.cn/a1611/08/19/16101_161108195205.jpg",
            title: "标题1",
            content: "如果你无法简洁的表达你的想法，那只能说明你还不够了解它。"
            },
             {
            index: 0,
            image: "https://rpic.douyucdn.cn/a1611/08/19/16101_161108195205.jpg",
            title: "标题1",
            content: "如果你无法简洁的表达你的想法，那只能说明你还不够了解它。"
            }
            ]

    },
    onLoad: function(options) {
        console.log("room onload");
        // console.log(options);
        let roomid = options.roomid;
        var that = this;
        // wx.request({
        //     url: 'http://open.douyucdn.cn/api/RoomApi/room/16101',
        //     // url: 'http://open.douyucdn.cn/api/RoomApi/room/' + roomid,
        //     data: {},
        //     header: {
        //         'Content-Type': 'application/json'
        //     },
        //     success: function(res) {
        //         console.log("success")
        //         if (res.data.error == 0) { //成功
        //             console.debug("search ok");
        //             let data = res.data.data;
        //             let roominfo = allPrpos(data);
        //             that.setData({ roominfo: roominfo });
        //         } else {}
        //     },

        //     fail: function(err) {
        //         console.log("fail")
        //         console.log(err)
        //     }

        // })
//         wx.request({
//   url: 'http://open.douyucdn.cn/api/RoomApi/room/16101', //仅为示例，并非真实的接口地址
//   data: {
//     //  x: '' ,
//     //  y: ''
//   },
//   header: {
//       'Content-Type': 'application/json'
//   },
//   success: function(res) {
//     console.log(res.data)
//   }
// })

    },

    onReady: function() {
        console.log("onReady");
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
        console.log("onShow");
    },
    onHide: function() {
        // 页面隐藏
        console.log("onHide");
    },
    onUnload: function() {
        // 页面关闭
        console.log("onUnload");
    }
})

