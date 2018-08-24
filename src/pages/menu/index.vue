<template>
    <div class="container">
      <aside class="aside" >
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </aside>
      <section>
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <img :src="item.src" alt="">
            <div class="flex">
              <p>{{item.name}}</p>
              <p><span>￥</span>{{item.price}} <span>起</span>  </p>
              <p><span>+</span></p>
            </div>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        list:[
          {src:"../../../static/img/coffee1.png",name:"美式绵云",price:"23.0"},
          {src:"../../../static/img/coffee2.png",name:"焦糖玛奇朵",price:"33.0"},
          {src:"../../../static/img/coffee3.png",name:"卡布奇诺",price:"47.0"},
          {src:"../../../static/img/coffee4.png",name:"哈哈哈哈哈哈哈",price:"38.0"},
          {src:"../../../static/img/coffee1.png",name:"美式绵云",price:"23.0"},
          {src:"../../../static/img/coffee2.png",name:"焦糖玛奇朵",price:"33.0"},
          {src:"../../../static/img/coffee3.png",name:"卡布奇诺",price:"47.0"},
          {src:"../../../static/img/coffee4.png",name:"哈哈哈哈哈哈哈",price:"38.0"},
          {src:"../../../static/img/coffee1.png",name:"美式绵云",price:"23.0"},
          {src:"../../../static/img/coffee2.png",name:"焦糖玛奇朵",price:"33.0"},
          {src:"../../../static/img/coffee3.png",name:"卡布奇诺",price:"47.0"},
          {src:"../../../static/img/coffee4.png",name:"哈哈哈哈哈哈哈",price:"38.0"},
        ]
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
        ul{
          li{
            width:180rpx;
            line-height:80rpx;
            text-align: center;
            background: #159f9f;
            color:#fff;
            opacity: 0.6;
            border-bottom: 1px solid #cdcdcd;
          }
        }
  }
  section{
    width:100%;
    li{
      display: flex;
      border-bottom: 1px solid #cdcdcd;
      padding-bottom: 10rpx;
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
        line-height:70rpx;
      }
      p:nth-child(1){
        color:#333;
        font-size:28rpx;
      }
      p:nth-child(2){
        color:#666;
        font-size:36rpx;
        span{
          color:#fa6789;
          font-size:24rpx;
        }
      }
      p:nth-child(3){
        text-align: right;
        span{
          display: inline-block;
          border:1px solid #cdcdcd;
          border-radius:50%;
          width:60rpx;
          height: 60rpx;
          line-height:60rpx;
          text-align:center;
          color:darkred;
        }
      }
    }
    }
  }
</style>
