angular.module('SortingModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('free.sorting',{
               url:'/sorting',
               templateUrl:'./modules/sorting/sorting.html',
               controller:'SortingCtrl',
               css:'./modules/free/free.css'
          })

     })
	.controller('SortingCtrl',['$scope','$http',function($scope,$http){
         $("ul").on("click","li",function(e){
         	$(e.target).siblings("li").removeClass().end().addClass("choose");
         })
     }])