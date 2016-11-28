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
		$scope.boxShow = false;
	   $scope.boxShowClick = function(){
		   $scope.boxShow = !$scope.boxShow;
	   }
	   // 按销量高到低排序
	   $scope.saleDownSort = function(){
		$scope.sortFlag = "-number";
		$scope.boxShow = false;
	   };
	   // 价格低到高排序
	   $scope.priceUpSort = function(){
		  $scope.sortFlag = "price";
		  $scope.boxShow = false;
	   };
	   // 价格高到低排序
	   $scope.priceDownSort = function(){
		  $scope.sortFlag = "-price";
		  $scope.boxShow = false;
	   };
     }])
