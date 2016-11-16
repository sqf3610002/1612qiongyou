angular.module('WifiModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('wifi',{
               url:'/wifi',
               templateUrl:'./modules/wifi/wifi.html',
               controller:'WifiCtrl',
               css:'./modules/wifi/wifi.css'
          })

     })
	.controller('WifiCtrl',['$scope','$http',function($scope,$http){
		$http.get('./data/wifiData.json').success(function(data){
			$scope.wifiData = data;
		});
         
     }])