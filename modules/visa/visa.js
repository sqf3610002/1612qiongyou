angular.module('VisaModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('visa',{
               url:'/visa',
               templateUrl:'./modules/visa/visa.html',
               controller:'VisaCtrl',
               css:'./modules/visa/visa.css'
          })

     })
	.controller('VisaCtrl',['$scope','$http',function($scope,$http){
		$http.get('./data/visaData.json').success(function(data){
			$scope.visaData = data;
		});
         
     }])