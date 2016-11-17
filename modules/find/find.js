angular.module('FindModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('find',{
               url:'/find',
               templateUrl:'./modules/find/find.html',
               controller:'FindCtrl',
               css:'./modules/find/find.css'
          })

     })
	.controller('FindCtrl',['$scope',function($scope){
		
         
     }])