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
                 width="auto"
                 height="90"
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
        'Vue.js',
        'React'
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~vue-glide-js/dist/vue-glide.css';

$dark-blue: #29456F;
$blue: #3C5882;
$orange: #FFB292;
$sand: #FFEDCB;


.body-gradient {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 1611px;
  background: linear-gradient(180deg, $blue 0%, $sand 50%, $orange 100%);
}

.sun {
  width: 530px;
  height: 265px;
  border-top-left-radius: 530px;
  border-top-right-radius: 530px;
  /* sunrise gradient */

  background: linear-gradient(180deg, $sand 0%, $orange 100%);
}

.sea {
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* sun to sea gradient */

  background: linear-gradient(180deg, $orange 0%, $blue 20%);
}

.glide-container {
  height: 80%;
  display: flex;
  align-items: center;
  border-right: 2px solid $dark-blue;
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
}

.container {
  width: 1140px;
  margin: 0 auto;
}
</style>
