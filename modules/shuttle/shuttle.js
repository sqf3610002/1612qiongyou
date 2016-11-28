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
