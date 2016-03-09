'use strict'

import IndexView from '../views/Index.vue'
import PageNotFound from '../views/404.vue'
import LogIn from '../components/login/LogIn.vue'
import SignUp from '../components/login/SignUp.vue'

export default function(router){

  router.map({
    /* Index */
    '/': {
      component: IndexView
    },
    /* 404 */
    '*': {
      component: PageNotFound
    },
    '/login': {
      subRoutes: {
        '/': {
          component: LogIn
        },
        '/signup': {
          component: SignUp
        }
      }
    }
  })
}
