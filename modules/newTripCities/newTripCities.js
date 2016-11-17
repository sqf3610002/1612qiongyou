angular.module('NewTripCitiesModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
          $stateProvider.state('newTripCities',{
               url:'/newTripCities',
               templateUrl:'./modules/newTripCities/newTripCities.html',
               controller:'NewTripCitiesCtrl',
               css:'./modules/newTripCities/newTripCities.css'
          })
    })
	.controller('NewTripCitiesCtrl',['$scope','$location',function($scope,strategyFn,$location){
          $(".newTripCityList").on("click","li",function(e){
          		localStorage.create_trip = $(e.target).text();
          		location.href = "index.html#/createTrip";
          })
     }])