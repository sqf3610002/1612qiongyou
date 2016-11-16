angular.module('FindCityModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('findCity',{
               url:'/findCity',
               templateUrl:'./modules/findCity/findCity.html',
               controller:'FindCityCtrl',
               css:'./modules/findCity/findCity.css'
          })

     })
	.controller('FindCityCtrl',['$scope',function($scope){
		
         
     }])