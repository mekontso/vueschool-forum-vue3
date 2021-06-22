import PageHome from '@/components/PageHome'
// import the needed functions for the routes
import { createRouter, createWebHistory } from 'vue-router'
import PageThreadShow from '@/components/PageThreadShow'
import PageNotFound from '@/components/PageNotFound'
import sourceData from '@/data.json'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    // Add dynamic link
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
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
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
