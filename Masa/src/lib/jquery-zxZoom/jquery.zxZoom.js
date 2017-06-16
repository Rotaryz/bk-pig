;(function($){
	$.fn.zxZoom = function(option){
		var defaultd = {
				width:400,
				height:300,
				position:'right',
				gap:20,
				
			};
		var opt = $.extend({},defaultd,option);
		
		return this.each(function(){
			
			var ratio;
			var small = $(this);
			var smallImg = small.children('img');
			small.addClass('zx-zoom');

			//建立大图
			var big = $('<div/>').addClass('zx-bigzoom');
			big.css({width:opt.width,height:opt.height});

			var bigImg = $(`<img src="${smallImg.attr('data-big')}">`);
			big.append(bigImg);
			small.after(big);
			if(opt.position === 'right'){
				big.css({top:small.offset().top,left:small.offset().left + small.outerWidth() + opt.gap})
			}else if(opt.position === 'left'){

				var left = small.offset().left - opt.width - opt.gap;
				var top = small.offset().top
				big.css({top:top,left:left})
			}
			
			// 建立放大镜
			var minzoom = $('<span/>').addClass('minzoom');
			small.append(minzoom);

			//绑定移入事件
			small.on('mouseenter',function(){
				bigImg.attr('src',smallImg.attr('data-big'));
				big.show();

				ratio = small.children('img').outerWidth()/bigImg.outerWidth();
				minzoom.css({width:opt.width*ratio,height:opt.height*ratio})
				minzoom.show();
			}).on('mouseleave',function(){
				minzoom.hide();
				big.hide();
			}).on('mousemove',function(e){
				var left = e.pageX-small.offset().left - minzoom.outerWidth()/2;
				var top = e.pageY-small.offset().top - minzoom.outerHeight()/2;
				if(left<0){
					left=0
				}else if(left>small.width()-minzoom.outerWidth()){
					left=small.width()-minzoom.outerWidth();
				};
				if(top<0){
					top=0
				}else if(top>small.height()-minzoom.outerHeight()){
					top=small.height()-minzoom.outerHeight();
				};
			
				minzoom.css({
					left:left,
					top:top
				});
				bigImg.css({
					top:-top/ratio,
					left:-left/ratio
				});
			});

			

		});
	}
})(jQuery);