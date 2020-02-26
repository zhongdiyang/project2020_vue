<template>
  <div class='gearDate' @mousewheel.prevent.stop="closeDefalut" @touchmove.prevent.stop="closeDefalut">
    <div class="date_ctrl date_box slideInUp">
      <div class="data_box" v-show="!dateTip">
        <div class="mark_date"></div>
        <div class="date_info_box lcalendar_info">{{ defaultData.type === 1 ? '农历:'+showData.lunar : '公历:'+showData.solar }}</div>
        <div class="date_class_box">
          <div class="date_class lcalendar_gongli" :class='{"active": defaultData.type === 0}' @click="convertTap('gongli')">公历(阳历)</div>
          <div class="date_class lcalendar_nongli" :class='{"active": defaultData.type === 1}' @click="convertTap('nongli')" style="margin-left: -4px;">农历(阴历)</div></div>
        <div class="date_roll_mask">
          <div class="date_roll date_roll_more">
            <div>
              <swiper
                :swiperClass='className'
                :swiperData='renderDate.year'
                :selectIndex='renderDate.yearVal'
                :swiperHeight='swiper'
                name='year'
                @changeIndex='changeIndex'
                class="gear date_yy"
                :val="renderDate.yearVal"
                :style="{height: renderDate.year.length * 40 +'px'}"
              ></swiper>
              <div class="date_grid"></div>
            </div>
            <div>
              <swiper
                :swiperClass='className'
                :swiperData='renderDate.month'
                :selectIndex='renderDate.monthVal'
                :swiperHeight='swiper'
                name='month'
                @changeIndex='changeIndex'
                class="gear date_mm"
                :val="renderDate.monthVal"
                :style="{height: renderDate.month.length * 40 +'px'}"
              ></swiper>
              <div class="date_grid"></div>
            </div>
            <div>
              <swiper
                :swiperClass='className'
                :swiperData='renderDate.time'
                :selectIndex='renderDate.timeVal'
                :swiperHeight='swiper'
                name='time'
                @changeIndex='changeIndex'
                class="gear date_yy"
                :val="renderDate.timeVal"
                :style="{height: renderDate.time.length * 40 +'px'}"
              ></swiper>
              <div class="date_grid"></div>
            </div>
            <div>
              <swiper
                :swiperClass='className'
                :swiperData='renderDate.hour'
                :selectIndex='renderDate.hourVal'
                :swiperHeight='swiper'
                name='hour'
                @changeIndex='changeIndex'
                class="gear date_mm"
                :val="renderDate.hourVal"
                :style="{height: renderDate.hour.length * 40 +'px'}"
              ></swiper>
              <div class="date_grid"></div>
            </div>
          </div>
          <div class="date_btn_box">
            <div class="date_btn lcalendar_cancel" @click="closeCalender">取消</div>
            <div class="date_btn lcalendar_finish" @click="checkDate">确定</div></div>
        </div>
      </div>
      <div class="data_tip" v-show="dateTip">
        <div class="date_tip_til">确认时间</div>
        <div class="date_tip_des">请确认输入的时间是否正确</div>
        <div class="date_tip_box">
          <p>公(阳)历：{{ showData.solar }}
            <span id="solar_date"></span></p>
          <p>农(阴)历：{{ showData.lunar }}
            <span id="lunar_date"></span></p>
        </div>
        <div class="date_btn_box">
          <div class="date_btn data_tip_cancel" @click="checkDate">返回修改</div>
          <div class="date_btn data_tip_finish" @click="confirm">确定正确</div></div>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from './swiper'
