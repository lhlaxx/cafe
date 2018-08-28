<template>
    <div class="container" >
      <aside class="aside" >
        <ul>
          <li v-for="(item,index) in ullist" :key="index" @click="indexGoods(index)" >
            <span v-if="clickIndex==index" style="background: rgb(21,159,159);width:100%;height:100%;display: block;">{{item}}</span>
            <span v-else>{{item}}</span>
          </li>
        </ul>
      </aside>
      <view-scroll class="section" scroll-y @scroll="scrollIndexGoods" scroll-into-view="{id}">
        <ul>
          <div class="addgo" @click="go"><img class="gouwuche" src="../../../static/img/gouwuche.png" alt=""><span v-if="num!=0">{{num}}</span></div>
          <li v-for="(item,index) in list" :key="index">
            <img :src="item.src" alt="">
            <div class="flex">
              <p>{{item.name}}</p>
              <p><span>￥</span>{{item.price}} <span>起</span>  </p>
              <p>
                <span @click="decrease(index)" :key="index" v-if="item.num>0">-</span>
                <i v-if="item.num !=0" :key="index" >{{item.num}}</i>
                <span @click="increase(index)" :key="index">+</span></p>
            </div>
          </li>
        </ul>
      </view-scroll>
    </div>
</template>

<script>
  import store from "../../utils/store"
  export default {
    data(){
      return{
        id:0,
        screenHeight:"",
        clickIndex:0,
        ullist:[1,2,3]
      }
    },
    computed:{
      gradient(){
        return store.state.gradient
      },
      list(){
        return store.state.list
      },
      num() {
        return store.state.num
      },

    },
    mounted(){

      var _this=this
        wx.getSystemInfo({
          success:function(res){
            _this.screenHeight=res.screenHeight
          }
        })
    },
    watch:{
      clickIndex(){
        console.log(this.clickIndex)
      }
    },
    methods:{
      scrollIndexGoods(e){
        var hei=e.mp.detail.scrollTop
        console.log(hei,this.screenHeight,hei>this.screenHeight*2)
        if(hei>this.screenHeight*2){
          this.clickIndex=2
        }else if(hei>this.screenHeight-50){
          this.clickIndex=1
        }else if(hei<=this.screenHeight-50){
          this.clickIndex=0
        }
      },
      indexGoods(index){
        this.clickIndex=index
      },
      go(){
        wx.navigateTo({url:"../gowuche/main"})
      },
      increase(index){
        store.commit('increase',index)
      },
      decrease(index){
        if(this.list[index].num>0){
          store.commit('decrease',index)
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .container{
    display: flex;
    flex-direction: row;
    align-items: normal;
  }
  ul{
    padding: 0;
    li{
      padding: 0;
      list-style:none;
    }
  }
  aside{
    position: fixed;
    width:20%;
    height:100%;
    background: rgb(121,205,199);
        ul{
          li{
            width:100%;
            line-height:80rpx;
            text-align: center;
            background: rgba(121,205,199,1);
            color:#fff;
            bincrease-bottom: 1px solid #cdcdcd;
          }
        }
  }
  .section{
    margin-left:20%;
    width:80%;
    height:100vh;
    ul{
      width:100%;
      height:100%;
      .addgo,.gouwuche{
          position: fixed;
          right:5px;
          top:900rpx;
          width:70rpx;
          height:70rpx;
          box-shadow:0px 0px 15px -1px #888888;
          border:1px solid #cdcdcd;
          -webkit-border-radius:50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          padding: 10rpx;
      }
      .addgo{
        span{
          position: absolute;
          right:0;
          top:0;
          display: inline-block;
          background: #ff2222;
          width:26rpx;
          height:24rpx;
          line-height: 22rpx;
          color:#fff;
          font-size:18rpx;
          text-align: center;
          -webkit-border-radius: 12rpx;
          -moz-border-radius: 12rpx;
          border-radius: 9rpx;
        }
      }
    li{
      display: flex;
      border-bottom: 1px solid #cdcdcd;
      padding: 10rpx 0;
    img{
      width:55%;
      height:200rpx;
    }
    .flex{
      width:45%;
      display: flex;
      flex-direction: column;
      padding-right: 30rpx;
      p{
        width:100%;
        text-align: right;
        line-height:64rpx;
      }
      p:nth-child(1){
        color:#333;
        font-size:28rpx;
      }
      p:nth-child(2){
        color:#666;
        font-size:36rpx;
        span{
          color:#ff3100;
          font-size:24rpx;
        }
      }
      p:nth-child(3){
        text-align: right;
        i{
          display: inline-block;
          margin:0 10rpx;
          font-size:32rpx;
        }
        span{
          display: inline-block;
          border:1px solid #cdcdcd;
          -webkit-border-radius:50% ;
          -moz-border-radius: 50%;
          border-radius:50%;
          width:46rpx;
          height: 46rpx;
          line-height:46rpx;
          text-align:center;
          color:#ff3100;
          font-size:40rpx;
        }
      }
    }
    }
  }
  }
</style>
