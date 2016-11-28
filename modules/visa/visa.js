angular.module('VisaModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('visa',{
               url:'/visa',
               templateUrl:'./modules/visa/visa.html',
               controller:'VisaCtrl',
               css:'./modules/visa/visa.css'
          })

     })
	.controller('VisaCtrl',['$scope','$http',function($scope,$http){
		$http.get('./data/visaData.json').success(function(data){
			$scope.visaData = data;
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
