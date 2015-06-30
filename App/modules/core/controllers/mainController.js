define(function(){
	var coreModule = angular.module('coreModule');
	coreModule.controller('mainController',['$scope',function($scope){
		$scope.title = 'Hello world';
	}]);
});