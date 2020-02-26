<template>
  <!--form表单-->
  <div class="form-group wrapbox">
    <form class="form-wrap J_testFixedTop"
          action="/data"
          id="dsqc_submit"
          method="post">
      <div class="form-item clearfix">
        <div class="form-item flex">
          <label>您的姓名：</label>
          <input class="flex-1"
                 type="text"
                 id="name"
                 v-model="name"
                 placeholder="请输入您的姓名">
        </div>
      </div>
      <div class="form-item flex">
        <label>您的性别：</label>
        <div class="flex-1">
          <div class="self-check sexCheck"
               :class="{'active': sex===0}">
            <label>
              <span data-sex='0'
                    @click="sexCheck(0)">男</span>
            </label>
          </div>
          <div class="self-check sexCheck"
               :class="{'active': sex===1}">
            <label>
              <span data-sex='1'
                    @click="sexCheck(1)">女</span>
            </label>
          </div>
          <input type="hidden"
                 name="sex"
                 v-model="sex">
        </div>
      </div>
      <div class="form-item bbn flex">
        <label>出生日期：</label>
        <input class="flex-1"
               ref='date'
               readonly="readonly"
               data-type="1"
               :id="birthInputName()"
               data-input-id="birth_date"
               data-input-hour-id="birth_time"
               data-date="1980-6-15"
               type="text"
               placeholder="请选择日期"
               :value="showTime">
      </div>
    </form>
    <a class="submit-btn J_testFixedShow"
       id="submit_btn"
       href="javascript:void(0);"
       @click="submitForm">
      <img src="~@/assets/images/form_btn.png"
           alt="">
    </a>
    <div class="order-check clearfix"
         id="J_testFixedShow">
      <span class="pull-left">已为<span style="color: #810302">21204256</span>位缘主鉴定</span>
      <a class="pull-right"
         href="javascript:void(0);">查看历史订单</a>
    </div>
    <tip :content='tipCon'
         active='tipShow'
         v-show="tipShow" />
  </div>
</template>

