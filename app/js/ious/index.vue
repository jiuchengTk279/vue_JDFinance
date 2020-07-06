<template>
  <div>
    <HeaderTop></HeaderTop>
    <Slider></Slider>
    <Welfare></Welfare>
    <Service></Service>
    <FooterBottom></FooterBottom>
    <NavBar></NavBar>
  </div>
</template>

<script>
import HeaderTop from '../public/header.vue'
import FooterBottom from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
import Slider from './lslider.vue'
import Welfare from './welfare.vue'
import Service from './service.vue'

export default {
  components: {
    HeaderTop,
    FooterBottom,
    NavBar,
    Slider,
    Welfare,
    Service
  }
}
</script>

<style lang="scss" scoped module>

</style>