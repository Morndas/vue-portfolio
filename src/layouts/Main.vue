<template>
  <div>
    <div class="menu-toggle-container">
      <button id="menu-toggle" class="menu-toggle" @click="toggleMenu">
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
  name: 'MainLayout',
  components: {
    Header
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle('menu-open')
    }
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

    .menu-toggle {
      background: none;
      border: none;
      transform: translate(0, -50%);
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
        height: 4px;
        border-radius: 4px;
        background-color: black;
        transition: all 0.3s ease;

        &.menu-toggle-bar--top {
          transform: translate(0, -8px);
        }

        &.menu-toggle-bar--middle {
        }

        &.menu-toggle-bar--bottom {
          transform: translate(0, 8px);
        }

        .menu-open & {
          &.menu-toggle-bar--top {
            transform: translate(0, 0) rotate(45deg);
          }

          &.menu-toggle-bar--middle {
            opacity: 0;
          }

          &.menu-toggle-bar--bottom {
            transform: translate(0, 0) rotate(-45deg);
          }
        }
      }
    }
  }
}

</style>
