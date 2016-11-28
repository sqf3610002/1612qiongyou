angular.module('DestinationModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('destination',{
               url:'/destination',
               templateUrl:'./modules/destination/destination.html',
               controller:'DestinationCtrl',
               css:'./modules/destination/destination.css'
          })

     })
	.service('DestinationFn',['$http',function($http){
         this.getData = function(){
            return $http.get('./data/destinationCity.json')
         }
         this.curClick = function(){
         	$("#destination_nav>ul").on("click","li",function(e){
         		$(e.target).siblings("li").removeClass("checked").end().addClass("checked");
         	});
         }
    }])
	.controller('DestinationCtrl',['$scope','DestinationFn',function($scope,Fn){
		$scope.desInputShow = false;
		$scope.desHh = document.documentElement.clientHeight;
		$scope.destination_inputClick = function(){
			$scope.desInputShow = !$scope.desInputShow;
		}
		Fn.getData().success(function(res){
			$scope.data = res.hot;
		})
		Fn.curClick();
		$scope.hotClick = function(){
			Fn.getData().success(function(res){
				$scope.data = res.hot;
			})
		}
		$scope.AsiaClick = function(){
			Fn.getData().success(function(res){
				$scope.data = res.Asia;
			})
		}
        $scope.EuropeClick = function(){
			Fn.getData().success(function(res){
				$scope.data = res.Europe;
			})
		}
        $scope.AfricaClick = function(){
			Fn.getData().success(function(res){
				$scope.data = res.Africa;
			})
		}
        $scope.NorthAmericaClick = function(){
			Fn.getData().success(function(res){
				$scope.data = res.NorthAmerica;
			})
		}
        $scope.SouthAmericaClick = function(){
			Fn.getData().success(function(res){
				$scope.data = res.SouthAmerica;
			})
		}
        $scope.OceaniaClick = function(){
			Fn.getData().success(function(res){
				$scope.data = res.Oceania;
			})
		}
        $scope.commonNavShow = function(){
        	$("#common_nav").removeClass().addClass("common_show");
        	$(".container").removeClass("container_hide").addClass("container_show");
        	$(".container").off();
	        $(".container").on("click",function(){
        		if($("#common_nav").css("opacity")=="1"){
	        		$("#common_nav").removeClass().addClass("common_hide");
	        		$(".container").removeClass("container_show").addClass("container_hide");
        		}
	        })
        }

     }])
