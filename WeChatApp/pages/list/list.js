//获取应用实例

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
        name: 'Luckyfy',
        zero: 0,
        obj1:{
            a:1,
            b:2
        },
        obj2:{
            c:3,
            d:4
        }
    },
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



})