angular.module('dateModeModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

            $stateProvider.state('dateMode',{
               url:'/dateMode',
               templateUrl:'./modules/dateMode/dateMode.html',
               controller:'dateModeCtrl',
               css:'./modules/dateMode/dateMode.css'
            })

        })
    .service('Service',['$http',function($http){
        this.getData = function(){
            return $http.get('./data/playListData.json')
        }
    }])
	.controller('dateModeCtrl',['$scope','Service',function($scope,Service){
        Service.getData().success(function(res){
            $scope.arr = res;
              console.log($scope.arr.data)
              console.log($scope.arr.data.date_list.list)
        })
		$scope.type = "全部活动"
        $scope.flag = true;
        // $scope.hide = true;
        $scope.showClick = function(){
            $scope.flag = !$scope.flag
        }
        $scope.allClick = function(){
            $scope.type = "全部活动"
            $scope.flag = true;
             // $scope.this.choice
            console.log(this)
        }
        $scope.discoverClick = function(){
            $scope.type = "发现城市"
            $scope.flag = true;
            console.log(this)
        }
        $scope.cityWalkClick = function(){
            $scope.type = "CityWalk"
            $scope.flag = true;
            console.log(this)
        }
	}])