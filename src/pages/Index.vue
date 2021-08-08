<template>
  <Layout :pageSize="2" :position="this.position">
    <div class="hero container">
      <div class="hero-main">
        {{/* Sébastien Seigneur */}}
        <div>
          <NameTag tag-name="h1" font-size="50px" />
          <p class="subtitle">Développeur web</p>
        </div>
        <img :src="'/img/code_thinking.svg'" class="code-thinking" />
      </div>
      <div class="hero-arrow" @click="scrollSun">
        <img :src="'/img/down_arrow.svg'" width="69" height="67">
      </div>
    </div>
    <template v-slot:sea-body>
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
    </template>
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
      position: 0,
      knownTechs: [
        'Vue.js',
        'React',
        'Symfony',
        'Symfony',
        'Vue.js',
        'React'
      ]
    }
  },
  methods: {
    scrollSun() {
      let sun = document.getElementById("sun");
      sun.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vue-glide-js/dist/vue-glide.css';

.hero {
  height: 100%;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;

  .hero-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 90%;
  }

  .hero-arrow {
    position: absolute;
    animation: MoveUpDown 2s linear infinite;
    bottom: 8%;
    cursor: pointer;
  }

  @keyframes MoveUpDown {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

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
</style>
