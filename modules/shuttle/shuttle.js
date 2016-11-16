angular.module('ShuttleModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('shuttle',{
               url:'/shuttle',
               templateUrl:'./modules/shuttle/shuttle.html',
               controller:'ShuttleCtrl',
               css:'./modules/shuttle/shuttle.css'
          })

     })
	.controller('ShuttleCtrl',['$scope','$http',function($scope,$http){
		$http.get('./data/shuttleData.json').success(function(data){
			$scope.shuttleData = data;
		});
         
     }])