angular.module('BagModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('bag',{
               url:'/bag',
               templateUrl:'./modules/bag/bag.html',
               controller:'BagCtrl',
               css:'./modules/bag/bag.css'
          })

     })
     .service('bagFn',['$http',function($http){
          this.getData=function(){
               return $http.get('./data/qiongyouBag.json')
          }
          this.curClick = function(){
               $("#bag_nav .guideMenu").on("click","span",function(e){
                    $(e.target).closest("li").siblings("li").children("span").
                    removeClass("show");
                    $(this).addClass("show");
               });
         }
     }])
	.controller('BagCtrl',['$scope','bagFn',function($scope,bagFn){
		bagFn.getData().success(function(res){
               $scope.bagData = res.hot;
          })
         bagFn.curClick();
         $scope.hotClick = function(){
               bagFn.getData().success(function(res){
                    $scope.bagData = res.hot;
               })
          }
          $scope.AsiaClick = function(){
               bagFn.getData().success(function(res){
                    $scope.bagData = res.Asia;
               })
          }
        $scope.EuropeClick = function(){
               bagFn.getData().success(function(res){
                    $scope.bagData = res.Europe;
               })
          }
        $scope.NorthAmericaClick = function(){
               bagFn.getData().success(function(res){
                    $scope.bagData = res.NorthAmerica;
               })
          }
        $scope.SouthAmericaClick = function(){
               bagFn.getData().success(function(res){
                    $scope.bagData = res.SouthAmerica;
               })
          }
        $scope.OceaniaClick = function(){
               bagFn.getData().success(function(res){
                    $scope.bagData = res.Oceania;
               })
          }
        $scope.AfricaClick = function(){
               bagFn.getData().success(function(res){
                    $scope.bagData = res.Africa;
               })
          }
        $scope.AntarcticaClick = function(){
               bagFn.getData().success(function(res){
                    $scope.bagData = res.Antarctica;
               })
          }


     }])