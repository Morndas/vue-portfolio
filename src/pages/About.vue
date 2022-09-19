<template>
  <ContentLayout>
    <template v-slot:main-content>
      <div class="about-me PLACEHOLDER">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet animi asperiores cum ducimus eaque,
          inventore itaque iusto maiores, maxime molestias necessitatibus, non pariatur quia rerum soluta suscipit
          tenetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet animi asperiores cum ducimus eaque,
          inventore itaque iusto maiores, maxime molestias necessitatibus, non pariatur quia rerum soluta suscipit
          tenetur! maxime molestias necessitatibus, non pariatur quia rerum soluta suscipit
          tenetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet animi asperiores cum ducimus eaque,
          inventore itaque iusto maiores.
        </p>
      </div>
    </template>
  </ContentLayout>
</template>

<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'A propos de moi'
  }
}
</script>

<style scoped lang="scss">

.about-me.PLACEHOLDER {
  text-align: center;

  p {
    background: rgba(50, 205, 50, 0.88);
    border: 1px solid black;
    padding: 30px;
    max-width: 70%;
    margin: 20px auto;
    border-radius: 30px;
  }
}
</style>
