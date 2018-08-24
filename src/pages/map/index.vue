<template>
  <div class="container" >
    <map id="map"  scale="14" :latitude="latitude" :longitude="longitude" :markers="markers"   show-location>
      <cover-view class="control" @click="controltap">
        <cover-image class="img" src="/static/img/yuandian.png" />
      </cover-view>
    </map>
  </div>
</template>

<script>
export  default{
  data() {
    return{
      latitude:"",
      longitude:"",
      markers: [{
        iconPath: "/static/img/map-marker-radius.png",
        id: 0,
        latitude:"",
        longitude:"",
        width: 30,
        height: 30
      }]
    }
  },
  watch: {

  },
    created() {



    },
  mounted(){
    let _this = this
    wx.getLocation({
      type: "gcj02",
      success: function(res) {
        _this.markers[0].latitude = _this.latitude = res.latitude
        _this.markers[0].longitude = _this.longitude = res.longitude

      }
    })
  },
    methods: {
      choose(){
        wx.chooseLocation({
          success:function(res){

            console.log(res)
          },
          fail:function(err){
            console.log(err)
          }
        })
      },
      markertap(e) {
        console.log(111,e.mp)
      },
      controltap(e) {
        console.log(e.mp)

        let _this = this
        wx.getLocation({
          type: "gcj02",
          success: function(res) {
            // markers: [{
            //   iconPath: "/static/img/map-marker-radius.png",
            //   id: 0,
            //   latitude:res.latitude,
            //   longitude:res.longitude,
            //   width: 30,
            //   height: 30
            // }],
             _this.latitude = res.latitude
             _this.longitude = res.longitude
          console.log(_this.markers[0].longitude,_this.longitude,res.longitude)
          }
        })
      },
      go() {
        wx.switchTab({
          url: "../index/main",
          success: res => {
            console.log(res)
          },
          fail: err => {
            console.log(err)
          }
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container{
    map{
      width:100%;
      height:60%;
      position:relative;
    }
  }
  .control{
    position: absolute;
    top:91%;
    left:3%;
  }
  .img{
    width:51rpx;
    height:51rpx;
}
</style>