export default {
  components: {
    swiper
  },
  data () {
    return {
      className: 'tooth',
      swiper: 40,
      renderDate: {
        year: [],
        yearVal: 40,
        month: [],
        monthVal: 4,
        time: [],
        timeVal: 8,
        hour: [],
        hourVal: 0
      },
      defaultData: {
        minY: 1940,
        minM: 1,
        minD: 1,
        maxY: 2018,
        maxM: 12,
        maxD: 31,
        type: 1 // 0公历，1农历
      },
      userDefaultDate: '1980-7-6',
      dataTile: '',
      lunarYearToMonthMark: false,
      dateTip: false,
      showData: {
        lunar: '',
        solar: '',
        solar_r: '',
        hour: ''
      }
    }
  },
  created () {
    // 初始化 农历 数据
    this.LunarCal = [
      new TagLunarCal(38, 0, 0, 38, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1), /* 1940 */
      new TagLunarCal(26, 6, 2, 44, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0),
      new TagLunarCal(45, 0, 3, 49, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0),
      new TagLunarCal(35, 0, 4, 54, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(24, 4, 5, 59, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1), /* 1944 */
      new TagLunarCal(43, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1),
      new TagLunarCal(32, 0, 1, 10, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1),
      new TagLunarCal(21, 2, 2, 15, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1),
      new TagLunarCal(40, 0, 3, 20, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1), /* 1948 */
      new TagLunarCal(28, 7, 5, 26, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(47, 0, 6, 31, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(36, 0, 0, 36, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0),
      new TagLunarCal(26, 5, 1, 41, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1), /* 1952 */
      new TagLunarCal(44, 0, 3, 47, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1),
      new TagLunarCal(33, 0, 4, 52, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0),
      new TagLunarCal(23, 3, 5, 57, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1),
      new TagLunarCal(42, 0, 6, 2, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1), /* 1956 */
      new TagLunarCal(30, 8, 1, 8, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0),
      new TagLunarCal(48, 0, 2, 13, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0),
      new TagLunarCal(38, 0, 3, 18, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(27, 6, 4, 23, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0), /* 1960 */
      new TagLunarCal(45, 0, 6, 29, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0),
      new TagLunarCal(35, 0, 0, 34, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1),
      new TagLunarCal(24, 4, 1, 39, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0),
      new TagLunarCal(43, 0, 2, 44, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0), /* 1964 */
      new TagLunarCal(32, 0, 4, 50, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1),
      new TagLunarCal(20, 3, 5, 55, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0),
      new TagLunarCal(39, 0, 6, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0),
      new TagLunarCal(29, 7, 0, 5, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1), /* 1968 */
      new TagLunarCal(47, 0, 2, 11, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(36, 0, 3, 16, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0),
      new TagLunarCal(26, 5, 4, 21, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1),
      new TagLunarCal(45, 0, 5, 26, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1), /* 1972 */
      new TagLunarCal(33, 0, 0, 32, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1),
      new TagLunarCal(22, 4, 1, 37, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1),
      new TagLunarCal(41, 0, 2, 42, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1),
      new TagLunarCal(30, 8, 3, 47, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1), /* 1976 */
      new TagLunarCal(48, 0, 5, 53, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1),
      new TagLunarCal(37, 0, 6, 58, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(27, 6, 0, 3, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0),
      new TagLunarCal(46, 0, 1, 8, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0), /* 1980 */
      new TagLunarCal(35, 0, 3, 14, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1),
      new TagLunarCal(24, 4, 4, 19, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1),
      new TagLunarCal(43, 0, 5, 24, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1),
      new TagLunarCal(32, 10, 6, 29, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1), /* 1984 */
      new TagLunarCal(50, 0, 1, 35, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0),
      new TagLunarCal(39, 0, 2, 40, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1),
      new TagLunarCal(28, 6, 3, 45, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0),
      new TagLunarCal(47, 0, 4, 50, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1), /* 1988 */
      new TagLunarCal(36, 0, 6, 56, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0),
      new TagLunarCal(26, 5, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1),
      new TagLunarCal(45, 0, 1, 6, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0),
      new TagLunarCal(34, 0, 2, 11, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0), /* 1992 */
      new TagLunarCal(22, 3, 4, 17, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0),
      new TagLunarCal(40, 0, 5, 22, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0),
      new TagLunarCal(30, 8, 6, 27, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1),
      new TagLunarCal(49, 0, 0, 32, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1), /* 1996 */
      new TagLunarCal(37, 0, 2, 38, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1),
      new TagLunarCal(27, 5, 3, 43, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1),
      new TagLunarCal(46, 0, 4, 48, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1), /* 1999 */
      new TagLunarCal(35, 0, 5, 53, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1), /* 2000 */
      new TagLunarCal(23, 4, 0, 59, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(42, 0, 1, 4, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(31, 0, 2, 9, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0),
      new TagLunarCal(21, 2, 3, 14, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1), /* 2004 */
      new TagLunarCal(39, 0, 5, 20, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(28, 7, 6, 25, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1),
      new TagLunarCal(48, 0, 0, 30, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1),
      new TagLunarCal(37, 0, 1, 35, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1), /* 2008 */
      new TagLunarCal(25, 5, 3, 41, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1),
      new TagLunarCal(44, 0, 4, 46, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1),
      new TagLunarCal(33, 0, 5, 51, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(22, 4, 6, 56, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0), /* 2012 */
      new TagLunarCal(40, 0, 1, 2, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0),
      new TagLunarCal(30, 9, 2, 7, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1),
      new TagLunarCal(49, 0, 3, 12, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1),
      new TagLunarCal(38, 0, 4, 17, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0), /* 2016 */
      new TagLunarCal(27, 6, 6, 23, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1),
      new TagLunarCal(46, 0, 0, 28, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0),
      new TagLunarCal(35, 0, 1, 33, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0),
      new TagLunarCal(24, 4, 2, 38, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1), /* 2020 */
      new TagLunarCal(42, 0, 4, 44, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1),
      new TagLunarCal(31, 0, 5, 49, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0),
      new TagLunarCal(21, 2, 6, 54, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1),
      new TagLunarCal(40, 0, 0, 59, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1), /* 2024 */
      new TagLunarCal(28, 6, 2, 5, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0),
      new TagLunarCal(47, 0, 3, 10, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1),
      new TagLunarCal(36, 0, 4, 15, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1),
      new TagLunarCal(25, 5, 5, 20, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0), /* 2028 */
      new TagLunarCal(43, 0, 0, 26, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1),
      new TagLunarCal(32, 0, 1, 31, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0)
    ]
    function TagLunarCal (d, i, w, k, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13) {
      // 农历对象数据处理
      /* 1 月 1 日到正月初一的累计日 */
      this.BaseDays = d
      /* 闰月月份. 0==此年沒有闰月 */
      this.Intercalation = i
      /* 此年 1 月 1 日为星期减 1 */
      this.BaseWeekday = w
      /* 此年 1 月 1 日之干支序号减 1 */
      this.BaseKanChih = k
      /* 此农历年每月之大小, 0==小月(29日), 1==大月(30日) */
      this.MonthDays = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13]
    }
    this.dateCtrlInit()
    this.setShowData()
  },
  methods: {
    dateCtrlInit () {
      let date = new Date()
      let dateArr = {
        yy: date.getYear(),
        mm: date.getMonth(),
        dd: date.getDate() - 1
      }
      if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(this.userDefaultDate)) {
        let rs = this.userDefaultDate.match(/(^|-)\d{1,4}/g)
        dateArr.yy = rs[0] - this.defaultData.minY
        dateArr.mm = rs[1].replace(/-/g, '')
        dateArr.dd = rs[2].replace(/-/g, '')
      } else {
        dateArr.yy = dateArr.yy + 1900 - this.defaultData.minY
      }
      let data = this.calendarConvert((this.defaultData.type === 1 ? 0 : 1), (dateArr.yy + this.defaultData.minY), dateArr.mm, dateArr.dd)
      this.renderDate.yearVal = data.yy - this.defaultData.minY
      let LeapMonth = this.LunarCal[this.renderDate.yearVal].Intercalation
      let hasLeapMonth = LeapMonth !== 0
      // data 返回的是值，而 monthVal 和 timeVal 是索引位置
      if (data.mm < 0 && this.defaultData.type === 1) {
        this.renderDate.monthVal = Math.abs(parseInt(data.mm))
      } else {
        if (hasLeapMonth && LeapMonth > data.mm) {
          this.renderDate.monthVal = data.mm - 1
        } else {
          this.renderDate.monthVal = data.mm
        }
      }
      this.renderDate.timeVal = data.dd - 1
    },
    convertTap (type) {
      // 解决多次点击
      if ((type === 'gongli' && this.defaultData.type === 0) || (type === 'nongli' && this.defaultData.type === 1)) return
      let data
      if (type === 'gongli') {
        this.defaultData.type = 0
        let LeapMonth = this.LunarCal[this.renderDate.yearVal].Intercalation
        let hasLeapMonth = LeapMonth !== 0
        let monthVal = () => {
          if (hasLeapMonth && this.renderDate.monthVal === LeapMonth) {
            return -LeapMonth
          } else if (hasLeapMonth && this.renderDate.monthVal >= LeapMonth) {
            return this.renderDate.monthVal
          } else {
            return this.renderDate.monthVal + 1
          }
        }
        data = this.calendarConvert(1, this.renderDate.yearVal + this.defaultData.minY, monthVal(), this.renderDate.timeVal + 1)
        // console.log('1', data)
        this.renderDate.yearVal = data.yy - this.defaultData.minY
        this.renderDate.monthVal = data.mm - 1
        this.renderDate.timeVal = data.dd - 1
      } else if (type === 'nongli') {
        this.defaultData.type = 1
        data = this.calendarConvert(0, this.renderDate.yearVal + this.defaultData.minY, this.renderDate.monthVal + 1, this.renderDate.timeVal + 1)
        // console.log('2', data)
        this.renderDate.yearVal = data.yy - this.defaultData.minY
        let LeapMonth = this.LunarCal[this.renderDate.yearVal].Intercalation
        // console.log(LeapMonth, this.LunarCal, this.LunarCal[this.renderDate.yearVal])
        let hasLeapMonth = LeapMonth !== 0
        // data 返回的是值，而 monthVal 和 timeVal 是索引位置
        if (data.mm < 0 && this.defaultData.type === 1) {
          this.renderDate.monthVal = Math.abs(parseInt(data.mm))
        } else {
          if (hasLeapMonth && LeapMonth < data.mm) {
            this.renderDate.monthVal = data.mm
          } else {
            this.renderDate.monthVal = data.mm - 1
          }
        }
        this.renderDate.timeVal = data.dd - 1
      }
      this.setDateGearTooth()
    },
    GetLeap (year) {
      /* 闰年, 返回 0 平年, 1 闰年 */
      if (year % 400 === 0) {
        return 1
      } else if (year % 100 === 0) {
        return 0
      } else if (year % 4 === 0) {
        return 1
      } else {
        return 0
      }
    },
    calcDays (year, month) {
      // 求月份最大天数
      // 农历查询数据
      if (this.defaultData.type === 1) {
        if (this.LunarCal[year].MonthDays[month]) {
          return 30
        } else {
          return 29
        }
      } else {
        if (month === 1) {
          year += this.defaultData.minY
          if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 4000 !== 0)) {
            return 29
          } else {
            return 28
          }
        } else {
          if (month === 3 || month === 5 || month === 8 || month === 10) {
            return 30
          } else {
            return 31
          }
        }
      }
    },
    getChinese (type, num) {
      // 中文转换,type:rm闰月，mm月份，dd日期，num值
      let rmArr = ['闰正月', '闰二月', '闰三月', '闰四月', '闰五月', '闰六月', '闰七月', '闰八月', '闰九月', '闰十月', '闰冬月', '闰腊月']
      let mmArr = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      let ddArr = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十', '三十一']
      let hhArr = ['0子', '1丑', '2丑', '3寅', '4寅', '5卯', '6卯', '7辰', '8辰', '9巳', '10巳', '11午', '12午', '13未', '14未', '15申', '16申', '17酉', '18酉', '19戌', '20戌', '21亥', '22亥', '23子']
      if (type === 'rm') return rmArr[num - 1]
      if (type === 'mm') return mmArr[num - 1]
      if (type === 'dd') return ddArr[num - 1]
      if (type === 'hh') return hhArr[num]
    },
    calendarConvert (M, dateyy, datemm, datedd) {
      /**
      *  公历农历转换
      *  M=0公历到农历,M=1农历到公历
      *  dateyy:年
      *  datemm:月，闰月为 负数
      *  datedd:日
      */
      let year = dateyy
      let month = datemm
      let date = datedd
      let FIRSTYEAR = 1940 // 最小年份
      // let LASTYEAR = 2030 // 最大年份
      // 西曆年每月之日數
      // let SolarCal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      // 西曆年每月之累積日數, 平年與閏年
      let SolarDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365, 396, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366, 397]
      let SolarYear, SolarMonth, SolarDate, LunarYear, LunarMonth, LunarDate, y, im, acc, leap
      // 公历转农历
      if (M === 0) {
        SolarYear = parseInt(year)
        SolarMonth = parseInt(month)
        SolarDate = parseInt(date)
        let sm = SolarMonth - 1
        leap = this.GetLeap(SolarYear)
        y = SolarYear - FIRSTYEAR
        acc = SolarDays[leap * 14 + sm] + SolarDate
        let kc = acc + this.LunarCal[y].BaseKanChih
        let Age = kc % 60
        Age = (Age < 22) ? 22 - Age : 82 - Age

        Age = Age + 3
        if (Age < 10) Age = Age + 60

        if (acc <= this.LunarCal[y].BaseDays) {
          y--
          LunarYear = SolarYear - 1
          leap = this.GetLeap(LunarYear)
          sm += 12
          acc = SolarDays[leap * 14 + sm] + SolarDate
        } else {
          LunarYear = SolarYear
        }
        let l1 = this.LunarCal[y].BaseDays
        let i = 0
        for (; i < 13; i++) {
          let l2 = l1 + this.LunarCal[y].MonthDays[i] + 29
          if (acc <= l2) break
          l1 = l2
        }
        LunarMonth = i + 1
        LunarDate = acc - l1
        im = this.LunarCal[y].Intercalation
        if (im !== 0 && LunarMonth > im) {
          LunarMonth--
          if (LunarMonth === im) LunarMonth = -im
        }
        if (LunarMonth > 12) LunarMonth -= 12
        return {yy: LunarYear, mm: LunarMonth, dd: LunarDate}
      } else {
        /* 农历转公历 */
        LunarYear = parseInt(year)
        LunarMonth = parseInt(month)
        LunarDate = parseInt(date)

        y = LunarYear - FIRSTYEAR
        im = this.LunarCal[y].Intercalation
        let lm = LunarMonth

        if (im !== 0) {
          if (lm > im) {
            lm++
          } else if (lm === -im) {
            lm = im + 1
          }
        }
        lm--

        acc = 0
        for (let j = 0; j < lm; j++) {
          acc += this.LunarCal[y].MonthDays[j] + 29
        }

        acc += this.LunarCal[y].BaseDays + LunarDate

        leap = this.GetLeap(LunarYear)
        let k
        for (k = 13; k >= 0; k--) {
          if (acc > SolarDays[leap * 14 + k]) break
        }
        SolarDate = acc - SolarDays[leap * 14 + k]

        if (k <= 11) {
          SolarYear = LunarYear
          SolarMonth = k + 1
        } else {
          SolarYear = LunarYear + 1
          SolarMonth = k - 11
        }
        return {yy: SolarYear, mm: SolarMonth, dd: SolarDate}
      }
    },
    setDateGearTooth () {
      let passY = this.defaultData.maxY - this.defaultData.minY + 1
      if (this.lunarYearToMonthMark) {
        this.renderDate.monthVal -= 1
        this.lunarYearToMonthMark = false
      }
      // 先清空数组
      this.renderDate.year = []
      this.renderDate.month = []
      this.renderDate.time = []
      this.renderDate.hour = []
      // 获取年份数组
      for (let p = 0; p < passY; p++) {
        this.renderDate.year.push(this.defaultData.minY + p)
      }
      // 月份信息获取
      let maxM
      let mmVal = parseInt(this.renderDate.monthVal)
      // 获取闰月月份信息 0==此年沒有闰月
      let rmNum = this.LunarCal[this.renderDate.yearVal].Intercalation ? this.LunarCal[this.renderDate.yearVal].Intercalation : 0
      if (rmNum && this.defaultData.type) {
        maxM = 12
        // 解决年份切换闰月过程中，月份索引跳动的问题
        if (rmNum <= this.renderDate.monthVal) {
          this.renderDate.monthVal += 1
          this.lunarYearToMonthMark = true
        }
      } else {
        maxM = 11
      }
      let minM = 0
      // 当年份到达最大值
      if (this.renderDate.yearVal === passY - 1) {
        if (this.defaultData.type) {
          maxM = this.defaultData.maxM - 2
        } else {
          maxM = this.defaultData.maxM - 1
        }
      }
      // 当年份到达最小值
      if (this.renderDate.yearVal === 0) {
        if (this.defaultData.type) {
          minM = this.defaultData.minM - 1
        } else {
          minM = this.defaultData.minM
        }
      }
      // p 当前节点前后需要展示的节点个数
      for (let p = 0; p < maxM - minM + 1; p++) {
        let strVal = minM + p + 1
        // 农历
        if (this.defaultData.type) {
          // 闰月
          if (rmNum && rmNum === p) {
            strVal = this.getChinese('rm', strVal - 1)
          } else if (rmNum && rmNum < p) {
            strVal = this.getChinese('mm', strVal - 1)
          } else {
            strVal = this.getChinese('mm', strVal)
          }
        }
        this.renderDate.month.push(strVal)
      }
      if (mmVal > maxM) {
        mmVal = maxM
        this.renderDate.monthVal = mmVal
      } else if (mmVal < minM) {
        mmVal = maxM
        this.renderDate.monthVal = mmVal
      }

      // 获取日期的值
      let ddVal = parseInt(this.renderDate.timeVal)
      // 获取月份的天数
      let maxMonthDays = this.calcDays(this.renderDate.yearVal, this.renderDate.monthVal)

      // 当前节点前后需要展示的节点个数
      let maxD = maxMonthDays - 1
      let minD = 0
      // 当年份月份到达最大值
      if (this.renderDate.yearVal === passY - 1 && mmVal + 1 === 11) {
        if (this.defaultData.type === 1) {
          maxD = this.defaultData.maxD - 7
        } else {
          maxD = this.defaultData.maxD - 2
        }
      }
      // 当年、月到达最小值
      if (this.renderDate.yearVal === 0 && mmVal + 1 === 2) {
        if (this.defaultData.type === 1) {
          minD = this.defaultData.minD - 1
        } else {
          minD = this.defaultData.minD + 6
        }
      }
      for (let p = 0; p < maxD - minD + 1; p++) {
        let strVal = this.defaultData.type === 1 ? this.getChinese('dd', minD + p + 1) : (minD + p + 1)
        this.renderDate.time.push(strVal)
      }
      if (ddVal > maxD) {
        ddVal = maxD
      } else if (ddVal < minD) {
        ddVal = minD
      }

      // 获取时辰
      // 默认push一个未知时辰
      this.renderDate.hour.push('未知')
      for (let p = 0; p < 24; p++) {
        let strVal = this.defaultData.type === 1 ? this.getChinese('hh', p) : p
        this.renderDate.hour.push(strVal + '时')
      }
    },
    closeDefalut () {
      // 阻止内容的滚动
    },
    changeIndex (type, value) {
      if (type === 'year') {
        this.renderDate.yearVal = value
        this.setDateGearTooth()
      } else if (type === 'month') {
        this.renderDate.monthVal = value
      } else if (type === 'time') {
        this.renderDate.timeVal = value
        this.setDateGearTooth()
      } else if (type === 'hour') {
        this.renderDate.hourVal = value
        this.setDateGearTooth()
      }
    },
    closeCalender () {
      this.$emit('close')
    },
    setShowData () {
      let data
      if (this.defaultData.type === 1) {
        this.showData.lunar = this.renderDate.year[this.renderDate.yearVal] + '年' + this.renderDate.month[this.renderDate.monthVal] + this.renderDate.time[this.renderDate.timeVal] + ' ' + this.renderDate.hour[this.renderDate.hourVal]
        let LeapMonth = this.LunarCal[this.renderDate.yearVal].Intercalation
        let hasLeapMonth = LeapMonth !== 0
        let monthVal = () => {
          if (hasLeapMonth && this.renderDate.monthVal === LeapMonth) {
            return -LeapMonth
          } else if (hasLeapMonth && this.renderDate.monthVal >= LeapMonth) {
            return this.renderDate.monthVal
          } else {
            return this.renderDate.monthVal + 1
          }
        }
        data = this.calendarConvert(1, this.renderDate.yearVal + this.defaultData.minY, monthVal(), this.renderDate.timeVal + 1)
        this.showData.solar = data.yy + '年' + data.mm + '月' + data.dd + '日 ' + this.renderDate.hour[this.renderDate.hourVal]
        this.showData.solar_r = data.yy + '-' + data.mm + '-' + data.dd
      } else {
        data = this.calendarConvert(0, this.renderDate.yearVal + this.defaultData.minY, this.renderDate.monthVal + 1, this.renderDate.timeVal + 1)
        this.showData.solar = this.renderDate.year[this.renderDate.yearVal] + '年' + this.renderDate.month[this.renderDate.monthVal] + '月' + this.renderDate.time[this.renderDate.timeVal] + '日 ' + this.renderDate.hour[this.renderDate.hourVal]
        this.showData.solar_r = this.renderDate.year[this.renderDate.yearVal] + '-' + this.renderDate.month[this.renderDate.monthVal] + '-' + this.renderDate.time[this.renderDate.timeVal]
        this.showData.lunar = data.yy + '年' + (data.mm < 0 ? this.getChinese('rm', -data.mm) : this.getChinese('mm', data.mm)) + this.getChinese('dd', data.mm) + ' ' + this.renderDate.hour[this.renderDate.hourVal]
      }
      this.showData.hour = this.renderDate.hourVal - 1
    },
    checkDate () {
      this.dateTip = !this.dateTip
    },
    confirm () {
      this.$store.commit('changeBirthTime', {
        date: this.showData.solar_r,
        hour: this.showData.hour
      })
      this.$emit('close')
    }
  },
  watch: {
    'renderDate.yearVal': {
      handler: function (val, oldval) {
        this.setShowData()
      },
      deep: true
    },
    'renderDate.monthVal': {
      handler: function (val, oldval) {
        this.setShowData()
      },
      deep: true
    },
    'renderDate.timeVal': {
      handler: function (val, oldval) {
        this.setShowData()
      },
      deep: true
    },
    'renderDate.hourVal': {
      handler: function (val, oldval) {
        this.setShowData()
      },
      deep: true
    }
  }
}
</script>
<style>
@import url(../assets/css/calendar.min.css);
.gearDate .mark_date {
    width: 100%;
    height: 3.4em;
    position: absolute;
    box-shadow: 0 -1px 4px 0 red, 0 1px 4px 0 red;
    top: 54%;
}
</style>
