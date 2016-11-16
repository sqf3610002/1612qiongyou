angular.module('ScreenHaveModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('free.screenHave',{
               url:'/screenHave',
               templateUrl:'./modules/screenHave/screenHave.html',
               controller:'ScreenHaveCtrl',
               css:'./modules/free/free.css'
          })

     })
	.controller('ScreenHaveCtrl',['$scope','$http',function($scope,$http){
         $("ul").on("click","li",function(e){
         	$(e.target).siblings("li").removeClass().end().addClass("choose");
         })
     }])