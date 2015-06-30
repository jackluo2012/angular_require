//core 加载　
define(['modules/core/runners/logRunner'],function(logRunner){
	var coreModule = angular.module('coreModule',['ngRoute','themeModule']);
	//运行日志	
	coreModule.run(logRunner);

/*
	coreModule.config(['$controllerProvider',function($controllerProvider){
		coreModule.registerCOntroller = $controllerProvider.register;
	}]);
*/
	// 配置路由
	coreModule.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/',{controller:'homeController',
						   templateUrl:'/app/modules/core/view/home.html'})
			.when('/home',{controller:'homeController',
						   templateUrl:'/app/modules/core/view/home.html',
/*
						   resolve:{
						   		load:['$q',function($q){
						   			var defered = $q.defer();
						   			require(['modules/core/controllers/homeController'],function(){
						   				defered.resolve();
						   			});
						   			return defered.promise;
						   		}]
						   }
*/						});
	}]);
	//初始化
	require(['modules/core/controllerReferences'],function(references){
		require(references,function(){
			angular.bootstrap(document,['coreModule']);	
		});
	});
});