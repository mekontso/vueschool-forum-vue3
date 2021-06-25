import Home from '@/pages/Home'
// import the needed functions for the routes
import { createRouter, createWebHistory } from 'vue-router'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/NotFound'
import sourceData from '@/data.json'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'
import Profile from '@/pages/Profile'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/me/edit',
    name: 'ProfileEdit',
    component: Profile,
    props: { edit: true }
  },
  {
    path: '/me',
    name: 'Profile',
    component: Profile,
    meta: { toTop: true, smoothScroll: true }
  },
  {
    // Add dynamic link
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    // pass a prop to be read as route parameter
    props: true,
    /**
     * Navigation guard
     * @param to the route we are navigating to
     * @param from the route we are navigating away from
     * @param next the function to run to resolve the navigation
     */
    beforeEnter (to, from, next) {
      // Check if thread exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // If exists continue
      if (threadExists) {
        return next()
      } else {
        // Show NotFound page without changing the url
        next({
          name: 'NotFound',
          // preserve current path and remove the first char to avoid the target URL starting with `//`
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash
        })
      }
      // If not exist redirect to nor found page
    }
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  // add scroll behavior on route visit
  scrollBehavior (to) {
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth'
    return scroll
  }
})
