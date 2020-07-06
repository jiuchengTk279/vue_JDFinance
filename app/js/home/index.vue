<template lang="html">
    <div>
        <HeaderTop></HeaderTop>
        <Slider></Slider>
        <Novice></Novice>
        <Borrow></Borrow>
        <Money></Money>
        <Product></Product>
        <Life></Life>
        <FooterBottom></FooterBottom>
        <NavBar></NavBar>
    </div>
</template>

<script>
import HeaderTop from '../public/header.vue'
import Slider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import FooterBottom from '../public/footer.vue'
import NavBar from '../public/navbar.vue'

export default {
  components: {
    HeaderTop,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    FooterBottom,
    NavBar
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
</style>
