angular.module('SpecialOfferModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('specialOffer',{
               url:'/specialOffer',
               templateUrl:'./modules/specialOffer/specialOffer.html',
               controller:'SpecialOfferCtrl',
               css:'./modules/specialOffer/specialOffer.css'
          })

     })
	.controller('SpecialOfferCtrl',['$scope',function($scope){
		
         
     }])