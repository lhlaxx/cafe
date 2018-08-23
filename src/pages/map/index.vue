<template>
  <div class="container" >
    <map id="map"  scale="14" :latitude="latitude" :longitude="longitude" :markers="markers"  @markertap="markertap" @ show-location>
      <cover-view class="control" @click="moveToLocation">
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
      }],
      controls: [{
        id: 1,
        iconPath: "/static/img/yuandian.png",
        position: {
          left: 7,
          top: 610 - 50,
          width: 30,
          height: 30
        },
        clickable: true
      }]
    }
  },
  watch: {
    latitude: function(val) {
      this.latitude=val
    },
    longitude: function(val) {
      this.longitude=val
    }
  },
    created() {
      this.mapCtx = wx.createMapContext('map')
      console.log(this.mapCtx)
      let _this = this
      wx.getLocation({
        type: "gcj02",
        success: function(res) {
          _this.markers[0].latitude = _this.latitude = res.latitude
          _this.markers[0].longitude = _this.longitude = res.longitude
          console.log(_this.markers[0].latitude)
        }
      })
    },
    methods: {
      moveToLocation: function () {
        this.mapCtx.moveToLocation()
      },
      markertap(e) {
        console.log(e.mp)
      },
      controltap(e) {
        console.log(e)

        let _this = this
        wx.getLocation({
          type: "gcj02",
          success: function(res) {
            console.log(wx.createMapContext('', this))
            _this.markers[0].latitude = _this.latitude = res.latitude
            _this.markers[0].longitude = _this.longitude = res.longitude
            console.log(_this.markers[0].latitude, _this.latitude)
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
      height:100%;
      position:relative;
    }
  }
  .control{
    position: absolute;
    top:93%;
    left:3%;
  }
  .img{
    width:51rpx;
    height:51rpx;
}
</style>
