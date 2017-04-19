angular.module('mineModule',[])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/mine',{
		templateUrl:'components/mine/mine.html',
		controller:'mineCtrl',
		css:'components/mine/mine.css'
	})
}])

//依赖注入
.service('swiper',['$timeout',function($timeout){
	$timeout(function(){
		new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay:500,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		  }) 
	},10);
}])
.controller('mineCtrl',['$scope','$http','swiper',function($scope,$http){
	$http.get('json/4.json').success(function(res){
		$scope.arrSwiper = res;
	})
}])