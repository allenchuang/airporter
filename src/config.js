import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Factories
import todoFactory from 'factories/todo-factory';

// Controllers
import todosController from 'controllers/todosController';
import profileController from 'controllers/profileController';
import signupController from 'controllers/signupController';
import signinController from 'controllers/signinController';


const app = angular.module('airporter', [uiRouter, todoFactory.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		// Homepage
		.state('home', {
			url: '/',
			templateUrl: 'views/home/home.html',
		})

		// Sign Up
		.state('signup', {
			url: '/signup',
			templateUrl: 'views/signup/signup.html',
			controller: signupController
		})

		// Sign In
		.state('signin', {
			url: '/signin',
			templateUrl: 'views/signin/signin.html',
			controller: signinController
		})

		// 
		.state('profile', {
			url: '/profile',
			templateUrl: 'views/profile/profile.html',
			controller: profileController,
			resolve: {
				// logincheck: checkLoggedin
				// if the following dependencies are successfully resolved you can access profile
			}
		})  
		.state('todos', {
			url: '/todos',
			templateUrl: 'views/todos/todos.html',
			controller: todosController
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about/about.html'
		});

	$locationProvider.html5Mode(true);

});

export default app;