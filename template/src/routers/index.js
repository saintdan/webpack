'use strict'

import IndexView from '../views/Index.vue'
import PageNotFound from '../views/404.vue'
import LogIn from '../views/Login.vue'
import LogInSub from '../components/login/_LogIn.vue'
import SignUp from '../components/login/_SignUp.vue'

export default function (router) {
  router.map({
    /* Index */
    '/': {
      component: IndexView
    },
    /* 404 */
    '/404': {
      component: PageNotFound
    },
    /* Log in and sign up */
    '/login': {
      component: LogIn,
      subRoutes: {
        '/': {
          component: LogInSub
        },
        '/signup': {
          component: SignUp
        }
      }
    }
  })
}
