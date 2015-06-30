define(function(){
	var themeModule = angular.module('themeModule',[]);
	//这尼玛坑太深了
	themeModule.run(['$log',function($log){
		$log.info('Initialized the themeModule!!');
	}]);
});