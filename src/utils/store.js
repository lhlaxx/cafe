import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    markers: [{
      iconPath: "/static/img/map-marker-radius.png",
      id: 0,
      latitude: "",
      longitude: "",
      width: 30,
      height: 30,
      address:""
    }],
    list:[
      {src:"../../../static/img/coffee1.png",name:"美式绵云",price:"23.0",num:0},
      {src:"../../../static/img/coffee2.png",name:"焦糖玛奇朵",price:"33.0",num:0},
      {src:"../../../static/img/coffee3.png",name:"卡布奇诺",price:"47.0",num:0},
      {src:"../../../static/img/coffee4.png",name:"蓝山咖啡",price:"38.0",num:0},
      {src:"../../../static/img/coffee5.png",name:"巴西咖啡",price:"48.0",num:0},
      {src:"../../../static/img/coffee6.png",name:"曼特宁咖啡",price:"36.0",num:0},
      {src:"../../../static/img/coffee1.png",name:"美式绵云",price:"23.0",num:0},
      {src:"../../../static/img/coffee2.png",name:"焦糖玛奇朵",price:"33.0",num:0},
      {src:"../../../static/img/coffee3.png",name:"卡布奇诺",price:"47.0",num:0},
      {src:"../../../static/img/coffee4.png",name:"蓝山咖啡",price:"38.0",num:0},
      {src:"../../../static/img/coffee5.png",name:"巴西咖啡",price:"48.0",num:0},
      {src:"../../../static/img/coffee6.png",name:"曼特宁咖啡",price:"36.0",num:0},
      {src:"../../../static/img/coffee7.png",name:"摩卡咖啡",price:"58.0",num:0},
      {src:"../../../static/img/coffee8.png",name:"哥伦比亚咖啡",price:"45.0",num:0},
      {src:"../../../static/img/coffee9.png",name:"可纳咖啡",price:"88.0",num:0},
      {src:"../../../static/img/coffee10.png",name:"爪哇咖啡",price:"28.0",num:0},
      {src:"../../../static/img/coffee11.png",name:"炭烧咖啡",price:"83.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
      {src:"../../../static/img/coffee12.png",name:"拿铁咖啡",price:"69.0",num:0},
    ],
    carts:[],
    num:0,
    gradient:1
  },
  mutations: {
    addAddress(state) {
      let _this = this
      wx.chooseLocation({
        success(res) {
          console.log(res)
          _this.state.markers[0].address = res.address
          console.log(_this.state.markers[0].address)
        }
      })
    },
    increase(state,index){
      this.state.list[index].num++
      this.state.num++
      var a = 0
      var b = 0
      if(this.state.carts.length>0){
        for (var i = 0; i < this.state.carts.length; i++){
          if(this.state.carts[i].name != this.state.list[index].name){
           a = 1
          }else{
           a = 0
            b = i
            return a,b
          }
        }
      }else{
        this.state.carts.push(this.state.list[index])
        this.state.carts[b].num+1
      }
      if(a==0&&this.state.carts.length>0){
        console.log(b,this.state.carts[b])
        this.state.carts[b].num+1
      }else if(a==1){
        this.state.carts.push(this.state.list[index])
      }
    },
    decrease(state,index){
      this.state.num --
      this.state.carts[index].num --
      var name=this.state.carts[index].name
      if(this.state.carts[index].num==0){
        this.state.carts.splice(index,1)
      }
      if(this.state.carts!=""){
        var a
        for (var i = 0; i < this.state.list.length; i++) {
          if (this.state.list[i].name != name) {
            a=null
          }else{
            a=i
            this.state.list[a].num-1
          }
        }
      }
      },
    indexGoods(state,index){
        this.state.gradient=1
    },

    }
})


export default store
