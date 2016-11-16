angular.module('StrategyModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
          $stateProvider.state('strategy',{
               url:'/strategy',
               templateUrl:'./modules/strategy/strategy.html',
               controller:'StrategyCtrl',
               css:'./modules/strategy/strategy.css'
          })
     })
     .service('strategyFn',['$http',function($http){
          this.getData = function(){
               return $http.get('./data/strategyData.json');
          };
     }])
	.controller('StrategyCtrl',['$scope','strategyFn',function($scope,strategyFn){
          strategyFn.getData().success(function(res){
               $scope.strategyData = res;
          })
          $scope.commonNavShow = function(){
        	$("#common_nav").removeClass().addClass("common_show");
        	$(".container").removeClass("container_hide").addClass("container_show");
        	$(".container").off();
	        $(".container").on("click",function(){
        		if($(".container").css("left")=="250px"){
	        		$("#common_nav").removeClass().addClass("common_hide");
	        		$(".container").removeClass("container_show").addClass("container_hide");
        		}
	        })
        }
     }])