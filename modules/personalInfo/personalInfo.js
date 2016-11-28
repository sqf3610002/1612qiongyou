angular.module('PersonalInfoModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('personalInfo',{
               url:'/personalInfo',
               templateUrl:'./modules/personalInfo/personalInfo.html',
               controller:'PersonalInfoCtrl',
               css:'./modules/personalInfo/personalInfo.css'
          })

     })
	.controller('PersonalInfoCtrl',['$scope',function($scope){
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
