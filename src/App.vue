<template>
  <MasterLayout>
    <transition name="fade" mode="out-in">
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

export default {
  name: 'App',
  components: {
    MasterLayout
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
  overflow: overlay;
}

.container {
  max-width: 1140px !important;
  @media (max-width:576px) {
    width: unset !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
}



.slide-fade-enter-active {
  transition: all 0.7s;
}

.slide-fade-leave-active {
  transition: all 0.7s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-leave-from,
.slide-fade-enter-to {
  opacity: 0;
}

</style>
