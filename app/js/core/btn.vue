<template>
  <div :class="[btnClass, cname]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btnClass: 'btn'
    }
  },
  props: {
    cname: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../css/element.scss';

.btn {
  @include btn;
}
</style>
