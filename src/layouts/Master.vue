<template>
  <div>
    <div class="menu-toggle-container mobile-only">
      <button id="menu-toggle" class="menu-toggle" @click="toggleMenu()">
        <span class="menu-toggle-bar menu-toggle-bar--top"></span>
        <span class="menu-toggle-bar menu-toggle-bar--middle"></span>
        <span class="menu-toggle-bar menu-toggle-bar--bottom"></span>
      </button>
    </div>

    <Header id="menu" />

    <slot /> <!-- Here goes the Content from <router-view> in App.vue -->

  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: 'MasterLayout',
  components: {
    Header
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle('menu-open')
      this.isMenuOpen = !this.isMenuOpen
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      // closes the menu if it is open (mobile only)
      if (this.isMenuOpen) {
        this.toggleMenu()
      }
      // add delay to close the menu before the route change animation
      setTimeout(next, 150)
    });
  }
}
</script>

<style lang="scss" scoped>

.menu-toggle-container {
    display: none;
}

@media (max-width: $mobile-breakpoint) {
  #menu {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s linear;
  }

  .menu-open #menu {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 0.5s linear;
  }

  .menu-toggle-container {
    display: unset;
    z-index: 200; // placing it above header content (z-index: 100)
    position: fixed;
    top: 0;
    right: 0;
    padding: 1.5rem;
    filter: drop-shadow(0px 0px 3px black);
    mix-blend-mode: luminosity;

    .menu-toggle {
      background: none;
      border: none;
      transform: translate(0, 0 /* -50% */);
      height: 26px;
      width: 29px;

      &, &:hover {
        color: #000;
      }

      .menu-toggle-bar {
        display: block;
        position: absolute;
        top: 50%;
        margin-top: -1px;
        right: 0;
        width: 100%;
        height: 3px;
        border-radius: 2px;
        background-color: #f5f5f5;
        transition: all 0.3s ease;

        &.menu-toggle-bar--top {
          transform: translate(0, -8px);
          width: 60%;
        }

        &.menu-toggle-bar--middle {
        }

        &.menu-toggle-bar--bottom {
          transform: translate(0, 8px);
          width: 60%;
          margin-right: 40%;
        }

        .menu-open & {
          &.menu-toggle-bar--top {
            transform: translate(0, 0) rotate(45deg);
            width: 100%;
          }

          &.menu-toggle-bar--middle {
            opacity: 0;
          }

          &.menu-toggle-bar--bottom {
            transform: translate(0, 0) rotate(-45deg);
            width: 100%;
            margin-right: unset;
          }
        }
      }
    }
  }
}

</style>
