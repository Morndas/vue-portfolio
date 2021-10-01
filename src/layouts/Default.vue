<template>
  <div>
    <Header />
    <slot />
    <div class="body-gradient" :style="bodyStyles">
      <slot name="main-body" />
      <div id="sun" :style="sunStyles" />
    </div>
    <div class="sea">
      <slot name="sea-body" />
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
import styleVars from "@/assets/style/_variables.scss";

export default {
  components: {
    Header
  },
  props: {
    pageSize: {
      type: Number,
      default: 1
    },
    position: {
      type: Number,
      required: true
    }
  },
  computed: {
    bodyStyles() {
      return {
        height: this.pageSize === 1 ? '72vh' : '170vh',
        background: `linear-gradient(180deg, ${this.pageSize === 1 ? `${styleVars.sand} 0%` : '#3C5882 0%, #FFEDCB 50%'}, #FFB292 100%)`
      }
    },
    sunStyles() {
      return {
        transform: `translate(${this.position * 10 * -1}%)`
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/style/reset.css";
@import "~@fontsource/roboto/latin.css";
@import "~@fontsource/poppins/latin.css";

/* Global styles */
body {
  font-family: Roboto, Poppins, Arial, sans-serif;
}

.container {
  width: 1140px !important;
}

.body-gradient {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

#sun {
  $sun-height: 225px;

  width: $sun-height * 2;
  height: $sun-height;
  border-top-left-radius: $sun-height * 2;
  border-top-right-radius: $sun-height * 2;
  /* sunrise gradient */
  background: linear-gradient(180deg, $sand 0%, $orange 100%);
}

.sea {
  height: 28vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* sun to sea gradient */
  background: linear-gradient(180deg, $orange 0%, $blue $sea-gradient-start);
}

</style>
