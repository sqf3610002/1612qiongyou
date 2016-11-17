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
         
     }])
	$(function(){
		lazyLoad.init()
	})
