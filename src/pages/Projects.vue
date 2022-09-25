<template>
  <ContentLayout>
    <template v-slot:main-content>
      <div class="content-container projects PLACEHOLDER">
        <p>
          ⚠ PAGE EN COURS DE DEVELOPEMENT ⚠
          <br>
          <strong>Position : 2</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
          Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
        <p>
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
        </p>
        <p>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
        </p>
      </div>
    </template>
  </ContentLayout>
</template>

<script>
export default {
  name: 'ProjectsPage',
  metaInfo: {
    title: 'Mes projets'
  }
}
</script>

<style scoped lang="scss">

.projects.PLACEHOLDER {
  margin: 16px auto;
}
</style>