<script>
import tip from "@/components/tip";
const calendar = require("@/assets/js/calendarlunar");
const StemsBranch = require("@/assets/js/stemsbranch");
export default {
  props: ["formId"],
  components: {
    tip
  },
  data() {
    return {
      name: "",
      sex: 0,
      birth_date: "",
      birth_time: "",
      showTime: "",
      tipShow: false,
      tipCon: ""
    };
  },
  methods: {
    birthInputName() {
      return this.formId;
    },
    sexCheck(value) {
      this.sex = value;
      if (this.$refs.date.getAttribute("data-tip")) {
        this.showTime = this.$refs.date.getAttribute("data-tip");
      }
    },
    checkChinese(value) {
      let reg = /[\u4e00-\u9fa5]{2,8}/;
      let arr = value.split("");
      let mark = arr.every(item => {
        return reg.test(item);
      });
      return mark;
    },
    formateDate() {
      let value = this.$store.state.formInfo.birth_date;
      value = value.replace("-", "年");
      value = value.replace("-", "月");
      let str = value;
      str += "日  ";
      str +=
        this.$store.state.formInfo.birth_hour < 0
          ? "未知时辰"
          : this.$store.state.formInfo.birth_hour + "时";
      this.showTime = str;
      console.log(this.showTime);
    },
    submitForm() {
      if (!this.name) {
        this.tipShow = true;
        this.tipCon = "请输入您的名字";
        setTimeout(() => {
          this.tipShow = false;
        }, 2000);
      } else if (
        !this.checkChinese(this.name) &&
        (this.name.length === 1 || this.name.length > 5)
      ) {
        console.log(
          this.name.length,
          this.name.length === 1,
          this.name.length > 5
        );
        if (this.name.length === 1) {
          this.tipShow = true;
          this.tipCon = "名字不少于2个字";
        } else if (this.name.length > 5) {
          this.tipShow = true;
          this.tipCon = "名字不超过5个字";
        }
        setTimeout(() => {
          this.tipShow = false;
        }, 2000);
      } else if (!this.$refs.date.getAttribute("data-time")) {
        this.tipShow = true;
        this.tipCon = "请输入您的出生日期";
        setTimeout(() => {
          this.tipShow = false;
        }, 2000);
      } else {
        // alert(2)
        console.log(
          this.$store.state,
          this.$refs.date.getAttribute("data-time")
        );
        this.birth_date = this.$refs.date
          .getAttribute("data-time")
          .split(" ")[0];
        this.birth_time = this.$refs.date
          .getAttribute("data-time")
          .split(" ")[1];
        console.log(this.wxbz(this.birth_date, this.birth_time));
        let wxbz = this.wxbz(this.birth_date, this.birth_time);
        // this.$store.dispatch()
        this.$store.dispatch("submitUserInfo", {
          name: this.name,
          sex: this.sex,
          bz: wxbz.bz,
          wx: wxbz.wx,
          birthDate: this.birth_date,
          birthHour: this.birth_time,
          birthDateLunar: wxbz.lunar
        });
      }
    },
    wxbz(year, birthTime) {
      var currDate = year.split("-");
      var y = currDate[0];
      var m = currDate[1];
      var d = currDate[2];
      var h = birthTime;

      var lunar = calendar.solar2lunar(y, m, d);
      var dayStems = lunar.gzDay.substring(0, 1);
      var hSection =
        StemsBranch.getHourStems(dayStems, h) + StemsBranch.getHourBranch(h);
      var wx = {};
      wx.a = StemsBranch.getStemsBranchElement(lunar.gzYear);
      wx.b = StemsBranch.getStemsBranchElement(lunar.gzMonth);
      wx.c = StemsBranch.getStemsBranchElement(lunar.gzDay);
      wx.d = StemsBranch.getStemsBranchElement(hSection);
      var allfive = wx.a + " " + wx.b + " " + wx.c + " " + wx.c;
      var lose = "金木水火土";
      for (var i = 0; i < allfive.length; i++) {
        lose = lose.replace(allfive.charAt(i), "");
      }
      wx.e = lose;
      return {
        lunar: lunar.lYear + "-" + lunar.lMonth + "-" + lunar.lDay,
        bz: lunar.gzYear + lunar.gzMonth + lunar.gzDay + hSection,
        wx: wx.a + wx.b + wx.c + wx.d
      };
    }
  },
  watch: {
    name() {
      if (this.$refs.date.getAttribute("data-tip")) {
        this.showTime = this.$refs.date.getAttribute("data-tip");
      }
    }
  }
};
</script>

<style lang="less">
// @import url("../assets/css/config.less");
// // form 表单
// .form-group {
//   .content-box;
//   .form-wrap {
//     border: 2px solid #811b03;
//     padding: 0 12 / @r;
//     background-color: #fff;
//     .border-radius(16 / @r);
//   }
//   input {
//     border: 0;
//   }
//   .form-item {
//     height: 98 / @r;
//     line-height: 98 / @r;
//     border-bottom: 2 / @r dashed #9b5e50;
//     padding-bottom: 1px;
//     .flex;
//     label {
//       font-size: 32 / @r;
//       color: #811b03;
//       vertical-align: text-bottom;
//     }
//     input.flex-1 {
//       font-size: 32 / @r;
//       -webkit-box-flex: 1;
//       flex: 1;
//     }
//     &.bbn {
//       border-bottom: 0;
//     }
//   }
//   .self-check {
//     float: left;
//     height: 100%;
//     input[type="radio"] {
//       display: none;
//     }
//     span {
//       border: 1px solid #811b03;
//       padding: 18 / @r 53 / @r;
//       background-color: #fff;
//       .border-radius(4 / @r);
//       margin-right: 50 / @r;
//       color: #252525;
//     }
//     &.active span {
//       background-color: #811b03;
//       color: #fff;
//     }
//   }
//   .teacherCheck span {
//     padding: 0.36rem 0.6rem;
//     margin-right: 0;
//     margin-right: 4 / @r;
//   }
//   .submit-btn img {
//     width: 680 / @r;
//     height: 88 / @r;
//     margin: 0 auto;
//     display: block;
//     margin-top: 20 / @r;
//     .border-radius(27 / @r);
//   }
//   .pull-left {
//     float: left;
//     font-size: 26 / @r;
//     padding: 20 / @r 0;
//   }
//   .pull-right {
//     float: right;
//     font-size: 29 / @r;
//     text-decoration: underline;
//     color: #810302;
//     padding: 20 / @r 0;
//   }
// }
</style>
