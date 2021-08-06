<template>
  <component :is="tagName"  class="name-ss" :style="fontSizeStyle">
    <span class="html-tag"><</span>Sébastien<span class="html-tag">></span>
    <br>
    <span class="html-tag">&nbsp;&nbsp;&nbsp;&nbsp;<</span>Seigneur <span class="html-tag"> /></span>
  </component>
</template>

<script>
export default {
  name: "NameTag",
  props: {
    tagName: {
      type: String,
      required: true
    },
    fontSize: {
      type: String,
      default: '50px'
    }
  },
  computed: {
    fontSizeStyle() {
      return `font-size: ${this.fontSize};`
    }
  }
}
</script>

<style lang="scss" scoped>

.name-ss {
  color: white;
  font-family: Poppins,serif;
  font-weight: 600;
  .html-tag {
    font-family: 'Roboto',serif;
    font-weight: 400;
  }
}
</style>
