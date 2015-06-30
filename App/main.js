/*
require.config({
	paths:{
		'angular':'../script/angular.min', //引入
		'jquery':'../script/jquery.min', //引入
		'app':'./app',
		'coreModule':'coreModule'
	},
	shim:{
		'angular':{
			deps:['jquery'] //优先加载
		},
		'app':{
			deps:['angular','coreModule'] //模块
		},
		'coreModule':{
			deps:['angular'] //模块
		}
	}
});

//导入模块
require(['app'],function(){
	angular.bootstrap(document,['app']);
});
*/
//*/
require.config({
	paths:{
		'angular':'/script/angular.min', //引入
		'jquery':'/script/jquery.min', //引入
		'angular-route':'/script/angular-route.min', //引入

		// load the modules
		'coreModule':'/app/modules/core/coreModule',
		'themeModule':'/app/modules/theme/themeModule',
		'backtop':'/app/modules/backtop',
		'scrollto':'/app/modules/scrollto',
	},
	shim:{
		'angular':{
			deps:['jquery'] //优先加载
		},
		'angular-route':{
			deps:['angular']
		},
		'coreModule':{
			deps:['angular-route','themeModule'] //模块
		},
		'themeModule':{
			deps:['angular-route'] //模块
		},
		'backtop':{
			deps:['jquery','scrollto']
		}
	}
});

//导入模块

require(['coreModule'],function(){
	//angular.bootstrap(document,['app']);
	//loaded the application
});
//*/
require(['jquery','backtop','scrollto'],function($,backtop,scrollto){
	//原始包装
	/*
	var scroll = new scrollto.ScrollTo({
		dest:0,
		speed:800
	});
	$('#backtop').on('click',$.proxy(scroll.move,scroll));
	*/

	//普通写法
	/*	
	new backtop.BackTop($('#backtop'),{
		mode:'move',
		pos:100,
		speed:2000
	})
	//*/
	//插件写法
//*	
	$('#backtop').backtop({
		mode:'move'
	})
//*/
});