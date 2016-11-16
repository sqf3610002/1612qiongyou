angular.module('TripUserPageModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
		$stateProvider.state('tripUserPage',{
			url:'/tripUserPage',
			templateUrl:'./modules/tripUserPage/tripUserPage.html',
			controller:'TripUserPageCtrl',
			css:'./modules/tripUserPage/tripUserPage.css'
		})
	})
	.controller('TripUserPageCtrl',['$scope','$http',function($scope,$http){
		
	}])