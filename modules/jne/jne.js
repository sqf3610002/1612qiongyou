angular.module('JNEModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('jne',{
               url:'/jne',
               templateUrl:'./modules/jne/jne.html',
               controller:'JNECtrl',
               css:'./modules/jne/jne.css'
          })

     })
	.controller('JNECtrl',['$scope',function($scope){
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
		$scope.swipeFn = function(){
			var mySwiper = new Swiper(".swiper-container",{
				autoplay:3000,
				speed:500,
				loop:true,
				pagination:".swiper-pagination"
			})
		}
		$scope.swipeFn();

     }])
