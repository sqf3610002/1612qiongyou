angular.module('LogInModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('logIn',{
               url:'/logIn',
               templateUrl:'./modules/logIn/logIn.html',
               controller:'LogInCtrl',
               css:'./modules/logIn/logIn.css'
          })

     })
	.controller('LogInCtrl',['$scope',function($scope){
		
         
     }])