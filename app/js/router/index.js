import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Ious from "../ious/index.vue"
import Raise from "../raise/index.vue"
import DownLoad from "../special/download.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "*/",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "Home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        },
        {
            path: "/ious",
            name: "ious",
            component: Ious,
        },
        {
            path: "/raise",
            name: "raise",
            component: Raise,
        },
        {
            path: "/download",
            name: "download",
            // eslint-disable-next-line key-spacing
            component:  DownLoad,
        },
    ],
})
