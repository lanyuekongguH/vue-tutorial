// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'

vue.use(VueRouter)
vue.use(VueResource)

const routs = [{
	path : '/',
	components : Home

},{
    path : '/home',
	components : Home
}];

const router = new VueRouter ({
   routers
});

var app = new Vue({
	el: '#app',
	router,
	...App,
});


