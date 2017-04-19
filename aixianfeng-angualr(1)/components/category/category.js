angular.module('categoryModule',[])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/category',{
		templateUrl:'components/category/category.html',
		controller:'categoryCtrl',
		css:'components/category/category.css'
	})
}])
.controller('categoryCtrl',['$scope',"$http",function($scope,$http){

}]);