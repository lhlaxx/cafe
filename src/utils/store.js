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
    }]
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
    }
  }
    })


export default store
