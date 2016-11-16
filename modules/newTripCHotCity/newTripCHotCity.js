angular.module('NewTripCHCModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
          $stateProvider.state('newTripCHotCity',{
               url:'/newTripCHotCity',
               templateUrl:'./modules/newTripCHotCity/newTripCHotCity.html',
               controller:'NewTripCHCCtrl',
               css:'./modules/newTripCHotCity/newTripCHotCity.css'
          })
     })
     .service('newTripCHCFn',['$http',function($http){
         this.getData = function(){
            return $http.get('./data/newTripCHotCity.json')
         }
         // 图片懒加载
         this.loadImgFn = function(){
              lazyLoad.init(); 
         }
         // 点击页面底部国家
         this.clicked = function(){
           $(".newTripCountryOk").on("click","li",function(e){
                // 兄弟元素 指定类名的元素 动画
                $(this).siblings(".newTripCSelected").removeClass("newTripCSelected").addClass("newTripCNoSelected");
                // 点击的元素 动画
                $(this).addClass("newTripCSelected").removeClass("newTripCNoSelected");
           });
         }
    }])
    .controller('NewTripCHCCtrl',['$scope','newTripCHCFn',function($scope,newTripCHCFn){
        newTripCHCFn.getData().success(function(res){
             $scope.newTripCHCData = res;
        });
        // 图片懒加载
        newTripCHCFn.loadImgFn();
        // 点击页面底部国家
        newTripCHCFn.clicked();
        localFn2 = function(){
			$(".newTripCHCList").on("click","img",function(e){
				localStorage.TripCHImg = $(e.target).attr("data-src");
				location.href = "index.html#/createTrip";
			})
        }
        localFn2()
    }])