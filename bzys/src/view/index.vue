<template>
  <div>
    <div class="banner wrapbox">
      <img src="~@/assets/images/index/banner.jpg" />
    </div>
    <!--form表单-->
    <!-- <div class="form-group wrapbox">
        <form class="form-wrap J_testFixedTop" autocomplete="off" action="" id="dsqc_submit" method="post">
            <div class="form-item clearfix">
                <div class="form-item flex">
                    <label>您的姓名：</label>
                    <input class="flex-1" type="text" id="name" placeholder="请输入您的姓名">
                </div>
            </div>
            <div class="form-item form-item-gender flex">
                <label>您的性别：</label>
                <div class="flex-1">
                    <div class="self-check sexCheck active">
                        <label>
                            <span data-sex='0'>男</span>
                        </label>
                    </div>
                    <div class="self-check sexCheck">
                        <label>
                            <span data-sex='1'>女</span>
                        </label>
                    </div>
                    <input type="hidden" id="sex" name="gender" type="text" value="男">
                </div>
            </div>
            <div class="form-item bbn flex">
                <label>出生日期：</label>
                <input class="flex-1" readonly="readonly" data-type="1" id="birthday" data-input-id="birth_date" data-input-hour-id="birth_hour" data-date="1980-6-15" type="text" placeholder="请选择日期">
                <input type="hidden" name="birth_date" id="birth_date">
                <input type="hidden" id="birth_hour">
            </div>
        </form>
        <a class="submit-btn J_testFixedShow" id="submit_btn" href="javascript:;">
            <img src="~@/assets/images/form_btn.png" alt="">
        </a>
        <div class="order-check clearfix" id="J_testFixedShow">
            <span class="pull-left">已为<span style="color: #ca1a16">40659012</span>位缘主鉴定</span>
            <a class="pull-right" href="javascript:void(0);">查看历史订单</a>
        </div>
    </div>-->
    <my-form @calenderShow="showCalender"
             formId='birthday'></my-form>
    <!--大师-->
    <div class="wrapbox content">
      <img class="master"
           src="~@/assets/images/index/master.png" />
    </div>
    <!-- 全年分析 -->
    <div class="wrapbox content">
      <div class="content_title">
        <img src="~@/assets/images/index/title_1.png"
             alt />
      </div>
      <div class="content_box">
        <div class="content_item analyse">
          <img src="~@/assets/images/index/analyse_1.png"
               alt />
          <span>三命通会</span>
        </div>
        <div class="content_item analyse">
          <img src="~@/assets/images/index/analyse_2.png"
               alt />
          <span>称骨论命</span>
        </div>
        <div class="content_item analyse">
          <img src="~@/assets/images/index/analyse_3.png"
               alt />
          <span>八字排盘</span>
        </div>
        <div class="content_item analyse">
          <img src="~@/assets/images/index/analyse_4.png"
               alt />
          <span>三才吉凶</span>
        </div>
        <div class="content_item analyse">
          <img src="~@/assets/images/index/analyse_5.png"
               alt />
          <span>转运方法</span>
        </div>
        <div class="content_item analyse">
          <img src="~@/assets/images/index/analyse_6.png"
               alt />
          <span>运势影响</span>
        </div>
      </div>
      <div class="content_b">
        <img src="~@/assets/images/index/content_b.png"
             alt />
      </div>
    </div>
    <!-- 方向 -->
    <div class="wrapbox content">
      <div class="content_title">
        <img src="~@/assets/images/index/title_2.png"
             alt />
      </div>
      <div class="content_box direction_box">
        <div class="content_item direction">
          <img src="~@/assets/images/index/direction_1.png"
               alt />
          <span>2020年能找到心仪的对象吗？</span>
        </div>
        <div class="content_item direction">
          <img src="~@/assets/images/index/direction_2.png"
               alt />
          <span>2020年有财运来吗？</span>
        </div>
        <div class="content_item direction">
          <img src="~@/assets/images/index/direction_3.png"
               alt />
          <span>2020年有加薪的机会吗？</span>
        </div>
        <div class="content_item direction">
          <img src="~@/assets/images/index/direction_4.png"
               alt />
          <span>2020年身强体壮吗？</span>
        </div>
        <div class="content_item direction">
          <img src="~@/assets/images/index/direction_5.png"
               alt />
          <span>2020年父母身体无恙吗？</span>
        </div>
        <div class="content_item direction">
          <img src="~@/assets/images/index/direction_6.png"
               alt />
          <span>2020年能运到贵人相助吗？</span>
        </div>
      </div>
      <div class="content_b">
        <img src="~@/assets/images/index/content_b.png"
             alt />
      </div>
    </div>
    <!-- 优势 -->
    <div class="wrapbox content">
      <div class="content_title">
        <img src="~@/assets/images/index/title_3.png"
             alt />
      </div>
      <div class="content_box">
        <div class="content_item advantage">
          <span>1</span>
          香港国际易学命理大师签约
        </div>
        <div class="content_item advantage">
          <span>2</span>
          百余位命理老师在线咨询
        </div>
        <div class="content_item advantage">
          <span>3</span>
          真人一对一在线服务支持
        </div>
        <div class="content_item advantage">
          <span>4</span>
          专业顾问24小时免费咨询
        </div>
      </div>
      <div class="content_b">
        <img src="~@/assets/images/index/content_b.png"
             alt />
      </div>
    </div>
    <!-- 用户反馈 -->
    <div class="wrapbox content">
      <div class="content_title">
        <img src="~@/assets/images/index/title_4.png"
             alt />
      </div>
      <div class="content_box">
        <div class="help_content">
          <p>
            本测算一共帮助
            <span style="color: #cb201c;">650408</span>位用户。
            <span style="color: #cb201c;">97%</span>以上的用户测算后，对结果非常满意。
          </p>
          <p class="pinfen_count">9.97</p>
          <div class="pinfen clearfix">
            <span>评分：</span>
            <img src="~@/assets/images/index/quanxing.png"
                 alt />
            <img src="~@/assets/images/index/quanxing.png"
                 alt />
            <img src="~@/assets/images/index/quanxing.png"
                 alt />
            <img src="~@/assets/images/index/quanxing.png"
                 alt />
            <img src="~@/assets/images/index/banxing.png"
                 alt />
          </div>
          <div class="pinfen_info">
            <span>分析透彻</span>
            <span>解惑人生</span>
            <span>趋吉避凶</span>
          </div>
        </div>
      </div>
      <div class="content_box space-between feedback_count_wrap">
        <div class="content_item content_item_active feedback_count">
          算得准(
          <span>503</span>)
        </div>
        <div class="content_item feedback_count">算得准(503)</div>
        <div class="content_item feedback_count">算得是准(999+)</div>
        <div class="content_item feedback_count">算得准(503)</div>
        <div class="content_item feedback_count">算得准(503)</div>
        <div class="content_item feedback_count">算得(03)</div>
      </div>
      <div id="comment_srcoller"
           class="content_box m_pj_list">
        <!-- <ul id="m_pj_list">
          <li class="content_item feedback_item">
            <p class="m_pj_no">
              订单号：
              <span>D20***7132</span>
            </p>
            <p class="m_pj_content">今年流年不顺，处处破财，抱着好奇心试测，没想到花了个小钱转运了！已经推荐给身边朋友。</p>
          </li>
          <li class="content_item feedback_item">
            <p class="m_pj_no">
              订单号：
              <span>D20***7101</span>
            </p>
            <p class="m_pj_content">今年流年不顺，处处破财，抱着好奇心试测，没想到花了个小钱转运了！已经推荐给身边朋友。</p>
          </li>
          <li class="content_item feedback_item">
            <p class="m_pj_no">
              订单号：
              <span>D20***7041</span>
            </p>
            <p class="m_pj_content">今年流年不顺，处处破财，抱着好奇心试测，没想到花了个小钱转运了！已经推荐给身边朋友。</p>
          </li>
          <li class="content_item feedback_item">
            <p class="m_pj_no">
              订单号：
              <span>D20***6945</span>
            </p>
            <p class="m_pj_content">
              今年流年不顺，处处破财，抱着好奇心试测，没想到花了个小钱转运了！已经推荐给身边朋友。
              <span class="m_pj_con_add">追加评论追加评论追加评论追加评论追加评论追加评论追加评论追加评论追加评论追加评论追加评论追加评论追加评论追加评论</span>
            </p>
          </li>
        </ul> -->
        <ul id="m_pj_list"
            class="m_pj_list"
            :class="{marquee_top: animate}">
          <li v-for="(item, index) in commentData"
              :key="index"
              class="content_item feedback_item">
            <p class="m_pj_no">订单号：
              <span>{{ item.order_no }}</span>
            </p>
            <p class="m_pj_content">
              {{ item.comment }}
            </p>
          </li>
        </ul>
      </div>
      <div class="content_b">
        <img src="~@/assets/images/index/content_b.png"
             alt />
      </div>
    </div>
    <!-- 热门 -->
    <div class="wrapbox content">
      <div class="content_title">
        <img src="~@/assets/images/index/title_5.png"
             alt />
      </div>
      <div class="content_box">
        <div class="content_item survey">
          <img src="~@/assets/images/index/item.png"
               alt />
          <span>八字合婚</span>
        </div>
        <div class="content_item survey">
          <img src="~@/assets/images/index/item.png"
               alt />
          <span>八字合婚</span>
        </div>
        <div class="content_item survey">
          <img src="~@/assets/images/index/item.png"
               alt />
          <span>八字合婚</span>
        </div>
        <div class="content_item survey">
          <img src="~@/assets/images/index/item.png"
               alt />
          <span>八字合婚</span>
        </div>
        <div class="content_item survey">
          <img src="~@/assets/images/index/item.png"
               alt />
          <span>八字合婚</span>
        </div>
        <div class="content_item survey">
          <img src="~@/assets/images/index/item.png"
               alt />
          <span>八字合婚</span>
        </div>
        <div class="content_item survey">
          <img src="~@/assets/images/index/item.png"
               alt />
          <span>八字合婚</span>
        </div>
        <div class="content_item survey">
          <img src="~@/assets/images/index/item.png"
               alt />
          <span>八字合婚</span>
        </div>
      </div>
      <div class="content_b">
        <img src="~@/assets/images/index/content_b.png"
             alt />
      </div>
    </div>
    <my-form @calenderShow="showCalender"
             formId='birthday1'></my-form>
  </div>
