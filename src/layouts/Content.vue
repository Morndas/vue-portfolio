<template>
  <div id="content">
    <div class="body-gradient" :class="pageSizeClass">
      <div class="main-content">
        <slot name="main-content" />
      </div>
      <div class="sun-section" :style="sunStyles">
        <div id="sun"/>
      </div>
    </div>
    <div class="sea">
      <slot name="sea-content" />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "../components/Header";
import {PageOrderMixin} from "../mixins/PageOrderMixin.js"

export default {
  name: 'ContentLayout',
  components: {
    Header
  },
  mixins: [PageOrderMixin],
  props: {
    pageSize: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pageSizeClass() {
      return (this.pageSize === 1 ? 'size-1' : 'size-2')
    },
    sunStyles() {
      return (this.pagePosition > 0) ?
        {'padding-right': `${this.pagePosition * 5}%`} :
        {'padding-left': `${this.pagePosition * 5}%`}
    }
  }
}
</script>

<style lang="scss" scoped>

.body-gradient {
  position: relative;
  overflow: hidden auto;
  height: 100%;

  &.size-1 {
    min-height: calc(72vh - #{$header-size}); // omits the size of the header, the sea part makes for the last 28vh
    background: linear-gradient(180deg, $sand 0%, $orange 100%)
  }

  &.size-2 {
    min-height: calc(172vh - #{$header-size * 2});
    background: linear-gradient(180deg, $blue 0%, $sand 50%, $orange 100%)
  }

  .main-content {
    position: relative;
    z-index: 2; // content goes on top of the #sun
  }

  .sun-section {
    position: absolute;
    inset: auto 0 0;

    #sun {
      margin: auto;
      width: 60%;
      max-width: 450px;
      aspect-ratio: 2;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0;
      /* sunrise gradient */
      background: linear-gradient(180deg, $sand 0%, $orange 100%);
    }
  }
}

.sea {
  height: 28vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* sun to sea gradient */
  background: linear-gradient(180deg, $orange 0%, $blue $sea-gradient-start);
}

@media (max-width: $mobile-breakpoint) {
  .body-gradient {
    padding: 0 20px 20px;
    &.size-1 {
      // used unquote to circumvent Sass compile error : 'Incompatible units'
      /* height: unquote("max(72vh, 100%)"); */ // somehow doesn't work, always pick 100%
      min-height: 72vh;
      height: 100%;
    }

    &.size-2 {
      /* height: unquote("max(172vh, 100%)"); */
      min-height: 172vh;
      height: 100%;
    }
  }
}

</style>
