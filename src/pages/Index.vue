<template>
  <Layout>
    <div class="body-gradient">
      <div class="sun" />
    </div>
    <div class="sea">
      <vue-glide>
        <vue-glide-slide
            v-for="tech in knownTechs"
            :key="tech"
        >
          <div class="slide-content">{{tech}}</div>
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
        'React.js',
        'Symfony'
      ]
    }
  }
}
</script>

<style>
@import '~vue-glide-js/dist/vue-glide.css';

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  font-family: Roboto, Poppins, Arial, sans-serif;
}

.body-gradient {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 1611px;
  background: linear-gradient(180deg, #3C5882 0%, #FFEDCB 50%, #FFB292 100%);
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
  height: 357px;
  /* sun to sea gradient */

  background: linear-gradient(180deg, #FFB292 0%, #3C5882 20%);
}

.slide-content {
  width: 250px;
  height: 230px;
  border-radius: 24px;

  /* sand */
  background: #FFEDCB;
}
</style>
