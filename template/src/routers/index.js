'use strict'

import IndexView from '../views/Index.vue'
import PageNotFound from '../views/404.vue'
import LogIn from '../components/login/LogIn.vue'
import SignUp from '../components/login/SignUp.vue'

export default function(router){

    router.map({
        /* Index */
        '/':{
            components: IndexView
        },
        /* 404 */
        '*':{
            components: PageNotFound
        },
        /* Log in */
        '/login': {
            subRoutes: {
                '/login': {
                    components: LogIn
                },
                'signup': {
                    components: SignUp
                }
            }
        }
    })
}
