define(['jquery','scrollto'],function($,scrollto){
	//构造函数
	//el 哪个按钮
	//opts 可选对象
	function BackTop(el,opts){
		//
		this.opts = $.extend({},BackTop.DEFAULTS,opts);
		this.$el = $(el);
		//
		this.scroll = new scrollto.ScrollTo({
			dest:0,
			speed:this.opts.speed
		});
// /		console.log(1212);
//		this._checkPosition();
		if (this.opts.mode=='move') {
			//点击事件
			this.$el.on('click',$.proxy(this._move,this));
		}else{
			this.$el.on('click',$.proxy(this._go,this));
		}
		

		$(window).on('scroll',$.proxy(this._checkPosition,this));
	}
	//初始值　
	BackTop.DEFAULTS = {
		model:'move',
		pos:$(window).height(),
		speed:800
	};
//*	
	//移动
	BackTop.prototype._move = function(){
		this.scroll.move();
	};
//
	BackTop.prototype._go =function(){
		this.scroll.go();
	};
	//检测显示隐藏的
	BackTop.prototype._checkPosition = function(){
		var $el = this.$el;
		if ($(window).scrollTop() >this.opts.pos) {
			$el.fadeIn();
		}else{
			$el.fadeOut();
		}
	};
//*/
	//注册成插件　
	$.fn.extend({
		backtop:function(opts){
			//有好多对象　就注册好几次
			return this.each(function(){
				new BackTop(this,opts);
			});
		}
	})

	return {
		BackTop:BackTop
	}
});