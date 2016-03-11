'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Validator from 'vue-validator'

import CustomRouter from './routers/index.js'

import App from './views/App'

// install router
Vue.use(Router)
Vue.use(Resource)
Vue.use(Validator)

// routing
var router = new Router()

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

CustomRouter(router)

router.start(App, '#app')
