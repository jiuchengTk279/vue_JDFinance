/* eslint-disable */
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
// eslint-disable-next-line import/order
// import Swiper from "swiper"
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
// Vue.use(Swiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
