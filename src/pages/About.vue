<template>
  <ContentLayout :position="this.position">
    <template v-slot:main-body>
    </template>
  </ContentLayout>
</template>

<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'A propos de moi'
  },
  data() {
    return {
      position: 1
    }
  }
}
</script>
