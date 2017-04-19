angular.module('aixianfeng',['ngRoute','angularCSS','homeModule','categoryModule','shopcarModule','mineModule'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);