//home controller
define(function(){
	angular
	  .module('coreModule')
	  .controller('homeController',['$scope',function($scope){
		$scope.title = 'Home';
	}]);
});