import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _58281c9a = () => interopDefault(import('../pages/index_old.vue' /* webpackChunkName: "pages/index_old" */))
const _a094e8da = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _42b1ce00 = () => interopDefault(import('../pages/sandbox.vue' /* webpackChunkName: "pages/sandbox" */))
const _7c4babab = () => interopDefault(import('../pages/three2.vue' /* webpackChunkName: "pages/three2" */))
const _6258d9cb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/index_old",
    component: _58281c9a,
    name: "index_old"
  }, {
    path: "/inspire",
    component: _a094e8da,
    name: "inspire"
  }, {
    path: "/sandbox",
    component: _42b1ce00,
    name: "sandbox"
  }, {
    path: "/three2",
    component: _7c4babab,
    name: "three2"
  }, {
    path: "/",
    component: _6258d9cb,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
