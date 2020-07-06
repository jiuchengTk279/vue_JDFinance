<template>
<!-- 对于 CSS 模块化，组件先定义默认的样式，再定义传入的样式，动态样式绑定 -->
  <section :class="[panelClass, cname]">
    <h4>-{{ title }}-</h4>
    <slot></slot>
    <!-- <div>{{ content }}</div> -->
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    cname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      panelClass: "panel"
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../css/element.scss';

.panel {
  @include panel
}
</style>