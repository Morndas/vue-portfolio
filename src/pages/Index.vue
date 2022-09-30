<template>
  <ContentLayout :page-size="2">
    <template #main-content>
      <div class="hero-section">
        <div class="hero-main container">
          <div>
            {{ /* Sébastien Seigneur */ }}
            <NameTag tag-name="h1" font-size="50px" />
            <p class="subtitle">
              Développeur web
            </p>
          </div>
          <img :src="'/img/code_thinking.svg'" class="code-thinking">
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
      <div class="presentation-section content-container">
        <p>
          Bonjour et bienvenue sur mon site web ! Bien qu'il soit encore en développement, sachez que je travaille
          activement dessus.
        </p>
        <h2>Pourquoi ce site ?</h2>
        <div>
          <p>
            J'ai décidé de créer un site personnel afin d'épater les recruteurs <span class="emoji">😎</span>.
            <br><strong>Portfolio</strong>, <strong>CV en ligne</strong>, mais également une <strong>preuve de compétences</strong> en lui-même,
            ce projet verra de nombreuses mises à jour prochainement ! Je comptais seulement publier le site une fois terminé,
            mais même s'il est encore incomplet, j'ai pensé qu'il était dommage de ne pas pouvoir le montrer.
            Gardez donc bien en tête que certains éléments du site sont encore manquants ou à l'état de prototype.
          </p>
        </div>
        <h2>Quelles technos utilise t-il ?</h2>
        <div>
          <div class="tech-logos">
            <img
              :src="'/img/Vue.js_logo.svg'"
              height="85"
              width="auto"
              alt="vue.js logo"
            >
            <img
              :src="'/img/gridsome_logo.svg'"
              height="85"
              width="auto"
              alt="Gridsome logo"
            >
          </div>
          <p>
            Ayant une certaine aisance avec les technologies front-end telles que la librairie JavaScript <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>,
            j'ai privilégié l'utilisation de celle-ci pour le développement de ce projet. Bien que les robots de Google interprètent désormais le JavaScript,
            j'ai conclu qu'il était plus sage de donner autre chose que du JS et un squelette HTML vide aux robots indexeurs des différents moteurs de recherche.
            C'est pourquoi j'ai opté pour le framework <a href="https://gridsome.org/" target="_blank" rel="noopener">Gridsome</a>.
            Nuxt.js étant trop lourd pour un simple portfolio, ce générateur de site statique convenait parfaitement à mes besoins.
          </p>
        </div>
        <h2>Comment fonctionne t-il ?</h2>
        <div>
          <p>
            Souhaitant faire plus qu'un site épuré et ennuyeux, celui-ci profite d'une fonctionnalité particulière...
            Bien que purement cosmétique, vous remarquerez que l'arrière plan est composé de plusieurs dégradés, créant ainsi un <strong>coucher de soleil</strong>,
            ciel et mer se confondant à l'horizon. Lors de la navigation, un <strong>effet de transition</strong> sur l'entièreté de la page ainsi qu'un décalage
            de l'élément représentant le soleil suggèrent que <strong>l'utilisateur se déplace par rapport à l'horizon</strong>.
          </p>
          <p>
            Pour ce faire, chaque page est attribuée d'un nombre indiquant sa position par rapport aux autres.
            La direction de l'animation de transition change dynamiquement selon la position de la nouvelle page vers laquelle on navigue et la précédente.
            De même pour l'emplacement du soleil, qui change selon cette même position, afin d'évoquer le déplacement sur l'horizon. Comme ci-dessous:
          </p>
          <div class="demo-gallery">
            <div class="gallery-1">
              <img
                src="/img/sun_demo_0.png"
                height="auto"
                width="auto"
                alt="démonstration de position 0 du soleil"
              >
            </div>
            <div class="gallery-2">
              <img
                src="/img/sun_demo_1.png"
                height="auto"
                width="auto"
                alt="démonstration de position 1 du soleil"
              >
              <img
                src="/img/sun_demo_-1.png"
                height="auto"
                width="auto"
                alt="démonstration de position -1 du soleil"
              >
            </div>
            <div class="gallery-3">
              <img
                src="/img/sun_demo_2.png"
                height="auto"
                width="auto"
                alt="démonstration de position 2 du soleil"
              >
              <img
                src="/img/sun_demo_-2.png"
                height="auto"
                width="auto"
                alt="démonstration de position -2 du soleil"
              >
            </div>
          </div>
        </div>
        <h2>Et après ?</h2>
        <div>
          <p>
            Il reste encore du travail à effectuer sur le site, notamment des <strong>ajouts de contenu</strong> aux pages 'CV', 'Projets', 'A propos de moi',
            un <strong>formulaire de contact</strong> pour la page du même nom mais aussi des fonctionnalités à développer comme un <strong>mode sombre</strong>.
          </p>
          <img
            :src="'/img/darkmode_design.png'"
            height="auto"
            width="630"
            alt="Tableau Trello du site"
            class="centered-image"
          >
          <p>
            Voici un petit aperçu du processus de développement du site, en utilisant la <strong>méthode Kanban</strong> avec
            <a href="https://trello.com/home" target="_blank" rel="noopener">Trello</a> :
          </p>
          <img
            :src="'/img/trello_board.png'"
            height="auto"
            width="1000"
            alt="Design du mode sombre dans Figma"
            class="centered-image"
          >
        </div>
      </div>
    </template>
    <template #sea-content>
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
import {Glide, GlideSlide} from 'vue-glide-js'
import NameTag from "../components/NameTag";

export default {
  name: 'Index',
  metaInfo: {
    title: 'Accueil',
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
  height: calc(100vh - #{$header-size});

  .hero-main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
  max-width: 1220px;
  scroll-margin-top: $header-size;

  .tech-logos {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 16px 0;

    img {
      filter: drop-shadow(0px 0px 3px #999999);
    }
  }

  .demo-gallery {
    margin: 20px 0 40px;
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
