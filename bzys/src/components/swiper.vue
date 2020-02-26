<template>
  <swiper :options="swiperOption" ref="mySwiper" :style="{height: swiperBoxHeight + 'px !import'}">
    <!-- 获取显示的中间位置 -->
    <swiper-slide v-for='(item,index) in swiperData' :key='item' class="tooth" :class='{"selected_active": index === selectIndex}'>{{ item }}</swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    swiperClass: String,
    swiperData: Array,
    selectIndex: Number,
    swiperHeight: Number,
    name: String
  },
  components: {
    swiper,
    swiperSlide
  },
  name: 'carrousel',
  data () {
    let $this = this
    return {
      swiperBoxHeight: 0,
      swiperOption: {
        direction: 'vertical',
        grabCursor: true,
        mousewheel: true,
        height: 300,
        slidesPerView: 'auto',
        autoHeight: true,
        speed: 0,
        on: {
          slideChange: function () {
            $this.$emit('changeIndex', $this.name, this.activeIndex)
          },
          setTranslate: function () {
            this.translate = -$this.swiperOption.height * $this.selectIndex
          }
        }
      }
    }
  },
  watch: {
    selectIndex (value) {
      this.selectIndex = value
      this.swiperOption.initialSlide = value
    }
  },
  created () {
    this.swiperOption.initialSlide = this.selectIndex
    this.swiperOption.height = this.swiperHeight
  }
}
</script>

<style>
.swiper-container {
  margin-top: 40px;
}
</style>
