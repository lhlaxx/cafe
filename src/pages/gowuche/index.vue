<template>
  <div class="container">
    <section>
      <ul>
        <li v-for="(item,index) in carts" :key="index" v-if="item.num!=0">
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
    </section>
    <footer v-if="carts.length>0">{{carts.length}}
      <div class="price">共￥{{price}}</div>
      <div class="calculate" @click="calculate">结算</div>
    </footer>
  </div>
</template>

<script>
    import store from "../../utils/store"
    export default {
      data(){
        return{

        }
      },
      computed:{
        list(){
          return store.state.list
        },
        num() {
          return store.state.num
        },
        carts(){
          return store.state.carts
        },
        price:function(){
          var calculate=0
          for(var i = 0;i<store.state.carts.length;i++){
            calculate=store.state.carts[i].price*store.state.carts[i].num+calculate
          }
          return calculate
        }
      },
      methods:{
        calculate(){
          console.log(11)
        },
        go(){
          wx.navigateTo({url:"../gowuche/main"})
        },
        increase(index){
          store.commit('increase',index)
        },
        decrease(index){
          if(this.carts[index].num>0){
            store.commit('decrease',index)
          }
        }
      }
    };

</script>

<style scoped lang="scss">
  section{
    width:100%;
    ul{
      /*position: relative;*/
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
  footer{
    line-height:100rpx;
    width:100%;
    background:#159f9f;
    color:#fff;
    position:fixed;
    bottom:0;
    display:flex;
    justify-content: space-between;
    .price{
      width:80%;
      border-right: 1px solid #cdcdcd;
      text-align: center;
    }
    .calculate{
      width:20%;
      text-align: center;
    }
  }
</style>
