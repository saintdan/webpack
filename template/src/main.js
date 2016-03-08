'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Validator from 'vue-validator'

import FastClick from 'fastclick'

import App from './App'

// install router
Vue.use(Router)

// routing
var router = new Router({
    hashbang:true,
    history:false,
    saveScrollPosition: false,
    transitionOnLoad: true
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.start(App, '#app')
