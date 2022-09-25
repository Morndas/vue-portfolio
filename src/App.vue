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
  max-width: 1140px;
  box-sizing: border-box;
  margin: auto;
  @media (max-width:576px) {
    width: unset !important; // pourquoi cette CSS ? je ne sais plus
  }
}

.content-container {
  @extend .container;
  padding: 20px;
  background: #80808069;
  border: 4px solid #80808069;
  border-radius: 4px;
  backdrop-filter: blur(10px);

  h2 {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    color: $blue;
    margin: 16px 0;
    text-shadow: 0 0 5px #{$sand + '70'};
  }

  p {
    max-width: 800px;
    margin: 16px auto;
    text-align: justify;
    font-size: 18px;
    line-height: 1.5;
    color: white;
    text-shadow: 0 0 5px $blue;

    span.emoji {
      text-shadow: none;
    }

    strong {
      color: $sand;
      text-shadow: 0 0 5px #23344dff; // darker $blue
    }

    // inspired by https://codepen.io/CorporalMann/pen/bGRPyNB
    a {
      text-decoration: none;
      color: inherit;
      font-weight: 450;
      background-image: linear-gradient($blue, $blue);
      background-position: 0 100%;
      background-repeat: no-repeat;
      background-size: 100% 2px;
      transition: background-size .16s;
      position: relative;

      &:hover {
        background-size: 100% 100%;
      }
    }
  }
}

.centered-image {
  display: block;
  margin: auto;
  max-width: 100%;
}

/* START page transition styles */
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
/* END page transition styles */

</style>
