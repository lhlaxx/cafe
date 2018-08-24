<template>
  <div class="container" >

  </div>
</template>

<script>
  export  default {
    data() {
      return {

      }
    },
    mounted() {
      let _this = this
      wx.chooseLocation({
        success(res) {
          console.log(res)
          _this.markers.push({
            iconPath: "/static/img/map-marker-radius.png", id: "",
            latitude: res.latitude,
            longitude: res.longitude,
            address:res.address,
            width: 30,
            height: 30
          })
          wx.switchTab({url:"../index/main"})
        }
      })
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