</template>
<script>
import myForm from "@/components/form";
import "@/assets/js/calendar/calendar";
import "@/assets/js/calendarlunar";
import "@/assets/js/stemsbranch";
export default {
  components: {
    myForm
  },
  data() {
    return {
      animate: false,
      calendarShow: false,
      commentData: [
        {
          order_no: "D20***8101",
          comment:
            "这几年财运一直不佳，算了财运后发现是命宫主星暗淡，随请了旺主星的手链，果真财运越来越好了。"
        },
        {
          order_no: "D20***1209",
          comment:
            "感觉今年财运就不太行，找张老师测了下明年打算跳槽，大运年要好好把握了。"
        },
        {
          order_no: "D20***3487",
          comment:
            "八字运程分析非常满意，客服也有很多建议和改运方法，相信2018年一定会更顺利。"
        },
        {
          order_no: "D20***2051",
          comment: "2018年有官运在身，希望一切如张老师所说，明年一切顺利。"
        },
        {
          order_no: "D20***3409",
          comment:
            "张老师给的事业运势分析相当满意，对于工作的选择自己也会更加慎重，希望能有更好的发展空间。"
        },
        {
          order_no: "D20***1238",
          comment:
            "太赞了，单位确实有这么一号人影响我的升值加薪，2018年破小人，得财运。"
        },
        {
          order_no: "D20***3426",
          comment:
            "分析的结果还是很满意的，比我自己在其他地方算的内容多一些，非常感谢顾问小灵的帮助。"
        },
        {
          order_no: "D20***7402",
          comment: "张老师很耐心，整个讲解花了将近二个多小时，谢谢了。"
        }
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.showMarquee();
    }, 2000);
    this.showMarquee();
    let Calendar = window.Calendar;
    var lcalendar = new Calendar();
    lcalendar.init("#birthday");
    var lcalendar1 = new Calendar();
    lcalendar1.init("#birthday1");
  },
  methods: {
    showCalender(mark) {
      this.calendarShow = true;
    },
    closeCalender() {
      this.calendarShow = false;
    },
    showMarquee: function() {
      this.animate = true;
      setTimeout(() => {
        this.commentData.push(this.commentData[0]);
        this.commentData.shift();
        this.animate = false;
      }, 800);
    }
  }
};
</script>

