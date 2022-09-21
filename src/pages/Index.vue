<template>
  <ContentLayout :pageSize="2">
    <template #main-content>
      <div class="hero-section">
        <div class="hero-main container">
          <div>
            {{ /* Sébastien Seigneur */ }}
            <NameTag tag-name="h1" font-size="50px"/>
            <p class="subtitle">Développeur web</p>
          </div>
          <img :src="'/img/code_thinking.svg'" class="code-thinking"/>
        </div>
        <div class="hero-arrow">
          <img
            :src="'/img/down_arrow.svg'"
            width="69"
            height="67"
            @click="scrollBelow"
          >
        </div>
      </div>
      <div class="presentation-section">
        <p>
          Bonjour et bienvenue sur mon site web. Bien qu'il soit encore en développement, sachez que je travaille
          activement dessus !
        </p>
        <div class="example-gallery">
          <div class="gallery-1">
            <img src="/img/sun_demo_0.png">
          </div>
          <div class="gallery-2">
            <img src="/img/sun_demo_-1.png">
            <img src="/img/sun_demo_1.png">
          </div>
          <div class="gallery-3">
            <img src="/img/sun_demo_-2.png">
            <img src="/img/sun_demo_2.png">
          </div>
        </div>
      </div>
    </template>
    <template v-slot:sea-content>
      <!--      <vue-glide-->
      <!--          class="glide-container container"-->
      <!--          :per-view="5"-->
      <!--          :options="{-->
      <!--            bound: true,-->
      <!--            peek:{-->
      <!--              before: 0,-->
      <!--              after: 60-->
      <!--            }-->
      <!--          }"-->
      <!--      >-->
      <!--        <vue-glide-slide-->
      <!--            v-for="tech in knownTechs"-->
      <!--            :key="tech"-->
      <!--        >-->
      <!--          <div class="slide-content">-->
      <!--            <img :src="`/img/${tech}_logo.svg`"-->
      <!--                 :alt="`${tech} logo`"-->
      <!--                 class="tech-logo"-->
      <!--                 width="auto"-->
      <!--                 height="85"-->
      <!--            />-->
      <!--            <p class="tech-title">-->
      <!--              {{tech}}-->
      <!--            </p>-->
      <!--          </div>-->
      <!--        </vue-glide-slide>-->
      <!--      </vue-glide>-->
    </template>
  </ContentLayout>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import NameTag from "../components/NameTag";

export default {
  name: 'Index',
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
  },
  methods: {
    scrollBelow() {
      let presSec = document.getElementsByClassName("presentation-section")[0];
      presSec.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vue-glide-js/dist/vue-glide.css';

.hero-section {
  position: relative;
  height: calc(100vh - #{$header-size}); // 100vh minus the header size

  .hero-main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .subtitle {
      font-family: Poppins, serif;
      font-weight: 400;
      font-size: 30px;
      margin: 30px 0 0 75px;
      color: $dark-blue + BF; // 75% transparency
    }

    .code-thinking {
      max-width: 100%;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }

  .hero-arrow {
    position: absolute;
    inset: auto 0 8%;
    text-align: center;
    animation: MoveUpDown 2s linear infinite;

    img {
      cursor: pointer;
    }
  }

  @keyframes MoveUpDown {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
}

.presentation-section {
  max-width: 1300px;
  margin: auto;
  padding: 20px;
  background: #8080804f;
  border: 1px solid gray;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  scroll-margin-top: $header-size;

  p {
    text-align: center;
    font-size: 18px;
    line-height: 1.5;
    color: white;
    text-shadow: 0 0 5px black;
  }

  .example-gallery {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    > div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      row-gap: 20px;

      &.gallery-2 {
        column-gap: 40px
      }

      &.gallery-3 {
        column-gap: 140px
      }

      img {
        max-width: 100%;
        max-height: 350px;
        box-shadow: 0 0 8px #999999;
      }
    }
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
    background: $sand;

    .tech-logo {
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
    }

    .tech-title {
      font-family: Roboto, serif;
      font-size: 18px;
      font-weight: 500;
      color: $dark-blue;
      margin: 12px 0 0;
    }
  }
}
</style>
