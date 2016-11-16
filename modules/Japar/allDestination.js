angular.module('AllDestinationModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('free.allDestination',{
               url:'/allDestination',
               templateUrl:'./modules/allDestination/allDestination.html',
               controller:'AllDestinationCtrl',
               css:'./modules/free/free.css'
          })

     })
	.controller('AllDestinationCtrl',['$scope','$http',function($scope,$http){
         $(".ul1").on("click","li",function(e){
         	$(e.target).siblings("li").removeClass().end().addClass("choose");
         })
     }])