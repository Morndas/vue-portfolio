<template>
  <Layout :position="this.position">
    <template v-slot:main-body>
    </template>
  </Layout>
</template>

<script>
export default {
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
