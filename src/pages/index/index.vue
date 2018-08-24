<template>
  <div class="container" >
    <header >
      <div class="search">
        <img src="../../images/search.png" alt="">
        <input type="text" placeholder="搜索店铺" :value="address" @click="addAddress"/>
      </div>
    </header>
    <swiper :indicator-dots="indicatorDots"
            :autoplay="autoplay" :interval="interval" :duration="duration" style="height:500rpx;width:100vw;">
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" height="180"/>
        </swiper-item>
      </block>
    </swiper>
    <section>
      <button @click="go">开始点餐</button>
    </section>

  </div>
</template>

<script>
  import store from "../../utils/store"
  export default {
    data(){
      return{
        imgUrls: [
          "../../static/img/coffee1.png",
          "../../static/img/coffee2.png",
          "../../static/img/coffee3.png",
          "../../static/img/coffee4.png",
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000
      }
    },
    computed: {
      address () {
        return store.state.markers[0].address
      }
    },
    methods:{
      addAddress () {
          store.commit('addAddress')
        },
      go(){
        wx.navigateTo({url:"../menu/main"})
      }
    }
  };
</script>

<style lang="scss" scoped>
  header{
    background:#159f9f;
    width:100%;
    height:71rpx;
    padding-bottom: 20rpx;
    display: flex;
    justify-content: center;
    .search{
      display: flex;
      justify-content: center;
      align-items: center;
      width:85%;
      height:71rpx;
      background: #fff;
      padding:0 15rpx;
      border-radius: 6rpx;
      img{
        width:10%;
        height:61rpx;
        background: #fff;
      }
      input{
        width:100%;
        margin-left: 20rpx;
        height:61rpx;
        background: #fff;
        border:none;
        padding: 0;
        font-size:32rpx;
      }
    }
  }
section{
  margin-top:50rpx;
  width:100%;
  button{
    width:90%;
    height:100rpx;
    background: #159f9f;
    opacity:0.8;
    color:#fff;
  }
}
  .slide-image{
    width:100vw;
  }
</style>
