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
		};     }])
