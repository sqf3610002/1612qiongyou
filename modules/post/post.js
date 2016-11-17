angular.module('PostModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
		$stateProvider.state('post',{
			url:'/post',
			templateUrl:'./modules/post/post.html',
			controller:'PostCtrl',
			css:'./modules/post/post.css'
		})
	})
	.controller('PostCtrl',['$scope',function($scope){
		
	}])