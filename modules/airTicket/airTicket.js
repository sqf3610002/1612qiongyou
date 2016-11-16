angular.module('airTicketModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('airTicket',{
               url:'/airTicket',
               templateUrl:'./modules/airTicket/airTicket.html',
               controller:'airTicketCtrl',
               css:'./modules/airTicket/airTicket.css'
          })
     })
	.controller('airTicketCtrl',['$scope',function($scope){
          $scope.flag =false;
          $scope.startCity = function(){
               $scope.flag = !$scope.flag
          }
          $scope.searchBack = function(){
               $scope.flag = !$scope.flag
          }
          $scope.endCity = function(){
               $scope.flag = !$scope.flag
          }
		$scope.curDate =  new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
		$scope.endDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate()+3)
	}])