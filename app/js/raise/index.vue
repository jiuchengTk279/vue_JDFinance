<template>
  <div>
    <HeaderTop></HeaderTop>
    <RSlider></RSlider>
    <Daily></Daily>
    <In></In>
    <More></More>
    <FooterBottom></FooterBottom>
    <NavBar></NavBar>
  </div>
</template>

<script>
import HeaderTop from '../public/header.vue'
import FooterBottom from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
import RSlider from './rslider.vue'
import Daily from './daily.vue'
import In from './in.vue'
import More from './more.vue'

export default {
  components: {
    HeaderTop,
    FooterBottom,
    NavBar,
    RSlider,
    Daily,
    In,
    More
  }
}
</script>

<style lang="scss" scoped module>

</style>