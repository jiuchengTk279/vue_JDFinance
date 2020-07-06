<template>
  <section :name="cname">
    <Swiper :options="options" :not-next-tick="options.notNextTick">
      <Swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{ name: item.href }">
          <img :src="item.src" alt="">
        </router-link>
      </Swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
    </Swiper>
  </section>
</template>

<script>
import {Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    cname: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
              el: ".swiper-pagination",
          },
          notNextTick: false
        }
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  // @import "~swiper/dist/css/swiper.css";
</style>