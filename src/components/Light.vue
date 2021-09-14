<template>
  <div :style="{background: color}"
       :class="`light ${active}`">
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    disabled: Boolean
  },
  computed: {
    active() {
      return this.disabled ? "" : "active";
    }
  }
}
</script>

<style lang="sass">
  .light
    width: 200px
    height: 200px
    border: 1px solid black
    border-radius: 50%
    background: #fff
    margin: 10px 0
    opacity: 0.5
  .active
    opacity: 1
</style>