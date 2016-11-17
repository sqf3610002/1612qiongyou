angular.module('AskModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('ask',{
               url:'/ask',
               templateUrl:'./modules/ask/ask.html',
               controller:'AskCtrl',
               css:'./modules/ask/ask.css'
          })

     })
	.controller('AskCtrl',['$scope',function($scope){
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