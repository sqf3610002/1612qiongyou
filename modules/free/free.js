angular.module('FreeModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('free',{
               url:'/free',
               templateUrl:'./modules/free/free.html',
               controller:'FreeCtrl',
               css:'./modules/free/free.css'
          })

     })
	.controller('FreeCtrl',['$scope','$http',function($scope,$http){
		$http.get('./data/freeData.json').success(function(data){
			$scope.freeData = data;
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
