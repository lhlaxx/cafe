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
      {src:"../../../static/img/coffee4.png",name:"哈哈哈哈哈哈哈",price:"38.0",num:0},
      {src:"../../../static/img/coffee1.png",name:"美式绵云",price:"23.0",num:0},
      {src:"../../../static/img/coffee2.png",name:"焦糖玛奇朵",price:"33.0",num:0},
      {src:"../../../static/img/coffee3.png",name:"卡布奇诺",price:"47.0",num:0},
      {src:"../../../static/img/coffee4.png",name:"哈哈哈哈哈哈哈",price:"38.0",num:0},
      {src:"../../../static/img/coffee1.png",name:"美式绵云",price:"23.0",num:0},
      {src:"../../../static/img/coffee2.png",name:"焦糖玛奇朵",price:"33.0",num:0},
      {src:"../../../static/img/coffee3.png",name:"卡布奇诺",price:"47.0",num:0},
      {src:"../../../static/img/coffee4.png",name:"哈哈哈哈哈哈哈",price:"38.0",num:0},
    ],
    carts:[],
    num:0
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
      var i = 0
      if(this.state.carts.length>0){
        for (var i = 0; i < this.state.carts.length; i++){
          if(this.state.carts[i].name != this.state.list[index].name){
           a = 1
          }else{
           a = 0
            i = i
            return a,i
          }
        }
      }else{
        this.state.carts.push(this.state.list[index])
      }
      if(a==0){
        this.state.carts[i].num+1
      }else if(a==1){
        this.state.carts.push(this.state.list[index])
      }
    },
    decrease(state,index){
      this.state.list[index].num --
      this.state.num --
      // var name=this.state.list[index].name
      // var i=0
      // console.log(i)
      // console.log(this.state.carts,name)
      // if(this.state.carts.length>0) {
      //   for (i = 0; i < this.state.carts.length; i++) {
      //     if (this.state.carts[i].name == name) {
      //       i = i
      //       return i
      //     }
      //   }
      // }
      // console.log(i)
      // if(this.state.list[index].num>0){
      //   console.log(i)
      //   this.state.carts[i].num --
      //   console.log(this.state.carts[i].num)
      //   if(this.state.carts[i].num==0){
      //     console.log(i)
      //     console.log(this.state.carts[i].num)
      //     this.state.carts.splice(i,1)
      //   }
      // }

      }

    }

    })


export default store