<style lang="less">
@import url("../assets/css/config.less");
@import url("../assets/js/calendar/calendar.min.css");
// body {
//   background-color: #9eccca;
// }

/* 弹窗 */
.com-popup {
  position: fixed;
  top: 0;
  left: 50%;
  bottom: 0;
  width: 750 / @r;
  margin-left: -(750/2) / @r;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;

  .popup-main {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
  }

  .popup-fade {
    position: absolute;
    z-index: 9;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .popup-content {
    background: #e2e2e2;
    border-radius: 8 / @r;
    position: relative;
    z-index: 10;
    background: #fff;
    width: 600 / @r;
    height: 720 / @r;
    left: 50%;
    margin-left: -300 / @r;
    top: 50%;
    margin-top: -360 / @r;
  }

  .close-btn {
    position: absolute;
    top: 14 / @r;
    right: 14 / @r;
    width: 42 / @r;
    height: 42 / @r;
    background: url(~@/assets/images/index/close_btn.png) no-repeat center;
    background-size: 0.8rem;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  // 微信关注
  .wx_info {
    width: 600 / @r;
    height: 215 / @r;
    background: #509189;
    border-radius: 8 / @r 8 / @r 0 0;

    .con {
      width: 460 / @r;
      margin: 0 auto;
      padding-top: 16 / @r;

      img {
        width: 72 / @r;
        height: 72 / @r;
        display: block;
        float: left;
      }

      p {
        padding-left: 16 / @r;
        height: 36 / @r;
        line-height: 36 / @r;
        float: left;
        font-size: 20 / @r;
        color: #fff;

        &.color {
          color: #d3d773;
        }
      }

      .input_box {
        width: 460 / @r;
        background: #fff;
        margin-top: 16 / @r;
        .border-radius(5 / @r);
        height: 50 / @r;
        padding-left: 10 / @r;

        input {
          height: 50 / @r;
          display: block;
          float: left;

          &:first-child {
            width: 330 / @r;
            font-size: 20 / @r;
            text-align: center;
            color: #509189;
          }

          &:last-child {
            float: right;
            width: 110 / @r;
            .border-radius-rb(4 / @r);
            margin: 0;
            padding: 0;
            background: #c2873b;
            font-size: 25 / @r;
            color: #fff;
          }
        }
      }

      .desc {
        width: 460 / @r;
        text-align: center;
        padding: 16 / @r 0;
        font-size: 20 / @r;
        color: #fff;
      }
    }
  }

  .wx_tip {
    width: 508 / @r;
    padding-top: 43 / @r;
    margin: 0 auto;

    img {
      width: 508 / @r;
      height: 339 / @r;
    }
  }

  .wx_go_btn {
    width: 420 / @r;
    height: 70 / @r;
    display: block;
    margin: 25 / @r auto;
    background: url(~@/assets/images/index/wx_btn.png);
    background-size: contain;
  }

  // 首页测算结果
  .order_info {
    width: 600 / @r;
    height: 570 / @r;
    margin-top: -(570/2) / @r;

    .order_header {
      width: 100%;
      height: 65 / @r;
      background: #509189;
      font-size: 30 / @r;
      line-height: 65 / @r;
      .border-radius-tr(5 / @r);
      text-align: center;
      color: #fff;
    }

    .close-btn {
      top: -45 / @r;
    }

    .order_msg {
      padding: 20 / @r;
      background: #eae7ce;
      font-size: 28 / @r;

      .birthday > div {
        float: left;
      }
    }

    .order_desc {
      padding: 24 / @r 65 / @r;
      font-size: 28 / @r;
    }

    .btn_show_all {
      width: 420 / @r;
      height: 70 / @r;
      display: block;
      margin: 0 auto;
      line-height: 70 / @r;
      font-size: 30 / @r;
      color: #fff;
      .border-radius(70/2 / @r);
      text-align: center;
      background-color: #509189;
    }
  }
}

// 订单弹幕
.order_barrage {
  &.barrage_item {
    position: fixed;
    z-index: 6;
    width: 210 / @r;
    height: 58 / @r;
    bottom: 2.5rem;
    right: 50%;
    margin-right: -270 / @r;
    .border-radius(58/2 / @r);
    font-size: 16 / @r;
    background: rgba(0, 0, 0, 0.6);
    padding: 7 / @r 29 / @r;
    line-height: 22 / @r;

    div {
      color: #c3d381;
    }

    p {
      color: #fff;
    }
  }
}

.banner,
.direction {
  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

/* 内容区 */
.content {
  padding: 25 / @r 0 25 / @r;
  background: #9eccca;

  .content_title img {
    width: 100%;
  }

  .content_box {
    width: 750 / @r;
    padding: 25 / @r 65 / @r 0 65 / @r;
    background: url(~@/assets/images/index/content_c.png) center;

    background-size: contain;
    .flex;
    justify-content: center;
    flex-wrap: wrap;

    &.direction_box {
      justify-content: space-around;
    }
    .content_item {
      -webkit-box-flex: 1;
      flex: 1;
      padding-bottom: 20 / @r;

      // 全年分析
      &.analyse {
        width: 166 / @r;

        img {
          width: 166 / @r;
          height: 166 / @r;
          display: block;
          margin: 0 auto;
        }

        span {
          color: #186059;
          display: block;
          text-align: center;
          font-size: 30 / @r;
          margin: 0 auto;
        }
      }

      // 六大方向
      &.direction {
        width: 271 / @r;
        height: 179 / @r;
        position: relative;
        margin-bottom: 20 / @r;
        -webkit-box-flex: inherit;
        flex: inherit;

        img {
          width: 271 / @r;
          height: 179 / @r;
        }

        span {
          width: 271 / @r;
          height: 40 / @r;
          line-height: 40 / @r;
          position: absolute;
          bottom: 0;
          font-size: 20 / @r;
          text-align: center;
          color: #fff;
        }
      }

      // 优势
      &.advantage {
        -webkit-box-flex: inherit;
        flex: inherit;
        width: 564 / @r;
        height: 63 / @r;
        background: url(~@/assets/images/index/advantage_bg.png);
        background-size: cover;
        font-size: 28 / @r;
        line-height: 63 / @r;
        padding-left: 70 / @r;
        position: relative;
        color: #fff;
        margin: 5.5 / @r 0;

        span {
          position: absolute;
          display: block;
          width: 52 / @r;
          height: 52 / @r;
          background: url(~@/assets/images/index/advantage_count.png);
          background-size: contain;
          top: 5.5 / @r;
          left: 5.5 / @r;
          line-height: 52 / @r;
          text-align: center;
          color: #10585f;
        }
      }

      // 反馈
      &.feedback_count {
        -webkit-box-flex: inherit;
        flex: inherit;
        font-size: 22 / @r;
        height: 48 / @r;
        line-height: 48 / @r;
        background: #44a3a4;
        color: #fff;
        border-radius: 24 / @r;
        padding: 0 26 / @r;
        white-space: nowrap;
        margin-bottom: 9 / @r;
      }

      // do
      &.content_item_active {
        // background: #ecd08d;
        color: #ffe71f;
        // span{
        //     color: #fff;
        // }
      }

      &.feedback_item {
        -webkit-box-flex: inherit;
        flex: inherit;

        .m_pj_no {
          padding-left: 33 / @r;
          color: #10585f;
          font-size: 26 / @r;
        }

        .m_pj_content {
          margin: 0 33 / @r;
          font-size: 26 / @r;
          border-bottom: 1px dashed #578c90;
          padding: 10 / @r 0 17 / @r;
        }

        .m_pj_con_add {
          font-size: 22 / @r;
          padding: 12 / @r 8 / @r 0;
          display: block;
          color: #5c5c5c;
        }

        &:last-child .m_pj_content {
          border-bottom: 0;
        }
      }

      // 热门
      &.survey {
        width: 96 / @r;
        margin: 0 26 / @r;

        img {
          width: 96 / @r;
          height: 96 / @r;
          display: block;
        }

        span {
          width: 96 / @r;
          font-size: 22 / @r;
          text-align: center;
          display: block;
          text-align: center;
          padding: 12 / @r 0;
          color: #10585f;
        }
      }
    }

    &.feedback_count_wrap {
      padding-left: 100 / @r;
      padding-right: 100 / @r;
    }

    &.space-between {
      .space-between;
    }
  }

  .help_content {
    border: 1px solid #c9c2a2;
    padding: 30 / @r;
    width: 587 / @r;
    margin: 0 auto;
    background: #f3efde;
    .border-radius(8 / @r);

    p {
      font-size: 28 / @r;
      text-align: center;
    }

    .pinfen_count {
      padding: 10 / @r 0;
      font-size: 58 / @r;
      font-weight: bold;
      color: #ca1a16;
    }

    .pinfen {
      width: 237 / @r;
      margin: 0 auto;

      span {
        font-size: 25 / @r;
        line-height: 29 / @r;
      }

      img {
        width: 26 / @r;
        margin-top: 2 / @r;
        margin-right: 8 / @r;

        &:last-child {
          margin-right: 0;
        }
      }

      img,
      span {
        display: block;
        float: left;
      }
    }

    .pinfen_info {
      padding-top: 35 / @r;
      .flex;
      justify-content: space-around;
      flex-wrap: wrap;
      span {
        font-size: 22 / @r;
        padding: 10 / @r 20 / @r;
        .border-radius(5 / @r);
        color: #4e4e4e;
        background: #cfcfcf;
      }
    }
  }

  .content_b {
    img {
      width: 100%;
      display: block;
    }
  }
}

.space-around {
  justify-content: space-around;
}

.space-between {
  justify-content: space-between;
}

.pt-35 {
  padding-top: 35 / @r;
}

div.pb-47 {
  padding-bottom: 45 / @r;
}

// form 表单
.form-group {
  .content-box;

  .form-wrap {
    border: 2px solid #54817c;
    padding: 0 12 / @r;
    background-color: #fff;
  }

  input {
    border: 0;
  }

  .form-item-horizontal {
    width: 100%;

    .form-item {
      width: 50%;
      float: left;
    }

    input {
      max-width: 250 / @r;
    }
  }

  .form-item {
    height: 98 / @r;
    line-height: 98 / @r;
    border-bottom: 2 / @r dashed #c5cfb9;
    padding-bottom: 1px;
    .flex;

    label {
      font-size: 32 / @r;
      color: #207081;
      vertical-align: text-bottom;
    }

    input.flex-1 {
      font-size: 32 / @r;
      -webkit-box-flex: 1;
      flex: 1;
    }

    &.bbn {
      border-bottom: 0;
    }
  }

  .self-check {
    float: left;
    height: 100%;

    input[type="radio"] {
      display: none;
    }

    span {
      border: 2px solid #207081;
      padding: 18 / @r 53 / @r;
      background-color: #fff;
      .border-radius(4 / @r);
      margin-right: 50 / @r;
      color: #252525;
    }

    &.active span {
      background-color: #207081;
      color: #fff;
    }
  }

  .teacherCheck span {
    padding: 0.36rem 0.6rem;
    margin-right: 0;
    margin-right: 4 / @r;
  }

  .submit-btn img {
    width: 704 / @r;
    height: 93 / @r;
    margin: 0 auto;
    display: block;
    margin-top: 24 / @r;
    .border-radius(27 / @r);
  }

  .pull-left {
    float: left;
    font-size: 29 / @r;
    margin: 28 / @r 0;
  }

  .pull-right {
    float: right;
    font-size: 29 / @r;
    text-decoration: underline;
    margin: 28 / @r 0;
    color: #ca1a16;
  }
}

// 大师
.master {
  width: 100%;
}

// 悬浮框
.public_test_fixed {
  position: fixed;
  bottom: 0;
  z-index: 9;
  display: block;
  width: 750 / @r;
  height: 100 / @r;
  background: rgba(0, 0, 0, 0.3);
  left: 50%;
  margin-left: -(750/2) / @r;

  img {
    width: 704 / @r;
    height: 93 / @r;
    .border-radius(30 / @r);
    margin-top: 4 / @r;
    margin-left: 24 / @r;
  }

  // 问
  &.question {
    z-index: 2;
    bottom: 150 / @r;
    background: none;
  }

  &.question-btn {
    width: 60 / @r;
    height: 60 / @r;
    display: block;
    right: 50%;
    left: auto;
    margin-right: -335 / @r;

    img {
      width: 60 / @r;
      height: 60 / @r;
      display: block;
      margin: 0;
    }
  }
}

.content {
  background: #9eccca;
}

.top {
  height: 75 / @r;
  line-height: 75 / @r;

  a {
    color: #136263;
    font-size: 28 / @r;
    display: block;
    padding-left: 25 / @r;
  }
}

.question_count {
  height: 50 / @r;
  line-height: 50 / @r;
  font-size: 24 / @r;
  text-align: center;
  color: #737c7b;
  background: #b8dad8;
}

.question_wrap {
  padding: 22 / @r 0 12 / @r 0;

  .user_question_wrap {
    width: 660 / @r;
    background: #659d9e;
    padding-bottom: 96 / @r;
    margin: 0 auto;
    padding-top: 15 / @r;
  }

  .question_item {
    width: 625 / @r;
    padding: 18 / @r 22 / @r;
    background: #c5d7c9;
    margin: 0 auto;

    .question {
      img,
      p {
        display: block;
        float: left;
      }

      p {
        font-size: 30 / @r;
        color: #10585f;
        padding-left: 16 / @r;
      }
    }

    .answer {
      margin-top: 15 / @r;
      border-top: 1px dashed #178590;
      .flex;

      img {
        display: block;
        width: 42 / @r;
        height: 42 / @r;
      }

      p {
        padding-left: 16 / @r;
        font-size: 26 / @r;
      }
    }

    .answer:first-child {
      border-top: 0;
    }
  }

  .question_shou {
    font-size: 18 / @r;
    color: #7f8e8e;
    text-align: center;
  }

  .question_time {
    p {
      font-size: 18 / @r;
      color: #7f8e8e;
    }
  }
}

#comment_srcoller {
  position: relative;
  height: 10rem;
  overflow: hidden;

  #m_pj_list {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem 1.3rem 0 1.3rem;
  }
}

.user_question {
  position: fixed;
  top: 0;
  width: 750 / @r;
  left: 50%;
  margin-left: -(750/2 / @r);
  z-index: 10;

  .content {
    background: #9eccca;
  }

  .top_question {
    height: 75 / @r;

    a {
      color: #136263;
      font-size: 28 / @r;
      display: block;
      padding-left: 25 / @r;
    }
  }

  .question_count {
    height: 50 / @r;
    line-height: 50 / @r;
    font-size: 24 / @r;
    text-align: center;
    color: #737c7b;
    background: #b8dad8;
  }

  .question_wrap {
    padding: 22 / @r 0 12 / @r 0;

    .user_question_wrap {
      width: 660 / @r;
      background: #659d9e;
      padding-bottom: 36 / @r;
      margin: 0 auto;
      padding-top: 15 / @r;
      .border-radius(2 / @r);
      overflow-y: scroll;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;

      &::-webkit-scrollbar {
        width: 0 !important;
      }
    }

    .question_q_item {
      width: 625 / @r;
      padding: 18 / @r 22 / @r;
      background: #c1d9d9;
      margin: 0 auto;
      .border-radius(2 / @r);
      margin-bottom: 24 / @r;

      &:last-child {
        margin-bottom: 0;
      }

      .question {
        img,
        p {
          display: block;
          float: left;
        }

        p {
          font-size: 30 / @r;
          color: #10585f;
          padding-left: 16 / @r;
        }
      }

      .answer {
        padding: 20 / @r 0;
        border-top: 2px dashed #178590;
        .flex;

        img {
          display: block;
          width: 42 / @r;
          height: 42 / @r;
        }

        p {
          padding-left: 16 / @r;
          font-size: 26 / @r;
        }
      }

      .answer_wrap {
        .answer:first-child {
          border-top: 0;
        }
      }
    }

    .question_di {
      padding: 18 / @r 22 / @r;

      .line {
        width: 100%;
        height: 0;
        border-top: 1px solid #fff;
        position: relative;

        p {
          width: 150 / @r;
          height: 24 / @r;
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -75 / @r;
          padding: 0 20 / @r;
          font-size: 18 / @r;
          line-height: 24 / @r;
          top: -12 / @r;
          color: #fff;
          text-align: center;
          background: #659d9e;
        }
      }
    }
  }

  .question_submit {
    width: 750 / @r;
    height: 110 / @r;
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);

    .input_box {
      height: 110 / @r;

      input,
      a {
        float: left;
        display: block;
      }

      input {
        width: 475 / @r;
        height: 54 / @r;
        background: #fff;
        .border-radius(55 / @r);
        padding: 0 30 / @r;
        margin: 28 / @r 0 20 / @r 60 / @r;
        font-size: 20 / @r;
      }

      a {
        width: 122 / @r;
        height: 58 / @r;
        background: url(~@/assets/images/index/tiwen.png);
        margin: 28 / @r 0 28 / @r 20 / @r;
      }
    }
  }
}

