<template>
  <div id="app">
    <my-header />
    <router-view/>
    <my-footer />
  </div>
</template>

<script>
import myHeader from '@/components/header'
import myFooter from '@/components/footer'
export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="less">
@import url('./assets/css/config.less');
// 悬浮框
.public_test_fixed {
  position: fixed;
  bottom: 0;
  z-index: 9;
  display: block;
  width: 750/@r;
  height: 130/@r;
  background: rgba(0, 0, 0, 0.3);
  left: 50%;
  margin-left: -(750/2)/@r;
  img {
    width: 722/@r;
    height: 122/@r;
    .border-radius(30/@r);
    margin-top: 4/@r;
    margin-left: 24/@r;
  }
}
.tip {
  height: 56/@r;
  line-height: 56/@r;
  font-size: 30/@r;
  text-align: center;
  top: 0;
  bottom: auto;
  color: #fff;
  background: #fb9900;
}
.active {
  top: 0;
  transition: top 1s;
  -moz-transition: top 1s; /* Firefox 4 */
  -webkit-transition: top 1s; /* Safari 和 Chrome */
  -o-transition: top 1s; /* Opera */
}
.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
