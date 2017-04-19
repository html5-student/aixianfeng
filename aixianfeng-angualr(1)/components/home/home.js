angular.module('homeModule',[])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'components/home/home.html',
		controller:'homeCtrl',
		css:'components/home/home.css'
	})
}])
.controller('homeCtrl',['$scope',function($scope){
	$scope.name = '熊大';
}])