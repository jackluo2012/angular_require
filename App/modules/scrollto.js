define(['jquery'],function($){
	//创建一个构造函数
	function ScrollTo(opts){
		//将用户参数覆盖
		this.opts = $.extend({},ScrollTo.DEFAULTS,opts);//
		//缓存数据
		this.$el = $('html,body');
	}
	//原型
	ScrollTo.prototype.move = function(){
		//缓存局部模块
		var opts = this.opts;

		this.$el.animate({
			scrollTop:this.opts.dest,
		},opts.speed);
	};
	// 直接上去
	ScrollTo.prototype.go = function(){
		this.$el.scrollTop(this.opts.dest);
	};
	//复值给构造函数
	ScrollTo.DEFAULTS = {
		dest:0,//目的地
		speed:800,//速度
	};
	//返回对象
	return {
		ScrollTo:ScrollTo
	};
});