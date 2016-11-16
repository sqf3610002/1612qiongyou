angular.module('CreateTripModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('createTrip',{
               url:'/createTrip',
               templateUrl:'./modules/createTrip/createTrip.html',
               controller:'CreateTripCtrl',
               css:'./modules/createTrip/createTrip.css'
          })

    })
	.controller('CreateTripCtrl',['$scope','$http',function($scope,$http){
		loca = function(){
    		if(localStorage.create_trip == undefined){
    			$scope.create_trip = "请选择往返城市"
    		}else{
    			$scope.create_trip = localStorage.create_trip;
    		}
    		if(localStorage.CountryListImg == undefined){
    			$scope.createImg = "";
    			$scope.createShow = false;
    			$scope.jia = "+"
    		}else{
    			$scope.createImg = localStorage.CountryListImg;
    			$scope.createShow = true;
				$scope.jia = ""
    		}
    		if(localStorage.TripCHImg == undefined){
    			$scope.createImg2 = "";
    			$scope.trip_add2Show = false;
    			$scope.jia2 = "+"
    		}else{
    			$scope.createImg2 = localStorage.TripCHImg;
    			$scope.trip_add2Show = true;
				$scope.jia = ""
    		}
    	}
		loca();
		
     }])