<template>
  <div>
    <HeaderTop></HeaderTop>
    <MSlider></MSlider>
    <Ada></Ada>
    <Money></Money>
    <Adb></Adb>
    <Finance></Finance>
    <Adc></Adc>
    <FooterBottom cname="mfooter"></FooterBottom>
    <NavBar></NavBar>
  </div>
</template>

<script>
import HeaderTop from '../public/header.vue'
import FooterBottom from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
import MSlider from './mslider.vue'
import Ada from './ada.vue'
import Money from './money.vue'
import Adb from './adb.vue'
import Finance from './finance.vue'
import Adc from './adc.vue'

export default {
  components: {
    HeaderTop,
    FooterBottom,
    NavBar,
    MSlider,
    Ada,
    Money,
    Adb,
    Finance,
    Adc
  }
}
</script>

<style lang="scss" scoped module>
  .footer {
    margin-top: 0 !important;
    ul {
      li:first-child {
        display: none;
      }
    }
  }
</style>