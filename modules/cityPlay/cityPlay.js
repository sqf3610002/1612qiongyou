angular.module('CityPlayModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('cityPlay',{
               url:'/cityPlay',
               templateUrl:'./modules/cityPlay/cityPlay.html',
               controller:'CityPlayCtrl',
               css:'./modules/cityPlay/cityPlay.css'
          })

     })
	.controller('CityPlayCtrl',['$scope','$http',function($scope,$http){
		$http.get('./data/cityPlayData.json').success(function(data){
			$scope.cityPlayData = data;
		});
         
     }])