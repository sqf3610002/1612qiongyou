angular.module('FirstPageModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('firstPage',{
               url:'/firstPage',
               templateUrl:'./modules/firstPage/firstPage.html',
               controller:'FirstPageCtrl',
               css:'./modules/firstPage/firstPage.css'
          })

     })
	.controller('FirstPageCtrl',['$scope',function($scope){
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