<template>
  <component :is="tagName"  class="name-ss" :style="fontSizeStyle">
    <span class="html-tag"><</span>Sébastien<span class="html-tag">></span>
    <br>
    <span class="html-tag" id="name-indent"><</span>Seigneur<span class="html-tag"> /></span>
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
  line-height: 120%;
  width: 110%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .html-tag {
    font-family: 'Roboto',serif;
    font-weight: 400;
  }

  #name-indent {
    margin-left: 12%;
  }
}
</style>
