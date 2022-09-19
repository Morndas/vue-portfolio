// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import ContentLayout from '~/layouts/Content.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('ContentLayout', ContentLayout)
  Vue.config.devtools = true

  // TODO: change robots to index, follow once production ready
  head.meta.push({
    name: 'robots',
    content: 'noindex, nofollow'
  })

  router.options.scrollBehavior = function (to, from, savedPosition) {
    return new Promise((resolve) => {
      router.app.$root.$once('scrollBeforeEnter', () => {
        resolve(savedPosition ? savedPosition : {top: 0, behavior: 'smooth'})
      })
    })
  }
}
