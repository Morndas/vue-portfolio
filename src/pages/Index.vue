<template>
  <Layout>
    <div class="hero container">
      <div>
        {{/* Sébastien Seigneur */}}
        <NameTag tag-name="h1" font-size="50px" />
        <p class="subtitle">Développeur web</p>
      </div>
      <img src="/img/code_thinking.svg" class="code-thinking" alt="code thinking" />
    </div>
    <div class="body-gradient">
      <div class="sun" />
    </div>
    <div class="sea">
      <vue-glide
          class="glide-container container"
          :per-view="5"
          :peek="{
            before: 0,
            after: 60
          }"
      >
        <vue-glide-slide
            v-for="tech in knownTechs"
            :key="tech"
        >
          <div class="slide-content">
            <img :src="`/img/${tech}_logo.svg`"
                 :alt="`${tech} logo`"
                 class="tech-logo"
                 width="auto"
                 height="85"
            />
            <p class="tech-title">
              {{tech}}
            </p>
          </div>
        </vue-glide-slide>
      </vue-glide>
    </div>
  </Layout>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import NameTag from "../components/NameTag";

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    NameTag,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      knownTechs: [
        'Vue.js',
        'React',
        'Symfony',
        'Symfony',
        'Vue.js',
        'React'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vue-glide-js/dist/vue-glide.css';

.hero {
  // background-color: rgba(0, 0, 0, 0.57);
  height: 400px;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .subtitle {
    font-family: Poppins,serif;
    font-weight: 400;
    font-size: 30px;
    margin: 30px 0 0 75px;
    color: $dark-blue + BF; // 75% transparency
  }

  .code-thinking {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
}

.body-gradient {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 1611px;
  background: linear-gradient(180deg, $blue 0%, $sand 50%, $orange 100%);
}

.sun {
  $sun-height: 225px;

  width: $sun-height * 2;
  height: $sun-height;
  border-top-left-radius: $sun-height * 2;
  border-top-right-radius: $sun-height * 2;
  /* sunrise gradient */
  background: linear-gradient(180deg, $sand 0%, $orange 100%);
}

.sea {
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* sun to sea gradient */
  $sea-gradient-start: 19%;
  background: linear-gradient(180deg, $orange 0%, $blue $sea-gradient-start);

  /* Glide styles */
  .glide-container {
    height: 100% - $sea-gradient-start;
    display: flex;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    // right border styles
    &:after {
      border-right: 2px solid $dark-blue;
      content: "";
      position: absolute;
      right: 0;
      width: 1px;
      height: 88%; // border height in %
      margin: 0 auto;
    }

    .slide-content {
      width: 180px;
      height: 160px;
      border-radius: 24px;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      /* sand */
      background: $sand;

      .tech-logo {
        filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
      }

      .tech-title {
        font-family: Roboto,serif;
        font-size: 18px;
        font-weight: 500;
        color: $dark-blue;
        margin: 12px 0 0;
      }
    }
  }
}
</style>
