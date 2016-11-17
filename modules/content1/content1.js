angular.module('contentModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
		$stateProvider.state('content',{
			url:'/content',
			templateUrl:'modules/content1/content1.html',
			controller:'contentCtrl',
			css:'./modules/content1/content1.css'
		})
	}).controller('contentCtrl',['$scope',function($scope){
		
	}])