angular.module('FirstPageModules',['ui.router'])
  .config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('firstPage',{
               url:'/firstPage',
               templateUrl:'./modules/firstPage/firstPage.html',
               controller:'FirstPageCtrl',
               css:'./modules/firstPage/firstPage.css'
          })

     })
  .service('Servic',['$http',function($http){
    this.getData=function(){
      return $http.get('./data/allCountry.json');
    }
  }])
  .controller('FirstPageCtrl',['$scope','Servic',function($scope,Service){
    $scope.commonNavShow = function(){
          $("#common_nav").removeClass().addClass("common_show");
          $(".container").removeClass("container_hide").addClass("container_show");
          $(".container").off();
          $(".container").on("click",function(){
            if($("#common_nav").css("opacity")=="1"){
              $("#common_nav").removeClass().addClass("common_hide");
              $(".container").removeClass("container_show").addClass("container_hide");
            }
          })
        }
  Service.getData().success(function(res){
      $scope.arr = res.Aisa;
      $scope.arr1 = res.Europe;
      $scope.arr2 = res.Oceania;
      $scope.arr3 = res.NorthAmerica;
      $scope.arr4 = res.Africa;
      $scope.arr5 = res.SouthAmerica;
    });
    $scope.flag=true;
    $scope.hotPlace=function(){
      $scope.flag=true;
      $scope.show=false;
    }
    $scope.allCty=function(){
      $scope.show=true;
      $scope.flag=false;
    }

    $("#main_ul").on("click",'li',function(){
      $(this).addClass('choose').siblings().removeClass('choose');
    });

}])
