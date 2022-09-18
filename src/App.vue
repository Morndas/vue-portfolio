<template>
  <MasterLayout>
    <transition :name="transitionDirection" mode="out-in">
      <router-view />
    </Transition>
  </MasterLayout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import MasterLayout from "./layouts/Master";
import { PageOrderMixin } from "./mixins/PageOrderMixin.js"

export default {
  name: 'App',
  components: {
    MasterLayout
  },
  mixins: [PageOrderMixin],
  data() {
    return {
      transitionDirection: 'fade-left'
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      const nextPosition = this.getPagePosition(to.path)
      if (nextPosition > this.pagePosition) {
        this.transitionDirection = 'fade-left'
      } else {
        this.transitionDirection = 'fade-right'
      }
      next()
    });
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./assets/style/reset.css";
@import "~@fontsource/roboto/latin.css";
@import "~@fontsource/poppins/latin.css";

/* Global styles */
body {
  font-family: Roboto, Poppins, Arial, sans-serif !important;
  background-color: black;
  overflow: hidden overlay;

  &.menu-open {
    overflow: hidden;
  }
}

.container {
  max-width: 1140px !important;
  @media (max-width:576px) {
    width: unset !important;
  }
}

.fade-left-enter-active,
.fade-left-leave-active {
  transition: all 1s ease;
  *:not(.body-gradient):not(.sea) {
    transition: all 1s ease;
  }
}

.fade-left-enter,
.fade-left-leave-active {
  opacity: 0;
  *:not(.body-gradient):not(.sea) {
    transform: translateX(-20px);
  }
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 1s ease;
  *:not(.body-gradient):not(.sea) {
    transition: all 1s ease;
  }
}

.fade-right-enter,
.fade-right-leave-active {
  opacity: 0;
  *:not(.body-gradient):not(.sea) {
    transform: translateX(20px);
  }
}

</style>
