angular.module('TripModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('trip',{
               url:'/trip',
               templateUrl:'./modules/trip/trip.html',
               controller:'TripCtrl',
               css:'./modules/trip/trip.css'
          })

     })
	.controller('TripCtrl',['$scope','$http',function($scope,$http){
		$http.get('./data/trip-hot.json').success(function(res){
				$scope.data = res;
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