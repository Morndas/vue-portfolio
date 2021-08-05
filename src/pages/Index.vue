<template>
  <Layout>
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
                 width="105"
                 height="auto"
            />
            <p>
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

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
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
        'Symfony',
        'Symfony'
      ]
    }
  }
}
</script>

<style>
@import '~vue-glide-js/dist/vue-glide.css';

.body-gradient {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 1611px;
  background: linear-gradient(180deg, #3C5882 0%, #FFEDCB 50%, var(--dark-blue) 100%);
}

.sun {
  width: 530px;
  height: 265px;
  border-top-left-radius: 530px;
  border-top-right-radius: 530px;
  /* sunrise gradient */

  background: linear-gradient(180deg, #FFEDCB 0%, #FFB292 100%);
}

.sea {
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* sun to sea gradient */

  background: linear-gradient(180deg, #FFB292 0%, #3C5882 20%);
}

.glide-container {
  height: 80%;
  display: flex;
  align-items: center;
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
  background: #FFEDCB;
}

.container {
  width: 60%;
  margin: 0 auto;
}
</style>
