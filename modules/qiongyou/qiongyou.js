angular.module('QiongyouModules',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

          $stateProvider.state('qiongyou',{
               url:'/qiongyou',
               templateUrl:'./modules/qiongyou/qiongyou.html',
               controller:'QiongyouCtrl',
               css:'./modules/qiongyou/qiongyou.css'
          })

     })
	.service('qiongyouFn',['$http',function($http){
         this.getData = function(){
            return $http.get('./data/qiongyouList.json')
         }
    }])
	.controller('QiongyouCtrl',['$scope','qiongyouFn','$interval',function($scope,qiongyouFn,$interval){
		qiongyouFn.getData().success(function(res){
			$scope.qiongyouData = res;
		})
		$scope.two = false;
		$scope.three = false;
		$scope.GDnum = 1;
		$scope.GDclick = function(){
			if($scope.GDnum == 2){
				$scope.three = true;
			}else if($scope.GDnum == 1){
				$scope.two = true;
				$scope.GDnum = 2
			}
		}
		$scope.navShow = false;
		$scope.icon = "icon-arrow-down"
		$scope.iconP = "更多"
		$scope.shouqiClick = function(){
			$scope.navShow = !$scope.navShow;
			if($scope.navShow == true){
				$scope.icon = "icon-arrow-up";
				$scope.iconP = "收起";
			}else if($scope.navShow == false){
				$scope.icon = "icon-arrow-down";
				$scope.iconP = "更多";
			}
		}
		$scope.inputShow = false;
		$scope.inputClick = function(){
			$scope.inputShow = !$scope.inputShow;
			$scope.HH = document.documentElement.clientHeight;
		}
		$scope.swFun = function(){
			var mySwiper = new Swiper(".swiper-container",{
				
			})
		}
		$scope.swFun()
		var t,date,h,m,s;
		$interval(function () {
				t = setInterval(function(){
				date = new Date();
				h = 24-date.getHours();
				m = 60-date.getMinutes();
				s = 60-date.getSeconds();
				$scope.hLeft = parseInt(h/10);
				$scope.hRight = h%10;
				$scope.mLeft = parseInt(m/10);
				$scope.mRight = m%10;
				$scope.sLeft = parseInt(s/10);
				$scope.sRight = s%10;           
        }, 500)
		});
     
     }])