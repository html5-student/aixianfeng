angular.module('shopcarModule',[])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/shopcar',{
		templateUrl:'components/shopcar/shopcar.html',
		controller:'shopcarCtrl',
		css:'components/shopcar/shopcar.css'
	})
}])
.controller('shopcarCtrl',['$scope','$http',function($scope,$http){
	$http.get('json/4.json').success(function(res){
		$scope.arr = res;
	})
}])