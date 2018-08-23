<template>
  <div class="container" >
    <header >
      <navigator class="search" url="../map/main">
        <img src="../../images/search.png" alt="">
        <input type="text" placeholder="搜索店铺" />
      </navigator>
    </header>

  </div>
</template>

<script>

  export default {

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

</style>
