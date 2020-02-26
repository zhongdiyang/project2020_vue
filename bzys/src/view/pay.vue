<template>
  <div>
    <div class="banner wrapbox">
      <img src="~@/assets/images/pay/banner.jpg" />
      <p class="banner_name">刘东</p>
      <p class="banner_name_time">（2019年9月20日日未知时）</p>
    </div>

    <div class="banner wrapbox">
      <img class="yun"
           src="~@/assets/images/pay/yun.png" />
    </div>
    <div class="pay_desc wrapbox">
      <div class="content_c">
        <img src="~@/assets/images/pay/pay_info_t.png"
             alt="">
      </div>
      <div class="pay_box">
        <p>测算项目：在线付费 2020流年运程</p>
        <div class="dis-table">
          <div class="pay_price">
            <p class="discount_price">限时优惠：88元</p>
            <p class="original_price">&nbsp;&nbsp;&nbsp;&nbsp;原价：168元&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
          <div class="pay_time">
            <p>距优惠结束</p>
            <p id="countdown"
               style="color: #d1151a;">00 : 00 : 00</p>
          </div>
        </div>
        <div class="pay-btn-box">
          <a class="pay-btn"
             data-type='weixin'
             href="javascript:void(0)">
            <i></i>
            <span>微信安全支付</span>
          </a>
          <a class="pay-btn"
             data-type='alipay'
             href="javascript:void(0)">
            <i></i>
            <span>支付宝安全支付</span>
          </a>
        </div>
        <p class="paid-desc J_testFixedShow"><span style="color: red;">98.8%</span>以上用户对分析结果非常满意！</p>
      </div>
      <div class="content_b">
        <img src="~@/assets/images/pay/pay_info_b.png"
             alt="">
      </div>
    </div>
    <div class="pay_desc pay_tip wrapbox">
      <p><span style="color: red;font-weight: bold;">98.7%</span>以上用户对分析结果非常满意！ </p>
      <p>支付完成后，<span style="color: red;font-weight: bold;">解锁</span>流年<span style="color: red;font-weight: bold;">八项重要分析</span></p>
    </div>
    <div class="banner wrapbox"
         style="padding: 0 .3rem;">
      <img style="margin-bottom: .6rem;"
           src="~@/assets/images/pay/content_5.png">
    </div>
    <div class="banner wrapbox"
         style="padding: 0 .3rem;">
      <img style="margin-bottom: .6rem;"
           src="~@/assets/images/pay/content_1.png">
    </div>
    <div class="banner wrapbox"
         style="padding: 0 .3rem;">
      <img style="margin-bottom: .6rem;"
           src="~@/assets/images/pay/content_2.png">
    </div>
    <div class="banner wrapbox"
         style="padding: 0 .3rem;">
      <img style="margin-bottom: .6rem;"
           src="~@/assets/images/pay/content_3.png">
    </div>

    <div class="banner wrapbox"
         style="padding: 0 .3rem;">
      <img class="jiesuo"
           src="~@/assets/images/pay/content_4.png">
    </div>
  </div>
</template>

<style>
div.wrapbox {
  background: #9eccca;
}

.banner {
  position: relative;
}

.banner img {
  width: 100%;
}

.banner .yun {
  width: 14.12rem;
  height: 7.54rem;
  display: block;
  margin: 0 auto;
}

.banner .banner_name {
  position: absolute;
  top: 0.54rem;
  width: 4.08rem;
  height: 1.06rem;
  left: 50%;
  margin-left: -2.04rem;
  line-height: 1.06rem;
  background: url(~@/assets/images/pay/banner_name_bg.png);
  font-size: 0.72rem;
  text-align: center;
  color: #fff;
}

.banner .banner_name_time {
  position: absolute;
  width: 11rem;
  height: 1.64rem;
  bottom: 0.54rem;
  left: 50%;
  margin-left: -5.5rem;
  text-align: center;
  font-size: 0.52rem;
  color: #fff;
  background: url(~@/assets/images/pay/banner_time_bg.png);
  background-size: contain;
  line-height: 2.32rem;
}

.banner .jiesuo {
  width: 12.96rem;
  display: block;
  margin: 0 auto;
  padding-bottom: 0.6rem;
}

.pay_desc .pay_box {
  width: 13.76rem;
  margin: 0 auto;
  padding: 0 0.7rem;
  background: url(~@/assets/images/pay/pay_info_c.png) center;
  background-size: contain;
}

.pay_desc .content_b,
.pay_desc .content_c {
  width: 13.76rem;
  height: 0.6rem;
  margin: 0 auto;
  padding: 0;
}

.pay_desc .content_b img,
.pay_desc .content_c img {
  width: 13.76rem;
  height: 0.6rem;
  display: block;
}

.pay_desc .pay_box p {
  font-size: 0.52rem;
}

.pay_desc .pay_box .dis-table > div {
  vertical-align: bottom;
}

.pay_desc .pay_box .pay_price {
  width: 78%;
}

.pay_desc .pay_box .pay_price .discount_price {
  font-size: 1rem;
  color: #c02920;
  font-weight: bold;
  padding: 0.4rem 0 0.2rem;
}

.pay_desc .pay_box .pay_price .original_price {
  font-size: 0.48rem;
  text-decoration: line-through;
  color: #7b7b7b;
  padding-bottom: 0.6rem;
}

.pay_desc .pay_box a {
  width: 100%;
  height: 1.6rem;
  display: inline-block;
  margin: 0.24rem 0;
  border-radius: 0.8rem;
  -webkit-border-radius: 0.8rem;
  -moz-border-radius: 0.8rem;
  -o-border-radius: 0.8rem;
  background-color: #6cb332;
  font-size: 0.66rem;
  color: #fff;
}

.pay_desc .pay_box a i {
  width: 0.96rem;
  height: 0.96rem;
  display: inline-block;
  background: url(~@/assets/images/pay_wx.png) no-repeat;
  background-size: contain;
  margin-left: 2.74rem;
  margin-top: 0.32rem;
  vertical-align: middle;
}

.pay_desc .pay_box a span {
  vertical-align: -webkit-baseline-middle;
  vertical-align: sub;
  margin-left: 1.12rem;
}

.pay_desc .pay_box a:last-child {
  background-color: #09f;
}

.pay_desc .pay_box a:last-child i {
  width: 1.16rem;
  background-image: url(~@/assets/images/pay_al.png);
}

.pay_desc .pay_box a:last-child span {
  margin-left: 0.6rem;
}

.pay_desc .pay_box .paid-desc {
  width: 80%;
  margin: 0 auto;
  font-size: 0.48rem;
  text-align: center;
  padding-bottom: 0.6rem;
}

.pay_desc {
  padding: 0 0.4rem;
}

.pay_desc p {
  font-size: 0.6rem;
  padding: 0.1rem;
}

.pay_desc .pay_box {
  padding: 0.4rem 0.3rem;
  background-color: #fff;
}

.pay_desc .pay_price {
  width: 75%;
}

.pay_desc .discount_price {
  font-size: 1.12rem;
  color: #96150e;
}

.pay_desc .original_price {
  text-decoration: line-through;
}

.pay_desc .pay_time {
  vertical-align: bottom;
  text-align: right;
}

.pay_desc .pay_time p {
  width: 100%;
}

.pay_desc.pay_tip {
  padding: 0.3rem;
}

.pay_desc.pay_tip p {
  text-align: center;
}

.dis-table {
  display: table;
}

.dis-table > div {
  display: table-cell;
  vertical-align: top;
}

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
