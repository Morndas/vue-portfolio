<template>
  <div>
    <Header />
    <slot />
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

export default {
  components: {
    Header
  }
}
</script>

<style>
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

</style>
