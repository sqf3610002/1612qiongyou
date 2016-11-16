angular.module('PlayModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('play',{
               url:'/play',
               templateUrl:'./modules/play/play.html',
               controller:'PlayCtrl',
               css:'./modules/play/play.css'
          })

     })
    .service('service',['$http',function($http){
        this.getData = function(){
            return $http.get('./data/playData.json')
        }
    }])
    .controller('PlayCtrl',['$scope','service',function($scope,service){
        service.getData().success(function(res){
            $scope.arr = res;
          
        })
        $scope.type = "全部活动"
        $scope.flag = true;
        // $scope.hide = true;
        $scope.showClick = function(){
            $scope.flag = !$scope.flag
        }
        /*$scope.allClick = function(){
             $scope.type = "全部活动"
             $scope.flag = true;
             // $scope.this.choice
             console.log($scope)
        }
        $scope.discoverClick = function(){
             $scope.type = "发现城市"
             $scope.flag = true;
             console.log($scope)
        }
        $scope.cityWalkClick = function(){
             $scope.type = "CityWalk"
             $scope.flag = true;
             console.log($scope)
        }*/
        $scope.listClick = function(){
            $scope.flag = true;
            console.log(this)
        }
    }])




















/*	.service('playFn',['$http',function($http){
         this.getData = function(){
            return $http.get('./data/playdata.json')
         }
    }])
	.controller('PlayCtrl',['$scope','playFn',function($scope,playFn){
		playFn.getData().success(function(res){
              $scope.arr = res;
          })
		$scope.flag = true;
		$scope.type = "全部活动";
		$scope.clickFn = function(){
			$scope.flag = !$scope.flag
		}
        $scope.quClick = function(){
        	$scope.type = "全部活动";
        	$scope.flag = true;
        }
        $scope.faClick = function(){
        	$scope.type = "发现城市";
        	$scope.flag = true;
        }
        $scope.cityClick = function(){
        	$scope.type = "CityWalk";
        	$scope.flag = true;
        }
     }])*/