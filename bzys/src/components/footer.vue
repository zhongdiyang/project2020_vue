<template>
  <footer class="footer wrapbox">
        <p class="f-p">
            <span>如需帮助，</span>
            <a class="lianxi" href="javascript:void(0)">请点击联系在线测算顾问</a>
        </p>
        <p class="f-p">客服7x24小时在线</p>
        <p class="f-p">联系QQ号：XXXXXXX 客服微信:XXXXXX </p>
        <div class="content_box f-p">
            <img src="~@/assets/images/index/cxlogo.png" alt="">
            <img src="~@/assets/images/index/kxlogo.png" alt="">
            <img src="~@/assets/images/index/aqlogo.png" alt="">
        </div>
    </footer>
</template>
<script>
export default {}
</script>

<style lang="less">
@charset "utf-8";
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
/*底部*/
footer {
  padding: 0.42rem 0;
  background-color: #3b6367;
}
footer .content_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
}
footer .content_box img {
  width: 2.58rem;
  height: 0.98rem;
  margin: 0 0.3rem;
}
footer .f-p {
  display: block;
  font-size: 0.52rem;
  text-align: center;
  color: #fff;
  padding: 0.1rem 0;
}
footer .f-p .span,
footer .f-p a {
  color: #ecda91;
  text-decoration: underline;
}

</style>
