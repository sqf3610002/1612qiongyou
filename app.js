var app = angular.module('QYW',['ui.router',
'me-lazyload',
'angularCSS',
'QiongyouModules',
'DestinationModules',
'TripModules',
'StrategyModules',
'AskModules',
'FirstPageModules',
'PlayModules',
'BagModules',
'JNEModules',
'WithModules',
'PersonalInfoModules',
'PostModules',
'FreeModules',
'VisaModules',
'CityPlayModules',
'WifiModules',
'FindModules',
'LogInModules',
'FindCityModules',
'SpecialOfferModules',
'ShuttleModules',
'contentModules',
'dateModeModules',
'airTicketModules',
'AllDestinationModules',
'ScreenHaveModules',
'SortingModules',
'NewTripCHCModules',
'NewTripCitiesModules',
'NewTripCountryModules',
'CreateTripModules',
'TripUserPageModules']);

app.config(function($stateProvider,$urlRouterProvider){
	 $urlRouterProvider.otherwise('/qiongyou');

})
app.controller("commonCtrl",function($scope){
    $("#common_nav_main").on("click","li",function(){
    	if($("#common_nav").css("opacity")=="1"){
    		$("#common_nav").removeClass().addClass("common_hide");
    		$(".container").removeClass("container_show").addClass("container_hide");
    	}
    })
})
