angular.module('NewTripCountryModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('newTripCountry',{
               url:'/newTripCountry',
               templateUrl:'./modules/newTripCountry/newTripCountry.html',
               controller:'NewTripCountryCtrl',
               css:'./modules/newTripCountry/newTripCountry.css'
          })

     })
     .service('newTripCountryFn',['$http',function($http){
         this.getData = function(){
            return $http.get('./data/newTripCountry.json')
         }
          this.getData2 = function(){
            return $http.get('./data/newTripCountry2.json')
         }
         // 图片懒加载
         this.loadImgFn = function(){
              lazyLoad.init(); 
         }
         // 点击地区分类
         this.classifyClicked = function(){
               $(".newTripCClassify").on("click","a",function(e){
                    e.preventDefault();
                    $(e.target).addClass("newTripCClicked").closest("li").siblings().find("a").removeClass("newTripCClicked");
               });
         }
    }])
     .controller('NewTripCountryCtrl',['$scope','newTripCountryFn',function($scope,newTripCountryFn){
          newTripCountryFn.getData().success(function(res){
               $scope.newTripCountryData = res;
          });
          // 点击地区分类
          newTripCountryFn.classifyClicked();
          // 图片懒加载
          newTripCountryFn.loadImgFn();
          $scope.showAsia = function(){
            newTripCountryFn.getData2();
            newTripCountryFn.getData2().success(function(res){
                 $scope.newTripCountryData = res;
            });
          };
        localFn = function(){
			$(".newTripCountryList").on("click","img",function(e){
				localStorage.CountryListImg = $(e.target).attr("data-src");
				location.href = "index.html#/createTrip";
			})
        }
        localFn()
     }])