/* 弹窗 */
.com-popup {
  position: fixed;
  top: 0;
  left: 50%;
  bottom: 0;
  width: 750 / @r;
  margin-left: -(750/2) / @r;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;

  .popup-content1 {
    border: 1px solid #ba660c;
    background: #e2e2e2;
    border-radius: 0.14rem;
    position: relative;
    z-index: 10;
    background: #fff;
    width: 500 / @r;
    height: 250 / @r;
    left: 50%;
    margin-left: -250 / @r;
    top: 50%;
    margin-top: -2.5rem;

    .quit-tip {
      padding-top: 50 / @r;
      text-align: center;
      font-size: 24 / @r;
      line-height: 1.4;
    }

    .quit-btn-group {
      margin-top: 0.3rem;

      a {
        width: 150 / @r;
        height: 60 / @r;
        float: left;
        display: block;
        text-align: center;
        line-height: 70 / @r;
        background-color: #ba660c;
        font-size: 24 / @r;
        color: #fff;
        .border-radius(5 / @r);
        -webkit-box-shadow: 0 2px 6px -2px #000;
        box-shadow: 0 2px 6px -2px #000;
        margin-left: 50 / @r;
      }

      a:first-child {
        float: right;
        margin-right: 50 / @r;
      }
    }
  }

  .close-btn {
    position: absolute;
    top: -1rem;
    right: 0;
    width: 0.8rem;
    height: 0.8rem;
    background: url(~@/assets/images/index/close_btn.png) no-repeat center;
    background-size: 0.8rem;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

@keyframes ani {
  0% {
    bottom: 2.5rem;
  }

  50% {
    bottom: 4rem;
    opacity: 1;
  }

  100% {
    bottom: 5rem;
    opacity: 0;
  }
}

@-webkit-keyframes ani {
  0% {
    bottom: 2.5rem;
  }

  50% {
    bottom: 4.5rem;
    opacity: 1;
  }

  100% {
    bottom: 5.5rem;
    opacity: 0;
  }
}

.animation-css {
  animation: ani 2s linear;
  -webkit-animation: ani 2s linear;
}

.dis-table {
  display: table;
}

.dis-table > div {
  display: table-cell;
  vertical-align: top;
}

.content-box {
  padding: 17 / @r 15 / @r 0 15 / @r;
  background-color: #9eccca;
}

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.border-radius(@px) {
  border-radius: @px;
  -webkit-border-radius: @px;
  -moz-border-radius: @px;
  -o-border-radius: @px;
}

.border-radius-tr(@px) {
  border-radius: @px @px 0 0;
  -webkit-border-radius: @px @px 0 0;
  -moz-border-radius: @px @px 0 0;
  -o-border-radius: @px @px 0 0;
}

.border-radius-rb(@px) {
  border-radius: 0 @px @px 0;
  -webkit-border-radius: 0 @px @px 0;
  -moz-border-radius: 0 @px @px 0;
  -o-border-radius: 0 @px @px 0;
}

.border-radius-bl(@px) {
  border-radius: 0 0 @px @px;
  -webkit-border-radius: 0 0 @px @px;
  -moz-border-radius: 0 0 @px @px;
  -o-border-radius: 0 0 @px @px;
}
</style>
