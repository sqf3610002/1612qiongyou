angular.module('WithModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('with',{
               url:'/with',
               templateUrl:'./modules/with/with.html',
               controller:'WithCtrl',
               css:'./modules/with/with.css'
          })

     })
	.controller('WithCtrl',['$scope',function($scope){
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
