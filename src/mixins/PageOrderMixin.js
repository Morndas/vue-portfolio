export const PageOrderMixin = {
  data() {
    return {
      pageOrder: {
        'index': 0, // home
        'about': 1,
        // 'projects': 2
      }
    }
  },
  computed: {
    pagePosition() {
      const routePath = this.$route.path
      let pageName = routePath.substring(1, routePath.length - 1) // removes starting and ending '/'
      return this.pageOrder[pageName] || 0
    }
  },
  methods: {
    getPagePosition(path) {
      let pageName = path.substring(1, path.length - 1)
      return this.pageOrder[pageName] || 0
    }
  }
}
